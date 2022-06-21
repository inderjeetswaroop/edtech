<template>
    <div>
        <div class="fullpage" :style="{display:loadDisplayed}">
            <h3 class="center-text" >Please wait <div class="spinner-border text-light"></div></h3>
        </div>
        <section class="blog-area section--padding">
            <div class="container">
                <div class="row">
                    <div v-for="blogInfo in blogList.data" :key="blogInfo.id"  class="col-lg-4">
                       <blog-list-view :bloginfo="blogInfo"></blog-list-view>
                    </div><!-- end col-lg-4 -->
                   
                </div><!-- end row -->
                <div class="text-center pt-3">
                    <nav aria-label="Page navigation example" class="pagination-box">
                        <pagination :data="blogList" @pagination-change-page="getResults"></pagination>
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
                blogList: {},
            }
        },
        created() { 
            
            this.loadDisplayed ="block";
            this.categoryName = this.$route.params.categoryName
            this.catId = this.$route.params.categoryId
            
            axios.get("/get-all-articles/")
            .then((response) => {
                // console.log()
                this.blogList = response.data;
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
                 axios.get("/get-all-articles"+"?page="+ page)
                .then((response) => {
                    // console.log()
                    this.blogList = response.data;
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