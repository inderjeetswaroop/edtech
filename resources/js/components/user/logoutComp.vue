<template>
    
</template>
<script>
export default {
    data() { 
        return{
                userId: this.$session.get("userId")
            }
        },
    beforeCreate(){
        this.$Progress.start();
        // 
            axios.get("/logout")
                .then((response) => {
                        if (response.status == 200) {
                            // console.log(response.status);    
                            this.$session.remove("userId");
                            this.$session.destroy();
                            this.$root.$emit("loggedIn",0)
                            this.$router.push("/");
                        }
                        
                     })
                    .catch((error) => {
                        console.log(error);
                    });

        
    },
    created(){
        this.$Progress.finish();
    }

}
</script>