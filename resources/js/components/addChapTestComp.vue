<template>
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10 p-3">
            <div class="card">
                <div class="card-body">
                    <div class="text-right">
                        <router-link class="btn btn-danger btn-xs" :to="{name:'courseChapClassSetting',params: {chapId:chapId,courseId: courseid }}">Back</router-link>
                    </div>
                    <br>
                    <hr>
                    <h3 :class="msgCls">{{successmsg}}</h3>
                    <form class="needs-validation add-product-form" novalidate="" @submit.prevent="upload" method="post">

                        <div class="form-group">
                            <label for="comment"><b class="text-warning">Test Question:</b></label>
                            <tinymce id="addtest1" v-model="testquest" class="form-control"></tinymce>    
                            <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.questions" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                                                
                                <!-- Error msg -->
                        </div>
                        
                        <div class="form-group">
                            <!-- <label for="comment"><b class="text-danger">A  :</b></label> -->
                            <textarea class="form-control" rows="1" v-model="ansA"   placeholder="A"></textarea>
                            <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.ansa" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                                                
                                <!-- Error msg -->
                        </div>
                        <div class="form-group">
                            <!-- <label for="comment"><b class="text-danger">B  :</b></label> -->
                            <textarea class="form-control" rows="1" v-model="ansB"   placeholder="B"></textarea>
                            <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.ansb" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                                                
                                <!-- Error msg -->
                        </div>

                        <div class="form-group">
                            <!-- <label for="comment"><b class="text-danger">C  :</b></label> -->
                            <textarea class="form-control" rows="1" v-model="ansC"   placeholder="C"></textarea>
                            <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.ansc" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                                                
                                <!-- Error msg -->
                        </div>
                        <div class="form-group">
                            <!-- <label for="comment"><b class="text-danger">D  :</b></label> -->
                            <textarea class="form-control" rows="1" v-model="ansD"   placeholder="D"></textarea>
                            <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.ansd" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                                                
                                <!-- Error msg -->
                        </div>
                        <div class="form-group">
                            <label for="topic"><b  class="text-success">Correct Answer:</b></label>
                            <select v-model="correctAns" class="form-control">
                                <option selected value="a">A</option>
                                <option selected value="b">B</option>
                                <option selected value="c">C</option>
                                <option selected value="d">D</option>
                                <option selected value="e">E</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="comment"><b>Answer Justification (Optional)  :</b></label>
                            <tinymce id="addtest2" v-model="ansJustify" class="form-control"></tinymce>  
                            <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.justification" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                                                
                                <!-- Error msg -->  
                            
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
    // props: ["chapterid","courseId"],
    data(){
        return {
            chapId: "",
            courseid: "",
            chapInfo:"",
            successmsg:"",
            testquest:"",
            ansA:"",
            ansB:"",
            ansC:"",
            ansD:"",
            ansE:"",
            correctAns:"a",
            ansJustify:"",
            error:[],
            msgCls:"",

        }
    },
    created() {
        this.courseid = this.$route.params.courseId;
            this.chapId = this.$route.params.chapId;
    },
      
    methods:{
        upload()
            {
                this.msgCls="text-success";
                this.successmsg = "Please wait";
                 const formdata = new FormData();
                formdata.append("questions",this.testquest);
                formdata.append("ansa",this.ansA);
                formdata.append("ansb",this.ansB);
                formdata.append("ansc",this.ansC);
                formdata.append("ansd",this.ansD);
                formdata.append("anse",this.ansE);
                formdata.append("correctans",this.correctAns);
                formdata.append("justification",this.ansJustify);
                formdata.append("courseId",this.courseid);
                formdata.append("chapterId",this.chapId);
                
                axios.post("/course-dashboard/course-test/add-new-test-question",formdata)
                .then((data) =>{
                    
                    this.successmsg = "Class added successfully";
                    this.testquest="";
                    this.ansA="";
                    this.ansB="";
                    this.ansC="";
                    this.ansD="";
                    this.ansE="";
                    this.correctAns="a";
                    this.ansJustify="";
                    // location.reload();
                })
                .catch(error => {
                    this.msgCls="text-danger";
                    this.error = error.response.data.errors;
                    this.successmsg = "Something Wrong please try again";
                    // console.log(this.error);
                })

                
            }
    }
    
}
</script>