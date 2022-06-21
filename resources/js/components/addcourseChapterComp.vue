<template >
    <div>
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10 p-2">
                <div class="card">  
                    <div class="card-body p-4">
                        <div class="text-right">
                            <router-link :to="{name:'couseChapsetting',params: { courseId: courseid }}" class="btn btn-danger btn-xs py-2 px-5">Back to List</router-link>
                        </div>
                        <form class="needs-validation add-product-form" novalidate="" @submit.prevent="addcourseChap">
                            <div class="form-group">
                                <label >Chapter or module Name :</label>
                                <input type="text" v-model="chapName" class="form-control" placeholder="Enter Chapter/Module name">
                                <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.chaptername" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->
                            </div>
                            <div class="form-group">
                                <label >Chapter or module Duration :</label>
                                <input type="text" v-model="duration" class="form-control" placeholder="Chapter or module Duration">
                            </div>
                            <div class="form-group">
                                <label>Chapter/Test Notes (<span class="text-danger">In case of test series please write here instruction</span>)</label>
                                <tinymce id="chapadding" v-model="instruction" class="form-control"></tinymce>    
                            </div>
                            <div class="form-group">
                                <label>Number Of Attempts(In case of Prelims test series):</label>
                                <input type="number" v-model="testAttemps" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Schedule Test(In case of Prelims test series):</label>
                                <input type="datetime-local" v-model="scheludTime"  class="form-control" >
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
    </div>
</template>
<script>
export default {
    data() { 
        return{
            courseid:"",
            chapName:"",
            duration:"",
            instruction:"",
            error:[],
            testAttemps:1,
            scheludTime:"",
            successmsg:"",
            msgCls:"",
        }
        },
    created() {
        this.courseid=this.$route.params.courseId;
    },
    methods:{
        addcourseChap(){
            this.msgCls="text-success";
            this.successmsg = "Please Wait..";
            const formdata = new FormData();
            formdata.append("chaptername",this.chapName);
            formdata.append("chapterduration",this.duration);
            formdata.append("topicnotes",this.instruction);
            formdata.append("attempts",this.testAttemps);
            formdata.append("scheludTime",this.scheludTime);
            formdata.append("corseId",this.courseid);

             axios.post("/course-dashboard/add-new-chapter-data",formdata)
                .then((data) =>{
                    // console.log(data.data);
                    this.chapName="";
                    this.duration="";
                    this.instruction ="";
                    this.testAttemps=1;
                    this.scheludTime = "";
                    this.successmsg = "Chapter/Module is added successfully";
                    this.error = "";
                
                })
                .catch(error => {
                    this.msgCls = "text-danger";
                     this.successmsg = "Please Fix error";
                    this.error = error.response.data.errors;
                    console.log(this.error);
                })
        }
    }
}
</script>