<template>
    <div class="modal fade"  id="deletemedia" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                
                
                <div class="modal-header">
                    <h5 class="modal-title f-w-600" id="exampleModalLabel">Are you sure to delete country? </h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <div>
                        
                        <button @click="deleteme(mediaId.data.id)" class="btn btn-danger btn-md">Delete Image/video</button>
                        
                        <div v-if="mediaId">
                            <div v-if="mediaId.data.type == 1">
                                
                                  <img  class="img-thumbnail" :src="mediaId.data.src" alt="" >  
                            </div>
                            <div v-else>
                                <h3>Video</h3>
                                <video width="450" height="240" controls class="border border-primary">
                                    <source :src="mediaId.data.src" type="video/mp4">
                                </video>
                                
                                    
                            </div>
                            
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["mediaId"],
    

    methods:{
        deleteme(imgid){
            
            if (confirm("Are you sure to delete this image")) {
                    axios.get("delete-single-media-info/"+imgid)
                    .then((data) => {
                            // this.mediaidinfo = data;
                            this.$emit("imglistupdated",data);
                            $('#deletemedia').hide();
                             
                            $('.modal-backdrop').hide();
                        })
                    .catch((error) => console.log(error));    
            }
            
        }
    }
    
    
}
</script>
