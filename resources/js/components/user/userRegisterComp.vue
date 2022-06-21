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
                    <div class="card-body p-4">
                        <h3 class="card-title text-center fs-24 lh-35 pb-2">Create an Account and Start Learning!</h3>
                        <div class="text-center">
                            <span class="section-divider"></span>
                        </div>
                        
                        <form method="post" class="needs-validation"  novalidate="" @submit.prevent="registerForm">
                            <input class="form-control form--control" type="hidden" v-model="uphone" placeholder="Enter Mobile Number" disabled >
                            <!-- <div class="d-flex flex-wrap align-items-center pb-4">
                                <button class="btn theme-btn flex-grow-1 mx-2 mb-2"><i class="la la-google mr-2"></i>Google</button>
                                <button class="btn theme-btn flex-grow-1 mx-2 mb-2"><i class="la la-facebook mr-2"></i>Facebook</button>
                                <button class="btn theme-btn flex-grow-1 mx-2 mb-2"><i class="la la-twitter mr-2"></i>Twitter</button>
                            </div> -->
                            <!-- <div class="text-center pt-3 pb-4">
                                <div class="icon-element icon-element-md fs-25 shadow-sm">Or</div>
                            </div> -->
                            <div class="input-box">
                                <label class="label-text">Full Name</label>
                                <div class="form-group">
                                    <input class="form-control form--control" type="text" v-model="fullname" placeholder="First name">
                                    <span class="la la-user input-icon"></span>
                                </div>
                                <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.username" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                            </div>
                            <div class="input-box">
                                <label class="label-text">Email Address</label>
                                <div class="form-group">
                                    <input class="form-control form--control" type="email" v-model="uemail" placeholder="Enter email address">
                                    <span class="la la-envelope input-icon"></span>
                                </div>
                                <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.useremail" :key="err" class="text-danger">
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                            </div>
                            <div class="input-box">
                                <label class="label-text">Mobile Number</label>
                                <div class="form-group">
                                    <input class="form-control form--control" type="text" v-model="uphonedummy" placeholder="Enter Mobile Number" disabled >
                                    <span class="la la-phone input-icon"></span>
                                </div>
                                 <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.userphone" :key="err" class="text-danger">
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                            </div>
                            <div class="input-box">
                                <label class="label-text">Password</label>
                                <div class="input-group mb-3">
                                    <span class="la la-lock input-icon"></span>
                                    <input class="form-control form--control password-field" :type="passwordtype" v-model="upassword" placeholder="Password">
                                    <div class="input-group-append">
                                        <button class="btn theme-btn theme-btn-transparent toggle-password" type="button">
                                            <i :class="eyeword"  @click="changepasstype"></i>
                                            
                                        </button>
                                    </div>
                                </div>
                                 <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.userpass" :key="err" class="text-danger">
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                            </div>
                            <div class="btn-box">
                                <!-- <div class="custom-control custom-checkbox mb-2 fs-15">
                                    <input type="checkbox" class="custom-control-input" id="receiveCheckbox" required>
                                    <label class="custom-control-label custom--control-label lh-20" for="receiveCheckbox">Yes! I want to get the most out of Aduca by receiving emails with exclusive deals, personal recommendations and learning tips!</label>
                                </div> -->
                                <!-- <div class="custom-control custom-checkbox mb-4 fs-15">
                                    <input type="checkbox" class="custom-control-input" id="agreeCheckbox" required>
                                    <label class="custom-control-label custom--control-label" for="agreeCheckbox">by signing i agree to the
                                        <a href="terms-and-conditions.html" class="text-color hover-underline">terms and conditions</a> and
                                        <a href="privacy-policy.html" class="text-color hover-underline">privacy policy</a>
                                    </label>
                                </div> -->
                                <button :disabled="btnDisabled" class="btn theme-btn" type="submit">Register Account <i class="la la-arrow-right icon ml-1"></i></button>
                                <h4 :class="msgclass" class="mt-3">{{msg}}</h4>
                                <p class="fs-14 pt-2">Already have an account? <router-link :to="'/user-login'" class="text-color hover-underline">Login</router-link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>
export default {
    data(){
        return {
            fullname:"",
            uemail:"",
            uphone:"",
            uphonedummy:"",
            upassword:"",
            btnDisabled:false,
            msgclass:"",
            msg:"",
            error:"",
            passwordtype:"password",
            eyeword:"la la-eye",
        }
    },
    methods: {

        registerForm() {
                this.$Progress.start();
                this.msgclass = "text-success";
                this.msg = "Please wait... ";
                this.btnDisabled = true;
                const formdata = new FormData();
                formdata.append("username",this.fullname);
                formdata.append("useremail",this.uemail);
                formdata.append("userphone",this.uphone);
                formdata.append("userpass",this.upassword);
                axios.post("/user-register-data",formdata)
                .then((data) =>{
                    this.msg = "You are registered Successfully. Please Wait ... your are redirecting to login page";
                    this.error = "";
                    this.$router.push("/user-login");
                
                })
                .catch(error => {
                    this.msgclass = "text-danger";
                     this.msg = "Please Fix error";
                     this.btnDisabled = false;
                     console.log(error);
                    this.error = error.response.data.errors;
                    if (error == "Error: Request failed with status code 500") {
                        this.msg = "Email or Phone number is already registered. Please try with different Email and Phone NUmber.";
                    }
                    
                })
                this.$Progress.finish();
        },
        changepasstype(){
            
            this.passwordtype = this.passwordtype === "password" ? "text" :"password";
            this.eyeword = this.eyeword === "la la-eye" ? "la la-eye-slash" :"la la-eye";

        }
    },
    beforeCreate(){
        this.$Progress.start();
        
        if (this.$session.has("userId") || this.$session.exists()) {
            if (this.$session.has("userId")) {
                this.$router.push("/my-course");    
            }
            
        }

        


    },
    created(){

        this.$Progress.finish();
        if (this.$session.has("userRegPhone")) {
            this.uphonedummy = this.uphone = this.$session.get("userRegPhone");
            
        }
        else{
            this.$router.push("/user-registration");    
        }
    }

    
}
</script>