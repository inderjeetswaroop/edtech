<template>
    <div>
        <!-- Edit modal -->
            <editcountry :countrydata="contdetail" @countupdated="updateList"></editcountry>
        <!-- Edit modal -->
        <!-- delete -->
            <deletecountry :countId="countryId" @countupdated="updateList"></deletecountry>
        <!-- delete -->
        <!-- Edit state -->
            <editstate :statedata="stateDetail" @stateupdated="stateupdate"></editstate>
        <!-- Edit state -->
        
        <!-- delete state -->
        <deletestate :stateid="stateId" @stateupdated="stateupdate"></deletestate>
        <!-- delete state -->
        <p class="text-success">{{successmsg}}</p>
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link " data-toggle="pill" href="#home">Country Setting</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " data-toggle="pill" href="#menu1">Country State sett.</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" data-toggle="pill" href="#menu2">City/Area Sett.</a>
            </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
            <div class="tab-pane container fade" id="home">
               
                <hr>
                <div class="btn-popup pull-right">
                    <button @click="showform" type="button" class="btn btn-primary btn-sm" >Add Country</button>
                    <br>
                </div>

                <!-- Add country form -->
                        <div v-if="show">

                            <p class="text-danger">{{error}}</p>
                             <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.cname" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->
                                <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.ccode" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->
                            <form class="form-inline" @submit.prevent="addcountry">
                                <label for="email" class="mr-sm-2"></label>
                                    <input v-model="CountName" type="text" class="form-control" placeholder="Enter Country Name">
                                    <input v-model="countcode" type="text" class="form-control" placeholder="Enter Country Code">
                                    <button type="submit" class="btn btn-warning">Submit</button>
                            </form>
                        <hr>
                        </div>
                <!-- Add country form  -->


                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>Country Name</th>
                            <th>Country code</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="cList in countryList" :key="cList.id">
                            <td>{{cList.cname}}</td>
                            <td>+{{cList.ccode}}</td>
                            <td>
                                <span v-if="cList.status == 1" class="badge badge-success">Active</span>
                                <span v-else class="badge badge-danger">De-Actived</span>
                            </td>
                            <td>
                                <div class="btn-group">
                                    <button @click="singlecountrydetail(cList.id)" class="btn btn-primary btn-xs" data-toggle="modal" data-original-title="test" data-target="#editModal">Edit</button>
                                    <button @click="deletecountrydetail(cList.id)" class="btn btn-danger btn-xs" data-toggle="modal" data-original-title="test" data-target="#deletecountry">Delete</button>
                                </div>
                            </td>
                        </tr>
                        
                        </tbody>
                    </table>
                </div>


            </div>
            <div class="tab-pane container fade" id="menu1">
                <hr>
                <div class="btn-popup pull-right">
                    <button @click="showform" type="button" class="btn btn-primary btn-sm" >Add state</button>
                    <br>
                </div>

                <!-- Add state form -->
                        <div v-if="show" >  <!--if-show-->
                            <p class="text-success">{{successmsg}}</p>
                            <p class="text-danger">{{error}}</p>
                             <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.stName" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->
                                <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.cid" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->
                            <form  @submit.prevent="addcountState">
                                    <p class="text-danger">{{stateError}}</p>
                                    <input v-model="stateName" type="text" class="form-control" placeholder="Enter State Name">
                                    <br>
                                   
                                    <select v-model="stateCountry" class="form-control" v-on:change="getStateList">
                                        <option value="0">Select Country</option>
                                        <option v-for="country in countryList" :key="country.id" :value="country.id">
                                            {{country.cname}}
                                        </option>
                                    </select>
                                    <br>
                                    <button type="submit" class="btn btn-warning">Submit</button>
                            </form>
                            <hr>
                        </div>
                        
                       <div class="table-responsive">
                           <!-- country -->
                                <select v-model="stateCountry" class="form-control" v-on:change="getStateList">
                                        <option value="0">Select Country</option>
                                        <option v-for="country in countryList" :key="country.id" :value="country.id">
                                            {{country.cname}}
                                        </option>
                                </select>
                           <!-- country -->
                           <table class="table table-hover table-">
                               <thead>
                                   <th>State name</th>
                                   <th>Country Name</th>
                                   <th>Action</th>
                               </thead>
                               <tbody>
                                   <tr v-for="stList in stateList" :key="stList.id" :value="stList.id">
                                       <td>{{stList.sname}}</td>
                                       <td>
                                           <singcountry v-bind:coid="stList.country"></singcountry>
                                        </td>
                                       <td>
                                           <div class="btn-group">
                                               <button @click="singlestatedetail(stList.id)" data-toggle="modal" data-original-title="test" data-target="#editstateModal"  class="btn btn-info btn-xs">Edit</button>
                                               <button @click="deletestatedetail(stList.id)" data-toggle="modal" data-original-title="test" data-target="#statedelModal" class="btn btn-danger btn-xs">Delete</button>
                                           </div>
                                       </td>
                                   </tr>
                               </tbody>
                           </table>
                       </div>
                    
                <!-- //Add state form  -->
            </div>
            <div class="tab-pane container active" id="menu2">
                <hr>
                <div class="btn-popup pull-right">
                    <button @click="showform" type="button" class="btn btn-primary btn-sm" >Add City/Area</button>
                    <br>
                </div>

                <!-- Add area form -->
                        <div v-if="show" >  <!--if-show-->
                            <p class="text-success">{{areasuccessmsg}}</p>
                            <p class="text-danger">{{areaerror}}</p>
                             <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.arName" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->
                                <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.arpin" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- area Error msg -->
                                 <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.stid" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- area Error msg -->
                                 <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.cid" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- area Error msg -->
                            <form class="form-inline" @submit.prevent="addStateArea">
                                    <p class="text-danger">{{stateError}}</p>
                                    <input v-model="areaname" type="text" class="form-control" placeholder="Enter City/area Name">
                                    
                                   <select v-model="stateCountry" class="form-control" v-on:change="getStateList">
                                        <option value="0">Select Country</option>
                                        <option v-for="country in countryList" :key="country.id" :value="country.id">
                                            {{country.cname}}
                                        </option>
                                    </select>
                                    <select v-model="areaState" class="form-control" >
                                        <option value="0">Select Country</option>
                                        <option v-for="st in stateList" :key="st.id" :value="st.id">
                                            {{st.sname}}
                                        </option>
                                    </select>
                                    <input v-model="areapincode" type="text" class="form-control" placeholder="Enter Area pincode(Optional)">
                                    <br>
                                    <button type="submit" class="btn btn-danger">Submit</button>
                            </form>
                            <hr>
                        </div>
                        
                       <div class="table-responsive">
                           <div class="form-inline">
                           <!-- country -->
                                <select v-model="stateCountry" class="form-control" v-on:change="getStateList">
                                        <option value="0">Select Country</option>
                                        <option v-for="country in countryList" :key="country.id" :value="country.id">
                                            {{country.cname}}
                                        </option>
                                </select>
                                <select v-model="areaState" class="form-control" v-on:change="getAreaList">
                                        <option value="0">Select Country</option>
                                        <option v-for="st in stateList" :key="st.id" :value="st.id">
                                            {{st.sname}}
                                        </option>
                                    </select>
                           <!-- country -->
                           </div>
                           <br>
                           <table class="table table-hover table-">
                               <thead>
                                   <th>Area name</th>
                                   <th>State name</th>
                                   <th>Country Name</th>
                                   <th>Action</th>
                               </thead>
                               <tbody>
                                   <tr v-for="arList in areaList" :key="arList.id" :value="arList.id">
                                       <td>{{arList.cityname}}</td>
                                       <td>
                                           <singstate :satateid="arList.statecode"></singstate>
                                       </td>
                                       <td>
                                           <singcountry v-bind:coid="arList.country"></singcountry>
                                        </td>
                                       <td>
                                           <div class="btn-group">
                                               <button class="btn btn-info btn-xs">Edit</button>
                                               <button class="btn btn-danger btn-xs">Delete</button>
                                           </div>
                                       </td>
                                   </tr>
                               </tbody>
                           </table>
                       </div>
                    
                <!-- Add Area form  -->
            </div>
        </div>
        
    </div>
