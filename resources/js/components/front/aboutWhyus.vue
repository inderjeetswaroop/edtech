<template>
    <div>
        <section class="breadcrumb-area section-padding img-bg-3">
            <div class="overlay z-index-n1"></div>
            <div class="container">
                <div class="breadcrumb-content">
                    <div class="section-heading">
                        <h5 class="ribbon ribbon-lg ribbon-white mb-2">Welcome to BE N BY IAS</h5>
                        <h2 class="section__title fs-45 lh-60 text-white">Why Us?</h2>
                    </div>
                    <div class="breadcrumb-btn-box pt-40px pl-3">
                        <a href="#" class="btn-text text-white video-play-btn d-inline-flex align-items-center" data-fancybox data-src="https://beandbyias.com/wp-content/uploads/2022/01/BenByIASFinal.mp4">
                            <span class="icon-element icon-element-md pulse-btn mr-3"><i class="la la-play"></i></span>Watch the Video
                        </a>
                    </div>
                </div><!-- end breadcrumb-content -->
            </div><!-- end container -->
        </section><!-- end breadcrumb-area -->
        <section class="about-area section--padding overflow-hidden">
            <div class="container">
                <div class="row">
                     <div class="col-lg-6">
                        <div class="about-content pb-5">
                            <div class="section-heading">
                                <h2 class="section__title pb-3 lh-50">&#8220;About 'BE N BY IAS' &#8221;</h2>
                                <p class="section__desc">BE N BY IAS is one of the leading UPSC Civil Service coaching institute based in Old Rajinder Nagar, near Karol Bagh, Delhi. We at BE N BY IAS under the leadership of Jasbir Singh Bajaj (Former IAS) provide best guidance and mentoring for Prelims, Mains examinations in all General Studies as well as Law Optional Subject. We at BE N BY IAS are committed not only to provide online and classroom guidance but also help the aspirants achieve their maximum potential through well-structured preparations for the examination.</p>
                            </div><!-- end section-heading -->
                            <ul class="generic-list-item pt-3">
                                <li><i class="la la-check-circle mr-2 text-success"></i>Online Courses with full discount systems.</li>
                                <li><i class="la la-check-circle mr-2 text-success"></i>Online Interactive live classes.</li>
                                <li><i class="la la-check-circle mr-2 text-success"></i>Mentored by those who already succeed.</li>
                            </ul>
                        </div><!-- end about-content -->
                    </div><!-- end col-lg-6 -->
                     <div class="col-lg-6">
                        <div class="row">
                            <div class="col-md-6 p-2">
                                 <img src="/frontassets/images/83S1Mgt23BfBszFo38Bu3no4CtQuuK2XOn14j0US.png" alt="" class="img-fluid">
                            </div>
                            <div class="col-md-6 p-2">
                                 <img src="/frontassets/images/CMCKSJ9SDXZav9apWjCDrh7KpGVquGJkq0gy3kVZ.png" alt="" class="img-fluid">
                            </div>
                            <div class="col-md-6 p-2">
                                 <img src="/frontassets/images/MC2PGoAGMBSSdhMFmjlRXGKMPsv9ew2gz8g1MXTX.png" alt="" class="img-fluid">
                            </div>
                            <div class="col-md-6 p-2">
                                 <img src="/frontassets/images/k6m8frlmKSkx5SSCGHq8DN6DHtwEHjXRnRSsVduN.png" alt="" class="img-fluid">
                            </div>
                            <div class="col-md-6 p-2">
                                 <img src="/frontassets/images/DjR7eQ1MY0Oh2UbBc52g91UDD3bxTorof6QDydPo.png" alt="" class="img-fluid">
                            </div>
                            <div class="col-md-6 p-2">
                                 <img src="/frontassets/images/fmkBiuDleZlIYgW7QKjErXNgYQI8WTIjn3NZWtSD.png" alt="" class="img-fluid">
                            </div>
                            <div class="col-md-6 p-2">
                                 <img src="/frontassets/images/fmkBiuDleZlIYgW7QKjErXNgYQI8WTIjn3NZWtSD.png" alt="" class="img-fluid">
                            </div>
                            <div class="col-md-6 p-2">
                                 <img src="/frontassets/images/zEoVlP1oGInbw9IlqUhoD03qfneb0fZp8ZXnzOCN.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div><!-- end col-lg-6 -->
                </div>
            </div>
        </section>
        <!-- Why us -->
            <section class="testimonial-area bg-gray section--padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <!-- <h3 class="fs-22 font-weight-medium pb-3">30+ million people are already learning on Aduca</h3> -->
                            <h2 class="section__title mb-3">Why Us?</h2>
                             <carousel :autoplay="true" 
                                :nav="false" 
                                :items="3" 
                                :dots="false"
                                :autoplayTimeout="3000"
                                :autoplayHoverPause="true"
                                :responsive="responsiveObj"
                                >
                                <template slot="prev"><span class="prev card p-md-2 p-sm-0 ml-2"><i class="la la-arrow-left text-theme la-2x"></i></span></template>
                                    <div class="card card-item mx-3">
                                        <div class="card-body">
                                            <p class="card-text">
                                                Personalized attention and guidance of the Director, who himself is a former IAS officer (1987Batch: TN Cadre).
                                            </p>
                                            
                                        </div><!-- end card-body -->
                                    </div><!-- end card -->
                                    <div class="card card-item mx-3">
                                        <div class="card-body">
                                            <p class="card-text">
                                                Many Civil Servants (serving as well as retired) on our Panel are available for direct interaction, guidance, sharing of knowledge, and experience gained over years of service in various public offices and positions.
                                            </p>
                                            
                                        </div><!-- end card-body -->
                                    </div><!-- end card -->
                                    <div class="card card-item mx-3">
                                        <div class="card-body">
                                            <p class="card-text">
                                                Focus on making you apt in the art of writing the examination in the way and form as expected by the UPSC strictly following WHAT AND HOW of the syllabus.
                                            </p>
                                            
                                        </div><!-- end card-body -->
                                    </div><!-- end card -->
                                    <div class="card card-item mx-3">
                                        <div class="card-body">
                                            <p class="card-text">
                                                Best in the respective subjects ‘faculty from top-of-the-line institutes and universities having rich experience in preparing aspirants for the examination.
                                            </p>
                                            
                                        </div><!-- end card-body -->
                                    </div><!-- end card -->
                                    <div class="card card-item mx-3">
                                        <div class="card-body">
                                            <p class="card-text">
                                                Combination of both dynamic and static aspects which are relevant as per the needs and curriculum of the examination.
                                            </p>
                                            
                                        </div><!-- end card-body -->
                                    </div><!-- end card -->
                                    <div class="card card-item mx-3">
                                        <div class="card-body">
                                            <p class="card-text">
                                                Personal Development Analysis cards to monitor the growth, strong as well as weak points as the preparations go on stage by stage for regular course corrections as and when required.
                                            </p>
                                            
                                        </div><!-- end card-body -->
                                    </div><!-- end card -->
                                    <div class="card card-item mx-3">
                                        <div class="card-body">
                                            <p class="card-text">
                                                Best quality reading and test materials personally prepared by the experts provided to the aspirants.
                                            </p>
                                            
                                        </div><!-- end card-body -->
                                    </div><!-- end card -->
                                    <div class="card card-item mx-3">
                                        <div class="card-body">
                                            <p class="card-text">
                                                Timely and regular tests consisting of NCERT and other authenticated materials, class notes, and Standard Text Books.
                                            </p>
                                            
                                        </div><!-- end card-body -->
                                    </div><!-- end card -->
                                <template slot="next"><span class="next card p-md-2 p-sm-0 ml-2"><i class="la la-arrow-right text-theme la-2x"></i></span></template>     
                             </carousel>   
                        </div><!-- end col-lg-8 -->
                    </div><!-- end row -->
                </div><!-- end container -->
            </section><!-- end testimonial-area -->
        <!-- Why Us -->
        <!-- Comparison Table -->
            <section class="about-area section--padding overflow-hidden">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12"> 
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr class="bg-info text-center my-auto">
                                            <th>
                                                <h4 class="text-white">
                                                    Law Optional <br>Foundational course
                                                </h4>
                                            </th>
                                            <th>
                                                <h4 class="text-white">
                                                    Point of Differentiation
                                                </h4>
                                            </th>
                                            <th>
                                                <h4 class="text-white">
                                                    BE N BY IAS
                                                </h4>
                                            </th>
                                            <th>
                                                <h4 class="text-white">
                                                    N Institute
                                                </h4>
                                            </th>
                                            <th>
                                                <h4 class="text-white">
                                                    De Institute
                                                </h4>
                                            </th>
                                            <th>
                                                <h4 class="text-white">
                                                    Dot.in Institute
                                                </h4>
                                            </th>
                                            <th>
                                                <h4 class="text-white">
                                                    Not so Xpert Institute
                                                </h4>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody> 
                                        <tr>
                                            <td class="bg-light-blue pt-5" rowspan="6" >
                                                Educator's Background
                                            </td>
                                        </tr>
                                        <tr class="bg-light-blue">
                                            <td>Educational Qualifications</td>
                                            <td>
                                                <ul>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>M.A. (Public Administration)
                                                    </li>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>Bachelor Of Laws(LL.B)
                                                    </li>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>Master Of Laws(LL.M)
                                                    </li>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>Master Of Business Laws(MBL) from (NLSIU)
                                                    </li>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>Certification in IPR Laws and cyber Laws
                                                    </li>
                                                </ul>
                                            </td>
                                            <td>
                                                Bachelor Of Laws(LL.B)
                                            </td>
                                            <td>
                                                Bachelor Of Laws(LL.B)
                                            </td>
                                            <td>
                                                No Info
                                            </td>
                                            <td>
                                                Bachelor Of Laws(LL.B)
                                            </td>
                                            
                                        </tr>
                                         <tr class="bg-light-yellow">
                                            <td>UPSC Background</td>
                                            <td>
                                                <ul>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>IAS OFFICEE - 32 YEARS
                                                    </li>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>Cleared UPSC Exam with Law Optional
                                                    </li>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>Ranked In top 80
                                                    </li>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>AIR in CBI Inspector Exam
                                                    </li>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>Served as CBI Inspector for 5 Years
                                                    </li>
                                                </ul>
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                                <br>
                                                Hired and Fired Faculty
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                                <br>
                                                Hired and Fired Faculty
                                            </td>
                                            
                                        </tr>
                                         <tr class="bg-light-blue">
                                            <td>Team / Panelist</td>
                                            <td>
                                                Former Judges / Civil Servants / Bureaucrats
                                            </td>
                                            <td>
                                                No Info
                                            </td>
                                            <td>
                                                No Info
                                            </td>
                                            <td>
                                                No Info
                                            </td>
                                            <td>
                                                No Info
                                            </td>
                                            
                                        </tr>
                                        <tr class="bg-light-yellow">
                                            <td>Special Lecture</td>
                                            <td>
                                                Regular lectures by Judges and IAS officers
                                            </td>
                                            <td>
                                                No Info
                                            </td>
                                            <td>
                                                No Info
                                            </td>
                                            <td>
                                                No Info
                                            </td>
                                            <td>
                                                No Info
                                            </td>
                                            
                                        </tr>
                                        <tr class="bg-light-blue">
                                            <td>Personality Test</td>
                                            <td>
                                                25+ Panelist of Civil Servant / Judges / Experts
                                            </td>
                                            <td>
                                                No Info
                                            </td>
                                            <td>
                                                No Info
                                            </td>
                                            <td>
                                                No Info
                                            </td>
                                            <td>
                                                No Info
                                            </td>
                                            
                                        </tr>
                                        <tr>
                                            <td class="bg-light-yellow pt-5" rowspan="6" >
                                                Course Highlights
                                            </td>
                                        </tr>
                                         <tr class="bg-light-yellow">
                                            <td>Mode Of Classes</td>
                                            <td>
                                                Hybrid (Online + Offline)
                                            </td>
                                            <td>
                                                Only Offline
                                            </td>
                                            <td>
                                                Online + Offline 
                                            </td>
                                            <td>
                                                Only Online 
                                            </td>
                                            <td>
                                                Only Online 
                                            </td>
                                            
                                        </tr>
                                         <tr class="bg-light-blue">
                                            <td>Course Duration</td>
                                            <td>
                                                5.5 Months Un interrupted <br>
                                                Including Sectional + Full Length class Tests
                                            </td>
                                            <td>
                                                7-8 Months
                                            </td>
                                            <td>
                                                4.5 Months <br> (Excluding Holidays)
                                            </td>
                                            <td>
                                                10 Months
                                            </td>
                                            <td>
                                                4 Months <br> (Excluding Holidays)
                                            </td>
                                            
                                        </tr>
                                        <tr class="bg-light-yellow">
                                            <td>Study Material</td>
                                            <td>
                                                <ul>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>Printed well researched and revised notes
                                                    </li>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>Timely Current Legal Events Updated
                                                    </li>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>Test Series
                                                    </li>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>Easy to understand approach for non-law background students
                                                    </li>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>Exhaustive analysis of concept
                                                    </li>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>Making Sure that you won't need further reference to any book or material
                                                    </li>
                                                </ul>
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <ul>
                                                    <li>
                                                        Printed Note
                                                    </li>
                                                    <li>
                                                        Recap Note
                                                    </li>
                                                    <li>
                                                        Test Series
                                                    </li>
                                                </ul>
                                            </td>
                                            <td class="text-center">
                                                <ul>
                                                    <li>
                                                        Printed Note
                                                    </li>
                                                    <li>
                                                        Recap Note
                                                    </li>
                                                    <li>
                                                        No In-depth study Material
                                                    </li>
                                                </ul>
                                            </td>
                                            <td class="text-center">
                                                <ul>
                                                    <li>
                                                        Printed Note
                                                    </li>
                                                    <li>
                                                        Recap Note
                                                    </li>
                                                   
                                                </ul>
                                            </td>
                                            
                                        </tr>
                                        <tr class="bg-light-blue">
                                            <td>Answer Writing Skill Mentorship</td>
                                            <td>
                                                One on one mentorship by former Civil Servant
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                NO Info
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            
                                        </tr>
                                         <tr class="bg-light-yellow">
                                            <td>Affordability</td>
                                            <td>
                                                <ul>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>Easy EMi Option
                                                    </li>
                                                    <li>
                                                        <i class="la la-chevron-right text-theme mr-2"></i>0% Interest Rate
                                                    </li>
                                                </ul>
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            
                                        </tr>
                                         <tr class="bg-light-blue">
                                             <td class="bg-light-yellow" rowspan="6"></td>
                                            <td>360&deg; Coverage of syllabus</td>
                                            <td>
                                                In-depth 360&deg; coverage in tune with UPSC CSE 
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            
                                        </tr>
                                        <tr class="bg-light-yellow">
                                             
                                            <td>Interdesciplinary Coverage of syllabus</td>
                                            <td >
                                                Covering Latest events relating to particular subject.
                                            </td>
                                            <td  class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td  class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td  class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            
                                        </tr>
                                        <tr class="bg-light-blue">
                                             
                                            <td>Monthly Legal Magazine</td>
                                            <td>
                                                Yes, Covering latest Judgements
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            
                                        </tr>
                                         <tr class="bg-light-yellow">
                                             
                                            <td>Special Lecture</td>
                                            <td>
                                                Special Lectures by Civil Servants and Subject Experts
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            
                                        </tr>
                                        <tr class="bg-light-blue">
                                             
                                            <td>Doubt Clearing Sessions</td>
                                            <td>
                                                Yes, Making Sure that even a non-law background aspirant is doubt free
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            
                                        </tr>
                                         <tr class="bg-light-yellow">
                                             
                                            <td>Analysis of Landmark case Law</td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            
                                        </tr>
                                         <tr class="bg-light-blue">
                                            <td class="bg-light-blue" rowspan="6">Other Feature</td> 
                                            <td>Hybrid Classes</td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            
                                        </tr>
                                         <tr class="bg-light-yellow">
                                            
                                            <td>Power Point Presentation</td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            
                                        </tr>
                                        <tr class="bg-light-blue">
                                            
                                            <td>Digital Panel for smooth class</td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            
                                        </tr>
                                        <tr class="bg-light-yellow">
                                            
                                            <td>Animated Expalnation for better understanding</td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            
                                        </tr>
                                         <tr class="bg-light-blue">
                                            
                                            <td>Available over 3 prime location in Delhi and NCR</td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            
                                        </tr>

                                         <tr class="bg-light-yellow">
                                            
                                            <td>Smooth and Uninterrupted Classes using best technology for Streaming</td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            
                                        </tr>
                                         <tr class="bg-light-blue">
                                             <td rowspan="3"></td>
                                            <td>Evaluation of answer Sheets from experts within a day</td> 
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            
                                        </tr>
                                         <tr class="bg-light-yellow">
                                             
                                            <td>Evaluation and Feedback of class tests</td> 
                                            <td>
                                                Prompt and speedy evaluation and feedback by legal experts within 1-2 days
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            
                                        </tr>
                                        <tr class="bg-light-blue">
                                             
                                            <td>Recorded and Live Class</td> 
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/cancel.png" alt="logo">
                                            </td>
                                            <td class="text-center">
                                                <img class="logoImg" src="/frontassets/check-box.png" alt="logo">
                                            </td>
                                            
                                        </tr>
                                         
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <!-- Comparison Table -->

    </div>    
</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
    data(){
        return{
            responsiveObj:{
                0:{
                    items :1
                },
                600:{
                    items :1
                },
                1000:{
                    items :3
                },
                1500:{
                    items :3
                }
            }
        }
    },
    components: { carousel },    
    beforeCreate(){
        this.$Progress.start();
    },
    created(){
        this.$Progress.finish();
    }
}
</script>
<style scoped>
    .table td, .table th
    {
        border: 1px solid #000;
    }
    .card-item
    {
        height:250px;
        padding:20px;
        text-align: justify;   
    }
     .prev, .next
    {
        color: #ec5252;
        position: absolute;
        z-index: 2;
        top: 100px;
        display: block;
    }
    .prev
    {   
       left: 0;
       
    }
    .next
    {   
       right: 0;
       
    }
    .bg-light-blue{
        background-color: #bdd5ed
    }
    .bg-light-yellow{
        background-color: #e2f0d9
    }
    @media screen and (max-width: 600px) {
        .prev, .next
        {
            display: none
        }
    }
</style>