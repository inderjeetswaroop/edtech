"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71],{2420:(t,a,e)=>{e.r(a),e.d(a,{default:()=>c});const s={components:{CurrencySymbolComp:e(2840).Z},data:function(){return{cartList:{},qty:"0",cartTotal:0,cartSTotal:0}},methods:{itemRemove:function(t){var a=this;axios.get("/cart/remove-cart-item/"+t).then((function(t){a.qty=t.data.cartqty,a.cartList=t.data.cartitems,a.cartTotal=t.data.cartTotal,a.cartSTotal=t.data.cartSubTotal,a.$root.$emit("cartData",a.qty)})).catch((function(t){return console.log(t)}))},setToOne:function(t,a){var e=this;axios.get("/cart/update-item-qty/"+t+"/"+a).then((function(t){e.qty=t.data.cartqty,e.cartList=t.data.cartitems,e.cartTotal=t.data.cartTotal,e.cartSTotal=t.data.cartSubTotal,e.$root.$emit("cartData",e.qty)})).catch((function(t){return console.log(t)}))}},beforeCreate:function(){this.$Progress.start()},created:function(){var t=this;this.$Progress.finish(),axios.get("/cart/cart-content").then((function(a){t.qty=a.data.cartqty,t.cartList=a.data.cartitems,t.cartTotal=a.data.cartTotal,t.cartSTotal=a.data.cartSubTotal})).catch((function(t){return console.log(t)}))}};const c=(0,e(1900).Z)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"cart-area mt-4"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table generic-table"},[t._m(1),t._v(" "),e("tbody",t._l(t.cartList,(function(a,s){return e("tr",{key:s},[e("td",[t._v("\n                        "+t._s(s+1)+"\n                    ")]),t._v(" "),e("td",[e("router-link",{staticClass:"text-black font-weight-semi-bold",attrs:{to:"/course/"+a.name.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")+"/"+a.id}},[t._v(t._s(a.name))])],1),t._v(" "),e("td",[e("ul",{staticClass:"generic-list-item font-weight-semi-bold"},[e("li",{staticClass:"text-black lh-18"},[e("currency-symbol",{attrs:{priceValue:a.price}})],1)])]),t._v(" "),e("td",[e("div",{staticClass:"quantity-item d-flex align-items-center"},[e("div",{staticClass:"quantity-item d-flex align-items-center"},[e("button",{staticClass:"qtyBtn qtyDec",on:{click:function(e){return t.setToOne(a.id,"dec")}}},[e("i",{staticClass:"la la-minus"})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.quantity,expression:"CList.quantity"}],staticClass:"qtyInput",attrs:{type:"text"},domProps:{value:a.quantity},on:{input:function(e){e.target.composing||t.$set(a,"quantity",e.target.value)}}}),t._v(" "),e("button",{staticClass:"qtyBtn qtyInc",on:{click:function(e){return t.setToOne(a.id,"inc")}}},[e("i",{staticClass:"la la-plus"})])])])]),t._v(" "),e("td",[e("button",{staticClass:"icon-element icon-element-xs shadow-sm border-0",attrs:{type:"button",title:"Remove Course from cart"},on:{click:function(e){return t.itemRemove(a.id)}}},[e("i",{staticClass:"la la-times"})])])])})),0)]),t._v(" "),e("div",{staticClass:"d-flex flex-wrap align-items-center justify-content-between pt-4"})]),t._v(" "),e("div",{staticClass:"col-lg-4 ml-auto mb-4"},[e("div",{staticClass:"bg-gray p-4 rounded-rounded mt-40px"},[e("h3",{staticClass:"fs-18 font-weight-bold pb-3"},[t._v("Cart Totals")]),t._v(" "),t._m(2),t._v(" "),e("ul",{staticClass:"generic-list-item pb-4"},[e("li",{staticClass:"d-flex align-items-center justify-content-between font-weight-semi-bold"},[e("span",{staticClass:"text-black"},[t._v("Subtotal:")]),t._v(" "),e("span",[e("currency-symbol",{attrs:{priceValue:t.cartSTotal}})],1)]),t._v(" "),e("li",{staticClass:"d-flex align-items-center justify-content-between font-weight-semi-bold"},[e("span",{staticClass:"text-black"},[t._v("Total:")]),t._v(" "),e("span",[e("currency-symbol",{attrs:{priceValue:t.cartTotal}})],1)])]),t._v(" "),e("router-link",{class:0!=t.qty?"btn theme-btn w-100":"btn btn-secondary disabled",attrs:{to:"/payment/checkout"}},[t._v("Checkout "),e("i",{staticClass:"la la-arrow-right icon ml-1"})])],1)])])])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"section-heading mb-3"},[e("h2",{staticClass:"section__title "},[t._v("Shopping Cart")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("S.N.")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Product Details")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Price")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Qty.")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Remove")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"divider"},[a("span")])}],!1,null,null,null).exports}}]);