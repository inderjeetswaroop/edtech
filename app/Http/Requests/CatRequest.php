<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CatRequest extends FormRequest
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
            "catname" => "required | min:3 | max:255",
            
        ];
    }
    /* "mainImage" => "image|mimes:jpeg,png,jpg|max:512"*/
    public function messages()
    {
        return [
            "catname.required" => "Category Name can not be blank!",
            
        ];
    }


}
