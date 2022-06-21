<template>
     <div class="card card-item">
             <div class="card-image">
                    <router-link v-if="blogdetail.youtubelink == null || blogdetail.youtubelink == 'null'" :to="'/article/'+seotitle+'/'+blogdetail.id" class="d-block">
                        <img  class="card-img-top" :src="blogdetail.image" :alt="blogdetail.title" height="250" width="458">
                    </router-link>
                    <iframe v-else  width="370" height="250" :src="blogdetail.youtubelink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    <div class="course-badge-labels">
                        <div class="course-badge">{{blogdetail.publishdate}}</div>
                    </div>
                </div><!-- end card-image -->
                <div class="card-body">
                    <h5 class="card-title"><router-link :to="'/article/'+seotitle+'/'+blogdetail.id">{{blogdetail.title}}</router-link></h5>
                    <ul class="generic-list-item generic-list-item-bullet generic-list-item--bullet d-flex align-items-center flex-wrap fs-14 pt-2">
                        <li class="d-flex align-items-center"><a href="#"><blog-cat-name :catId="blogdetail.category"></blog-cat-name></a></li>
                        
                        <!-- <li class="d-flex align-items-center"><a href="#">4 Comments</a></li>
                        <li class="d-flex align-items-center"><a href="#">130 Likes</a></li> -->
                    </ul>
                    <p class="text-dark" v-html="blogdetail.content.substr(0, 50)"></p>
                    <div class="d-flex justify-content-between align-items-center pt-3">
                        <router-link :to="'/article/'+seotitle+'/'+blogdetail.id" class="btn theme-btn theme-btn-sm theme-btn-white"><i class="la la-arrow-right icon ml-1"></i>
                            <span v-if="blogdetail.pdflink == null || blogdetail.pdflink == 'null'">Read More</span>
                            <span v-else>Download PDF</span>
                        </router-link>
                        <div class="share-wrap">
                            <ul class="social-icons social-icons-styled">
                                <li class="mr-0"><a href="#" class="facebook-bg"><i class="la la-facebook"></i></a></li>
                                <li class="mr-0"><a href="#" class="twitter-bg"><i class="la la-twitter"></i></a></li>
                                <li class="mr-0"><a href="#" class="instagram-bg"><i class="la la-instagram"></i></a></li>
                            </ul>
                            <div class="icon-element icon-element-sm shadow-sm cursor-pointer share-toggle" title="Toggle to expand social icons"><i class="la la-share-alt"></i></div>
                        </div>
                    </div>
                </div><!-- end card-body -->
            </div><!-- end card -->
</template>
<script>
Vue.component('blog-cat-name', require('./../singleblogcatInfoComp.vue').default);
export default {
    props:["bloginfo"],
    data(){
        return {
            blogdetail:this.bloginfo,
            catInfo:{},
            seotitle: this.bloginfo.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
        }
    }
    
}
</script>
