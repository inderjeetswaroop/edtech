<template>
<div>
    <div class="fullpage" :style="{display:loadDisplayed}"></div>
<section class="course-dashboard">
    <div class="course-dashboard-wrap">
        <div class="course-dashboard-container d-flex">
            <div class="course-dashboard-column">
                <div class="lecture-viewer-container">
                    <div class="lecture-video-item p-2">
                        
                        <!-- Video -->
                        
                            <!-- :options="options" // asign properties  -->
                            <!-- data-poster="poster.jpg" // Display poster -->
                            <video-module :classInfo="getClassInfo" v-if="corsType.courseType == 1 && getClassInfo.classType == 1"></video-module>
                            
                            <test-view v-else-if="corsType.courseType == 0" :testName="className" :chapId="classId"></test-view>
                            
                            <div v-else v-html="getClassInfo.classScript" class="p-4 card border border-secondary"></div>
                                
                            
                        <!-- //Video -->
                    </div>
                </div><!-- end lecture-viewer-container -->
                <div class="lecture-video-detail">
                    <div class="lecture-tab-body bg-gray p-4">
                        <ul class="nav nav-tabs generic-tab" id="myTab" role="tablist">
                            
                            <li class="nav-item mobile-menu-nav-item">
                                <a class="nav-link " id="course-content-tab" data-toggle="tab" href="#course-content" role="tab" aria-controls="course-content" aria-selected="false">
                                    Course Content
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="announcements-tab" data-toggle="tab" href="#announcements" role="tab" aria-controls="announcements" aria-selected="false">
                                    PDF Notes
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="lecture-video-detail-body">
                        <div class="tab-content" id="myTabContent">
                           
                            <div class="tab-pane fade" id="course-content" role="tabpanel" aria-labelledby="course-content-tab">
                                <div class="mobile-course-menu pt-4">
                                    <div class="accordion generic-accordion generic--accordion" id="mobileCourseAccordionCourseExample">
                                        <video-class-list :keyId="'mobile'" :cType="corsType.courseType" :uCourseId="courseId"></video-class-list>
                                    </div>
                                    
                                </div><!-- end mobile-course-menu -->
                            </div><!-- end tab-pane -->
                            
                            <div class="tab-pane active" id="announcements" role="tabpanel" aria-labelledby="announcements-tab">
                                <div class="lecture-overview-wrap lecture-announcement-wrap">
                                    <div v-if="testSchedule == 1" class="lecture-overview-item">
                                        <h3 v-if="startTest == 0">PDF Of Question Paper will be visible in 
                                            <span class="text-danger">
                                                <my-countdown @timerEnd="testPdfVisible" v-bind:end="testTime"></my-countdown>
                                            </span>
                                        </h3>
                                       <iframe v-else :src="getClassInfo.classPdf" frameborder="0" class="pdfArea"></iframe>
                                    </div><!-- end lecture-overview-item -->
                                    <div v-else class="lecture-overview-item">
                                        <div v-if="getClassInfo.classPdf == null || getClassInfo.classPdf =='null'"></div>
                                       <iframe v-else  :src="getClassInfo.classPdf" frameborder="0" class="pdfArea"></iframe>
                                    </div><!-- end lecture-overview-item -->
                                </div>
                            </div><!-- end tab-pane -->
                        </div><!-- end tab-content -->
                    </div><!-- end lecture-video-detail-body -->
                </div><!-- end lecture-video-detail -->
            </div><!-- end course-dashboard-column -->
            <div class="course-dashboard-sidebar-column">
                <button class="sidebar-open" type="button"><i class="la la-angle-left"></i> Course content</button>
                <div class="course-dashboard-sidebar-wrap custom-scrollbar-styled">
                    <div class="course-dashboard-side-heading d-flex align-items-center justify-content-between">
                        <h3 class="fs-18 font-weight-semi-bold">Course content</h3>
                        <button class="sidebar-close" type="button"><i class="la la-times"></i></button>
                    </div><!-- end course-dashboard-side-heading -->
                    <div class="course-dashboard-side-content">
                        <div class="accordion generic-accordion generic--accordion" id="accordionCourseExample">
                            <video-class-list :keyId="'desktop'" :cType="corsType.courseType" :corsname="courseName" :uCourseId="courseId"></video-class-list>
                        </div>
                        
                    </div><!-- end course-dashboard-side-content -->
                </div><!-- end course-dashboard-sidebar-wrap -->
            </div><!-- end course-dashboard-sidebar-column -->
        </div><!-- end course-dashboard-container -->
    </div><!-- end course-dashboard-wrap -->
</section><!-- end course-dashboard -->
        
    </div>
</template>
<script>
Vue.component('my-countdown', require('./mycountdownComp.vue').default);
Vue.component('video-class-list', require('./classvideolistComp.vue').default);
Vue.component('video-module', require('./videoModuleComp.vue').default);
Vue.component('testView', require('./testViewComp.vue').default);

export default {
    data(){
        return {
            courseName:"",
            className:"",
            courseId:"",
            classId:"",
            loadDisplayed:"block",
            getClassInfo:{},
            corsType:"",
            testSchedule:0,
            startTest:0,
            classtype:0,
            testTime:"",
            testing :"Sun Feb 13 2022 13:32:00 ",

        }
    },
     beforeCreate(){
         this.loadDisplayed="block";
        this.$Progress.start();

        if (!this.$session.has("userId") || !this.$session.exists()) {
            this.$router.push("/user-login");
        }
        
    },
    methods:{
        testPdfVisible(){
            this.startTest =1;
        }
    },
    created(){
            this.courseName=this.$route.params.courseName;
            this.className=this.$route.params.classname;
            this.courseId=this.$route.params.courseId;
            this.classId=this.$route.params.classId;
            // Check here for class with login session and if found then display else redirect to course page or login page
            

            // course Type
            axios.get("/course-type-detail/"+this.courseId)
            .then((response) => this.corsType = response.data)
            .catch((error) => console.log(error));
            // Course Type

           
               axios.get("/get-class-info/"+this.classId)
                .then((response) => {
                    this.getClassInfo = response.data
                    this.classtype = this.getClassInfo.classType;
                    if(this.classtype == 3) {
                        this.testSchedule=1;
                        this.testing = new Date(this.getClassInfo.classdate);
                        // this.testing =  dt.setMinutes( dt.getMinutes() + 0 );
                        this.testTime = new Date(this.testing).toString().split('GMT')[0];
                    
                        var date1 = new Date(this.getClassInfo.classdate);
                        var date2 = new Date();
                        // alert(date1);
                        if (date1.getTime() < date2.getTime()) {
                            this.startTest=1;                            
                        }
                        else{
                            this.startTest=0;
                        }
                    }
                    
                    
                    
                    
                })
                .catch((error) => console.log(error));
           
            
            //
        this.$Progress.finish();
        this.loadDisplayed="none";
            // 
            
            
    }
}
</script>
<style scoped>
 .fullpage {
        height: 100%;
        width: 100%;
        position: fixed;
        background: #00000093;
        z-index: 99999;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .pdfArea
    {
        width:100%;
        height: 800px;
    }
    .generic-accordion .card-header
    {
        padding: 16px 10px;
    }
</style>
