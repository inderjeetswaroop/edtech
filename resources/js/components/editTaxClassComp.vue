<template>
    <div class="modal fade" id="edittxclModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                
                
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Edit Tax Class  </h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <!-- body -->
                    <p class="text-success">{{successmsg}}</p>
                    <form class="form-inline" @submit.prevent="updatetaxClass">

                        <label for="tname" class="mr-sm-2">Tax Class Name:</label>
                        <input type="text" v-model="sTxCldata.name" class="form-control mb-2 mr-sm-2" placeholder="Enter email" id="tname">
                        
                        <button  type="submit" class="btn btn-primary mb-2">Update</button>
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
                    <!-- body -->
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
    props: ["sTxCldata"],
    data(){
        return{
            successmsg:"",
            error:""
        }
    },
    methods:{
       
        updatetaxClass(){
            const formdata = new FormData();
            formdata.append("txClsid",this.sTxCldata.id);
            formdata.append("txClsName",this.sTxCldata.name);
                
                
                axios.post("edit-taxclass-data",formdata)
                .then((data) =>{
                    // console.log(data.data);
                    this.$emit("taxclasslist",data);
                   this.error = "";
                  this.successmsg = "Tax class updated successfully";
                })
                .catch(error => {
                    this.error = error.response.data.errors;
                    console.log(this.error);
                })
        }
    }
    
}
</script>