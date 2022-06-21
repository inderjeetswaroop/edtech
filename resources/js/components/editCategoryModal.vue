<template>
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                
                
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Edit Product Category  </h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <h3 class="text-success">{{successmsg}}</h3>
                    <form class="needs-validation" @submit.prevent="upload" enctype="multipart/form-data">
                        <div class="form">
                            <div class="form-group mb-0">
                                <label for="validationCustom02" class="mb-1">Category Name :</label>
                                <input type="text" v-model="sCatdata.catname" class="form-control" />
                                <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.catname" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->
                            </div>
                             <div class="form-group mb-0">
                                <label for="validationCustom02" class="mb-1">Parent Category :</label>
                                <select class="form-control" v-model="parentCat" >
                                    <option value="0">Select Parent Category</option>
                                    <option v-for="cList in catList" :key="cList.id" v-bind:value="cList.id">
                                        {{cList.catname}}
                                    </option>
                                </select>
                               
                                
                            </div>
                            
                            <div class="form-group mb-0">
                                <label for="validationCustom02" class="mb-1">Seo Keyword:</label>
                                <textarea v-model="sCatdata.keywords" rows="2" placeholder="SEO Keywords" class="form-control"></textarea>
                                
                            </div>
                            <div class="form-group mb-0">
                                <label for="validationCustom02" class="mb-1">Seo Description:</label>
                                <textarea v-model="sCatdata.description" rows="4" placeholder="SEO Description" class="form-control"></textarea>
                                
                            </div>
                            <br>
                            <div class="form-group">
                                <addimage-input :imagecount="1" @getImageData="imglist"></addimage-input>
                                <img v-if="imageList" class="float-right" :src="imageList" height="70" width="70">
                            </div>
                            <!--div class="form-group mb-0">
                                <label for="validationCustom02" class="mb-1">Category image :</label>
                                <p><input type="file" @change="handleOnchange" class="btn btn-primary" />
                                <span v-if="sCatdata.catimage != ''">
                                    <img  :src="localhos+sCatdata.catimage"  class="img-thumb">
                                </span>  </p>
                                <!- Error msg ->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.mainImage" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!- Error msg ->
                            </div-->
                        </div>
                        <br>
                        <button class="btn btn-primary" type="submit">Save</button>
                   </form>
                </div>
                <div class="modal-footer">
                    
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                </div>
                
            </div>
        </div>
    </div>
    
</template>

<script>
Vue.component('addimage-input', require('./imageInputComp.vue').default);
    export default {
        props: ["sCatdata"],
        data() {
            return{
                localhos : "http://localhost/myCom/storage/app/public/",
                image : this.sCatdata.catimage,
                fPath : "",
                error : [],
                successmsg:"",
                catList :{},
                parentCat :"0",
                imageList:"",
                
                
                }
        },

        created(){
                // console.log("mounted");
                axios.get("category-raw-list")
                .then((response) => {
                    this.catList = response.data;
                    this.parentCat = catList.parent_category;
                    this.imageList = catList.catimage;
                    })
                .catch((error) => console.log(error));
            },

        methods: {
           
            imglist(response){
                this.imageList = response.src;
            },
            
            upload()
            {

                const formdata = new FormData();
                formdata.append("mainImage",this.imageList);
                formdata.append("catname",this.sCatdata.catname);
                formdata.append("descrip",this.sCatdata.description);
                formdata.append("keyword",this.sCatdata.keywords);
                 formdata.append("pCat",this.sCatdata.parent_category);
                formdata.append("catId",this.sCatdata.id);
                
                axios.post("edit-category-data",formdata)
                .then((data) =>{
                    // console.log(data.data);
                    this.$emit("catAdded",data);
                   this.error = "";
                   this.catname = "";
                   this.keys = "";
                   this.descrip = "";
                   this.parentCat = "0";
                   this.imageList = "";

                 this.successmsg = "Category updated successfully";
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
        .img-thumb{
            width:100px;
        }
</style>