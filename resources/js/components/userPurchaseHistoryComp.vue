<template>
    <div>
        <course-access-modal :userinfo="usrid"></course-access-modal>
        <a href="/account/customer/user-list" class="btn btn-danger btn-xs">Back To List</a>
        <button class="btn btn-success btn-xs float-right" data-toggle="modal" data-target="#courseAccess"> + Create Course Access</button>
        <br><br>
        <hr>
        <div class="table-responsive">
            <table class="table">
            <thead>
                <tr class="bg-primary px-2">
                    <th>ID</th>
                    <th>Item</th>
                    <th>Amount</th>
                    <th>Access Start Date</th>
                    <th>Access End Date</th>
                    <th>Payment Date</th>
                    <th>Pay Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pays in payments" :key="pays.id">
                    <td>#{{pays.id}}</td>
                    <td>
                        <single-course :cid="pays.courseId"></single-course>
                        
                    </td>
                    <td><currency-symbol :priceValue="pays.amount"></currency-symbol></td>
                    <td>{{pays.accessFrom}}</td>
                    <td>{{pays.accessTo}}</td>
                    <td>{{pays.created_at.replace(/T/g," ").replace(/.000000Z/g," ")}}</td>
                    <td>
                        <span v-if="pays.paymentStatus == 1" class="badge badge-success">Success</span>
                        <span v-else class="badge badge-danger">Failed</span>
                    </td>
                    <td>
                        <div class="btn-group">
                            <button class="btn btn-info btn-xs" data-toggle="modal" data-target="#editpurchase" @click="getpurchaseInfo(pays.id)">
                                Edit
                            </button>
                            <button @click="accessStatus(pays.id)" :class="pays.paymentStatus == 1 ? 'btn-success' : 'btn-danger'" class="btn btn-xs">
                                {{ pays.paymentStatus == 1 ? 'Block Access' : 'Allow Access' }}
                            </button>
                        </div>   
                        
                    </td>
                </tr>
            </tbody>
            </table>
        </div>

        <!-- The Modal -->
        <div class="modal" id="editpurchase">
            <div class="modal-dialog">
                <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Edit Purchase</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <!-- Form Content -->
                        <form method="post" class="needs-validation pt-4"  novalidate="" @submit.prevent="updatePurchase">
                            <div class="row">
                                
                                
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fullName">Course Access Start Date:</label>
                                        <input type="datetime-local" class="form-control" placeholder="Choose Start date" id="fullName" v-model="paymentsInfo.accessFrom" required>
                                        <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.startDate" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fullName">Course Access End Date:</label>
                                        <input type="datetime-local" class="form-control" placeholder="Enter First Name" id="fullName" v-model="paymentsInfo.accessTo" required>
                                        <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.endDate" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fullName">Course Amount:</label>
                                        <input type="text" class="form-control" placeholder="Enter Course Amount" id="fullName" v-model="paymentsInfo.amount" required>
                                        <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.cAmount" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fullName">Payment Note(Optional):</label>
                                        <input type="text" class="form-control" placeholder="Enter First Name" id="fullName" v-model="paymentsInfo.description">
                                        <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.paymentNote" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                            <h3 :class="msgclass">{{msg}}</h3>
                    </form>
                    <!-- form Content -->
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
        </div>
        <!-- The modal -->
    </div>
</template>
<script>
Vue.component('single-course', require('./singleCourseDetailComp.vue').default);
Vue.component('course-access-modal', require('./userCourseAccessComp.vue').default);
export default {
    props:["usrid"],
    data(){
        return {
            userId:this.usrid,
            payments: {},
            paymentsInfo:{},
            pId:"",
            error:"",
            msgclass:"",
            msg:"",
        }
    },
     created(){

         axios.get("/account/customer/user-payment-history/"+this.userId)
            .then((response) => this.payments = response.data)
            .catch((error) => console.log(error));  
        // 
        this.$Progress.finish();
        // 


    },
    methods:{
            accessStatus(paysid) {
                axios.get("/account/customer/access-status-change/"+paysid)
                .then((response) => {
                    if (response.data.status == 'yes') {
                        window.location.reload(); 
                    }
                    else{
                        alert("Status is not changed! Please Try again")
                    }
                })
                .catch((error) => console.log(error));      
            },
            getpurchaseInfo(paysId){
                this.pId = paysId;
                axios.get("/account/customer/single-payment-info/"+paysId)
                .then((response) => {
                    this.paymentsInfo = response.data;
                })
                .catch((error) => console.log(error));
            },
            updatePurchase() {
                this.msgclass = "text-success";
                this.msg = "Please wait...";
                const formdata = new FormData();
                formdata.append("cAmount",this.paymentsInfo.amount);
                formdata.append("startDate",this.paymentsInfo.accessFrom);
                formdata.append("endDate",this.paymentsInfo.accessTo);
                formdata.append("paymentNote",this.paymentsInfo.description);
                formdata.append("payId",this.pId);
                axios.post("/account/customer/update-single-payment-info",formdata)
                    .then((data) =>{
                        this.msgclass = "text-success";
                        this.msg = "Payment Info is updated";
                        this.payments = data.data;
                      
                    })
                    .catch(error => {
                        this.error = error.response.data.errors;
                        // console.log(error)
                        this.msgclass = "text-danger";
                        this.msg = "Please Fix error";
                        
                    })  
            }
    }

    
}
</script>