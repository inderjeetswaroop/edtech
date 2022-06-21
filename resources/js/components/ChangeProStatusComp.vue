<template>
    <div class="modal fade" id="changeprostatemodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                
                
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Change Product status  </h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" @click="emptyMsg">×</span></button>
                </div>
                <div class="modal-body">
                    <h3 class="text-success">{{successmsg}}</h3>
                    <form class="needs-validation" @submit.prevent="upload" >
                        <div class="form">
                           
                             <div class="form-group mb-0">
                                <label for="validationCustom02" class="mb-1">Parent Category :</label>
                               <select v-model="proState" class="form-control" >
                                    <option value="1">Active</option>
                                    <option value="2">Pending</option>
                                    <option value="0">De-Activated`</option>
                                </select>
                               
                                
                            </div>
                            
                           
                           
                        </div>
                        <br>
                        <button class="btn btn-primary" type="submit">Save</button>
                   </form>
                </div>
                <div class="modal-footer">
                    
                    <button class="btn btn-secondary" type="button" data-dismiss="modal" @click="emptyMsg">Close</button>
                </div>
                
            </div>
        </div>
        {{normalizedSize}}
    </div>
    
</template>

<script>

    export default {
        props: ["proid"],
        data() {
            return{
                proState:"1",
                productId:"",
                successmsg:"",
                }
        },

       computed:{
        normalizedSize:function(){
            this.productId = this.proid;
            
        }
       },

        methods: {
           
            imglist(response){
                this.imageList = response.src;
            },
            
            upload()
            {
                
                 const formdata = new FormData();
                formdata.append("productState",this.proState);
                formdata.append("prosId",this.productId);                

                axios.post("change-course-status",formdata)
                .then((data) =>{
                    this.$emit("updateprolist",data)
                    this.successmsg = "Course Status changed successfully";
                })
                .catch(error => {
                    this.error = error.response.data.errors;
                    console.log(this.error);
                })

                
            },
            emptyMsg() {
                this.successmsg = "";
            }
            
            
        }
    }
    
</script>
<style scoped>
        .img-thumb{
            width:100px;
        }
</style>