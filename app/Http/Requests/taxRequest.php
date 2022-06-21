<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class taxRequest extends FormRequest
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
            "taxstd" => "integer",
            "txClsName"=>"required|alpha_num",
            "taxname"=>"required|alpha_num",
            "tax"=>"required|integer|min:1|max:100",
            
        ];
    }

    public function messages()
    {
        return [
            "txClsName.required" => "Tax class name can not be blank",
            "txClsName.alpha_num" => "Class name can be alphabets or aphabet with number. NO space is allowed",
            "taxname.required" => "Tax name is required",
            "taxname.alpha_num" => "Tax name can be only alphabets or alphabets with number. No space is allowed",
            "tax.required" => "Please fill Tax field. It can not be blank",
            "tax.integer" => "tax can not be blank and must be from 0 to 100",
            
        ];
	
    }



}
