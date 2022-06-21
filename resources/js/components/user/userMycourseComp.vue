<template>

     <div  class="col-lg-4 responsive-column-half">
        <div class="card card-item card-preview" data-tooltip-content="#tooltip_content_1">
            <div class="card-image">
                <img class="card-img-top lazy" :src="coursedetail.featureImg"  alt="Card image cap">
            </div><!-- end card-image -->
            <div class="card-body">
                <h6 class="ribbon ribbon-blue-bg fs-14 mb-3">{{catInfo.catname}}</h6>
                <h5  class="card-title">{{coursedetail.courseName}}</h5>
                <p v-if="coursedetail.languages" class="card-text"><a href="javascript:void()">{{coursedetail.languages}}</a></p>
                
                <div class="d-flex justify-content-between align-items-center">
                    <router-link v-if="firstClassInfo.id != null && courseInfo.courseType == 1" :to="'/course/'+seoTitle+'/'+myClassName+'/'+coursedetail.id+'/'+firstClassInfo.id" class="btn btn-primary btn-xs">Start Learning</router-link>
                    <router-link v-else-if="firstTestInfo.id != null && courseInfo.courseType == 0" :to="'/course/'+seoTitle+'/'+myClassName+'/'+coursedetail.id+'/'+firstTestInfo.id" class="btn btn-primary btn-xs">Attempt Tests</router-link>
                    <h5 v-else class="text-secondary"><br>Starting on {{coursedetail.courseStartDate}}</h5>
                </div>
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
            firstClassInfo:{},
            firstTestInfo:{},
            myClassName:"",
        }
    },
     created(){
        //  
         this.$Progress.finish();
        //  
        axios.get("/front-fetch-single-category/"+this.courseInfo.courseCategory)
            .then((response) => this.catInfo = response.data)
            .catch((error) => console.log(error));
        
        
            axios.get("/course-first-class-info/"+this.courseInfo.id)
            .then((res) => {
                this.firstClassInfo = res.data;
                this.myClassName = this.firstClassInfo.topicName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            })
            .catch((error) => console.log(error));    
        
            axios.get("/course-first-test-info/"+this.courseInfo.id)
            .then((res) => {
                this.firstTestInfo = res.data;
                this.myClassName = this.firstTestInfo.chaptername.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            })
            .catch((error) => console.log(error)); 
          
            
    },
     beforeCreate(){
        this.$Progress.start();
     }
    
}
</script>