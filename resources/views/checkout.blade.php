@extends("master.master")
@section("maincontent")

<!--================================================ 
    header -->


@include("includes.header")
 
        <router-view :key="$route.path"></router-view>
        <vue-progress-bar></vue-progress-bar>
    
@endsection


