<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CatRequest;
use App\Models\Category;

class CategoryController extends Controller
{
    public function ProCategory()
    {
    	$pageTitle = "E-commerce : Category page";
    	return view("category-page")->with(["pageTitle"=>$pageTitle]);
    }

    public function categoryList()
    {
        $catlist = Category::orderBy("id","desc")->get();
        return $catlist->toJson();
    	
    }

    public function catSetting()
    {
         return view("admin.home");
    }

    // Add Category
    public function addCategory(CatRequest $request)
    {
        // $path = $request->files("image")->store("images","public");
        
        // $picpath = implode(",",$request->mainImage);

        // if ($request->hasFile('mainImage')) {
        //     $pathExt = $request->file('mainImage')->extension();
        //     $picpath = $request->mainImage->store('images/category','public');
        // }
        // else{
        //     $picpath ="";
        // }

        
        $cats = new Category;
        $cats->catname = $request->catname;
        $cats->keywords = $request->keyword;
        $cats->description = $request->descrip;
        $cats->parent_category = $request->pCat;
        $cats->catimage = $request->mainImage;         
        
        if($cats->save())
        {
            $catlist = Category::orderBy("id","desc")->get();
            return $catlist->toJson();
        }
        else{
            return;
        }
        
        
    }
    // Add Category

    // Edit category
     public function singleCatDetail($catid)
     {
        $catdetail = Category::find($catid);
        if ($catdetail) {
            return $catdetail->toJson();
        }
        else {
            return;
        }
        
     }
    // Edit category

     public function editCategorydata(CatRequest $request)
     {
        // if ($request->hasFile('mainImage')) {
        //     $pathExt = $request->file('mainImage')->extension();
        //     $picpath = $request->mainImage->store('images/category','public');
        // }
        // else{
        //     $picpath ="";
        // }

        
        $cats = Category::find($request->catId);
        $cats->catname = $request->catname;
        $cats->keywords = $request->keyword;
        $cats->description = $request->descrip;
        $cats->parent_category = $request->pCat;
        $cats->catimage = $request->mainImage;         
        
        if($cats->save())
        {
            $catlist = Category::orderBy("id","desc")->get();
            return $catlist->toJson();
        }
        else{
            return;
        }
     }

     public function deleteCategory($catid)
     {
         $catdetail = Category::find($catid);
         if($catdetail->delete())
         {
            $catlist = Category::orderBy("id","desc")->get();
            return $catlist->toJson();
         }
         else{
             return;
         }
     }
     public function changeCatStatus($catId)
     {
         $catdetail = Category::find($catId);
         if ($catdetail->status == 1) {
            $catdetail->status = 0;
         }
         else{
            $catdetail->status = 1;
         }

         if ($catdetail->save()) {
            $catlist = Category::orderBy("id","desc")->get();
            return $catlist->toJson();
         }
         else {
             return;
         }
        
     }




}
