<template>
    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                
                
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Are you sure to delete this category? </h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    
                    <button class="btn btn-danger" @click="deleteCatnow(catid)" type="button" data-dismiss="modal">Yes Delete</button>
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["catid"],
    methods:{
        deleteCatnow(id){
            axios.get("delete-category/"+id)
                .then((data) => this.$emit("catAdded",data))
                .catch((error) => console.log(error));
        }
    }
    
}
</script>