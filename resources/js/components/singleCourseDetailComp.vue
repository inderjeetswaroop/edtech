<template>
    <div>
         <span v-if="courseInfo.courseName">{{courseInfo.courseName}}</span>
         <span v-else class="text-danger"> Course Name Is not available</span>
       
        
    </div>
</template>
<script>
export default {
    props:["cid"],
    data() {
        return{
            courseInfo:"",
            courseId:"",
                       
        }
    },
    created(){
        this.courseId = this.cid;
        if (this.courseId != 0) {
            axios.get("/course-dashboard/single-course-detail/"+this.courseId)
            .then((response) => this.courseInfo = response.data)
            .catch((error) => console.log(error));    
        }
        

    }
    
}
</script>