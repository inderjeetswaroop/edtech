<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SliderRequest extends FormRequest
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
            "sliderImage"=>"required",
            "prefer" => "required|numeric",
        ];
    }

    public function messages()
    {
        return [
            "sliderImage.required"=>"Slide Image is required, Please choose image",
            "prefer.required"=>"Please Enter only a number",
            "prefer.numeric"=>"Please Enter only a complete number",
        ];
    }



}
