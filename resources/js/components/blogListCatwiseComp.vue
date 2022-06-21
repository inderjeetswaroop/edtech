<template>
    <div class="table-responsive">
        <h3>Category Name : {{catInfo.catName}}</h3>
        <table class="table table-hovered">
            <thead>
                <tr>
                    <th>Sr.No.</th>
                    <th>Title</th>
                    <th>Published On</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(bList,index) in bloglist" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{bList.title}}</td>
                    <td> {{bList.created_at.replace(/T/g," ").replace(/.000000Z/g," ")}}</td>
                    <td>
                        <span v-if="bList.status == 1" class="text-success">
                            Active
                        </span>
                        <span v-else class="text-danger">
                            De-Activated
                        </span>
                        <br><button class="btn btn-secondary btn-xs" @click="changeStatus(bList.id)">Change Status</button>
                    </td>
                    <td>
                        <div class="btn-group">
                            <a :href="'/course-dashboard/blogs-setting/edit-blog/'+bList.id" class="btn btn-info btn-xs"><i class="fa fa-pencile mr-2"></i>Edit</a>
                            <button class="btn btn-danger btn-xs" @click="deleteBlog(bList.id)"><i class="fa fa-trash mr-2"></i>Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props: ["catid"],
    data(){
        return{
            categoryId: "",
            bloglist: {},
            catInfo:{},
        }
    },
    created(){
        this.categoryId = this.catid;
        axios.get("/course-dashboard/blogs-setting/blog-list-cat-wise/"+this.categoryId)
            .then((response) => this.bloglist = response.data)
            .catch((error) => console.log(error));

        //  Catinfo  
        axios.get("/course-dashboard/blogs-setting/single-blog-cat-info/"+this.categoryId)
            .then((response) => this.catInfo = response.data)
            .catch((error) => console.log(error));
    },
    methods: {
        changeStatus(blogId){
            axios.get("/course-dashboard/blogs-setting/change-blog-status/"+blogId)
            .then((response) => {
                if (response.data == 'success') {
                    location.reload();
                }
            })
            .catch((error) => console.log(error));
        },
        deleteBlog(blogId){
            let text = "Are you sure to delete this articles?";
            if (confirm(text) == true) {
                axios.get("/course-dashboard/blogs-setting/delete-blog/"+blogId)
                .then((response) => {
                    if (response.data == 'success') {
                        location.reload();
                    }
                })
                .catch((error) => console.log(error));
            }
            
        }
    }
}
</script>