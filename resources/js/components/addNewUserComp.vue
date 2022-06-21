<template>
        <!-- The Modal -->
        <div class="modal" id="addUserId">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Add New User</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                          <form method="post" class="needs-validation pt-4"  novalidate="" @submit.prevent="addUserForm">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fullName">Full Name:</label>
                                        <input type="text" class="form-control" placeholder="Enter Full Name" id="fullName" v-model="uname">
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
                                        <input type="email" class="form-control" placeholder="Enter email" id="email" v-model="uemail">
                                        <label class="form-check-label ml-4">
                                            <input :checked="uemailVerified" class="form-check-input" type="checkbox" v-model="uemailVerified"> Email Verified
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
                                        <input type="text" class="form-control" placeholder="Enter Phone Number" id="phone" v-model="uphone">
                                        <label class="form-check-label ml-4">
                                            <input :checked="uphoneVerified" class="form-check-input" type="checkbox" v-model="uphoneVerified"> Mobile Verified
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
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="pwd">Password:</label>
                                        <input type="text" class="form-control" placeholder="Enter password" id="pwd" v-model="upass">
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
                                </div>
                                
                            </div>
                            
                            
                            
                            <button type="submit" class="btn btn-primary">Submit</button>
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
    data(){
        return {
            uname:"",
            uemail:"",
            uphone:"",
            upass:"",
            uphoneVerified:true,
            uemailVerified:true,
            msg:"",
            error:"",
            msgclass:""
        }
    },
    methods:{
        addUserForm(){
                this.msgclass = "text-success";
                this.msg = "Please wait... ";
                const formdata = new FormData();
                formdata.append("username",this.uname);
                formdata.append("userpass",this.upass);
                formdata.append("useremail",this.uemail);
                formdata.append("userphone",this.uphone);
                formdata.append("uphoneVerified",this.uphoneVerified);
                formdata.append("uemailVerified",this.uemailVerified);
                axios.post("/user-register-data",formdata)
                .then((data) =>{
                    this.$emit("UserAdded",data);
                    this.uname="";
                    this.uemail="";
                    this.uphone="";
                    this.upass="";
                
                this.msg = "User added Successfully. Please Wait ...";
                this.error = "";
                
                })
                .catch(error => {
                    this.msgclass = "text-danger";
                     this.msg = "Please Fix error";
                     this.btnDisabled = false;
                    this.error = error.response.data.errors;
                    if (error == "Error: Request failed with status code 500") {
                        this.msg = "Email or Phone number is already registered. Please try with different Email and Phone NUmber.";
                    }
                    
                })
        }
    }

}
</script>