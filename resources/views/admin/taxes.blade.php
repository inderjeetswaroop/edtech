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
                                <h5>Tax Details</h5>
                            </div>
                            <div class="card-body">
                                
                                <!-- Nav tabs -->
                                <ul class="nav nav-tabs" role="tablist">
                                    
                                    <li class="nav-item">
                                    <a class="nav-link " data-toggle="tab" href="#menu1">Tax Class</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#menu2">Add/Edit Tax</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link " data-toggle="tab" href="#home">Tax Price</a>
                                    </li>
                                </ul>

                                <!-- Tab panes -->
                                <div class="tab-content">
                                    <div id="home" class="container tab-pane fade "><br>
                                        <h4>Show product price to customer</h4>
                                        <tax-setting></tax-setting>
                                    </div>
                                   
                                    <div id="menu1" class="container tab-pane fade"><br>
                                    <h3>Tax class settings</h3>
                                        <taxclasssetting></taxclasssetting>
                                    </div>
                                    <div id="menu2" class="container tab-pane active"><br>
                                    <h4>Tax Setting</h4><br>
                                    <taxsetting></taxsetting>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Container-fluid Ends-->
   
<!-- Body Content -->
@endsection