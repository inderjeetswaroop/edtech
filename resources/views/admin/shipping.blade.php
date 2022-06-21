@extends("admin.includes.adminmain")
@section("adminContent")
@include("admin/includes.header")
            <!-- Container-fluid starts-->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                <h5>Shipping Setting</h5>
                            </div>
                            <div class="card-body">
                                <shipsetting></shipsetting>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Container-fluid Ends-->
@endsection