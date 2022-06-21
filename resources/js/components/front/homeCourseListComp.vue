<template>
     <div class="col-lg-4 responsive-column-half">
        <div class="card card-item card-preview" data-tooltip-content="#tooltip_content_1">
            <div class="card-image">
                <router-link :to="'/course/'+seoTitle+'/'+coursedetail.id">
                    <img class="card-img-top lazy" :src="coursedetail.featureImg"  alt="Card image cap" height="180">
                </router-link>
                <div class="course-badge-labels">
                    <!-- <div class="course-badge"><i class="la la-clock mr-1"></i>{{coursedetail.courseStartDate}}</div> -->
                    <div v-if="coursedetail.discounted_price < coursedetail.price" class="course-badge blue">-{{ (((coursedetail.price - coursedetail.discounted_price)*100)/coursedetail.price).toFixed(2) }}%</div>
                </div>
            </div><!-- end card-image -->
            <div class="card-body">
                <h6 class="ribbon ribbon-blue-bg fs-14 mt-n3 mb-2">{{catInfo.catname}}</h6>
                <h5 class="card-title"><router-link :to="'/course/'+seoTitle+'/'+coursedetail.id">{{coursedetail.courseName}}</router-link></h5>
                <div class="title-devider"></div>
                <div class="d-flex">
                    <div>
                        <i class="la la-video-camera feature-text" ></i>
                    </div>
                    <div>
                       <p class="pl-2 feature-text" >5 days Live Interactive Classes</p>
                    </div>
                </div>
                <div class="d-flex mt-n2">
                    <div>
                        <i class="la la-book-open feature-text"></i>
                    </div>
                    <div>
                        <p class=" pl-2 feature-text">Study Material</p>
                    </div>
                </div>
                

                <div class="d-flex justify-content-between align-items-center my-2  ">
                    <p v-if="coursedetail.discounted_price != coursedetail.price" class="card-price text-theme font-weight-bold font-weight-bold">Rs.{{coursedetail.discounted_price}} <span class="before-price font-weight-medium">Rs.{{coursedetail.price}}</span></p>
                    <p v-else class="card-price text-theme font-weight-bold">Rs.{{coursedetail.price}} </p>

                    <!-- <div class="icon-element icon-element-sm shadow-sm cursor-pointer" title="Add to Wishlist"><i class="la la-heart-o"></i></div> -->

                </div>
                <router-link class="font-weight-bold btn btn-block text-theme text-center course-list-btn rounded" :to="'/course/'+seoTitle+'/'+coursedetail.id">View The Program <i class="la la-arrow-right pl-3"></i></router-link>
                
            </div><!-- end card-body -->
        </div><!-- end card -->
    </div><!-- end col-lg-4 -->
</template>
<script>
export default {
    props:["courseInfo"],
    data(){
        return {
            coursedetail:this.courseInfo,
            catInfo:{},
            seoTitle:this.courseInfo.courseName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
        }
    },
     created(){
        axios.get("/front-fetch-single-category/"+this.courseInfo.courseCategory)
            .then((response) => this.catInfo = response.data)
            .catch((error) => console.log(error));
            
    }
    
}
</script>
<style scoped>
.card-title {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: inherit;
    height: 60px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
    color: #222222;
    padding: 2px 1px;
}
.card-item
{
    height:430px;
}
.title-devider{
    margin: 0px 15px;
    border-top: 0.5px solid #dfe1e6;
}
.course-list-btn
{
    border: 1px solid #d5d5d5;
    padding: 10px;
    width: 100%;
}
.feature-text {
    color:#6b6b6b
}
</style>