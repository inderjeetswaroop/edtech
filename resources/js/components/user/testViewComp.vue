<template>
        <div class="bg-light">
            
            <div class="text-center mt-4 pt-3">   
                    <h2 class="test-title">{{testName.replace(/-/g," ")}} </h2>
                </div>            
            <br>    
            <!-- count -->
                <div v-if="instructionRead == true" class="testCountdown shadow">
                    <div class="container d-flex align-items-center flex-wrap">
                        <div >
                            <h4 class="timerHead">Test will <br> auto submit in - {{testTime}}</h4>
                        </div>
                        
                        <div class="">   
                            <my-countdown @timerEnd="testFinish" v-bind:end="testTime"></my-countdown>
                        </div>
                    </div>
                    
                </div>
                
            <!-- count -->
            <div class="fullpage" :style="{display:loadDisplayed}">
                <h3 class="center-text" >Please wait <div class="spinner-border text-light"></div></h3>
            </div>

                <div v-show="usrAttempt > 0"  >
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <div class="card py-1 px-md-5 px-sm-1 bg-white shadow mb-3">
                                 <table class="table table-striped table-hovered">
                                    <tr>
                                        <th>
                                            Total Attempts Allowed
                                        </th>
                                        <th>
                                            You Attempted
                                        </th>
                                        <th>
                                            Remaining Attempted
                                        </th>
                                        
                                    </tr>
                                    <tr>
                                        <td>
                                            <h3><span class="badge badge-success p-2">{{totalAttempt}}</span></h3>
                                            
                                        </td>
                                        <td>
                                            <h3><span class="badge badge-primary p-2">{{usrAttempt}}</span></h3>
                                            
                                        </td>
                                        <td>
                                            <h3><span class="badge badge-danger p-2">{{totalAttempt - usrAttempt}}</span></h3>
                                            
                                        </td>
                                    </tr>
                                    
                                </table>
                                <router-link :to="'/test-result/'+testName+'/'+chapId" class="btn theme-btn mb-3" :style="'width:200px;padding:5px 10px'">Check Results</router-link>   
                                
                            </div>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                    
                </div>

                
                <div v-show="instructionRead == false && testAllowed == true" class="row">
                     <div class="col-md-2"></div>
                      <div class="col-md-8">
                        <div class="card p-5 bg-white shadow mb-3">
                            <div v-html="testInstruction"></div>
                            <br>
                           <button v-if="testReadyState == 1" @click="startTest" class="btn theme-btn mb-3" :style="'width:200px;padding:5px 10px'">Start Test</button> 
                            <button v-else  class="btn btn-secondary mb-3" :style="'width:auto;padding:5px 10px'">Test Will Start at : {{testSchedule.replace(/T/g," ")}}</button>
                            
                        </div>  
                      </div>
                        <div class="col-md-2"></div>
                </div>
                

            <div v-show="instructionRead == true">
                <div v-show="testAllowed == true" class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <br>
                        <div class="numberBox border border-secondary p-3 bg-white">
                            <div class="d-flex flex-wrap">
                                <div v-for="(numbering,index) in getClassInfo" :key="index">
                                    <a :href="'#q'+index" v-show="index !=0" :class="(testanswer[index] == null)?'btn-secondary':'btn-success'" class="btn m-1 btn-sm">{{index}}</a>
                                </div>
                                <div>
                                    <button class="btn mx-2 btn-secondary btn-sm m-1">{{getClassInfo.length}}</button>
                                </div>
                            </div>  
                        </div>   
                        <br>
                    
                    <form method="post" class="needs-validation pt-4"  novalidate="" @submit.prevent="submitanswer"> 
                        <p class="text-danger">Imp Note : You can remove your selection by double click on selected ( <i class="la la-dot-circle" style="color:blue"></i> )</p> 
                        <div class="card p-5 bg-white mb-3">
                            <button class="btn btn-lg btn-primary float-right">Submit Test</button>
                        </div>
                        <div v-for="(test,index) in getClassInfo" :key="index" class="card p-5 bg-white shadow mb-3">
                            <div class="text-black" :id="'q'+ (index+1)"> 
                                <span class="font-weight-bold"> Question. {{++index}}</span>
                                    <div v-html="test.question"></div>
                            </div>
                            <br>
                            <div class="form-check">
                                <label class="form-check-label" >
                                    <input class="form-check-input" type="radio" value="a" v-model="testanswer[index]" @dblclick="uncheckMe">
                                    {{test.ansA}}
                                </label>
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" >
                                    <input class="form-check-input" type="radio" value="b" v-model="testanswer[index]" @dblclick="uncheckMe">
                                    {{test.ansB}}
                                </label>
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" >
                                    <input class="form-check-input" type="radio" value="c" v-model="testanswer[index]" @dblclick="uncheckMe">
                                    {{test.ansC}}
                                </label>
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" >
                                    <input class="form-check-input" type="radio" value="d" v-model="testanswer[index]" @dblclick="uncheckMe">
                                    {{test.ansD}}
                                </label>
                            </div>
                            <br>
                            
                        </div>
                        <div class="card p-5 bg-white mb-3">
                            <button class="btn btn-lg btn-primary float-right">Submit Test</button>
                        </div>
                        
                        </form>
                    </div>
                    <div class="col-md-2"></div>
                </div>
            </div>
            
        </div>
