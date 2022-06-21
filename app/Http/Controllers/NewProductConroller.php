<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\NewProRequest;
use App\Models\Newproduct;

class NewProductConroller extends Controller
{
    public function addProduct()
	{
		$pageTitle = "E-commerce : Add Product";
		return view("admin.add-product")->with(["pageTitle"=>$pageTitle]);
	}

	public function addProductData(NewProRequest $request)
	{
        
        $newPro = new NewProduct;
        if ($request->productCategory) {
            $categories = $request->productCategory;
        }
        else{
            $categories=0;
        }
        
        $newPro->title = $request->productName;
        $newPro->procode = $request->productCode;
        $newPro->mainimage = $request->productMainImage;
        $newPro->price = $request->productPrice;
        $newPro->salePrice = $request->productSalePrice;
        $newPro->weight = $request->productWeight;
        $newPro->length = $request->productLength;
        $newPro->width = $request->productWidth;
        $newPro->height = $request->productHeight;
        $newPro->otherimages = $request->productMoreImages;
        $newPro->stockqty = $request->productStockQty;
        $newPro->stockstatus = $request->productStock;
        $newPro->category = $categories;
        $newPro->proType = $request->productType;
        $newPro->shortdescription = $request->productShortDescrip;
        $newPro->longdescription = $request->productLongDescrip;
        $newPro->notes = $request->productNote;
        $newPro->mkeywords = $request->courseMetaKeyWord;
        $newPro->mdescription = $request->courseMetaDescript;
        $newPro->save();
		
	}

    public function editProduct($productId)
    {
        $pageTitle = "E-commerce : Edit Product";
        return view("admin.editProducts")->with(["pageTitle"=>$pageTitle,"productId"=>$productId]);
    }

    public function singleProInfo($proid)
    {
        $proInfo = Newproduct::find($proid);
        return $proInfo->toJson();

    }

    public function editProductData(NewProRequest $request)
    {
        $newPro = NewProduct::find($request->productId);
        
        if ($request->productCategory) {
            $categories = $request->productCategory;
        }
        else{
            $categories=0;
        }
        
        $newPro->title = $request->productName;
        $newPro->procode = $request->productCode;
        $newPro->mainimage = $request->productMainImage;
        $newPro->price = $request->productPrice;
        $newPro->salePrice = $request->productSalePrice;
        $newPro->weight = $request->productWeight;
        $newPro->length = $request->productLength;
        $newPro->width = $request->productWidth;
        $newPro->height = $request->productHeight;
        $newPro->otherimages = $request->productMoreImages;
        $newPro->stockqty = $request->productStockQty;
        $newPro->stockstatus = $request->productStock;
        $newPro->category = $categories;
        $newPro->proType = $request->productType;
        $newPro->shortdescription = $request->productShortDescrip;
        $newPro->longdescription = $request->productLongDescrip;
        $newPro->notes = $request->productNote;
        $newPro->mkeywords = $request->productmKeywords;
        $newPro->mdescription = $request->productmDescrip;
        $newPro->save();
    }



}
