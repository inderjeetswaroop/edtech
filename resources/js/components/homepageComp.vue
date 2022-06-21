<template>
    <div>
        
        <home-slider></home-slider>
        <home-course-list></home-course-list>
        <div class="section-block"></div>
        <home-feature></home-feature>
        <home-success-story></home-success-story>
        <div class="section-block"></div>
        <home-cat-list></home-cat-list>
        <div class="section-block"></div>
        <home-about></home-about>
        <div class="section-block"></div>
        <home-student-feed></home-student-feed>
        <div class="section-block"></div>
        <home-lead-form></home-lead-form>
        <div class="section-block"></div>
        <home-blogs></home-blogs>
    </div>
</template>
<script>

import Vue from "vue";
Vue.component('home-slider', require('./front/homeSliderComp.vue').default);
Vue.component('home-feature', require('./front/homeFeatureComp.vue').default);
Vue.component('home-course-list', require('./front/homeCourseSectionComp.vue').default);
Vue.component('home-success-story', require('./front/homeSuccessStory.vue').default);
Vue.component('home-cat-list', require('./front/homeCategoryComp.vue').default);
Vue.component('home-about', require('./front/homeAboutSectionComp.vue').default);
Vue.component('home-student-feed', require('./front/homeStudentFeedComp.vue').default);
Vue.component('home-lead-form', require('./front/homeLeadformComp.vue').default);
Vue.component('home-blogs', require('./front/homeBlogComp.vue').default);
export default {
    data() { 
        return{
            // mytitle:"Hello"
        }
    },
        metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'UPSC Law Syllabus For IAS Mains 2022: Download IAS Law Optional Syllabus BE N BY IAS best coaching for upsc cse law optional by ias jasbir singh bajaj sir',
        // all titles will be injected into this template
        titleTemplate: '%s | BE N BY IAS',
        htmlAttrs: {
            lang: 'en-US'
            },
            meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'title', content: ' content="Best UPSC Law Optional Courses, Preparation, Notes, Syllabus score 280+ easily' },
            { name: 'description', content: 'IAS Law Optional Syllabus: UPSC Civil Services Mains Exam has Law as one of the Optional Subjects with 2 papers (Optional Paper I and Paper II). Its popularity stems from the syllabus of UPSC which has a very large overlap between General Studies and Law.' },
            { name: 'keywords', content: 'UPSC Law Optional, , upsc prelims, upsc online registration, UPSC Law Optional Syllabus, UPSC Law Optional Question Paper, UPSC Law Optional Preparation, UPSC Law Optional Strategy, upsc recruitment, upsc civil services exam 2022 syllabus, upsc notification, UPSC Law Optional Notes, UPSC Law Optional Test Series, IAS Law,  ups near me, upsc, upsc exam, upsc online, for upsc exam, upsc ias syllabus, upsc syllabus, upsc age limit, upsc admit card, upsc 2022, upsc full form, upsc exam age limit, upsc result 2021, upsc result, upsc jobs, upsc meaning, upsc cse, upsc notification, upsc topper, for upsc preparation, , upsc books, upsc prelims syllabus, upsc exam 2022, upsc book list, upsc exam syllabus, upsc exam pattern, upsc epfo, upsc mains syllabus, upsc previous papers, what upsc exam, upsc ias, upsc 2022 result, upsc optional subjects, upsc syllabus mains, upsc pdf, Civil Service Law Optional, Law Optional,' },
            { property: 'og:description', content: 'E-Learning Solution provides Best UPSC Law Optional Courses, Syllabus, Strategy, and Notes. You can download UPSC IAS Law optional syllabus, Notes, Question Paper, and Current Affairs PDFs for UPSC Preparation by ias jasbir singh bajaj sir.' },
            
            ]
        },
       
        beforeCreate(){
            this.$Progress.start();
        },
        created(){
            this.$Progress.finish();
        },
        
}
</script>