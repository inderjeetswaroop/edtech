<template>
    <div>
        {{catinfo}}
    </div>
</template>
<script>
export default {
    props:["catId"],
    data(){
        return {
            catinfo:{}
        }
    },
    created(){
         axios.get("/front-single-blog-cat-info/"+this.catId)
                    .then((res) => {
                        this.catinfo = res.data;
                        
                    })
                    .catch((error) => console.log(error));
    }
}
</script>