<template>
    <div class="container pt-4">
            <div class="row">
                <div class="col-md-8 p-2">
                    <div class="card">
                        <div class="card-body">
                            <div v-if="instruc == 0">
                                   <div v-html="singleMcqdateInfo.instruction">
                                   </div> 
                                   <br>
                                   <button @click="startTest"  class="btn btn-primary">Start Test</button>
                            </div>
                            <form v-if="instruc != 0" method="post" class="needs-validation pt-4"  novalidate="" @submit.prevent="submitanswer"> 
                                <p class="text-danger">Imp Note : You can remove your selection by double click on selected ( <i class="la la-dot-circle" style="color:blue"></i> )</p> 
                                <div v-for="(test,index) in questListId" :key="index" class="card p-5 bg-white shadow mb-3">
                                    <div class="text-black" :id="'q'+ (index+1)"> 
                                        <span class="font-weight-bold"> Question {{++index}}</span>
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
                    </div>
                </div>
                <div class="col-md-4 p-2">
                    <div class="card card-item">
                        <div class="card-body">
                            <h3 class="card-title fs-18 pb-2">Exclusive Launches </h3>
                            <div class="divider"><span></span></div>
                            <div v-for="(comeList,index) in courseLists" :key="index" class="mb-2 card p-2 ">
                                <div v-if="index < 3" class="row">
                                    <div class="p-2 pl-4 my-auto col-md-3">
                                        <img :src="comeList.featureImg" class="img-fluid" alt="" style="height:50px;width:100px">
                                    </div>
                                    <div class="p-2 my-auto col-md-9">
                                        <p>{{comeList.courseName }}</p>
                                        <p class="font-weight-bold text-black">{{comeList.courseStartDate}}</p>    
                                        <router-link class=" text-theme " :to="'/course/'+comeList.courseName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')+'/'+comeList.id">View The Program <i class="la la-arrow-right pl-3"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- end card -->
                </div>
            </div>
        </div>
</template>
<script>
export default {
    data() {
        return {
            dateId :"",
            questListId :{},
            courseLists:{},
            testanswer:[],
            instruc:0,
            singleMcqdateInfo:"",
            myData:"hello description",
            
        }
    },
    meta: function () {
        return [
                { name: 'description', content: this.myData }
            ]
        },
    created() {
        this.dateId = this.$route.params.dateid;
        
        axios.get("/free-mock-mcq-quest-list/"+this.dateId)
            .then((response) => this.questListId = response.data)
            .catch((error) => console.log(error));
        
        // course lIst
        axios.get("/top-courses/3")
            .then((response) => this.courseLists = response.data)
            .catch((error) => console.log(error));
        // course lIst    
        
        // single mcq date
        axios.get("/single-mcq-date-info/"+this.dateId)
            .then((response) => this.singleMcqdateInfo = response.data)
            .catch((error) => console.log(error));

        // single mcq date
    },
    methods:{
        submitanswer(){
            alert("There is some server config issue. Please try after some time.");
        },
        uncheckMe(str){
             if (str.target.checked == true) {
                 str.target.checked = false;
             }
        },
        startTest(){
            this.instruc = 1;
        }
    }
}
</script>