</template>
<script>
Vue.component('editcountry', require('./editCountryComp.vue').default);
Vue.component('deletecountry', require('./deleteCountryComp.vue').default);
Vue.component('editstate', require('./editStateComp.vue').default);
Vue.component('singcountry', require('./singleCountrydetail.vue').default);
Vue.component('singstate', require('./singlestatedetail.vue').default);
Vue.component('deletestate', require('./deleteStateComp.vue').default);
export default {
    
    data(){
        return {
            show:false,
            successmsg:"",
            areasuccessmsg:"",
            CountName:"",
            countcode:"",
            countryList:{},
            error:"",
            areaerror:"",
            contdetail:"",
            countryId:"",
            stateName:"",
            stateCountry:"0",
            stateError:"",
            stateList:{},
            stateDetail:"",
            stateId:"",
            areaname:"",
            areaState:"0",
            areapincode:"",
            areaList:{},
        }
    },
    created() {
            axios.get("country-list")
            .then((response) => this.countryList = response.data)
            .catch((error) => console.log(error));
    },
    methods: {
        showform(){
            this.show=!this.show;
        },
        addcountry()
        {
            this.successmsg = "Please Wait...";
                 const formdata = new FormData();
                formdata.append("cname",this.CountName);
                formdata.append("ccode",this.countcode);
                
                
                axios.post("add-country-data",formdata)
                .then((data) =>{
                    // console.log(data.data);
                   this.countCode="";
                   this.CountName="";
                   this.countryList = data.data;
                 this.successmsg = "Country added successfully";
                })
                .catch(error => {
                    this.error = error.response.data.errors;
                    this.successmsg = "";
                    
                })
        },
        singlecountrydetail(id){
            axios.get("single-country-detail/"+ id)
            .then((response) => this.contdetail = response.data)
            .catch((error) => console.log(error));
            
        },
        deletecountrydetail(id){
            this.countryId = id;
        },
        updateList(data) {
            this.countryList=data.data;
        },
        stateupdate(data) {
            this.stateList = data.data;
        },
        addcountState() {
            if (this.stateCountry == 0) {
                this.stateError = "Please select a country";
            }
            else {
                    // 
                    this.stateError="";
                    this.successmsg = "Please Wait...";
                    const formdatastate = new FormData();
                    formdatastate.append("stName",this.stateName);
                    formdatastate.append("cid",this.stateCountry);
                    
                    
                    axios.post("add-state-data",formdatastate)
                    .then((data) =>{
                        // console.log(data.data);
                    // this.countCode="";
                    // this.CountName="";
                    this.stateList = data.data;
                    
                    this.stateName="";
                    this.stateCountry="0";
                    this.successmsg = "state added successfully";
                    })
                    .catch(error => {
                        this.error = error.response.data.errors;
                        this.successmsg = "";
                        
                    })
                    // 
            }
        },
        getStateList(){
            if (this.stateCountry == 0) {
                this.stateError="Please select a valid country";
            }
            else {
                this.stateError="";
                axios.get("state-list/"+this.stateCountry)
                .then((response) => this.stateList = response.data)
                .catch((error) => console.log(error));
            }
            
        },
        getAreaList(){
             if (this.areaState == 0) {
                this.areaerror="Please select a valid state";
            }
            else {
                this.areaerror="";
                axios.get("area-list/"+this.areaState)
                .then((response) => this.areaList = response.data)
                .catch((error) => console.log(error));
            }
        },
        singlestatedetail(sid)
        {
             axios.get("single-state-detail/"+ sid)
            .then((response) => this.stateDetail = response.data)
            .catch((error) => console.log(error));
        },
        deletestatedetail(sid) {
           this.stateId= sid;
        },
        addStateArea(){
             if (this.stateCountry == 0 || this.areaState == 0) {
                this.areaerror = "Please select a country then state";
            }
            else {
                    // 
                    this.areaerror="";
                    this.areasuccessmsg = "Please Wait...";
                    const formdatastate = new FormData();
                    formdatastate.append("arName",this.areaname);
                    formdatastate.append("stid",this.areaState);
                    formdatastate.append("arpin",this.areapincode);
                    formdatastate.append("cid",this.stateCountry);

                    // alert("areaname - " + this.areaname + " State-"+this.areaState+" pincode-"+this.areapincode+" Country-"+this.stateCountry);
          
                    axios.post("add-area-data",formdatastate)
                    .then((data) =>{
                        // console.log(data.data);
                    // this.countCode="";
                    // this.CountName="";
                    this.areaList = data.data;
                    
                    this.areaname="";
                    this.areaState="0";
                    this.areaState="0";
                    this.areapincode="";
                    this.areasuccessmsg = "Area/City added successfully";
                    })
                    .catch(error => {
                        this.error = error.response.data.errors;
                        this.areasuccessmsg = "";
                        
                    })
                    // 
            }
        }

    }
}
</script>
<style scoped>
        
        
</style>