<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Request;
use App\Http\Requests\paymentsRequest;
use App\Models\Payment;
use Razorpay\Api\Api;
use Illuminate\Support\Str;
use App\Models\Course;
use App\Models\Coursebundle;

class CheckoutController extends Controller
{
    private $razorpayId = "rzp_live_Qa5J2FzRHw8TSU";
    private $razorpayKey = "CWnXJvU8yic4pYXTw3vJJ1rR";

    public function checkout()
    {
    	$pageTitle = "Checkout your order safely : E-commerce ";
    	return view("index")->with(["pageTitle"=>$pageTitle]);
    }
    public function checkoutform(paymentsRequest $request)
    {
        $userId = Auth::id();
        if ($userId) {
            if (\Cart::isEmpty()) 
                {
                    return array("error"=>"Cart is empty");
                }
                else{
                        // Check for already purchased order
                        $paidCourse = array();
                           $courseTrigger = 0; // this trigger will set to 1 if there is already paid course.
                            $getPays = Payment::where("userId",$userId)->where("paymentStatus",1)->get();
                               foreach ($getPays as $uPays){
                                   $crsArr = explode(",",$uPays->courseId);
                                    $paidCourse = array_merge($paidCourse,$crsArr);
                               }
                            // print_r($paidCourse);
                            
                            $courseIds=array();
                            $content = \Cart::getContent();
                                foreach ($content as $cartItem){
                                    if (in_array($cartItem->id,$paidCourse)) {
                                        $courseTrigger = 1;
                                        break;
                                    }
                                    $courseInfo = Course::find($cartItem->id);
                                    if ($courseInfo->courseGroup == 0) {
                                        $bundleinfo = Coursebundle::find($courseInfo->courseBundleId);
                                        $bundleCourseArr = explode(",",$bundleinfo->courses);
                                        $courseIds = array_merge($courseIds,$bundleCourseArr);
                                    }
                                    else{
                                        array_push($courseIds,$cartItem->id);
                                    }
                                    
                                }
                            $courses = implode(",",$courseIds);

                           if ($courseTrigger == 1) {
                                return array("auth"=>"Please remove course from cart you already purchsed. Some course is already purchased in your cart.");
                           }
                           else {
                                    $api = new Api($this->razorpayId, $this->razorpayKey);
                                    $receiptId = Str::random(20);
                                    // 
                                    $payamount = \Cart::getTotal();
                                    // 
                                    $order = $api->order->create(array(
                                            'receipt' => $receiptId,
                                            'amount' => $payamount*100,
                                            'currency' => 'INR'
                                        )
                                    );
                                    /* imp. Note : there is payment amount limit from razorpay so be carefull for payment above 1 lac */
                                    $pays = new Payment;
                                    $pays->fname = $request->fname;
                                    $pays->lname = $request->lname;
                                    $pays->email = $request->email;
                                    $pays->phone = $request->phone;
                                    $pays->address = $request->address;
                                    $pays->orderId = $order["id"];
                                    $pays->description= "testing description";
                                    $pays->amount = $payamount;
                                    $pays->courseId = $courses;
                                    $pays->userId = $userId;
                                    
                                    $pays->save(); 
                                // Setting session of payment
                                session(['payId' => $pays->id]);
                                        
                                // Setting session of payment 
                           }


                        // Check for already purchased order
                   

                }
        }
        else {
            return array("auth"=>"Session is out Please login!");
        }
        
        
       

    }

    public function checkoutPay()
    {
        $razorpayId = $this->razorpayId;
        $payId = session('payId');
        $payInfo = Payment::find($payId);
        return view("paymentView")->with(["payInfo"=>$payInfo,"razorpayId"=>$razorpayId]);
        
    }

