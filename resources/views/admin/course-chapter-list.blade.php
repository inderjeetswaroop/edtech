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
                                <h5>Chapters Setting of <span class="text-danger">
                                    @if(!empty($courseName))
                                        {{$courseName}}
                                    @endif
                                </span></h5>
                            </div>
                            <div class="card-body">
                            <br>
                               <chapter-setting :courseid="<?php echo $courseId ?>"></chapter-setting>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Container-fluid Ends-->

           
<!-- Body Content -->
@endsection
