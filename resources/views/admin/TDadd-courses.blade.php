@extends("admin.includes.adminmain")
@section("adminContent")
@include("admin/includes.header")
<!-- Body Content -->
    
            <!-- Container-fluid starts-->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                
                                <div class="d-flex">
                                    <div class="mr-3">
                                        <h5>Add New Course</h5>
                                        <p> </p>
                                    </div>
                                    <div class="ml-auto">
                                        <a href="{{route('coursesetting')}}" class="btn btn-warning">Course List</a> 
                                    </div>
                                </div>
                                
                            </div>
                            <div class="card-body">
                            <br>
                                
                                <add-course></add-course>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Container-fluid Ends-->

           
<!-- Body Content -->
@endsection