<template>
         <div>
             <h3>{{loadmsg}}</h3>
            <div v-for="(chapList,index) in chapterlist" :key="index" class="card">
                <div class="card-header" id="headingOne">
                    
                    <button v-if="cType == 1" class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#'+keyId+'collapse'+index" :aria-expanded="index == '0' ? true : false " aria-controls="collapseOne">
                        <i class="la la-angle-down"></i>
                        <i class="la la-angle-up"></i>
                        <span class="fs-15 py-2 px-3">
                            <a href="#" class="fs-18 text-black">
                                {{chapList.chaptername }} <br> 
                            </a>
                        </span>
                        <!-- <span class="course-duration">
                            <span>1/5</span>
                            <span>21min</span>
                        </span> -->
                    </button>
                    <router-link v-else :to="'/course/'+corsname+'/'+chapList.chaptername.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')+'/'+uCourseId+'/'+chapList.id" >
                        <span  class="fs-15 p-4 text-secondary">{{chapList.chaptername }} <br></span>
                    </router-link>
                    
                </div><!-- end card-header -->
                
                <div v-if="cType == 1" :id="keyId+'collapse'+index" class="collapse" :class=" index == '0' ? 'show':'' " aria-labelledby="headingOne" data-parent="#accordionCourseExample" :for="index++">
                    
                        <chap-class-list :courseId="chapList.courseId" :chapterId="chapList.id" :courseName="corsname"></chap-class-list>
                    
                </div><!-- end collapse -->
                
            </div><!-- end card -->
        </div>
</template>
<script>
Vue.component('chapClassList', require('./userchapterClassListComp.vue').default);

export default {
    props:["uCourseId","keyId","corsname","cType"], //keyId is for accordian id for desktop and mobile 
    data() {
        return {
              chapterlist:{},
              loadmsg:"",
        }
    },
    created(){
            this.loadmsg = "Please wait....";
            
            axios.get("/course-dashboard/course-chapter/single-course-all-chapter-list/"+this.uCourseId)
            .then((response) => this.chapterlist = response.data)
            .catch((error) => console.log(error));
            

            this.loadmsg = "";
    }
}
</script>