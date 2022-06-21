<template>
    <div>
        <popup-edit-modal @popupAdded="popupUpdate"></popup-edit-modal>
       <div class="float-right">
            <button class="btn btn-success" data-target="#popupeditModal" data-toggle="modal" >Edit Pop up</button>
            
        </div>
        <br><br>
        <hr>
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Link</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img :src="popupInfo.image" alt="" class="img-fluid">
                        </td>
                        <td>
                            <p>{{popupInfo.link}}</p>
                        </td>
                        <td>
                            <span class="badge" :class="popupInfo.status == '1' ? 'badge-success': 'badge-danger' ">
                                <div v-html="popupInfo.status == '1' ? 'Active': 'De-Activated'">

                                </div>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
Vue.component('popup-edit-modal', require('./popupAddComp.vue').default);
export default {
    data() { 
            return{
                popupInfo:{},
            }
        },
    created() {
        axios.get("/seller/single-popup-info/")
            .then((response) => {
                this.popupInfo = response.data
                console.log(response.data)
                })
            .catch((error) => console.log(error));
    },
    methods: {
        popupUpdate(response){
            this.popupInfo = response.data;
        }
    }
}

</script>