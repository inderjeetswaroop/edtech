<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CountryRequest extends FormRequest
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
            "cname"=>"required",
            "ccode"=>"required|numeric",
        ];
    }

    public function messages()
    {
        return [
            "cname.required"=>"Country name can not be empty",
            "ccode.required"=>"Country code can not be empty",
            "ccode.numeric"=>"Country code can only be a complete number",
            
        ];
    }
}
