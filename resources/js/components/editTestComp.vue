<template>
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <div class="card">
                <div class="card-body p-4">
                    <h3 class="text-success">{{successmsg}}</h3>
                    <form class="needs-validation add-product-form" novalidate="" @submit.prevent="upload"  method="post">

                        <div class="form-group">
                            <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.questions" :key="err" class="text-danger" >
                                            {{err}}
                                        </li>
                                    </ul>
                                </div>
                                            
                            <!-- Error msg -->
                            <label for="comment"><b class="text-warning">Test Question:</b></label>
                            <tinymce id="d6" v-model="testInfo.question" class="form-control"></tinymce>    
                            
                        </div>
                        
                        <div class="form-group">
                            <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.ansa" :key="err" class="text-danger" >
                                            {{err}}
                                        </li>
                                    </ul>
                                </div>
                                            
                            <!-- Error msg -->
                            <label for="comment"><b class="text-danger">Option. A  :</b></label>
                            <textarea class="form-control" rows="1" v-model="testInfo.ansA"   placeholder="Option A"></textarea>
                        </div>
                        <div class="form-group">
                            <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.ansb" :key="err" class="text-danger" >
                                            {{err}}
                                        </li>
                                    </ul>
                                </div>
                                            
                            <!-- Error msg -->
                            <label for="comment"><b class="text-danger">Option. B  :</b></label>
                            <textarea class="form-control" rows="1" v-model="testInfo.ansB"   placeholder="Option B"></textarea>
                        </div>

                        <div class="form-group">
                            <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.ansc" :key="err" class="text-danger" >
                                            {{err}}
                                        </li>
                                    </ul>
                                </div>
                                            
                            <!-- Error msg -->
                            <label for="comment"><b class="text-danger">Option. C  :</b></label>
                            <textarea class="form-control" rows="1" v-model="testInfo.ansC"   placeholder="Option C"></textarea>
                        </div>
                        <div class="form-group">
                            <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.ansd" :key="err" class="text-danger" >
                                            {{err}}
                                        </li>
                                    </ul>
                                </div>
                                            
                            <!-- Error msg -->
                            <label for="comment"><b class="text-danger">Option. D  :</b></label>
                            <textarea class="form-control" rows="1" v-model="testInfo.ansD"   placeholder="Option D"></textarea>
                        </div>
                        
                        <div class="form-group">
                            <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.correctans" :key="err" class="text-danger" >
                                            {{err}}
                                        </li>
                                    </ul>
                                </div>
                                            
                            <!-- Error msg -->
                            <label for="topic"><b  class="text-success">Correct Answer:</b></label>
                            <select v-model="testInfo.correctAns" class="form-control">
                                <option selected value="a">Option A</option>
                                <option selected value="b">Option B</option>
                                <option selected value="c">Option C</option>
                                <option selected value="d">Option D</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.justification" :key="err" class="text-danger" >
                                            {{err}}
                                        </li>
                                    </ul>
                                </div>
                                            
                            <!-- Error msg -->
                            <label for="comment"><b>Answer Justification (Optional)  :</b></label>
                            <tinymce id="d7" v-model="testInfo.answerJustification" class="form-control"></tinymce>    
                            
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
    props: ["testId"],
    data(){
        return {
            error:[],
            successmsg:"",
            msgCls: "",
            testInfo:"",
        }
    },
      created(){
          this.testid = this.$route.params.testquestId;

                axios.get("/course-dashboard/course-test/single-test-info/"+this.testid)
            .then((response) => this.testInfo = response.data)
            .catch((error) => console.log(error));
      },
    methods:{
        upload()
            {
                this.successmsg = "Please wait...";
                this.msgCls = "text-success";
                 const formdata = new FormData();
                formdata.append("questions",this.testInfo.question);
                formdata.append("ansa",this.testInfo.ansA);
                formdata.append("ansb",this.testInfo.ansB);
                formdata.append("ansc",this.testInfo.ansC);
                formdata.append("ansd",this.testInfo.ansD);
                formdata.append("anse",this.testInfo.ansE);
                formdata.append("correctans",this.testInfo.correctAns);
                formdata.append("justification",this.testInfo.answerJustification);
                formdata.append("testId",this.testid);
                
                
                axios.post("/course-dashboard/course-test/update-test-question",formdata)
                .then((data) =>{
                    // this.$emit("updatetestlist",data)
                    
                    this.successmsg = "Test Quetion updated successfully";
                })
                .catch(error => {
                    this.msgCls = "text-danger";
                    this.successmsg = "Please fix the error";
                    this.error = error.response.data.errors;
                    // console.log(this.error);
                })

                
            }
    }
    
}
</script>