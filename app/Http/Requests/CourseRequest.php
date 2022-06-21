<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CourseRequest extends FormRequest
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
            "courseName" => "required",
            "cGroup" => "required",
            "courseCode" => "required",
            "coursePrice" => "required",
            "discountPrice" => "required",
            "courseShortDescrip" => "required",
            "classLanguage" => "required",
            "courseLongDescrip" => "required",
            "courseStartDate" => "required",
            "courseFeaturepoints" => "required",
            "courseCategory" => "required",
            "courseType" => "required",
            "courseMainImage" => "required",
            

        ];
    }
    public function FunctionName(Type $var = null)
    {
        return [
            "cGroup.required" => "Please course group",
        ];
    }
}
