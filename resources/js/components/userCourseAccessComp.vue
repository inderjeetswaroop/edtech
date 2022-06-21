<template>
    <div>
        <!-- The Modal -->
        <div class="modal" id="courseAccess">
            <div class="modal-dialog">
                <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Create Course Access for Student</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <form method="post" class="needs-validation pt-4"  novalidate="" @submit.prevent="createCourseAccess">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fullName">Choose Course Name:</label>
                                        <select v-model="coursename" id="" class="form-control">
                                            <option value="0">Select Course</option>
                                            <option v-for="courses in courseList" :key="courses.id" :value="courses.id">{{courses.courseName}}</option>
                                        </select>
                                        <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.courseName" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fullName">Course Amount:</label>
                                        <input type="text" class="form-control" placeholder="Enter Course Amount" id="fullName" v-model="camount" required>
                                        <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.cAmount" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fullName">First Name:</label>
                                        <input type="text" class="form-control" placeholder="Enter First Name" id="fullName" v-model="ufname" required>
                                        <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.userFname" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fullName">Last Name:</label>
                                        <input type="text" class="form-control" placeholder="Enter Last Name" id="fullName" v-model="ulname" required>
                                        <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.userLname" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fullName">email:</label>
                                        <input type="email" class="form-control" placeholder="Enter Email Name" id="fullName" v-model="uemail" required>
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
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fullName">Phone Name:</label>
                                        <input type="text" class="form-control" placeholder="Enter Phone Name" id="fullName" v-model="uphone" required>
                                        <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.userPhone" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fullName">Course Access Start Date:</label>
                                        <input type="datetime-local" class="form-control" placeholder="Choose Start date" id="fullName" v-model="startdate" required>
                                        <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.startDate" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fullName">Course Access End Date:</label>
                                        <input type="datetime-local" class="form-control" placeholder="Enter First Name" id="fullName" v-model="enddate" required>
                                        <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.endDate" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    <!-- Error msg -->
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fullName">Payment Note(Optional):</label>
                                        <input type="text" class="form-control" placeholder="Enter First Name" id="fullName" v-model="paymentnote">
                                        <!-- Error msg -->
                                        <div v-if="error">
                                            
                                            <ul>
                                                <li v-for="err of error.paymentNote" :key="err" class="text-danger" >
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
                    <h4 :class="msgclass">{{msg}}</h4>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-xs btn-danger" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["userinfo"],
    data(){
        return {
            
            userid:this.userinfo,
            courseList:{},
            userInformation:{},
            ufname:"",
            ulname:"",
            uemail:"",
            uphone:"",
            startdate:"",
            enddate:"",
            error:"",
            paymentnote:"",
            coursename:"0",
            camount:"",
            msgclass:"",
            msg:"",

        }
    },
    created(){
        // all Course
        axios.get("/course-dashboard/courses-list")
            .then((response) => this.courseList = response.data)
            .catch((error) => console.log(error));

        // Single User Info
        axios.get("/single-user-detail/"+this.userid)
            .then((response) => {
                this.userInformation = response.data;
                this.ufname = this.userInformation.name;
                this.ulname = this.userInformation.name;
                this.uemail = this.userInformation.email;
                this.uphone = this.userInformation.phoneNumber;
            })
            .catch((error) => console.log(error));
           
    },
    methods:{
        createCourseAccess() {
            this.msgclass = "text-success";
            this.msg = "Please wait... ";
            if (this.coursename != 0) {
                const formdata = new FormData();
                formdata.append("userFname",this.ufname);
                formdata.append("userLname",this.ulname);
                formdata.append("courseName",this.coursename);
                formdata.append("cAmount",this.camount);
                formdata.append("userEmail",this.uemail);
                formdata.append("userPhone",this.uphone);
                formdata.append("startDate",this.startdate);
                formdata.append("endDate",this.enddate);
                formdata.append("paymentNote",this.paymentnote);
                formdata.append("userId",this.userid);
                axios.post("/account/customer/user-course-access-data",formdata)
                    .then((data) =>{
                    //   console.log(data.data.error)      
                      if (data.data.error == "yes") {
                         this.msgclass = "text-danger";
                        this.msg = data.data.auth;
                      }
                      else{
                        
                        this.msg = "Course Access created Successfully.";
                        this.error = "";
                        
                      }
                    
                    
                    })
                    .catch(error => {
                        this.error = error.response.data.errors;
                        // console.log(error)
                        this.msgclass = "text-danger";
                        this.msg = "Please Fix error";
                        
                    })  
            }
            else{
                
                        this.msgclass = "text-danger";
                        this.msg = "Please select a course";
            }
            
        }
    }

}
</script>