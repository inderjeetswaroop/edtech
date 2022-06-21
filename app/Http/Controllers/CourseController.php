<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CourseRequest;
use App\Models\Course;
use App\Models\Courseclass;
use App\Models\Coursebundle;
use App\Models\Dailymcqdate;
use App\Models\Dailymcqquest;
use App\Models\Coursechapter;
use App\Http\Requests\CoursebundleRequest;
use App\Http\Requests\CoursechapterRequest;
use App\Http\Requests\CourseClassRequest;
use App\Http\Requests\TestseriesquestionRequest;
use App\Models\Testseriesquestion;

class CourseController extends Controller
{

	// Front pages
	public function coursedetail($courseName,$courseId)
	{
		$pageTitle = $courseName." : Be and By IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle,"courseId"=>$courseId]);
	}
	public function lawoptionalCourse()
	{
		$pageTitle = " : Be and By IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
	}
	public function personalityTest()
	{
		$pageTitle = " : Be and By IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
	}
	public function frontcourseList()
	{
		$pageTitle = " : Be and By IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
	}
	// Front pages
	public function courseFirstClass($courseId)
	{
		$info = Courseclass::where("courseId",$courseId)->first();
		if ($info) {
			return $info->toJson();
		}
		else {
			return false;
		}
		
	}
	
	public function singleCourseDetail($courseId)
	{
		$courseInfo = Course::find($courseId);
		return $courseInfo->toJson();
	}
	
	// Course Type
	public function CourseTypeDetail($courseId)
	{
		$courseInfo = Course::select("courseType")->where("id",$courseId)->first();
		return $courseInfo->toJson();
	}
	// Course Type

	public function courseSetting()
	{
		$pageTitle = "Be and By course List";
    	return view("admin.home")->with(["pageTitle"=>$pageTitle]);
	}
    public function courseList()
	{
		$courselist = Course::orderBy("id","desc")->get();
		return $courselist->toJson();
	}
	
	public function topcourse($courseNum = 3,$courseCatId=0)
	{
		if ($courseCatId == 0 || $courseCatId == "") {
			$courselist = Course::select('id','courseName','featureImg','price','discounted_price','courseCategory','courseStartDate','languages')->where("status",1)->take($courseNum)->orderBy("id","desc")->get();
		}
		else {
			$courselist = Course::select('id','courseName','featureImg','price','discounted_price','courseCategory','courseStartDate','languages')->take($courseNum)->where("status",1)->where("courseCategory",$courseCatId)->orderBy("id","desc")->get();
		}
		
		
		return $courselist->toJson();
	}
	public function addCourses()
	{
		
		$pageTitle = "Be and By IAS : Add Course";
		return view("admin.home")->with(["pageTitle"=>$pageTitle]);
	}
	
	public function addCourseData(CourseRequest $request){
		$courses = new Course;

		$courses->courseName = $request->courseName;
		$courses->courseGroup = $request->cGroup;
		$courses->courseBundleId = $request->bundleNaam;
		$courses->courseCode = $request->courseCode;
		$courses->price = $request->coursePrice;
		$courses->discounted_price = $request->discountPrice;
		$courses->shortDescription = $request->courseShortDescrip;
		$courses->teacherName = $request->teacherName;
		$courses->languages = $request->classLanguage;
		$courses->infoVideoLink = $request->infoVideo;
		$courses->priceNote = $request->priceNote;
		$courses->longDecription = $request->courseLongDescrip;
		$courses->courseStartDate = $request->courseStartDate;
		$courses->courseEndDate = $request->courseEndDate;
		$courses->classStartTime = $request->lectureStartTime;
		$courses->classEndTime = $request->lectureEndTime;
		$courses->courseDuration = $request->courseDuration;
		$courses->featuresPoints = $request->courseFeaturepoints;
		$courses->buyerNotes = $request->buyerNotes;
		$courses->courseCategory = $request->courseCategory;
		$courses->courseType = $request->courseType;
		$courses->positiveMark = $request->positiveMark;
		$courses->negativeMark = $request->negativeMark;
		$courses->mkeywords = $request->courseMetaKeyWord;
		$courses->mdescription = $request->courseMetaDescript;
		$courses->featureImg = $request->courseMainImage;
		$courses->parentCourse = $request->parentCourse;

		$courses->save();
	}




	public function changeCourseState(Request $request)
	{
		

		$state = $request->productState;
		$proid = $request->prosId;

		$proinfo = Course::find($proid);
		if ($state == 1 || $state == 2 || $state == 0) {
			$proinfo->status = $state;
		}
		else
		{
			$proinfo->status = '2';
		}
		$proinfo->save();
		$prolist = Course::orderBy("id","desc")->get(); 
		return $prolist->toJson();

	}

