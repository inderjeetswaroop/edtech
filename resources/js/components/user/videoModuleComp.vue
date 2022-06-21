<template>
    <div>
        <div v-if="classInfo.classMode == 1" class="row">
            <div class="col-md-9 p-4  p-sm-2">
                <iframe class="videoFrame" style="width: 100%; height: 100%;" :src="classInfo.videoLink" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
            </div>
            <div class="col-md-3 p-md-4 p-sm-2">
                <iframe style="width: 100%; height: 550px;" :src="classInfo.chatlink"></iframe>
            </div>
        </div>
        <vue-plyr v-else >
            <video
                controls
                playsinline
                
            >
                <source
                size="720"
                :src="classInfo.videoLink"
                type="video/mp4"
                />
                
                
            </video>
        </vue-plyr>
    </div>
</template>
<script>
export default {
    props:["classInfo"]
}
</script>
<style scoped>
    .videoFrame{
        height:550px
    }
</style>