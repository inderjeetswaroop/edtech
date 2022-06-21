<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();
Route::get("/testing","NormPageController@testing");
Route::get("/testing2","NormPageController@testing2");
Route::get("/homepage","NormPageController@home")->name("home");
Route::get("/","NormPageController@index")->name("homepage");

// 404
	route::get("/wp-includes/{nam}/{name?}/{sname?}",function () {
		echo "hello";
	});
// 404

// course

	//course
	Route::get("top-courses/{courseNum?}/{corsecatId?}","CourseController@topcourse")->name("threeCourse");
	Route::get("front-fetch-single-category/{catid}","CategoryController@singleCatDetail")->name("singCat");	
	Route::get("course/{coursename}/{courseId}","CourseController@coursedetail")->name("homepage");
	Route::get("front-single-course-detail/{id}","CourseController@singleCourseDetail")->name("singleCourseDetail");
	Route::get("course-type-detail/{id}","CourseController@CourseTypeDetail");
	Route::get("course-list/{courseCatName?}/{courseCatid?}","CourseController@frontcourseList")->name("frontcourseList");
	Route::get("course-first-class-info/{courseId}","CourseController@courseFirstClass");
	Route::get("course-first-test-info/{courseId}","CourseclassController@courseFirstTest");
	Route::get("interview-guidance-program-upsc-cse-2021","CourseController@interviewGuidance");
	Route::get("LawOptional","CourseController@lawoptionalCourse");
	Route::get("PersonalityTest","CourseController@personalityTest");
	//course

	// copurse Cat
	Route::get("course-category-list","CategoryController@categoryList");
	// copurse Cat

	// Userleads
	Route::post("add-lead-data","242@addFormLeads")->name("addLead");

	// Userleads

	//blogs
		Route::get("top-articles/{blogNum?}","BlogController@topblogs")->name("topblogs");
		Route::get("article/{articleName}/{articleId}","BlogController@singleArticleInfo");
		Route::get("single-blog-info/{id}","BlogController@singleBlogInfo");
		Route::get("all-articles","BlogController@allarticle");
		Route::get("get-all-articles","BlogController@getallarticle");
		
		
		// Search
			Route::get("search/{query?}","BlogController@searchresult");	
			Route::get("get-search-result/{searchKey}/{searchType}","BlogController@blogqueryResult");	
			
		// Search
		// blog cat
			Route::get("front-blog-category-list","BlogController@homepageblogcat");
			Route::get("ncert-books-download","BlogController@ncertCat");
			Route::get("previous-year-quest-paper","BlogController@preyearQuestPapercat");
			Route::get("front-blog-list-cat-wise/{catId?}","BlogController@blogListCatwise2");
			Route::get("post-category/{catName}/{catId}","BlogController@postCatList");
			Route::get("front-single-blog-cat-info/{id}","BlogController@singleCatInfo");
		// blog cat
		// blog tag
		Route::get("latest-tags-list/{number?}","BlogController@tagsList");

		// blog tag	
		
		//blog Subject
		Route::get("all-subject-list","BlogController@subjectList");	
		//blog Subject
	//blogs


	// user 
		// Check login session
		Route::get("check-user-session","UserController@checkSession");
		// Check login session

	Route::get("user-login","UserController@userLogin")->name("ulogin");
	Route::post("user-login-data","UserController@userLogindata")->name("ulogindata");

	Route::get("password-reset","UserController@passwordReset");
	Route::post("user-password-reset-otp","UserController@passResetOtp");
	Route::post("change-password","UserController@changepassword");
	
	Route::post("user-phone-verification","UserController@phoneVerification");
	Route::post("user-interview-guidance-registration","UserController@interviewguidRegister");
	
	Route::post("user-register-data","UserController@userRegistrationData")->name("usignupdata");
	Route::get("complete-user-registration","UserController@userRegistration")->name("uregistration");
	Route::get("user-registration","UserController@phoneRegistration");
	Route::get("forgot-password","UserController@forgotPass")->name("forgotPass");
	Route::get("logout","UserController@logout")->name("logout");
	Route::get("single-user-detail/{userId}","UserController@userInfo");
	Route::get("edit-profile","UserController@editProfile");
	Route::get("auth-single-user-detail","UserController@authuserInfo");
	Route::post("update-user-data","UserController@updateuserdata");
	Route::get("my-course","UserController@mycourse");
	Route::get("my-course-list","UserController@mycourseList");
	Route::get("course/{courseName}/{className}/{courseId}/{classId}","UserController@videoClass");
	Route::get("get-class-info/{id}","CourseclassController@singleClassInfo")->name("getClassinfo");
	Route::get("purchase-history-dashboard","UserController@userPaymentHistory");
	Route::get("myPaymentHistory","CheckoutController@myPaymentHistory");
	Route::get("update-password","UserController@passwordChange");
	Route::post("update-user-password-data","UserController@passwordChangedata");
	Route::get("user-courseclass-list/{chapid}/{courseId}","CourseclassController@userchapterClassList");
	
	
	Route::get("user-test-list/{chapid}","CourseclassController@chapterTestList");
	
	// submit test Asnwer
	Route::post("submit-test-answer","CourseclassController@submittestans");
	// Route::get("submit-test-result","CourseclassController@testresult");
	Route::get("user-test-attempts/{chapterId}","CourseclassController@userTestAttempts");
	Route::get("user-test-attempts-results/{chapterId}","CourseclassController@userTestAttemptsresults");
	
	// test result
		Route::get("test-result-calculation/{testId}","CourseclassController@testresult");
		Route::get("test-result/{testName}/{chapterId}/{submittestId?}","CourseclassController@testresultpage");

	// test result
		
		// front pages
		Route::get("about-us/why-us","NormPageController@aboutUs");
		Route::get("about-us/our-vision-and-mission","NormPageController@visionMission");
		Route::get("about-us/director-message","NormPageController@directorMessage");
		Route::get("about-ias","NormPageController@aboutIas");
		Route::get("privacy-policy","NormPageController@privacypolicy");
		Route::get("terms-and-condition","NormPageController@tnc");
		Route::get("refund-and-cancellation-policy","NormPageController@refundpolicy");
		Route::get("free-downloads/download-ncert-books","NormPageController@ncertbooks");
		Route::get("free-downloads/previous-year-question-paper","NormPageController@preyrquest");
		Route::get("strategy-for-preparation-of-law-optional","NormPageController@whychooseLaw");

		Route::get("free-mock-test","BlogController@freemocktest");
		Route::get("free-mock-test/{mcqdate}/{dateId}","BlogController@freemocktestQuestion");
		Route::get("single-mcq-date-info/{dateId}","BlogController@singleMcqDateInfo");
		Route::get("front-mock-test-date-list/{type}","BlogController@frontMcqDate");
		Route::get("free-mock-mcq-quest-list/{id}","CourseController@mcqQuestList");	
		Route::get("daily-questionary","BlogController@freemocktest");
		
		// front pages
	// User 
		
	
