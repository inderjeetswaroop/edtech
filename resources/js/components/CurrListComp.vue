<template>
    <div>
         <!-- Add curr Modal -->
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-original-title="test" data-target="#curradModal">Add Currency</button>
                    <curradd-modal @currAdded="refreshcurrlist"></curradd-modal>
                <!-- Add curr Modal -->
                
                <!-- Curr delete -->
                <currdel-modal @currAdded="refreshcurrlist" v-bind:currid="currId"></currdel-modal>
                <!-- Curr delete -->
                <!-- curr edit -->
                <curredit-modal @currAdded="refreshcurrlist" v-bind:scurrdata="singleCurrdata"></curredit-modal>
                <!-- Curr Edit -->
                <br><br>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th>S.N.</th>
                    <th>Currency Name</th>
                    <th>Currency Code</th>
                    <th>Symbol</th>
                    <th>Acton</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="cList in currList" :key="cList.id">
                    <td>{{cList.id}}</td>
                    <td>
                       {{cList.curr_name}}
                         <span v-if="cList.used == 1" class="badge badge-pill badge-success">Selected</span>
                    </td>
                    <td>{{cList.code}}</td>
                    <td>{{cList.symbol}}</td>
                   <td>
                        <div class="btn-group">
                            <button @click="currToedit(cList.id)" class="btn btn-primary btn-xs" data-toggle="modal" data-original-title="test" data-target="#curreditModal">Edit</button>
                            <button @click="currToDel(cList.id)" class="btn btn-danger btn-xs" data-toggle="modal" data-original-title="test" data-target="#currdelModal">Delete</button>
                            <button @click="makedefault(cList.id)" class="btn btn-success btn-xs" >Make default </button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
Vue.component('curradd-modal', require('./addCurrmodalComp.vue').default);
Vue.component('currdel-modal', require('./deleteCurrmodalComp.vue').default);
Vue.component('curredit-modal', require('./editCurrmodalComp.vue').default);
export default {
    data(){
        return{
            i:1,
            currList:"",
            currId:"",
            singleCurrdata:"",
        }
    },
    created() {
             axios.get("currency-list")
            .then((response) => this.currList = response.data)
            .catch((error) => console.log(error));
    },
    methods:{
        refreshcurrlist(list){
             this.currList = list.data;   
        },
        currToDel(curid){
            this.currId = curid;
        },
        currToedit(curid){
            axios.get("single-currency-detail/"+ curid)
            .then((response) => this.singleCurrdata = response.data)
            .catch((error) => console.log(error));
        },
        makedefault(curid){
             axios.get("use-currency/"+ curid)
            .then((response) => this.currList = response.data)
            .catch((error) => console.log(error));
        }
    }
}
</script>