<template>
    <div>
        <delete-media :mediaId="mediaidinfo" @imglistupdated="updateimglist"></delete-media>
        <h3>Choose image to add</h3>
        <br>
        <p class="text-success">
            {{successmsg}}
        </p>
        <p class="text-danger">
            {{error}}
        </p>
                <input :disabled="isDisabled" class="btn btn-success" type="file" @change="handleOnchange" multiple accept="image/x-png,image/gif,image/jpeg,application/pdf,video/mp4,video/x-m4v,video/*" />   
                <a class="btn btn-link text-danger float-right" @click="togglecheckboxes">Delete Multiple</a>
                <hr>
                <div v-if="isVisible">
                    
                    <button  class="btn btn-danger btn-md" @click="deletemultiple">Delete Selected images</button>
                    <br>
                    <h4 class="text-danger"> {{deleteMsg}}</h4>
                    <br><br>    
                </div>
            
        <div class="row">
            
            <div class="col-md-2" v-for="imgs in imgdata" :key="imgs.id">
                <div class="img-container my-2">
                    
                    <input v-if="isVisible" type="checkbox" :value="imgs.id" v-model="checkvalue"  >
                    <img v-if="imgs.type == 1" :src="imgs.src" alt="" class="img-thumbnail hov" @click="mediaInfo(imgs.id)" data-target="#deletemedia" data-toggle="modal" >
                    <video v-else :src="imgs.src" alt="" class="img-thumbnail hov" @click="mediaInfo(imgs.id)" data-target="#deletemedia" data-toggle="modal"  >Video</video>

                </div>
            </div>
        </div>
       
        
    </div>
</template>
<script>
Vue.component('delete-media', require('./deleteMediaComp.vue').default);

export default {
    props: ["uptype"],
    data(){
        return{
            
            imgdata:"",
            image:"",
            fpath: [],
            successmsg:"",
            error:"",
            mediaidinfo:"",
            isDisabled:false,
            selectedcheck:"",
            checkvalue:[],
            isVisible:false,
            deleteMsg:"",
            ext:"",
            type:1,  // 1- image 0- video
        }
    },
    created(){
         axios.get("/media/all-media")
            .then((response) => this.imgdata = response.data)
            .catch((error) => {
                // console.log(error)
                });
    },
     methods: {
         togglecheckboxes(){
             this.isVisible = !this.isVisible;
         },
         deletemultiple(){
                this.deleteMsg = "";
                if (this.checkvalue.length > 0) {
                    this.deleteMsg ="Please wait..."
                    const formdata = new FormData();
                    formdata.append("medimages[]",this.checkvalue);
                     axios.post("delete-multiple-images-data",formdata)
                        .then((response) =>{
                            // console.log(response);
                            this.imgdata = response.data;   
                            this.deleteMsg = "images deleted successfully";
                            this.isVisible = false;
                            this.checkvalue = "";
                        })
                        .catch(error => {
                            this.error = error.response.data.errors;
                            // console.log(this.error);
                        })
                    
                }
                else{
                        this.deleteMsg = "Please select atleast one image";
                }
         },
            handleOnchange(e){
                this.successmsg = "uploading......";
                this.isDisabled = true;
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
                        this.isDisabled = false;
                        })
                        .catch(error => {
                            this.error = error.response.data.errors;
                            // console.log(this.error);
                        })
                
               
            },

            
            mediaInfo(mid) {
                
                axios.get("/media/single-media-info/"+mid)
                .then((data) => {
                        this.mediaidinfo = data;
                        // this.$emit("countupdated",data)
                    })
                .catch((error) => {
                    // console.log(error)
                    });
            },
            updateimglist(data) {
                // this.isVisible = true;
                this.imgdata = data.data;
            },
            checkextention(str) {
                this.ext = str.substring(str.lastIndexOf(".")+1);
                if (this.ext == 'jpeg' || this.ext == 'png' || this.ext == 'gif' || this.ext == 'jpg') {
                    this.type = 1;
                }
                else
                {
                   this.type = 0;     
                }
            }
     }
}
</script>
<style scoped>
    .hov{
        cursor: pointer;
        width: 130px;
        height: 130px;
    }
    .img-container
    {
        width: 150px;
        height: 150px;
        border: 1px solid rgb(206, 206, 206);
        vertical-align:middle;
        padding: 10px;
        
    }
</style>