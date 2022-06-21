<template>
    <carousel v-if="sliders.length > 0" 
        :autoplay="true" 
        :nav="false" 
        :items="1" 
        :dots="false"
        :autoplayTimeout="3000"
        :autoplayHoverPause="true"
        
        >
        <template slot="prev"><span class="prev card p-md-2 p-sm-0 ml-2"><i class="la la-angle-left text-theme la-2x"></i></span></template>
            <div v-for="slides in sliders" :key="slides.id">
                <a v-bind:href="slides.linkedto">
                    <img :src="slides.sliderImg" alt="Be and By IAS Academy" >
                </a>
            </div>
        <template slot="next"><span class="next card p-md-2 p-sm-0 ml-2"><i class="la la-angle-right text-theme la-2x"></i></span></template>     
    </carousel>
</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
components: { carousel },
    data(){
        return {
            sliders: {}
        }
    },

     created(){
        axios.get("/home-all-slider")
            .then((response) => this.sliders = response.data)
            .catch((error) => console.log(error));
    }
}
</script>
<style scoped>
    
    .prev, .next
    {
        color: #ec5252;
        position: absolute;
        z-index: 2;
        top: 200px;
    }
    .prev
    {   
       left: 0;
       
    }
    .next
    {   
       right: 0;
       
    }
    @media screen and (max-width: 600px) {
        .prev, .next
        {
            display: none
        }
    }
</style>