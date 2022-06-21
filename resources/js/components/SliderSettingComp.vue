<template>
    <div>
        <slideradd-modal @slideAdded="addedslider"></slideradd-modal>
        <sliderdelete-modal @slideAdded="addedslider" v-bind:slideid="sId"></sliderdelete-modal>
        <slideredit-modal @slideAdded="addedslider" v-bind:slideinfo="sInfo"></slideredit-modal>
        <div class="float-right">
            <button class="btn btn-success" data-target="#slideAddModal" data-toggle="modal" >Add New Slider</button>
            
        </div>
        <br><br>
        <hr>
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead>
                    <th>Sr. No.</th>
                    <th>Slider Image.</th>
                    <th>Slider Linked </th>
                    <th>Preference</th>
                    <th>Slider Status</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr v-for="(sList,index) in sliders" :key="index">
                        <td>{{index+1}}</td>
                        <td>
                            <img :src="sList.sliderImg" alt="" height="100">
                        </td>
                        <td>{{sList.linkedto}}</td>
                        <td>{{sList.preference}}</td>
                        <td>
                            <span v-if="sList.status == 1" class="badge badge-success">Active</span>
                            <span v-else class="badge badge-danger">De-Activate</span>
                            <br><br>
                            <button class="btn btn-secondary btn-xs" @click="changeSlideState(sList.id)">Change Status</button>
                        </td>
                        <td>
                            <div class="btn-group">
                                <button class="btn btn-info btn-xs" @click="editslide(sList.id)" data-target="#slideeditModal" data-toggle="modal">Edit</button>
                                <button class="btn btn-danger btn-xs" @click="deleteslide(sList.id)" data-target="#slidedelModal" data-toggle="modal">Delete</button>

                            </div>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    </div>    
</template>
<script>
Vue.component('slideradd-modal', require('./addSlidermodalComp.vue').default);
Vue.component('sliderdelete-modal', require('./slideDeletemodalComp.vue').default);
Vue.component('slideredit-modal', require('./slideeditmodalComp.vue').default);
export default {
    data(){
        return{
                sliders:"",
                sId:"",
                sInfo:"",
        }
    },
    methods:{
        addedslider(data){
            this.sliders = data.data;
        },
        deleteslide(slideid){
            this.sId = slideid;
        },
        editslide(slideid){
            axios.get("/seller/single-slider-info/"+slideid)
            .then((response) => this.sInfo = response.data)
            .catch((error) => console.log(error));
        },
        changeSlideState(slideid){
            // alert(slideid);
            axios.get("/seller/change-slide-state/"+slideid)
            .then((response) => this.sliders = response.data)
            .catch((error) => console.log(error));
        }
    },
    created(){
        axios.get("/seller/all-slider")
            .then((response) => this.sliders = response.data)
            .catch((error) => console.log(error));
    }
}
</script>
<style scoped>

</style>
