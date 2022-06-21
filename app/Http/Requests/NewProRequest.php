<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewProRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "productName"=>"required",
            "productCode"=>"required|alpha_num",
            "productPrice"=>"required|numeric",
            "productSalePrice"=>"numeric|nullable",
            "productStock"=> "boolean|nullable",
            "productStockQty"=> "required|numeric",
            "productType"=>"required|numeric",
            "productShortDescrip"=> "required",
            "productMainImage"=> "required",
            "productWeight"=> "numeric|nullable",
            "productHeight"=> "numeric|nullable",
            "productWidth"=> "numeric|nullable",
            "productLength"=> "numeric|nullable",
            
        ];
    }
    public function messages()
    {
        return [
            "productName.required" => "Product Name can not be blank.",
            "productCode.required" => "Product Code is required.",
            "productCode.alpha_num" => "Product code can be alphabets and numbers only.",
            "productPrice.required" => "Product price is required.",
            "productPrice.numeric" => "Please enter valid price.",
            "productSalePrice.numeric" => "Please enter valid price.",
            "productStock.boolean" => "Your input is not allowed.",
            "productStockQty.required" => "Product Stock quantity can not be empty.",
            "productStockQty.numeric" => "Please enter a valid quantity.",
            "productCategory.array" => "Please choose valid Product Category",
            "productType.required" => "Selected product type is not valid",
            "productType.numeric" => "Selected product type is not valid",
            "productShortDescrip.required" => "Short description is required",
            "productMainImage.required" => "Product main image is required",
            "productWeight.numeric" => "Please Enter a valid weight",
            "productHeight.numeric" => "Please Enter a valid height",
            "productWidth.numeric" => "Please Enter a valid width",
            "productLength.numeric" => "Please Enter a valid length",
            
        ];
    }
}
