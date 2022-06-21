<template>
    <div>
        <span v-if="statename.sname != null">{{statename.sname}}</span>
    </div>
</template>
<script>
export default {
    props: ['satateid'],
    data() {
        return{
            statename:"",
        }
    },

    created(){
        // alert(this.cid);
        axios.get("single-state-detail/"+ this.satateid)
            .then((response) => this.statename=response.data)
            .catch((error) => console.log(error));
    }
    
}
</script>