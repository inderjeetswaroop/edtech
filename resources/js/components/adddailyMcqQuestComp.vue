<template>
    <div class="card p-3 bg-light">
        <button class="btn btn-success" data-toggle="modal" data-target="#addmcqModal">+add New question</button>
        <hr>   
        <!-- Add Question modal --> 
        <div class="modal fade" id="addmcqModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    
                    
                    <div class="modal-header">
                        <h5 class="modal-title f-w-600" id="exampleModalLabel">Add Test Ques. and Ans.  </h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        <h3 class="text-success">{{successmsg}}</h3>
                        <form class="needs-validation" @submit.prevent="upload" >

                            <div class="form-group">
                                <label for="comment"><b class="text-warning">Test Question:</b></label>
                                <tinymce id="d21" v-model="testquest" class="form-control"></tinymce>    
                                
                            </div>
                        
                        <div class="form-group">
                                <!-- <label for="comment"><b class="text-danger">A  :</b></label> -->
                                <textarea class="form-control" rows="1" v-model="ansA"   placeholder="A"></textarea>
                            </div>
                            <div class="form-group">
                                <!-- <label for="comment"><b class="text-danger">B  :</b></label> -->
                                <textarea class="form-control" rows="1" v-model="ansB"   placeholder="B"></textarea>
                            </div>

                            <div class="form-group">
                                <!-- <label for="comment"><b class="text-danger">C  :</b></label> -->
                                <textarea class="form-control" rows="1" v-model="ansC"   placeholder="C"></textarea>
                            </div>
                            <div class="form-group">
                                <!-- <label for="comment"><b class="text-danger">D  :</b></label> -->
                                <textarea class="form-control" rows="1" v-model="ansD"   placeholder="D"></textarea>
                            </div>
                            
                            <div class="form-group">
                                <label for="topic"><b  class="text-success">Correct Answer:</b></label>
                                <select v-model="correctAns" class="form-control">
                                    <option selected value="a">A</option>
                                    <option selected value="b">B</option>
                                    <option selected value="c">C</option>
                                    <option selected value="d">D</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="comment"><b>Answer Justification (Optional)  :</b></label>
                                <tinymce id="d22" v-model="ansJustify" class="form-control"></tinymce>    
                                
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
        <!-- Add Question modal -->
        <!-- edit Question modal --> 
        <div class="modal fade" id="editmcqModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    
                    
                    <div class="modal-header">
                        <h5 class="modal-title f-w-600" id="exampleModalLabel">Add Test Ques. and Ans.  </h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        <h3 class="text-success">{{successmsg}}</h3>
                        <form class="needs-validation" @submit.prevent="updateQuestion(singleQuestInfo.id)" >

                            <div class="form-group">
                                <label for="comment"><b class="text-warning">Test Question:</b></label>
                                <tinymce id="d23" v-model="singleQuestInfo.question" class="form-control"></tinymce>    
                                
                            </div>
                        
                        <div class="form-group">
                                <!-- <label for="comment"><b class="text-danger">A  :</b></label> -->
                                <textarea class="form-control" rows="1" v-model="singleQuestInfo.ansA"   placeholder="A"></textarea>
                            </div>
                            <div class="form-group">
                                <!-- <label for="comment"><b class="text-danger">B  :</b></label> -->
                                <textarea class="form-control" rows="1" v-model="singleQuestInfo.ansB"   placeholder="B"></textarea>
                            </div>

                            <div class="form-group">
                                <!-- <label for="comment"><b class="text-danger">C  :</b></label> -->
                                <textarea class="form-control" rows="1" v-model="singleQuestInfo.ansC"   placeholder="C"></textarea>
                            </div>
                            <div class="form-group">
                                <!-- <label for="comment"><b class="text-danger">D  :</b></label> -->
                                <textarea class="form-control" rows="1" v-model="singleQuestInfo.ansD"   placeholder="D"></textarea>
                            </div>
                            
                            <div class="form-group">
                                <label for="topic"><b  class="text-success">Correct Answer:</b></label>
                                <select v-model="singleQuestInfo.correctAns" class="form-control">
                                    <option selected value="a">A</option>
                                    <option selected value="b">B</option>
                                    <option selected value="c">C</option>
                                    <option selected value="d">D</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="comment"><b>Answer Justification (Optional)  :</b></label>
                                <tinymce id="d24" v-model="singleQuestInfo.answerJustification" class="form-control"></tinymce>    
                                
                            </div>
                            <br>
                            <button class="btn btn-primary" type="submit">Update</button>
                            <h3 class="text-success">{{successmsg}}</h3>
                    </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
            
        </div>
        <!-- Edit Question modal -->

        <br>    
        <div class="table-responsive">
            <table class="table table-bordered"> 
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Question</th>
                        <th>Option A</th>
                        <th>Option B</th>
                        <th>Option C</th>
                        <th>Option D</th>
                        <th>Correct Ans</th> 
                        <th>Justification</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(qlist,index) in questList" :key="index">
                        <td>{{index+1}}</td>
                        <td>
                            <div v-html="qlist.question"></div>
                        </td>
                        <td>
                            {{ qlist.ansA }}
                        </td>
                        <td>
                            {{ qlist.ansB }}
                        </td>
                        <td>
                            {{ qlist.ansC }}
                        </td>
                        <td>
                            {{ qlist.ansD }}
                        </td>
                        <td>{{ qlist.correctAns}}</td>
                        <td>
                            <div v-html="qlist.answerJustification"></div>
                        </td>
                        <td>
                            <div class="btn-group">
                                <button @click="findme(qlist.id)" class="btn btn-info" data-toggle="modal" data-target="#editmcqModal">Edit</button>
                                <button @click="deleteMe(qlist.id)" class="btn btn-danger">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    // props: ["chapterid","courseId"],
    data(){
        return {
            dateid: "",
            successmsg:"",
            testquest:"",
            ansA:"",
            ansB:"",
            ansC:"",
            ansD:"",
            correctAns:"a",
            ansJustify:"",
            questList:{},
            singleQuestInfo:{},

        }
    },
      created() {
          this.dateid = this.$route.params.mcqdateid;
            axios.get("/course-dashboard/daily-mcq-quest-list/"+this.dateid)
            .then((response) => this.questList = response.data)
            .catch((error) => console.log(error));

      },
    methods:{
        upload()
            {
                
                const formdata = new FormData();
                formdata.append("questions",this.testquest);
                formdata.append("ansa",this.ansA);
                formdata.append("ansb",this.ansB);
                formdata.append("ansc",this.ansC);
                formdata.append("ansd",this.ansD);
                formdata.append("correctans",this.correctAns);
                formdata.append("justification",this.ansJustify);
                formdata.append("dateId",this.dateid);
                
                
                axios.post("/course-dashboard/add-mcq-question-data",formdata)
                .then((data) =>{
                    this.questList = data.data;
                    this.successmsg = "Question added successfully";
                    this.testquest="";
                    this.ansA="";
                    this.ansB="";
                    this.ansC="";
                    this.ansD="";
                    this.correctAns="a";
                    this.ansJustify="";
                })
                .catch(error => {
                    this.error = error.response.data.errors;
                    console.log(this.error);
                })

                
            },
            deleteMe(qId) {
                if (window.confirm("Are you sure to delete this question?")) {
                    axios.get("/course-dashboard/delete-daily-mcq-quest/"+qId)
                    .then((response) => this.questList = response.data)
                    .catch((error) => console.log(error));
                }
            },
            findme(qId){
                axios.get("/course-dashboard/singleMcqQuest/"+qId)
                    .then((response) => this.singleQuestInfo = response.data)
                    .catch((error) => console.log(error));
            },
            updateQuestion(qId){
                this.successmsg = "Please wait";
                const formdata = new FormData();
                formdata.append("questions",this.singleQuestInfo.question);
                formdata.append("ansa",this.singleQuestInfo.ansA);
                formdata.append("ansb",this.singleQuestInfo.ansB);
                formdata.append("ansc",this.singleQuestInfo.ansC);
                formdata.append("ansd",this.singleQuestInfo.ansD);
                formdata.append("correctans",this.singleQuestInfo.correctAns);
                formdata.append("justification",this.singleQuestInfo.answerJustification);
                formdata.append("questId",qId);
                
                
                axios.post("/course-dashboard/edit-mcq-question-data",formdata)
                .then((data) =>{
                    this.questList = data.data;
                    this.successmsg = "Question updated successfully";
                    
                })
                .catch(error => {
                    this.error = error.response.data.errors;
                    console.log(this.error);
                })
            }
    }
    
}
</script>
<style scoped>
    .table-bordered th, .table-bordered td
    {
        border: 1px solid #000000;
        color: #000000;
    }
</style>