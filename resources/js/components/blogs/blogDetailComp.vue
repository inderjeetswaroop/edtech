<template>
   <div>
       <section class="breadcrumb-area pt-80px pb-80px pattern-bg">
        <div class="container">
            <div class="breadcrumb-content">
                <div class="section-heading pb-3">
                    <h2 class="section__title">{{artInfo.title}}</h2>
                </div>
                
                <ul class="generic-list-item generic-list-item-arrow d-flex flex-wrap align-items-center">
                    <li>
                        <router-link to="/" >
                                Home 
                        </router-link>
                    </li>
                    <li>
                        <blog-cat-info :catId="artInfo.category"></blog-cat-info>
                    </li>
                    <li>{{artInfo.title}}</li>
                </ul>
                <ul class="d-flex flex-wrap fs-15">
                    <li class="mr-2 text-black">Tags : </li>
                    <li v-for="(taggs,index) in tags" :key="index" class="mr-2">
                        <router-link :to="{ path: '/search', query: { searchkey: taggs , type:'tag' }}" class="badge badge-danger px-2">
                            {{taggs}}
                        </router-link>
                    </li>
                </ul>
                <ul v-if="subjects.length > 0" class="d-flex flex-wrap fs-15">
                    <li class="mr-2 text-black">Subjects</li>
                    <li v-for="(subss,index) in subjects" :key="index" class="mr-2 ">
                        <router-link :to="{ path: '/search', query: { searchkey: subss , type:'subject' }}" class="badge badge-success px-2">
                            {{subss}}
                        </router-link>
                        
                    </li>
                </ul>

                <ul v-if="artInfo.publishdate != '' || artInfo.publishdate !='null' " class="float-right generic-list-item generic-list-item-bullet generic-list-item--bullet d-flex flex-wrap fs-14 pt-2 ml-3">
                    <li class="d-flex align-items-center">Published On : {{artInfo.publishdate}}</li>
                </ul>
                <div class="share-wrap float-right">
                    <ul class="social-icons social-icons-styled">
                        <li class="mr-0"><a href="#" class="facebook-bg"><i class="la la-facebook"></i></a></li>
                        <li class="mr-0"><a href="#" class="twitter-bg"><i class="la la-twitter"></i></a></li>
                        <li class="mr-0"><a href="#" class="instagram-bg"><i class="la la-instagram"></i></a></li>
                    </ul>
                    <div class="icon-element icon-element-sm shadow-sm cursor-pointer share-toggle" title="Toggle to expand social icons"><i class="la la-share-alt"></i></div>
                </div>
            </div><!-- end breadcrumb-content -->
        </div><!-- end container -->
    </section><!-- end breadcrumb-area -->
    <section class="blog-area pt-4 pb-100px">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mb-5">
                <!-- <div class="card card-item">
                    <img :src="artInfo.image" alt="" class="img-fluid">
                </div> -->
                <div v-if="artInfo.youtubelink == null || artInfo.youtubelink == 'null'"></div>
                <div v-else class="card card-item">
                    <div class="card-body">
                        <iframe :src="artInfo.youtubelink" frameborder="0" class="youtubeframe"></iframe>
                        <div class="section-block"></div>
                    </div>
                </div>
                <div class="card card-item">
                    <div class="card-body">
                        <div v-html="artInfo.content" class="p-4" style="overflow-wrap: break-word;"></div>
                        <div class="section-block"></div>
                    </div>
                </div>
                <div v-if="artInfo.pdflink == null || artInfo.pdflink == 'null'"></div>
                <div v-else class="card card-item">
                    <div class="card-body">
                        <iframe :src="artInfo.pdflink" frameborder="0" class="pdfframe"></iframe>
                        <div class="section-block"></div>
                        <router-link v-if="downloadBtn==0" to="/user-login" class="btn theme-btn"> Login and Download</router-link>
                        <a v-else :href="artInfo.pdflink" class="btn theme-btn"> Download PDF Now</a>
                        
                    </div>
                </div>
            </div><!-- end col-lg-8 -->
            <div class="col-lg-4">
                <blog-sidebar></blog-sidebar>
            </div>
        </div>
    </div>
</section>
   </div>

</template>
<script>
Vue.component('blogSidebar', require('./blogsidebarComp.vue').default);
Vue.component('blogCatInfo', require('./blogcatInfoComp.vue').default);
export default {
    data(){
        return {
            artId: this.$route.params.articleId,
            artInfo:{},
            tags:[],
            subjects:[],
            published:"",
            downloadBtn:0,
            pageTitle:"",
            pageMtitle:"",
            pageMdesc:"",
            pageMkeys:"",
           
        }
    },
    metaInfo(){
        return{
            title: `${this.pageTitle} - BE N BY IAS`,
            meta: [
                { name: 'title', content: this.pageMtitle },
                { name: 'description', content: this.pageMdesc },
                { name: 'keywords', content: this.pageMkeys },
            ]
        }
    },
     beforeCreate(){
         this.loadDisplayed="block";
        this.$Progress.start();

    },
    created(){
        axios.get("/single-blog-info/"+this.artId)
            .then((response) => {
                // console.log(response.data);
                this.artInfo = response.data;
                // 
                    this.pageTitle = this.artInfo.title
                    this.pageMtitle = this.artInfo.seoTitle
                    this.pageMkeys = this.artInfo.metaKeys
                    this.pageMdesc = this.artInfo.metaDescription
                // 
                this.tags = response.data.tags.split(',');
                this.subjects = response.data.subjects.split(',');
                this.published = response.data.publishdate;
                   
            })
            .catch((error) => console.log(error));

            //  Check Login 
                 if (this.$session.has("userId") || this.$session.exists()) {
                     this.downloadBtn = 1;
                 }
                 else{
                     this.downloadBtn = 0;
                 }
            // check Login
                //
        this.$Progress.finish();
        this.loadDisplayed="none";
            //
        
    }    
}
</script>
<style scoped>
    .pdfframe
    {
        height: 600px;
        width: 100%;
    }
    .youtubeframe{
        height: 400px;
        width: 100%;
    }
</style>