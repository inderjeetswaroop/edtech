<template>
    <div class="modal fade" id="editstateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                
                
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Edit State   </h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <!-- form -->
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
                            <form  @submit.prevent="editcountState">
                                    <p class="text-danger">{{stateError}}</p>
                                    <input v-model="statedata.sname" type="text" class="form-control" placeholder="Enter Country Name">
                                    <br>
                                   
                                    <select v-model="statedata.country" class="form-control" >
                                        <option value="0">Select Country</option>
                                        <option v-for="country in countryList" :key="country.id" :value="country.id">
                                            {{country.cname}}
                                        </option>
                                    </select>
                                    <br>
                                    <button type="submit" class="btn btn-warning">Submit</button>
                            </form>
                        <hr>
                        
                <!-- Add country form  -->
                    <!-- //form -->
                </div>
                <div class="modal-footer">
                    
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                </div>
                
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        props: ["statedata"],
        data(){
                return {
                    successmsg:"",
                    error:"",
                    countryList:"",
                    stateError:"",
                }
        },
        created() {
            axios.get("country-list")
            .then((response) => this.countryList = response.data)
            .catch((error) => console.log(error));
        },
        methods:{
             editcountState()
                {
                    if (this.stateCountry == 0) {
                        this.stateError = "Please select a country";
                    }
                    else {
                            // 
                            this.stateError="";
                            this.successmsg = "Please Wait...";
                            const formdatastate = new FormData();
                            formdatastate.append("stName",this.statedata.sname);
                            formdatastate.append("cid",this.statedata.country);
                            formdatastate.append("sid",this.statedata.id);
                            
                            axios.post("edit-state-data",formdatastate)
                            .then((data) =>{
                                // console.log(data.data);
                            // this.countCode="";
                            // this.CountName="";
                            this.$emit("stateupdated",data);
                            // this.stateList = data.data;
                            
                            this.successmsg = "state added successfully";
                            })
                            .catch(error => {
                                this.error = error.response.data.errors;
                                this.successmsg = "";
                                
                            })
                            // 
                    }
                }
        }
        
    }
</script>
