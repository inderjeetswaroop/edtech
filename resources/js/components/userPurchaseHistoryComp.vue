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
                        <button @click="accessStatus(pays.id)" :class="pays.paymentStatus == 1 ? 'btn-success' : 'btn-danger'" class="btn">
                            {{ pays.paymentStatus == 1 ? 'Block Access' : 'Allow Access' }}
                        </button>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
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
            }
    }

    
}
</script>