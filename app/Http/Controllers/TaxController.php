<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\taxRequest;
use App\Models\taxstandard;
use App\Models\taxclass;
use App\Models\tax;

class TaxController extends Controller
{
    public function taxSetting()
    {
        return view("admin.taxes");
    }
    public function taxstandards(Request $request)
    {
        $taxSTD = $request->taxstd;
        $taxstand = taxStandard::find(1);
        $taxstand->value = $taxSTD;
        $taxstand->save();
        return;
    }

    public function selectedStandardtax()
    {
        $taxstand = taxStandard::find(1);
        return $taxstand->value;
    }

    public function taxClassList()
    {
        $txclsList = taxclass::all();
            return $txclsList->toJson();
    }
    public function addTaxClass(taxRequest $request)
    {
        $txClass = new taxclass;
        $taxClassName = $request->txClsName;
        $txClass->name = $taxClassName;
        if ($txClass->save()) {
            $txclsList = $txClass::all();
            return $txclsList->toJson();
        }
        else {
            return;
        }
    }

    public function taxClassdelete($txClId)
    {
        $taxClass = taxclass::find($txClId);
        if ($taxClass->delete()) {
            $txclsList = taxclass::all();
            return $txclsList->toJson();
        }
        else {
            return;
        }
    }
    public function singletaxClassdetail($txClId)
    {
        $taxClass = taxclass::find($txClId);
        return $taxClass->toJson();
    }

    public function editTaxClass(taxRequest $request)
    {
        
        $taxClassName = $request->txClsName;
        $taxClassId = $request->txClsid;
        $txClass = taxclass::find($taxClassId);
        $txClass->name = $taxClassName;
        if ($txClass->save()) {
            $txclsList = $txClass::all();
            return $txclsList->toJson();
        }
        else {
            return;
        }
    }

    public function changeTaxclassStatus($txClId)
    {
        $txClass = taxclass::find($txClId);
        if($txClass->status == 1) {
            $txClass->status= 0;
        }
        else{
            $txClass->status=1;
        }

        if ($txClass->save()) {
            $txclsList = taxclass::all();
            return $txclsList->toJson();
        }
        else{
            return;
        }
    }
    
    // tax setting
    public function taxList()
    {
            $taxList = tax::all();
            return $taxList->toJson();
    }

    public function addtaxdata(taxRequest $request)
    {
        $addtax = new tax;
        $addtax->taxName = $request->taxname;
        $addtax->tax = $request->tax;
        $addtax->taxClass = $request->txClsName;

        if ($addtax->save()) {
            $taxList = $addtax::all();
            return $taxList->toJson();
        }
        else{
            return;
        }

    }

    public function deletetax($taxId)
    {
        $taxClass = tax::find($taxId);
        if ($taxClass->delete()) {
            $taxList = tax::all();
            return $taxList->toJson();
        }
        else {
            return;
        }
    }

    public function singletaxInfo($taxId)
    {
        $taxinfo = tax::find($taxId);
        return $taxinfo->toJson();
       
    }

    public function singleTaxupdateData(taxRequest $request)
    {
        $taxId = $request->taxId;
        $taxinfo = tax::find($taxId);
        $taxinfo->taxName = $request->taxname;
        $taxinfo->tax = $request->tax;
        $taxinfo->taxClass = $request->txClsName;
        if ($taxinfo->save()) {
            $taxList = $taxinfo::all();
            return $taxList->toJson();
        }
        else{
            return;
        }
    }


}
