<template>
    <div class="card">
        <div class="card-header">
            <div class="d-flex">
                <div class="mr-3">
                    <h5>Add New Course</h5>
                    <p> </p>
                </div>
                <div class="ml-auto">
                    <router-link :to="{name:'courseSetting'}" class="btn btn-warning">Course List</router-link>
                </div>
            </div>
        </div>
      <div class="card-body">
        <br>  
        <h4 :class="msgcolor">{{successmsg}}</h4>
        <form class="needs-validation add-product-form" novalidate="" @submit.prevent="addproduct">
        
        <div class="row product-adding">
            <div class="col-xl-12 border border-success p-3">
                <div class="form-group row">
                    <label class="col-xl-2 col-sm-2 mb-0">Course Name</label>
                    <input type="text" class="form-control col-xl-10 col-sm-10" v-model="coursetitle" placeholder="Enter Course name or title">
                    <br>
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
            
            <div class="col-xl-4 border border-success p-3 mt-2">
                
                    <div class="form">
                        
                         <div class="form-group row">
                             <div class="col-md-12">
                                 <label >Course Code</label>
                                <input type="text" class="form-control " v-model="coursecode" placeholder="Course code">
                                <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.courseCode" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                                
                                    <!-- Error msg -->
                             </div>
                            
                        </div>
                         <div class="form-group row">
                                <label for=" " class="col-xl-4 col-sm-4 mb-0 text-warning">Course Group</label>
                                <select class="form-control digits col-xl-7 col-sm-7" v-model="coursegroup" @change="checkCourseGrp">
                                    <option value="1">Single Course</option>
                                    <option value="0">Bundle course</option>
                                </select>
                                <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.cGroup" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                                
                                <!-- Error msg -->
                            </div>
                             <div :style="{display:bundleDisplayed}">
                                  <div class="form-group row">
                                        <label for=" " class="col-xl-4 col-sm-4 mb-0 text-warning">Select A bundle</label>
                                        <select class="form-control digits col-xl-7 col-sm-7" v-model="bundleNaam" >
                                            <option value="">-- Select Bundle Name --</option>
                                            <option v-for="(bunList,index) in bundleList" :key="index" :value="bunList.id">
                                                {{bunList.bundleName}}
                                            </option>
                                            
                                        </select>
                                    </div>  
                            </div>
                            <div class="form-group row">
                                <label for=" " class="col-xl-4 col-sm-4 mb-0">Parent Course</label>
                                <select class="form-control digits col-xl-7 col-sm-7" v-model="parentCourse" >

                                    <option value="0">Select Parent course :</option>
                                    <option v-for="courseitem in courseList" :key="courseitem.id" :value="courseitem.id" >{{courseitem.courseName}}</option>
                                    
                                </select>
                                <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.courseCategory" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                                
                                <!-- Error msg -->
                            </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-12">
                                <p class="text-warning">Price Setting</p>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-xl-12 col-sm-12 mb-0">Course Standard Price</label>
                                    <input type="number" class="form-control ml-3" v-model="courseprice" placeholder="Course Satndard Price">
                                    <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.coursePrice" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                </div>  
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-xl-12 col-sm-12 mb-0">Dis. Price(Optional)</label>
                                    <input type="number" class="form-control ml-3" v-model="disprice" placeholder="Discounted Price">
                                    <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.discountPrice" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                </div>  
                            </div>
                            <div class="col-md-12">
                                <div class="add-product">
                                    <div class="form-group">
                                        <label for="comment">Price Note(Optional):</label>
                                        <textarea class="form-control" rows="2" v-model="pricenote"   placeholder="Price Note"></textarea>
                                         <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.priceNote" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        
                        <div class="row">
                            <!-- <div class="col-md-12">
                                <p class="text-warning">Inventory setting</p>
                            </div> -->
                            <div class="col-md-5">
                                <div class="form-group row">
                                    <label class="col-xl-12 col-sm-12 mb-0">Teacher Name(Optional)</label>
                                    <input type="text" class="form-control ml-3" v-model="teachername" placeholder="Enter teacher Name">
                                     <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.teacherName" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                    
                                </div>
                                  
                            </div>
                            <div class="col-md-7">
                                <div class="form-group row">
                                    <label class="col-xl-12 col-sm-12 mb-0">Lecture &#38; Notes Language </label>
                                    <input type="Text" class="form-control ml-3" v-model="classlanguage" placeholder="Enter Class languages">
                                     <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.classLanguage" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                </div>  
                            </div>
                        </div>
                        <hr>
                        
                    </div>
                    
                
            </div>
            <div class="col-xl-4 border border-success p-3 mt-2">
                <div class="add-product">
                    <div class="form">
                        <div class="form-group row">
                            <label for=" " class="col-xl-4 col-sm-4 mb-0">Course Category</label>
                            
                            <select class="form-control digits col-xl-7 col-sm-7" v-model="category" @change="prcats">

                                <option value="0">Select Categories :</option>
                                <option v-for="cList in catList" :key="cList.id" :value="cList.id" >{{cList.catname}}</option>
                                
                            </select>
                            
                            <!-- <span v-for="(catToadde,index) in procatlist" :key="index">
                                <div class="alert alert-success alert-dismissible" style="width:auto">
                                    <button type="button" class="close" data-dismiss="alert" @click="removeCats(catToadde)">&times;</button>
                                    <singcatdetail :cid="catToadde"></singcatdetail>
                                </div>
                            </span> -->
                            <!-- {{category}} -->
                             <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.courseCategory" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                        </div>
                         <div class="form-group row">
                            <label for=" " class="col-xl-4 col-sm-4 mb-0">Course Type</label>
                            <select class="form-control digits col-xl-7 col-sm-7"  v-model="coursetype" @change="chnagetotestseries">

                                <option value="1">Lecture Course </option>
                                <option value="0">Test Series </option>                               
                                
                            </select>
                             <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.courseType" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                                      
                        </div>
                         <div class="form-group">
                            <label for="comment">Marks per question(In test series case):</label>
                            <input type="number" :disabled="isDisabled" class="form-control" v-model="positivemark" placeholder="+Ve Marking/right question">
                            <br>
                             <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.positiveMark" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                        </div>
                        <div class="form-group">
                            <label for="comment">-Ve Marking per wrong question(In test series case):</label>
                            <input type="number" :disabled="isDisabled" class="form-control" v-model="negativemark" placeholder="-Ve Marking/wrong question">
                            <br>
                             <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.negativeMark" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                        </div>
                        <div class="form-group">
                            <label for="comment">Meta Keywords:</label>
                            <textarea class="form-control" rows="2" v-model="coursemetakeyword"   placeholder="Meta Keywords"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="comment">Meta Description:</label>
                            <textarea class="form-control" rows="3" v-model="coursemetadescript"   placeholder="Meta Description"></textarea>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-12">
                                <p class="text-warning">Course Schedule Setting</p>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-xl-12 col-sm-12 mb-0">Course Starting Date</label>
                                    <input type="date" class="form-control ml-3" v-model="startdate" placeholder="Course Satndard Price">
                                    <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.courseStartDate" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                </div>  
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-xl-12 col-sm-12 mb-0">Course End Date</label>
                                    <input type="date" class="form-control ml-3" v-model="enddate" placeholder="Discounted Price">
                                    <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.courseEndDate" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                </div>  
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-xl-12 col-sm-12 mb-0">Live Class Start Time</label>
                                    <input type="time" class="form-control ml-3" v-model="lecturestarttime" placeholder="Live Class Start Time">
                                    <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.lectureStartTime" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                </div>  
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-xl-12 col-sm-12 mb-0">Live Class End Time</label>
                                    <input type="time" class="form-control ml-3" v-model="lectureendtime" placeholder="Live Class End Time">
                                    <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.lectureEndTime" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                </div>  
                            </div>
                             <div class="col-md-12">
                                <div class="add-product">
                                    <div class="form-group">
                                        <label for="comment">Course Duration(Optional):</label>
                                        <textarea class="form-control" rows="2" v-model="courseduration"   placeholder="Course Duration - For example 1 year, 2 years or 6 months"></textarea>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr>
                        
                        
                    </div>
                </div>
            </div>
            <div class="col-xl-4 border border-success p-3 mt-2">
                <div class="add-product">
                    <div class="form">
                        <div class="form-group">
                                
                                <p>Course Image</p> 
                                <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.courseMainImage" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                <addimage-input :imagecount="1" @getImageData="imglist"></addimage-input>
                                <img v-if="mainimage" :src="mainimage" height="70" width="70">
                                
                         </div>
                    </div>
                </div>
                <div class="add-product">
                     <div class="form-group">
                            <label for="comment">Course Info Video Link:</label>
                            <textarea class="form-control" rows="2" v-model="infovideo"   placeholder="Course Info Video Link"></textarea>
                        </div>
                </div>

                 <div class="add-product">
                     <div class="form-group">
                            <label for="comment">Buyer Notes:</label>
                            <textarea class="form-control" rows="2" v-model="buyerNotes"   placeholder="Buyer Note"></textarea>
                        </div>
                </div>
                
                
            </div>
            
            <div class="col-md-12 border border-success p-3 mt-2">
                <div class="form-group">
                    <label for="comment">Short Description:</label>
                    <tinymce id="d1" v-model="courseshortdescription" class="form-control"></tinymce>    
                    
                    <!-- Error msg -->
                        <div v-if="error">
                            <ul>
                                <li v-for="err of error.courseShortDescrip" :key="err" class="text-danger" >
                                    {{err}}
                                </li>
                            </ul>
                        </div>
                                    
                    <!-- Error msg -->
                </div>
            </div>
            <div class="col-md-12 border border-success p-3 mt-2">
                <div class="form-group">
                    <label for="comment">Long Description:</label>
                    <tinymce id="d2" v-model="courselongdescription" ></tinymce>    
                    
                </div>
                <div class="form-group">

                    <label for="comment">Course Feature Points:</label>
                    <tinymce id="d3" v-model="coursefeaturepoints" ></tinymce>    
                    <!-- Error msg -->
                        <div v-if="error">
                            <ul>
                                <li v-for="err of error.courseFeaturepoints" :key="err" class="text-danger" >
                                    {{err}}
                                </li>
                            </ul>
                        </div>
                                    
                    <!-- Error msg -->
                    
                </div>
                    <div class="offset-xl-3 offset-sm-4">
                        <button type="submit" class="btn btn-primary">Add</button>
                        <button type="reset" class="btn btn-light">Discard</button>
                        <h4 :class="msgcolor">{{successmsg}}</h4>
                    </div>
              </div>
            </div>
        </form>
    </div>
    </div>
