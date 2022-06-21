<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Requests\LeadRequest;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Requests\MentorshipuserRequest;
use App\Models\Mentorshipuser;
use App\Models\Lead;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Models\Payment;
use App\Models\Course;

class UserController extends Controller
{
    public function videoClass($className,$courseId,$classId)
    {
        $pageTitle = $className." - Be and By IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function userLogin()
    {
    	$pageTitle = "Login to account :Be and By IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function passwordReset()
    {
        $pageTitle = "Reset Password of account :Be and By IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function userInfo($userId)
    {
        return User::find($userId)->toJson();
    }
    public function authuserInfo()
    {
        return User::find(Auth::id())->toJson();
    }
    public function updateuserdata(Request $request)
    {
        $usrInfo = User::find(Auth::id());
        $this->validate($request,[
            "username" => "required | alpha"
        ]);
        
        $usrInfo->name = $request->username;
        $usrInfo->save();
    }

    public function passwordChange()
    {
        $pageTitle = "Change password :Be and By IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }

    public function passwordChangedata(Request $request)
    {
        $usrInfo = User::find(Auth::id());
        $this->validate($request,[
            "userPassword" => "required"
        ]);
        $usrInfo->password = Hash::make($request->userPassword);
        $usrInfo->save();
    }

    public function mycourse()
    {
        $pageTitle = "My Course :Be and By IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function editProfile()
    {
        $pageTitle = "Edit Profile :Be and By IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function userPaymentHistory()
    {
        $pageTitle = "My Course :Be and By IAS";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function mycourseList()
    {
        $userId = Auth::id();
        $paidCourse = array();
        $getPays = Payment::where("userId",$userId)->where("paymentStatus",1)->get();
                foreach ($getPays as $uPays){
                    $crsArr = explode(",",$uPays->courseId);
                    $paidCourse = array_merge($paidCourse,$crsArr);
                }
         $uCourse = Course::whereIn("id",$paidCourse)->get();
        //  print_r($paidCourse);
         return $uCourse->toJson();
        
    }

    public function userLogindata(UserRequest $request)
    {
        /* $usr = User::where("email",$request->userEmail)->where("password",$request->userpass)->first()->toJson();
        return $usr; */
        $user_data = array(

    		'email' => $request->get("userEmail"), 
			'password' => $request->get("userpass"),
            );
            
            if (Auth::attempt($user_data)) {
                // return Auth::id();    
                return response()->json(Auth::id(), 201);
            }else{
                return response()->json(['error'=>'invalid Credentials'], 400);
            }
            

    }
    
    public function logout()
    {
        Auth::logout();
    }

    public function checkSession()
    {
        if (Auth::id()) {
            $userInfo = User::find(Auth::id());
            return array(
                "sessionReady"=>"yes",
                "userInfo"=> $userInfo
            );
            
        }
        else{
            return array(
                "sessionReady"=>"no"
            );
            
        }
    }

    public function phoneRegistration()
    {
        $pageTitle = "Login to account :Be and By IAS";
        return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function userRegistration()
    {   
        $pageTitle = "Login to account :Be and By IAS";
        return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function userRegistrationData(UserRegisterRequest $request)
    {
        $usr = new User;
        $checkUser = $usr::where("email",$request->useremail)->orWhere("phoneNumber",$request->userphone)->first();
        if ($request->uphoneVerified) {
            $phoneV = 1;
        }else{
            $phoneV = 0;
        }
        
        if ($request->uemailVerified) {
            $emailV = 1;
        }else{
            $emailV = 0;
        }

        $usr->name = $request->username;
        $usr->email = $request->useremail;
        $usr->phoneNumber = $request->userphone;
        $usr->mobileVerified = $phoneV;
        $usr->emailVerified = $emailV;
        $usr->password = Hash::make($request->userpass);
        $usr->save();
        
    }

    public function customerDashboard()
    {
    	$pageTitle = "My Dashboard : Be and By IAS";
    	return view("dashboard")->with(["pageTitle"=>$pageTitle]);	
    }
    public function forgotPass()
    {
    	$pageTitle = "Reset your forgot password : Be and By IAS";
    	return view("forget-pwd")->with(["pageTitle"=>$pageTitle]);	
    }

    public function wishList()
    {
    	$pageTitle = "My Wishlist :Be and By IAS";
    	return view("wishlist")->with(["pageTitle"=>$pageTitle]);
    }

    public function compare()
    {
    	$pageTitle = "Compared Product List :Be and By IAS";
    	return view("compare")->with(["pageTitle"=>$pageTitle]);
    }

    public function collectionsProducts()
    {
    	$pageTitle = "My collection product list :Be and By IAS";
    	return view("collection")->with(["pageTitle"=>$pageTitle]);
    }

    public function sellerDashboard()
    {
        return view('admin/index');
    }

    public function addFormLeads(LeadRequest $request)
    {
        $leads = new Lead;
        $leads->name = $request->userName;
        $leads->email = $request->userEmail;
        $leads->phone = $request->userPhone;
        $leads->interestedCourse = $request->userInrest;
        
        $leads->save();
        
        
    }

    public function userList()
    {
        return view('admin/user-list');

    }
    public function userPurchaseHistory($userId)
    {
        return view('admin/user-purchsae-history')->with(["userId"=>$userId]);
    }
    public function allusers()
    {
        $users = User::orderBy('id',"desc")->get();
        return $users->toJson();
    }

    public function editUser(Request $request)
    {
        $this->validate($request,[
            "useremail"=>"required|email",
            "username"=> "required",
            "userphone"=> "required|digits:10",
        ]);
        
        if ($request->uphoneVerified) {
            $phoneV = 1;
        }else{
            $phoneV = 0;
        }
        
        if ($request->uemailVerified) {
            $emailV = 1;
        }else{
            $emailV = 0;
        }
        
        $user = User::find($request->userid);

        $user->name = $request->username;
        $user->email = $request->useremail;
        $user->phoneNumber = $request->userphone;
        $user->mobileVerified = $phoneV;
        $user->emailVerified = $emailV;
        
        $user->save();


    }
    public function updatePass(Request $request)
    {
        $this->validate($request,[
            "password"=>"required",
        ]);

        $user = User::find($request->userid);    
        $user->password = Hash::make($request->password);
        $user->save();

    }

    public function phoneVerification(Request $request)
    {
        $validatedData = $this->validate($request,[
            "userphone"=> "required|digits:10|numeric",
        ]);

        if ($validatedData) {
            $phone = $request->userphone;
            $checkDuplicate = User::where("phoneNumber",$phone)->get();
            if(!$checkDuplicate->isEmpty()){
                return "duplicate";
            }
            else {
                    $otp = rand(10000,99999);
                    $api_key = '55EEB1E96AC4DB';
                    $msg = "Your OTP is: ".$otp." for Subscription in Be N By IAS. Do not share the OTP with anyone.";
                    if ($otp) {
        
                        $sms_text = urlencode($msg);
                        $api_url = "http://websms.smsxperts.com/app/smsapi/index.php?key=55EEB1E96AC4DB&campaign=o&routeid=45&type=text&contacts=$phone&senderid=BNBIAS&msg=$sms_text&template_id=1707163090391381499";
        
                        $response = file_get_contents($api_url);
                        if ($response) {
                            return $otp;
                        }
                        else {
                            return "try";
                        }
                        
                    }
            }
            
        
        }
    }


    public function passResetOtp(Request $request)
    {
        $validatedData = $this->validate($request,[
            "userphone"=> "required|digits:10|numeric",
        ]);

        if ($validatedData) {
            $phone = $request->userphone;
            $checkphone = User::where("phoneNumber",$phone)->get();
            if($checkphone->isEmpty()){
                return "notFound";
            }
            else {
                    $otp = rand(100000,999999);
                    $api_key = '55EEB1E96AC4DB';
                    $otpDate = date("Y-m-d H:i:s");
                    $msg = "Your OTP is: ".$otp." at ".$otpDate." for reset password in Be N By IAS. Do not share the OTP with anyone.";
                    if ($otp) {
        
                        $sms_text = urlencode($msg);
                        $api_url = "http://websms.smsxperts.com/app/smsapi/index.php?key=55EEB1E96AC4DB&campaign=o&routeid=45&type=text&contacts=$phone&senderid=BNBIAS&msg=$sms_text&template_id=1707163291626545772";
        
                        $response = file_get_contents($api_url);
                        if ($response) {
                            return $otp;
                        }
                        else {
                            return "try";
                        }
                        
                    }
            }
            
        
        }
    }
    public function changepassword(Request $request)
    {
        $validatedData = $this->validate($request,[
            "passwordOne"=> "required",
            "userphone"=> "required|digits:10|numeric",
        ]);
        if ($validatedData) {
            $phone = $request->userphone;
            $usrInfo  = User::where("phoneNumber",$phone)->first();
            $usrInfo->password = Hash::make($request->passwordOne);
            if ($usrInfo->save()) {
                return "success";
            }   
            else {
                return "error";
            }
        }
    }

    public function interviewguidRegister(MentorshipuserRequest $request)
    {
        $user = new Mentorshipuser();
        $user->name = $request->username;
        $user->email = $request->useremail;
        $user->phone = $request->userphone;
        $user->dob = $request->userdob;
        $user->address = $request->useraddress;
        $user->optional = $request->useroptional;
        $user->upscRollno = $request->userrollnumber;
        $user->city = $request->usercity;
        $user->state = $request->userstate;
        $user->upscInterviewDate = $request->upscInterviewDate;
        $user->interViewMedium = $request->interviewMode;
        $user->dafPdfLink = $request->DafFileUrl;
        $user->mockInterviewDate = $request->mockInterview;

        $user->save();
        
    }

    public function interviewUsers()
    {
        return view('admin/interview-registration');
    }

    public function interviewUsersList()
    {
        $allUser = Mentorshipuser::orderBy('id', 'desc')->get();
        return $allUser->toJson();
    }

    public function searchbycourseid($cid)
    {
        $usrList = DB::table('users')
            ->leftJoin('payments', 'users.id', '=', 'payments.userId')
            ->where("payments.courseId",$cid)
            ->get();
            return $usrList->toJson();
    }
    public function searchbykeys(Request $request)
    {
        $searchKey = $request->search;
        $result = User::where('name', 'LIKE', '%' . $searchKey . '%')
        ->orWhere("email", 'LIKE', '%' . $searchKey . '%')
        ->orWhere("phoneNumber", 'LIKE', '%' . $searchKey . '%')
        ->get();
        
        return $result->toJson();    
    }

}
