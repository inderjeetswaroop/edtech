<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class paymentsRequest extends FormRequest
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
            "fname"=>"required|alpha",
            "lname"=> "required|alpha",
            "email"=>"required|email",
            "phone"=> "required|digits:10",
            "address"=> "required"
            
        ];
    }

    public function messages()
    {
        return [
            "fname.required" => "First Name is required",
            "fname.alpha" => "Name can be only alphabets",
            "lname.required" => "Last name is required",
            "lname.alpha" => "Last name can be only alphabets",
            "email.required" => "Email is required.",
            "email.email" => "Enter valid email.",
            "phone.required" => "Phone number is required and must be exact 10 digits.",
            "address.required"=> "Please enter a valid Address",
            
        ];
    }



}
