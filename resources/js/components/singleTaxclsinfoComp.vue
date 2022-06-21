<template>
    <div>
        {{taxClassName.name}}
    </div>
</template>
<script>
export default {
    props: ['taxclasId'],
    data(){
        return{
            taxClassName: '',
        }
    },
    created(){
        // alert(this.taxclasId);
        axios.get("fetch-single-tax-class/"+this.taxclasId)
            .then((response) => {
                this.taxClassName = response.data;
                })
            .catch((error) => console.log(error));
    }
    
}
</script>