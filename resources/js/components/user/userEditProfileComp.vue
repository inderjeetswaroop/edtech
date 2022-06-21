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
                        <h3 class="card-title text-center fs-24 lh-35 pb-2">Edit Profile</h3>
                        <div class="text-center">
                            <span class="section-divider"></span>
                        </div>
                        
                        <form method="post" class="needs-validation"  novalidate="" @submit.prevent="registerForm">
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
                                    <input class="form-control form--control" type="text" v-model="userInfo.name" placeholder="First name">
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
                                    <input disabled class="disabled form-control form--control" :value="userInfo.email" type="email"  placeholder="Enter email address">
                                    <span class="la la-envelope input-icon"></span>
                                </div>
                            </div>
                            <div class="input-box">
                                <label class="label-text">Mobile Number</label>
                                <div class="form-group">
                                    <input disabled class="disabled form-control form--control" type="text" :value="userInfo.phoneNumber">
                                    <span class="la la-phone input-icon"></span>
                                </div>
                                 
                            </div>
                            
                            <div class="btn-box">
                                <button :disabled="btnDisabled" class="btn theme-btn" type="submit">Update Profile Info <i class="la la-arrow-right icon ml-1"></i></button>
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
            userInfo: {},
            btnDisabled:false,
            msgclass:"",
            msg:"",
            error:"",
            
        }
    },
    methods: {

        registerForm() {
                this.$Progress.start();
                this.msgclass = "text-success";
                this.msg = "Please wait... ";
                this.btnDisabled = true;
                const formdata = new FormData();
                formdata.append("username",this.userInfo.name);
                axios.post("/update-user-data",formdata)
                .then((data) =>{
                    console.log(data.data);
                    

                this.msg = "Your profile is updated successfully.";
                this.error = "";
                
                })
                .catch(error => {
                    this.msgclass = "text-danger";
                     this.msg = "Please Fix error";
                     this.btnDisabled = false;
                    this.error = error.response.data.errors;
                    // console.log(this.error)
                    if (error == "Error: Request failed with status code 500") {
                        this.msg = "Email or Phone number is already registered. Please try with different Email and Phone NUmber.";
                    }
                    
                })

            this.$Progress.finish();
        },
        
    },
    beforeCreate(){
        this.$Progress.start();

        if (!this.$session.has("userId") || !this.$session.exists()) {
                this.$router.push("/user-login");
            }
        


    },
    created(){
            
            axios.get("/auth-single-user-detail")
            .then((response) => this.userInfo = response.data)
            .catch((error) => console.log(error));  

        this.$Progress.finish();
    }

    
}
</script>