// public queries



// Contact
Route::get("contact-us","NormPageController@contactUs")->name("contact");
// Contact

// About Us
Route::get("about-us","NormPageController@aboutUs")->name("about");
// About Us

// 404
Route::get("404-not-found","NormPageController@notFound")->name("noPage");
// 404

// faq
Route::get("faq","NormPageController@faq")->name("faq");
// faq

// slider List
	Route::get("home-all-slider","SliderController@homeslides");
// slider List

// Account




Route::prefix("account")->group(function(){
	Route::prefix("customer")->group(function(){
			Route::get("interview-registration","UserController@interviewUsers")->name("interviewUser");
			Route::get("interview-registration-user-list","UserController@interviewUsersList");
			Route::get("user-list","UserController@userList")->name("userSetting");
			Route::get("user-purchsae-history/{userid}","UserController@userPurchaseHistory");
			Route::get("user-payment-history/{userid}","CheckoutController@userPaymentHistory");
			Route::post("user-course-access-data","CheckoutController@courseAccessData")->name("courseAccessData");
			Route::get("access-status-change/{payId}","CheckoutController@accessstatus");
			Route::get("all-users","UserController@allusers");
			Route::post("user-edit-data","UserController@editUser");
			Route::post("updated-user-password-data","UserController@updatePass");
			
			Route::get("user-dashboard","UserController@customerDashboard")->name("cDash");
			// wishList
			Route::get("my-wishlist","UserController@wishList")->name("wishlist");
			// Wishlist

			//  Compare
			Route::get("compared-product-list","UserController@compare")->name("compare");
			// Compare

			//  Collection
			Route::get("my-collections","UserController@collectionsProducts")->name("collection");
			// Collection

			// search
			Route::get("search-by-courseId/{courseId}","UserController@searchbycourseid");
			Route::post("search-by-keys","UserController@searchbykeys")->name("searchme");
			
			// search
	});
	Route::prefix("online-seller")->group(function(){
		Route::get("seller-dashboard","UserController@sellerDashboard")->name("sDash");
	});
	
});
// Account
// Products section
Route::prefix("product")->group(function(){
	Route::get("detail","ProductController@productDetail")->name("proDetail");
});

