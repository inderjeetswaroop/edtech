<template>
    <div class="modal fade" id="popupeditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Add new Slider. </h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <p class="text-success">{{successmsg}}</p>
                    <!-- Form -->
                    <form @submit.prevent="addpopupnow">
                        <div class="form-group">
                            <p>Choose Pop Image</p> 
                                    <!-- Error msg -->
                                            <div v-if="error">
                                                <ul>
                                                    <li v-for="err of error.popupImage" :key="err" class="text-danger" >
                                                        {{err}}
                                                    </li>
                                                </ul>
                                            </div>
                                        
                                            <!-- Error msg -->
                            <addimage-input :imagecount="1" @getImageData="imglist"></addimage-input>
                            <img v-if="mainimage" :src="mainimage" class="img-fluid">
                        </div>
                        <div class="form-group">
                            <label for="tname">Enter Link for Popup:</label>
                            <input type="text" class="form-control" placeholder="Enter Link for slider(Optional)" id="tname" v-model="popupLink">
                            <!-- Error msg -->
                                    <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.poplink" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->

                        </div>
                        <div class="form-group">
                            <label for="tname">Popup Status:</label>
                            <select name="" id="" class="form-control" v-model="popStatus">
                                <option value="1">Active</option>
                                <option value="0">Deactive</option>
                            </select>
                            <!-- Error msg -->
                                    <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.popupstatus" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->
                        </div>
                        <br><br>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </form>
                    <!-- //Form -->
                </div>
                <div class="modal-footer">
                    
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
Vue.component('addimage-input', require('./imageInputComp.vue').default);
export default {
    data(){
        return {
            mainimage:"",
            error:"",
            successmsg:"",
            popupLink:"",
            popStatus:"1",
        }
    },
    methods:{
        addpopupnow(){
            this.successmsg = "Please Wait...";
                 const formdata = new FormData();
                formdata.append("popupImage",this.mainimage);
                formdata.append("poplink",this.popupLink);
                formdata.append("popupstatus",this.popStatus);
                axios.post("/seller/add-popup-data",formdata)
                .then((data) =>{
                    this.$emit("popupAdded",data);
                    this.successmsg = "Pop Up Updated";
                    this.error="",
                    console.log(data.data);
                })
                .catch(error =>{
                    this.error = error.response.data.errors;
                    this.successmsg = "";
                })
        },
        imglist(response){
            this.mainimage = response.src;
        }
    }
}
</script>