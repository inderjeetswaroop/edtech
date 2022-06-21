<template>
    <div class="buy-course-btn-box">
        <button @click="addToCart" :disabled="isDisabled" type="button" class="btn theme-btn w-100 mb-2"><!--i class="la la-shopping-cart fs-18 mr-1"></i--> <div v-html="btnName"></div></button>
        <p class="text-danger">{{carterror}}</p>
        <router-link :style="{display:checkOutBtn}" :to="'/payment/checkout'" class="btn theme-btn w-100 theme-btn-white mb-2">Checkout Now</router-link>
        <!-- <button type="button" class="btn theme-btn w-100 theme-btn-white mb-2"><i class="la la-shopping-bag mr-1"></i> Buy this course</button> -->
    </div>
</template>
<script>
export default {
    props:["courseId"],
    data(){
        return {
            btnName: "Apply Now",
            isDisabled: false,
            checkOutBtn:"none",
            carterror:"",

        }
    },
    methods:{
            addToCart(){
                
                this.btnName = "<div class='spinner-border text-light'></div>";
                
                axios.get("/cart/mycart/"+this.courseId)
                .then((response) => {
                    this.$root.$emit("cartData",response.data.cartqty);
                    // console.log(response.data.cartqty);
                    
                    // this.courseInfo = response.data
                this.isDisabled= true,
                this.btnName = "Added To List";
                this.checkOutBtn = "block";
                this.carterror = "";

                })
                .catch((error) => {
                    this.carterror = error;
                    console.log(error)
                    this.isDisabled= false;
                    this.btnName = "Add To List";
                    
                    });
            }
    },
    beforeCreate(){
        this.$Progress.start();
    },
    created(){
        this.$Progress.finish();
    }
    
}
</script>
