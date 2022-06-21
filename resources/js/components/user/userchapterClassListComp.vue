<template>
<div class="card-body p-0">
    <ul class="curriculum-sidebar-list">
        <li v-for="(cList,index) in classList" :key="index" class="course-item-link" :class="{ 'active': index == '0' }">
            <router-link :to="'/course/'+courseName+'/'+cList.topicName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')+'/'+cList.courseId+'/'+cList.id" >
                <div class="course-item-content-wrap">
                    <div class="course-item-content">
                        <h4 class="fs-15">{{cList.topicName}}</h4>
                        <div class="courser-item-meta-wrap">
                            <p v-if="cList.classType == 1" class="course-item-meta"><i class="la la-play-circle"></i>Video Class</p>
                            <p v-else-if="cList.classType == 2" class="course-item-meta"><i class="la la-file"></i>Notes Class</p>
                            <p v-if="cList.classdate !=''" class="course-item-meta"><i class="la la-stopwatch"></i>{{cList.classdate}}</p>
                        </div>
                    </div><!-- end course-item-content -->
                </div><!-- end course-item-content-wrap -->
            </router-link>
        </li>   
    </ul>
</div>
</template>
<script>
export default {
    props:["chapterId","courseName","courseId"],
    data() {
        return {
            classList: {},
            
        }
    },
    created() {
               

            axios.get("/user-courseclass-list/"+this.chapterId+"/"+this.courseId)
                    .then((response) => {
                        this.classList = response.data
                        })
                    .catch((error) => console.log(error));

               
    }
}
</script>
<style scoped>
 .courser-item-meta-wrap{
     color:red;
}
</style>