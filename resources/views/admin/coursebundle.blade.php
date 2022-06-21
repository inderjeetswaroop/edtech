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
                                    <h5>Course Bundle Setting</h5>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            
                            <course-bundle></course-bundle>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container-fluid Ends-->

    
<!-- Body Content -->
@endsection