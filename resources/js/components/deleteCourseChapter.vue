<template>
    <div class="modal fade" id="coursedelModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                
                
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Are you sure to delete this Chapter? </h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <button class="btn btn-danger" @click="deletepronow(chapterid)" type="button" data-dismiss="modal">Permanent Delete</button>
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["chapterid"],
    methods:{
        deletepronow(id){

                const formdata = new FormData();
                formdata.append("chapId",id);
                

            axios.post("/course-dashboard/delete-chapter",formdata)
                .then((data) =>{
                    this.$emit("updatecourselist",data)
                    this.successmsg = "Course Chapter deleted successfully";
                })
                .catch(error => {
                    this.error = error.response.data.errors;
                    console.log(this.error);
                })
            // 
            
        }
    }
    
}
</script>