    public function completePayment(Request $request)
    {
        // here we will check payment signature
        $payId = session('payId');
        $rzpSign = $request->all()["rzp_signature"];
        $rzpPayId = $request->all()["rzp_paymentid"];
        $rzpOdrId = $request->all()["rzp_orderid"];
        $signatureStatus = $this->signatureVerify(
            $rzpSign,
            $rzpPayId,
            $rzpOdrId
        );
        if ($signatureStatus == true) {
            $payInfo = Payment::find($payId);
            $payInfo->rzp_paymentId = $rzpPayId;
            $payInfo->rzp_paySignature = $rzpSign;
            $payInfo->rzp_orderid = $rzpOdrId;
            $payInfo->paymentStatus = 1;
            $payInfo->accessFrom = date("Y-m-d h:i:s");
            $payInfo->accessTo = date('Y-m-d h:i:s', strtotime('+1 year', strtotime(date("Y-m-d h:i:s"))));
            $payInfo->save();
            session()->forget('payId');
            \Cart::clear();
            
            $state = 1;
        }
        else {
            $state = 0;
        }

    return view('payStatus')->with(["state"=>$state,"pageTitle"=>"Payment Status"]);

    }

//  in this function will return boolean if signature is correct
    private function signatureVerify($_signature,$_paymentId,$_orderId)
    {
        try {
            $api = new Api($this->razorpayId, $this->razorpayKey);
            $attributes  = array('razorpay_signature'  => $_signature,  'razorpay_payment_id'  => $_paymentId ,  'razorpay_order_id' => $_orderId);
            $order  = $api->utility->verifyPaymentSignature($attributes);
            return true;
        } catch (\Exception $th) {
            return false;
        }
    }

    public function myPaymentHistory()
    {
        $userId = Auth::id();
        $getPays = Payment::where("userId",$userId)->orderBy("id","desc")->get();
        /* foreach ($getPays as $uPays){
            $crsArr = explode(",",$uPays->courseId);
             $paidCourse = array_merge($paidCourse,$crsArr);
        } */
        return $getPays->toJson();
    }
    
    public function userPaymentHistory($userId)
    {
        $getPays = Payment::where("userId",$userId)->orderBy("id","desc")->get();
        return $getPays->toJson();
    }
    public function courseAccessData(Request $request)
    {
        $this->validate($request,[
            "userFname"=>"required",
            "userLname"=>"required",
            "courseName"=>"required",
            "cAmount"=>"required|numeric",
            "userEmail"=>"required",
            "userPhone"=>"required",
            "startDate"=>"required",
            "endDate"=>"required",
            "userId"=>"required",
        ]);

        
        
        $courseId = $request->courseName;
        $userId = $request->userId;
        $paidCourse = array();
        $courseTrigger = 0; // this trigger will set to 1 if there is already paid course.
        $getPays = Payment::where("userId",$userId)->where("paymentStatus",1)->get();
            foreach ($getPays as $uPays){
                $crsArr = explode(",",$uPays->courseId);
                $paidCourse = array_merge($paidCourse,$crsArr);
            }
            
            if (in_array($courseId,$paidCourse)) {
                $courseTrigger = 1;
                
            }  

            if ($courseTrigger == 0) {
                $pays = new Payment;    
                $pays->fname = $request->userFname;
                $pays->lname = $request->userLname;
                $pays->email = $request->userEmail;
                $pays->phone = $request->userPhone;
                $pays->courseId = $courseId;
                $pays->amount = $request->cAmount;
                $pays->accessFrom = $request->startDate;
                $pays->accessTo = $request->endDate;
                $pays->userId = $userId;
                $pays->description = $request->paymentNote;
                $pays->paymentStatus = 1;

                $pays->save();
            }
            else{
                return array(
                    "error"=>"yes",
                    "auth"=>"This user already has access of this course."
                );
            }
    }


    public function accessstatus($paymentId)
    {
        $pInfo = Payment::find($paymentId);
        if ($pInfo->paymentStatus == 0) {
            $pInfo->paymentStatus = 1;
        }
        else{
            $pInfo->paymentStatus = 0;
        }
        
        
        if($pInfo->save()){
            return array(
                "status"=>"yes",
            );
        }
        else
        {
            return array(
                "status"=>"no",
            ); 
        }    

    }


}
