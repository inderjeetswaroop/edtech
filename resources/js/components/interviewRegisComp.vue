<template>
    <div class="table-responsive">
        <table class="table table-bordered table-hovered">
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Full Name</th>
                    <th>DOB</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Optional</th>
                    <th>Address</th>
                    <th>UPSC Roll No</th>
                    <th>UPSC Interview Date</th>
                    <th>DAF</th>
                    <th>Mock Interview Date</th>
                    <th>Interview Medium</th>
                    <th>Registration Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(ulist,index) in userList" :key="index">
                    <td>{{++index}}</td>
                    <td>{{ulist.name}}</td>
                    <td>{{ulist.dob}}</td>
                    <td>{{ulist.email}}</td>
                    <td>{{ulist.phone}}</td>
                    <td>{{ulist.address + ' ' + ulist.city + ' ' + ulist.state }}</td>
                    <td>{{ulist.upscRollno}}</td>
                    <td>{{ulist.upscInterviewDate}}</td>
                    <td>
                        <a :href="'/storage/app/public/'+ulist.dafPdfLink" target="_blank" class="btn btn-danger btn-xs"><i class="fa fa-file-pdf-o mr-2"></i>View DAF</a>
                    </td>
                    <td>{{ulist.mockInterviewDate}}</td>
                    <td>{{ulist.interViewMedium}}</td>
                    <td>{{ulist.created_at}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){ 
        return{
                userList: {}
            }
        },
        created(){ 
             axios.get("/account/customer/interview-registration-user-list")
            .then((response) => {
                this.userList = response.data;
            })
            .catch((error) => console.log(error));
                console.log(error);
            }
    }

</script>