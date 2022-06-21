<template>
    <div>
        <button class="btn btn-success float-right" data-toggle="modal" data-target="#myModal">+ Add New </button>

        <!-- add Modal -->
        <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Add Date and Topic</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form class="needs-validation add-product-form" novalidate="" @submit.prevent="addmcqdate">
                            <div class="form-group">
                                <label for="comment">Enter Topic</label>
                                <input type="text" class="form-control" v-model="mcqtopic" required placeholder="Enter Topic">
                            </div>
                            <div class="form-group">
                                <label for="comment">Choose Date</label>
                                <input type="date" class="form-control" v-model="mcqdate" required>
                            </div>
                            <div class="form-group">
                                <label for="comment">Choose Type</label>
                                <select class="form-control" v-model="mcqtype">
                                    <option value="0">Daily Questionary</option>
                                    <option value="1">Free Mock Test</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="comment"><b class="text-warning">Test Question:</b></label>
                                <tinymce id="addmcqs" v-model="testInstruction" class="form-control"></tinymce>    
                                
                            </div>
                             <div class="offset-xl-3 offset-sm-4">
                                <button type="submit" class="btn btn-primary">Update</button>
                                
                            </div>
                        </form>
                        <h4 :class="msgcolor">{{successmsg}}</h4>
                    </div>

                </div>
            </div>
        </div>
        <!-- //add Modal -->
        
        <!-- Edit Modal -->
        <div v-if="singleMcqdateInfo" class="modal" id="ediModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <!-- <h1>{{singleMcqdateInfo}}</h1> -->
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Date</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form class="needs-validation add-product-form" novalidate="" @submit.prevent="updatemcqdate">
                            <div class="form-group">
                                <label for="comment">Enter Topic</label>
                                <input type="text" class="form-control" v-model="singleMcqdateInfo.topic" required placeholder="Enter Topic">
                            </div>
                            <div class="form-group">
                                <label for="comment">Choose Date</label>
                                <input type="date" class="form-control" v-model="singleMcqdateInfo.date" required>
                            </div>
                            <div class="form-group">
                                <label for="comment">Choose Type</label>
                                <select class="form-control" v-model="singleMcqdateInfo.type">
                                    <option value="0">Daily Questionary</option>
                                    <option value="1">Free Mock Test</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="comment"><b class="text-warning">Test Question:</b></label>
                                <tinymce id="editmcqs" v-model="singleMcqdateInfo.instruction" class="form-control"></tinymce>    
                                
                            </div>
                             <div class="offset-xl-3 offset-sm-4">
                                <button type="submit" class="btn btn-primary">+Update</button>
                                <button type="reset" class="btn btn-light">Discard</button>
                            </div>
                        </form>
                        <h4 :class="msgcolor">{{successmsg}}</h4>
                    </div>

                </div>
            </div>
        </div>
        <!-- edit Modal -->

        <br>
        <hr>
        <br>    
        <div class="table-responsive">
            <table class="table table-hovered">
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Topic</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="(dList,index) in mcqDateList" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{dList.topic}}</td>
                        <td>{{dList.date}}</td>
                        <td>
                            <span v-if="dList.type == 1" class="badge badge-primary">Free Mock Test</span>
                            <span v-else class="badge badge-success">Daily Questionary</span>
                        </td>
                        <td>{{dList.created_at}}</td>
                        <td>
                            <div class="btn-group">
                                <button class="btn btn-primary btn-xs" data-toggle="modal" data-target="#ediModal" @click="findme(dList.id)">Edit</button>
                                <router-link :to="{name:'addmcqQuestion',params: { mcqdateid: dList.id }}" class="btn btn-info btn-xs">Add Questions</router-link>
                                <button class="btn btn-danger btn-xs" @click="deleteDate(dList.id)">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            mcqDateList: {},
            mcqdate:"",
            msgcolor:"",
            successmsg:"",
            mcqtype:"0",
            mcqtopic:"",
            testInstruction:"",
            singleMcqdateInfo:{},
        }
    },
    created(){
        // MCQs date list
             axios.get("/course-dashboard/mcsdatelist")
            .then((response) => this.mcqDateList = response.data)
            .catch((error) => console.log(error));
        // MCQs date list
    },
    methods:{
        addmcqdate(){
                this.msgcolor="text-success";
                this.successmsg = "Please Wait..";
                const formdata = new FormData();
                formdata.append("mcqDate",this.mcqdate);
                formdata.append("mcqTopic",this.mcqtopic);
                formdata.append("mcqType",this.mcqtype);
                formdata.append("instruction",this.testInstruction);
                axios.post("/course-dashboard/addmcqdateData",formdata)
                .then((data) =>{
                    this.mcqDateList = data.data
                    // console.log(data.data);                   

                this.successmsg = "Date added successfully";
                this.error = "";
                
                })
                .catch(error => {
                    this.msgcolor = "text-danger";
                     this.successmsg = "Please Fix error- " + error.response.data.errors;
                    
                })
        },
        deleteDate(dId){
            if (window.confirm("Are you sure to delete this date?")) {
                axios.get("/course-dashboard/deletemcqDate/"+dId)
                .then((response) => this.mcqDateList = response.data)
                .catch((error) => console.log(error));    
            }
            
        },
        findme(dId){
            
            axios.get("/single-mcq-date-info/"+dId)
            .then((response) => this.singleMcqdateInfo = response.data)
            .catch((error) => console.log(error));
            
        },
        updatemcqdate(){
                this.msgcolor="text-success";
                this.successmsg = "Please Wait..";
                const formdata = new FormData();
                formdata.append("mcqDate",this.singleMcqdateInfo.date);
                formdata.append("mcqTopic",this.singleMcqdateInfo.topic);
                formdata.append("mcqType",this.singleMcqdateInfo.type);
                formdata.append("mcqId",this.singleMcqdateInfo.id);
                formdata.append("instruction",this.singleMcqdateInfo.instruction);
                axios.post("/course-dashboard/updatemcqdateData",formdata)
                .then((data) =>{
                    this.mcqDateList = data.data
                    // console.log(data.data);                   

                this.successmsg = "Date update successfully";
                this.error = "";
                
                })
                .catch(error => {
                    this.msgcolor = "text-danger";
                     this.successmsg = "Please Fix error- " + error.response.data.errors;
                    
                })
        }

    }
}
</script>