import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import exampleview from './components/ExampleComponent';
import exampleview2 from './components/ExampleComponent2';
import contactview from './components/ContactComponent';
// import serviceview from './components/ServiceComponent';
import Userprofile from './components/UserprofileComp';
import UserprofilePreview from './components/UserprofilePreviewComp';
import blogsetting from './components/blogComp';
import homePage from './components/homepageComp';


const routes = [
    {
        path: '/testing',
        name:'mytesting',
        component: exampleview,
        children: [
           { 
               path: 'test2',
               components: {
                   exam2nested:exampleview2
               },
               meta:{
                    title:"My test 2"   
               },
               alias: 't2' //using alias
            },
            { 
                path: 'profile',
                components: {
                    //   default:Userprofile,
                      exam2nested:UserprofilePreview
                }
             },
             { 
                path: 'profiletest',
                components: {
                    exam2nested:Userprofile,
                    //   exam2nested:UserprofilePreview
                }
             },

        ]
    },
    {
        path: '/PersonalityTest',
        component: ()=>  import(/* webpackChunkName: 'interviewGuidComp'*/ "./components/course/interviewGuidComp")  
    },
    {
        path: '/LawOptional',
        name: 'lawoptional',
        component: ()=>  import(/* webpackChunkName: 'serviceview'*/ "./components/course/lawoptionalComp") 
    },
    {
        path: '/course/:courseName/:courseId',
        name: 'myCoursedetail',
        component: ()=>  import(/* webpackChunkName: 'serviceview'*/ "./components/course/coursedetailComp") 
    },
    {
        path: '/article/:articlTitle/:articleId',
        component: ()=>  import(/* webpackChunkName: 'serviceview'*/ "./components/blogs/blogDetailComp") 
    },
    {
        path: '/',
        component: homePage
    },
    {
        path: '/payment/checkout',
        component: ()=>  import(/* webpackChunkName: 'checkout'*/ "./components/user/checkoutComp") 
        
    },
    {
        path: '/contact',
        component: contactview
    },
    {
        path: '/service/:sname',
        component: ()=>  import(/* webpackChunkName: 'serviceview'*/ "./components/ServiceComponent") 
    },
    { 
        path: '/indertest',
        components: {
            indertesting:UserprofilePreview,
            //   exam2nested:UserprofilePreview
        }
     },
     {
         path: '/course-dashboard/blogs-setting/blog-setting',
         component: ()=>  import(/* webpackChunkName: 'blogsetting'*/ "./components/blogComp"),
         name:'blogSetting',
     },
     {
        path: '/course-dashboard/blogs-setting/add-blog/:catId?',
        component: ()=>  import(/* webpackChunkName: 'addblog'*/ "./components/addBlogComp"),
        name:'addblog',
    },
    {
        path: '/course-dashboard/courses-setting',
        component: ()=>  import(/* webpackChunkName: 'coursesetting'*/ "./components/CourseListComp"),
        name:'courseSetting',
    },
    {
        path: '/course-dashboard/add-new-course',
        component: ()=>  import(/* webpackChunkName: 'coursesetting'*/ "./components/addCourseComp"),
        name:'addnewcourse',
    },
    {
        path: '/course-dashboard/edit-course/:courseId',
        component: ()=>  import(/* webpackChunkName: 'editcourse'*/ "./components/editCourseComp"),
        name:'editcourse',
    },
    {
        path: '/course-dashboard/chapter-list/:courseId',
        component: ()=>  import(/* webpackChunkName: 'couseChapsetting'*/ "./components/courseChapterComp"),
        name:'couseChapsetting',
    },
    {
        path: '/course-dashboard/add-new-chapter/:courseId',
        component: ()=>  import(/* webpackChunkName: 'addcouseChap'*/ "./components/addcourseChapterComp"),
        name:'addcouseChap',
    },
    {
        path: '/course-dashboard/edit-chapter/:chapterId',
        component: ()=>  import(/* webpackChunkName: 'editcouseChap'*/ "./components/editcourseChapterComp"),
        name:'editcouseChap',
    },
    {
        path: '/course-dashboard/course-chapter/classes/:chapId/:courseId',
        component: ()=>  import(/* webpackChunkName: 'courseChapClassSetting'*/ "./components/ChapClassSettingComp"),
        name:'courseChapClassSetting',
    },
    {
        path: '/course-dashboard/course-classes/add-class/:chapId/:courseId',
        component: ()=>  import(/* webpackChunkName: 'addChapClassComp'*/ "./components/addChapClassComp"),
        name:'addChapClassComp',
    },    
    {
        path: '/course-dashboard/course-classes/edit-class/:classId',
        component: ()=>  import(/* webpackChunkName: 'editChapClassComp'*/ "./components/editChapClassComp"),
        name:'editChapClassComp',
    },
    {
        path: '/course-dashboard/course-classes/add-test/:chapId/:courseId',
        component: ()=>  import(/* webpackChunkName: 'addChapTestComp'*/ "./components/addChapTestComp"),
        name:'addChapTestComp',
    },
    {
        path: '/course-dashboard/course-classes/edit-test/:testquestId',
        component: ()=>  import(/* webpackChunkName: 'editChapTestComp'*/ "./components/editTestComp"),
        name:'editChapTestComp',
    },    
    {
        path: '/course-dashboard/daily-mcq-setting',
        component: ()=>  import(/* webpackChunkName: 'dailymcqset'*/ "./components/dailymcqSettComp"),
        name:'dailymcqset',
    },
    {
        path: '/course-dashboard/add-question-daily-mcq/:mcqdateid',
        component: ()=>  import(/* webpackChunkName: 'addmcqQuestion'*/ "./components/adddailyMcqQuestComp"),
        name:'addmcqQuestion',
    },
    
   
    {
        path: '/course-category-setting/category-list',
        component: ()=>  import(/* webpackChunkName: 'adminCatsetting'*/ "./components/CategoryListComp"),
        name:'adminCatsetting',
    },
    {
        path: '/course-dashboard/course-bundle-setting',
        component: ()=>  import(/* webpackChunkName: 'courseBundleSetting'*/ "./components/courseBundleComp"),
        name:'courseBundleSetting',
    },
    
    {
        path:'/cart/my-cart-items',
        component: ()=>  import(/* webpackChunkName: 'userLogin'*/ "./components/front/homeCartPageComp") 

    },
    {
        path:'/user-login',
        component: ()=>  import(/* webpackChunkName: 'userLogin'*/ "./components/user/userLoginComp") 

    },
    {
        path:'/user-registration',
        component: ()=>  import(/* webpackChunkName: 'userRegistration'*/ "./components/user/emailPhoneVerifyComp") 

    },
    {
        path:'/password-reset',
        component: ()=>  import(/* webpackChunkName: 'passwordReset'*/ "./components/user/forgotPasswordComp") 

    },
    {
        path:'/change-password',
        component: ()=>  import(/* webpackChunkName: 'passwordReset'*/ "./components/user/changePasswordComp") 

    },
    {
        path:'/complete-user-registration',
        component: ()=>  import(/* webpackChunkName: 'useremailVerification'*/ "./components/user/userRegisterComp") 

    },
    {
        path: '/my-course',
        component: ()=>  import(/* webpackChunkName: 'usercourse'*/ "./components/user/myCourseComp") 
    },
    {
        path: '/purchase-history-dashboard',
        component: ()=>  import(/* webpackChunkName: 'userPurchaseHistory'*/ "./components/user/userPurchaseComp") 
    },
    {
        path: '/edit-profile',
        component: ()=>  import(/* webpackChunkName: 'editUserProfile'*/ "./components/user/userEditProfileComp") 
        
    },
    {
        path: '/update-password',
        component: ()=>  import(/* webpackChunkName: 'updatePassword'*/ "./components/user/userPassupdateComp") 
        
    },
    
    {
        path: '/course/:courseName/:classname/:courseId/:classId',
        component: ()=>  import(/* webpackChunkName: 'usercourse'*/ "./components/user/videoclassComp") 
    },
    {
        path: '/test-result/:testName/:chapterId/:submittestId?',
        component: ()=>  import(/* webpackChunkName: 'usercourse'*/ "./components/user/testresultComp") 
    },
    {
        path: '/logout',
        component: ()=>  import(/* webpackChunkName: 'userLogout'*/ "./components/user/logoutComp") 
    },
    {
        path: '/course-list/:courseCatName?/:catId?',
        component: ()=> import(/* webpackChunkName: 'courseList'*/ "./components/front/homeCoursePageComp")
    },
    {
        path: '/about-us/why-us',
        component: ()=> import(/* webpackChunkName: 'whyus'*/ "./components/front/aboutWhyus")
    },
    {
        path: '/about-us/our-vision-and-mission',
        component: ()=> import(/* webpackChunkName: 'visionandmission'*/ "./components/front/aboutVisionandMission")
    },
    {
        path: '/about-us/director-message',
        component: ()=> import(/* webpackChunkName: 'directormessage'*/ "./components/front/aboutDirectorMessage")
    },
    {
        path: '/about-ias',
        component: ()=> import(/* webpackChunkName: 'aboutIas'*/ "./components/front/iasaboutComp")
    },
    {
        path: '/search/',
        component: ()=> import(/* webpackChunkName: 'aboutIas'*/ "./components/front/searchResultComp")
    },
    {
        path: '/post-category/:categoryName/:categoryId',
        component: ()=> import(/* webpackChunkName: 'aboutIas'*/ "./components/blogs/categoryBlogListComp")
    },
    {
        path: '/all-articles',
        component: ()=> import(/* webpackChunkName: 'aboutIas'*/ "./components/blogs/allArticlesComp")
    },
    {
        path: '/privacy-policy',
        component: ()=> import(/* webpackChunkName: 'aboutIas'*/ "./components/front/privacyComp")
    },
    {
        path: '/terms-and-condition',
        component: ()=> import(/* webpackChunkName: 'aboutIas'*/ "./components/front/termsandconditionComp")
    },
    {
        path: '/refund-and-cancellation-policy',
        component: ()=> import(/* webpackChunkName: 'aboutIas'*/ "./components/front/refundPolicyComp")
    },
    {
        path: '/free-downloads/download-ncert-books',
        component: ()=> import(/* webpackChunkName: 'aboutIas'*/ "./components/front/ncertbooksComp")
    },
    {
        path: '/free-downloads/previous-year-question-paper',
        component: ()=> import(/* webpackChunkName: 'aboutIas'*/ "./components/front/preyearQuestPaperComp")
    },
    {
        path: '/free-mock-test',
        component: ()=> import(/* webpackChunkName: 'aboutIas'*/ "./components/front/freemcqQuestpaperComp")
    },
    {
        path: '/daily-questionary',
        component: ()=> import(/* webpackChunkName: 'aboutIas'*/ "./components/front/freemcqQuestpaperComp")
    },
    {
        path: '/free-mock-test/:mcqDate/:dateid',
        component: ()=> import(/* webpackChunkName: 'aboutIas'*/ "./components/front/mcqquestionattempComp")
    },
    {
        path: '/strategy-for-preparation-of-law-optional',
        component: ()=> import(/* webpackChunkName: 'aboutIas'*/ "./components/front/whychooseLawComp")
    },
    
    
    
    // {
    //     path: '/seller/product-setting',
    //     component: productlist
    // },
    

];



const router = new VueRouter({
    mode:"history", 
    routes, // short for `routes: routes`
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
  })

  
 /*router.beforeEach((to, from,next) => {
     if (to.meta.title) {
        document.title = to.meta.title;    
        document.meta[name=keywords] =  "Hello ";
     }
     else if(to.name){ 
         document.title = to.name;
     }
     else{
         document.title =to.path;
     }
     
     next();
 })*/
  
  export default router;
