<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CountryRequest;
use App\Models\Country;
use App\Models\State;
use App\Models\City;
use App\Http\Requests\StateRequest;
use App\Http\Requests\CityRequest;

class LocationController extends Controller
{
    public function locationsetting()
    {
        return view('admin.location');
    }
    public function countryList()
    {
        $countryList = Country::all();
            return $countryList->toJson();
    }
    public function addcountryData(CountryRequest $request)
    {
        $countName = $request->cname;
        $countcode = $request->ccode;
        
        $cntry = new Country;
        $cntry->cname = $countName;
        $cntry->ccode = $countcode;
        if ($cntry->save()) {
            $countryList = Country::all();
            return $countryList->toJson();
        }
        else {
            return;
        }
    }

    public function singleCountryDetail($cid)
    {
        $country = Country::find($cid);
        if ($country) {
            return $country->toJson();
        }
        else {
            return;
        }
    }

    public function editcountryData(CountryRequest $request)
    {
        $countName = $request->cname;
        $countcode = $request->ccode;
        $countid = $request->cid;
        
        $cntry = Country::find($countid);
        $cntry->cname = $countName;
        $cntry->ccode = $countcode;
        if ($cntry->save()) {
            $countryList = Country::all();
            return $countryList->toJson();
        }
        else {
            return;
        }
    }

    public function deleteCountry($countid)
    {
        $cntry = Country::find($countid);
        if ($cntry->delete()) {
            $countryList = Country::all();
            return $countryList->toJson();
        }
        else {
            return;
        }
    }

// Country Finished

// state start

 public function addstateData(StateRequest $request)
 {
     $stateName = $request->stName;
     $countryCode = $request->cid;

     $stdata = new State;
     $stdata->sname = $stateName;
     $stdata->country = $countryCode;
     if ($stdata->save()) {
         $statelist = State::where("country",$countryCode)->get();
         return $statelist->toJson();
     }
     else {
         return;
     }
 }

 public function stateList($countryId)
 {
    $statelist = State::where("country",$countryId)->get();
    return $statelist->toJson();
 }

 public function singlestatedetail($sid)
 {
     $single = State::find($sid);
     if ($single) {
        return $single->toJson();
     }
     else{
         return;
     }
    
 }

 public function editstateData(StateRequest $request)
 {
    $stateName = $request->stName;
     $countryCode = $request->cid;
     $stateId = $request->sid;

     $stdata = State::find($stateId);
     $stdata->sname = $stateName;
     $stdata->country = $countryCode;
     if ($stdata->save()) {
         $statelist = State::where("country",$countryCode)->get();
         return $statelist->toJson();
     }
     else {
         return;
     }
 }

 public function deleteState($stateId)
 {
    $cntry = State::find($stateId);
    $countryCode = $cntry->country;
    if ($cntry->delete()) {
        $countryList = State::where("country",$countryCode)->get();
        return $countryList->toJson();
    }
    else {
        return;
    }
 }

// Area

public function addareaData(CityRequest $request)
{
    $areaName = $request->arName;
    $stateId = $request->stid;
    $pincode = $request->arpin;
    $country = $request->cid;

    $area = new City;
    $area->cityname = $areaName;
    $area->statecode = $stateId;
    $area->country = $country;
    $area->pincode = $pincode;

    if ($area->save()) {
        $areaList = City::where("statecode",$stateId)->get();
        return $areaList->toJson();
    }
    else {
        return;
    }
}

public function areaList($stateId)
{
    $areaList = City::where("statecode",$stateId)->get();
    return $areaList->toJson();
}

// Area


// Default country state list

public function defaultcountryState()
{
    $stateList = State::all();
    return $stateList->toJson();
}

public function defaultcountryStatecity()
{
    $stateList = city::all();
    return $stateList->toJson();
}



}
