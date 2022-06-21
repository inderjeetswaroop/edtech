<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TestseriesquestionRequest extends FormRequest
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
            "questions"=>"required",
            "ansa"=>"required",
            "ansb"=>"required",
            "ansc"=>"required",
            "ansd"=>"required",
            "correctans"=>"required",
            "justification"=>"required",
        ];
    }
    public function messages()
    {
        return [
            "questions.required"=>"Test Question is required",
            "ansa.required"=>"Option A is required",
            "ansb.required"=>"Option B is required",
            "ansc.required"=>"Option C is required",
            "ansd.required"=>"Option D is required",
            "correctans.required"=>"Correct Answer is required",
            "justification.required"=>"Answer Justification is required",
        ];
    }
}
