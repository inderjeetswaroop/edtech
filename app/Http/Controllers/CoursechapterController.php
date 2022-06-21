<?php

namespace App\Http\Controllers;
use App\Models\Coursechapter;
use Illuminate\Http\Request;
use App\Http\Requests\CoursechapterRequest;
use App\Models\Course;

class CoursechapterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function index($courseId)
    {
        $chapList = Coursechapter::where("courseId",$courseId)->get()->toJson();
        $courseinfo = Course::find($courseId); 
        
        if ($courseinfo) {
            $courseName = $courseinfo->courseName;
        }
        else{
            $courseName = " ";
        }
        
        $pageTitle = "Be and By course List";
    	return view("admin.home")->with(["courseId"=>$courseId,"chapList"=>$chapList,"pageTitle"=>$pageTitle,"courseName"=>$courseName]);
    }
    public function addcoursechapter($courseId)
    {
        $pageTitle = "Be and By course List";
    	return view("admin.home")->with(["pageTitle"=>$pageTitle]);
    }
    public function editcoursechapter($chapId)
    {
        $pageTitle = "Be and By course List";
    	return view("admin.home")->with(["pageTitle"=>$pageTitle]);
    }
    public function classSet($chapid,$courseid)
    {
        $pageTitle = "Be and By  : daily MCQs";
        return view("admin.home")->with(["pageTitle"=>$pageTitle]);
    }

    public function chapterList($courseId)
    {
        return Coursechapter::where("courseId",$courseId)->orderby("id","desc")->get()->toJson();
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    

    public function singleChapInfo($chapId)
    {
        return  Coursechapter::find($chapId)->toJson();
    }
    
   

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Coursechapter  $coursechapter
     * @return \Illuminate\Http\Response
     */
    





}
