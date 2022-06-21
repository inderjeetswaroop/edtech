<template>
    <div>
        
        <div class="card-body bg-white">
            <!-- add Class -->
            <div class="text-right">
                <router-link v-if="courseInfo.courseType === '1'" :to="{name:'addChapClassComp',params: {chapId:chapterid,courseId: courseid }}" class="btn btn-primary ">+ Add new Class</router-link>
                
                <router-link v-if="courseInfo.courseType === '0'" :to="{name:'addChapTestComp',params: {chapId:chapterid,courseId: courseid }}" class="btn btn-primary ">+ Add new Test Quest.</router-link>
                
            </div>
            <br>
            <!-- add Class -->
            <chapter-class-list v-if="courseInfo.courseType === '1'" :mychapId="chapterid"></chapter-class-list>
            <chapter-test-list v-if="courseInfo.courseType === '0'" :mychapId="chapterid"></chapter-test-list>
        </div>
    </div>
</template>
<script>
Vue.component('chapter-class-list', require('./chapClassListComp.vue').default);
Vue.component('chapter-test-list', require('./chapTestListComp.vue').default);
export default {
    
    data(){
        return {
            chapterid:"",
            courseid:"",
            courseInfo:"",
        }
    },
    created(){
        this.chapterid=this.$route.params.chapId;
        this.courseid=this.$route.params.courseId;
        // Single course info
            
            axios.get("/course-dashboard/single-course-detail/"+this.courseid)
            .then((response) => this.courseInfo = response.data)
            .catch((error) => console.log(error));
            
            // Single course info
    },
   
}
</script>