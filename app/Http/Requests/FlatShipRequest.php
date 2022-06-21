<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class FlatShipRequest extends FormRequest
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
            "ruleName"=>"required|alpha",
            "ruleName"=>Rule::in(['all','product','city','category','state']),
            "charge"=>"required|regex:/^\d+(\.\d{1,2})?$/",
        ];
    }

    public function messages()
    {
        return[
            "ruleName.alpha"=>"Rule is not valid",
            "ruleName.in"=>"Rule name is not valid",
            "charge.required"=>"Shipping can not be blank",
            "charge.regex"=>"Please enter valid price",
        ];
    }
}
