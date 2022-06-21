<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CityRequest extends FormRequest
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
            "arName"=>"required|alpha|regex:/",
            "stid"=>"required|numeric",
            "arpin"=>"required|numeric",
            "cid"=>"required|numeric",
        ];
    }

    public function messages()
    {
        return[
            "arName.required"=>"City/Area name can not be blank",
            "arName.alpha"=>"City/Area name can be only alphabets",
            "stid.required"=>"Choose a valid state ",
            "stid.numeric"=>"Choose a valid state ",
            "arpin.numeric"=>"Choose a valid numeric pincode",
            "arpin.required"=>"Pincode is required",
            "cid.required"=>"Country name is not valid. ",
            "cid.numeric"=>"Choose a valid country ",
        ];
    }
}
