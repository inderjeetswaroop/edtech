<template>
    <span>
        {{countVal}}
    </span>
</template>
<script>
export default {
    props:["catId"],
    data() {
        return {
            categoryId:"" ,
            countVal:"",
        }
    },
    created() {
            this.categoryId = this.catId;
             axios.get("/course-dashboard/blogs-setting/count-articles/"+ this.categoryId)
            .then((response) => this.countVal = response.data)
            .catch((error) => console.log(error));
    }
    
}
</script>
<style>

</style>