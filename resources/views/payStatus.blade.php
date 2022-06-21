@extends("master.master")
@section("maincontent")

<!--================================================ 
    header -->


@include("includes.header")
 <div class="row">
     <div class="col-md-4"></div>
     <div class="col-md-4">
         <div class="card py-5 px-4 my-5">    
             <div class="text-center">
             @if($state ==1)
                <i class="la la-smile text-success"></i>
                <h2 class="text-success">Payment successful.</h2>
                <h1>Thank you for payment!</h1><br><br>
                <a href="/my-course" class="btn theme-btn" type="submit">Start Learning <i class="la la-arrow-right icon ml-1"></i></a>
            @else
                <i class="la la-smile text-success"></i>
                <h2 class="text-success">Payment Failed!.</h2><br><br>
                <a href="/cart/my-cart-items" class="btn theme-btn" type="submit">Try Again!  <i class="la la-arrow-right icon ml-1"></i></a>
            @endif
             </div>
         </div>   
     </div>
     <div class="col-md-4"></div>
 </div>
    
    
@endsection
