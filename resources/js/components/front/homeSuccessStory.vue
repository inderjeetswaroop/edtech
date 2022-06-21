<template>
        <section class="feature-area pb-90px mt-5 bg-light py-5">
            <div class="container-fluid">
                <div class="container">
                    <div class="section-heading text-center">
                        <!-- <h5 class="ribbon ribbon-lg mb-2">Get mentored by those who have succeeded</h5> -->
                        <h2 class="section__title">Our Achievers </h2>
                        <span class="section-divider"></span>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <carousel  :autoplay="true" 
                            :nav="false" 
                            :items="5" 
                            :dots="true"
                            :autoplayTimeout="3000"
                            :autoplayHoverPause="true"
                            :responsive="responsiveObj"
                            >
                            <template slot="prev"><span class="prev card p-md-2 p-sm-0 ml-2"><i class="la la-angle-left text-theme la-2x"></i></span></template>

                                <img class="p-2" src="/frontassets/images/WlAe8Rp2JZXy80Id3QBMm21KsDTR93kZd0W3MDqd.png" alt="First slide">

                                <img class="p-2" src="/frontassets/images/wwAwMcdW9unvcvEjnrCT1jDIbcKmkxZCcQjKIAU8.png" alt="First slide">

                                <img class="p-2" src="/frontassets/images/6AL2RIBe2jJAgiosmGzuqhgI6WCfYZGCMSZdlPPp.png" alt="First slide">

                                <img class="p-2" src="/frontassets/images/OZ3kD8bGH6qA01OgPBt4hTQUk8Mg0N0McrSxzcMB.png" alt="First slide">

                                <img class="p-2" src="/frontassets/images/IAaBpGMnjM3gEFWCB3xXcoFLQ0kUy6gKgJLP8ke7.png" alt="First slide">

                                <img class="p-2" src="/frontassets/images/GUL50WUZAJ7Fxrtmn5ANR9DVEV9W1X1yPLBxHl3w.png" alt="First slide">

                                <img class="p-2" src="/frontassets/images/x4R5Xv93FJ3DorKSzTPO72kvjs75UvZyoCsPy1O4.png" alt="First slide">

                                <img class="p-2" src="/frontassets/images/MNe8iNl9ZMDdQXxi0X7NEhmFQkXwSleFDX0oVSKT.png" alt="First slide">

                                <img class="p-2" src="/frontassets/images/U9ZpmZ306qqPAcX9TuZNV0RbjUZp0vYhsY1QzPRZ.png" alt="First slide">

                            <template slot="next"><span class="next card p-md-2 p-sm-0 ml-2"><i class="la la-angle-right text-theme la-2x"></i></span></template>     
                            </carousel>
                        </div>
                    </div>
                 </div>
            </div>

        </section>
        
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
                    items :2
                },
                600:{
                    items :2
                },
                1000:{
                    items :5
                },
                1500:{
                    items :5
                }
            }
        }
    },
}
</script>
<style scoped>
    .prev, .next
    {
        color: #ec5252;
        position: absolute;
        z-index: 2;
        top: 100px;
    }
    .prev
    {   
       left: 0;
       
    }
    .next
    {   
       right: 0;
       
    }
    
</style>