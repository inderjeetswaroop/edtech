<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coursechapter;
use App\Http\Requests\CoursechapterRequest;
use App\Models\Course;


class ChapterController extends Controller
{
    public function chaplist($courseId)
    {
        $pageTitle = "Be and By IAS : Add Course";
		return view("admin.home")->with(["pageTitle"=>$pageTitle]);
    }
    
    public function addnewchapterdata(CoursechapterRequest $request)
    {
          $chapters = new Coursechapter;
          $chapters->chaptername = $request->chaptername;
          $chapters->chapDuration = $request->chapterduration;
          $chapters->topicNotes = $request->topicnotes;
          $chapters->attempts = $request->attempts;
          $chapters->testSchedule = $request->scheludTime;
          $chapters->courseId = $request->corseId;

          $chapters->save();  
    }
    
    public function singleChapInfo($chapId)
    {
        return  Coursechapter::find($chapId)->toJson();
    }
    
    public function updatechapter(CoursechapterRequest $request)
    {
        $chapters = Coursechapter::find($request->chapid);
        $chapters->chaptername = $request->chaptername;
          $chapters->chapDuration = $request->chapterduration;
          $chapters->topicNotes = $request->topicnotes;
          $chapters->attempts = $request->attempts;
          $chapters->testSchedule = $request->scheludTime;
          $courseId = $chapters->courseId;

          $chapters->save();
    }
    
    public function deletechapter(Request $request)
    {
        $chapterId = $request->chapId;
        $chapters = Coursechapter::find($chapterId);
        $courseId = $chapters->courseId;
        
        $chapters->delete();
        
        return Coursechapter::where("courseId",$courseId)->orderby("id","desc")->get()->toJson();

        
    }

}