	public function editcourse($productId)
    {
        $pageTitle = "Be and By  : Edit Course";
        return view("admin.home")->with(["pageTitle"=>$pageTitle,"courseId"=>$productId]);
    }
	public function dailymcqs()
	{
		$pageTitle = "Be and By  : daily MCQs";
        return view("admin.home")->with(["pageTitle"=>$pageTitle]);
	}

	public function dailymcqsdatelist()
	{
		$list = Dailymcqdate::orderBy("id","desc")->get();
		return $list->toJson();
	}
	public function addmcqdateData(Request $request)
	{
		$mcqDate = new Dailymcqdate;
		
		$mcqDate->topic = $request->mcqTopic;
		$mcqDate->date = $request->mcqDate;
		$mcqDate->type = $request->mcqType;
		$mcqDate->instruction = $request->instruction;
		$mcqDate->save();

		$list = Dailymcqdate::orderBy("id","desc")->get();
		return $list->toJson();

	}
	public function updatemcqdateData(Request $request)
	{
		$mcquid = $request->mcqId;
		$mcqDate =Dailymcqdate::find($mcquid);
		
		$mcqDate->topic = $request->mcqTopic;
		$mcqDate->date = $request->mcqDate;
		$mcqDate->type = $request->mcqType;
		$mcqDate->instruction = $request->instruction;
		$mcqDate->save();

		$list = Dailymcqdate::orderBy("id","desc")->get();
		return $list->toJson();

	}
	public function deletemcqsDate($id)
	{
		$mcqDate =Dailymcqdate::find($id);
		$mcqDate->delete();
		
		$list = Dailymcqdate::orderBy("id","desc")->get();
		return $list->toJson();
	}
	public function addmcqQuest($id)
	{
		$pageTitle = "Be and By  : daily MCQs";
        return view("admin.home")->with(["pageTitle"=>$pageTitle]);
	}
	public function addmcqQuestData(Request $request)
	{
		$test = new Dailymcqquest;
        
        $test->dateId = $request->dateId;
        $test->question = $request->questions;
        $test->ansA = $request->ansa;
        $test->ansB = $request->ansb;
        $test->ansC = $request->ansc;
        $test->ansD = $request->ansd;
        $test->correctAns = $request->correctans;
        $test->answerJustification = $request->justification;

        $test->save();

        return Dailymcqquest::orderBy("id","desc")->where("dateId",$request->dateId)->get()->toJson();
	}
	public function editmcqQuestData(Request $request)
	{
		$questid = $request->questId;
		
		$test = Dailymcqquest::find($questid);
        $dateId = $test->dateId;

		$test->question = $request->questions;
        $test->ansA = $request->ansa;
        $test->ansB = $request->ansb;
        $test->ansC = $request->ansc;
        $test->ansD = $request->ansd;
        $test->correctAns = $request->correctans;
        $test->answerJustification = $request->justification;
        $test->save();
		
		return Dailymcqquest::orderBy("id","desc")->where("dateId",$dateId)->get()->toJson();
	}
	public function mcqQuestList($id)
	{
		return Dailymcqquest::orderBy("id","desc")->where("dateId",$id)->get()->toJson();
	}
	public function deleteMcqQuest($id)
	{
		$info = Dailymcqquest::find($id);
		$mcqDateId = $info->dateId;
		
		$info->delete();

		return Dailymcqquest::orderBy("id","desc")->where("dateId",$mcqDateId)->get()->toJson();
	}
	public function singleMcqQuest($id)
	{
		$info = Dailymcqquest::find($id);
		return $info->toJson();
	}

	public function singleCourseInfo($proid)
    {
        $proInfo = Course::find($proid);
        return $proInfo->toJson();

    }

	public function editCourseData(CourseRequest $request)
	{
		$courses = Course::find($request->courseId);
		$courses->courseName = $request->courseName;
		$courses->courseGroup = $request->cGroup;
		$courses->courseBundleId = $request->bundleNaam;
		$courses->courseCode = $request->courseCode;
		$courses->price = $request->coursePrice;
		$courses->discounted_price = $request->discountPrice;
		$courses->shortDescription = $request->courseShortDescrip;
		$courses->teacherName = $request->teacherName;
		$courses->languages = $request->classLanguage;
		$courses->infoVideoLink = $request->infoVideo;
		$courses->priceNote = $request->priceNote;
		$courses->longDecription = $request->courseLongDescrip;
		$courses->courseStartDate = $request->courseStartDate;
		$courses->courseEndDate = $request->courseEndDate;
		$courses->classStartTime = $request->lectureStartTime;
		$courses->classEndTime = $request->lectureEndTime;
		$courses->courseDuration = $request->courseDuration;
		$courses->featuresPoints = $request->courseFeaturepoints;
		$courses->buyerNotes = $request->buyerNotes;
		$courses->courseCategory = $request->courseCategory;
		$courses->courseType = $request->courseType;
		$courses->positiveMark = $request->positiveMark;
		$courses->negativeMark = $request->negativeMark;
		$courses->mkeywords = $request->courseMetaKeyWord;
		$courses->mdescription = $request->courseMetaDescript;
		$courses->featureImg = $request->courseMainImage;

		$courses->save();
	}


