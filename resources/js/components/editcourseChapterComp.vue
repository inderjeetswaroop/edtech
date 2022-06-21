<template>
    <div>
        <div class="text-right">
            <router-link v-if="chapInfo" :to="{name:'couseChapsetting',params: { courseId: chapInfo.courseId }}" class="btn btn-danger btn-xs py-2 px-5">Back to List</router-link>
        </div>
        <br>    
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <div v-if="chapInfo" class="card">
                    <div class="card-body p-5">
                        <form  method="post" novalidate="" class="needs-validation add-product-form" @submit.prevent="chapupdate" >
                            <h3 class="text-success">{{successmsg}}</h3>
                            <!-- <h1>{{chapInfo}}</h1> -->
                            <div class="form">
                            
                                <div class="form-group ">
                                    <label for="validationCustom02" class="mb-1">Chapter or module Name :</label>
                                <input type="text" v-model="chapInfo.chaptername" class="form-control" placeholder="Chapter or module Name">
                                </div>
                                <br>
                                <div class="form-group">
                                    <label for="validationCustom02" class="mb-1">Chapter or module Duration :</label>
                                    <input type="text" v-model="chapInfo.chapDuration" class="form-control" placeholder="Chapter or module Duration">
                                </div>
                                <div class="form-group">
                                    <label for="d55">Chapter/Test Notes(<span class="text-danger">In case of test series please write here instruction</span>)</label>
                                    <tinymce id="d55" v-model="chapInfo.topicNotes" ></tinymce>    
                                </div>
                                <div class="form-group">
                                    <label for="comment">Number Of Attempts(In case of Prelims test series):</label>
                                    <input type="number" v-model="chapInfo.attempts"  class="form-control"  placeholder="Number Of Attempts">
                                </div>
                                <div class="form-group">
                                    <label for="comment">Schedule date and time(In case of Prelims test series):</label>
                                    <!-- <span class="text-warning">{{chapInfo.testSchedule}}</span> -->
                                    <input type="datetime-local" v-model="chapInfo.testSchedule"  class="form-control" step="any" >
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
    </div>
</template>
<script>
export default {
      data() { 
          return {
              chapid:"",
              chapInfo:"",
              successmsg:"",
              msgCls:"",
          }
      },
      created() { 
          this.chapid=this.$route.params.chapterId;

          axios.get("/course-dashboard/single-chapter-info/"+this.chapid)
            .then((response) => {
                this.chapInfo = response.data
                
                })
            .catch((error) => console.log(error));
      },
      methods:{
          chapupdate()
            {
                this.successmsg = "Please wait..";
                 const formdata = new FormData();
                formdata.append("chaptername",this.chapInfo.chaptername);
                formdata.append("chapterduration",this.chapInfo.chapDuration);
                formdata.append("topicnotes",this.chapInfo.topicNotes);
                formdata.append("attempts",this.chapInfo.attempts);
                formdata.append("scheludTime",this.chapInfo.testSchedule);                
                formdata.append("chapid",this.chapInfo.id);                

                axios.post("/course-dashboard/edit-chapter-data",formdata)
                .then((data) =>{
                    // this.chapterlist = data.data;
                    this.msgCls="text-success";
                    this.successmsg = "Course Chapter updated successfully";
                })
                .catch(error => {
                    this.msgCls="text-danger";
                    this.successmsg = "Please fix error.";
                    this.error = error.response.data.errors;
                     this.successmsg = this.error;
                })

                
            }
      }  
}
</script>