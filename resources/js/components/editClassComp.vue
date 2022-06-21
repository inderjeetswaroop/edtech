<template>
    <div class="modal fade" :id="'editClassModal'+cid" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Edit Class / Lecture</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <h3 class="text-success">{{successmsg}}</h3>
                    <form class="needs-validation add-product-form" novalidate="" @submit.prevent="upload" method="post">
                        <div class="row">
                            <div class="col-md-8 py-2">  
                                <div class="form-group">
                                    <label for="topic">Topic Name:</label>
                                    <input type="text" class="form-control" v-model="singclassdetail.topicName" placeholder="Enter Topic name" >
                                </div>
                            </div>
                            <div class="col-md-4 py-2">  
                               <div class="form-group">
                                    <label for="topic">Class/lecture Type:</label>
                                    <select v-model="singclassdetail.classType" class="form-control">
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
                                    <input type="datetime-local" class="form-control" v-model="singclassdetail.classdate" >
                                </div>
                            </div>
                            <div class="col-md-4 py-2">  
                               <div class="form-group">
                                    <label for="topic">Class Time:</label>
                                    <input type="time" class="form-control" v-model="singclassdetail.classTime" >
                                </div>
                            </div>
                            <div class="col-md-4 py-2">  
                               <div class="form-group">
                                    <label for="topic">Class Mode:</label>
                                    <select v-model="singclassdetail.classMode" class="form-control">
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
                                    <textarea class="form-control" rows="2" v-model="singclassdetail.videoLink" ></textarea>
                                </div>   
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="comment">chat Link:</label>
                                    <textarea class="form-control" rows="2" v-model="singclassdetail.chatlink"></textarea>
                                </div>
                            </div>
                        </div>
                        <!-- File -->
                            <div class="form-group">
                                <label for="topic">Class PDF:</label>
                                <input type="text" class="form-control" v-model="singclassdetail.classPdf" placeholder="Class PDF" >
                            </div>

                        <!-- File -->
                        
                        <div class="col-md-12 border border-success p-3 mt-2">
                        <div class="form-group">
                            <label for="comment">class Script:</label>
                            <tinymce id="d10" v-model="singclassdetail.classScript" class="form-control"></tinymce>    
                            
                         </div>
                    </div>

                        <br>
                        <button class="btn btn-primary" type="submit">Save</button>
                        <h3 class="text-success">{{successmsg}}</h3>

                   </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["singclassdetail","cid"],
    data(){
        return {
            successmsg:"",
        }
    },
    methods:{
        upload()
            {
                this.successmsg = "Please wait...";
                 const formdata = new FormData();
                formdata.append("topicname",this.singclassdetail.topicName);
                formdata.append("classtype",this.singclassdetail.classType);
                formdata.append("videoLink",this.singclassdetail.videoLink);
                formdata.append("chatlink",this.singclassdetail.chatlink);
                formdata.append("classPdf",this.singclassdetail.classPdf);
                formdata.append("classScript",this.singclassdetail.classScript);
                formdata.append("classdate",this.singclassdetail.classdate);
                formdata.append("classTime",this.singclassdetail.classTime);
                formdata.append("classMode",this.singclassdetail.classMode);
                formdata.append("classId",this.singclassdetail.id)
                
                axios.post("/course-dashboard/course-classes/update-class/",formdata)
                .then((data) =>{
                    this.successmsg = "Class updated successfully";
                    location.reload();
                })
                .catch(error => {
                    this.error = error.response.data.errors;
                    console.log(this.error);
                })

                
            }
    }
    
}
</script>