<template>
    <div class="modal fade" id="prodelModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                
                
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Are you sure to delete this Currency? </h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <button class="btn btn-warning" @click="deletepronow(proid,'temp')" type="button" data-dismiss="modal">Temporary Delete</button>
                    <button class="btn btn-danger" @click="deletepronow(proid,'perma')" type="button" data-dismiss="modal">Permanent Delete</button>
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["proid"],
    methods:{
        deletepronow(id,deltype){
            axios.get("delete-product/"+id+"/"+deltype)
                .then((data) => this.$emit("updateprolist",data))
                .catch((error) => console.log(error));
        }
    }
    
}
</script>