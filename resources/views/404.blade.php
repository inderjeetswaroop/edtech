@extends("master.main")
@section("content")

<!--header start-->
@include("includes.header")
<!--header end-->
<!-- section start -->
<section class="p-0 bg-light">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="error-section">
                    <h1>404</h1>
                    <h2>page not found</h2>
                    <a href="{{url('/')}}" class="btn btn-normal">back to home</a>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Section ends -->
@endsection