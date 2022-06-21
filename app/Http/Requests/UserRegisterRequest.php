<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRegisterRequest extends FormRequest
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
            "useremail"=>"required|email",
            "username"=> "required",
            "userphone"=> "required|digits:10",
            "userpass"=> "required",
        ];
    }

    public function messages()
    {
        return [
            "userName.required" => "Please enter Full Name.",
            "useremail.required" => "Email is required.",
            "useremail.email" => "Enter a valid email.",
            "userPhone.required" => "Phone is Required and must be exact 10 numerics.",
            "userPhone.digits" => "Please enter valid phone number.Phone only can be 10 digits.",
            "userpass.required" => "Password is required.",
            
        ];
    }
}
