<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MentorshipuserRequest extends FormRequest
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
            "username"=> "required",
            "userdob" => "required",
            "useremail"=>"required|email",
            "useraddress" => "required",
            "userphone"=> "required|digits:10",
            "useroptional"=> "required",
            "userrollnumber" => "required",
            "upscInterviewDate"=> "required",
            "usercity"=> "required",
            "userstate"=> "required",
            "DafFileUrl"=> "required",
            "mockInterview"=> "required",
            "interviewMode"=> "required",
            "useragreement"=> "required"

        ];
    }

    public function messages()
    {
        return [
            "username.required" => "Please enter Full Name.",
            "useremail.required" => "Email is required.",
            "useremail.email" => "Enter a valid email.",
            "userPhone.required" => "Phone is Required and must be exact 10 numerics.",
            "userPhone.digits" => "Please enter valid phone number.Phone only can be 10 digits.",
            "useroptional.required" => "Please select an optional subject.",
            "userdob.required" => "Please Enter your DOB.",
            "useraddress.required" => "Please Enter your Address.",
            "userrollnumber.required" => "Please Enter your UPSC Roll number.",
            "upscInterviewDate.required" => "Please Enter Your UPSC Interview date.",
            "usercity.required" => "Please enter city name",
            "userstate.required" => "Please select a state",
            "DafFileUrl.required" => "Please Upload your DAF file(PDF only)",
            "mockInterview.required" => "Please Select mock interview data",
            "interviewMode.required" => "Please select interview mode",
            "useragreement.required" => "Please choose term and conditions box"            
        ];
    }
}
