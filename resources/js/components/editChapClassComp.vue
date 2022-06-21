<template>
    <div v-if="singclassInfo" class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10 p-3">
            <div class="card">
                <div class="card-body p-4">
                    <div class="text-right">
                        <router-link class="btn btn-danger btn-xs" :to="{name:'courseChapClassSetting',params: {chapId:singclassInfo.chapterId,courseId: singclassInfo.courseId }}">Back </router-link>
                    </div>
                    <h3 :class="msgCls">{{successmsg}}</h3>
                    <form class="needs-validation add-product-form" novalidate="" @submit.prevent="upload" method="post">
                        <div class="row">
                            <div class="col-md-8 py-2">  
                                <div class="form-group">
                                    <label for="topic">Topic Name:</label>
                                    <input type="text" class="form-control" v-model="singclassInfo.topicName" placeholder="Enter Topic name" >
                                </div>
                            </div>
                            <div class="col-md-4 py-2">  
                            <div class="form-group">
                                    <label for="topic">Class/lecture Type:</label>
                                    <select v-model="singclassInfo.classType" class="form-control">
                                        <option selected value="1">Video Class</option>
                                        <option value="2">Only Note</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 py-2">  
                                <div class="form-group">
                                    <label for="topic">Class Date:</label>
                                    <input type="datetime-local" class="form-control" v-model="singclassInfo.classdate" >
                                </div>
                            </div>
                            <div class="col-md-4 py-2">  
                            <div class="form-group">
                                    <label for="topic">Class Time:</label>
                                    <input type="time" class="form-control" v-model="singclassInfo.classTime" >
                                </div>
                            </div>
                            <div class="col-md-4 py-2">  
                            <div class="form-group">
                                    <label for="topic">Class Mode:</label>
                                    <select v-model="singclassInfo.classMode" class="form-control">
                                        <option selected value="1">Live Class</option>
                                        <option value="0">Recorded</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="comment">Video Embed Link:</label>
                                    <textarea class="form-control" rows="2" v-model="singclassInfo.videoLink" ></textarea>
                                </div>   
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="comment">chat Link:</label>
                                    <textarea class="form-control" rows="2" v-model="singclassInfo.chatlink"></textarea>
                                </div>
                            </div>
                        </div>
                        <!-- File -->
                            <div class="form-group">
                                <label for="topic">Class PDF:</label>
                                <input type="text" class="form-control" v-model="singclassInfo.classPdf" placeholder="Class PDF" >
                            </div>

                        <!-- File -->
                        
                        <div class="col-md-12 border border-success p-3 mt-2">
                        <div class="form-group">
                            <label for="comment">class Script:</label>
                            <tinymce id="dedit" v-model="singclassInfo.classScript" class="form-control"></tinymce>    
                            
                        </div>
                    </div>

                        <br>
                        <button class="btn btn-primary" type="submit">Save</button>
                        <h3 :class="msgCls">{{successmsg}}</h3>

                </form>
                </div>
            </div>
        </div>
        <div class="col-md-1"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            singclassInfo:"",
            successmsg:"",
            error:[],
            claasid:"",
            msgCls:"",

        }
    },
    created(){
                    this.claasid = this.$route.params.classId;
                   axios.get("/course-dashboard/course-classes/singleclassInfo/"+this.claasid)
                        .then((response) => this.singclassInfo = response.data)
                        .catch((error) => console.log(error));
            },
            methods:{
                upload()
                    {
                        this.msgCls="text-success";
                        this.successmsg = "Please wait...";
                        const formdata = new FormData();
                        formdata.append("topicname",this.singclassInfo.topicName);
                        formdata.append("classtype",this.singclassInfo.classType);
                        formdata.append("videoLink",this.singclassInfo.videoLink);
                        formdata.append("chatlink",this.singclassInfo.chatlink);
                        formdata.append("classPdf",this.singclassInfo.classPdf);
                        formdata.append("classScript",this.singclassInfo.classScript);
                        formdata.append("classdate",this.singclassInfo.classdate);
                        formdata.append("classTime",this.singclassInfo.classTime);
                        formdata.append("classMode",this.singclassInfo.classMode);
                        formdata.append("classId",this.singclassInfo.id)
                        
                        axios.post("/course-dashboard/course-classes/update-class",formdata)
                        .then((data) =>{
                            this.msgCls="text-success";
                            this.successmsg = "Class updated successfully";
                            // location.reload();
                        })
                        .catch(error => {
                            this.msgCls="text-danger";
                            this.successmsg = "Fix Error ";
                            this.error = error.response.data.errors;
                            // console.log(this.error);
                        })

                        
                    }
            }
}
</script>