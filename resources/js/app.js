require('./bootstrap');
require('vue-select-image/dist/vue-select-image.css');
window.Vue = require('vue').default;

import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import tinymce from 'vue-tinymce-editor'
import VueSelectImage from "vue-select-image"
import router from './router'
import Vue from 'vue';
import VueSession from 'vue-session'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
/* import VueCoreVideoPlayer from 'vue-core-video-player'
 */


import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
    color: '#3f69e2',
    failedColor: 'red',
    height: '10px'
  })
 
  var options = {
    persist: true
}
Vue.use(VueSession, options);   
Vue.use(VueRouter);
Vue.use(VueMeta);
Vue.use(VueSelectImage);
// Vue.use(VueCoreVideoPlayer)
Vue.use(VuePlyr, {
    plyr: {}
  })

// Tiny MCE
    Vue.component('tinymce', tinymce)
// Tiny MCE


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('proview-component', require('./components/proListViewComponent.vue').default);

// Course Admin
    // Vue.component('edit-course', require('./components/editCourseComp.vue').default);
    
    // course bundle
    Vue.component('course-bundle', require('./components/courseBundleComp.vue').default); 


    // Chapters
    Vue.component('chapter-setting', require('./components/courseChapterComp.vue').default);

    // Blogs Categories
    Vue.component('blog-category-setting', require('./components/blogCatComp.vue').default);       
    Vue.component('single-blogcat-info', require('./components/singleblogcatInfoComp.vue').default);       

    // Blogs / Articles
    Vue.component('blog-setting', require('./components/blogComp.vue').default);       
    Vue.component('blog-list', require('./components/blogListCatwiseComp.vue').default);       
    Vue.component('count-cat', require('./components/countCatblogComp.vue').default);
    Vue.component('edit-article', require('./components/editBlogComp.vue').default);
    
    // user setting
    
    Vue.component('user-setting', require('./components/usersettingComp.vue').default);
    Vue.component('user-purchase-history', require('./components/userPurchaseHistoryComp.vue').default);

    
// Course Admin

// Public Pages
    Vue.component('home-page', require('./components/homepageComp.vue').default);
    Vue.component('course-list-view', require('./components/front/homeCourseListComp.vue').default);
    Vue.component('blog-list-view', require('./components/blogs/blogListView.vue').default);
    Vue.component('front-login', require('./components/user/userLoginComp.vue').default);
    Vue.component('cart-menu-drop', require('./components/course/cartdropDownComp.vue').default);
    Vue.component('front-navbar', require('./components/front/navbarComp.vue').default);
    
    
    
// Public Pages


// Admin Categoey List
    Vue.component('tax-setting', require('./components/taxtVisibleComp.vue').default);
    Vue.component('taxclasssetting', require('./components/addTaxClassComp.vue').default);
    Vue.component('taxsetting', require('./components/TaxlistComp.vue').default);
    Vue.component('currsetting', require('./components/CurrListComp.vue').default);
    Vue.component('shipsetting', require('./components/shippingSettingComp.vue').default);
    Vue.component('locationsetting', require('./components/LocationsettComp.vue').default);
    Vue.component('mediasetting', require('./components/mediaUploadComp.vue').default);
    Vue.component('add-product', require('./components/addProductComp.vue').default);
    Vue.component('edit-product', require('./components/editProductComp.vue').default);
    Vue.component('product-list', require('./components/ProductListComp.vue').default);        
    Vue.component('currency-symbol', require('./components/CurrencySymbolComp.vue').default);        
    Vue.component('slider-setting', require('./components/SliderSettingComp.vue').default);        
    Vue.component('popup-setting', require('./components/popupSettingComp.vue').default);        
    Vue.component('interview-registrations', require('./components/interviewRegisComp.vue').default);        
    
    
// Admin Categoey List
const app = new Vue({
    el: '#app',
    router,
    
});
