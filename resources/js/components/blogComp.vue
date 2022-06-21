<template>
    <div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Article Category</th>
                        <th>No. Of Articles</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(cList,index) in list" :key="index">
                        <td>{{index+1}}</td>
                        <td>
                            <span v-if="cList.parentCat != '0'"> -- </span>
                            {{cList.catName}}
                        </td>
                        <td>
                            <count-cat :catId="cList.id"></count-cat>
                            
                        </td>
                        <td>
                            <div class="btn-group">
                                <a :href="'/course-dashboard/blogs-setting/blog-list/'+cList.id"  class="btn btn-danger btn-xs text-white"><i class="fa fa-eye mr-2"></i>View List</a>
                                <a :href="'/course-dashboard/blogs-setting/add-blog/'+cList.id" class="btn btn-success btn-xs text-white"><i class="fa fa-plus mr-2"></i>Add New Article</a>

                            </div>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>

export default {
    data(){
        return {
            list:{},
            
        }
    },
    created(){
                axios.get("/course-dashboard/blogs-setting/blog-category-list/")
            .then((response) => this.list = response.data)
            .catch((error) => console.log(error));
    },
}
</script>
<style  scoped>

</style>