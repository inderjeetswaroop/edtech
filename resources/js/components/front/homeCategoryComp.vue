<template>
        <section class="category-area pb-90px py-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-9">
                        <div class="category-content-wrap">
                            <div class="section-heading">
                                <h5 class="ribbon ribbon-lg mb-2">Initiatives</h5>
                                <h2 class="section__title">BE N BY IAS Special </h2>
                                <span class="section-divider"></span>
                            </div><!-- end section-heading -->
                        </div>
                    </div><!-- end col-lg-9 -->
                    <div class="col-lg-3">
                        <div class="category-btn-box text-right">
                            <router-link  :to="'/all-articles'" class="btn theme-btn">
                                All Articles <i class="la la-arrow-right icon ml-1"></i>
                            </router-link>
                            
                        </div><!-- end category-btn-box-->
                    </div><!-- end col-lg-3 -->
                </div><!-- end row -->
                <div class="category-wrapper mt-30px">
                    <div class="row">
                        <div v-for="(category,index) in catList" :key="index" class="col-lg-4 responsive-column-half">
                            <div class="category-item">
                                <img  class="cat__img lazy" :src="category.image"  alt="Category image">
                                <div class="category-content">
                                    <div class="category-inner">
                                        <h3 class="cat__title">
                                            <router-link  :to="'/post-category/'+category.catName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')+'/'+category.id">
                                                {{category.catName}}
                                            </router-link>
                                        </h3>
                                        <p class="cat__meta"><count-cat :catId="category.id"></count-cat> Article(s)</p>
                                        <router-link class="btn theme-btn theme-btn-sm theme-btn-white" :to="'/post-category/'+category.catName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')+'/'+category.id">
                                            Explore <i class="la la-arrow-right icon ml-1"></i>
                                        </router-link>
                                        
                                    </div>
                                </div><!-- end category-content -->
                            </div><!-- end category-item -->
                        </div><!-- end col-lg-4 -->
                        
                    </div><!-- end row -->
                </div><!-- end category-wrapper -->
            </div><!-- end container -->
        </section><!-- end category-area -->
</template>
<script>
export default {
    data(){
        return {
            catList:{}
        }
    },
    created(){
         axios.get("/front-blog-category-list")
            .then((response) => this.catList = response.data)
            .catch((error) => console.log(error));
    }
}
</script>