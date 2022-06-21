<template>
    <div>
        <b>
        <p v-if="catInfo">
            {{catInfo.catName}}
        </p>
        <p v-else>
            no parents
        </p>
        </b>
        {{normalizedSize}}
    </div>
</template>
<script>
export default {
    props: ["catId"],
    data() {
        return {
            categoryId: "",
            catInfo:"",
        }
    },
   computed:{
        normalizedSize:function(){
            this.categoryId = this.catId;

            axios.get("/course-dashboard/blogs-setting/single-blog-cat-info/"+ this.categoryId)
            .then((response) => this.catInfo=response.data)
            .catch((error) => console.log(error));
            
        }
       },
     
}
</script>
<style  scoped>

</style>