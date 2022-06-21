<template>
        <div>
                <!-- The Modal -->
            <div class="modal" id="deleteblogcatmodal">
                <div class="modal-dialog">
                    <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Article Category {{categoryId}}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <h3 class="text-success">{{successmsg}}</h3>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <div class="d-flex">
                            <div class="mr-3">
                                <button type="button" class="btn btn-danger" @click="deleteBlogCat">Delete</button>
                            </div>
                            <div>
                                <button type="button" class="btn btn-info" data-dismiss="modal">Cancle</button>
                            </div>
                        </div>
                        
                    </div>

                    </div>
                </div>
            </div>
            {{normalizedSize}}
        </div>    
</template>
<script>
export default {
    props:["catId"],
    data() {
        return {
            successmsg:"",
            categoryId:"",
        }
    },
    computed:{
        normalizedSize:function(){
            this.categoryId = this.catId;
        
        }
       },
    methods:{
        deleteBlogCat(){
                this.successmsg = "Please wait...";
                const formdata = new FormData();
                formdata.append("catId",this.categoryId);                
                
                axios.post("/course-dashboard/blogs-setting/delete-blog-category/",formdata)
                .then((data) =>{
                    this.$emit("updateblogcatlist",data)
                    this.successmsg = "Blog Category deleted successfully";
                })
                .catch(error => {
                    this.error = error.response.data.errors;
                    console.log(this.error);
                })

        }
    }
}
</script>
<style scoped>

</style>