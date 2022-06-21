<template>
        <div>
                <!-- The Modal -->
            <div class="modal" id="editblogcatmodal">
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
                        <form class="needs-validation" @submit.prevent="upload" >
                            <div class="form-group">
                                <label for="comment"><b >Article Category Name :</b></label>
                                <input type="text" class="form-control" rows="1" v-model="catInfo.catName"   placeholder="Article Category Name">
                            </div>
                            <div class="form-group">
                                <label for="topic"><b>Parent Category:</b></label>
                                <select v-model="catInfo.parentCat" class="form-control">
                                    <option  value="0">No Parent</option>
                                    <option v-for="cList in catlist" :key="cList.id" :value="cList.id">{{cList.catName}}</option>
                                </select>
                            </div>
                             <div class="form-group">
                                <label for="comment"><b >Category SEO Title :</b></label>
                                <input type="text" class="form-control"  v-model="catInfo.seoTitle"   placeholder="Category SEO Title">
                            </div>
                            <div class="form-group">
                                <label for="comment"><b >Category Meta Keywords :</b></label>
                                <textarea row="2" class="form-control"  v-model="catInfo.metaKeys"   placeholder="Category Meta Keywords"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="comment"><b >Category Meta Description :</b></label>
                                <textarea row="2" class="form-control" v-model="catInfo.metaDescription"   placeholder="Category Meta Description"></textarea>
                            </div>
                            <button class="btn btn-primary" type="submit">UPDATE</button>
                        </form>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                    </div>
                </div>
            </div>
            
        </div>    
</template>
<script>
export default {
    props:["myCatlist","catId"],
    data() {
        return {
            catlist:{},
            catInfo:"",
            successmsg:"",
            categoryId:"",
        }
    },
    created(){
        
            this.catlist = this.myCatlist;
            this.categoryId = this.catId;

            axios.get("/course-dashboard/blogs-setting/single-blog-cat-info/"+ this.categoryId)
            .then((response) => this.catInfo=response.data)
            .catch((error) => console.log(error));
            
        
       },
    methods:{
        upload(){
                this.successmsg = "Please wait...";
                const formdata = new FormData();
                formdata.append("catname",this.catInfo.catName);
                formdata.append("pname",this.catInfo.parentCat);
                formdata.append("seoTitle",this.catInfo.seoTitle);
                formdata.append("mKeywords",this.catInfo.metaKeys);
                formdata.append("mDescription",this.catInfo.metaDescription);
                formdata.append("catId",this.categoryId);                
                
                axios.post("/course-dashboard/blogs-setting/update-blog-category/",formdata)
                .then((data) =>{
                    this.$emit("updateblogcatlist",data)
                    this.successmsg = "Blog Category updated successfully";
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