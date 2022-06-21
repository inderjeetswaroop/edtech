<template>
    <div class="modal fade" id="deletetxclModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                
                
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Are you sure to delete this Tax Class? </h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    
                    <button class="btn btn-danger" @click="deletetxclnow(taxclid)" type="button" data-dismiss="modal">Yes Delete</button>
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["taxclid"],
    methods:{
        deletetxclnow(id){
            axios.get("delete-tax-class/"+id)
                .then((data) => this.$emit("taxclasslist",data))
                .catch((error) => console.log(error));
        }
    }
    
}
</script>