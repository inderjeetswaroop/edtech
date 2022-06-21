<template>

    <div class="card card-item">
        <div class="card-body">
            <h3 class="card-title fs-22 pb-3">Course(s) Name</h3>
            <div class="divider"><span></span></div>
            <div class="order-details-lists">
                <div class="media media-card border-bottom border-bottom-gray pb-3 mb-3">
                    <div class="media-body">
                        <table class="table table-bordered">
                            <tr v-for="(cList,index) in cartList" :key="index">
                                <td>
                                    <h5 class="fs-15 pb-2" >
                                        <a href="#" class="mb-1">{{cList.name}}</a>
                                    </h5>
                                </td>
                                <td>
                                    <h5 class="fs-15 pb-2" >
                                        <a href="#" class="mb-1"><currency-symbol :priceValue="cList.price"></currency-symbol></a>
                                    </h5>
                                    
                                </td>
                            </tr>
                        </table>
                        
                        
                    </div>
                </div><!-- end media -->
                
            </div><!-- end order-details-lists -->
            
        </div><!-- end card-body --> 
    </div><!-- end card -->
        
</template>
<script>

export default {
    
    data(){
        return{
            cartList:{},
            count : 0,
            
        }
    },
    created(){
            axios.get("/cart/cart-content")
            .then((response) => {
                this.cartList = response.data.cartitems;
                this.$emit("cartTotal",response.data.cartTotal)
            } )
            .catch((error) => console.log(error));
    },
   
    
}
</script>