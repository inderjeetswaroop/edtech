<template>
    <div class="card">
        <div class="card-body">
            <h3 :class="msgCls">{{successmsg}}</h3>
                <div class="row">
                    <div class="col-md-6 p-3">
                        <div class="form-group">
                            <label for="">Filter userv By course </label>
                            <select v-model="courseId" class="form-control" @change="searchByCourse()">
                                <option value="0">Select Course</option>
                                <option v-for="(courseList,index) in (allcourses)" :key="index" :value="courseList.id">
                                    {{courseList.courseName}}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 p-3">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control mt-4" placeholder="Search by name, email or Phone Number" v-model="searchKey">
                            <div class="input-group-append mt-4">
                                <button @click="searchBykey" class="btn btn-warning" type="submit">Go</button>
                            </div>
                        </div>
                        
                         <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.search" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                        <!-- Error msg -->
                    </div>
                </div>
            <div class="table-responsive">
                <add-user @UserAdded="updateuserList"></add-user>
                <edit-user :userInformation="usrInfor"></edit-user>
                <h3 class="text-success">{{load}}</h3>
                <button @click="reloadme" class="btn btn-primary" >User List</button>
                <button data-toggle="modal" data-target="#addUserId" class="btn btn-success float-right">+ Add New User</button>
                <br><br>
                <hr>
                <table class="table table-hovered table-bordered">
                    <thead>
                        <tr>
                            <td>Sr. No.</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Joining Date</td>
                            <td v-show="dis == 'block'">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(usr,index) in userList" :key="index">
                            <td>{{++index}}</td>
                            <td>{{usr.name}}</td>
                            <td class="text-center">{{usr.email}}
                                <br>
                                <span v-if="usr.emailVerified ==1 " class="badge badge-success">Verified</span>
                                <span v-else class="badge badge-danger">Not Verified</span>
                            </td>
                            <td class="text-center">{{usr.phoneNumber}}
                                <br>
                                <span v-if="usr.mobileVerified ==1 " class="badge badge-success">Verified</span>
                                <span v-else class="badge badge-danger">Not Verified</span>
                            </td>
                            <td>{{usr.created_at}}</td>
                            <td v-show="dis == 'block'">
                                <div class="btn-group">
                                    <button @click="userInfo(usr)" data-toggle="modal" data-target="#editUserId" class="btn btn-warning btn-xs"><i class="fa fa-pencil mr-2"></i>Edit</button>
                                    <a :href="'/account/customer/user-purchsae-history/'+usr.id" class="btn btn-success btn-xs"><i class="fa fa-bars mr-2"></i>Purchase History</a>
                                    <button class="btn btn-danger btn-xs"><i class="fa fa-ban mr-2"></i>Block</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>  
        </div>
    </div>  
</template>
<script>
Vue.component('add-user', require('./addNewUserComp.vue').default);
Vue.component('edit-user', require('./editNewUserComp.vue').default);
export default {
    data(){
        return {
            userList: {},
            load:"",
            usrInfor:{},
            allcourses:{},
            courseId:"0",
            searchKey:"",
            successmsg:"",
            msgCls:"",
            error:[],
            dis:"block",
        }
    },
    created() {
            this.dis = "block";
            this.load = '<div class="spinner-border text-success"></div>';
            
            axios.get("/account/customer/all-users/")
            .then((response) => this.userList = response.data)
            .catch((error) => console.log(error));

            axios.get("/course-dashboard/courses-list/")
            .then((response) => this.allcourses = response.data)
            .catch((error) => console.log(error));

            this.load = '';
    },
    methods:{
        userInfo(usrStr){
            this.usrInfor = usrStr;
        },
        updateuserList(usrdata){
            this.load = '<div class="spinner-border text-success"></div>';
            
            axios.get("/account/customer/all-users/")
            .then((response) => this.userList = response.data)
            .catch((error) => console.log(error));

            this.load = '';
        },
        searchByCourse(){
            // alert(this.courseId);
            this.msgCls="text-danger";
            this.successmsg = "Please wait...";
            axios.get("/account/customer/search-by-courseId/"+this.courseId)
            .then((response) => {
                this.dis = "";
                this.msgCls="text-success";
                this.successmsg = "Search completed";    
                this.userList = response.data
                })
            .catch((error) => {
                    this.msgCls ="text-danger";
                    this.successmsg = "Something wrong! Please try again";    
                // console.log(error)
                });
        },
        searchBykey(){
            // alert(this.searchKey);
            this.msgCls="text-danger";
            this.successmsg = "Please wait...";
            if (this.searchKey.length > 3) {
                const formdata = new FormData();
                formdata.append("search",this.searchKey);
                axios.post("/account/customer/search-by-keys",formdata)
                    .then((data) =>{
                        // this.dis = "";
                        this.userList = data.data;
                        this.msgCls="text-success";
                        this.successmsg = "Search completed";
                    })
                    .catch(error => {
                        this.msgCls="text-danger";
                        this.successmsg = "Please fix error.";
                        this.error = error.response.data.errors;
                        this.successmsg = this.error;
                    })
            }
            else{
                alert("Please enter atleast 3 characters!")
            }
            
        },
        reloadme(){
            location.reload();
        }
    },
}
</script>
