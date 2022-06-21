<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function orderSuccess()
       {
       	 $pageTitle = "Thanks for your order : E-commerce ";
    	return view("order-success")->with(["pageTitle"=>$pageTitle]);
       }

       public function orderHistory()
       {
       	 $pageTitle = "Order History : E-commerce ";
    	return view("order-history")->with(["pageTitle"=>$pageTitle]);
       }
}
