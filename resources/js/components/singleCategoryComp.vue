<template>
    <div>
         <span v-if="catbname.catname">{{catbname.catname}}</span>
         <span v-else>No Category</span>
       
        {{catnamedisplay(cid)}}
    </div>
</template>
<script>
export default {
    props:["cid"],    
    data() {
        return{
            catbname:"",
                       
        }
    },
   
    methods:{
        catnamedisplay(cait){
            // this.catname = cait;
            axios.get("../../course-category-setting/fetch-single-category/"+cait)
            .then((response) => this.catbname = response.data)
            .catch((error) => console.log(error));
            
        }
    }
    
}
</script>