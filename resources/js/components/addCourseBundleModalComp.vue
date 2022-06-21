<template>
    <div class="modal" id="addbundleModal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Add Course Bundle Form</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <!-- {{courseList}} -->
                <form class="needs-validation add-product-form" novalidate="" @submit.prevent="addnewBundle">
                     <div class="form-group">
                         <!-- Error msg -->
                            <div v-if="error">
                                <ul>
                                    <li v-for="err of error.courseBundleName" :key="err" class="text-danger" >
                                        {{err}}
                                    </li>
                                </ul>
                            </div>
                            <!-- Error msg -->
                        <label class="">Bundle Name</label>
                        <input type="text" class="form-control " v-model="bundlename" placeholder="Enter Bundle Name">
                        
                    </div>
                    <div class="form-group">
                         <!-- Error msg -->
                            <div v-if="error">
                                <ul>
                                    <li v-for="err of error.courseArr" :key="err" class="text-danger">
                                        {{err}}
                                    </li>
                                </ul>
                            </div>
                            <!-- Error msg -->
                        <label class="">Select Courses</label>
                        <multiselect 
                        class="form-control"
                        v-model="tagvalues"
                        tag-placeholder="Add this as new tag" 
                        placeholder="Search or add a tag" 
                        label="courseName" 
                        track-by="id" 
                        :options="courseList" 
                        :close-on-select="false" 
                        :clear-on-select="false" 
                        :multiple="true" 
                        :taggable="true" 
                        @select="getTagsValues" 
                        @remove="removeTagsValues"
                        >
                        </multiselect>
                        
                    </div>
                    <button class="btn btn-success" type="submit">+Add Bundle</button>
                    <h4 :class="msgcolor">{{successmsg}}</h4>

                </form>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>

            </div>
        </div>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
    components: { Multiselect },
    data() {
        return {
            courseList:[],
            courses:[],
            tagvalues:'',
            msgcolor:"",
            successmsg:"",
            bundlename:"",
            error:[],

        }
    },
    created(){
        axios.get("/course-dashboard/only-course-list")
            .then((response) => this.courseList = response.data)
            .catch((error) => console.log(error));
        
    },
    methods: {
        addnewBundle(){
                // alert(this.courses.length)
                if (this.courses.length > 1) {
                     this.msgcolor="text-success";
                     this.successmsg = "Please Wait..";
                    const formdata = new FormData();

                    formdata.append("courseBundleName",this.bundlename);
                    formdata.append("courseArr",this.courses);
                    axios.post("/course-dashboard/add-new-bundle-data",formdata)
                    .then((data) =>{
                        this.successmsg = "Bundle Added successfully!";
                        console.log(data.data);
                    })
                    .catch((error)=>{
                        this.msgcolor = "text-danger";
                        this.successmsg = "Please Fix error";
                        this.error = error.response.data.errors;
                        console.log(error)
                    })   
                }
                else{
                     this.msgcolor="text-danger";
                     this.successmsg = "Please select at least 2 courses for bundle.";
                }
                

        },
        getTagsValues(e){
            this.courses.push(e.id);
        },
        removeTagsValues(e)
            {
                var index = this.courses.indexOf(e.id);
                    if (index !== -1) {
                        this.courses.splice(index, 1);
                    }
            }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>