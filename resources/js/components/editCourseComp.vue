<template>
    <div>
        
        <h4 :class="msgcolor">{{successmsg}}</h4>
    <form class="needs-validation add-product-form" novalidate="" @submit.prevent="addproduct">
        
        <div class="row product-adding">
            <div class="col-xl-12 border border-success p-3">
                <div class="form-group row">
                    <label class="col-xl-2 col-sm-2 mb-0">Course Name</label>
                    <input type="text" class="form-control col-xl-10 col-sm-10" v-model="courseInfo.courseName" placeholder="Enter Course name or title">
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
                                <input type="text" class="form-control " v-model="courseInfo.courseCode" placeholder="Course code">
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
                                <select class="form-control digits col-xl-7 col-sm-7" v-model="courseInfo.courseGroup" @change="checkCourseGrp">
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
                            <div :style="courseInfo.courseGroup == 0 ? 'display : block' : 'display :none'">
                                  <div class="form-group row">
                                        <label for=" " class="col-xl-4 col-sm-4 mb-0 text-warning">Select A bundle</label>
                                        <select class="form-control digits col-xl-7 col-sm-7" v-model="courseInfo.courseBundleId" >
                                            <option value="">-- Select Bundle Name --</option>
                                            <option v-for="(bunList,index) in bundleList" :key="index" :value="bunList.id">
                                                {{bunList.bundleName}}
                                            </option>
                                            
                                        </select>
                                    </div>  
                            </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-12">
                                <p class="text-warning">Price Setting</p>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-xl-12 col-sm-12 mb-0">Course Standard Price</label>
                                    <input type="number" class="form-control ml-3" v-model="courseInfo.price" placeholder="Course Satndard Price">
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
                                    <label class="col-xl-12 col-sm-12 mb-0">Discounted Price(Optional)</label>
                                    <input type="text" class="form-control ml-3" v-model="courseInfo.discounted_price" placeholder="Discounted Price">
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
                                        <textarea class="form-control" rows="2" v-model="courseInfo.priceNote" placeholder="Price Note"></textarea>
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
                                    <input type="text" class="form-control ml-3" v-model="courseInfo.teacherName" placeholder="Enter teacher Name">
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
                                    <input type="Text" class="form-control ml-3" v-model="courseInfo.languages" placeholder="Enter Class languages">
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
                            
                            <select class="form-control digits col-xl-7 col-sm-7" v-model="category" @change="prcats($event)">

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
                            <input type="number" :disabled="isDisabled" class="form-control" v-model="courseInfo.positiveMark" placeholder="+Ve Marking/right question">
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
                            <input type="number" :disabled="isDisabled" class="form-control" v-model="courseInfo.negativeMark" placeholder="-Ve Marking/wrong question">
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
                            <textarea class="form-control" rows="2" v-model="courseInfo.mkeywords"   placeholder="Meta Keywords"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="comment">Meta Description:</label>
                            <textarea class="form-control" rows="3" v-model="courseInfo.mdescription"   placeholder="Meta Description"></textarea>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-12">
                                <p class="text-warning">Course Schedule Setting</p>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-xl-12 col-sm-12 mb-0">Course Starting Date</label>
                                    <input type="date" class="form-control ml-3" v-model="courseInfo.courseStartDate" placeholder="Course Satndard Price">
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
                                    <input type="date" class="form-control ml-3" v-model="courseInfo.courseEndDate" placeholder="Discounted Price">
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
                                    <input type="time" class="form-control ml-3" v-model="courseInfo.classStartTime" placeholder="Live Class Start Time">
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
                                    <input type="time" class="form-control ml-3" v-model="courseInfo.classEndTime" placeholder="Live Class End Time">
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
                                        <textarea class="form-control" rows="2" v-model="courseInfo.courseDuration"   placeholder="Course Duration - For example 1 year, 2 years or 6 months"></textarea>
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
                            <textarea class="form-control" rows="2" v-model="courseInfo.infoVideoLink"   placeholder="Course Info Video Link"></textarea>
                        </div>
                </div>

                 <div class="add-product">
                     <div class="form-group">
                            <label for="comment">Buyer Notes:</label>
                            <textarea class="form-control" rows="2" v-model="courseInfo.buyerNotes"   placeholder="Buyer Note"></textarea>
                        </div>
                </div>
                
                
            </div>
            
            <div class="col-md-12 border border-success p-3 mt-2">
                <div class="form-group">
                    <label for="comment">Short Description:</label>
                    <tinymce id="d1" v-model="courseInfo.shortDescription" class="form-control"></tinymce>    
                    
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
                    <tinymce id="d2" v-model="courseInfo.longDecription" ></tinymce>    
                    
                    
                </div>
                <div class="form-group">

                    <label for="comment">Course Feature Points:</label>
                    <tinymce id="d3" v-model="courseInfo.featuresPoints" ></tinymce>    
                    
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
                    <button type="submit" class="btn btn-primary">Update</button>
                    <button type="reset" class="btn btn-light">Discard</button>
                    <h4 :class="msgcolor">{{successmsg}}</h4>
                </div>
            </div>
            
        </div>
    </form>
    
    </div>
