<template>
    <section class="course-area section-padding">
    <div class="container">
        <div class="filter-bar mb-4">
            <div class="filter-bar-inner d-flex flex-wrap align-items-center justify-content-between">
                <h2 class="fs-14"><router-link to="/course-list" >All Courses </router-link> <span v-if="courseCatname != undefined" class="text-capitalize">{{ " >> "+courseCatname.replace(/-/g, ' ')}}</span></h2>
                
            </div><!-- end filter-bar-inner -->
        </div><!-- end filter-bar -->
        <div class="row">
            <course-list-view v-if="lawoptional" :courseInfo="lawoptional"></course-list-view>
            <course-list-view v-for="tThree in courseList" :key="tThree.id" :courseInfo="tThree" 
            ></course-list-view>
        </div><!-- end row -->
    </div><!-- end container -->
</section><!-- end courses-area -->
</template>
<script>
// Vue.component('home-course-list', require('./homeCourseSectionComp.vue').default);
export default {
    data(){
        return {
            courseList:{},
            courseCatId:"",
            courseCatname:"",
            lawoptional:"",
            
        }
    },
    methods:{
        getcategoryCourse(str){
            alert(str.value);
        }
    },
    beforeCreate(){
        // 
        this.$Progress.start();
        // 
        

    },
    created(){
         // fetching lawoptional course only
        axios.get("/front-single-course-detail/4")
            .then((response) => this.lawoptional = response.data)
            .catch((error) => console.log(error));
        // fetching lawoptional course only

        this.courseCatId = this.$route.params.catId
        this.courseCatname = this.$route.params.courseCatName
        console.log(this.courseCatId);
        if (this.courseCatId == undefined) {
             // 
            axios.get("/top-courses/1000/"+ 0)
            .then((response) => this.courseList = response.data)
            .catch((error) => console.log(error));
        // 
           
        }
        else {
            // 
            axios.get("/top-courses/1000/"+this.courseCatId)
            .then((response) => this.courseList = response.data)
            .catch((error) => console.log(error));
            // 
        }
        this.$Progress.finish();
    }
}
</script>