</template>
<script>

Vue.component('my-countdown', require('./mycountdownComp.vue').default);
export default {
    props:["chapId","testName"],
    data(){
        return {
            getClassInfo:{},
            testanswer:[],
            loadDisplayed:"none",
            testAllowed:true,
            usrAttempt :"",
            totalAttempt:"",
            // attemptsInfo:{},
            instructionRead:false,
            testInstruction:"",
            testSchedule:"",
            testReadyState:0,
            testTime: "",
            testing :"Sun Feb 13 2022 13:32:00 ",
            
        }
    },
    beforeCreate(){
        
    },
    created(){
            this.loadDisplayed = "block";
            
            // Check for attempts
            axios.get("/user-test-attempts/"+this.chapId)
            .then((response) => {
                // console.log(response.data.msg);
                this.loadDisplayed = "none";
                if (response.data.msg == "success") {
                    // this.attemptsInfo = response.data.userAttemptsInfo;
                    this.usrAttempt = response.data.userAttemptscounts;
                    this.totalAttempt = response.data.totalTestAttempts;
                    this.testInstruction = response.data.testInstruction;
                    this.testSchedule = response.data.testSchedule;
                    this.testReadyState = response.data.testReadytoStart; 
                    // alert(this.testSchedule);
                    var dt = new Date();
                    this.testing =  dt.setHours( dt.getHours() + 2 );
                    this.testTime = new Date(this.testing).toString().split('GMT')[0];
                    // alert(this.testTime);
                    if (response.data.totalTestAttempts > response.data.userAttemptscounts) {
                        this.testAllowed =true;
                        // Get first class info
                        axios.get("/user-test-list/"+this.chapId)
                        .then((response) => {
                            this.getClassInfo = response.data;
                            
                            })
                        .catch((error) => console.log(error));               
                    }
                    else{
                        this.testAllowed =false;
                    }        
                }
                else{
                    this.$router.push("/user-login");
                }
            })
            .catch((error) => console.log(error));

         
         
         

    },
    methods:{
        submitanswer(){
            this.loadDisplayed = "block";
            const formdata = new FormData();
            formdata.append("chapterId",this.chapId);
            formdata.append("submitedAns",this.testanswer);
            axios.post("/submit-test-answer",formdata)
                .then((res) =>{
                    // console.log(res.data.submitTest);
                    this.$router.push("/test-result/"+this.testName+"/"+this.chapId+"/"+res.data.submitTest);
                    // after submitted successfully push to result page
                })
                .catch(error => {
                    console.log(error);
                    this.loadDisplayed = "none";
                })
        },
        startTest(){
            this.instructionRead=true;
        },
        testFinish(){
            alert("File has submitted")
            this.submitanswer();
        },
        uncheckMe(str){
             if (str.target.checked == true) {
                 str.target.checked = false;
             }
        }
    }
}
</script>
<style scoped>
    .timerHead{
            font-size:22px;
            margin-right: 44px;
            }
    html {
        scroll-behavior: smooth;
    }
    .test-title
    {
         text-transform:capitalize;
         color: black;
    }
    .text-black{
        color: black;
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
     .testCountdown{
        position: fixed;
        width: 100%;
        background: white;
        z-index: 9;
        text-align: center;
        bottom: 0;
     }   
     @media screen and (max-width: 768px) {
            
            .timerHead{
                font-size:14px;
            }
        }
    
</style>