<template>
        <div>
            <!-- Delete modal -->
                <delete-flatship :flshipId="flShiId" :type="shiptype" @refreshFlatShipList="refreshList"></delete-flatship>
            <!-- Delete modal -->
            <br><br>
            <p class="text-danger">{{ruleerror}}</p>
            <p class="text-success">{{successmsg}}</p>
            <p v-if="rulevalInput=='text' && rulename=='all' " class="text-success">"All" option shipping charge applied on all products</p>
            <form @submit.prevent="addflatship" class="form-inline">
                <label for="tname">Rule for: <p class="text-danger"></p> </label>
                <select class="form-control" v-model="rulename" id="tname" v-on:change="valueoption">
                    <option value="0">Select Option</option>
                    <option value="all">All</option>
                    <option value="product">Product</option>
                    <option value="category">Product Category</option>
                    <option value="city">City</option>
                    <option value="state">State</option>
                </select>
                 <!-- Error msg -->
                    <div v-if="error">
                        <ul>
                            <li v-for="err of error.ruleName" :key="err" class="text-danger" >
                                    {{err}}
                            </li>
                        </ul>
                    </div>
                    
                    <!-- Error msg -->

                <!-- City -->
                <select v-if="rulevalInput=='dropdown' && rulename=='city' " class="form-control ml-3" v-model="rulevalue" id="tname" >
                    <option value="0">Select city</option>
                    <option v-for="cityList in stateList" :key="cityList.id" :value="cityList.id">{{cityList.cityname}}</option>
                    
                </select>
                <!-- //City -->
                <!-- State -->
                <select v-if="rulevalInput=='dropdown' && rulename=='state' " class="form-control ml-3" v-model="rulevalue" id="tname" >
                    <option value="0">Select state</option>
                    <option v-for="stateList in stateList" :key="stateList.id" :value="stateList.id">{{stateList.sname}}</option>
                </select>
                <!-- //State -->
                <select v-if="rulevalInput=='dropdown' && rulename=='category' " class="form-control ml-3" v-model="rulevalue" id="tname" >
                    <option value="0">Select Product Category</option>
                    <option v-for="catList in stateList" :key="catList.id" :value="catList.id">{{catList.catname}}</option>
                </select>
                <!-- //State -->
                 <!-- Error msg -->
                    <div v-if="error">
                        <ul>
                            <li v-for="err of error.rulevalue" :key="err" class="text-danger" >
                                    {{err}}
                            </li>
                        </ul>
                    </div>
                    
                    <!-- Error msg -->
                <input type="text" v-model="price" placeholder="Enter shipping charge" class="form-control ml-3">
                 <!-- Error msg -->
                    <div v-if="error">
                        <ul>
                            <li v-for="err of error.charge" :key="err" class="text-danger" >
                                    {{err}}
                            </li>
                        </ul>
                    </div>
                    
                    <!-- Error msg -->
                <button class="btn btn-primary ml-3" type="submit">Submit</button>
                
            </form>
            <br/>
            <div class="table-responsive">
                <table class="table table-hovered">
                    <thead>
                        <th>Rule For</th>
                        <th>Rule Value</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <tr v-for="shipList in flatshippList" :key="shipList.id">
                            <td>{{shipList.rulename}}</td>
                            <td>
                                <single-category v-if="shipList.rulename == 'category'" :cid="shipList.value"></single-category>
                                
                            </td>
                            <td>{{shipList.price}}</td>
                            <td>{{shipList.status}}</td>
                            <td>
                                <div class="btn-group">
                                    <button class="btn btn-info btn-xs">Edit</button>
                                    <button @click="deleteflatshipPrice(shipList.id)" class="btn btn-danger btn-xs" data-toggle="modal" data-original-title="test" data-target="#shipdelModal" >Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
</template>
<script>
Vue.component('single-category', require('./singleCategoryComp.vue').default);
Vue.component('delete-flatship', require('./deleteshipping.vue').default);
export default {
    data(){
        return{
            rulename:"all",
            ruleerror:"",
            error:"",
            rulevalInput:"text",
            stateList:{},
            flatshippList:{},
            rulevalue:"0",
            price:"0",
            shiptype:"1",
            successmsg:"",
            flShiId:"",
        }
    },
    created(){
         axios.get("shipping-list/1")
                .then((response) => {
                    this.flatshippList = response.data;
                    })
                .catch((error) => console.log(error));
    },

    methods:{
        refreshList(response){
             this.flatshippList = response.data;
        },
        valueoption(){
            
            if (this.rulename == '0') {
                this.ruleerror = 'Please choose rule';
            }
            else {
                if (this.rulename == 'city' || this.rulename == 'state' || this.rulename == 'product' || this.rulename == 'category')
                {
                    // alert(this.rulename);
                    this.rulevalInput = "dropdown";
                    if (this.rulename == 'city') {
                             axios.get("../location/default-country-city-list")
                            .then((response) => this.stateList = response.data)
                            .catch((error) => console.log(error));
                    }
                    else if (this.rulename == 'state'){
                         axios.get("../location/default-country-state-list")
                        .then((response) => this.stateList = response.data)
                        .catch((error) => console.log(error));
                    }
                     else if (this.rulename == 'category'){
                         axios.get("../seller-category-setting/category-raw-list")
                        .then((response) => this.stateList = response.data)
                        .catch((error) => console.log(error));
                    }
                    
                }
                else {
                    this.rulevalInput = "text";
                }
                
            }
        },
        addflatship() {
                     this.ruleerror="";
                    this.successmsg = "Please Wait...";
                    const formdatastate = new FormData();
                    formdatastate.append("ruleName",this.rulename);
                    formdatastate.append("rcondition",null);
                    formdatastate.append("shiptype",this.shiptype);
                    formdatastate.append("rulevalue",this.rulevalue);
                    formdatastate.append("charge",this.price);
                   
                   axios.post("flat-shipping-setting-data",formdatastate)
                    .then((data) =>{
                        // console.log(data.data);
                    // this.countCode="";
                    // this.CountName="";
                    this.flatshippList = data.data;
                    this.error="";
                    this.successmsg = "Flat Shipping rule added successfully";
                    })
                    .catch(error => {
                        this.error = error.response.data.errors;
                        this.successmsg = "";
                        
                    })
                    
        },
        deleteflatshipPrice(id) {
            this.flShiId = id;
        }
    }
    
}
</script>
