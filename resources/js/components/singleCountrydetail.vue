<template>
    <div>
        <span v-if="countryname.cname != null">{{countryname.cname}}(+{{countryname.ccode}})</span>
    </div>
</template>
<script>
export default {
    props: ['coid'],
    data() {
        return{
            countryname:"",
        }
    },

    created(){
        // alert(this.cid);
        axios.get("single-country-detail/"+ this.coid)
            .then((response) => this.countryname=response.data)
            .catch((error) => console.log(error));
    }
    
}
</script>