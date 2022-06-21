<template>
    <div>
      <productstate-change :proid="productid" @updateprolist="updatepList"></productstate-change>
        <delete-product :proid="productid" @updateprolist="updatepList"></delete-product>
     <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Sr. No</th>
                    <th>Main Image </th>
                    <th>Course Type</th>
                    <th>Course Name</th>
                    <th>Parents Course</th>
                    <th>Price / Dis. Price</th>
                    <th>Course Category</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pList,index) in prolist" :key="index">
                <td>{{index+1}}</td>
                <td><img :src="pList.featureImg" alt="" class="img-response" height="70" ></td>
                <td>
                    <p v-if="pList.courseType === '0'" class="font-weight-bold text-warning">
                        Test Series
                    </p>
                    <p v-else-if="pList.courseType === '1'" class="font-weight-bold text-success">
                        Class
                    </p>
                    <p v-else  class="font-weight-bold text-success">
                        Class
                    </p>
                    
                </td>
                <td>{{ pList.courseName}}</td>
                <td>
                    <singcoursedetail v-bind:cid="pList.parentCourse"></singcoursedetail>
                </td>
                <td>
                      <h6 class="d-flex flex-row">
                         <b> 
                             <currency-symbol :priceValue="pList.price"></currency-symbol>
                             <currency-symbol class="text-success" v-if="pList.discounted_price" :priceValue="pList.discounted_price"></currency-symbol>
                         </b>
                     </h6>
                        
                </td>
                <td>
                    <!-- {{pList.category}} -->
                    
                    <singcatdetail v-bind:cid="pList.courseCategory"></singcatdetail>
                   
                </td>
                <td>
                    
                    <span v-if="pList.status == 1" class="badge badge-success">Active</span>
                    <span v-else-if="pList.status == 2" class="badge badge-warning">Pending</span>
                    <span v-else class="badge badge-danger">De-activated</span>
                    <br><br>
                    <button @click="changeProState(pList.id)" class="btn btn-default btn-xs" data-target="#changeprostatemodal" data-toggle="modal">Change Status</button>
                    <br>
                    <br>
                    <div v-if="pList.deleted == 1">
                        <span  class="badge badge-danger badge-xs">Temporary Deleted</span>
                        <button @click="restorePro(pList.id)" class="btn btn-primary btn-xs" >Restore</button>    
                    </div>
                      
                    
                </td>
                <td>
                    <div class="btn-group">
                        <router-link :to="{name:'editcourse',params: { courseId: pList.id }}" class="btn btn-info btn-xs">Edit</router-link>
                        <button type="button" @click="deleteProduct(pList.id)" data-target="#prodelModal" data-toggle="modal" class="btn btn-danger btn-xs">Delete</button>
                    </div>
                    <hr>
                    <router-link :to="{name:'couseChapsetting',params: { courseId: pList.id }}" class="btn btn-success btn-xs">
                    
                            <span  v-if="pList.courseType === '1'">
                                Class &#38; Lecture Setting 
                            </span>
                            <span  v-if="pList.courseType === '0'">
                                Test Setting
                            </span>
                            
                    </router-link>
                </td>
                </tr>      
                
                
            </tbody>
            </table>
        </div>
        
    </div>
    
</template>
<script>
Vue.component('singcatdetail', require('./singleCategoryComp.vue').default);
Vue.component('singcoursedetail', require('./singleCourseDetailComp.vue').default);
Vue.component('productstate-change', require('./ChangeProStatusComp.vue').default);
Vue.component('delete-product', require('./deleteProductComp.vue').default);
export default {
    props:["cat"],
    data(){
        return {
            prolist:{},
            catlist:[],
            statevalue:"",
            productid:"",
        }
    },
   
    created() {
        axios.get("/course-dashboard/courses-list")
            .then((response) => this.prolist = response.data)
            .catch((error) => console.log(error));
    },
    methods:{
        deleteProduct(pid) {
             this.productid = pid;
        },
        changeProState(pid){
            
            this.productid = pid;
        },
        updatepList(response) {
                this.prolist = response.data;
        },
        restorePro(pid) {
                axios.get("restore-product/"+pid)
            .then((response) => this.prolist = response.data)
            .catch((error) => console.log(error));
        }
    },
    metaInfo:{
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Default Title',
      // all titles will be injected into this template
      titleTemplate: '%s | My Awesome Webapp',
      meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'foo' }
    ]
    },
    
}
</script>