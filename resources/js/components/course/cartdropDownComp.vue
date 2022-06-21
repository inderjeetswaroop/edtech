<template>
         <div class="shop-cart ml-3">
            <ul>
                <li>
                    <p class="shop-cart-btn d-flex align-items-center">
                        <i class="la la-shopping-cart"></i>
                        <span class="product-count">{{qty}}</span>
                    </p>
                    
                    <ul class="cart-dropdown-menu">
                        <li class="media media-card" v-for="(cList,index) in cartList" :key="index">
                            <div class="media-body">
                                <h5><a href="#">{{cList.name}}</a></h5>
                                <p class="text-black font-weight-semi-bold lh-18"><currency-symbol :priceValue="cList.price * cList.quantity"></currency-symbol> <span class="fs-14">Qty - {{cList.quantity}}</span></p>
                            </div>
                        </li>
                        
                        <li class="media media-card">
                            <div class="media-body fs-16">
                                <p class="text-black font-weight-semi-bold lh-18">Total: <span class="cart-total"><currency-symbol :priceValue="cartTotal"></currency-symbol></span> </p>
                            </div>
                        </li>
                        <li>
                            <router-link class="btn theme-btn w-100" to="/cart/my-cart-items">Go to List <i class="la la-arrow-right icon ml-1"></i></router-link>
                            <br><br>
                            <router-link :to="'/payment/checkout'" class="btn theme-btn w-100 theme-btn-white mb-2">Checkout Now <i class="la la-arrow-right icon ml-1"></i></router-link>
                            
                        </li>
                    </ul>
                </li>
            </ul>
        </div><!-- end shop-cart -->
</template>
<script>
import CurrencySymbolComp from '../CurrencySymbolComp.vue';
export default {
  components: { CurrencySymbolComp },
    data(){
        return{
            qty:"0",
            cartList:{},
            cartTotal:0,
        }
    },
    created(){
            axios.get("/cart/cart-content")
            .then((response) => {
                this.qty = response.data.cartqty;
                this.cartList = response.data.cartitems;
                this.cartTotal = response.data.cartTotal;
            } )
            .catch((error) => console.log(error));
    },
    mounted(){
        // 
        this.$root.$on("cartData",(basketData)=>{
            this.qty = basketData;
            axios.get("/cart/cart-content")
            .then((response) => {
                this.cartList = response.data.cartitems;
                this.cartTotal = response.data.cartTotal;
            } )
            .catch((error) => console.log(error));
        })
        // 
        // 
         axios.get("/cart/cart-content")
            .then((response) => {
                this.qty = response.data.cartqty;
                this.cartList = response.data.cartitems;
                this.cartTotal = response.data.cartTotal;
            } )
            .catch((error) => console.log(error));
            // 
    }
    
}
</script>