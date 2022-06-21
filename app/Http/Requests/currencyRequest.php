<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class currencyRequest extends FormRequest
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
            "cname"=>"required|alpha|max:50",
            "ccode"=>"required|alpha|max:10",
            "csymb"=>"required|max:10",
        ];
    }

    public function messages()
    {
        return [
            "cname.required" => "Currency name can not be blank",
            "cname.alpha" => "Currency name can be alphabets . No space is allowed",
            "ccode.required" => "Currency code can not be blank",
            "ccode.alpha" => "Currency code can be alphabets . No space is allowed",
            "csymb.required" => "Currency symbol can not be blank",
            
        ];
	
    }


}
