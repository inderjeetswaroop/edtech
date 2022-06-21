<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LeadRequest extends FormRequest
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
            "userName"=>"required|",
            "userEmail"=>"required|email",
            "userPhone"=> "required|digits:10",
            "userInrest"=>"required",
        ];
    }

    public function messages()
    {
        return [
            "userName.required" => "Please enter Full Name.",
            "userEmail.required" => "Enter a valid email.",
            "userPhone.required" => "Phone is Required.",
            "userInrest.required" => "Please Select Correct your interested course.",
            
        ];
    }
}