// Admin Login
	Route::get("benby-admin","Admin@index");	
// Admin Login

// Admin landing after Login
	Route::get("benby-admin-home","Admin@home")->name("adminhome");	
// Admin landing after Login	


// Course Section
Route::prefix("course-dashboard")->group(function(){

	// new chpater Settings
		Route::get("single-chapter-info/{chapId}","ChapterController@singleChapInfo");
		Route::get("chapter-list/{courseId}","ChapterController@chaplist");
		Route::get("add-new-chapter/{courseId}","ChapterController@chaplist");
		Route::post("add-new-chapter-data","ChapterController@addnewchapterdata");
		Route::get("edit-chapter/{chapterId}","ChapterController@chaplist");
		Route::post("edit-chapter-data","ChapterController@updatechapter");
		Route::post("delete-chapter","ChapterController@deletechapter");
	// new chapter Setting

	// course Chapter
	

	Route::prefix("course-chapter")->group(function(){
		Route::get("classes/{chapid}/{courseId}","CoursechapterController@classSet")->name("classset");
		// Route::get("chapter-setting/{courseId}","CoursechapterController@index")->name("chapsetting");
		// Route::get("add-chapter/{courseId}","CoursechapterController@addcoursechapter")->name("addchapsetting");
		// Route::get("edit-chapter/{chapId}","CoursechapterController@editcoursechapter")->name("editchapsetting");
		Route::get("single-course-all-chapter-list/{courseId}","CoursechapterController@chapterList")->name("allchaps");
		
		
		
		// Route::post("update-chapter","CourseController@updatechapter");
		
		});
	// course Chapter

	// daily mcq section
	Route::get("daily-mcq-setting","CourseController@dailymcqs");	
	Route::get("mcsdatelist","CourseController@dailymcqsdatelist");	
	Route::post("addmcqdateData","CourseController@addmcqdateData");
	Route::post("updatemcqdateData","CourseController@updatemcqdateData");
	Route::get("deletemcqDate/{id}","CourseController@deletemcqsDate");	
	
	Route::get("add-question-daily-mcq/{id}","CourseController@addmcqQuest");	
	Route::get("daily-mcq-quest-list/{id}","CourseController@mcqQuestList");	
	Route::post("add-mcq-question-data","CourseController@addmcqQuestData");
	Route::post("edit-mcq-question-data","CourseController@editmcqQuestData");
	Route::get("delete-daily-mcq-quest/{id}","CourseController@deleteMcqQuest");	
	Route::get("singleMcqQuest/{id}","CourseController@singleMcqQuest");	
	
	// daily mcq section

	// course Bundle
	Route::get("course-bundle-setting","CourseController@bundleSetting")->name("courseBundleSetting");	
	Route::get("only-course-list","CourseController@onlyCourseList");
	Route::get("bundle-list","CourseController@bundleList");
	Route::post("add-new-bundle-data","CourseController@addnewbundle")->name("addnewbundle");
	
	// course Bundle

	// Single Course
		Route::get("single-course-detail/{id}","CourseController@singleCourseDetail")->name("singleCourseDetail");
	// Single Course
	// add Course
	Route::get("add-new-course","CourseController@addCourses")->name("addnewcourse");
	Route::post("add-new-course-data","CourseController@addCourseData")->name("addcoursedata");
	// Add Course
	Route::get("courses-setting","CourseController@courseSetting")->name("coursesetting");
	Route::get("courses-list","CourseController@courseList")->name("courselist");
	
	// edit course
	Route::get("edit-course/{id}","CourseController@editcourse")->name("editCourse");
	Route::post("edit-course-data","CourseController@editCourseData")->name("editcoursedata");
	Route::get("single-course-info/{id}","CourseController@singleCourseInfo")->name("singCorsInfo");
	// edit course
	// Change Course State
		Route::post("change-course-status","CourseController@changeCourseState")->name("updatecoursestate");
	// Change Course State

	// Delete Product
		Route::get("delete-product/{id}/{deltype}","CourseController@deleteProduct")->name("coursedel");
		Route::get("restore-product/{id}","CourseController@restoreProduct")->name("courserestore");
	// Delete Product
	
	
	

	// Course class
	Route::prefix("course-classes")->group(function(){
		Route::get("add-class/{chapid}/{courseId}","CourseclassController@addnewclass");
		Route::get("add-test/{chapid}/{courseId}","CourseclassController@addnewclass");
		Route::get("edit-class/{classId}","CourseclassController@editclass");
		Route::get("edit-test/{testQuestId}","CourseclassController@editclass");
		Route::post("add-new-class","CourseController@addnewClassdata");
		Route::get("class-list/{chapid}","CourseclassController@chapterClassList")->name("chapClassList");
		Route::get("class-delete/{classId}","CourseclassController@deleteCourseClass");
		Route::get("singleclassInfo/{id}","CourseclassController@singleClassInfo")->name("singClassInfo");
		Route::post("update-class","CourseController@updateclass");
	});

	// Course class

	// course Test
	Route::prefix("course-test")->group(function(){
		Route::post("add-new-test-question","CourseController@addquestion")->name("addTest");
		Route::get("test-list/{chapid}","CourseclassController@chapterTestList")->name("chaptestList");
		Route::get("single-test-info/{testid}","CourseclassController@SingletestDetail")->name("singleTestInfo");
		Route::post("update-test-question","CourseController@updatequestion")->name("updateTest");
	});
	// course Test
	
	// Blogs/Articles
	Route::prefix("blogs-setting")->group(function(){
		Route::get("blog-category-setting","BlogController@blogcatSetting")->name("blogCatset");
		Route::get("blog-category-list","BlogController@blocatList")->name("blogCatList");
		Route::get("change-blog-cat-status/{id}","BlogController@changeCatState")->name("blogCatstate");
		Route::post("add-blog-category","BlogController@addCategory")->name("addBlogCat");
		Route::get("single-blog-cat-info/{id}","BlogController@singleCatInfo")->name("blogCatinfo");
		Route::post("update-blog-category","BlogController@updateCategory")->name("updateBlogCat");
		Route::post("delete-blog-category","BlogController@deleteCategory")->name("deleteBlogCat");
		
		// Blogs
		Route::get("blog-setting","BlogController@articleSetting")->name("blogset");
		Route::get("blog-list/{catId}","BlogController@blogList")->name("blogList");
		Route::get("blog-list-cat-wise/{catId?}","BlogController@blogListCatwise")->name("blogListcat");
		Route::get("add-blog/{catId?}","BlogController@addarticle")->name("addblog");
		Route::get("count-articles/{id}","BlogController@articlecount")->name("blogcount");
		Route::post("add-blog-data","BlogController@addarticleData")->name("addblogdata");
		Route::get("change-blog-status/{id}","BlogController@changeState");
		Route::get("delete-blog/{id}","BlogController@deleteBlogs");
		Route::get("edit-blog/{blogId?}","BlogController@editarticle");
		Route::post("edit-blog-data","BlogController@editarticleData")->name("editblogdata");
		
		
		
		
		// Blogs
		// Tags
		Route::post("tags-search-add","BlogController@tagsearchadd");
		Route::get("tags-list/{number?}","BlogController@tagsList");
		
		// Tags
		// Subject
		Route::post("blog-subject-add","BlogController@subjectadd");
		Route::get("subject-list","BlogController@subjectList");	
		// Subject
	});
	// Blogs/Articles
});
// Course Section

