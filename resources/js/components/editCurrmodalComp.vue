<template>
    <div class="modal fade" id="curreditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Edit Currency detail. </h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <p class="text-success">{{successmsg}}</p>
                    <form @submit.prevent="addcurrnow">
                        
                        <label for="tname">Currency Name:</label>
                        <input type="text" class="form-control" placeholder="Enter Currency name" id="tname" v-model="scurrdata.curr_name">
                        <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.cname" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->

                        <br><label for="curr">Currency Code:</label>
                        <input type="text" class="form-control" placeholder="Enter currency code" id="curr" v-model="scurrdata.code">
                        <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.ccode" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->
                        <br><label for="curr">Currency Symbol:</label>
                        <input type="text" class="form-control" placeholder="Enter currency Symbol" id="curr" v-model="scurrdata.symbol">
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
</template>
<script>
export default {
    props: ["scurrdata"],
    data(){
        return{
           error:"",
           successmsg:"",

        }
    },
   
    methods:{
            addcurrnow(){
                this.successmsg = "Please Wait...";
                 const formdata = new FormData();
                formdata.append("cname",this.scurrdata.curr_name);
                formdata.append("ccode",this.scurrdata.code);
                formdata.append("csymb",this.scurrdata.symbol);
                formdata.append("cId",this.scurrdata.id);
                
                
                axios.post("edit-currency-data",formdata)
                .then((data) =>{
                    // console.log(data.data);
                   this.$emit("currAdded",data);
                   this.error = "";
                   
                 this.successmsg = "Currency updated successfully";
                })
                .catch(error => {
                    this.error = error.response.data.errors;
                    this.successmsg = "";
                    
                })
            }

    }
    
}
</script>