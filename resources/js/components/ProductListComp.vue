<template>
    <div>
      <productstate-change :proid="productid" @updateprolist="updatepList"></productstate-change>
        <delete-product :proid="productid" @updateprolist="updatepList"></delete-product>
     <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>Sr. No</th>
                    <th>Main Image </th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Product Category</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pList,index) in prolist" :key="index">
                <td>{{index+1}}</td>
                <td><img :src="pList.mainimage" alt="" class="img-response" height="70" ></td>
                <td>{{ pList.title}}</td>
                <td>
                      <h6 class="d-flex flex-row">
                         <b>Reg. Price:</b> <currency-symbol></currency-symbol>{{pList.price}}
                     </h6>
                        <br>
                      <h6 v-if="pList.salePrice" class="text-success d-flex flex-row">
                        <b> Sale Price:</b> <currency-symbol></currency-symbol>{{ pList.salePrice}} 
                      </h6>
                </td>
                <td>
                    <!-- {{pList.category}} -->
                    
                    <singcatdetail v-bind:cid="pList.category"></singcatdetail>
                   
                </td>
                <td>
                    
                    <span v-if="pList.productStatus == 1" class="badge badge-success">Active</span>
                    <span v-else-if="pList.productStatus == 2" class="badge badge-info">Pending</span>
                    <span v-else-if="pList.productStatus == 3" class="badge badge-danger">Rejected</span>
                    <span v-else-if="pList.productStatus == 4" class="badge badge-warning">Need Optimization</span>
                    <span v-else-if="pList.productStatus == 5" class="badge badge-danger">De-Activated</span>
                    <span v-else class="badge badge-info">Pending</span>
                    <br><br>
                    <button @click="changeProState(pList.id)" class="btn btn-default btn-xs" data-target="#changeprostatemodal" data-toggle="modal">Change Status</button>
                    <br>
                    <br>
                    <div v-if="pList.deleted == 1">
                        <span  class="badge badge-danger badge-xs">Temporary Deleted</span>
                        <button @click="restorePro(pList.id)" class="btn btn-primary btn-xs" >Restore</button>    
                    </div>
                      
                    
                </td>
                <td>
                    <div class="btn-group">
                        <a :href="'edit-product/'+pList.id" class="btn btn-info btn-xs">Edit</a>
                        <button type="button" @click="deleteProduct(pList.id)" data-target="#prodelModal" data-toggle="modal" class="btn btn-danger btn-xs">Delete</button>
                    </div>
                </td>
                </tr>      
                
                
            </tbody>
            </table>
        </div>
    </div>
</template>
<script>
Vue.component('singcatdetail', require('./singleCategoryComp.vue').default);
Vue.component('productstate-change', require('./ChangeProStatusComp.vue').default);
Vue.component('delete-product', require('./deleteProductComp.vue').default);
export default {
    props:["cat"],
    data(){
        return {
            prolist:"Please wait..",
            catlist:[],
            statevalue:"",
            productid:"",
        }
    },
    created() {
        axios.get("product-list")
            .then((response) => this.prolist = response.data)
            .catch((error) => console.log(error));
    },
    methods:{
        deleteProduct(pid) {
             this.productid = pid;
        },
        changeProState(pid){
            
            this.productid = pid;
        },
        updatepList(response) {
                this.prolist = response.data;
        },
        restorePro(pid) {
                axios.get("restore-product/"+pid)
            .then((response) => this.prolist = response.data)
            .catch((error) => console.log(error));
        }
    }
}
</script>