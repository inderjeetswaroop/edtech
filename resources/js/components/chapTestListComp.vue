<template>
        <div class="table-responsive">
            
                
              <table class="table table-hovered">
                  <thead>
                      <tr>
                          <th>Sr. No.</th>
                          <th class="text-primary">Question</th>
                          <th class="text-danger">Opt A</th>
                          <th class="text-danger">Opt B</th>
                          <th class="text-danger">Opt C</th>
                          <th class="text-danger">Opt D</th>
                          <th class="text-success">Correct Ans</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(cInfo,index) in clasInfo" :key="index" >
                          <td><b>{{index+1}}</b></td>
                          <td><section v-html="cInfo.question"></section></td>
                          <td>{{cInfo.ansA}}</td>
                          <td>{{cInfo.ansB}}</td>  
                          <td>{{cInfo.ansC}}</td>
                          <td>{{cInfo.ansD}}</td>
                          <td>
                              <div v-html="cInfo.correctAns"></div>
                          </td>
                          <td>  
                               <div class="btn-group">
                                   <router-link  :to="{name:'editChapTestComp',params: {testquestId:cInfo.id }}" class="btn btn-primary btn-xs"><i  class="fa fa-pencil mr-2"></i>Edit</router-link>
                                   <button class="btn btn-danger btn-xs"><i title="Delete Class" class="fa fa-trash mr-2"></i>Delete</button>
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
                    tstId:"",
                    chaplist:{},
                }
            },
             created(){
                 this.chapId = this.mychapId;
                    axios.get("/course-dashboard/course-test/test-list/"+this.chapId)
                    .then((response) => this.clasInfo = response.data)
                    .catch((error) => console.log(error));
             },
            methods:{
                deleteClass(Testid){
                        this.tstId = Testid;
                },

                chapclassList(response){
                        this.clasInfo = response.data;
                }
            } 
    }
</script>
<style scoped>

</style>
