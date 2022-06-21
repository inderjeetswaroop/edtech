<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Media;
use Illuminate\Support\Facades\Storage;

class NormPageController extends Controller
{

    public function index()
    {
        $pageTitle = "Home :BE N BY IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }

    public function testing()
    {
        $allimages = Media::all();
    	return view("testing",["images"=>$allimages]);
    }

    public function testing2()
    {
        return view("admin/testing2");
    }

    public function home()
    {
    	$pageTitle = "Home :BE N BY IAS";
    	return view("layout-2")->with(["pageTitle"=>$pageTitle]);
    }


    public function contactUs()
    {
    	$pageTitle = "Contact :BE N BY IAS";
    	return view("contact")->with(["pageTitle"=>$pageTitle]);
    }

     public function aboutUs()
    {
    	$pageTitle = "About Us :BE N BY IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function visionMission()
    {
        $pageTitle = "About Us : Vision and mission : BE N BY IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function directorMessage()
    {
        $pageTitle = "About Us : Director Message : BE N BY IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function aboutIas()
    {
        $pageTitle = "About Ias : BE N BY IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }

     public function notFound()
    {
    	$pageTitle = "Page is not found :BE N BY IAS";
    	return view("404")->with(["pageTitle"=>$pageTitle]);
    }

     public function faq()
    {
    	$pageTitle = "Frequently asked question :BE N BY IAS";
    	return view("faq")->with(["pageTitle"=>$pageTitle]);
    }
    public function privacypolicy()
    {
        $pageTitle = "Privacy and Policy : Director Message : BE N BY IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function tnc()
    {
        $pageTitle = "Terms and Conditions : Director Message : BE N BY IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function refundpolicy()
    {
        $pageTitle = "refund and cancellation : Director Message : BE N BY IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }

    public function ncertbooks()
    {
        $pageTitle = "Download NCERT books for UPSC Preparation";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function preyrquest()
    {
        $pageTitle = "previous Year paper";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function whychooseLaw()
    {
        $pageTitle = "Why Choose Law Optional";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }


}
