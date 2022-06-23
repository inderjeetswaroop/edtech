<template>

<header class="header-menu-area bg-white">
    <div class="header-top pr-150px pl-150px border-bottom border-bottom-gray py-1" :style="{display:'block !important' }">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="header-widget">
                        <ul class="generic-list-item d-flex flex-wrap align-items-center fs-14">
                            <li class="d-flex align-items-center pr-3 mr-3 border-right border-right-gray"><i class="la la-phone mr-1"></i><a href="tel:9958826967"> (91) 9958826967</a></li>
                            <li class="d-flex align-items-center"><i class="la la-envelope-o mr-1"></i><a href="mailto:info@beandbyias.com"> info@beandbyias.com</a></li>
                        </ul>
                    </div><!-- end header-widget -->
                </div><!-- end col-lg-6 -->
                <div class="col-lg-6">
                    <div class="header-widget d-flex flex-wrap align-items-center justify-content-end">
                        
                        <ul class="generic-list-item d-flex flex-wrap align-items-center fs-14 border-left border-left-gray pl-3 ml-3">
                            <li class="d-flex align-items-center pr-3 mr-3  ">
                                <router-link :to="'/article/upsc-cse-pre-2022-results-declared/188'" class="blink_me"><i class="la la-sign-in mr-1"></i>Prelims 2022 Result</router-link>
                            </li>
                        </ul>
                        <ul v-if="login == 1" class="generic-list-item d-flex flex-wrap align-items-center fs-14 border-left border-left-gray pl-3 ml-3">
                            <li class="d-flex align-items-center pr-3 mr-3 border-right border-right-gray ">
                                <router-link :to="'/my-course'" style="color:#ec5252"><i class="la la-sign-in mr-1"></i>My Courses</router-link>
                            </li>
                            <li class="d-flex align-items-center">
                                <router-link :to="'/logout'" class="btn-login"><i class="la la-sign-out mr-1"></i> Logout </router-link>
                            </li>
                        </ul>
                        <ul v-else class="generic-list-item d-flex flex-wrap align-items-center fs-14 border-left border-left-gray pl-3 ml-3">
                            
                            <li class="d-flex align-items-center pr-3 mr-3 border-right border-right-gray">
                                <router-link :to="'/user-login'" class="btn-login"><i class="la la-sign-in mr-1"></i>Login</router-link>
                            </li>
                            <li class="d-flex align-items-center">
                                <router-link :to="'/user-registration'" class="btn-register"><i class="la la-user mr-1"></i>Register</router-link>
                            </li>
                            
                        </ul>
                        <cart-menu-drop id="cart1"></cart-menu-drop>
                    </div><!-- end header-widget -->
                </div><!-- end col-lg-6 -->
            </div><!-- end row -->
        </div><!-- end container-fluid -->
    </div><!-- end header-top -->
    <div class="header-menu-content pr-150px pl-150px bg-white">
        <div class="container-fluid">
            <div class="main-menu-content">
                <a href="#" class="down-button"><i class="la la-angle-down"></i></a>
                <div class="row align-items-center">
                    <div class="col-lg-2">
                        <div class="logo-box">
                            <router-link to="/" class="logo">
                                <img class="logoImg" src="/frontassets/images/logo.png" alt="logo">
                            </router-link>
                            <div class="user-btn-action">
                                <div class="search-menu-toggle icon-element icon-element-sm shadow-sm mr-2" data-toggle="tooltip" data-placement="top" title="Search">
                                    <i class="la la-search"></i>
                                </div>
                                <div class="off-canvas-menu-toggle cat-menu-toggle icon-element icon-element-sm shadow-sm mr-2" data-toggle="tooltip" data-placement="top" title="Category menu">
                                    <i class="la la-user-alt"></i>
                                </div>
                                <div class="off-canvas-menu-toggle main-menu-toggle icon-element icon-element-sm shadow-sm" data-toggle="tooltip" data-placement="top" title="Main menu">
                                    <i class="la la-bars"></i>
                                </div>
                            </div>
                        </div>
                    </div><!-- end col-lg-2 -->
                    <div class="col-lg-10 px-0">
                        <div class="menu-wrapper">
                            <!-- <form method="post">
                                <div class="form-group mb-0">
                                    <input class="form-control form--control pl-3" type="text" name="search" placeholder="Search for anything">
                                    <span class="la la-search search-icon"></span>
                                </div>
                            </form> -->
                            <nav class="main-menu">
                                
                                <main-menu></main-menu>
                                
                            </nav><!-- end main-menu -->
                            <div class="main-menu-close icon-element icon-element-sm shadow-sm" @click="searchBox" data-toggle="tooltip" data-placement="top" title="Search">
                                <i class="la la-search"></i>
                            </div>
                            <cart-menu-drop id="cart2"></cart-menu-drop>

                            <!-- User area -->
                                <div v-if="login == 1" class="nav-right-button d-flex align-items-center pt-2">
                                    <div class="user-action-wrap d-flex align-items-center">
                                        <div class="shop-cart user-profile-cart">
                                            <ul>
                                                <li>
                                                    <div class="shop-cart-btn">
                                                        <div class="avatar-xs">
                                                            <i class="text-white ml-3 la la-user rounded-full bg-secondary"></i>  
                                                        </div>
                                                        <span class="dot-status bg-1"></span>
                                                    </div>
                                                    <ul class="cart-dropdown-menu after-none p-0 notification-dropdown-menu">
                                                        <user-menu :myInfo="usrInfo"></user-menu>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div><!-- end shop-cart -->
                                    </div>
                                </div><!-- end nav-right-button -->


                            <!-- User area -->
                            
                        </div><!-- end menu-wrapper -->
                    </div><!-- end col-lg-10 -->
                </div><!-- end row -->
            </div>
        </div><!-- end container-fluid -->
    </div><!-- end header-menu-content -->
    <div class="off-canvas-menu custom-scrollbar-styled main-off-canvas-menu">
        <div class="off-canvas-menu-close main-menu-close icon-element icon-element-sm shadow-sm" data-toggle="tooltip" data-placement="left" title="Close menu">
            <i class="la la-times"></i>
        </div><!-- end off-canvas-menu-close -->
         <main-menu></main-menu>   
    </div><!-- end off-canvas-menu -->
    <div v-if="login == 1" class="off-canvas-menu custom-scrollbar-styled category-off-canvas-menu">
        <ul class="generic-list-item off-canvas-menu-list pt-90px">
               <user-menu :myInfo="usrInfo"></user-menu>
        </ul>
    </div><!-- end off-canvas-menu -->
    <!-- search Modal -->
    <div :class="searchModal" class="mobile-search-form">
        <div class="d-flex align-items-center">
            <div class="flex-grow-1 mr-3" >
                <div class="form-group mb-0">
                    <input class="form-control form--control pl-3" type="text" v-model="SearchKey" placeholder="Search for anything">
                    <p class="text-danger">{{errormsg}}</p>
                    <span class="la la-search search-icon" @click="searchQuery"></span>
                </div>
            </div>
            <div class="search-bar-close icon-element icon-element-sm shadow-sm myclose" @click="searchBoxClose">
                <i class="la la-times"></i>
            </div><!-- end off-canvas-menu-close -->
        </div>
    </div>
    <div :style="searchoverlay" class="body-overlay"></div>
    <!-- search Modal -->

        <!-- pop up  -->
        <div v-if="popupInfo.status == 1">
            <div :class="popDisplay == 1 ? 'pop-display' : 'pop-nodisplay'" class="pop-modal-body">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6 p-3">
                        <div class="text-center">
                            <a :href="popupInfo.link" target="_blank">
                                <img :src="popupInfo.image" alt="" class="img-fluid" @click="closePopup">
                            </a>
                            <button @click="closePopup" class="btn btn-danger float-right btn-position btn-sm">Close</button>  
                        </div>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
        </div>
        
      <!-- pop up -->