Route::prefix("seller")->group(function(){
	Route::get("single-product-proinfo/{id}","NewProductConroller@singleProInfo")->name("singProInfo");
	Route::get("add-new-product","NewProductConroller@addProduct")->name("addproduct");
	Route::get("edit-product/{id}","NewProductConroller@editProduct")->name("proedit");
	Route::post("add-new-product-data","NewProductConroller@addProductData")->name("addproductdata");
	Route::post("edit-product-data","NewProductConroller@editProductData")->name("editproductdata");
	Route::get("product-setting","ProductController@ProductSetting")->name("proSett");
	Route::get("product-list","ProductController@productList")->name("proList");
	Route::post("change-product-status","ProductController@changeProState")->name("updateprostate");
	Route::get("delete-product/{id}/{deltype}","ProductController@deleteProduct")->name("prodel");
	Route::get("restore-product/{id}","ProductController@restoreProduct")->name("prorestore");

	// Slider setting
		Route::get("all-slider","SliderController@allSliders")->name("allslides");
		Route::get("slider-setting","SliderController@slidersetting")->name("slidersetting");
		Route::post("add-slider-data","SliderController@slideAddData")->name("addsliderdata");
		Route::get("delete-slide/{sid}","SliderController@deleteslider")->name("delslider");
		Route::get("single-slider-info/{sid}","SliderController@singleSlider")->name("Singslider");
		Route::get("change-slide-state/{sid}","SliderController@changeslidestate")->name("changeSstate");
		Route::post("edit-slider-data","SliderController@slideupdateData")->name("editsliderdata");
		// Pop up
			Route::get("popup-setting","SliderController@popupsetting")->name("popupsetting");
			Route::post("add-popup-data","SliderController@popAddData");
			Route::get("single-popup-info","SliderController@singlePopup");
		// Pop up
	// Slider setting

	
});
// Products section

