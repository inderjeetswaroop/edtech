<template>
        <!--======================================
        START FEATURE AREA
        ======================================-->
        <section class="feature-area pb-90px mt-5">
            <div class="container-fluid">
                <div class="container">
                    <div class="section-heading text-center">
                        <!-- <h5 class="ribbon ribbon-lg mb-2">Get mentored by those who have succeeded</h5> -->
                        <h2 class="section__title">Our Panelist </h2>
                        <span class="section-divider"></span>
                    </div>
                    <div class="row">
                        <div class="col-md-12 p-2">
                                <carousel :autoplay="true" 
                                    :nav="false" 
                                    :items="5" 
                                    :dots="false"
                                    :autoplayTimeout="3000"
                                    :autoplayHoverPause="true"
                                    :responsive="responsiveObj"
                                    >
                                    <template slot="prev"><span class="prev card p-md-2 p-sm-0 ml-2"><i class="la la-angle-left text-theme la-2x"></i></span></template>
                                            <div class="p-3">
                                                <img  src="/frontassets/images/n5wccc5d8AOmqsAL1oT62vgJ08c1JWUSwVZ8OL7t.png" alt="First slide"  >
                                            </div>
                                            <div class="p-3">
                                                <img  src="/frontassets/images/Qtx5b59yUFNT8jARZcnrnj5EplIkwp1dGdF0TMEy.png" alt="First slide">
                                            </div>
                                            <div class="p-3">
                                                <img  src="/frontassets/images/jtVEgFNB19YP0lwClnWXNY1fC39Wd8r9X1Qnh43X.png" alt="First slide">
                                            </div>
                                            <div class="p-3">
                                                <img  src="/frontassets/images/Vo8XBva0ooufHry30rjkTaV2TICneRyvApI37QYU.png" alt="First slide">
                                            </div>
                                            <div class="text-center p-3" @click="testimonial('IAS Debendranath Sarangi','Dear Jasbir, It gives me immense pleasure to learn that you are going to don the role of a “ mentor “ to prospective Civil Servants of the country. There cannot be a better and nobler service than this. Our country with multitudinous challenges and equally glorious opportunities needs Civil Servants of high calibre and sterling character. No other person than you is well placed to play this role of mentoring and shaping aspirants into future Civil Servants of the country. You are a self-made man, having succeeded through hard and sincere efforts. I wish you the very best in your new endeavour.<br><b>Warm regards, Debendranath Sarangi IAS ( Retd.).</b>')">
                                                <img  src="/frontassets/images/k3nDEwNT3FlAPZPar7QiXstd8LSIjrrOMxrMMLCM.png" alt="First slide" >
                                                <p class="text-theme">Read Quote</p>
                                            </div>                                     
                                            
                                            <div class="p-3 text-center" @click="testimonial('IAS Skandan','The journey of a Civil Servant is a pilgrimage to serve the people of this vast and varied nation. There this so much dependence on efficient delivery of services to the common man by the Civil Servant. I am sure the project by Jasbir Bajaj will bring forth the best in the candidates who aspire to serve the country as Civil servants.<br><b>My best wishes to each one of you,<br> Skandan IAS retd.</b>')">
                                                <img src="/frontassets/images/MEoFw6vTJE1oJacMRzrcz90lCFF382TezXcpkqDV.png" alt="First slide" >
                                                <p class="text-theme">Read Quote</p>
                                            </div>
                                            <div class="p-3 text-center" @click="testimonial('IAS Jalaj Shrivastava','Dear Jasbir, I am delighted to learn that you have taken the initiative of training and preparing the youth of today towards the Civil services, at a time when the generational tilt has again moved towards the All India services as a career option. The recent trend of highly skilled and techno-savvy youth turning towards the social sector instead of commerce and consumerism is exactly what our Nation, and the World by implication, needs. It is also a shift from the old paradigm of faceless bureaucracy, as recent times have shown that one committed bureaucrat can bring about tremendous changes in the lives of the common man with a service-oriented approach to the traditional jobs. I am sure that is exactly the vision you have, about this venture. The challenges of training youth are imperative, for India to gallop towards its rightful place, and time is running out in this age of social media and information explosion. I wish you and your dream project <b>: BE N BY IAS</b> all success and my patent all success and my patent support.<br><b>with regards,Jalaj Shrivastava, IAS (AGMUT: 1984)</b>')">
                                                <img src="/frontassets/images/8LQpRV3X0H7B1i67AyFGj58tg3ZLsTIBJqF41JKY.png" alt="First slide" >
                                                <p class="text-theme">Read Quote</p>
                                            </div>
                                            <div class="p-3 text-center">
                                                <img  src="/frontassets/images/HBXuJe8XxsgrIMuMXjcrMnrZJRMhkqRLr87z9D0r.png" alt="First slide">
                                            </div>
                                            <div class="p-3 text-center">
                                                <img  src="/frontassets/images/5JJUyQOzNpWdhZbufS949znc7CdUngu8KvzC8VA6.png" alt="First slide">
                                            </div>
                                            
                                            <div class="p-3 text-center" @click="testimonial('IPS Shankar Rao','Dear Jasbir, I am much delighted to know that you have taken up the responsibility of guiding and preparing the future generation of civil servants through your own initiative “BE N BY IAS” ... Be an IAS/ By an IAS. While assuring you all my support in this endeavour I wish all your students aspiring to join us as our junior colleagues in various services great success and a bright future.<br><b>Best wishes,<br>Shankar RAO, IPSDGP, Sikkim Police</b>')">
                                                <img src="/frontassets/images/cHJBf3SG6E3VzNClqmrgFrOvtDQL6ny3WWSRe8zU.png" alt="First slide">
                                                <p class="text-theme">Read Quote</p>
                                            </div>
                                            <div class="p-3 text-center">
                                                <img src="/frontassets/images/P11vIzvJusPQFsPxrmydnvm086R5U3XT3Bp9XJyW.png" alt="First slide">
                                            </div>
                                            <div class="p-3 text-center">
                                                <img src="/frontassets/images/HYeyJafeReqc0OfPyCfFE5W5OXyWTuO4KN8Eyt2r.png" alt="First slide">
                                            </div>
                                            <div class="p-3 text-center">
                                                <img src="/frontassets/images/f9ekqLxbLiTfrsmc6awNTSRZQRQ5DUqkSpZD0I82.png" alt="First slide">
                                            </div>
                                            <div class="p-3 text-center" @click="testimonial('IRS Sanjiv Dutt','My Dear Jasbir Ji, It gives me immense pleasure to learn that having acquired enviable academic and professional qualifications, you have now decided to be a guide and mentor to a vast number of young men and women aspiring to be civil servants through your project “Be N By IAS”.With your vast and rich administrative experience of over three decades, you are better placed than anyone else to help the IAS aspirants to imbibe these skills and develop the competencies so as to realize their dreams. I wish you all success in this laudable venture!<br><b>Warm regards,<br>Yours sincerely,Sanjiv Dutt</b>')">
                                                <img  src="/frontassets/images/WmQYQK1LYuAYRqrxDsXatuq2roMP3WJ8YsExyYvw.png" alt="First slide" >
                                                <p class="text-theme">Read Quote</p>
                                            </div>
                                            
                                            <div class="p-3 text-center">
                                                 <img src="/frontassets/images/tlPtRZ52D3Bvt8q1j50ldOOkcwATMdQ99tf8L7O7.png" alt="First slide">
                                            </div>
                                            <div class="p-3 text-center">
                                                <img src="/frontassets/images/yNBprLVeJ7NJNBWn5UGIAHYQDuiz8hAaEiv18w2K.png" alt="First slide">
                                            </div>
                                            
                                            <div class="p-3 text-center" @click="testimonial('Former Head & Dean Faculty of Law Rajiv Khanna','Dear Jasbir, I am much delighted to know that you have taken up the responsibility of guiding and preparing the future generation of civil servants through your own initiative “BE N BY IAS” ... Be an IAS/ By an IAS. While assuring you all my support in this endeavour I wish all your students aspiring to join us as our junior colleagues in various services great success and a bright future. <br><b>Best wishes,<br>(Former Head & Dean Faculty of Law, Delhi University)</b>')">
                                                <img src="/frontassets/images/b1HvaWNF29UL2VdOTRdcPzwXSQ9JguY9Y9yB8K4S.png" alt="First slide" >
                                                <p class="text-theme">Read Quote</p>
                                            </div>
                                           
                                    <template slot="next"><span class="next card p-md-2 p-sm-0 ml-2"><i class="la la-angle-right text-theme la-2x"></i></span></template>     
                                </carousel> 
                        </div>
                      </div>
                    </div>
                    <!-- Modal -->
                       <div :style="{display:modalDis}" class="panelModal-container">
                           <div class="panel-body">
                               <a class="modal-close float-right text-danger" @click="closeModal"> X </a>
                               <h2>{{officerName}}</h2>
                               <br>
                               <p v-html="officerMsg"></p>
                           </div>
                       </div>
                    <!-- Modal -->
            </div>

        </section><!-- end feature-area -->
        <!--======================================
            END FEATURE AREA
        ======================================-->
