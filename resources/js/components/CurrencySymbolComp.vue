<template>
    <div>
        {{cSymbol.symbol + priceValue}}
        
    </div>
</template>
<script>
export default {
    props:["priceValue"],
    data() {
        return {
            cSymbol: '',
        }
    },
    created() {
         axios.get("/currency/default-currency")
            .then((response) => {
                this.cSymbol = response.data;
                
                })
            .catch((error) => console.log(error));
    }
}
</script>