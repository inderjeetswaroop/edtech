<template>
    <div>
        <!-- <h1 v-for="(cList,index) in catlist" :key="index">
           {{cList}} -->
           <div v-for="(cList,index) in catlist" :key="index">
                <singcatdetail :cid="cList[0]+cList[1]"></singcatdetail>
           </div>
            
        <!-- </h1> -->
         {{normalizedSize}}
    </div>
</template>
<script>
Vue.component('singcatdetail', require('./singleCategoryComp.vue').default);
export default {
    props:["catarravlues"],
    data() {
        return{
            catlist:"",
            catid:'',
        }
    },
    computed:{
        normalizedSize:function(){
            this.catlist = this._.split(this.catarravlues, ',');
            
        }
    }
   
    
}
</script>