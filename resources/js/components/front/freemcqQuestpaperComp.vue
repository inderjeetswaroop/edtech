<template>
    <div>
        <div class="fullpage" :style="{display:loadDisplayed}">
            <h3 class="center-text" >Please wait <div class="spinner-border text-light"></div></h3>
        </div>
        <section class="blog-area section--padding">
            <div class="container">
                <div class="row">
                    <div v-for="(dateinfo,index) in mcqDateList.data" :key="index"  class="col-lg-3 p-2">
                        <div class="card p-3 rounded shadow bg-white">
                            <div class="d-flex">
                                <div>
                                    <small >Updated On </small>
                                </div>
                                <div class="ml-auto">
                                    <small class="text-danger">{{dateinfo.date}} </small>
                                </div>
                            </div>
                            <h3>{{dateinfo.topic}}</h3>
                            <br>
                            <router-link  :to="'/free-mock-test/'+dateinfo.date+'/'+dateinfo.id" class="btn theme-btn theme-btn-sm theme-btn-white border border-danger"><i class="la la-arrow-right icon ml-1"></i>Attempt Now
                            </router-link>
                        </div>
                    </div><!-- end col-lg-4 -->
                   
                </div><!-- end row -->
                <div class="text-center pt-3">
                    <nav aria-label="Page navigation example" class="pagination-box">
                        <pagination :data="mcqDateList" @pagination-change-page="getResults"></pagination>
                    </nav>
                </div>
            </div><!-- end container -->
        </section><!-- end blog-area -->
    </div>
</template>
<script>
Vue.component('pagination', require('laravel-vue-pagination'));
export default {
    data() { 
            return{
                categoryName:"",
                catId:"",
                loadDisplayed:"none",
                mcqDateList: {},
                questType:"daily",
            }
        },
        created() { 
            var rootname= this.$router.currentRoute.path;
            if (rootname == "/free-mock-test") {
                this.questType = "mocktest";
            }
            else{
                this.questType = "daily";
            }
            this.loadDisplayed ="block";
            axios.get("/front-mock-test-date-list/"+this.questType)
            .then((response) => {
                // console.log()
                this.mcqDateList = response.data;
                this.loadDisplayed ="none";
                })
            .catch((error) => console.log(error));  

            
            this.$Progress.finish();


        },
        beforeCreate(){
            this.$Progress.start();
        },
        methods:{
                
                
                getResults(page = 1) {
                    this.loadDisplayed ="block";
                    this.categoryName = this.$route.params.categoryName
                    this.catId = this.$route.params.categoryId
                 axios.get("front-mock-test-date-list/?page="+ page)
                .then((response) => {
                    // console.log()
                    this.mcqDateList = response.data;
                    this.loadDisplayed ="none";
                    })
                .catch((error) => console.log(error));
                // 

            }
          
        }
}
</script>
<style scoped>
    .fullpage {
        height: 100%;
        width: 100%;
        position: fixed;
        background: #000000ad;
        z-index: 9;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .center-text {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 100vh;
        color: white;
        }
</style>