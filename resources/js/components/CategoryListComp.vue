<template>
       <div>
                <div class="btn-popup pull-right">
                <!-- Add category Modal -->
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-original-title="test" data-target="#exampleModal">Add Category</button>
                    <catadd-modal @catAdded="refreshCatlist"></catadd-modal>
                <!-- Add category Modal -->
                <!-- Edit category Modal -->
                    <catedit-modal @catAdded="refreshCatlist" v-bind:sCatdata="singCatDetail"></catedit-modal>
                <!-- Edit category Modal -->
                
                <!-- Delete Modal -->
                    <delete-modal @catAdded="refreshCatlist" v-bind:catid="categoryid"></delete-modal>
                <!-- Delete modal -->
                </div>
                
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Sr. No</th>
                                <th>Category Name</th>
                                <th>Parent Category</th>
                                <th>Cat Img</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(cList,index) in catList" :key="index">
                            <td>{{index+1}}</td>
                            <td>{{ cList.catname}} </td>
                            <td>
                                <p v-if="cList.parent_category == 0 || cList.parent_category=='' ">
                                    No Parent
                                </p>
                                <p v-else>
                                    <singcatdetail :cid="cList.parent_category"></singcatdetail>
                                </p>
                            </td>
                            <td><img :src="cList.catimage" alt="" class="img-response"></td>
                            <td>
                                <span v-if="cList.status == 1" class="badge badge-success">Active</span>
                                <span v-else class="badge badge-danger">De-Actived</span>
                                <button type="button" @click="changeCatState(cList.id)" class="btn btn-link ">Change Status</button>
                            </td>
                            <td>
                                <div class="btn-group">
                                    <button type="button" @click="catidToChild(cList.id)" data-toggle="modal" data-original-title="test" data-target="#editModal" class="btn btn-info btn-xs">Edit</button>
                                    <button type="button" @click="deleteCatoryr(cList.id)" data-target="#deleteModal" data-toggle="modal" class="btn btn-danger btn-xs">Delete</button>
                                </div>
                            </td>
                            </tr>      
                            
                            
                        </tbody>
                        </table>
            </div>
       </div>
    
</template>
<script>

Vue.component('catadd-modal', require('./AddcategoryComp.vue').default);
Vue.component('catedit-modal', require('./editCategoryModal.vue').default);
Vue.component('delete-modal', require('./deleteCategorymodal.vue').default);
Vue.component('singcatdetail', require('./singleCategoryComp.vue').default);

export default {
    data(){
        return{
            counter:1,
            localhos : "http://localhost/myCom/storage/app/public/",
            catList : {},
            singCatDetail:{},
            categoryid:"",
            
            
        }
    },
    created() {
            // console.log("mounted");
            axios.get("/course-category-setting/category-raw-list")
            .then((response) => this.catList = response.data)
            .catch((error) => console.log(error));

        },
    methods:{
        refreshCatlist(list) {
            this.catList = list.data;
        },
        catidToChild(id){
            // console.log(id);
            axios.get("/course-category-setting/fetch-single-category/"+ id)
            .then((response) => this.singCatDetail=response.data)
            .catch((error) => console.log(error));
                
        },
        deleteCatoryr(id){
            this.categoryid = id;
        },
        changeCatState(id){
            axios.get("/course-category-setting/change-category-state/"+ id)
            .then((response) => this.catList = response.data)
            .catch((error) => console.log(error));
        },
        

    }

}
</script>
<style scoped>
    .img-response
    {
        width: 50px;
    }
</style>