</template>
<script>

Vue.component('singcatdetail', require('./singleCategoryComp.vue').default);
Vue.component('addimage-input', require('./imageInputComp.vue').default);

export default {
    // props:["courseid"],
    data() {
        return{
            localhos : "http://localhost/myCom/storage/app/public/",
            cid:"",
            courseInfo: "",
            isDisabled :true,
            catList:"",
            procatlist:[],
            category:"0",
            coursetype:"1",
            mainimage:"",
            dataImages:[],
            successmsg:"",
            error:[],
            bundleList:{},
            msgcolor:"text-success",
            customToolbar: [[{ header: [false, 1, 2, 3, 4, 5, 6] }],["bold", "italic", "underline"], [{ list: "ordered" }, { list: "bullet" }, { list: "check" }], [
    { align: "" },
    { align: "center" },
    { align: "right" },
    { align: "justify" }
  ]]
            
        }
    },


    created() {
        this.cid=this.$route.params.courseId;
         axios.get("/course-dashboard/single-course-info/"+this.cid)
            .then((response) => {
                
                this.courseInfo = response.data;
                this.category = this.courseInfo.courseCategory; 
                this.coursetype = this.courseInfo.courseType; 
                this.mainimage = this.courseInfo.featureImg;
                
                    if (this.coursetype == 0) {
                        this.isDisabled = false;
                    }
                    else{
                        this.isDisabled = true;
                    } 
                 
                })
            .catch((error) => console.log(error));
        // bundle list
             axios.get("/course-dashboard/bundle-list")
            .then((response) => this.bundleList = response.data)
            .catch((error) => console.log(error));
        // bundle list

        axios.get("../../media/all-media")
            .then((response) => this.dataImages = response.data)
            .catch((error) => console.log(error));

         axios.get("../../course-category-setting/category-raw-list/")
            .then((response) => this.catList = response.data)
            .catch((error) => console.log(error));
    },
    methods:{
        addproduct(){
                this.msgcolor="text-success";
                this.successmsg = "Please Wait..";
                    
                const formdata = new FormData();
                formdata.append("courseName",this.courseInfo.courseName);
                formdata.append("cGroup",this.courseInfo.courseGroup);
                formdata.append("bundleNaam",this.courseInfo.courseBundleId);
                formdata.append("courseCode",this.courseInfo.courseCode);
                formdata.append("coursePrice",this.courseInfo.price);
                formdata.append("discountPrice",this.courseInfo.discounted_price);
                formdata.append("priceNote",this.courseInfo.priceNote);
                formdata.append("teacherName",this.courseInfo.teacherName);
                formdata.append("classLanguage",this.courseInfo.languages);
                formdata.append("courseCategory",this.category);
                formdata.append("courseType",this.coursetype);
                formdata.append("positiveMark",this.courseInfo.positiveMark);
                formdata.append("negativeMark",this.courseInfo.negativeMark);
                formdata.append("courseMetaKeyWord",this.courseInfo.mkeywords);
                formdata.append("courseMetaDescript",this.courseInfo.mdescription);
                formdata.append("courseStartDate",this.courseInfo.courseStartDate);
                formdata.append("courseEndDate",this.courseInfo.courseEndDate);
                formdata.append("lectureStartTime",this.courseInfo.classStartTime);
                formdata.append("lectureEndTime",this.courseInfo.classEndTime);
                formdata.append("courseDuration",this.courseInfo.courseDuration);
                formdata.append("courseMainImage",this.mainimage);
                formdata.append("infoVideo",this.courseInfo.infoVideoLink);
                formdata.append("buyerNotes",this.courseInfo.buyerNotes);
                formdata.append("courseShortDescrip",this.courseInfo.shortDescription);
                formdata.append("courseLongDescrip",this.courseInfo.longDecription);
                formdata.append("courseFeaturepoints",this.courseInfo.featuresPoints);
                formdata.append("courseId",this.courseInfo.id);
              
                axios.post("/course-dashboard/edit-course-data",formdata)
                .then((data) =>{
                    console.log(data.data);
                    

                this.successmsg = "Course added successfully";
                this.error = "";
                
                })
                .catch(error => {
                    this.msgcolor = "text-danger";
                     this.successmsg = "Please Fix error";
                    this.error = error.response.data.errors;
                    console.log(this.error);
                })
        },
        imglist(response){
                this.mainimage = response.src;
            },
       
        prcats(str){
            // this.procatlist.push(str.target.value);
            this.category = str.target.value;
            
            
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
                alert(this.coursetype);
                if(response.target.value==0)
                    this.isDisabled = false;
                else
                    this.isDisabled = true;
            },
             checkCourseGrp(e){
                var grpVal = e.target.value;
                if (grpVal == 0) {
                    this.courseInfo.courseGroup = 0;
                }
                else{
                    this.courseInfo.courseGroup = 1;
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