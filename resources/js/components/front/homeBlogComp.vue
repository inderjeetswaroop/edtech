<template>
    <section class="blog-area section--padding bg-gray overflow-hidden">
    <div class="container">
        <div class="section-heading text-center">
            <h5 class="ribbon ribbon-lg mb-2">News feeds</h5>
            <h2 class="section__title">Latest News & Articles</h2>
            <span class="section-divider"></span>
        </div><!-- end section-heading -->
        <carousel v-if="topten.length > 0" :autoplay="true" 
                        :nav="false" 
                        :items="3" 
                        :dots="true"
                        :autoplayTimeout="3000"
                        :autoplayHoverPause="true"
                        :responsive="responsiveObj"
                        >
            <blog-list-view class="mx-3" 
            v-for="tTen in topten" :key="tTen.id" 
            :bloginfo="tTen"
            >
            </blog-list-view>            
        </carousel>
    </div><!-- end container -->
</section><!-- end blog-area -->
</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
    components: { carousel },    
    data(){
        return {
            topten:{},
            responsiveObj:{
                0:{
                    items :1
                },
                600:{
                    items :1
                },
                1000:{
                    items :3
                },
                1500:{
                    items :3
                }
            }
        }
    },
    created() {
        axios.get("/top-articles/10")
            .then((response) => this.topten = response.data)
            .catch((error) => console.log(error));
    }
}
</script>