// category
Route::get("product-category","CategoryController@ProCategory")->name("procateg");

Route::prefix("course-category-setting")->group(function(){
	Route::get("category-list","CategoryController@catSetting")->name("adminCatsetting");
	Route::get("category-raw-list","CategoryController@categoryList")->name("adminCatrawlist");
	Route::post("add-category","CategoryController@addCategory")->name("addCat");	
	Route::get("fetch-single-category/{catid}","CategoryController@singleCatDetail")->name("singCat");	
	Route::post("edit-category-data","CategoryController@editCategorydata")->name("editCatData");	
	Route::get("delete-category/{catid}","CategoryController@deleteCategory")->name("delCat");
	Route::get("change-category-state/{catid}","CategoryController@changeCatStatus")->name("cngCatst");	
	
});
// category

// Tax
Route::prefix("seller-tax-setting")->group(function(){
	Route::get("tax-setting","TaxController@taxSetting")->name("adminTaxsetting");
	// standards
	Route::post("taxStd","TaxController@taxstandards")->name("taxstd");	
	Route::get("selected-tax-standards","TaxController@selectedStandardtax");
	// standards
	
	// Tax class setting
	Route::get("tax-class-list","TaxController@taxClassList");
	Route::post("add-tax-class","TaxController@addTaxClass")->name("addtxCls");	
	Route::get("delete-tax-class/{id}","TaxController@taxClassdelete");
	Route::get("fetch-single-tax-class/{id}","TaxController@singletaxClassdetail");
	Route::post("edit-taxclass-data","TaxController@editTaxClass");	
	Route::get("change-tax-class-state/{id}","TaxController@changeTaxclassStatus");
	// Tax class setting
	
	// Tax setting
	Route::get("tax-list","TaxController@taxList");
	Route::post("add-tax-data","TaxController@addtaxdata");
	Route::get("delete-tax/{id}","TaxController@deletetax");
	Route::get("single-tax-detail/{id}","TaxController@singletaxInfo");
	Route::post("edit-tax-data","TaxController@singleTaxupdateData")->name('edittaxdata');
	// Tax setting
});
// Tax

