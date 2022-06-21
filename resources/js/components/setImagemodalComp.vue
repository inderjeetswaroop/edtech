<template>
    <div>
        <div class="modelBackgrnd">
        <div id="imgsetmodal">
            <div class="img-container">
                
              <div  class="" >
                  <div  class="btn-group float-right mr-5" >
                    <a @click="sendDatato" class="btn btn-primary ">Insert</a>
                    
                  </div>

                <br>
                <p class="text-warning float-right">
                    {{alertmsg}}
                </p>
                <!-- Tabs -->
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#imagesList">Images</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#uploadNewImage">Upload New Image</a>
                            </li>
                            
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div class="tab-pane container active" id="imagesList">

                                <vue-select-image v-if="imageQty == 1" :h="'150px'" :w="'150px'" :dataImages="imgdata" @onselectimage="imagesGot"></vue-select-image>
                                        <!-- <div class="row">
                                            <div class="col-md-3" v-for="imgs in imgdata" :key="imgs.id">
                                                <div class="img-container clickcls">
                                                    <input type="checkbox" :id="'myCheckbox'+imgs.id" :value="imgs.id" v-model="imagevalue" />
                                                    <label :for="'myCheckbox'+imgs.id">
                                                        <img :src="localhos+imgs.imgpath" alt="" class="img-thumbnail" >
                                                    </label>
                                                    
                                                </div>
                                            </div>
                                            
                                        </div> -->
                                <vue-select-image v-if="imageQty > 1" :dataImages="imgdata" :is-multiple="true"  @onselectmultipleimage="imagesGot" :h="'150px'" :w="'150px'">
                                    </vue-select-image>        
                                   <!-- {{singImage}}  -->
                            </div>
                            <div class="tab-pane container fade" id="uploadNewImage">

                                  <input :disabled="btnDisabled" class="btn btn-success" type="file" @change="handleOnchange" multiple accept="image/x-png,image/gif,image/jpeg,image/x-png,image/gif,image/jpeg,application/pdf,video/mp4,video/x-m4v,video/*" />   
                                   <p :class="msgClr">{{successmsg}}</p> 
                            </div>
                            
                        </div>
                <!-- tabs -->
                
                </div>
            </div>
        </div>
     </div>
    </div>
</template>
<script>
export default {
    props:["imageQty"],
    data(){
            return{
                imgdata:[],
                // localhos : "http://localhost/myCom/storage/app/public/",
                imagevalue:"",
                alertmsg:"",
                imgqty:this.imageQty,
                singImage:"",
                btnDisabled:false,
                successmsg :"",
                msgClr: "",
               
            }
    },
    created(){
            
        axios.get("/media/all-media")
            .then((response) => this.imgdata = response.data)
            .catch((error) => console.log(error));
    },
    methods:{
        sendDatato(){
            this.imagevalue = this.singImage;
                this.alertmsg = "Please wait...";
                
                this.$emit("setImageData",this.imagevalue);
                this.alertmsg = "";
                // this.showmodal = false;
           
            
        },
        imagesGot(data){
               this.singImage = data;
                this.isDisabled= false;
        },
        handleOnchange(e) {
                this.msgClr = "text-success";
                 this.successmsg = "uploading......";
                this.btnDisabled = true;
                const formdata = new FormData();
                for (let i = 0; i < e.target.files.length; i++) {
                    this.image = e.target.files[i];
                     
                        formdata.append("medimages[]",this.image);
                }
                axios.post("/media/add-media-image-data",formdata)
                        .then((response) =>{
                            // console.log(data.data);
                            // this.$emit("catAdded",data);
                            for (let j = 0; j < response.data.length; j++) {
                                this.imgdata.unshift(response.data[j]);
                            }
                            
                        this.successmsg = "images added successfully";
                        this.btnDisabled = false;
                        
                        })
                        .catch(error => {
                            this.error = error.response.data.errors;
                            this.msgClr = "text-success";
                            this.successmsg = this.error;
                            console.log(this.error);
                        })
        }
        
        
    },
    
}
</script>
<style scoped>
    .modelBackgrnd
    {
        background:#fff;
        padding-left: 251px;
    }
    #imgsetmodal{
        z-index: 9999999999999;
        position: fixed;
        /* display: -webkit-box; */
        /* display: flex; */
        /* -webkit-box-orient: vertical; */
        /* -webkit-box-direction: normal; */
        /* -ms-flex-direction: column; */
        /* flex-direction: column; */
        width: 83%;
        height: 83%;
        /* pointer-events: auto; */
        background-color: #fff !important;
        background-clip: padding-box;
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 0.3rem;
        outline: 0;
        top: 1%;
        margin-left: -82%;
        padding: 23px;
        overflow: auto;
        opacity: 1
    }
    .img-container
    {
        margin-bottom: 10px;
    }
    
    label:before {
    /* content: url(""); */
    position: absolute;
    z-index: 100;
    background:white;
    }
    :checked+label:before {
    content: url("https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/checked_checkbox.png");
    background:white;
    }
    input[type=checkbox] {
    display: none;
    }
    input[type=radio] {
    display: none;
    }
    /*pure cosmetics:*/
    
    label {
    margin: 10px;
    }
    

</style>