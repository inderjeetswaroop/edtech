<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\NewProRequest;
use App\Http\Requests\ProductRequest;
use App\Models\Newproduct;
use App\Models\Product;

class ProductController extends Controller
{
    public function productDetail()
    {
    	/*encrypt($proid);
    	decrypt($dPro);*/
    	$pageTitle = "E-commerce : Homepage";
    	return view("product-page")->with(["pageTitle"=>$pageTitle]);
    	
    }
	public function ProductSetting()
	{
		$pageTitle = "E-commerce : Product List";
    	return view("admin.product-list")->with(["pageTitle"=>$pageTitle]);
	}
	public function productList()
	{
		$prolist = Newproduct::orderBy("id","desc")->get();
		return $prolist->toJson();
	}
	
	public function changeProState(Request $request)
	{
		

		$state = $request->productState;
		$proid = $request->prosId;

		$proinfo = Newproduct::find($proid);
		if ($state == 1 || $state == 2 || $state == 3 || $state == 4 || $state == 5) {
			$proinfo->productStatus = $state;
		}
		else
		{
			$proinfo->productStatus = '2';
		}
		$proinfo->save();
		$prolist = Newproduct::orderBy("id","desc")->get(); 
		return $prolist->toJson();

	}

	public function deleteProduct($proid,$deltype)
	{
		$proinfo = Newproduct::find($proid);
		if ($deltype == "perma") {
			$proinfo->delete();
		}
		else{
			$proinfo->deleted= 1;
			$proinfo->save();
		}

		$prolist = Newproduct::orderBy("id","desc")->get(); 
		return $prolist->toJson();
	}

	public function restoreProduct($proid)
	{
		$proinfo = Newproduct::find($proid);
		$proinfo->deleted= 0;
		$proinfo->save();
		$prolist = Newproduct::orderBy("id","desc")->get(); 
		return $prolist->toJson();

	}




	
}
