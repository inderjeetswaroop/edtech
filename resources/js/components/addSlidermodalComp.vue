<template>
    <div class="modal fade" id="slideAddModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Add new Slider. </h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <p class="text-success">{{successmsg}}</p>
                    <form @submit.prevent="addslidernow">
                        <div class="form-group">
                        <p>Slider Image</p> 
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
                        </div>
                        <div class="form-group">
                            <label for="prefer">Slider Preference:</label>
                            <input type="number" class="form-control" placeholder="Slider preference" id="prefer" v-model="preference">
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
                            <label for="tname">Enter Link for slider(Optional):</label>
                            <input type="text" class="form-control" placeholder="Enter Link for slider(Optional)" id="tname" v-model="slideLink">
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
                    
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           
           error:"",
           successmsg:"",
           mainimage:"",
           slideLink:"",
           preference:"",

        }
    },
   
    methods:{
            addslidernow(){
                this.successmsg = "Please Wait...";
                 const formdata = new FormData();
                formdata.append("sliderImage",this.mainimage);
                formdata.append("slidelink",this.slideLink);
                formdata.append("prefer",this.preference);
                axios.post("add-slider-data",formdata)
                .then((data) =>{
                    // console.log(data.data);
                   this.$emit("slideAdded",data);
                   this.error = "";
                   this.mainimage = "";
                   this.slideLink = "";
                   
                 this.successmsg = "Slider added successfully";
                })
                .catch(error => {
                    this.error = error.response.data.errors;
                    this.successmsg = "";
                    
                })
            },
            imglist(response){
                this.mainimage = response.src;
            },

    }
    
}
</script>