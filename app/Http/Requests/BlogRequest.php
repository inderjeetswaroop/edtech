<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BlogRequest extends FormRequest
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
            "artName"=>"required",
            "artCat"=>"required|numeric",
            "artcontent"=>"required",
            "publishdate"=>"date",
        ];
            
    }

    public function messages()
    {
        return [
            "artName.required" => "Article Name can not be blank.",
            "artCat.required" => "Article category is required.",
            "artImage.required" => "Image is required.",
            "artcontent.required" => "Article Content is required.",
            "publishdate.date"=>"Publish date must be a date",
        ];
    }


}