	public function deleteProduct($proid,$deltype)
	{
		$proinfo = Course::find($proid);
		if ($deltype == "perma") {
			$proinfo->delete();
		}
		else{
			$proinfo->deleted= 1;
			$proinfo->save();
		}

		$prolist = Course::orderBy("id","desc")->get(); 
		return $prolist->toJson();
	}

	public function restoreProduct($proid)
	{
		$proinfo = Course::find($proid);
		$proinfo->deleted= 0;
		$proinfo->save();
		$prolist = Course::orderBy("id","desc")->get(); 
		return $prolist->toJson();

	}
	
	public function interviewGuidance()
	{
		$pageTitle = "Interview Guidance : Be and By IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
	}

	public function bundleSetting()
	{
		$pageTitle = "Be and By course bundle setting";
    	return view("admin.home")->with(["pageTitle"=>$pageTitle]);
		
	}

	public function bundleList()
	{
		$bundlelist = Coursebundle::orderBy("id","desc")->get();
		return $bundlelist->toJson();
	}
	public function addnewbundle(CoursebundleRequest $request)
	{
		$bundle = new Coursebundle();
		$bundle->bundleName = $request->courseBundleName;
		$bundle->courses = $request->courseArr;
		$bundle->save();
	}

	public function onlyCourseList()
	{
		$courselist = Course::where("courseGroup",'1')->orderBy("id","desc")->get();
		return $courselist->toJson();
	}

	// Course Chapter Settings
	

	

	// Course Chapter Settings

	// course Classes Settings
	public function addnewClassdata(CourseClassRequest $request)
    {
            $courseclass = new Courseclass;
            
            $courseclass->topicName = $request->topicname;
            $courseclass->courseId = $request->courseId;
            $courseclass->chapterId = $request->chapterId;
            $courseclass->classType = $request->classtype;
            $courseclass->videoLink = $request->videoLink;
            $courseclass->chatlink = $request->chatlink;
            $courseclass->classPdf = $request->classPdf;
            $courseclass->classScript = $request->classScript;
            $courseclass->classMode = $request->classMode;
            $courseclass->classdate = $request->classdate;
            $courseclass->classTime = $request->classTime;

            $courseclass->save(); 

            
    }

	public function updateclass(CourseClassRequest $request)
    {
        $courseclass = Courseclass::find($request->classId);
            
        $courseclass->topicName = $request->topicname;
        $courseclass->classType = $request->classtype;
        $courseclass->videoLink = $request->videoLink;
        $courseclass->chatlink = $request->chatlink;
        $courseclass->classPdf = $request->classPdf;
        $courseclass->classScript = $request->classScript;
        $courseclass->classMode = $request->classMode;
        $courseclass->classdate = $request->classdate;
        $courseclass->classTime = $request->classTime;

        $courseclass->save(); 

        
    }
	// test  Question Setting
	public function addquestion(TestseriesquestionRequest $request)
    {
        $test = new TestseriesQuestion;
        
        $test->courseId = $request->courseId;
        $test->chapterId = $request->chapterId;
        $test->question = $request->questions;
        $test->ansA = $request->ansa;
        $test->ansB = $request->ansb;
        $test->ansC = $request->ansc;
        $test->ansD = $request->ansd;
        $test->ansE = $request->anse;
        $test->correctAns = $request->correctans;
        $test->answerJustification = $request->justification;

        $test->save();

        // return Coursechapter::where("courseId",$request->courseId)->get()->toJson();

    }

	public function updatequestion(TestseriesquestionRequest $request)
    {
        $test = TestseriesQuestion::find($request->testId);
        
        $test->question = $request->questions;
        $test->ansA = $request->ansa;
        $test->ansB = $request->ansb;
        $test->ansC = $request->ansc;
        $test->ansD = $request->ansd;
        $test->correctAns = $request->correctans;
        $test->answerJustification = $request->justification;

        $test->save();

        // return TestseriesQuestion::where("chapterId",$test->chapterId)->get()->toJson();

    }
	// test  Question Setting

}
