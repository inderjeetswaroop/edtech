@extends("admin.includes.adminmain")
@section("adminContent")
@include("admin/includes.header")
            <!-- Container-fluid starts-->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                <h5>Location Setting</h5>
                            </div>
                            <div class="card-body">
                                <locationsetting></locationsetting>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Container-fluid Ends-->
@endsection