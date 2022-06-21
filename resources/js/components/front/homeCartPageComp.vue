<template>
    <section class="cart-area mt-4">
    <div class="container">
        <div class="section-heading mb-3">
            <h2 class="section__title ">Shopping Cart</h2>
        </div>
        <div class="table-responsive">
            <table class="table generic-table">
                <thead>
                <tr>
                    <th>S.N.</th>
                    <th scope="col">Product Details</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty.</th>
                    <th scope="col">Remove</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(CList,index) in cartList" :key="index">
                    <td>
                        {{index+1}}
                    </td>
                    <td>
                        <router-link :to="'/course/'+CList.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')+'/'+CList.id" class="text-black font-weight-semi-bold">{{CList.name}}</router-link>
                        
                    </td>
                    <td>
                        <ul class="generic-list-item font-weight-semi-bold">
                            <li class="text-black lh-18"><currency-symbol :priceValue="CList.price"></currency-symbol></li>
                            
                        </ul>
                    </td>
                     <td>
                        <div class="quantity-item d-flex align-items-center">
                            <div class="quantity-item d-flex align-items-center">
                                <button @click="setToOne(CList.id,'dec')" class="qtyBtn qtyDec"><i class="la la-minus"></i></button>
                                <input class="qtyInput" type="text" v-model="CList.quantity">
                                <button @click="setToOne(CList.id,'inc')" class="qtyBtn qtyInc"><i class="la la-plus"></i></button>
                            </div>
                        </div>
                    </td>
                    
                    <td>
                        <button @click="itemRemove(CList.id)" type="button" class="icon-element icon-element-xs shadow-sm border-0" title="Remove Course from cart" >
                            <i class="la la-times"></i>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="d-flex flex-wrap align-items-center justify-content-between pt-4">
                <!-- <form method="post">
                    <div class="input-group mb-2">
                        <input class="form-control form--control pl-3" type="text" name="search" placeholder="Coupon code">
                        <div class="input-group-append">
                            <button class="btn theme-btn">Apply Code</button>
                        </div>
                    </div>
                </form> -->
                <!-- <a href="#" class="btn theme-btn mb-2">Update Cart</a> -->
            </div>
        </div>
        <div class="col-lg-4 ml-auto mb-4">
            <div class="bg-gray p-4 rounded-rounded mt-40px">
                <h3 class="fs-18 font-weight-bold pb-3">Cart Totals</h3>
                <div class="divider"><span></span></div>
                <ul class="generic-list-item pb-4">
                    <li class="d-flex align-items-center justify-content-between font-weight-semi-bold">
                        <span class="text-black">Subtotal:</span>
                        <span><currency-symbol :priceValue="cartSTotal"></currency-symbol></span>
                    </li>
                    <li class="d-flex align-items-center justify-content-between font-weight-semi-bold">
                        <span class="text-black">Total:</span>
                        <span><currency-symbol :priceValue="cartTotal"></currency-symbol></span>
                    </li>
                </ul>
                <router-link :to="'/payment/checkout'" :class="qty != 0 ? 'btn theme-btn w-100':'btn btn-secondary disabled' ">Checkout <i class="la la-arrow-right icon ml-1"></i></router-link>
                
            </div>
        </div>
    </div><!-- end container -->
</section>
</template>
<script>
import CurrencySymbolComp from '../CurrencySymbolComp.vue';
export default {
  components: { CurrencySymbolComp },
    data(){
        return {
            cartList: {},
            qty:"0",
            cartTotal:0,
            cartSTotal:0,

        }
    },
    methods:{
        itemRemove(itemId){
             axios.get("/cart/remove-cart-item/"+itemId)
            .then((response) => {
                this.qty = response.data.cartqty;
                this.cartList = response.data.cartitems;
                this.cartTotal = response.data.cartTotal;
                this.cartSTotal = response.data.cartSubTotal;
                this.$root.$emit("cartData",this.qty);
            } )
            .catch((error) => console.log(error));
        },
        setToOne(itemId,upd){
            axios.get("/cart/update-item-qty/"+itemId+"/"+upd)
            .then((response) => {
                this.qty = response.data.cartqty;
                this.cartList = response.data.cartitems;
                this.cartTotal = response.data.cartTotal;
                this.cartSTotal = response.data.cartSubTotal;
                this.$root.$emit("cartData",this.qty);
            } )
            .catch((error) => console.log(error));
        }


    },
    beforeCreate(){
        this.$Progress.start();
    },
    created(){
        // 
        this.$Progress.finish();
        // 

        axios.get("/cart/cart-content")
            .then((response) => {
                this.qty = response.data.cartqty;
                this.cartList = response.data.cartitems;
                this.cartTotal = response.data.cartTotal;
                this.cartSTotal = response.data.cartSubTotal;
            } )
            .catch((error) => console.log(error));


    }
}
</script>