</header>
</template>
<script>
Vue.component('user-menu', require('./../user/userMenuComp.vue').default);
Vue.component('main-menu', require('./mainmenuComp.vue').default);
export default {
    data(){
        return {
            login:0,
            usrInfo:{},
            searchModal:"",
            searchoverlay:"",
            SearchKey:"",
            errormsg:"",
            currPath : "",
            popDisplay:1,
            popupInfo:{}
        }
    },
    methods:{
        searchBox(){
            this.searchModal ="active";
            this.searchoverlay ="opacity: 1;visibility: visible;";
        },
        searchBoxClose(){
            this.searchModal ="";
            this.searchoverlay ="";
        },
        searchQuery(){
            this.currPath =this.$router.currentRoute.path;
            if (this.SearchKey !="" || this.SearchKey.length > 3) {
                this.searchModal ="";
                this.searchoverlay ="";
                this.errormsg="";
                this.$router.push({path:'/search', query:{searchkey: this.SearchKey, type: "article"}})    
                if (this.currPath=="/search") {
                    window.location.reload();
                }
                
            }
            else{
                this.errormsg="Please at least 3 letter! ";
            }
            
            
        },
        closePopup() {
            this.popDisplay = 0;
        }
    },
    created(){
            
            if (this.$session.has('userId') || this.$session.exists()) {
                this.login = 1;

            axios.get("/check-user-session")
            .then((response) => {
                if (response.data.sessionReady == "no") {
                    this.$session.remove("userId"); 
                    this.$session.destroy();
                    this.$root.$emit("loggedIn",0)               
                }
                else{
                    this.usrInfo = response.data.userInfo
                }
            })
            .catch((error) => console.log(error));

            }

            // Pop up

            axios.get("/seller/single-popup-info/")
            .then((response) => {
                this.popupInfo = response.data
                // console.log(response.data)
                })
            .catch((error) => console.log(error));

            // pop up

        
    },
    mounted() {
        this.$root.$on("loggedIn",(token)=>{
            this.login = token;
        })
    }
}
</script>
<style scoped>
    .btn-login{
        background-color:#ec5252;
        color: white;
        padding:1px 15px;
        border-radius: 5px;
        border:1px solid #ec5252;
    }
    .btn-login:hover{
        background-color:transparent;
        color: #ec5252;
    }
    .btn-register{
        background-color:transparent;
        color: #ec5252;
        padding:1px 15px;
        border-radius: 5px;
        border:1px solid #ec5252;
    }
    .btn-register:hover{
        background-color:#ec5252;
        color: white;
    }
    .main-menu-close
    {
        cursor: pointer;
    }
    .pop-modal-body{
        z-index: 999999;
        position: fixed;
        background: #0000008f;
        height: 100%;
        width: 100%;
        top: 0;
    }
    .pop-display{
        display: block;
    }
    .pop-nodisplay{
        display: none;
    }
    .btn-position
    {
        position: absolute;
        right: 0;
    }
    .blink_me {
        animation: blinker 1s linear infinite;
        color:red;
        }

        @keyframes blinker {  
        10% { opacity: 0; }
        }
    @media screen and (max-width: 768px) {
        #cart2 {
                display: none;
            }

          #cart1 {
                display: block !important;
            }  
        }

        #cart2 {
            display: block;
        }
        #cart1 {
            
            display: none;
            }
</style>