<template>
    <div>
        <div class="btn-popup pull-right">
            <!-- Add tax Modal -->
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-original-title="test" data-target="#taxaddModal">Add Tax</button>
                    <taxadd-modal @taxAdded="refreshtaxlist"></taxadd-modal>
                <!-- Add tax Modal -->
                <!-- Delete tax modal -->
                <taxdelete-modal @taxAdded="refreshtaxlist" v-bind:taxid="taxId"></taxdelete-modal>
                <!-- Dlete tax modal -->
                
                <!-- edit tax modal -->
                    <taxedit-modal @taxAdded="refreshtaxlist" v-bind:sTaxdetail="singleTaxInfo"></taxedit-modal>
                <!-- edit tax modal -->
        </div>
        
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Tax Name</th>
                        <th>Tax %</th>
                        <th>Tax Class</th>
                        <th>Active Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="taxes in taxList" :key="taxes.id">
                        <td>{{taxes.taxName}}</td>
                        <td>{{taxes.tax}}</td>
                        <td>
                            <singletaxclass :taxclasId="taxes.taxClass"></singletaxclass>
                        </td>
                        <td>
                            <span v-if="taxes.status == 1" class="badge badge-pill badge-success">Activated</span>
                            <span v-else class="badge badge-pill badge-danger">De-Activated</span>
                            
                            
                        </td>
                        <td>
                            <div class="btn-group">
                                <button @click="editTaxId(taxes.id)" class="btn btn-primary btn-xs" data-toggle="modal" data-original-title="test" data-target="#taxeditModal">Edit</button>
                                <button @click="deleteTaxId(taxes.id)" class="btn btn-danger btn-xs" data-toggle="modal" data-original-title="test" data-target="#taxdeleteModal">Delete</button>
                            </div>
                        </td>
                    </tr>
                
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
Vue.component('taxadd-modal', require('./addTaxmodalComp.vue').default);
Vue.component('taxdelete-modal', require('./taxdeletemodalComp.vue').default);
Vue.component('taxedit-modal', require('./editTaxmodalComp.vue').default);
Vue.component('singletaxclass', require('./singleTaxclsinfoComp.vue').default);
export default {
    data(){
        return{
            taxList:{},
            taxId:"",
            singleTaxInfo:""
        }
    },
    created(){

            axios.get("tax-list")
            .then((response) => {
                this.taxList = response.data;
                })
            .catch((error) => console.log(error));
    },
    methods:{
        refreshtaxlist(){
            axios.get("tax-list")
            .then((response) => {
                this.taxList = response.data;
                })
            .catch((error) => console.log(error));
        },
        deleteTaxId(id){
            this.taxId = id;
        },

        editTaxId(id){
            axios.get("single-tax-detail/"+id)
            .then((response) => {
                this.singleTaxInfo = response.data;
                })
            .catch((error) => console.log(error));   
        }

    }

    
}
</script>
<style scoped>

</style>