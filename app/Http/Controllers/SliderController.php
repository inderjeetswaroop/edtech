<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SliderRequest;
use App\Models\Slider;
use App\Models\Popup;

class SliderController extends Controller
{
    public function slidersetting()
    {
        $pageTitle = "E-commerce : Slider Setting";
        return view("admin.slider-setting")->with(["pageTitle"=>$pageTitle]);
    }

    public function allSliders()
    {
        $slideInfo = Slider::orderBy("preference","asc")->get();
        return $slideInfo->toJson();
    }
    public function homeslides()
    {
        $slideInfo = Slider::where("status",1)->orderBy("preference","asc")->get();
        return $slideInfo->toJson();
    }

    public function slideAddData(SliderRequest $request)
    {
        $imagePath = $request->sliderImage;
        $imageLink = $request->slidelink;
        $imagePrefer = $request->prefer;
        $slides = new Slider;
        $slides->sliderImg = $imagePath;
        $slides->linkedto = $imageLink;
        $slides->preference = $imagePrefer;
        $slides->save();
        $slideInfo = Slider::all();
        return $slideInfo->toJson();
        

    }

    public function deleteslider($sid)
    {
        $slide = Slider::find($sid);
        $slide->delete();
        
        $slideInfo = Slider::all();
        return $slideInfo->toJson();
    }

    public function singleSlider($sid)
    {
        $slide = Slider::find($sid);
        
        return $slide->toJson();
    }

    public function slideupdateData(SliderRequest $request)
    {
        $sliderId = $request->slideId;
        $imagePath = $request->sliderImage;
        $imageLink = $request->slidelink;
        $imagePrefer = $request->prefer;
        $slides = Slider::find($sliderId);
        $slides->sliderImg = $imagePath;
        $slides->linkedto = $imageLink;
        $slides->preference = $imagePrefer;
        $slides->save();
        $slideInfo = Slider::all();
        return $slideInfo->toJson();
        
    }
    
    public function changeslidestate($sid)
    {
        $slideInfo = Slider::find($sid);
        if ($slideInfo->status == 1) {
            $slideInfo->status = 0;
        }
        else{
            $slideInfo->status = 1;
        }

        $slideInfo->save();
        
        $slideInfo = Slider::all();
        return $slideInfo->toJson();

    }

    public function popupsetting()
    {
        $pageTitle = "E-commerce : Pop Up Setting";
        return view("admin.pop-setting")->with(["pageTitle"=>$pageTitle]);
    }
    public function popAddData(Request $request)
    {
        $this->validate($request,[
            "popupImage"=>"required",
            "poplink"=> "required",
            "popupstatus"=> "required",
        ]);
        
        $popInfo = Popup::find("1");

        $popInfo->image = $request->popupImage;
        $popInfo->link = $request->poplink;
        $popInfo->status = $request->popupstatus;
        $popInfo->save();

        $pop = Popup::find("1");
        return $pop->toJson();

    }
    public function singlePopup()
    {
        $pop = Popup::find("1");
        return $pop->toJson();
    }



}
