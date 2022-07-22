<?php

namespace App\Http\Controllers;
use Auth;
use App\Models\Courseclass;
use App\Models\Coursechapter;
use Illuminate\Http\Request;
use App\Models\Testseriesquestion;
use App\Models\Usertestresult;
use App\Models\Course;
use App\Models\Payment;

class CourseclassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function addnewclass($chapId,$courseid)
    {
        $pageTitle = "Add Chapter Class";
    	return view("admin.home")->with(["pageTitle"=>$pageTitle]);    
    }
    public function editclass($classid)
    {
        $pageTitle = "Add Chapter Class";
    	return view("admin.home")->with(["pageTitle"=>$pageTitle]);    
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function singleClassInfo($classId)
    {
        $myClassInfo = Courseclass::find($classId);
        return $myClassInfo->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Courseclass  $courseclass
     * @return \Illuminate\Http\Response
     */
    public function chapterClassList($chaptId)
    {
        $classList = Courseclass::where("chapterId",$chaptId)->orderBy("created_at","desc")->get();
        return $classList->toJson();
    }

    public function userchapterClassList($chaptId,$courseId)
    {
        $userId = Auth::id();
        $paidCourse = array();
        $courseStartDate = "";
        $courseEndDate = "";
        $getPays = Payment::where("userId",$userId)->where("paymentStatus",1)->get();
                foreach ($getPays as $uPays){
                    $crsArr = explode(",",$uPays->courseId);
                   if (in_array($courseId,$crsArr)) {
                    //    echo $courseId;
                       $courseStartDate = $uPays->accessFrom;
                       $courseEndDate = $uPays->accessTo;
                       
                   } 
                
           }
           /* $uCourse = Course::whereIn("id",$paidCourse)->get();
           print_r($uCourse); */
        //    echo $courseStartDate."<br>";
        //    echo $sFrom = date("Y-m-d", strtotime($courseStartDate));
        //    echo $sTo = date("Y-m-d", strtotime($courseEndDate));
        // echo "<br>".date('Y-m-d h:i:s', strtotime('+1 year', strtotime($courseStartDate)));
        $classList = Courseclass::where("chapterId",$chaptId)->where('classdate','>=',$courseStartDate)->where("classdate","<",$courseEndDate)->orderBy("created_at","desc")->get();
        // $classList = Courseclass::where("chapterId",$chaptId)->orderBy("created_at","desc")->get();
        return $classList->toJson();
    }

    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Courseclass  $courseclass
     * @return \Illuminate\Http\Response
     */
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Courseclass  $courseclass
     * @return \Illuminate\Http\Response
     */
    public function destroy(Courseclass $courseclass)
    {
        //
    }

    

    public function chapterTestList($chapterId)
    {
        $testList = TestseriesQuestion::where("chapterId",$chapterId)->get();
        return $testList->toJson();
    }

    public function SingletestDetail($testId)
    {
        return TestseriesQuestion::find($testId)->toJson();   
    }

    public function courseFirstTest($courseId)
	{
		$info = Coursechapter::where("courseId",$courseId)->first();
		return $info->toJson();
	}

    
    public function submittestans(Request $request)
    {
        if (Auth::id()) {
            $userTest = new Usertestresult;
            $userId = Auth::id();
            $chapterId = $request->chapterId;
            $chapInfo = Coursechapter::find($chapterId);

            $userTest->courseId = $chapInfo->courseId;
            $userTest->chapId = $chapterId;
            $userTest->userId = $userId;
            $userTest->testAns = $request->submitedAns;
            if ($userTest->save()) {
                
                $resultId = $userTest->id;
                return array(
                    "msg"=>"test Submitted successfully",
                    "status" =>"success",
                    "submitTest" =>$resultId,
                );
            }
            else {
                return array(
                    "msg"=>"Test is not Submitted successfully! Please try again",
                    "status" =>"failed",
                );
            }

        }
        else{
            return array(
                "msg"=>"Your login session is expired please login",
                "status" =>"failed",
            );
            
            
        }
    }

    public function testresult($submitedTestId)
    {
        $wrongANS = 0;
        $wrongANScount = 0;
        $correctAns = 0;
        $correctAnscount = 0;
        $notAnsweredCount = 0;
        $i=1;
        $userId = Auth::id();
        $singrow = Usertestresult::find($submitedTestId);
        $arr = explode(",",$singrow->testAns);
        
        $originalTest = Testseriesquestion::where("chapterId",$singrow->chapId)->get();
        $courseInfo = Course::find($singrow->courseId);
        $totalQuest = count($originalTest);
        foreach ($originalTest as $quest) {
                // echo $quest->correctAns." -- ",$arr[$i];
                if (array_key_exists($i,$arr)) {
                    if ($quest->correctAns == $arr[$i]) {
                        // echo " -correct";
                        $correctAns = $correctAns + $courseInfo->positiveMark;
                        $correctAnscount++;
                    }
                    elseif ($arr[$i] == "") {
                        // echo " -Not answered";
                        $notAnsweredCount++;
                    }
                    else{
                        // echo " -wrong";
                        $wrongANS = $wrongANS + $courseInfo->negativeMark;
                        $wrongANScount++;
                    }
                }
                else{
                    $notAnsweredCount++;
                }
                
                // echo "<br>";
                $i++;
        }
        return array(
            "negativeMark" => $courseInfo->negativeMark,
            "positiveMark" => $courseInfo->positiveMark,
            "notAnsweredCount"=>$notAnsweredCount,
            "wrongAns"=> $wrongANS,
            "wrongANScount"=>$wrongANScount,
            "correctAns" => $correctAns,
            "correctAnscount" =>$correctAnscount,
            "totalQuest" => $totalQuest,
            "ansArr" =>$arr,
            "originalTest" =>$originalTest
            
        );
       
    }

    public function userTestAttemptsresults($chapId)
    {
        $userId = Auth::id();
        $userAttempts = Usertestresult::where("userId",$userId)->where("chapId",$chapId)->get();
        return $userAttempts->toJson();
        
    }

    public function userTestAttempts($chapId)
    {
        
        $userId = Auth::id();
        $userAttempts = Usertestresult::select("id","created_at")->where("userId",$userId)->where("chapId",$chapId)->get();
        $totalTestAttempts = Coursechapter::find($chapId);
        if ($userId) {
                $d = date_create($totalTestAttempts->testSchedule);
                $testDate = date_format($d,"Y-m-d H:i:s");
                if ($testDate < date('Y-m-d H:i:s')) {
                    
                   $testReady = 1;
                }
                else{
                   $testReady = 0;
                }
                
            return array(
                "userAttemptscounts"=>count($userAttempts),
                "testInstruction"=> $totalTestAttempts->topicNotes,
                "totalTestAttempts" =>$totalTestAttempts->attempts,
                "testSchedule" =>$totalTestAttempts->testSchedule,
                "testReadytoStart"=>$testReady,
                "msg" =>"success",
            );
        }
        else{
            return array(
                "msg" =>"failed",
            );
        }
    }

    public function testresultpage($chapterName,$chapId)
    {
        $pageTitle = $chapterName." : Be and By IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }

    public function deleteCourseClass($classId)
    {
        $cinfo = Courseclass::find($classId);
        $chapid = $cinfo->chapterId;
        $cinfo->delete();

        $classList = Courseclass::where("chapterId",$chapid)->orderBy("created_at","desc")->get();
        return $classList->toJson();
    }

}