// cart
Route::prefix("cart")->group(function(){
	Route::get("my-cart-items","CartController@cartList")->name("mycart");
	Route::get("mycart/{courseId}","CartController@mycart");
	Route::get("cart-content","CartController@cartContent");
	Route::get("remove-cart-item/{id}","CartController@itemRemove");
	Route::get("update-item-qty/{id}/{upd}","CartController@update");
});
// cart

// checkout
Route::prefix("payment")->group(function(){
	Route::get("checkout","CheckoutController@checkout")->name("checkDetail");
	Route::post("checkout-form","CheckoutController@checkoutform")->name("checkoutformData");
	Route::get("payment-checkout-data","CheckoutController@checkoutPay")->name("paymentData");
	Route::post("checkout-complete","CheckoutController@completePayment")->name("finalcheck");
	
});
// checkout

// order
Route::prefix("order")->group(function(){
	Route::get("successfull-order-placed","OrderController@orderSuccess")->name("odrSuccess");
	Route::get("my-order-history","OrderController@orderHistory")->name("odrHistory");
});
// order

// currence 
Route::prefix("currency")->group(function(){
	Route::get("currency-setting","CurrencyController@currencySetting")->name("currSett");
	Route::get("currency-list","CurrencyController@currencyList")->name("currList");
	Route::post("add-currency-data","CurrencyController@addNewCurrency")->name('addcurrdata');
	Route::get("currency-delete/{id}","CurrencyController@currencyDelete");
	Route::get("single-currency-detail/{id}","CurrencyController@currencyDeatil");
	Route::post("edit-currency-data","CurrencyController@upadteCurrency")->name('editcurrdata');
	Route::get("use-currency/{id}","CurrencyController@makedefaultCurr");
	Route::get("default-currency","CurrencyController@defaultCurrency");	
});
// currence 

// Shipping
Route::prefix("shipping")->group(function(){
	Route::get("shipping-setting","ShippingController@shipSetting")->name("shipSett");
	Route::post("flat-shipping-setting-data","ShippingController@flatShipData")->name('fshipdata');
	Route::get("shipping-list/{type}","ShippingController@flatShiplist");
	Route::get("shipping-delete/{id}/{type}","ShippingController@deleteShiplist");
	
});
// Shipping

// Location setting
 Route::prefix("location")->group(function(){
	//  country
	 Route::get("location-setting","LocationController@locationsetting")->name("locsetting");
	 Route::get("country-list","LocationController@countryList");
	 Route::post("add-country-data","LocationController@addcountryData")->name('addcountdata');
	 Route::get("single-country-detail/{id}","LocationController@singleCountryDetail");
	 Route::post("edit-country-data","LocationController@editcountryData")->name('editcontdata');
	 Route::get("delete-country/{id}","LocationController@deleteCountry");
	//  Country

	// State
	Route::post("add-state-data","LocationController@addstateData");
	Route::get("state-list/{countryid}","LocationController@stateList");
	Route::get("single-state-detail/{stateid}","LocationController@singlestatedetail");
	Route::post("edit-state-data","LocationController@editstateData");
	Route::get("state-delete/{id}","LocationController@deleteState");
	
	// State

	// Area
		Route::post("add-area-data","LocationController@addareaData")->name("areaaddData");
		Route::get("area-list/{stateid}","LocationController@areaList");
	// Area

	// default country state and city/area
	 Route::get("default-country-state-list","LocationController@defaultcountryState");
	 Route::get("default-country-city-list","LocationController@defaultcountryStatecity");
	 
 });

 Route::prefix("media")->group(function(){
	 Route::get("media-setting","MediaController@mediaSetting")->name("media");
	 Route::post("add-media-image-data","MediaController@addMediaImageData")->name("mediaupload");
	 Route::post("add-daf-pdf-data","MediaController@uploadDaf")->name("dafPdf");
	 Route::get("all-media","MediaController@allimages")->name("allmedia");
	 Route::get("single-media-info/{mid}","MediaController@singleMediaInfo");
	 Route::get("delete-single-media-info/{mid}","MediaController@deletesingleMediaInfo");
	 Route::post("delete-multiple-images-data","MediaController@deleteMultiples")->name("multimediadelete");
	 
	 
 });
 /*Route::get('{path}', 'NormPageController@index')->where('path','([A-z\d\-\/_.]+)?');*/

// Location setting


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