</template>
<script>
import carousel from 'vue-owl-carousel'

export default {
components: { carousel },    
    data(){
        return {
            responsiveObj:{
                0:{
                    items :2
                },
                600:{
                    items :2
                },
                1000:{
                    items :5
                },
                1500:{
                    items :5
                }
            },
            officerName:"",
            officerMsg:"",
            modalDis:"none",
        }
    },
    methods: {
        testimonial(OffName,OffMsg){
            this.modalDis = "block";
            this.officerName = OffName;
            this.officerMsg = OffMsg;
        },
        closeModal(){
            this.modalDis = "none";
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
    img{
        cursor: pointer;
    }
    .panelModal-container{
        position: fixed;
        z-index: 9;
        width: 100%;
        height: 900px;
        background: #00000087;
        top: 0;
        bottom: 0;
        padding: 100px;
    }
    .panel-body{
        background: white;
        margin-top: 150px;
        padding: 50px;
        border-radius: 10px;
    }
    .modal-close{
        font-size: 40px;
        cursor: pointer;
        margin-top: -26px;
        margin-right: -26px;
        
    }

    @media screen and (max-width: 600px) {
        .prev, .next
        {
            display: none
        }
        .panelModal-container{
            padding: 10px;
            width: 94%;
            top: -131px;
            position:absolute;
        }
         .panel-body{
            margin-top: 65px;
            padding: 20px;
        }
    }


</style>