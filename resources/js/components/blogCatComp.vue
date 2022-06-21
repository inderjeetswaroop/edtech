<template>
        <div>
            <add-blog-cat :myCatlist="list" @updateblogcatlist="updateCatList"></add-blog-cat>
            <edit-blog-cat :catId="cid" :myCatlist="list" @updateblogcatlist="updateCatList"></edit-blog-cat>
            <delete-blog-cat :catId="cid"  @updateblogcatlist="updateCatList"></delete-blog-cat>
            
            <button class="btn btn-primary float-right mb-3" type="button" data-toggle="modal" data-target="#blogcatmodal">Add Category</button>
            
            
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Category Name</th>
                        <th>Parent Category</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(cList,index) in list" :key="index">
                        <td> {{index+1}} </td>
                        <td>
                            {{cList.catName}}
                        </td>
                        <td>
                            <blog-cat-info :catId="cList.parentCat"></blog-cat-info>    
                            
                        </td>
                        <td>
                            <span v-if="cList.status == 1" class="badge badge-success">Active</span>
                            <span v-else class="badge badge-danger">Disabled</span>
                            <button class="btn btn-link" @click="changeCatstate(cList.id)"> Change Status</button>
                        </td>
                        <td>
                            <div class="btn-group">
                                <button class="btn btn-primary" data-toggle="modal" data-target="#editblogcatmodal" @click="setCatId(cList.id)">Edit</button>
                                <button class="btn btn-danger" data-toggle="modal" data-target="#deleteblogcatmodal" @click="setCatId(cList.id)">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>    
</template>
<script>
Vue.component('add-blog-cat', require('./AddblogcatComp.vue').default);
Vue.component('edit-blog-cat', require('./editblogcatComp.vue').default);
Vue.component('delete-blog-cat', require('./deleteblogcatComp.vue').default);
Vue.component('blog-cat-info', require('./singleblogcatInfoComp.vue').default);
export default {
    data(){
        return {
            list:{},
            cid:"",
        }
    },
    created(){
                axios.get("/course-dashboard/blogs-setting/blog-category-list/")
            .then((response) => this.list = response.data)
            .catch((error) => console.log(error));
    },
    methods:{
        changeCatstate(catId){
             axios.get("/course-dashboard/blogs-setting/change-blog-cat-status/"+ catId)
            .then((response) => this.list = response.data)
            .catch((error) => console.log(error));
        },
        updateCatList(response) {
                this.list = response.data;
        },
        setCatId(catId) {
            this.cid = catId;
        }
    }

    
}
</script>
<style scoped>

</style>