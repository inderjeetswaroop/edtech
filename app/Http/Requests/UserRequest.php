<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
                "userEmail"=>"required|email",
                "userpass"=> "required",
                
            ];
    }

    public function messages()
    {
        return [
            "userEmail.required" => "Email field is required.",
            "userEmail.email" => "Enter a valid email.",
            "userpass.required" => "Password is Required.",
            
        ];
    }



}
