<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\FlatShipRequest;
use App\Models\Shipping;

class ShippingController extends Controller
{
    public function shipSetting()
    {
        return view("admin.shipping");
    }
    
    public function flatShipData(FlatShipRequest $request)
    {
        $ships = new Shipping;
        $type = $request->shiptype;
        $ships->rulename = $request->ruleName;
        $ships->rulecondition = $request->rcondition;
        $ships->value = $request->rulevalue;
        $ships->price = $request->charge;
        $ships->ruleType = $type;

        if ($ships->save()) {
            $shipList = Shipping::where('ruleType',$type)->get();
            return $shipList->toJson();
        }
        else {
            return;
        }
    }


    public function flatShiplist($type)
    {
        $shipList = Shipping::where('ruleType',$type)->get();
            return $shipList->toJson();
    }

    public function deleteShiplist($id,$type)
    {
       $ships = Shipping::find($id);
       if ($ships->delete()) {
            $shipList = Shipping::where('ruleType',$type)->get();
            return $shipList->toJson();
       }
       else{
           return;
       }
    }



}
