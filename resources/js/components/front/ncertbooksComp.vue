<template>
    <div>
        <img class="img-fluid" src="https://beandbyias.com/storage/app/public/images/category/XuTjtVROLBTEIGAYkrmAmQ5nCCSm6xqFO2QIsx9F.png" alt="Download NCERT books for UPSC Preparation">
        <br>
        <div class="container pt-4">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
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
                                            </div>
                                        </div><!-- end category-content -->
                                    </div><!-- end category-item -->
                                </div><!-- end col-lg-4 -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            catList:{}
        }
    },
    created(){
         axios.get("/ncert-books-download")
            .then((response) => this.catList = response.data)
            .catch((error) => console.log(error));
    }
}
</script>