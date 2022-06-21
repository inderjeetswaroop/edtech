<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CartController extends Controller
{
    public function cartList()
    {
    	$pageTitle = "My Cart : E-commerce ";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    
    public function mycart($courseId)
    {
        $courseInfo = Course::find($courseId);
        if ($courseInfo->price > $courseInfo->discounted_price) {
            $price = $courseInfo->discounted_price;
        }
        else {
            $price = $courseInfo->price;
        }
        
        \Cart::add(array(
            'id' => $courseId, // inique row ID
            'name' => $courseInfo->courseName,
            'price' => $price,
            'quantity' => 1,
            'attributes' => array()
        ));
        $cartarray = array(
            "cartqty"=>\Cart::getTotalQuantity(),
            "cartitems"=>\Cart::getContent()
        );
        return $cartarray;
        /* 
        print_r($cartCollection);
        echo "<br>";
        echo \Cart::getTotal(); */
    }
    public function cartContent()
    {
        $content = \Cart::getContent();
        $cartarray = array(
            "cartqty"=>\Cart::getTotalQuantity(),
            "cartitems"=> $content,
            "cartTotal"=> \Cart::getTotal(),
            "cartSubTotal" => \Cart::getSubTotal(),
        );
        return $cartarray;
    }

    public function itemRemove($id)
    {
        \Cart::remove($id);
        $content = \Cart::getContent();
        $cartarray = array(
            "cartqty"=>\Cart::getTotalQuantity(),
            "cartitems"=> $content,
            "cartTotal"=> \Cart::getTotal(),
            "cartSubTotal" => \Cart::getSubTotal(),
        );
        return $cartarray;
    }

    public function update($id,$upd)
    {
        if ($upd == "dec") {
            \Cart::update($id, array(
                'quantity' => -1,
              ));
        }
        else{
            \Cart::update($id, array(
                'quantity' => 1,
              ));
        }
        
        $content = \Cart::getContent();
        $cartarray = array(
            "cartqty"=>\Cart::getTotalQuantity(),
            "cartitems"=> $content,
            "cartTotal"=> \Cart::getTotal(),
            "cartSubTotal" => \Cart::getSubTotal(),
        );
        return $cartarray;
    }

}