</template>
<script>

Vue.component('singcatdetail', require('./singleCategoryComp.vue').default);
Vue.component('addimage-input', require('./imageInputComp.vue').default);
export default {
    
    data() {
        return{
            localhos : "http://localhost/myCom/storage/app/public/",
            courseList:"",
            parentCourse:"0",
            isDisabled :true,
            catList:"",
            coursetitle:"",
            coursegroup:"1",
            bundleNaam:"",
            procatlist:[],
            category:"0",
            coursecode:"",
            courseprice:"",
            disprice:"",
            pricenote:"",
            teachername:"",
            classlanguage:"",
            coursetype:"1",
            positivemark:"2",
            negativemark:"1",
            coursemetakeyword:"",
            coursemetadescript:"",
            startdate:"",
            enddate:"",
            lecturestarttime:"",
            lectureendtime:"",
            courseduration:"",
            mainimage:"",
            infovideo:"",
            buyerNotes:"",
            courseshortdescription:"",
            courselongdescription:"",   
            coursefeaturepoints:"",
            dataImages:[],
            successmsg:"",
            error:[],
            msgcolor:"text-success",
            bundleDisplayed:"none",
            bundleList:{},
            
        }
    },
    created() {

         // bundle list
             axios.get("/course-dashboard/bundle-list")
            .then((response) => this.bundleList = response.data)
            .catch((error) => console.log(error));
        // bundle list

        axios.get("/media/all-media")
            .then((response) => this.dataImages = response.data)
            .catch((error) => console.log(error));

            // Category List
         axios.get("/course-category-setting/category-raw-list/")
            .then((response) => this.catList = response.data)
            .catch((error) => console.log(error));
            // Category List

            // Course List

         axios.get("/course-dashboard/courses-list/")
            .then((response) => this.courseList = response.data)
            .catch((error) => console.log(error)); 

            // Course List  
        
    },
    methods:{
        addproduct(){
                this.msgcolor="text-success";
                this.successmsg = "Please Wait..";                    
                const formdata = new FormData();
                formdata.append("courseName",this.coursetitle);
                formdata.append("cGroup",this.coursegroup);
                formdata.append("bundleNaam",this.bundleNaam);
                formdata.append("courseCode",this.coursecode);
                formdata.append("coursePrice",this.courseprice);
                formdata.append("discountPrice",this.disprice);
                formdata.append("priceNote",this.pricenote);
                formdata.append("teacherName",this.teachername);
                formdata.append("classLanguage",this.classlanguage);
                formdata.append("courseCategory",this.category);
                formdata.append("courseType",this.coursetype);
                formdata.append("positiveMark",this.positivemark);
                formdata.append("negativeMark",this.negativemark);
                formdata.append("courseMetaKeyWord",this.coursemetakeyword);
                formdata.append("courseMetaDescript",this.coursemetadescript);
                formdata.append("courseStartDate",this.startdate);
                formdata.append("courseEndDate",this.enddate);
                formdata.append("lectureStartTime",this.lecturestarttime);
                formdata.append("lectureEndTime",this.lectureendtime);
                formdata.append("courseDuration",this.courseduration);
                formdata.append("courseMainImage",this.mainimage);
                formdata.append("infoVideo",this.infovideo);
                formdata.append("buyerNotes",this.buyerNotes);
                formdata.append("courseShortDescrip",this.courseshortdescription);
                formdata.append("courseLongDescrip",this.courselongdescription);
                formdata.append("courseFeaturepoints",this.coursefeaturepoints);
                formdata.append("parentCourse",this.parentCourse);
              
                axios.post("/course-dashboard/add-new-course-data",formdata)
                .then((data) =>{
                    console.log(data.data);
                    

                this.successmsg = "Product added successfully";
                this.error = "";
                this.coursetitle="";
                this.procatlist=[];
                this.category="0";
                this.parentCourse="0";
                this.coursecode="";
                this.courseprice="";
                this.disprice="";
                this.pricenote="";
                this.teachername="";
                this.classlanguage="";
                this.coursetype="1";
                this.negativemark="1";
                this.coursemetakeyword="";
                this.coursemetadescript="";
                this.startdate="";
                this.enddate="";
                this.lecturestarttime="";
                this.lectureendtime="";
                this.courseduration="";
                this.mainimage="";
                this.infovideo="";
                this.buyerNotes="";
                this.courseshortdescription="";
                this.courselongdescription="";   
                this.coursefeaturepoints="";
                })
                .catch(error => {
                    this.msgcolor = "text-danger";
                     this.successmsg = "Please Fix error";
                    this.error = error.response.data.errors;
                    console.log(error.response.data);
                })
        },
        imglist(response){
                this.mainimage = response.src;
                
            },
       
        prcats(str){
            // this.procatlist.push(str.target.value);
            this.category = str.target.value;
            console.log(str.target.value);
            
        },
        // removeCats(catid){
        //     var myindex = this.procatlist.indexOf(catid);
        //      this.procatlist.splice(myindex,1);
        //      this.category = this.procatlist;
           
        // },
         onSelectImage(response){
                this.mainimage = response;
            },
        chnagetotestseries(response)
            {
                this.coursetype = response.target.value;
                if(response.target.value==0)
                    this.isDisabled = false;
                else
                    this.isDisabled = true;
            },
            checkCourseGrp(e){
                var grpVal = e.target.value;
                if (grpVal == 0) {
                    this.bundleDisplayed = "block";
                }
                else{
                    this.bundleDisplayed = "none";
                }
            }
        
    }
    
}
</script>
<style scoped>
    label{
        font-size:12px !important;
    }
</style>