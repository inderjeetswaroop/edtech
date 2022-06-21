<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CoursebundleRequest extends FormRequest
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
            "courseBundleName"=>"required",
            "courseArr"=>"required",
        ];
    }
    public function messages()
    {
        return [
            "courseBundleName.required"=>"Course Bundle name is required",
            "courseArr.required"=>"Please Select at least two courses.",
        ];
    }
}
