<template>
    <div>
        <div class="mainbg">
            <div class="mainbg2">
                <div class="container">
                    <div class="row" >
                        <div class="col-md-5 p-3">
                            <div class="card p-4">
                                <br>
                                <h1 class="card-title pt-2"> 
                                    <span class="p-3 badge badge-primary">UPSC</span> <br> Interview Guidance Programme
                                </h1>
                                <!-- <h3 class="text-theme pt-4">हिंदी | English</h3>
                                <h3 class="text-secondary pt-2">Book your Slot Online.</h3> -->
                                <br>
                                <a href="https://forms.gle/MnVD7uYvh5EUt9Ej9" class="btn theme-btn">BOOK MY SEAT <i class="la la-arrow-right icon ml-1"></i></a>
                                <!-- <button class="btn theme-btn" type="submit" data-toggle="modal" data-target="#regModal">BOOK MY SEAT <i class="la la-arrow-right icon ml-1"></i></button> -->
                                <p class="pt-3">Mock Interviews will be conducted offline only, at <b>BE N BY</b> 57/11 , 2nd floor, Bada Bazar Rd, Old Rajinder Nagar, karol Bagh, Delhi, 110060 </p>
                                <p class="pt-3">
                                    For more info call <br>
                                    <a href="tel:+919958826967"><i class="la la-mobile mr-2 text-theme la-2x"></i>+919958826967</a>
                                    <a href="tel:+919354077958"><i class="la la-mobile mr-2 text-theme la-2x"></i>+919354077958</a>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-7 my-auto">
                            <carousel :autoplay="true" 
                                :nav="false" 
                                :items="1" 
                                :dots="true" 
                                :autoplayTimeout="3000"
                                :autoplayHoverPause="true"
                                >
                                <img class="img-fluid" src="/frontassets/images/Panelist1.png" alt="">
                                <img class="img-fluid" src="/frontassets/images/Panelist2.png" alt="">
                                <img class="img-fluid" src="/frontassets/images/Panelist3.png" alt="">
                                <img class="img-fluid" src="/frontassets/images/Panelist4.png" alt="">
                            </carousel>
                        </div>
                    </div> 

                </div>
            </div>
        </div>
        <div class="container" > 
            <h1 class="back-text">Interview Guidance Programme</h1>
            <div class="row">
                <div class="col-md-5 p-4 my-auto">
                    <img src="/frontassets/images/AboutOurProgramme.png" alt="About Our Programme" class="img-fluid bgimg" >  
                    <br>
                    <hr>
                    <br>
                    <a href="https://forms.gle/MnVD7uYvh5EUt9Ej9" class="btn theme-btn">BOOK MY SEAT <i class="la la-arrow-right icon ml-1"></i></a>
                    <!-- <button class="btn theme-btn" type="submit" data-toggle="modal" data-target="#regModal">BOOK MY SEAT <i class="la la-arrow-right icon ml-1"></i></button> -->
                </div>
                <div class="col-md-7 p-4 mt-4 pt-4">
                    <h2 class="about-text">About Our Programme</h2>
                    <br>
                    <p> Candidates are advised to take the UPSC Personality Test (or Interview) very seriously. The Personality Test is the final of the 3 stages of the UPSC Civil Services Examination. The marks obtained here determine the final rank and therefore the service allocation of the candidate. As such, here it is important to score as high as possible. The Interview Guidance Programme of <b>BE N BY</b> IAS prepares a candidate thoroughly for the UPSC Personality Test.</p>
                    <br>
                    <p> Our programme adheres to the observations of the Kothari Committee constituted by the UPSC to list the qualities that should be rated in the personality test viz. Clarity of expression; Grasp of narrative and argument; Reasoning ability; Appreciation of different points of view; Awareness and concern for socioeconomic problems; and, Range and depth of interests and personal attributes relevant to interaction with people.</p>
                    <br>
                    <p> Our Panel will, therefore, rate the candidates on the above-mentioned qualities in the Personality Test.</p>
                    
                </div>
            </div>
        </div>
        <div class="bg-light py-5">
            <div class="container ">
                <div class="row">
                    <div class="col-md-6 ">
                        <h2 class="about-text">Programme Details</h2>
                        <br>
                        <ul>
                            <li class="pb-3">
                                <p><i class="la la-book mr-2 text-theme"></i>    The <b>BE N BY IAS</b> Interview Panel consists of Senior panel of civil servants / armed forces officers, academicians and experts in various fields general studies such as social economic and political analysis. Delhi University Professors; and Experts in various fields of General Studies. </p>
                            </li>
                            <li class="pb-3">
                                <p><i class="la la-book mr-2 text-theme"></i>Administrative acumen, personality and aptitude development.</p>
                            </li>
                            <li class="pb-3">
                                <p><i class="la la-book mr-2 text-theme"></i>After the mock interview, a detailed evaluation & feedback is provided to the candidate by the Interview Panel.</p>
                            </li>
                            <li class="pb-3">
                                <p><i class="la la-book mr-2 text-theme"></i>We also provide a high-quality video of the interview session to the candidate so that s/he can watch and learn from it before appearing for the actual UPSC Personality Test.</p>
                            </li>
                            <li class="pb-3">
                                <p>
                                   <i class="la la-book mr-2 text-theme"></i>  Useful resources like study materials, special classes for interviews and video lectures are also provided to our mock interview candidates.
                                </p>
                            </li>
                        </ul>
                    </div>  
                    <div class="col-md-6 my-auto">
                        <iframe style="width:100%;height:315px" src="https://www.youtube.com/embed/ZLIIHZ84ipM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>  
                </div>
            </div>
        </div>  
        <!-- panelist -->
            <panelist></panelist>
        <!-- panelist -->
        <!-- Previous Year's Mock Interviews -->
        <div class="container my-4 py-4 bg-white">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading text-center">
                        <!-- <h5 class="ribbon ribbon-lg mb-2">Get mentored by those who have succeeded</h5> -->
                        <h2 class="section__title">Previous Year's Mock Interviews </h2>
                        <p>The <b>BE N BY</b> IAS Interview Panel consists of Senior IAS & IPS Officers; Delhi University Professors; and Experts in various fields of General Studies.</p>
                        <span class="section-divider"></span>
                    </div>
                    <carousel :autoplay="true" 
                    :nav="false" 
                    :dots="true" 
                    :autoplayTimeout="3000"
                    :autoplayHoverPause="true"
                    :responsive="responsiveObj"
                    >
                        <template slot="prev"><span class="prev card p-md-2 p-sm-0 ml-2 rounded-circle"><i class="la la-angle-left text-theme la-2x"></i></span></template>

                            <div class="card p-2 bg-light mx-3">
                                <div class="d-flex ">
                                    <div class="px-4">
                                        <img src="/frontassets/images/WlAe8Rp2JZXy80Id3QBMm21KsDTR93kZd0W3MDqd.png" alt="" class="rankers-img">
                                        <br>
                                        <a href="https://youtu.be/98u6vzsCvVQ" target="_blank" class="btn btn-warning btn-sm">Watch Video</a>
                                    </div>     
                                    <div>
                                        <ul>
                                            <li>
                                                <p>
                                                    -I want to thank Jasbir Singh Bajaj Sir for guiding me in the Interview Process.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                   - One considerable difference between the Mock Interview at BE N BY IAS and other mock interviews is the fact that the Interview Panel at BE N BY IAS comprises of highly experienced civil servants from different services and thus the quality of the questions and the feedback received was tremendously helpful.
                                                </p>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                </div> 
                            </div>    
                             <div class="card p-2 bg-light mx-3">
                                <div class="d-flex ">
                                    <div class="px-4">
                                        <img src="/frontassets/images/wwAwMcdW9unvcvEjnrCT1jDIbcKmkxZCcQjKIAU8.png" alt="" class="rankers-img">
                                    </div>     
                                    <div>
                                        <ul>
                                            <li>
                                                <p>
                                                   - Personal Guidance Session 
                                                </p>
                                            </li>
                                            <li>
                                                <p> 
                                                    -One two One Guidance by Jasbir Sir
                                                </p>
                                            </li>
                                            <li>
                                                <p> 
                                                    -Due to paucity of time, I only had the opportunity of having a one-to-one session with Jasbir Bajaj Sir which turned out to be a once in a lifetime experience for me. Sir guided me as to what UPSC expects from a candidate and that helped me in rectifying my mistakes.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div> 
                            </div> 
                             <div class="card p-2 bg-light mx-3">
                                <div class="d-flex ">
                                    <div class="px-4">
                                        <img src="/frontassets/images/6AL2RIBe2jJAgiosmGzuqhgI6WCfYZGCMSZdlPPp.png" alt="" class="rankers-img">
                                        <br>
                                        <a href="https://youtu.be/BGEyP3yjU-c" target="_blank" class="btn btn-warning btn-sm">Watch Video</a>
                                    </div>     
                                    <div>
                                       <p>
                                           -	The mock interview comprised of a 360-degree coverage of all aspects. It was indeed a simulation of the UPSC personality test. I want to thank Jasbir Sir and the entire Panel of BE N BY IAS for their contribution in my journey to success.
                                       </p>
                                    </div>
                                </div> 
                            </div> 
                             <div class="card p-2 bg-light mx-3">
                                <div class="d-flex ">
                                    <div class="px-4">
                                        <img src="/frontassets/images/OZ3kD8bGH6qA01OgPBt4hTQUk8Mg0N0McrSxzcMB.png" alt="" class="rankers-img">
                                        <br>
                                        <a href="https://youtu.be/hoF8D31QbdY" target="_blank" class="btn btn-warning btn-sm">Watch Video</a>
                                    </div>     
                                    <div>
                                        <p>
                                            -	Mock interview at BE N BY IAS gave an impression of real interview. Questions were based on DAF. The Panel was very observant and pointed out various minute details about my posture, hand placement, etc
                                        </p>
                                    </div>
                                </div> 
                            </div> 
                             <div class="card p-2 bg-light mx-3">
                                <div class="d-flex ">
                                    <div class="px-4">
                                        <img src="/frontassets/images/IAaBpGMnjM3gEFWCB3xXcoFLQ0kUy6gKgJLP8ke7.png" alt="" class="rankers-img">
                                        <br>
                                        <a href="https://youtu.be/L0Nd1ZYcxRA" target="_blank" class="btn btn-warning btn-sm">Watch Video</a>
                                    </div>     
                                    <div>
                                        <ul>
                                            <li>
                                                <p>-	I found tremendous change in my personal behaviour after the mock interview held at BE N BY IAS.</p>
                                            </li>
                                            <li>
                                                <p>
                                                    -	One of the best features found at the mock interview conducted by BE N BY IAS is that, here the Panel is comprised of Civil Servants who have already cleared the Interview Process and have served the country at the highest levels.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div> 
                            </div> 
                            <div class="card p-2 bg-light mx-3">
                                <div class="d-flex ">
                                    <div class="px-4">
                                        <img src="/frontassets/images/GUL50WUZAJ7Fxrtmn5ANR9DVEV9W1X1yPLBxHl3w.png" alt="" class="rankers-img">
                                        <br>
                                        <a href="https://youtu.be/jamoSvFoY7o" target="_blank" class="btn btn-warning btn-sm">Watch Video</a>
                                    </div>     
                                    <div>
                                        <p>
                                            -The interview room atmosphere was similar to actual interview and the questions were asked from every aspect, be it General Knowledge, Current Affairs, Optional subject, Parent's background. The feedback was best that I have got till now. Video recording is helpful in self-improvement.
                                        </p>
                                    </div>
                                </div> 
                            </div>
                            <div class="card p-2 bg-light mx-3">
                                <div class="d-flex ">
                                    <div class="px-4">
                                        <img src="/frontassets/images/x4R5Xv93FJ3DorKSzTPO72kvjs75UvZyoCsPy1O4.png" alt="" class="rankers-img">
                                        
                                    </div>     
                                    <div>
                                        <p>
                                            -	I was selected for one-to-one session with Jasbir Singh Bajaj Sir. Since I had law as my optional subject, so I had a very in-depth discussion with Jasbir Sir, who is a law expert. In addition to his guidance, meaningful feedback has been provided by Sir.
                                        </p>
                                    </div>
                                </div> 
                            </div>
                            <div class="card p-2 bg-light mx-3">
                                <div class="d-flex ">
                                    <div class="px-4">
                                        <img src="/frontassets/images/MNe8iNl9ZMDdQXxi0X7NEhmFQkXwSleFDX0oVSKT.png" alt="" class="rankers-img">
                                        <br>
                                        <a href="https://www.youtube.com/watch?v=a-Rr6Tifn5w" target="_blank" class="btn btn-warning btn-sm">Watch Video</a>                                        
                                    </div>     
                                    <div>
                                        <p>
                                            -	The personality test at BE N BY IAS has been very helpful for me. Most of the questions asked in the mock interview were asked in the Interview itself. Since the focus of the Panel was on personality test rather than knowledge, it will help me a lot in performing well in the UPSC interview.
                                        </p>
                                    </div>
                                </div> 
                            </div>

                            <div class="card p-2 bg-light mx-3">
                                <div class="d-flex ">
                                    <div class="px-4">
                                        <img src="/frontassets/images/U9ZpmZ306qqPAcX9TuZNV0RbjUZp0vYhsY1QzPRZ.png" alt="" class="rankers-img">
                                        <br>
                                        <a href="https://youtu.be/oa4d68rsTCs" target="_blank" class="btn btn-warning btn-sm">Watch Video</a>                                        
                                    </div>     
                                    <div>
                                        <p>
                                            -	Interview delved in number of diverse areas to which my revelation was limited thus I came to know about different sides of my DAF and current affairs making my preparation more holistic and comprehensive. 
                                        </p>
                                    </div>
                                </div> 
                            </div>
                            

                        <template slot="next"><span class="next card p-md-2 p-sm-0 ml-2 rounded-circle"><i class="la la-angle-right text-theme la-2x"></i></span></template>

                    </carousel>
                </div>
            </div>
        </div>
            
        <!-- Previous Year's Mock Interviews -->
        <!-- Personality Test -->
        <div class="container my-4 py-4 bg-white">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading text-center">
                        <!-- <h5 class="ribbon ribbon-lg mb-2">Get mentored by those who have succeeded</h5> -->
                        <h2 class="section__title">Best Panel PAN India </h2>
                        <span class="section-divider"></span>
                    </div>
                    
                </div>
                <div class="col-md-5 p-md-4 p-sm-2">
                        <img class="img-fluid"  src="/frontassets/images/Artboard1.jpg"  alt="About image" >
                        
                </div>
                <div class="col-md-7 p-md-4 p-sm-2">
                    <h4 class="pb-2">Personality Test Mocks (CSE - 2020)</h4>
                        <p>
                                "BEST PANEL PAN INDIA" Congratulations friends, you are now just a step away from your dream. This is where you need to put your maximum efforts with required groomingnot merely to clear the final stage but clearing it with the maximum marks and achieve top ranks.
                        </p>
                        <p>
                            To succeed in this stage all it takes is your willingness to put your personality to test multiple times in a conducive environment to put you at ease and in a learning mode to ascertain your strengths as well as shortcomings with the intervention ofexperts who have extensive experience in this regard.
                        </p>
                        <p>
                            We at BE N BY IAS provide you with unmatchable group of senior and experienced bureaucrats for Mock Personality Test sessions before your UPSC Interview so that you can have a near real time feel of the test to enable you to bring out the best in you to help you achieve higher marks and securing top ranks in the final merit list. 
                            <br>
                            <b>10 OUT OF 14 GOT SELECTED IN UPSC CSE 2020.</b>
                        </p>
                </div>
                 <div class="col-md-7 p-md-4 p-sm-2">
                    <h4 class="pb-2">Suggestions for UPSC  Personality Test: -</h4>
                        <ol>
                            <li>
                                <p>
                                 The candidate will be interviewed by a Board who will have before them a record of his/her career. He/she will be asked questions on matters of general interest. The object of the interview is to assess the personal suitability of the candidate for a career in public service by a Board of competent and unbiased observers.The test is intended to judge the mental calibre of a candidate. In broad terms, this is really an assessment of not only his/her intellectual qualities but also social traits and his/her interest in current affairs. Some of the qualities to be judged are mental alertness, critical powers of assimilation, clear and logical exposition, a balance of judgement, variety and depth of interest, ability for social cohesion and leadership, intellectual and moral integrity. 
                                </p>
                            </li>
                            <li>
                                <p> 
                                    The technique of this test is not that of a strict cross-examination but of a natural, though directed and purposive conversation which is intended to reveal the mental qualities of the candidate. 
                                </p>
                            </li>
                            <li>
                                <p>
                                    The PersonalityTest is not intended to be a test either of the specialized or general knowledge of the candidates which has been already tested through their written papers. Candidates are expected to have taken an intelligent interest not only in their special subjects of academic study but also in the events which are happening around them both within and outside their own state or country as well as in modern currents of thought and in new discoveries which should arouse the curiosity of any well-educated youth with analytical mind. 
                                </p>
                            </li>
                            <li>
                                <p>
                                    Last but not the least to test the aptitude of the candidate for being a member of the coveted Civil Services which make the steel frame of the governance of India.
                                </p>
                            </li>
                        </ol>
                </div>
                <div class="col-md-5 p-md-4 p-sm-2">
                        <img class="img-fluid"  src="/frontassets/images/Artboard2.jpg"  alt="About image" >
                </div>
                <div class="col-md-12 p-md-4 p-sm-2">
                    <p>
                        We, at BE N BY IAS, groom you up for the Interview round based on your strengths and weaknesses. The Interview Guidance program is driven by Jasbir Bajaj Sir, the founder and Director of BE N BY IAS, who had himself faced the board and cleared the exam with flying colours making a mark in the coveted IAS. He excels in giving right, most appropriate and honest guidance to aspirants. His ability to mentor students without complicating the process is what differentiates him from a myriad of options available to an aspirant today.
                    </p>
                    <br>
                    <p>
                        The strategy followed is to first know the candidate better through exclusive one to one informal interaction and have an insight into their personality traits and outlook which might be repeated a number of times, if required. Once a basic assessment is done by him, personalized feedback is given to help them overcome their shortcomings.These mocks are specially designed to help the candidates to secure high scores at this final stage of the selection process.
                    </p>
                </div>
                <div class="col-md-12 mt-5">
                     <div class="section-heading text-center">
                        <!-- <h5 class="ribbon ribbon-lg mb-2">Get mentored by those who have succeeded</h5> -->
                        <h2 class="section__title">Personality Test </h2>
                        <p>
                            Personality Test “Aspirants should understand that this is not a Job Interview, It is also not an interview but a personality test.” 
                        </p>
                        <span class="section-divider"></span>
                    </div>
                    <h4>What the board checks is :</h4>
                        <div class="row">
                            <div class="col-md-3 p-2">
                                <div class="card shadow px-2 py-4">
                                    <h5>
                                        <i class="la la-check text-theme mr-2"></i> Analytical ability
                                    </h5>
                                </div>
                            </div>
                            <div class="col-md-3 p-2">
                                <div class="card shadow px-2 py-4">
                                    <h5>
                                        <i class="la la-check text-theme mr-2"></i> Positive approach
                                    </h5>
                                </div>
                            </div>
                            <div class="col-md-3 p-2">
                                <div class="card shadow px-2 py-4">
                                    <h5>
                                        <i class="la la-check text-theme mr-2"></i> Inquisitiveness
                                    </h5>
                                </div>
                            </div>
                            <div class="col-md-3 p-2">
                                <div class="card shadow px-2 py-4">
                                    <h5>
                                        <i class="la la-check text-theme mr-2"></i> Honesty
                                    </h5>
                                </div>
                            </div>
                            <div class="col-md-3 p-2">
                                <div class="card shadow px-2 py-4">
                                    <h5>
                                        <i class="la la-check text-theme mr-2"></i> Application of skills you have learned
                                    </h5>
                                </div>
                            </div>
                            <div class="col-md-3 p-2">
                                <div class="card shadow px-2 py-4">
                                    <h5>
                                        <i class="la la-check text-theme mr-2"></i> Behavioral qualities 
                                    </h5>
                                </div>
                            </div>
                            <div class="col-md-3 p-2">
                                <div class="card shadow px-2 py-4">
                                    <h5>
                                        <i class="la la-check text-theme mr-2"></i> Interpersonal skills
                                    </h5>
                                </div>
                            </div>
                            <div class="col-md-3 p-2">
                                <div class="card shadow px-2 py-4">
                                    <h5>
                                        <i class="la la-check text-theme mr-2"></i> Communication skills 
                                    </h5>
                                </div>
                            </div>
                            <div class="col-md-3 p-2">
                                <div class="card shadow px-2 py-4">
                                    <h5>
                                        <i class="la la-check text-theme mr-2"></i> Leadership Quality
                                    </h5>
                                </div>
                            </div>
                            <div class="col-md-3 p-2">
                                <div class="card shadow px-2 py-4">
                                    <h5>
                                        <i class="la la-check text-theme mr-2"></i> Integrity
                                    </h5>
                                </div>
                            </div>
                            <div class="col-md-3 p-2">
                                <div class="card shadow px-2 py-4">
                                    <h5>
                                        <i class="la la-check text-theme mr-2"></i> Smartness
                                    </h5>
                                </div>
                            </div>    
                            <div class="col-md-3 p-2">
                                <div class="card shadow px-2 py-4">
                                    <h5>
                                        <i class="la la-check text-theme mr-2"></i> Administrative skills
                                    </h5>
                                </div>
                            </div> 
                            <div class="col-md-12 p-2">
                                <p>
                                     No grilling session will be done. Usually, a 5-member board with one of them as a chairman. Always try to keep your cool. Stay confident, Use the right body posture, gestures. Do not stammer, be comfortable in the language you wish to talk, either Hindi or English.       
                                </p>
                            </div> 
                            

                        </div>
                </div>
            </div>
        </div>
        <!-- Personality Test -->
        <!-- modal Content -->
            <div class="modal" id="regModal">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                     <!-- Modal body -->
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <!-- Form Content -->
                            <registerForm></registerForm>
                        <!-- Form Content -->
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                    </div>
                </div>
            </div>
        <!-- modal Content -->
    </div>
