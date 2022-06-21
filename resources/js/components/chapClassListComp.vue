<template>
        <div>
              <table class="table">
                  <thead>
                      <tr>
                          <th>Sr. No.</th>
                          <th>Topic Name</th>
                          <th>Class Type</th>
                          <th>Class date & Time</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(cInfo,index) in clasInfo" :key="index" >
                          <td><b>{{index+1}}</b></td>
                          <td><b>{{cInfo.topicName}}</b></td>
                          <td>
                                <span v-if="cInfo.classType == 1">
                                        <i class="fa fa-video-camera btn btn-primary fa-3x" :disabled="true"></i> Video Class
                                </span>   
                                <span v-else-if="cInfo.classType == 2">
                                        <i class="fa fa-file btn btn-warning fa-3x" :disabled="true"></i> Notes
                                </span> 
                                <span v-else>
                                        <i class="fa fa-video-camera btn btn-primary fa-3x" :disabled="true"></i> Video Class
                                </span>  
                                
                          </td>
                          <td><b>{{cInfo.classdate +" "+ cInfo.classTime}}</b></td>
                          <td>  
                               <div class="btn-group">
                                   <router-link :to="{name:'editChapClassComp',params: {classId: cInfo.id}}" class="btn btn-primary btn-xs"><i class="fa fa-pencil mr-2"></i>Edit</router-link>
                                   
                                   <button  @click="deleteClassinfo(cInfo.id)" class="btn btn-danger btn-xs"><i title="Delete Class" class="fa fa-trash mr-2"></i>Delete</button>
                                </div> 

                          </td>
                      </tr>
                  </tbody>
              </table>
            
        </div>
</template>
<script>

    export default {
            props:["mychapId"],
            data(){
                return { 
                    chapId:"",
                    clasInfo:{},
                    clsId:"",
                    chaplist:{},
                    successmsg:"",
                }
            },
            created(){
                    this.chapId = this.mychapId;
                    axios.get("/course-dashboard/course-classes/class-list/"+this.chapId)
                    .then((response) => this.clasInfo = response.data)
                    .catch((error) => console.log(error));
            },
             
            methods:{
                deleteClassinfo(classId){
                    if (window.confirm("are you sure to delete this class?")) {
                        axios.get("/course-dashboard/course-classes/class-delete/"+classId)
                        .then((response) => this.clasInfo = response.data)
                        .catch((error) => console.log(error));    

                        // window.reload();
                    }
                    
                },
                 
            } 
    }
</script>
<style scoped>

</style>
