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
                        <h3 class="card-title text-center fs-24 lh-35 pb-2">Password Update : Edit Profile</h3>
                        <div class="text-center">
                            <span class="section-divider"></span>
                        </div>
                        
                        <form method="post" class="needs-validation"  novalidate="" @submit.prevent="registerForm">
                           <div class="input-box">
                                <label class="label-text">Password</label>
                                <div class="input-group mb-3">
                                    <span class="la la-lock input-icon"></span>
                                    <input class="form-control form--control password-field" :type="passwordtype" v-model="upassword" placeholder="Enter Password">
                                    <div class="input-group-append">
                                        <button class="btn theme-btn theme-btn-transparent toggle-password" type="button">
                                            <i :class="eyeword"  @click="changepasstype"></i>
                                            
                                        </button>
                                    </div>
                                </div>
                                 <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.userPassword" :key="err" class="text-danger">
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                            </div>
                             <div class="input-box">
                                <label class="label-text">Confirm Password</label>
                                <div class="input-group mb-3">
                                    <span class="la la-lock input-icon"></span>
                                    <input class="form-control form--control password-field" :type="passwordtype" v-model="upassword2" placeholder="Enter Confirm Password">
                                    <div class="input-group-append">
                                        <button class="btn theme-btn theme-btn-transparent toggle-password" type="button">
                                            <i :class="eyeword"  @click="changepasstype"></i>
                                            
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div class="btn-box">
                                <button :disabled="btnDisabled" class="btn theme-btn" type="submit">Update Password <i class="la la-arrow-right icon ml-1"></i></button>
                                <h4 :class="msgclass">{{msg}}</h4>
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
            
            btnDisabled:false,
            msgclass:"",
            msg:"",
            error:"",
            upassword:"",
            upassword2:"",
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
                if (this.upassword == this.upassword2) {
                    const formdata = new FormData();
                    formdata.append("userPassword",this.upassword);
                    axios.post("/update-user-password-data",formdata)
                    .then((data) =>{
                    data.data;
                    this.msg = "Your Password is updated successfully.";
                    this.error = "";
                    
                    })
                    .catch(error => {
                        this.msgclass = "text-danger";
                        this.msg = "Please Fix error";
                        this.btnDisabled = false;
                        this.error = error.response.data.errors;
                        // console.log(this.error)
                        if (error == "Error: Request failed with status code 500") {
                            this.msg = "Something wrong Please trt again. Please try again";
                        }
                        
                    })
                }
                else{
                        this.msgclass = "text-danger";
                        this.msg = "Password did not match : Please Enter same password in confirm password";
                        this.btnDisabled = false;
                        
                }
                

            this.$Progress.finish();
            
        },
        changepasstype(){
            
            this.passwordtype = this.passwordtype === "password" ? "text" :"password";
            this.eyeword = this.eyeword === "la la-eye" ? "la la-eye-slash" :"la la-eye";

        }
        
    },
    beforeCreate(){
        this.$Progress.start();

        if (!this.$session.has("userId") || !this.$session.exists()) {
                this.$router.push("/user-login");
            }
        


    },
    created(){
           
        this.$Progress.finish();
    }

    
}
</script>