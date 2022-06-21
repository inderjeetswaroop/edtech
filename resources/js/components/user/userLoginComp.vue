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
                    <div class="card-body">
                        <h3 class="card-title text-center fs-24 lh-35 pb-4">Login to Your Account!{{pre}}</h3>
                        <div class="section-block"></div>
                        <form method="post" class="needs-validation pt-4"  novalidate="" @submit.prevent="loginForm">
                            <!-- <div class="d-flex flex-wrap align-items-center pb-4">
                                <button class="btn theme-btn flex-grow-1 mx-2 mb-2"><i class="la la-google mr-2"></i>Google</button>
                                <button class="btn theme-btn flex-grow-1 mx-2 mb-2"><i class="la la-facebook mr-2"></i>Facebook</button>
                                <button class="btn theme-btn flex-grow-1 mx-2 mb-2"><i class="la la-twitter mr-2"></i>Twitter</button>
                            </div>
                            <div class="text-center pt-3 pb-4">
                                <div class="icon-element icon-element-md fs-25 shadow-sm">Or</div>
                            </div> -->
                            <div class="input-box">
                                <label class="label-text">Email </label>
                                <div class="form-group">
                                    <input class="form-control form--control" type="text" v-model="uemail" placeholder="Email or Username">
                                    <input type="hidden" value="signinsignin" v-model="formType">
                                    <span class="la la-user input-icon"></span>
                                </div>
                                <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.userEmail" :key="err" class="text-danger" >
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
                                    <input class="form-control form--control password-field" :type="passwordtype" v-model="upass" placeholder="Password">
                                    <div class="input-group-append">
                                        <button class="btn theme-btn theme-btn-transparent toggle-password" type="button">
                                            <i :class="eyeword"  @click="changepasstype"></i>
                                        </button>
                                    </div>
                                </div>
                                <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.userpass" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                            </div>
                            <div class="btn-box">
                                <div class="d-flex align-items-center justify-content-between pb-4">
                                    <!-- <div class="custom-control custom-checkbox fs-15">
                                        <input type="checkbox" class="custom-control-input" id="rememberMeCheckbox" required>
                                        <label class="custom-control-label custom--control-label" for="rememberMeCheckbox">Remember Me</label>
                                    </div> -->
                                    <router-link to="/password-reset" class="btn-text">Forgot my password?</router-link>
                                </div>
                                <button :disabled="btnDisabled" class="btn theme-btn" type="submit">Login Account <i class="la la-arrow-right icon ml-1"></i></button>
                                <h4 :class="msgclass">{{msg}}</h4>
                                <p class="fs-14 pt-2">Don't have an account? <router-link :to="'/user-registration'" class="text-color hover-underline">Register</router-link> </p>
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
            uemail:"",
            upass:"",
            formType:"",
            btnDisabled:false,
            msgclass:"",
            msg:"",
            error:"",
            passwordtype:"password",
            eyeword:"la la-eye",
            pre:"",
        }
    },
    methods:{
        loginForm(){

                this.msgclass = "text-success";
                this.msg = "Please wait... ";
                this.btnDisabled = true;
                const formdata = new FormData();
                formdata.append("userEmail",this.uemail);
                formdata.append("userpass",this.upass);

                axios.post("/user-login-data",formdata)
                .then((data) =>{
                    // console.log(data.data);
                    this.$session.start();
                    this.$session.set("userId",data.data);
                    // alert(this.$session.get("userId"));
                    
                    this.msg = "You are logged in Successfully. Please Wait ...";
                    this.error = "";

                    this.$root.$emit("loggedIn",1)
                    // redirect to mycourse
                    // this.pre = this.$router.go(0);
                    this.$router.go(0);
                    // alert(this.$router.go(-1));
                    // this.$router.push("/my-course");
                
                })
                .catch(error => {
                    this.msgclass = "text-danger";
                    this.msg = "Please Fix error";
                    this.btnDisabled = false;
                    this.error = error.response.data.errors;
                    this.msg = "Wrong Credentials! Please Enter Correct Email and Password";
                })
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
    }
}
</script>