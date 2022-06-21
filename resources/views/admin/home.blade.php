@extends("admin.includes.adminmain")
@section("adminContent")
@include("admin/includes.header")
<!-- Body Content -->
 <!-- Container-fluid starts-->
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <router-view></router-view>           
            </div>
        </div>
    </div>
    <!-- Container-fluid Ends-->

<!-- Body Content -->
@endsection