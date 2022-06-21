<template>
     <section class="contact-area section--padding position-relative">
    <span class="ring-shape ring-shape-1"></span>
    <span class="ring-shape ring-shape-2"></span>
    <span class="ring-shape ring-shape-3"></span>
    <span class="ring-shape ring-shape-4"></span>
    <span class="ring-shape ring-shape-5"></span>
    <span class="ring-shape ring-shape-6"></span>
    <span class="ring-shape ring-shape-7"></span>
    <div class="container">
        <div class="row">
            <div class="col-lg-7 mx-auto">
                <div class="card card-item">
                    <div class="card-body p-5">
                         <h3 class="card-title text-center fs-24 lh-35 pb-2">Reset Password!</h3>
                        <div class="text-center">
                            <span class="section-divider"></span>
                            
                        </div>
                        <p class="fs-15 lh-24 pb-3">Enter the registered phone number of your account to reset password. Then reset password using OTP</p>
                        <form method="post" class="needs-validation pt-4"  novalidate="" @submit.prevent="resetpassword">
                            <div class="input-box ">
                                <label class="label-text">Enter 10 Digit Phone Number</label>
                                <div class="form-group">
                                    <input class="form-control form--control" type="number" v-model="phoneNum" placeholder="Enter 10 Digit Phone Number" :disabled="phoneBox">
                                    <span class="la la-phone input-icon"></span>
                                </div>
                                 <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.userphone" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                            </div>
                            <div v-if="otpbox == 'none'" class="btn-box">
                               <button :disabled="btnDisabled" class="btn theme-btn" type="submit">Send OTP <i class="la la-arrow-right icon ml-1"></i></button>
                                <h4 :class="msgclass">{{msg}}</h4>
                            </div>

                             
                        </form>
                        <div v-if="otpbox != 'none'" class="input-box ">
                            <label class="label-text">Enter OTP</label>
                            <div class="form-group">
                                <input class="form-control form--control" type="number" v-model="verifyOTP" placeholder="Enter OTP" >
                                <span class="la la-lock input-icon"></span>
                            </div>
                            <my-countdown @timerEnd="setNewOTP" v-bind:end="testTime"></my-countdown>
                        </div>
                         <div v-if="otpbox != 'none'" class="btn-box">
                            <button class="btn theme-btn" @click="checkMyOTP">Verify OTP <i class="la la-arrow-right icon ml-1"></i></button>
                            <h4 :class="msgclass">{{msg}}</h4>
                        </div>  
                          
                        <!-- Links -->
                        <div class="d-flex align-items-center justify-content-between fs-14 pt-2">
                            <router-link :to="'/user-login'" class="text-color hover-underline">Login</router-link>
                            <p>Not a member? <router-link :to="'/user-registration'" class="text-color hover-underline">Register</router-link></p>
                        </div>
                        <!-- Links -->

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>
Vue.component('my-countdown', require('./mycountdownComp.vue').default);
export default {
   data(){
       return {
           phoneNum:"",
           phoneOtp:"",
           verifyOTP:"",
           otpbox:"none",
           phoneBox:false,
           msgclass:"",
           msg:"",
           btnDisabled:false,
           error:"",
           testTime:"",
       }
   },
   methods: {
        resetpassword(){
            this.$Progress.start();
                this.msgclass = "text-success";
                this.msg = "Please wait... ";
                this.phoneBox = true;
                this.btnDisabled = true;
                const formdata = new FormData();
                formdata.append("userphone",this.phoneNum);
                axios.post("/user-password-reset-otp",formdata)
                .then((data) =>{
                    // console.log(data.data);
                    var result = data.data;
                    if (result =='try' || result == 'notFound') {
                        if (result == 'try') {
                            this.msg = "wrong phone format! Please try again with correct phone number.";
                        }
                        else{
                            this.msg = "Phone Number is not registred.";
                        }
                        
                        this.error = "Fix Error";
                        this.otpbox ="none";
                        this.phoneBox = false;
                        this.btnDisabled = false;
                    }
                    
                    else {
                        var dt = new Date();
                        this.testing =  dt.setMinutes( dt.getMinutes() + 1 );
                        this.testTime = new Date(this.testing).toString().split('GMT')[0];
                        this.phoneOtp = data.data;
                        this.$session.start();
                        this.$session.remove("userRegPhone")
                        this.$session.set("userRegPhone",this.phoneNum);
                        this.otpbox =""
                        this.msg = "Please Enter OTP to verify phone number";
                        this.error = "";
                    }
                    
                })
                .catch(error => {
                    this.msgclass = "text-danger";
                     this.msg = "Please Fix error";
                     this.btnDisabled = false;
                     this.otpbox ="none";
                    this.phoneBox = false;
                    //  console.log(error);
                    this.error = error.response.data.errors;
                    /* if (error == "Error: Request failed with status code 500") {
                        this.msg = "Email or Phone number is already registered. Please try with different Email and Phone NUmber.";
                    } */
                    
                })
                this.$Progress.finish();
        },
        checkMyOTP(){
            if(this.phoneOtp == this.verifyOTP){
                
                this.$router.push("/change-password");
                
            }
            else{
                this.msgclass = "text-danger";
                this.msg = "Please enter Correct OTP!";
            }
        },
        setNewOTP(){
            this.otpbox ="none";
            this.btnDisabled= false;
            this.phoneBox = false;
            this.msg = "";
            this.error = "";
        }
   },
    beforeCreate(){
        this.$Progress.start();

        if (this.$session.has("userId")) {
            this.$router.push("/my-course");
        }
        


    },
    created(){
        this.$Progress.finish();
    }
}
</script>
<style scoped>
    /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

        /* Firefox */
        input[type=number] {
        -moz-appearance: textfield;
        }
</style>