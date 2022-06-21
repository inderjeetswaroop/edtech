<template>
    <div>
        <section class="breadcrumb-area py-5 bg-white pattern-bg">
            <div class="container">
                <div class="breadcrumb-content">
                    <div class="section-heading">
                        <h2 class="section__title">My Courses</h2>
                    </div><!-- end section-heading -->
                    
                </div>
            </div>
        </section>
        <section class="my-courses-area pt-30px pb-90px">
            <div class="container">
                <div class="my-course-content-wrap">
                        <div class="my-course-cards pt-40px">
                            <div v-if="topthree.length > 0" class="row">
                                  <user-my-course v-for="tThree in topthree" 
                                 :key="tThree.id" 
                                 :courseInfo="tThree"></user-my-course>  
                            </div>
                            <div v-else class="row text-center">
                                <div class="col-md-12"> 
                                    <h3>No course found</h3>
                                    <router-link to="/course-list" class="btn theme-btn">Explore All Course <i class="la la-arrow-right icon ml-1"></i></router-link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    </div>        
</template>
<script>
Vue.component('user-my-course', require('./userMycourseComp.vue').default);
export default {
    data(){
        return {
            topthree:{}
        }
    },
     beforeCreate(){
        this.$Progress.start();

        if (!this.$session.has("userId") || !this.$session.exists()) {
            this.$router.push("/user-login");
        }
        
    },
    created(){
            //
        this.$Progress.finish();
            // 
        axios.get("/my-course-list")
            .then((response) => this.topthree = response.data)
            .catch((error) => console.log(error));
    }
    
    

}
</script>