<template>
    <div>
         <li class="menu-heading-block d-flex ">
                    <a class="avatar-sm flex-shrink-0 d-block">
                        <i class="text-white la-2x la la-user rounded-full bg-secondary"></i>  
                        
                    </a>
                    <div class="ml-2">
                        <h4 class="text-black">{{myInfo.name}}</h4>
                        <span class="d-block fs-14 lh-20">{{myInfo.email}}</span>
                    </div>
                </li>
                
                <li>
                    <ul class="generic-list-item">
                        <li>
                            <router-link :to="'/my-course'"><i class="la la-file-video-o mr-3"></i> My Courses</router-link>
                        </li>
                        <li>
                            <router-link  to="/cart/my-cart-items"><i class="la la-shopping-basket mr-3"></i> My Ready to Buy course </router-link>
                        </li>
                        <!-- <li>
                            <a href="#">
                                <i class="la la-heart-o mr-3"></i> My wishlist
                            </a>
                        </li> -->
                        <li><div class="section-block"></div></li>
                        
                        <li>
                            <router-link  to="/purchase-history-dashboard"><i class="la la-history mr-3"></i> Purchase history </router-link>
                        </li>
                        <li><div class="section-block"></div></li>
                        <li>
                            <router-link  to="/edit-profile"><i class="la la-edit mr-3"></i> Edit profile </router-link>
                        </li>
                        <li>
                            <router-link  to="/update-password"><i class="la la-gear mr-3"></i> Password Settings </router-link>
                            
                        </li>
                        <li><div class="section-block"></div></li>
                        <li>
                            <a href="#">
                                <i class="la la-question mr-3"></i> Help
                            </a>
                        </li>
                        <li>
                            <router-link :to="'/logout'"><i class="la la-power-off mr-3"></i> Logout </router-link>
                            
                        </li>
                        <li><div class="section-block"></div></li>
                    </ul>
                </li>
    </div>
</template>
<script>
export default {
    props:["myInfo"],
}
</script>
<style scoped>
    .off-canvas-menu-list li a{
        justify-content: flex-start !important;
    }
</style>