</template>
<script>

import panelist from './../front/homeFeatureComp.vue'
import registerForm from './interviewGuidRegFormComp.vue'
import carousel from 'vue-owl-carousel'
export default {
    components: { carousel,panelist,registerForm },
    data(){
        return {
            responsiveObj:{
                0:{
                    items :1
                },
                600:{
                    items :1
                },
                1000:{
                    items :2
                },
                1500:{
                    items :2
                }
            },
        }
    }

}
</script>
<style scoped>
.prev, .next
    {
        color: #ec5252;
        position: absolute;
        z-index: 2;
        top: 218px;
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
p{
    color: #484848;
    font-size: 19px;
    text-align: justify;
}
    .about-text{
        font-size: 50px;
        font-weight: bold;
    }
    .back-text{
        font-size:75px;
        color:#f0eeee;
        position:absolute;
    }
    img {
        width: 100%;
    }
    .mainbg{
        
        overflow-wrap: hidden;
        background:url("/frontassets/images/bnbbg-removebg-preview.png");
        background-size: cover;
        background-attachment: fixed;
        background-position: center
        
    }
    .mainbg2
    {
        padding:50px 0;
        background-color: rgba(0, 0, 0, 0.432);
    }
    .rankers-img
    {
    width: 100px !important;
    height: auto;
    }
    .btn-warning {
        font-size:13px
    }
     @media screen and (max-width: 600px) {
        .prev, .next
        {
            display: none
        }
        .back-text
        {
            font-size:30px
        }
     }
    
</style>
