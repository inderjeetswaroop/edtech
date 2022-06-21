<template>
    <div>
        
        <form class="needs-validation add-product-form" novalidate="" @submit.prevent="addArticle">

                <div class="form-group">
                    
                    <label class="">Article Name</label>
                    <input type="text" class="form-control " v-model="articleInfo.title" placeholder="Enter Course name or title">
                    <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.artName" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                        <!-- Error msg -->
                </div>
                <div class="form-group">
                    
                    <label class="">Publish Date</label>
                    <input type="date" class="form-control " v-model="articleInfo.publishdate" placeholder="Enter Course name or title">
                    <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.publishdate" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                        <!-- Error msg -->
                </div>
                  
                <div class="form-group">
                    <label class="">Tags</label>
                    <multiselect 
                    v-model="artTags" 
                    tag-placeholder="Add this as new tag" 
                    placeholder="Search or add a tag" 
                    label="name" 
                    track-by="id" 
                    :options="options" 
                    :close-on-select="false" 
                    :clear-on-select="false" 
                    :multiple="true" 
                    :taggable="true" 
                    @tag="addTag" 
                    @select="getTagsValues" 
                    @remove="removeTagsValues">
                    </multiselect>
                </div>
                
                <div class="form-group">
                    <label class="">Subject</label>
                    <multiselect 
                    v-model="artSubs" 
                    tag-placeholder="Add this as new subject" 
                    placeholder="Search or add a subject" 
                    label="name" 
                    track-by="id" 
                    :options="optionsSub" 
                    :close-on-select="false" 
                    :clear-on-select="false" 
                    :multiple="true" 
                    :taggable="true" 
                    @tag="addSubs" 
                    @select="getSubsValues" 
                    @remove="removeSubsValues">
                    </multiselect>
                    
                    
                </div>
                <div class="row">
                    
                    <div class="col-md-9">
                        <div class="form-group">
                             <label>Article Category</label> 
                                <select class="form-control" v-model="articleInfo.category" @change="prcats(event)">

                                    <option value="">Select Categories :</option>
                                    <option v-for="cList in catList" :key="cList.id" :value="cList.id" >{{cList.catName}}</option>
                                    
                                </select>   
                        </div>
                            
                             <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.artCat" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                                
                                <label>Article Image</label> <br>
                                
                                <addimage-input :imagecount="1" @getImageData="imglist" ></addimage-input>
                                <img v-if="mainimage" :src="mainimage" height="70" width="70">

                                <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.artImage" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="mb-0">Article Content</label>
                            <tinymce id="d1" v-model="articleInfo.content" class="form-control"></tinymce>    
                        </div>  
                         <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.artcontent" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                        
                    </div>
                    <hr>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="">PDF Link(Optional)</label>
                            <input type="text" class="form-control " v-model="articleInfo.pdflink" placeholder="PDF Link">
                            <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.pdfLink" :key="err" class="text-danger" >
                                            {{err}}
                                        </li>
                                    </ul>
                                </div>
                                <!-- Error msg -->
                        </div> 
                    </div>
                    <div class="col-md-6">
                         <div class="form-group">
                            <label class="">Youtube Embed Video link(Optional)</label>
                            <input type="text" class="form-control " v-model="articleInfo.youtubelink" placeholder="Youtube Embed Video link">
                            <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.youtubeLink" :key="err" class="text-danger" >
                                            {{err}}
                                        </li>
                                    </ul>
                                </div>
                            <!-- Error msg -->
                        </div> 
                    </div>
                    <br><hr>
                    <div class="col-md-12">
                        <h3>SEO Enteries</h3>
                    </div>

                    <div class="col-md-4">
                         <div class="form-group">
                            <label class="">Meta Title</label>
                            <input type="text" class="form-control " v-model="articleInfo.seoTitle" placeholder="Enter Meta Title" >
                            <!-- Error msg -->
                                            <div v-if="error">
                                                <ul>
                                                    <li v-for="err of error.mTitle" :key="err" class="text-danger" >
                                                        {{err}}
                                                    </li>
                                                </ul>
                                            </div>
                                <!-- Error msg -->
                        </div> 
                    </div>

                    <div class="col-md-4">
                         <div class="form-group">
                            <label class="">Meta Keywords</label>
                            <input type="text" class="form-control " v-model="articleInfo.metaKeys" placeholder="Enter Meta Keywords">
                            <!-- Error msg -->
                                            <div v-if="error">
                                                <ul>
                                                    <li v-for="err of error.mKeywords" :key="err" class="text-danger" >
                                                        {{err}}
                                                    </li>
                                                </ul>
                                            </div>
                                <!-- Error msg -->
                        </div> 
                    </div>
                    <div class="col-md-4">
                         <div class="form-group">
                            <label class="">Meta Description</label>
                            <textarea class="form-control" rows="3" v-model="articleInfo.metaDescription" placeholder="Enter Meta Description"></textarea>
                            <!-- Error msg -->
                                            <div v-if="error">
                                                <ul>
                                                    <li v-for="err of error.mDescription" :key="err" class="text-danger" >
                                                        {{err}}
                                                    </li>
                                                </ul>
                                            </div>
                                <!-- Error msg -->
                        </div> 
                    </div>

                </div>
                
                <button class="btn btn-success" type="submit">+Update Article</button>
                <h4 :class="msgcolor">{{successmsg}}</h4>


        </form>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
    components: { Multiselect },
    props: ['articleid'],
    data(){
        return {
            articleInfo: {},
            articleId:"",
            catList:{},
            mainimage: "",
            msgcolor:"",
            successmsg:"",
            mTitle:"",
            mKeywords:"",
            mDescription:"",
            error: [],
            artTags: [],
            artSubs:[],
            options: [],
            optionsSub: [],
            artTagValues:[],
            artSubValues: [],
            defaultags: [],
            defaultSubs: [],         
        }
    },
    created(){
            // article Info
                axios.get("/single-blog-info/"+this.articleid)
                .then((response) => {
                    
                    this.articleInfo = response.data;
                    this.mainimage = response.data.image
                    this.artTagValues = response.data.tags
                    this.artSubValues = response.data.subjects
                    this.defaultags = this.articleInfo.tags.split(',');
                    this.defaultSubs = this.articleInfo.subjects.split(',');
                    for (let i = 0; i < this.defaultags.length; i++) {
                        const tag = {
                            id: i,
                            name : this.defaultags[i],
                        }
                        this.artTags.push(tag)
                        // alert(i +'- '+ this.defaultags[i]);
                    }

                    for (let j = 0; j < this.defaultSubs.length; j++) {
                        const subs = {
                            id: j,
                            name : this.defaultSubs[j],
                        }
                        this.artSubs.push(subs)
                        // alert(i +'- '+ this.defaultags[i]);
                    }
               
                })
                .catch((error) => console.log(error));
            // article Info
            axios.get("/course-dashboard/blogs-setting/blog-category-list/")
            .then((response) => this.catList = response.data)
            .catch((error) => console.log(error));
             
             //All tags
                axios.get("/course-dashboard/blogs-setting/tags-list/")
                .then((response) => this.options = response.data)
                .catch((error) => console.log(error));
            //All tags
             //All Subjects
                axios.get("/course-dashboard/blogs-setting/subject-list/")
                .then((response) => this.optionsSub = response.data)
                .catch((error) => console.log(error));
            //All Subjects

        // check parameters
            if (this.$route.params.catId) {
                this.category = this.$route.params.catId;
            }
            else {
                this.category ="";
            }
        // check parameters    

    },
    methods:{
        imglist(response){
                this.mainimage = response.src;
            },
            addArticle(){
                 this.msgcolor="text-success";
                this.successmsg = "Please Wait..";
                const formdata = new FormData();
                formdata.append("artid",this.articleInfo.id);
                formdata.append("artName",this.articleInfo.title);
                formdata.append("artCat",this.articleInfo.category);
                formdata.append("artImage",this.mainimage);
                formdata.append("artcontent",this.articleInfo.content);
                formdata.append("mTitle",this.articleInfo.seoTitle);
                formdata.append("mKeywords",this.articleInfo.metaKeys);
                formdata.append("mDescription",this.articleInfo.metaDescription);
                formdata.append("artTags",this.artTagValues);
                formdata.append("artsubjects",this.artSubValues);
                formdata.append("pdfLink",this.articleInfo.pdflink);
                formdata.append("youtubeLink",this.articleInfo.youtubelink);
                formdata.append("publishdate",this.articleInfo.publishdate);
                // alert(this.artSubValues);
                 axios.post("/course-dashboard/blogs-setting/edit-blog-data",formdata)
                .then((data) =>{
                    console.log(data.data);
                    this.successmsg = "Articles updated successfully";
                    this.error = "";
                
                })
                .catch(error => {
                    this.msgcolor = "text-danger";
                     this.successmsg = "Please Fix error";
                    this.error = error.response.data.errors;
                    console.log(this.error);
                })





            },
            addTag(query) {
                // alert(query);
                const formdata = new FormData();
                formdata.append("newTag",query);
                axios.post("/course-dashboard/blogs-setting/tags-search-add",formdata)
                .then((data) =>{
                    this.options = data.data;
                
                })
                .catch(error => {
                   console.log(error.response.data.errors);
                })
            },
            getTagsValues(e)
            {
                this.artTagValues.push(e.name);
                // console.log(e.name);
            },
            removeTagsValues(e)
            {
                var index = this.artTagValues.indexOf(e.name);
                    if (index !== -1) {
                        this.artTagValues.splice(index, 1);
                    }
            },
             addSubs(query) {
                // alert(query);
                const formdata = new FormData();
                formdata.append("newSub",query);
                axios.post("/course-dashboard/blogs-setting/blog-subject-add",formdata)
                .then((data) =>{
                    this.optionsSub = data.data;
                
                })
                .catch(error => {
                   console.log(error.response.data.errors);
                })
            },
            getSubsValues(e)
            {
                this.artSubValues.push(e.name);
                // console.log(e.name);
            },
            removeSubsValues(e)
            {
                var index = this.artSubValues.indexOf(e.name);
                    if (index !== -1) {
                        this.artSubValues.splice(index, 1);
                    }
            }

    }
    
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
   
</style>