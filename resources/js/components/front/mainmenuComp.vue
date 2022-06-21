<template>
    <ul :class="scrWidth < 769 ? 'generic-list-item off-canvas-menu-list pt-90px': ''">
        <li>
            <router-link to="/" >Home</router-link>
        </li>
        <li>
            <a href="#">About <i v-if="scrWidth > 769" class="la la-angle-down fs-12"></i></a>
            <ul :class="scrWidth < 769 ? 'sub-menu': 'dropdown-menu-item'" >
                <li><router-link to="/about-us/why-us">Why Us</router-link> </li>
                <li><router-link to="/about-us/our-vision-and-mission">Vision and Mission</router-link> </li>
                <li><router-link to="/about-us/director-message">Director's Message</router-link> </li>
            </ul>
        </li>
        <li>
            <router-link to="/about-ias" >CSE</router-link>
        </li>
        <li>

            <router-link to="/course-list" >All Courses <i v-if="scrWidth > 769" class="la la-angle-down fs-12"></i></router-link>
            <ul :class="scrWidth < 769 ? 'sub-menu': 'dropdown-menu-item'" >
                <li>
                    <router-link to="/course-list/law-optional/3" >Law Optional </router-link>
                </li>
                <li>
                    <router-link to="/course-list/gs-foundation/4">GS Foundation</router-link> 
                </li>
                <li>
                    <router-link to="/PersonalityTest">Interview Guidance Program</router-link> 
                </li>
                <li>
                    <router-link to="/course/quick-revision-programme-for-prelims-2022/8">QRP - Quick Revision Programme </router-link> 
                </li>
                <li>
                    <router-link to="course/upsc-mentorship-program-for-202324/19">UPSC Mentorship Program </router-link> 
                </li>
                
                
            </ul>
        </li>
        <li>
            <a href="#">Law Optional <i v-if="scrWidth > 769" class="la la-angle-down fs-12"></i></a>
            <ul :class="scrWidth < 769 ? 'sub-menu': 'dropdown-menu-item'" >
                <li><router-link to="/course-list/law-optional/3" >Law Optional </router-link></li>
                <li><router-link to="/course/upsc-mentorship-program-for-202324/19" >QRP Law Optional</router-link></li>
                <li class="nest-sub-menu">
                    <a href="#">UPSC LAW Optional Previous Years Papers <i v-if="scrWidth > 769" class="la la-angle-right fs-12"></i></a>
                    <ul class="cust-sub-menu sub-menu">
                        <li>
                            <router-link to="/post-category/upsc-law-optional-previous-years-papers-year-wise/14" >Year Wise</router-link>
                        </li>
                        <li>
                            <router-link to="/post-category/upsc-law-optional-previous-years-papers-topic-wise/17" >Topic Wise</router-link>
                        </li>
                    </ul>
                </li>
                <li><router-link to="/post-category/law-optional-blog/15" >LAW Optional Blog</router-link></li>
                <li><router-link to="/post-category/law-optional-answer-writing/16">Free Resources</router-link></li>
                <li><a href="https://t.me/LAW_UPSC_Optional" target="_blank">Join our telegram channel</a></li>
                <li><router-link to="/strategy-for-preparation-of-law-optional">Strategy For Preparation Of Law Optional</router-link></li>
                
                
            </ul>
        </li>
        <li>
            <a href="#">Test Series <i v-if="scrWidth > 769" class="la la-angle-down fs-12"></i></a>
            <ul :class="scrWidth < 769 ? 'sub-menu': 'dropdown-menu-item'" >
                <li><router-link to="/course-list/prelims-test/8" >Prelims Test </router-link></li>
                <li><router-link to="#" >Mains</router-link></li>
                <li><router-link to="#" >Text Book Based</router-link></li>
            </ul>
        </li>
        <li>
            <router-link to="/post-category/current-affairs/7" >Curr. Affairs <i v-if="scrWidth > 769" class="la la-angle-down fs-12"></i></router-link>
            <ul :class="scrWidth < 769 ? 'sub-menu': 'dropdown-menu-item'" >
                <li><router-link to="/post-category/important-headlines/13" >Important Headlines</router-link></li>
                <li><router-link to="/post-category/daily-news/8" >Daily News</router-link></li>
                <li><router-link to="/post-category/important-editorial/9" >Important Editorial</router-link></li>
                <li><router-link to="/post-category/daily-chintan/10" >Daily Chintan</router-link></li>
                <li><router-link to="/daily-questionary" >Daily Questionnaire</router-link></li>
            </ul>
        </li>
        <li>
            <a href="#">Free Downloads <i v-if="scrWidth > 769" class="la la-angle-down fs-12"></i></a>
            <ul :class="scrWidth < 769 ? 'sub-menu': 'dropdown-menu-item'" >
                <li><router-link to="/free-mock-test" >Free Mock Tests</router-link></li>
                <li><router-link to="/post-category/economic-survey/18" >Economic Survey</router-link></li>
                <li><router-link to="/post-category/budget/19" >Budget</router-link></li>
                <!-- <li><router-link to="/benby-ias-blogs" >BENBY IAS Blogs</router-link></li> -->
                <li><a href="https://youtu.be/8X8e7fmGk-4" target="_blank"> Webinar/Seminar</a></li>
                <li><a href="https://www.youtube.com/channel/UC2BSaGEEWDChYQtgGzgGl_A" target="_blank"> YouTube</a></li>
                <li><router-link to="/free-downloads/previous-year-question-paper" >Previous Year UPSC Papers</router-link></li>
                <li><router-link to="/free-downloads/download-ncert-books" >Download NCERT Books</router-link></li>
            </ul>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return {
            catList:{},
            scrWidth:screen.width,
        }
    },
    
}
</script>
<style scoped>
.cust-sub-menu
     {
        position: absolute;
        top: 50px;
        left: 96%;
        width: 280px;
        background-color: #fff;
        padding: 25px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
        -webkit-transition: all .3s;
        -moz-transition: all .3s;
        -ms-transition: all .3s;
        -o-transition: all .3s;
        transition: all .3s;
        -webkit-box-shadow: 0 0 40px rgb(82 85 90 / 10%);
        -moz-box-shadow: 0 0 40px rgba(82,85,90,.1);
        box-shadow: 0 0 40px rgb(82 85 90 / 10%);
        visibility: hidden;
        opacity: 0;
    }
   .nest-sub-menu:hover .cust-sub-menu{
        visibility: visible;
        opacity: 1;
        position: absolute;
    }
    .cust-sub-menu > li > a
    {
        color: #7f8897;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0;
        border-bottom: 1px solid #d1d1d3;
        padding-bottom: 15px;
    }
    @media screen and (max-width: 768px) {
        .nest-sub-menu:hover .cust-sub-menu{
            position: relative;
            top: -15px;
            left: 2%;
            background-color: transparent;
            border-radius: none;
            box-shadow: none;
            
        }
    }
</style>