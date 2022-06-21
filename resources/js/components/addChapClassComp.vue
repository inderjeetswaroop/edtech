<template>
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10 p-3">
            <div class="card">
                <div class="card-body p-5">
                     <div class="text-right">
                        <router-link class="btn btn-danger btn-xs" :to="{name:'courseChapClassSetting',params: {chapId:chapId,courseId: courseid }}">Back </router-link>
                    </div>
                    <br>
                    <hr>
                    <h3 class="text-success">{{successmsg}}</h3>
                    <form class="needs-validation add-product-form" novalidate="" @submit.prevent="upload" method="post">
                        <div class="row">
                            <div class="col-md-8 py-2">  
                                <div class="form-group">
                                    <label for="topic">Topic Name:</label>
                                    <input type="text" class="form-control" v-model="topic" placeholder="Enter Topic name" >
                                </div>
                                <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.topicname" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                                                
                                <!-- Error msg -->
                            </div>
                            <div class="col-md-4 py-2">  
                               <div class="form-group">
                                    <label for="topic">Class/lecture Type:</label>
                                    <select v-model="cType" class="form-control">
                                        <option selected value="1">Video Class</option>
                                        <option value="2">Only Note</option>
                                        <option value="3">Schedule Test</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 py-2">  
                                <div class="form-group">
                                    <label for="topic">Class Date:</label>
                                    <input type="datetime-local" class="form-control" v-model="classDate" >
                                </div>
                            </div>
                            <div class="col-md-4 py-2">  
                               <div class="form-group">
                                    <label for="topic">Class Time:</label>
                                    <input type="time" class="form-control" v-model="classTime" >
                                </div>
                            </div>
                            <div class="col-md-4 py-2">  
                               <div class="form-group">
                                    <label for="topic">Class Mode:</label>
                                    <select v-model="cMode" class="form-control">
                                        <option value="1">Live Class</option>
                                        <option value="0">Recorded</option>
                                    </select>
                                </div>
                                 <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.classMode" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                                                
                                <!-- Error msg -->
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                 <div class="form-group">
                                    <label for="comment">Video Link:</label>
                                    <textarea class="form-control" rows="2" v-model="videoLink" ></textarea>
                                    <addimage-input :imagecount="1" @getImageData="imglist"></addimage-input>
                                    
                                </div>   
                                <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.videoLink" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                                                
                                <!-- Error msg -->
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="comment">chat Link(Optional):</label>
                                    <textarea class="form-control" rows="2" v-model="chatLink"></textarea>
                                </div>
                            </div>
                        </div>
                        <!-- File -->
                            <div class="form-group">
                                <label for="topic">Class PDF:</label>
                                <input type="text" class="form-control" v-model="classPdf" placeholder="Enter Topic name" >
                                <addimage-input :imagecount="1" @getImageData="getPdf"></addimage-input>
                            </div>
                            <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.classPdf" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                                                
                                <!-- Error msg -->
                        <!-- File -->
                        
                        <div class="col-md-12 border border-success p-3 mt-2">
                        <div class="form-group">
                            <label for="comment">class Script:</label>
                            <tinymce id="d1" v-model="classScript" class="form-control"></tinymce>    
                            
                         </div>
                    </div>

                        <br>
                        <button class="btn btn-primary" type="submit">Save</button>
                        <h3 class="text-success">{{successmsg}}</h3>
                   </form>
                </div>
            </div>
        </div>
        <div class="col-md-1"></div>
    </div>
</template>
<script>
Vue.component('addimage-input', require('./imageInputComp.vue').default);
export default {
    props: ["chapterid","courseId"],
    data(){
        return {
            chapId: "",
            courseid: "",
            chapInfo:"",
            chap:this.chapterid,
            topic:"",
            cType:"1",
            videoLink:"",
            chatLink:"",
            classPdf:"",
            classScript:"",
            classDate:"",
            classTime:"",
            cMode:"0",
            successmsg:"",
            error:"",
            msgColor:"",
            
        }
    },
    created() {
        
            this.courseid = this.$route.params.courseId;
            this.chapId = this.$route.params.chapId;
    },
      
    methods:{
        upload()
            {   
                this.msgColor="text-success";
                    this.successmsg = "Please wait ...";
                
                 const formdata = new FormData();
                formdata.append("topicname",this.topic);
                formdata.append("classtype",this.cType);
                formdata.append("videoLink",this.videoLink);
                formdata.append("chatlink",this.chatLink);
                formdata.append("classPdf",this.classPdf);
                formdata.append("classScript",this.classScript);
                formdata.append("classdate",this.classDate);
                formdata.append("classTime",this.classTime);
                formdata.append("classMode",this.cMode);
                formdata.append("courseId",this.courseid);
                formdata.append("chapterId",this.chapId);
                
                axios.post("/course-dashboard/course-classes/add-new-class",formdata)
                .then((data) =>{
                    
                    this.topic="",
                    this.cType="1",
                    this.videoLink="",
                    this.chatLink="",
                    this.classPdf="",
                    this.classScript="",
                    this.classDate="",
                    this.classTime="",
                    this.msgColor="text-success";
                    this.successmsg = "Class added successfully";
                    
                })
                .catch(error => {
                    this.error = error.response.data.errors;
                    // console.log(this.error);
                    this.msgColor="text-danger";
                    this.successmsg = "fix errors";
                })

                
            },
            imglist(response){
                this.videoLink = response.src;
                
            },
            getPdf(response){
                this.classPdf = response.src
            }
    }
    
}
</script>
<style scoped>

</style>