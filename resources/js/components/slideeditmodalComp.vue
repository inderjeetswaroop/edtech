<template>
    <div class="modal fade" id="slideeditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                    {{normalizedSize}}
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Edit new Slider. </h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" @click="emptyimg">×</span></button>
                </div>
                <div class="modal-body">
                    <p class="text-success">{{successmsg}}</p>
                    <form @submit.prevent="addslidernow">
                        <div class="form-group">
                            
                        <p>Product Main Image</p> 
                                <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.sliderImage" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                        <addimage-input :imagecount="1" @getImageData="imglist"></addimage-input>
                        <img v-if="mainimage" :src="mainimage" height="70" width="70">
                        <!-- <img v-if="slideinfo.sliderImg" :src="slideinfo.sliderImg" height="70=" width="70" /> -->

                        </div>
                        <div class="form-group">
                            <label for="prefer">Slider Preference:</label>
                            <input type="number" class="form-control" placeholder="Slider preference" id="prefer" v-model="slideinfo.preference">
                            <!-- Error msg -->
                                    <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.prefer" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->

                        </div>
                        <div class="form-group">
                            <label >Enter Link for slider(Optional):</label>
                            <input type="text" class="form-control" placeholder="Enter Link for slider(Optional)" v-model="slideinfo.linkedto">
                            <!-- Error msg -->
                                    <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.slidelink" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->

                        </div>
                            <br><br>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </form>
                    
                </div>
                <div class="modal-footer">
                    
                    <button class="btn btn-secondary" type="button" data-dismiss="modal" @click="emptyimg">Close</button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["slideinfo"],
    data(){
        return{
           
           error:"",
           successmsg:"",
           mainimage:"",
           slideLink:"",

        }
    },
   
    methods:{
        emptyimg(){
                this.mainimage = "";
                this.error="";
                this.successmsg="";
            },
            addslidernow(){
                this.successmsg = "Please Wait...";
                 const formdata = new FormData();
                formdata.append("sliderImage",this.mainimage);
                formdata.append("slidelink",this.slideinfo.linkedto);
                formdata.append("prefer",this.slideinfo.preference);
                formdata.append("slideId",this.slideinfo.id);

                axios.post("edit-slider-data",formdata)
                .then((data) =>{
                    // console.log(data.data);
                   this.$emit("slideAdded",data);
                   this.error = "";
                   
                 this.successmsg = "Slider updated successfully";
                })
                .catch(error => {
                    this.error = error.response.data.errors;
                    this.successmsg = "";
                    
                })
            },
            imglist(response){
                if (response) {
                     this.mainimage = response.src;
                    this.slideinfo.sliderImg="";
                }
                else{
                     this.mainimage = this.slideinfo.sliderImg;
                    
                }
               
            },

    },
    computed:{
        normalizedSize:function(){
            this.mainimage = this.slideinfo.sliderImg;
            
        }
    }
    
}
</script>