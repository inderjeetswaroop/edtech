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
                         <h3 class="card-title text-center fs-24 lh-35 pb-2">Chnage Your password!</h3>
                        <div class="text-center">
                            <span class="section-divider"></span>
                            
                        </div>
                        
                        <form method="post" class="needs-validation pt-4"  novalidate="" @submit.prevent="changepassword">
                            <div class="input-box ">
                                <div class="form-group">
                                    <input class="form-control form--control disabled" v-model="uphonedummy" type="text" placeholder="Enter 10 Digit Phone Number" disabled>
                                    <input  v-model="uphone" type="hidden">
                                    
                                    <span class="la la-phone input-icon"></span>
                                </div>
                            </div>
                            <div class="input-box ">
                                <label class="label-text">Enter New Password</label>
                                <div class="form-group">
                                    <input class="form-control form--control" :type="boxType" v-model="passwordone" placeholder="Enter New Password" >
                                    <span class="la la-lock input-icon"></span>
                                </div>
                                 <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.passwordOne" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                            </div>
                            <div class="input-box ">
                                <label class="label-text">Enter Password Again</label>
                                <div class="form-group">
                                    <input class="form-control form--control" :type="boxType" v-model="passwordtwo" placeholder="Enter Password Again" @keyup="passwordMatch" @keydown="passwordMatch">
                                    <span class="la la-lock input-icon"></span>
                                </div>
                            </div>
                            <div class="btn-box">
                                <div class="d-flex align-items-center justify-content-between pb-4">
                                    <div class="custom-control custom-checkbox fs-15">
                                        <input type="checkbox" v-model="showMe" class="custom-control-input" id="showPassCheckbox" @change="showPassword">
                                        <label class="custom-control-label custom--control-label" for="showPassCheckbox">Show Passwords</label>
                                    </div>
                                    
                                </div>



                                <button :disabled="btnDisabled" class="btn theme-btn" type="submit">Reset Password <i class="la la-arrow-right icon ml-1"></i></button>
                                <h4 :class="msgclass">{{msg}}</h4>
                            </div>
                        </form>
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
export default {
  data(){
      return{
          passwordone:"",
          passwordtwo:"",
          btnDisabled:true,
          msgclass:"",
          msg:"",
          error:"",
          boxType:"password",
          showMe:false,
          uphonedummy:"",
          uphone:"",
      }
  },
  methods:{
      showPassword(){
          if (this.showMe == true) {
              this.boxType = "text";
          }
          else{
              this.boxType = "password";
          }
      },
      passwordMatch(){
            if (this.passwordone == this.passwordtwo ) {
                this.btnDisabled=false;
                this.msgclass="";
                this.msg="";
            }
            else{
                this.btnDisabled=true;
                this.msgclass="text-danger";
                this.msg="Password does not match";
            }
      },
      changepassword(){
                 
                this.msgclass="text-success";
                this.msg="Please wait ...";
                const formdata = new FormData();
                formdata.append("userphone",this.uphone);
                formdata.append("passwordOne",this.passwordone);
                axios.post("/change-password",formdata)
                .then((data) =>{
                    if (data.data == 'success') {
                        alert("Password Reset successfully... Please wait for login page!");
                        this.msg="Password Reset successfully... Please wait for login page!";

                        this.$router.push("/user-login");    
                    }
                    else{
                         this.msgclass="text-danger";
                         this.msg="Password is not reset... Please Try again!";
                    }
                })
                .catch(error=>{
                    console.log(error);
                    this.msgclass="text-danger";
                    this.msg="Please Fix Error";
                    this.error = error.response.data.errors;
                })
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
            this.$router.push("/password-reset");    
        }
    }


}
</script>


