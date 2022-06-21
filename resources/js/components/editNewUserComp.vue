<template>
        <!-- The Modal -->
        <div class="modal" id="editUserId">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Edit User Info</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                          <form method="post" class="needs-validation pt-4"  novalidate="" @submit.prevent="editUserForm">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fullName">Full Name:</label>
                                        <input type="hidden" v-model="userInformation.id">
                                        <input type="text" class="form-control" placeholder="Enter Full Name" id="fullName" v-model="userInformation.name">
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
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="email">Email address:</label>
                                        <input type="email" class="form-control" placeholder="Enter email" id="email"  v-model="userInformation.email">
                                        <label class="form-check-label ml-4">
                                            <input  v-model="userInformation.emailVerified" class="form-check-input" type="checkbox"> Email Verified
                                        </label>
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
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="phone">Phone Number:</label>
                                        <input type="text" class="form-control" placeholder="Enter Phone Number" id="phone"  v-model="userInformation.phoneNumber">
                                        <label class="form-check-label ml-4">
                                            <input v-model="userInformation.mobileVerified" class="form-check-input" type="checkbox"> Mobile Verified
                                        </label>
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
                                </div>
                                
                            </div>
                            
                            
                            
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>  
                        <hr>
                        <form method="post" class="needs-validation pt-4"  novalidate="" @submit.prevent="updateUserPassword">
                             <div class="form-group">
                                <label for="phone">Update Password <span class="text-danger">(Note : Old password can not be visible)</span>:</label>
                                <input type="hidden" v-model="userInformation.id">
                                <input type="text" class="form-control" placeholder="Enter New Password" id="phone"  v-model="userInformation.password">
                                <div v-if="error">
                                    
                                    <ul>
                                        <li v-for="err of error.userphone" :key="err" class="text-danger">
                                            {{err}}
                                        </li>
                                    </ul>
                                </div>
                            <!-- Error msg -->
                            </div>
                            <button type="submit" class="btn btn-primary">Update Password</button>
                            
                        </form>



                    </div>
                    <h4 :class="msgclass">{{msg}}</h4>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger btn-xs" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
</template>
<script>
export default {
    props:["userInformation"],
    data(){
        return {
            msg:"",
            error:"",
            msgclass:"",
            

        }
    },
    methods:{
        editUserForm(){
                this.msgclass = "text-success";
                this.msg = "Please wait... ";
                const formdata = new FormData();
                formdata.append("username",this.userInformation.name);
                formdata.append("userid",this.userInformation.id);
                formdata.append("useremail",this.userInformation.email);
                formdata.append("userphone",this.userInformation.phoneNumber);
                formdata.append("uphoneVerified",this.userInformation.mobileVerified);
                formdata.append("uemailVerified",this.userInformation.emailVerifyCode);
                axios.post("/account/customer/user-edit-data",formdata)
                .then((data) =>{
                    console.log(data.data);
                
                this.msg = "User updated Successfully. ";
                this.error = "";
                
                })
                .catch(error => {
                    this.msgclass = "text-danger";
                     this.msg = "Please Fix error";
                     this.btnDisabled = false;
                    this.error = error.response.data.errors;
                    if (error == "Error: Request failed with status code 500") {
                        this.msg = "Please Check details Properly";
                    }
                    
                })
        },
        updateUserPassword(){
                this.msgclass = "text-success";
                this.msg = "Please wait... ";

                const formdata = new FormData();
                formdata.append("password",this.userInformation.password);
                formdata.append("userid",this.userInformation.id);
                
                axios.post("/account/customer/updated-user-password-data",formdata)
                .then((data) =>{
                    console.log(data.data);
                
                this.msg = "User Password updated Successfully.";
                this.error = "";
                
                })
                .catch(error => {
                    this.msgclass = "text-danger";
                     this.msg = "Please Fix error";
                     this.btnDisabled = false;
                    this.error = error.response.data.errors;
                    if (error == "Error: Request failed with status code 500") {
                        this.msg = "Please Check details Properly";
                    }
                    
                })
        }
    }

}
</script>