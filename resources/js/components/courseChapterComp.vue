<template>
    <div>
        
        <div class="text-right">
            <router-link :to="{name:'addcouseChap',params: {courseId: cid }}" class="btn btn-primary ">+ Add New Chapter/Test Module</router-link>
        </div>
        
        <hr>
        
        <table class="table table-bordered table-hovered">
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Chapter / Module Name / Test Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(chapters, index) in chapterlist" :key="index">
                    <td>{{++index}}</td>
                    <td>
                        <h4>{{ chapters.chaptername }}</h4>
                    </td>
                    <td>
                        <div class="btn-group">
                                <i title="Delete Chapter" class="fa fa-trash btn btn-danger  btn-xs" data-toggle="modal" data-target="#coursedelModal" @click="deleteChap(chapters.id)"></i> 
                                   <router-link :to="{name:'editcouseChap',params: {chapterId: chapters.id }}" class="btn-warning btn-xs"><i title="Edit Chapter" class="fa fa-pencil mr-2" ></i>Edit</router-link>
                                <!-- <button class="btn btn-warning  btn-xs" data-toggle="modal" data-target="#courseEditModal" @click="sinlgleChapInfo(chapters.id)"><i title="Edit Chapter" class="fa fa-pencil mr-2" ></i>Edit</button>     -->
                                
                                <!-- class and Test module  -->
                                <router-link :to="{name:'courseChapClassSetting',params: { chapId: chapters.id,courseId: chapters.courseId }}" class="btn btn-info btn-xs">Add Class/Lecture / Test </router-link>
                                <!-- //class and Test module  -->
                             

                            </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <hr>

        
        <!-- Components -->
        
        <delete-chapter :chapterid="chaptId" @updatecourselist="updatecList"></delete-chapter>
        
        
        <!-- Components -->
            
            
       
    </div>
    
</template>
<script>
Vue.component('delete-chapter', require('./deleteCourseChapter.vue').default);

export default {
    // props:["courseid"],
    data(){
        return {
            chapterlist:{},
            cid : "",
            chaptId: "",
            courseInfo: "",  
            successmsg:"",
            chapInfo:"",
            chapterid:"",
        }
    },
    created(){
            this.cid=this.$route.params.courseId;
            
            axios.get("/course-dashboard/course-chapter/single-course-all-chapter-list/"+this.cid)
            .then((response) => this.chapterlist = response.data)
            .catch((error) => console.log(error));

            // Single course info
            
            axios.get("/course-dashboard/single-course-detail/"+this.cid)
            .then((response) => this.courseInfo = response.data)
            .catch((error) => console.log(error));
            
            // Single course info

        },
     methods:{
         sinlgleChapInfo(chapid){
             axios.get("/course-dashboard/course-chapter/single-chapter-info/"+chapid)
            .then((response) => {
                this.chapInfo = response.data
                
                })
            .catch((error) => console.log(error));
        },
         updatecList(response) {
                this.chapterlist = response.data;
        },
        deleteChap(str)
        {
            this.chaptId = str;
        },
        
            
     },
     
}
</script>
<style scoped>
    .card-link
    {
        color: #000000;
    }
</style>