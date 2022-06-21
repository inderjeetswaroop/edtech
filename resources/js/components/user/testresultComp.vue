<template>
    <div class="container">
        <div class="row">
             <div class="fullpage" :style="{display:loadDisplayed}">
                <h3 class="center-text" >Please wait <div class="spinner-border text-light"></div></h3>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-10 my-5">
                <div class="card border border-secondary p-2">
                    <div class="table-responsive">
                        <table class="table table-striped table-hovered">
                            <thead>
                                <tr>
                                    <th>SR No.</th>
                                    <th>Attempted Date</th>
                                    <th>Action</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(list,index) in resultList" :key="index">
                                    <td>{{++index}}</td>
                                    <td>{{ list.created_at.replace(/T/g," ").replace(/.000000Z/g," ")}}
                                        
                                    </td>
                                    <td>
                                        <button class="btn btn-sm btn-info" @click="getTestResult(list.id)">Check Result</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div v-show="getClassInfo.length > 0">
                    <div class="card p-5 bg-white shadow mb-3 mt-3">

                                <div class="row">
                                    <div class="col-md-3 col-lg-3 col-sm-6 col-xs-6">
                                        <div class="card shadow py-4 px-2 text-center scoreboard">
                                            <h3>
                                                Total <br> Marks <br> <br>
                                                <span class="rounded-circle text-white bg-primary p-3">
                                                    {{totalQuest * positiveMarks}}
                                                    </span>     
                                            </h3>
                                        </div>
                                        
                                    </div>
                                    <div class="col-md-3 col-lg-3 col-sm-6 col-xs-6">
                                        <div class="card shadow py-4 px-2 text-center scoreboard">
                                            <h3>
                                                Correct <br> Marks <br><br>
                                                <span class="rounded-circle text-white bg-success p-3">
                                                 {{correctAns}}
                                                </span>
                                            </h3>
                                        </div>
                                        
                                    </div>
                                    <div class="col-md-3 col-lg-3 col-sm-6 col-xs-6">
                                        <div class="card shadow py-4 px-2 text-center scoreboard">
                                            <h3>
                                                Wrong <br>Marks <br><br>
                                                <span class="rounded-circle text-white bg-danger p-3">
                                                 -{{wrongAns}}
                                                </span>
                                            </h3>
                                        </div>
                                        
                                    </div>
                                    <div class="col-md-3 col-lg-3 col-sm-6 col-xs-6">
                                        <div class="card shadow py-4 px-2 text-center scoreboard">
                                            <h3>
                                                 Scored <br> Marks <br><br>
                                                <span class="rounded-circle text-white bg-success p-3">
                                                    {{(correctAns - wrongAns).toFixed(2)}}
                                                </span>
                                            </h3>
                                        </div>
                                        
                                    </div>
                                </div>
                                <br>
                            <!-- Progress Bar -->
                                <div class="progress">
                                    <div class="progress-bar progress-bar-success" role="progressbar" :aria-valuenow="(correctAnscount*100)/totalQuest"
                                    aria-valuemin="0" aria-valuemax="100" :style="'width:'+correctAnscount*100/totalQuest+'%'">
                                        {{(correctAnscount*100)/totalQuest}}% Correct Answered ({{correctAnscount}})
                                    </div>
                                </div>
                                <br>  
                                <div class="progress">
                                    <div class="progress-bar progress-bar-warning" role="progressbar" :aria-valuenow="(notAnsweredCount*100)/totalQuest"
                                    aria-valuemin="0" aria-valuemax="100" :style="'width:'+notAnsweredCount*100/totalQuest+'%'">
                                        {{(notAnsweredCount*100)/totalQuest}}% Not Answered ({{notAnsweredCount}})
                                    </div>
                                </div>
                                <br>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-danger" role="progressbar" :aria-valuenow="(wrongANScount*100)/totalQuest"
                                    aria-valuemin="0" aria-valuemax="100" :style="'width:'+wrongANScount*100/totalQuest+'%'">
                                        {{(wrongANScount*100)/totalQuest}}% Wrong Answered ({{wrongANScount}})
                                    </div>
                                </div>
                            <!-- Progress Bar -->
                    </div>
                         
                    <!-- question List -->
                        <div v-for="(test,index) in getClassInfo" :key="index" class="card p-5 bg-white shadow mb-3">
                            <div class="text-black" :id="'q'+ (index+1)"> 
                                <span class="font-weight-bold"> Quest. {{++index}}</span>
                                    <div v-html="test.question"></div>
                            </div>
                            <br>
                            <h3 :class="ansArr[index] != '' ? 'text-warning' :'text-danger'">
                                <span v-if="ansArr[index] != '' ">
                                    Your Answer : {{ ansArr[index] }}
                                </span>
                                <span v-else>
                                    Not Answered
                                </span>
                                
                            </h3>
                            
                            <br>
                            <div class="form-check">
                                <label :class="[test.correctAns == 'a' ? 'text-white bg-success py-1 rounded':'',ansArr[index] =='a' && test.correctAns !='a' ? 'text-white bg-danger py-1 rounded':'']" class="form-check-label pr-2">
                                    
                                    {{test.ansA}} 
                                </label>
                            </div>
                            <div class="form-check">
                                <label class="form-check-label pr-2" :class="[test.correctAns == 'b' ? 'text-white bg-success py-1 rounded':'',ansArr[index] =='b' && test.correctAns !='b' ? 'text-white bg-danger py-1 rounded':'']">
                                    
                                    {{test.ansB}}
                                </label>
                            </div>
                            <div class="form-check">
                                <label class="form-check-label pr-2" :class="[test.correctAns == 'c' ? 'text-white bg-success py-1 rounded':'',ansArr[index] =='c'  && test.correctAns !='c' ? 'text-white bg-danger py-1 rounded':'']">
                                    
                                    {{test.ansC}}
                                </label>
                            </div>
                            <div class="form-check">
                                <label class="form-check-label pr-2 " :class="[test.correctAns == 'd' ? 'text-white bg-success py-1 rounded':'',ansArr[index] =='d' && test.correctAns !='d' ? 'text-white bg-danger py-1 rounded':'']">
                                    
                                    {{test.ansD}} <!--span class="text-white"><i class="la la-2x la-check"></i></span-->
                                </label>
                            </div>
                            <br>
                            <h4>Explaination:</h4>
                            <div v-html="test.answerJustification"></div>
                            
                        </div>
                    <!-- question List -->
                </div>
            </div>
            <div class="col-md-1"></div>
             
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return {
            resultList: {},
            chapId : "",
            loadDisplayed:"none",
            ansArr: [],
            wrongAns:"",
            wrongANScount:"",
            correctAns:"",
            correctAnscount:"",
            notAnsweredCount:"",
            positiveMarks :"",
            negativeMarks :"",
            totalQuest:"",
            getClassInfo:{},
            
            
        }
    },
    beforeCreate(){
        this.$Progress.start();
    },
    created(){
        this.chapId = this.$route.params.chapterId
        axios.get("/user-test-attempts-results/"+this.chapId)
        .then((response) => this.resultList = response.data)
        .catch((error) => console.log(error));  


        this.$Progress.finish();

    },
    methods:{
        getTestResult(subTestId){
            this.loadDisplayed="block";
            axios.get("/test-result-calculation/"+subTestId)
            .then((response) => {
                this.notAnsweredCount = response.data.notAnsweredCount;
                this.wrongAns=response.data.wrongAns.toFixed(2);
                this.wrongANScount=response.data.wrongANScount;
                this.correctAns=response.data.correctAns.toFixed(2);
                this.correctAnscount=response.data.correctAnscount;
                this.totalQuest=response.data.totalQuest;
                this.ansArr = response.data.ansArr;
                this.getClassInfo = response.data.originalTest;
                this.positiveMarks = response.data.positiveMark;
                this.negativeMarks = response.data.negativeMark;
                this.loadDisplayed="none";
            } )
            .catch((error) => console.log(error));  
        }
    }
    
}
</script>
<style scoped>
    .progress
    {
        height: 2rem;
    }
    .progress-bar-success{
        background-color: #5cb85c;
    }
    .progress-bar-warning {
        background-color: #f0ad4e;
    }
    .progress-bar-danger {
        background-color: #d9534f;
    }
    .fullpage {
        height: 100%;
        width: 100%;
        position: fixed;
        background: #000000ad;
        z-index: 9;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .center-text {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 100vh;
        color: white;
        }
        .scoreboard{
            height: 200px;
        }
</style>
