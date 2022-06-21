<template>
<div>
    <br><br>
    <!-- Delete modal -->
    <deletetxcl-modal @taxclasslist="refreshTaxClassList" v-bind:taxclid="txClid"></deletetxcl-modal>
    <!-- delete Modal -->
    <!-- Edit Modal -->
    <edittxcl-modal @taxclasslist="refreshTaxClassList" v-bind:sTxCldata="singleTaxclassDetail"></edittxcl-modal>
    <!-- Edit Modal -->
    <p class="text-success">{{successmsg}}</p>
     <form class="form-inline" @submit.prevent>

        <label for="tname" class="mr-sm-2">Tax Class Name:</label>
        <input type="text" v-model="taxClName" class="form-control mb-2 mr-sm-2" placeholder="Enter email" id="tname">
        
        <button @click="addTaxClass" type="submit" class="btn btn-primary mb-2">Add</button>
        </form>
         <!-- Error msg -->
            <div v-if="error">
                <ul>
                    <li v-for="err of error.txClsName" :key="err" class="text-danger" >
                            {{err}}
                    </li>
                </ul>
            </div>
            
            <!-- Error msg -->
        <hr>
        
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th>Class name</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="txclList in txClassList" :key="txclList.id">
                    <td>{{txclList.name}}</td>
                    <td>
                        <span v-if="txclList.status == 1" class="badge badge-success">Active</span>
                        <span v-else class="badge badge-danger">De-Actived</span>
                        <button type="button" @click="changeTaxClassState(txclList.id)" class="btn btn-link ">Change Status</button>
                    </td>
                    <td>
                        <div class="btn-group">
                            <button @click="editTxCl(txclList.id)" data-toggle="modal" data-original-title="test" data-target="#edittxclModal" class="btn btn-success btn-xs">Edit</button>
                            <button @click="deleteTxCl(txclList.id)" data-toggle="modal" data-original-title="test" data-target="#deletetxclModal" class="btn btn-danger btn-xs">Delete</button>
                        </div>
                    </td>
                </tr>
                
                </tbody>
            </table>
        </div>    
</div>
    
</template>
<script>
Vue.component('deletetxcl-modal', require('./deleteTaxClassComp.vue').default);
Vue.component('edittxcl-modal', require('./editTaxClassComp.vue').default);
export default {
    
    data(){
        return{
            taxClName:"",
            txClassList:{},
            successmsg:"",
            error : "",
            txClid:"",
            singleTaxclassDetail:{}
        }
    },
    created(){
                axios.get("tax-class-list")
                .then((response) =>{
                    this.txClassList = response.data;

                 this.successmsg = "";
                })
                .catch(error => {
                    this.error = error.response.data.errors;
                    this.successmsg=this.error;
                    
                })
    },
    methods:{
        addTaxClass(){
             const formdata = new FormData();
                formdata.append("txClsName",this.taxClName);
            axios.post("add-tax-class",formdata)
                .then((response) =>{
                    this.txClassList = response.data;

                 this.successmsg = "Tax Class added successfully";
                 this.error= "";
                })
                .catch(error => {
                    this.error = error.response.data.errors;
                    this.successmsg="";
                    
                })
        },
        deleteTxCl(id){
                this.txClid = id;
        },

        refreshTaxClassList(list){
             this.txClassList = list.data;
        },

        editTxCl(id){
           axios.get("fetch-single-tax-class/"+ id)
            .then((response) => this.singleTaxclassDetail=response.data)
            .catch((error) => console.log(error));
        },
        changeTaxClassState(id){
            axios.get("change-tax-class-state/"+ id)
            .then((response) => this.txClassList = response.data)
            .catch((error) => console.log(error));
        }

    }
}
</script>
<style scoped>

</style>