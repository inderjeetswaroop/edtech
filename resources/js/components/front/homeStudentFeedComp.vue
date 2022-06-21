<template>
    <section class="testimonial-area section-padding">
        <div class="container">
            <div class="section-heading text-center">
                <h5 class="ribbon ribbon-lg mb-2">Testimonials</h5>
                <h2 class="section__title">Hear from our Students</h2>
                <span class="section-divider"></span>
            </div><!-- end section-heading -->
        </div><!-- end container -->

        

        <!-- The Modal -->
        <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">{{studentName}}</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <div v-html="studentMsg"></div>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
        </div>

        <div class="container">
             <carousel :autoplay="true" 
                        :nav="false" 
                        :items="3" 
                        :dots="true"
                        :autoplayTimeout="3000"
                        :autoplayHoverPause="true"
                        :responsive="responsiveObj"
                        >

                    <div class="card card-item mx-3">
                        <div class="card-body">
                            <div class="media media-card align-items-center pb-3">
                                <div class="media-img avatar-md">
                                    <img src="/frontassets/images/fmMz81qxn749fM9pbGDlnI6D8baBNCzD7MBbrLsK.png" alt="Testimonial avatar" class="rounded-full">
                                </div>
                                <div class="media-body">
                                    <h5>Priyansh Yadav</h5>
                                    <div class="d-flex align-items-center pt-1">
                                        <span class="lh-18 pr-2">Student</span>
                                    </div>
                                </div>
                            </div><!-- end media -->
                            <div class="card-text">
                                I am currently a student of Law Optional at BE N BY IAS under Jasbir Bajaj sir. 
                                <a href="#" data-toggle="modal" data-target="#myModal" class="text-theme" @click="studentFeed('Priyansh Yadav','What I have under taken there is a good amount of focus on Conceptual clarity and real understanding of the core concepts of Law Optional paper. Sir equally focuses on the aspects of answer writing and doubt clearing in the classes. I highly recommend this course to anyone who is preparing for  UPSC CSE 2022 or 2023 with Law Optional')">Read More</a>
                                
                            </div>
                        </div><!-- end card-body -->
                    </div><!-- end card -->
                 <div class="card card-item mx-3">
                    <div class="card-body">
                        <div class="media media-card align-items-center pb-3">
                            <div class="media-img avatar-md">
                                <img src="/frontassets/images/IY9FivtgUph4tXBptxgZwhdSsmUgQd81faUCNLNT.png" alt="Testimonial avatar" class="rounded-full">
                            </div>
                            <div class="media-body">
                                <h5>Nabanita Mandal</h5>
                                <div class="d-flex align-items-center pt-1">
                                    <span class="lh-18 pr-2">Student</span>
                                </div>
                            </div>
                        </div><!-- end media -->
                        <div class="card-text">
                            I would like to thank Jasbir sir for motivating me to choose law as it was not my first choice. 
                            <a href="#" data-toggle="modal" data-target="#myModal" class="text-theme" @click="studentFeed('Nabanita Mandal','To choose Law as an Optional in UPSC considering it as a vast subject and the analysis and in-depth studies it requires. My journey started with Jasbir sir being in the first batch and I’m really happy that I not only chose law but also BE N BY IAS for my preparations.  I am really inspired by the personality he has and the way he deals with any topic, doubts clearing and answer writing. Regarding content it is the best, no book is required you just need a content and the video')">Read More</a>
                            
                        </div>
                    </div><!-- end card-body -->
                </div><!-- end card -->
                <div class="card card-item mx-3">
                    <div class="card-body">
                        <div class="media media-card align-items-center pb-3">
                            <div class="media-img avatar-md">
                                <img src="/frontassets/images/FSRpQ888iOGFOsWzVbmFv8XI7opB2GDYGsNS99Vr.png" alt="Testimonial avatar" class="rounded-full">
                            </div>
                            <div class="media-body">
                                <h5>Mayank Chandra</h5>
                                <div class="d-flex align-items-center pt-1">
                                    <span class="lh-18 pr-2">Student</span>
                                </div>
                            </div>
                        </div><!-- end media -->
                        <div class="card-text">
                            It has been a great experience at BE N BY IAS. Jasbir sir has a holistic and exam-oriented 
                            <a href="#" data-toggle="modal" data-target="#myModal" class="text-theme" @click="studentFeed('Mayank Chandra','Jasbir sir has a holistic and exam-oriented approach as far as Law optional is concerned. It is really appreciable and recommendable that sir who has served as an IAS officer and who has retired from such a senior position has decided to share his experience and his knowledge with all his students. Sir has explained each and every concept in great detail and in a very comprehensible and inducive manner. So I strongly recommend all those aspirants who want to take Law as optional should consider BE N BY IAS once.')">Read More</a>
                            
                        </div>
                    </div><!-- end card-body -->
                </div><!-- end card -->
                 <div class="card card-item mx-3">
                    <div class="card-body">
                        <div class="media media-card align-items-center pb-3">
                            <div class="media-img avatar-md">
                                <img src="/frontassets/images/ftkKcGKeDZ4N2rNampO1g5sGuRbeBGsIWtSvAQeb.png" alt="Testimonial avatar" class="rounded-full">
                            </div>
                            <div class="media-body">
                                <h5>Divya</h5>
                                <div class="d-flex align-items-center pt-1">
                                    <span class="lh-18 pr-2">Student</span>
                                </div>
                            </div>
                        </div><!-- end media -->
                        <div class="card-text">
                            I belong to the July batch of Law Optional at BE N BY IAS. I am very glad to be part
                            <a href="#" data-toggle="modal" data-target="#myModal" class="text-theme" @click="studentFeed('Divya','I am very glad to be part of this batch and I feel very comfortable because Jasbir Bajaj sir explains each and every word which is there in the definition. He helps us to understand all topics immediately and give illustration, detail analysis of the case which helps us to enrich our knowledge. Also in our student<span>&#8217;</span>s portal all issues and queries are addressed immediately making us feel that we are not in online classes.')">Read More</a>
                            
                        </div>
                    </div><!-- end card-body -->
                </div><!-- end card -->
                <div class="card card-item mx-3">
                    <div class="card-body">
                        <div class="media media-card align-items-center pb-3">
                            <div class="media-img avatar-md">
                                <img src="/frontassets/images/ZjFPSR7xM1FU5qLUhJbi5shEdvnIzR0GblfSX7Dh.png" alt="Testimonial avatar" class="rounded-full">
                            </div>
                            <div class="media-body">
                                <h5>Saurabh Agarwal</h5>
                                <div class="d-flex align-items-center pt-1">
                                    <span class="lh-18 pr-2">Student</span>
                                </div>
                            </div>
                        </div><!-- end media -->
                        <div class="card-text">
                            I am taking a Law Optional Classes from BE N BY IAS under the guidance of Jasbir Bajaj Sir. 
                            <a href="#" data-toggle="modal" data-target="#myModal" class="text-theme" @click="studentFeed('Saurabh Agarwal','He is a very dedicated teacher. He teaches with lot of passion. He always emphasis on learning than mugging up. Jasbir sir is providing so much of depth into the concepts that we understand it easily. Notes are very clear and concise no need to read from anywhere else. I would recommend everyone who is taking Law Optional to go and join BE N BY IAS. Their technical team is also very supportive. Jasbir sir is not only teaching us also guiding us.')">Read More</a>
                            
                        </div>
                    </div><!-- end card-body -->
                </div><!-- end card -->


             </carousel>
        </div><!-- container-fluid -->
    </section><!-- end testimonial-area -->
</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
components: { carousel },    
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
                    items :3
                },
                1500:{
                    items :3
                }
            },
            studentName:"",
            studentMsg:"",
        }
    },
    methods:{
        studentFeed(sName,sMsg){
            this.studentName = sName;
            this.studentMsg = sMsg;
        }
    }
}
</script>
<style scoped>

</style>