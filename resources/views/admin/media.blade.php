@extends("admin.includes.adminmain")


@section("adminContent")
@include("admin/includes.header")

<!-- Body Content -->
            <!-- Container-fluid starts-->
            <div class="container-fluid bulk-cate">
                <div class="card ">
                    <div class="card-header">
                        <h5>Upload media</h5>
                    </div>
                    
                    <div class="card-body">
                        <mediasetting></mediasetting>
                       
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h5>Media File List</h5>
                    </div>
                    <div class="card-body">
                        
                    </div>
                </div>
            </div>
            <!-- Container-fluid Ends-->
<!-- Body Content -->


@endsection