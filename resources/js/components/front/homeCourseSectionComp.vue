<template>
        <!--======================================
        START COURSE AREA
======================================-->
<section class="course-area pb-120px pt-5">
    <div class="container">
        <div class="section-heading text-center">
            <!-- <h5 class="ribbon ribbon-lg mb-2">Choose your desired courses</h5> -->
            <h2 class="section__title" >Choose your desired courses </h2>
            <span class="section-divider"></span>
        </div><!-- end section-heading -->
       <div class="row">
           <course-list-view v-if="lawoptional" :courseInfo="lawoptional"></course-list-view>
            <course-list-view
            v-for="tThree in topthree" :key="tThree.id" :courseInfo="tThree"
            ></course-list-view>
        </div><!-- end row -->
        <div class="more-btn-box mt-4 text-center">
            <router-link to="/course-list" class="btn theme-btn" >Browse all Courses <i class="la la-arrow-right icon ml-1"></i></router-link>
        </div><!-- end more-btn-box -->
    </div><!-- end container -->
    
</section><!-- end courses-area -->
<!--======================================
        END COURSE AREA
======================================-->    
</template>
<script>

export default {
    data(){
        return {
            topthree:{},
            lawoptional:""
        }
    },
    created() {
        // fetching lawoptional course only
        axios.get("/front-single-course-detail/4")
            .then((response) => this.lawoptional = response.data)
            .catch((error) => console.log(error));
        // fetching lawoptional course only

        axios.get("/top-courses/2")
            .then((response) => this.topthree = response.data)
            .catch((error) => console.log(error));
    }
}
</script>
