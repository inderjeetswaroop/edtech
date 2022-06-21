<template>
    <section class="register-area section-padding dot-bg overflow-hidden">
    <div class="container">
        <div class="row">
            <div class="col-lg-5">
                <div class="card card-item">
                    <div class="card-body">
                        <h3 class="fs-24 font-weight-semi-bold pb-2">Register For Online Demo Class</h3>
                        <div class="divider"><span></span></div>
                        <form class="needs-validation" novalidate="" @submit.prevent="enqueryForm">
                            <div class="input-box">
                                <label class="label-text">Name</label>
                                <div class="form-group">
                                    <input class="form-control form--control" type="text" v-model="username" placeholder="Your Name">
                                    <span class="la la-user input-icon"></span>
                                     <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.userName" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                        <!-- Error msg -->
                                </div>
                            </div><!-- end input-box -->
                            <div class="input-box">
                                <label class="label-text">Email</label>
                                <div class="form-group">
                                    <input class="form-control form--control" type="email" v-model="useremail" placeholder="Email Address">
                                    <span class="la la-envelope input-icon"></span>
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
                            </div><!-- end input-box -->
                            <div class="input-box">
                                <label class="label-text">Phone Number</label>
                                <div class="form-group">
                                    <input class="form-control form--control" type="text" v-model="phoneNumber" placeholder="Phone Number">
                                    <span class="la la-phone input-icon"></span>
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
                            </div><!-- end input-box -->
                            <div class="input-box">
                                <label class="label-text">Interest</label>
                                <div class="form-group">
                                    <select class="form-control form--control" v-model="courseName">
                                        <option value="">Select Inrested Course</option>    
                                        <option v-for="cList in courseLists" :key="cList.id" :value="cList.courseName">{{cList.courseName}}</option>
                                    </select>
                                    <span class="la la-book input-icon"></span>
                                     <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.userInrest" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                        <!-- Error msg -->
                                </div>
                            </div><!-- end input-box -->
                            <div class="btn-box pt-2">
                                <button class="btn theme-btn" type="submit">Request Now <i class="la la-arrow-right icon ml-1"></i></button>
                                <h4 :class="msgcolor">{{successmsg}}</h4>
                            </div><!-- end btn-box -->
                        </form>
                    </div><!-- end card-body -->
                </div><!-- end card -->
            </div><!-- end col-lg-5 -->
            <div class="col-lg-6 ml-auto">
                <div class="register-content">
                    <div class="section-heading">
                        <!-- <h5 class="ribbon ribbon-lg mb-2">Register</h5> -->
                        <h2 class="section__title">Upcoming Batches</h2>
                        <span class="section-divider"></span>
                        <div class="mb-2 card p-2 ">
                            <div class="row">
                                <div class="p-2 pl-4 my-auto col-md-3">
                                    <img :src="lawoptional.featureImg" class="img-fluid" alt="" style="height:50px;width:100px">
                                </div>
                                <div class="p-2 my-auto col-md-9">
                                    <p>{{lawoptional.courseName }}</p>
                                    <p class="font-weight-bold text-black">{{lawoptional.courseStartDate}}</p>    
                                    <router-link class=" text-theme " to="/LawOptional">View The Program <i class="la la-arrow-right pl-3"></i></router-link>
                                </div>
                            </div>
                            
                        </div>
                        <div v-for="(comeList,index) in courseLists" :key="index" class="mb-2 card p-2 ">
                            <div v-if="index < 2" class="row">
                                <div class="p-2 pl-4 my-auto col-md-3">
                                    <img :src="comeList.featureImg" class="img-fluid" alt="" style="height:50px;width:100px">
                                </div>
                                <div class="p-2 my-auto col-md-9">
                                    <p>{{comeList.courseName }}</p>
                                    <p class="font-weight-bold text-black">{{comeList.courseStartDate}}</p>    
                                    <router-link class=" text-theme " :to="'/course/'+comeList.courseName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')+'/'+comeList.id">View The Program <i class="la la-arrow-right pl-3"></i></router-link>
                                </div>
                            </div>
                            
                        </div>
                    </div><!-- end section-heading -->
                    <div class="btn-box pt-35px">
                        <router-link to="/course-list" class="btn theme-btn"><i class="la la-user mr-1"></i>Browse All Courses</router-link>
                        
                    </div>
                </div><!-- end register-content -->
            </div><!-- end col-lg-6 -->
        </div><!-- end row -->
    </div><!-- end container --> 
</section><!-- end register-area -->
</template>
<script>
export default {
    data(){
        return {
            username:"",
            useremail:"",
            phoneNumber:"",
            courseName:"",
            successmsg:"",
            error: [],
            msgcolor:"",
            courseLists:{},
            lawoptional:"",

        }
    },
    created() {

         // fetching lawoptional course only
        axios.get("/front-single-course-detail/4")
            .then((response) => this.lawoptional = response.data)
            .catch((error) => console.log(error));
        // fetching lawoptional course only

        axios.get("/top-courses/3")
            .then((response) => this.courseLists = response.data)
            .catch((error) => console.log(error));
    },
    methods:{
        enqueryForm(){
             this.msgcolor="text-success";
                this.successmsg = "Please Wait..";

             const formdata = new FormData();
                formdata.append("userName",this.username);
                formdata.append("userEmail",this.useremail);
                formdata.append("userPhone",this.phoneNumber);
                formdata.append("userInrest",this.courseName);
                

                 axios.post("/add-lead-data",formdata)
                .then((data) =>{
                    console.log(data.data);
                    
                this.username="";
                this.useremail="";
                this.phoneNumber="";
                this.courseName="";

                this.successmsg = "Your Request is sent successfully!";
                this.error = "";
                
                })
                .catch(error => {
                    this.msgcolor = "text-danger";
                    this.successmsg = "Please Fix error";
                   this.error = error.response.data.errors;
                    
                    
                    //  console.log(error.response.data);
                })


        }
    }
    
}
</script>