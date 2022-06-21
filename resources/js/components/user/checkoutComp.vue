<template>
    <section class="cart-area section--padding">
        <div class="fullpage" :style="{display:loadDisplayed}"></div>
    <div class="container">
        <form method="post" class="needs-validation pt-4"  novalidate="" @submit.prevent="makepayments">
        <div class="row">
            <div class="col-lg-7">
                <div class="card card-item">
                    <div class="card-body">
                        <h3 class="card-title fs-22 pb-3">Billing Details</h3>
                        <div class="divider"><span></span></div>
                        <div  class="row">
                            <input type="hidden" v-model="courseId">
                            <input type="hidden" v-model="userId">
                            <div class="input-box col-lg-6">
                                <label class="label-text">First Name</label>
                                <div class="form-group">
                                    <input class="form-control form--control" type="text" v-model="fname" placeholder="e.g. Bharat">
                                    <span class="la la-user input-icon"></span>
                                </div>
                                <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.fname" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                            </div><!-- end input-box -->
                            <div class="input-box col-lg-6">
                                <label class="label-text">Last Name</label>
                                <div class="form-group">
                                    <input class="form-control form--control" type="text" v-model="lname" placeholder="e.g. Smith">
                                    <span class="la la-user input-icon"></span>
                                </div>
                                 <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.lname" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                            </div><!-- end input-box -->
                            <div class="input-box col-lg-12">
                                <label class="label-text">Email Address</label>
                                <div class="form-group">
                                    <input class="form-control form--control" type="email" v-model="email" placeholder="e.g. alexsmith@gmail.com">
                                    <span class="la la-envelope input-icon"></span>
                                </div>
                                 <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.email" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                            </div><!-- end input-box -->
                            <div class="input-box col-lg-12">
                                <label class="label-text">Phone Number</label>
                                <div class="form-group">
                                    <input id="phone" class="form-control form--control" type="tel" v-model="phone" placeholder="Phone Number">
                                    <span class="la la-phone input-icon"></span>
                                     <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.phone" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                                </div>
                            </div><!-- end input-box -->
                            <div class="input-box col-lg-12">
                                <label class="label-text">Address</label>
                                <div class="form-group">
                                    <input class="form-control form--control" type="text" v-model="address" placeholder="e.g. 12345 Karol bag New Delhi, India">
                                    <span class="la la-map-marker input-icon"></span>
                                </div>
                                 <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.address" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                            </div><!-- end input-box -->
                            
                        </div>
                    </div><!-- end card-body -->
                </div><!-- end card -->
                
            </div><!-- end col-lg-7 -->
            <div class="col-lg-5">
                <cart-items-names @cartTotal="setTotal"></cart-items-names>
                <div class="card card-item">
                    <div class="card-body">
                        <h3 class="card-title fs-22 pb-3">Order Summary</h3>
                        <div class="divider"><span></span></div>
                        <ul class="generic-list-item generic-list-item-flash fs-15">
                            <!-- <li class="d-flex align-items-center justify-content-between font-weight-semi-bold">
                                <span class="text-black">Original price:</span>
                                <span>$199.99</span>
                            </li>
                            <li class="d-flex align-items-center justify-content-between font-weight-semi-bold">
                                <span class="text-black">Coupon discounts:</span>
                                <span>-$181.99</span>
                            </li>
                            <li class="d-flex align-items-center justify-content-between font-weight-bold">
                                <span class="text-black">Total:</span>
                                <span>$18.99</span>
                            </li> -->
                            <li class="d-flex align-items-center justify-content-between font-weight-bold">
                                <span class="text-black">Total:</span>
                                <span><currency-symbol :priceValue="PayTotal"></currency-symbol></span>
                            </li>
                        </ul>
                        <div class="btn-box border-top border-top-gray pt-3">
                            <!-- <p class="fs-14 lh-22 mb-2"></p> -->
                            <button type="submit" :disabled="btnDisabled" class="btn theme-btn w-100">Proceed <i class="la la-arrow-right icon ml-1"></i></button>
                            <h5 :class="msgclass">{{msg}}</h5>
                        </div>
                    </div><!-- end card-body -->
                </div><!-- end card -->
            </div><!-- end col-lg-5 -->
        </div><!-- end row -->
        </form>
    </div><!-- end container -->
    <!-- Pay View -->
    <div v-html="payview"></div>
    <!-- Pay View -->
</section>
</template>
<script>
Vue.component('cart-items-names', require('./../course/checkoutCartitems.vue').default);

export default {
    data() {
        return {
            fname : "",
            lname : "",
            email : "",
            phone : "",
            address : "",
            // agree : true,
            userId:"",
            courseId : "",
            msgclass:"",
            msg:"",
            error:"",
            btnDisabled:false,
            payview:"",
            loadDisplayed:"none",
            userId: "",
            PayTotal:0,
        }
    },
 
 methods:{
     makepayments(){
                this.msgclass = "text-success";
                this.msg = "Please wait... ";
                this.btnDisabled = true;
                this.loadDisplayed = "block";
                const formdata = new FormData();
                formdata.append("fname",this.fname);
                formdata.append("lname",this.lname);
                formdata.append("email",this.email);
                formdata.append("phone",this.phone);
                formdata.append("address",this.address);
                formdata.append("userId",this.userId);
                formdata.append("courseId",this.courseId);
                // formdata.append("courseId",this.agree);


                axios.post("/payment/checkout-form",formdata)
                .then((data) =>{
                    // console.log(data.data);
                    this.msg = "Please wait redirecting to payment page... ";
                    if (data.data.error) {
                        alert(data.data.error); 
                        this.loadDisplayed = "none";
                        this.msgclass = "text-danger";
                        this.msg = "Cart is empty!";
                        this.$router.push("/course-list");
                    }
                    else if (data.data.auth) {
                        alert(data.data.auth); 
                        this.loadDisplayed = "none";
                        this.msgclass = "text-danger";
                        this.msg = "Session is out Please login!";
                        this.$session.remove("userId");
                        this.$session.destroy();
                        this.$root.$emit("loggedIn",0)
                        this.$router.push("/user-login");
                    }
                    else{
                        // console.log(data.data)
                        window.location = "/payment/payment-checkout-data";
                    }
                    
                })
                .catch(error => {
                    this.msgclass = "text-danger";
                    this.msg = "Please Fix error";
                    this.btnDisabled = false;
                    this.error = error.response.data.errors;
                    this.msg = "Please fill all field! ";
                    this.loadDisplayed = "none";
                })
     },
     setTotal(tPrice){
         this.PayTotal = tPrice;
     }
 },
  beforeCreate(){
        this.$Progress.start();

        if (!this.$session.has("userId") || !this.$session.exists()) {
            this.$router.push("/user-login");
            }
        else{
                // Get userinfo 
                this.userId = this.$session.get("userId");
                axios.get("/single-user-detail/"+this.userId)
                    .then((response) => {
                            if (response.status == 200) {
                                this.fname = response.data.name;
                                this.email = response.data.email;
                                this.phone = response.data.phoneNumber;
                                this.address = "";
                            }
                            else{
                                this.fname = "";
                                this.email = "";
                                this.phone = "";
                                this.address = "";
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                        });

            }
    },
    created(){
        this.$Progress.finish();
    }
 
}
</script>
<style scoped>
    .fullpage {
        height: 100%;
        width: 100%;
        position: fixed;
        background: #0000004d;
        z-index: 9;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>