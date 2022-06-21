<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StateRequest extends FormRequest
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
            "stName"=>"required",
            "cid"=>"required|numeric",
        ];
    }

    public function messages()
    {
        return [
            "stName.required"=>"State name can not be null",
            "cid.required"=>"Please choose correct country name req",
            "cid.numeric"=>"Please choose correct country name number",
        ];
    }
}
