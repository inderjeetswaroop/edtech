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
                                        <h5>Article Setting</h5>
                                        
                                    </div>
                                    <div class="ml-auto">
                                        {{-- <a href="{{route('coursesetting')}}" class="btn btn-warning">Add New Category</a>  --}}
                                    </div>
                                </div>
                                
                            </div>
                            <div class="card-body">
                            <br>
                            <div class="text-right mb-3">
                                <div class="btn-group">
                                    <router-link :to="{name:'addblog'}" class="btn btn-danger btn-xs">+ Add New Article</router-link>
                                    <router-link :to="{name:'blogSetting'}" class="btn btn-success btn-xs">= Article Llst </router-link>
                                </div>
                            </div>
                            
                            <router-view></router-view>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Container-fluid Ends-->

           
<!-- Body Content -->
@endsection