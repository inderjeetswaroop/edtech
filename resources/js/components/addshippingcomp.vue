<template>
    <div>
        <div class="modal fade" id="shipadModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Add new shipping. </h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <p class="text-success">{{successmsg}}</p>
                    <form class="form-horizontal" @submit.prevent="addadvanceshipping">
                        
                        <label for="tname">Rule Name: <p class="text-danger">{{rulerror}}</p> </label>
                        <select class="form-control" v-model="rulename" id="tname" v-on:change="valueoption">
                            <option value="0">Select Option</option>
                            <option value="price">Price</option>
                            <option value="weight">Weight</option>
                            <option value="length">Length</option>
                            <option value="width">breadth</option>
                            <option value="height">Height</option>
                            <option value="city">City</option>
                            <option value="state">State</option>
                        </select>
                        
                        <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.cname" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->

                        <br><label for="curr">Condition:</label>
                        <select v-model="condition" class="form-control" id="tname">
                            <option selected value="0">Select Option</option>
                            <option value="equal">Equal to</option>
                            <option value="noteql">Not equal to</option>
                            <option value="greater">Greater than</option>
                            <option value="less">Less than</option>

                        </select>
                        <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.ccode" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->
                        <br><label for="curr">Rule value:</label>
                        <input v-model="rulevale" v-if="rulevalInput=='text'" type="text" class="form-control" placeholder="Enter value" id="curr" >
                        <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.csymb" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->
                        <select v-model="rulevale" v-if="rulevalInput=='dropdown' && locList=='state'" class="form-control" >
                            <option v-for="stList in stateList" :key="stList.id">{{stList.sname}}</option>
                        </select>
                        <select v-model="rulevale" v-if="rulevalInput=='dropdown' && locList=='city'" class="form-control" >
                            <option v-for="ctList in stateList" :key="ctList.id">{{ctList.cityname}}</option>
                        </select>
                        <br><label for="curr">Shipping Charge:</label>
                        <input  type="text" v-model="shipcharge" class="form-control" placeholder="Enter shipping charge for this rule" id="curr" >
                        <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.csymb" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->
                            <br><br>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </form>
                    
                </div>
                <div class="modal-footer">
                    
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                </div>
                
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            successmsg: "",
            error:"",
            rulename:"price",
            rulerror:"",
            rulevalInput:"text",
            stateList:"",
            locList:"",
            rulevale:"",
            condition:"equal",
            shipcharge:"",
        }
    },
    
    methods:{
        valueoption(){
            this.rulerror = '';
            if (this.rulename == '0') {
                this.rulerror = 'Please choose rule';
            }
            else {
                if (this.rulename == 'city' || this.rulename == 'state') {
                    this.rulevalInput = "dropdown";
                    if (this.rulename == 'city') {
                            this.locList = "city";
                             axios.get("../location/default-country-city-list")
                            .then((response) => this.stateList = response.data)
                            .catch((error) => console.log(error));
                    }
                    else{
                        this.locList = "state";
                         axios.get("../location/default-country-state-list")
                        .then((response) => this.stateList = response.data)
                        .catch((error) => console.log(error));
                    }
                    
                }
                else {
                    this.rulevalInput = "text";
                }
                
            }
            
            
        },
        addadvanceshipping(){
                    this.error="";
                    this.successmsg = "Please Wait...";
                    const formdatastate = new FormData();
                    formdatastate.append("ruleName",this.rulename);
                    formdatastate.append("condition",this.condition);
                    formdatastate.append("rulevalue",this.rulevale);
                    formdatastate.append("charge",this.shipcharge);

                    alert("rulename - " + this.rulename + " Condition-"+this.condition+" rule value-"+this.rulevale+" Shipping charge-"+this.shipcharge);
          
                    // axios.post("add-area-data",formdatastate)
                    // .then((data) =>{
                    //     // console.log(data.data);
                    // // this.countCode="";
                    // // this.CountName="";
                    // this.areaList = data.data;
                    
                    // this.areaname="";
                    // this.areaState="0";
                    // this.areaState="0";
                    // this.areapincode="";
                    // this.successmsg = "Shipping rule added successfully";
                    // })
                    // .catch(error => {
                    //     this.error = error.response.data.errors;
                    //     this.successmsg = "";
                        
                    // })
        }
    }
}
</script>