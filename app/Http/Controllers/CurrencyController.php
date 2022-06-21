<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\currencyRequest;
use App\Models\Currency;

class CurrencyController extends Controller
{
    public function currencySetting()
    {
        return view("admin.currency-rates");

    }

    public function currencyList()
    {
        $currList = Currency::all();
        return $currList->toJson();
    }

    public function addNewCurrency(currencyRequest $request)
    {
        $currency = new Currency;
        $currency->curr_name = $request->cname;
        $currency->code = $request->ccode;
        $currency->symbol = $request->csymb;
        if ($currency->save()) {
            $currList = $currency::all();
            return $currList->toJson();
        }
        else{
            return;
        }

    }

    public function currencyDelete($currId)
    {
        $currdetail = Currency::find($currId);
         if($currdetail->delete())
         {
            $currList = Currency::all();
            return $currList->toJson();
         }
         else{
             return;
         }
    }

    public function currencyDeatil($currId)
    {
        $currdetail = Currency::find($currId);
        return $currdetail->toJson();
    }

    public function upadteCurrency(currencyRequest $request)
    {
        $currency = Currency::find($request->cId);
        $currency->curr_name = $request->cname;
        $currency->code = $request->ccode;
        $currency->symbol = $request->csymb;
        if ($currency->save()) {
            $currList = $currency::all();
            return $currList->toJson();
        }
        else{
            return;
        }
    }

    public function makedefaultCurr($currId)
    {
        $currency = Currency::find($currId);
        Currency::where('curr_name','!=',null)->update(['used'=>0]);
        $currency->used = 1;
        if ( $currency->save()) {
            $currList = Currency::all();
            return $currList->toJson();
        }
        else {
            return;
        }
        
    }

    public function defaultCurrency()
    {
        $currency = Currency::where('used','1')->first();
        return $currency->toJson();
    }




}
