<template>
    <div class="modal fade" id="taxeditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Edit Tax. </h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <p class="text-success">{{successmsg}}</p>
                    <form @submit.prevent="addtaxnow">
                        
                        <label for="tname">Tax Name:</label>
                        <input type="text" class="form-control" placeholder="Enter tax name" id="tname" v-model="sTaxdetail.taxName">
                        <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.taxname" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->

                        <label for="tax">Tax(%):</label>
                        <input type="number" class="form-control" placeholder="Enter Tax" id="tax" v-model="sTaxdetail.tax">%
                        <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.tax" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->
                        <div class="form-group">
                            <label for="sel1">Select Tax Class:</label>
                            <select v-model="taxClass" class="form-control" id="sel1">
                                <option selected value="0">Select Tax Class</option>
                                <option  v-for="txClass in taxClasses" :key="txClass.id" v-bind:value="sTaxdetail.id">{{txClass.name}}</option>
                            </select>
                            </div>
                             <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.taxcls" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->
                            
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    
                </div>
                <div class="modal-footer">
                    
                    <button class="btn btn-default" type="button" data-dismiss="modal">Close</button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['sTaxdetail'],
    data(){
        return{
            taxClasses:"",
            taxname:"",
            taxpercentage:"",
            taxClass:"0",
            error:"",
            successmsg:"",

        }
    },
    created(){
         axios.get("tax-class-list")
            .then((response) => {
                this.taxClasses = response.data;
                })
            .catch((error) => console.log(error));
        
    },
    methods:{
            addtaxnow(){
                this.successmsg = "Please Wait...";
                 const formdata = new FormData();
                formdata.append("taxname",this.sTaxdetail.taxName);
                formdata.append("tax",this.sTaxdetail.tax);
                formdata.append("txClsName",this.sTaxdetail.taxClass);
                formdata.append("taxId",this.sTaxdetail.id);
                
                
                axios.post("edit-tax-data",formdata)
                .then((data) =>{
                    // console.log(data.data);
                    this.$emit("taxAdded",data);
                   this.error = "";
                   this.taxname = "";
                   this.taxClass = "";
                   this.taxpercentage = "";
                   
                 this.successmsg = "Tax updated successfully";
                })
                .catch(error => {
                    this.error = error.response.data.errors;
                    this.successmsg = "";
                    
                })
            }

    }
    
}
</script>