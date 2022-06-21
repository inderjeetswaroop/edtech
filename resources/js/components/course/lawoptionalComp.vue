<template>
    <div>
        <section class="breadcrumb-area pt-50px pb-50px bg-white pattern-bg">
          <div class="container">
            <div class="col-lg-8 mr-auto">
            <div class="breadcrumb-content">
                <ul class="generic-list-item generic-list-item-arrow d-flex flex-wrap align-items-center">
                    <li><router-link to="/"> Home</router-link></li>
                    <li v-if="catInfo.catname"><a href="#">{{catInfo.catname}}</a></li>
                    <li><a href="#">{{courseInfo.courseName}}</a></li>
                </ul>
                <div class="section-heading">
                    <h2 class="section__title">{{courseInfo.courseName}}</h2>
                    <div v-html="courseInfo.shortDescription"></div>
                    
                </div>
                <div class="d-flex flex-wrap align-items-center pt-3">
                    <h6 class="ribbon ribbon-lg mr-2 bg-3 text-white">Batch Starting from : <i class="la la-calender mr-1"></i>{{courseInfo.courseStartDate}}</h6>
                    
                </div>
                <p class="pt-2 pb-1"><a href="javascript:void()" class="text-color hover-underline">{{catInfo.catname}}</a></p>
                <div class="d-flex flex-wrap align-items-center">
                    <p class="pr-3 d-flex align-items-center">
                        <svg class="svg-icon-color-gray mr-1" width="16px" viewBox="0 0 24 24"><path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                        Course Duration : {{courseInfo.courseDuration}}
                    </p>
                    <p class="pr-3 d-flex align-items-center">
                        <i class="la la-globe mr-1"></i>{{courseInfo.languages}}
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </section>



<section class="course-details-area pb-20px">
    <div class="container">
        <div class="row">
           <div class="col-lg-8 pb-5">
               <div class="course-details-content-wrap pt-90px">
                   <div class="course-overview-card bg-gray-course p-4 rounded">
                       <div v-html="courseInfo.longDecription"></div>
                   </div>
               </div>
           </div>
            <div class="col-lg-4">
                <div class="sidebar sidebar-negative">
                    <div class="card card-item">
                        <div class="card-body">
                            <div class="preview-course-video">
                                <!-- <a href="javascript:void(0)" data-toggle="modal" data-target="#previewModal"> -->
                                    <img :src="courseInfo.featureImg" :data-src="courseInfo.featureImg" alt="course-img" class="w-100 rounded lazy">
                                    <!-- <div class="preview-course-video-content">
                                        <div class="overlay"></div>
                                        <div class="play-button">
                                            <i class="la la-play"></i>
                                        </div>
                                        <p class="fs-15 font-weight-bold text-white pt-3">Preview this course</p>
                                    </div> -->
                                <!-- </a> -->
                            </div>
                            <div class="preview-course-feature-content pt-40px">
                                <p class="d-flex align-items-center pb-2">
                                    <span class="fs-35 font-weight-semi-bold text-black">
                                        <currency-symbol v-if="courseInfo.discounted_price != courseInfo.price" :priceValue="courseInfo.discounted_price"></currency-symbol>
                                        <currency-symbol v-else :priceValue="courseInfo.price"></currency-symbol>
                                    </span>
                                    <span v-if="courseInfo.discounted_price != courseInfo.price" class="before-price mx-1"><currency-symbol :priceValue="courseInfo.price"></currency-symbol></span>
                                    <span class="price-discount text-success">{{(((courseInfo.price - courseInfo.discounted_price)/courseInfo.price)*100).toFixed(1)}}% Off</span>
                                </p>
                                <p class="preview-price-discount-text pb-35px">
                                    <span class="text-color-3">{{courseInfo.priceNote}}</span> 
                                </p>
                                <!-- Cart & buy button -->
                                <add-to-cart :courseId="courseInfo.id"></add-to-cart>
                                <!-- Cart & buy button -->
                                <p class="fs-14 text-center pb-4">{{courseInfo.buyerNotes}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card card-item">
                        <div class="card-body px-5">
                            <h3 class="card-title fs-18 pb-2">Course Features</h3>
                            <div class="divider"><span></span></div>
                             <div v-html="courseInfo.featuresPoints"></div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        
        <!-- <div class="modal fade modal-container" id="previewModal" tabindex="-1" role="dialog" aria-labelledby="previewModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header border-bottom-gray">
                        <div class="pr-2">
                            <p class="pb-2 font-weight-semi-bold">Course Preview</p>
                            <h5 class="modal-title fs-19 font-weight-semi-bold lh-24" id="previewModalTitle">{{courseInfo.courseName}}</h5>
                        </div>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" class="la la-times"></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <video controls crossorigin playsinline :poster="courseInfo.featureImg" id="player">
                            
                            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4"/>
                            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4"/>
                            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </div> -->
    </div>    
</template>
<script>
Vue.component('add-to-cart', require('./addTocartComp.vue').default);
export default {
    props:["mycourse"],
    data(){
        return {
            courseId:"",
            courseInfo:{},
            catInfo:{},
        }
    },
    created(){
        this.courseId = 4;    
        
        // Single course Info
        axios.get("/front-single-course-detail/"+this.courseId)
            .then((response) => this.courseInfo = response.data)
            .catch((error) => console.log(error));
        // categpry
         axios.get("/front-fetch-single-category/"+this.courseInfo.courseCategory)
            .then((response) => this.catInfo = response.data)
            .catch((error) => console.log(error));   
        
        // loader
        this.$Progress.finish();

    },
     beforeCreate(){
        this.$Progress.start();
        // 
        
    },
    
    
    
}
</script>
<style scoped>
    .bg-gray-course{
        background-color: #f5f5f56b!important;
    }
</style>
