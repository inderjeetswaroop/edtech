<template>
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                
                
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Edit Product Category  </h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <!-- form -->
                        <!-- Add country form -->
                        
                            <p class="text-success">{{successmsg}}</p>
                            
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
                            <form @submit.prevent="addcountry">
                                <label for="email" class="mr-sm-2"></label>
                                    <input v-model="countrydata.cname" type="text" class="form-control" placeholder="Enter Country Name">
                                    <br>
                                    <input v-model="countrydata.ccode" type="text" class="form-control" placeholder="Enter Country Code">
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
        props: ["countrydata"],
        data(){
                return {
                    successmsg:"",
                    error:""
                }
        },
        methods:{
             addcountry()
                {
                    this.successmsg = "Please Wait...";
                        const formdata = new FormData();
                        formdata.append("cname",this.countrydata.cname);
                        formdata.append("ccode",this.countrydata.ccode);
                        formdata.append("cid",this.countrydata.id);
                        
                        axios.post("edit-country-data",formdata)
                        .then((data) =>{
                            // console.log(data.data);
                        this.$emit("countupdated",data);
                        this.successmsg = "Country updated successfully";
                        this.error.cname="";
                        this.error.ccode="";
                        })
                        .catch(error => {
                            this.error = error.response.data.errors;
                            this.successmsg = "";
                            
                        })
                }
        }
        
    }
</script>
