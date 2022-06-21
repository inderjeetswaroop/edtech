@extends("admin.includes.adminmain")
@section("adminContent")

<!-- Body Content -->
    
        <!-- Container-fluid starts-->
            <div class="authentication-box">
                <div class="container">
                    <div class="row">
                    <div class="col-md-3"></div>
                        <div class="col-md-7 p-0 card-right">
                            <div class="text-center">
                                <img src="http://beandbyias.com/frontassets/images/logo.png" class="img-fluid">
                            </div>
                            <br>
                            <div class="card tab2-card">
                                <div class="card-body">
                                    <ul class="nav nav-tabs nav-material" id="top-tab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="top-profile-tab" data-toggle="tab" href="#top-profile" role="tab" aria-controls="top-profile" aria-selected="true"><span class="icon-user mr-2"></span>Login</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="top-tabContent">
                                        <div class="tab-pane fade show active" id="top-profile" role="tabpanel" aria-labelledby="top-profile-tab">
                                            
                                            <form class="form-horizontal auth-form">
                                                <div class="form-group">
                                                    <input required="" name="login[username]" type="email" class="form-control" placeholder="Username" id="exampleInputEmail1">
                                                </div>
                                                <div class="form-group">
                                                    <input required="" name="login[password]" type="password" class="form-control" placeholder="Password">
                                                </div>
                                                <div class="form-button">
                                                    <button class="btn btn-primary" type="submit">Login</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                </div>
            </div>
        <!-- Container-fluid Ends-->

           
<!-- Body Content -->
@endsection

