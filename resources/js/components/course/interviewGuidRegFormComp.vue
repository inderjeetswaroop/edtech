<template>
        <section class="register-area section--padding dot-bg overflow-hidden">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="register-heading-content-wrap text-center">
                            <div class="section-heading">
                                <h2 class="section__title">Fill Up this Form to Join with Us</h2>
                            </div><!-- end section-heading -->
                        </div>
                    </div><!-- end col-lg-12 -->
                </div><!-- end row -->
                <div class="row pt-50px">
                    <div class="col-lg-12 mx-auto">
                        <div class="card card-item">
                            <div class="card-body">
                                <!-- Phone Verification -->
                                <div v-if="formdisplay=='none'">   
                                    <form  method="post" class="needs-validation pt-4"  novalidate="" @submit.prevent="registerphone">
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
                                        <div class="btn-box">
                                        <button :style="{display:regBtn}"  class="btn theme-btn" type="submit"> {{regText}}<i class="la la-arrow-right icon ml-1"></i></button>
                                            <h4 :class="msgClass">{{msg}}</h4>
                                        </div>

                                        
                                    </form>
                                    <div v-if="regBtn == 'none'">
                                        <div class="input-box ">
                                            <label class="label-text">Enter OTP</label>
                                            <div class="form-group">
                                                <input class="form-control form--control" type="number" v-model="verifyOTP" placeholder="Enter OTP" >
                                                <span class="la la-lock input-icon"></span>
                                            </div>
                                            <my-countdown @timerEnd="setNewOTP" v-bind:end="testTime"></my-countdown>
                                        </div>
                                        <div class="btn-box">
                                            <button class="btn theme-btn" @click="checkMyOTP">Verify OTP <i class="la la-arrow-right icon ml-1"></i></button>
                                            <h4 :class="otpmsgclass">{{otpmsg}}</h4>
                                        </div> 
                                    </div>
                                </div>
                                
                                
                                <!-- Phone Verification -->

                                <form v-if="formdisplay!='none'" method="post" class="row" enctype='multipart/form-data' @submit.prevent="registerForm">
                                    <div class="input-box col-lg-6">
                                        <label class="label-text">Full Name</label>
                                        <div class="form-group">
                                            <input class="form-control form--control" type="text" v-model="uname"  placeholder="e.g. BE N BY IAS">
                                            <span class="la la-user input-icon"></span>
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
                                    </div><!-- end input-box -->
                                    <div class="input-box col-lg-6">
                                        <label class="label-text">Date Of Birth</label>
                                        <div class="form-group">
                                            <input class="form-control form--control" type="date" v-model="udob" required>
                                            <span class="la la-calendar input-icon"></span>
                                                <!-- Error msg -->
                                                    <div v-if="error">
                                                        
                                                        <ul>
                                                            <li v-for="err of error.userdob" :key="err" class="text-danger" >
                                                                {{err}}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                <!-- Error msg -->
                                        </div>
                                    </div><!-- end input-box -->
                                    <div class="input-box col-lg-6">
                                        <label class="label-text">Email Address</label>
                                        <div class="form-group">
                                            <input class="form-control form--control" type="email" v-model="uemail" placeholder="e.g. alexsmith@gmail.com">
                                            <span class="la la-envelope input-icon"></span>
                                                <!-- Error msg -->
                                                <div v-if="error">
                                                    
                                                    <ul>
                                                        <li v-for="err of error.useremail" :key="err" class="text-danger" >
                                                            {{err}}
                                                        </li>
                                                    </ul>
                                                </div>
                                            <!-- Error msg -->
                                        </div>
                                    </div><!-- end input-box -->
                                    <div class="input-box col-lg-6">
                                        <label class="label-text">Address</label>
                                        <div class="form-group">
                                            <input class="form-control form--control" type="text" v-model="uaddress" placeholder="e.g. 12345 Little Baker St, Melbourne">
                                            <span class="la la-map-marker input-icon"></span>
                                                <!-- Error msg -->
                                                <div v-if="error">
                                                    
                                                    <ul>
                                                        <li v-for="err of error.useraddress" :key="err" class="text-danger" >
                                                            {{err}}
                                                        </li>
                                                    </ul>
                                                </div>
                                            <!-- Error msg -->
                                        </div>
                                    </div><!-- end input-box -->
                                    <div class="input-box col-lg-6">
                                        <label class="label-text">Phone Number</label>
                                        <div class="form-group">
                                            <input id="phone" class="form-control form--control" type="number" v-model="demoPhone" placeholder="Enter Phone number" maxlength="10" :disabled="true">
                                            <span class="la la-phone input-icon"></span>
                                            
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
                                    </div><!-- end input-box -->
                                    <div class="input-box col-lg-6">
                                        <label class="label-text">Optional Subject</label>
                                        <div class="form-group">
                                            <div class="select-container w-auto">
                                                <select class="form-control form--control" v-model="uoptional">
                                                    <option value="">Select Optional Subject</option>
                                                    <option value="Agriculture">Agriculture</option>
                                                    <option value="Animal Husbandry and Veterinary Science">Animal Husbandry and Veterinary Science</option>
                                                    <option value="Anthropology">Anthropology</option>
                                                    <option value="Botany">Botany</option>
                                                    <option value="Chemistry">Chemistry</option>
                                                    <option value="Civil Engineering">Civil Engineering</option>
                                                    <option value="Commerce and Accountancy">Commerce and Accountancy</option>
                                                    <option value="Economics">Economics</option>
                                                    <option value="Electrical Engineering">Electrical Engineering</option>
                                                    <option value="Geography">Geography</option>
                                                    <option value="Geology">Geology</option>
                                                    <option value="History">History</option>
                                                    <option value="Law">Law</option>
                                                    <option value="Management">Management</option>
                                                    <option value="Mathematics">Mathematics</option>
                                                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                                                    <option value="Medical Science">Medical Science</option>
                                                    <option value="Philosophy">Philosophy</option>
                                                    <option value="Physics">Physics</option>
                                                    <option value="Political Science and International Relations">Political Science and International Relations</option>
                                                    <option value="Psychology">Psychology</option>
                                                    <option value="Public Administration">Public Administration</option>
                                                    <option value="Sociology">Sociology</option>
                                                    <option value="Statistics">Statistics</option>
                                                    <option value="Zoology">Zoology</option>
                                                    <option value="Literature of Assamese">Literature of Assamese</option>
                                                    <option value="Literature of Bengali">Literature of Bengali</option>
                                                    <option value="Literature of Bodo">Literature of Bodo</option>
                                                    <option value="Literature of Dogri">Literature of Dogri</option>
                                                    <option value="Literature of Gujarati">Literature of Gujarati</option>
                                                    <option value="Literature of Hindi">Literature of Hindi</option>
                                                    <option value="Literature of Kannada">Literature of Kannada</option>
                                                    <option value="Literature of Kashmiri">Literature of Kashmiri</option>
                                                    <option value="Literature of Konkani">Literature of Konkani</option>
                                                    <option value="Literature of Maithili">Literature of Maithili</option>
                                                    <option value="Literature of Malayalam">Literature of Malayalam</option>
                                                    <option value="Literature of Manipuri">Literature of Manipuri</option>
                                                    <option value="Literature of Marathi">Literature of Marathi</option>
                                                    <option value="Literature of Nepali">Literature of Nepali</option>
                                                    <option value="Literature of Odia">Literature of Odia</option>
                                                    <option value="Literature of Sanskrit">Literature of Sanskrit</option>
                                                    <option value="Literature of Santhali">Literature of Santhali</option>
                                                    <option value="Literature of Sindhi">Literature of Sindhi</option>
                                                    <option value="Literature of Tamil">Literature of Tamil</option>
                                                    <option value="Literature of Telugu">Literature of Telugu</option>
                                                    <option value="Literature of Urdu">Literature of Urdu</option>
                                                    <option value="Literature of English">Literature of English</option>
                                                </select>
                                                    <!-- Error msg -->
                                                        <div v-if="error">
                                                            
                                                            <ul>
                                                                <li v-for="err of error.useroptional" :key="err" class="text-danger" >
                                                                    {{err}}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    <!-- Error msg -->
                                            </div>
                                        </div>
                                    </div><!-- end input-box -->
                                    <div class="input-box col-lg-6">
                                        <label class="label-text">UPSC Roll Number</label>
                                        <div class="form-group">
                                            <input class="form-control form--control" type="number" v-model="urollnumber" placeholder="UPSC Roll Number">
                                            <span class="la la-user input-icon"></span>
                                                <!-- Error msg -->
                                                    <div v-if="error">
                                                        
                                                        <ul>
                                                            <li v-for="err of error.userrollnumber" :key="err" class="text-danger" >
                                                                {{err}}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                <!-- Error msg -->
                                        </div>
                                    </div><!-- end input-box -->
                                    <div class="input-box col-lg-6">
                                        <label class="label-text">UPSC Interview Date </label>
                                        <div class="form-group">
                                            <input class="form-control form--control" type="date" v-model="upscinterviewdate" placeholder="UPSC Interview Date">
                                            <span class="la la-calendar input-icon"></span>
                                                <!-- Error msg -->
                                                    <div v-if="error">
                                                        
                                                        <ul>
                                                            <li v-for="err of error.upscInterviewDate" :key="err" class="text-danger" >
                                                                {{err}}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                <!-- Error msg -->
                                        </div>
                                    </div><!-- end input-box -->
                                    <div class="input-box col-lg-6">
                                        <label class="label-text">City</label>
                                        <div class="form-group">
                                            <input class="form-control form--control" type="text" v-model="ucity" placeholder="City">
                                            <span class="la la-map input-icon"></span>
                                             <!-- Error msg -->
                                                    <div v-if="error">
                                                        
                                                        <ul>
                                                            <li v-for="err of error.usercity" :key="err" class="text-danger" >
                                                                {{err}}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                <!-- Error msg -->
                                        </div>
                                    </div><!-- end input-box -->
                                    <div class="input-box col-lg-6">
                                        <label class="label-text">State</label>
                                        <div class="form-group">
                                            <div class="select-container w-auto">
                                                <select class="form-control form--control" v-model="ustate">
                                                    <option value=""> - Select State - </option>
                                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                    <option value="Assam">Assam</option>
                                                    <option value="Bihar">Bihar</option>
                                                    <option value="Chandigarh">Chandigarh</option>
                                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                                    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                                    <option value="Daman and Diu">Daman and Diu</option>
                                                    <option value="Delhi">Delhi</option>
                                                    <option value="Goa">Goa</option>
                                                    <option value="Gujarat">Gujarat</option>
                                                    <option value="Haryana">Haryana</option>
                                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                                    <option value="Jharkhand">Jharkhand</option>
                                                    <option value="Karnataka">Karnataka</option>
                                                    <option value="Kerala">Kerala</option>
                                                    <option value="Lakshadweep Islands">Lakshadweep Islands</option>
                                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                    <option value="Maharashtra">Maharashtra</option>
                                                    <option value="Manipur">Manipur</option>
                                                    <option value="Meghalaya">Meghalaya</option>
                                                    <option value="Mizoram">Mizoram</option>
                                                    <option value="Nagaland">Nagaland</option>
                                                    <option value="Orissa">Orissa</option>
                                                    <option value="Puducherry">Puducherry</option>
                                                    <option value="Punjab">Punjab</option>
                                                    <option value="Rajasthan">Rajasthan</option>
                                                    <option value="Sikkim">Sikkim</option>
                                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                                    <option value="Telangana">Telangana</option>
                                                    <option value="Tripura">Tripura</option>
                                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                    <option value="Uttarakhand">Uttarakhand</option>
                                                    <option value="West Bengal">West Bengal</option>
                                                </select>
                                                <!-- Error msg -->
                                                    <div v-if="error">
                                                        
                                                        <ul>
                                                            <li v-for="err of error.userstate" :key="err" class="text-danger" >
                                                                {{err}}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                <!-- Error msg -->
                                            </div>
                                        </div>
                                    </div><!-- end input-box -->
                                     <div class="input-box col-lg-6">
                                        <label class="label-text">Upload DAF(PDF Only) (Max File Size : 2mb)</label>
                                        <div class="form-group">
                                            <input :disabled="isDisabled" class="btn btn-success" type="file" @change="uploaddafFile" accept="application/pdf" />   
                                            <p :class="pdfmsgclass">{{pdfmsg}}</p>
                                             <!-- Error msg -->
                                                    <div v-if="error">
                                                        
                                                        <ul>
                                                            <li v-for="err of error.DafFileUrl" :key="err" class="text-danger" >
                                                                {{err}}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                <!-- Error msg -->
                                        </div>
                                    </div><!-- end input-box -->
                                    <div class="input-box col-lg-6">
                                        <label class="label-text">Choose a date for your Mock Interview</label>
                                        <div class="form-group">
                                            <input class="form-control form--control" type="date" v-model="mockinterview" >
                                            <span class="la la-calendar input-icon"></span>
                                             <!-- Error msg -->
                                                    <div v-if="error">
                                                        
                                                        <ul>
                                                            <li v-for="err of error.mockInterview" :key="err" class="text-danger" >
                                                                {{err}}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                <!-- Error msg -->
                                        </div>
                                    </div><!-- end input-box -->
                                    <div class="input-box col-lg-12">
                                        <label class="label-text">Medium of Interview</label>
                                        <div class="form-group d-flex align-items-center">
                                           <div class="form-check">
                                                <label class="form-check-label">
                                                    <input type="radio" class="form-check-input" value="hindi" v-model="interviewmode"> Hindi
                                                </label>
                                            </div>
                                            <div class="form-check ml-3">
                                                <label class="form-check-label">
                                                    <input type="radio" class="form-check-input" value="english" v-model="interviewmode"> English
                                                </label>
                                            </div>
                                            
                                            <!-- Error msg -->
                                                    <div v-if="error">
                                                        
                                                        <ul>
                                                            <li v-for="err of error.interviewMode" :key="err" class="text-danger" >
                                                                {{err}}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                <!-- Error msg -->
                                        </div>
                                    </div><!-- end input-box -->
                                    <div class="btn-box col-lg-12">
                                        <div class="custom-control custom-checkbox mb-4 fs-15">
                                            <input type="checkbox" class="custom-control-input" v-model="agreement">
                                            <label class="custom-control-label custom--control-label" for="agreeCheckbox">by signing i agree to the
                                                <a href="#" data-toggle="collapse" data-target="#demo" class="text-color hover-underline">terms and conditions</a>
                                                <div id="demo" class="collapse">
                                                    <ul>
                                                        <li>
                                                            <i class="la la-arrow-right mr-2"></i> The institute will not be required to take permission from the applicant to use this information form or the information given on it for advertisement purposes. If video recording of the mock interviews is done, then the institute can use the recording for commercial and promotion purpose on its website or any other medium.
                                                        </li>
                                                        <li>
                                                            <i class="la la-arrow-right mr-2"></i> All disputes would be subjected to Delhi jurisdiction only.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </label>
                                             <!-- Error msg -->
                                                    <div v-if="error">
                                                        
                                                        <ul>
                                                            <li v-for="err of error.useragreement" :key="err" class="text-danger" >
                                                                {{err}}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                <!-- Error msg -->
                                        </div><!-- end custom-control -->
                                        <button class="btn theme-btn" type="submit">Submit Form <i class="la la-arrow-right icon ml-1"></i></button>
                                        <h4 :class="mainFormmsgClass">{{mainFormmsg}}</h4>
                                    </div><!-- end btn-box -->
                                </form>
                            </div><!-- end card-body -->
                        </div><!-- end card -->
                    </div><!-- end col-lg-10 -->
                </div><!-- end row -->
            
        </section><!-- end register-area -->

