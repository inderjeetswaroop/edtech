<template>
    <div>
        <setimage-modal :imageQty="imagecount" v-show="showmodal" @setImageData="seimg" ></setimage-modal>
        <button @click="setImage" type="button" class="btn btn-success" >Choose Image/Video</button>
        <hr>
        <!-- <span :show="imageList" v-for="imgList in imageList" :key="imgList.id">
            <img style="height:50px;width:auto;margin:5px" :src="imgList.src" alt="">
        </span> -->
        <!-- {{imageList}} -->
        
        <p class="text-danger">{{errorMessage}}</p>
    </div>
</template>
<script>
Vue.component('setimage-modal', require('./setImagemodalComp.vue').default);
export default {
    props:["imagecount"],
    data(){
        return {
            localhos : "http://localhost/benbyiase/storage/app/public/",
            imageList:[],
            displayImg:false,
            showmodal:false,
            imagestoadd:"",
            errorMessage:"",
            imgcount:this.imagecount,

        }
    },
    methods:{
        setImage(){
            
            // this.displayImg=true;
            // this.imageId=4;
            this.showmodal=true;
        },
        seimg(data){
            
            this.imageList = data;
            this.$emit("getImageData",this.imageList);
            this.showmodal=false;
        }
    }
}
</script>
<style scoped>

</style>