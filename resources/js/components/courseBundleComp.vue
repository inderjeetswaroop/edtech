<template>
    <div>
        <button class="btn btn-success btn sm float-right" data-toggle="modal" data-target="#addbundleModal">
            + Add Course Bundle
        </button>
        <add-bundle></add-bundle>
        <br>    
        <br>    
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>
                            Sr. No.
                        </th>
                        <th>
                            Course Bundle Nane
                        </th>
                        <th>
                            Bundle Courses
                        </th>
                        <th>    
                            action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(bList,index) in bundleList" :key="index">
                        <td>{{++index}}</td>
                        <td>{{bList.bundleName}}</td>
                        <td>
                            <span v-for="items in bList.courses.split(',')" :key="items">
                                <singcoursedetail v-bind:cid="items"></singcoursedetail>
                                <br>
                            </span>
                        </td>
                        <td>    
                            <div class="btn-group">
                                <button class="btn btn-primary btn-xs"><i class="fa fa-pencil mr-2"></i>Edit</button>
                                <button class="btn btn-danger btn-xs"><i class="fa fa-trash mr-2"></i>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>    
        </div>
    </div>
</template>
<script>
Vue.component('addBundle', require('./addCourseBundleModalComp.vue').default);
Vue.component('singcoursedetail', require('./singleCourseDetailComp.vue').default);
export default {
    data() {
        return {
            bundleList :{},
        }
    },
     created() {
        axios.get("/course-dashboard/bundle-list")
            .then((response) => this.bundleList = response.data)
            .catch((error) => console.log(error));
    },
}
</script>