</template>
<script>
Vue.component('my-countdown', require('./../user/mycountdownComp.vue').default);
export default {
    data(){
        return {
            uname:"",
            udob:"",
            uemail:"",
            uphone:"",
            demoPhone:"",
            uaddress:"",
            uoptional:"",
            urollnumber:"",
            upscinterviewdate:"",
            ucity:"",
            ustate:"",
            daffileurl:"",
            uploadedDaf:"",
            mockinterview:"",
            interviewmode:"",
            agreement:true,
            error:"",
            msg:"",
            msgClass:"",
            isDisabled:false,
            pdfmsg:"",
            pdfmsgclass:"text-success",
            formdisplay:"none",
            phoneBox:false,
            phoneNum:"",
            verifyOTP:"",
            testTime:"",
            testing:"",
            phoneOtp :"",
            otpmsgclass:"",
            otpmsg:"",
            btnDisabled:false,
            regBtn:"block",
            regText:"Start Registration",
            mainFormmsg:"",
            mainFormmsgClass:"",
        }
    },
    methods:{
        uploaddafFile(e){
                this.pdfmsg = "Please wait......";
                this.isDisabled = true;
                const formdata = new FormData();
                this.uploadedDaf = e.target.files[0];
                formdata.append("medimages",this.uploadedDaf);
                 axios.post("/media/add-daf-pdf-data",formdata)
                        .then((response) =>{
                            
                          console.log(response.data.imgpath)  
                          this.daffileurl = response.data.imgpath;
                        this.pdfmsg = "";
                        this.isDisabled = false;
                        })
                        .catch(error => {
                            this.pdfmsgclass ="text-danger";
                            this.pdfmsg = error.response.data.errors;
                            console.log(this.error);
                        })
        },
        registerphone(){
                this.demoPhone = this.phoneNum;
                this.uphone = this.phoneNum;
                this.msgclass = "text-success";
                this.msg = "Please wait... ";
                this.phoneBox = true;
                this.btnDisabled = true;
                const formdata = new FormData();
                formdata.append("userphone",this.phoneNum);
                axios.post("/user-phone-verification",formdata)
                 .then((data) =>{
                    // console.log(data.data);
                    var result = data.data;
                    if (result =='try' || result == 'duplicate') {
                        if (result == 'try') {
                            this.msg = "wrong phone format! Please try again with correct phone number.";
                        }
                        else{
                            this.formdisplay = "";
                        }
                        
                        this.error = "Fix Error";
                        this.regBtn = "block"
                        this.phoneBox = false;
                        this.btnDisabled = false;
                    }
                    else{
                        this.regBtn = "none"
                        var dt = new Date();
                        this.testing =  dt.setMinutes( dt.getMinutes() + 1 );
                        this.testTime = new Date(this.testing).toString().split('GMT')[0];
                        this.phoneOtp = data.data;
                        // console.log(data.data);
                    }
                 })
                 .catch(error => {
                    this.msgclass = "text-danger";
                    this.msg = "Please Fix error";
                    this.phoneBox = true;
                    this.btnDisabled = true;
                    this.error = error.response.data.errors;
                 })
        },
        registerForm(){
                const formdata = new FormData();
                formdata.append("username",this.uname);
                formdata.append("userdob",this.udob);
                formdata.append("useremail",this.uemail);
                formdata.append("useraddress",this.uaddress);
                formdata.append("userphone",this.uphone);
                formdata.append("useroptional",this.uoptional);
                formdata.append("userrollnumber",this.urollnumber);
                formdata.append("upscInterviewDate",this.upscinterviewdate);
                formdata.append("usercity",this.ucity);
                formdata.append("userstate",this.ustate);
                formdata.append("DafFileUrl",this.daffileurl);
                formdata.append("mockInterview",this.mockinterview);
                formdata.append("interviewMode",this.interviewmode);
                formdata.append("useragreement",this.agreement);
                axios.post("/user-interview-guidance-registration",formdata)
                 .then((data) =>{
                    // alert("success");
                    this.uname ="";
                    this.udob="";
                    this.uemail="";
                    this.uaddress="";
                    this.uphone="";
                    this.uoptional="";
                    this.urollnumber="";
                    this.upscinterviewdate="";
                    this.ucity="";
                    this.ustate="";
                    this.daffileurl="";
                    this.mockinterview="";
                    this.interviewmode="";
                    this.agreement="";
                    this.error="";
                    this.mainFormmsgClass = "text-success";
                    this.mainFormmsg = "Form -submitted Successfully";

                 }).catch(error =>{
                     this.mainFormmsgClass = "text-danger";
                     this.mainFormmsg = "Please Fix error";
                     this.error = error.response.data.errors;
                 })
        },
        setNewOTP(){
            this.regBtn = "block"
            this.regText = "Send OTP Again"
            this.msg = "";
            this.phoneBox = false;
        },
        checkMyOTP() {
            if(this.phoneOtp == this.verifyOTP){
                this.formdisplay = "";
                // this.$router.push("/complete-user-registration");
                
            }
            else{
                this.otpmsgclass = "text-danger";
                this.otpmsg = "Please enter Correct OTP!";
            }
        }
    }
}
</script>pt
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