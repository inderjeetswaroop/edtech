<template>
<section class="about-area section--padding overflow-hidden">
    <div class="container">
        <div class="row">
             <div class="col-lg-5">
                <img class="img-fluid"  src="https://s3.ap-south-1.amazonaws.com/benby.images/images/HSdnuCWLwrLiuLKqtnXqy0UJkm8m8x1Q01T2TpQB.png"  alt="About image" >
                <div class="text-center">
                    <h2 class="text-theme director-name"> Jasbir Singh Bajaj</h2>
                    <h4>I.A.S.(VRS) 1987 Tamil Nadu Cadre</h4>
                </div>
                <hr>
                <div class="social-media d-flex flex-wrap mt-5 text-center">
                    <div class="mr-2 border border-danger rounded p-2">
                        <a href="https://www.youtube.com/channel/UC2BSaGEEWDChYQtgGzgGl_A"><i class="la la-youtube la-3x text-danger"></i></a>
                    </div>  
                    <div class="mr-2 border border-primary rounded p-2">
                        <a href="https://www.facebook.com/beandbyias"><i class="la la-facebook la-3x text-primary"></i></a>
                    </div>  
                    <div class="mr-2 border border-secondary rounded p-2">
                        <a href="https://www.instagram.com/be_n_by_ias/"><i class="la la-instagram la-3x text-secondary"></i></a>
                    </div>  
                    <div class="mr-2 border border-info rounded p-2">
                        <a href="https://t.me/beandbyias"><i class="la la-telegram la-3x text-info"></i></a>
                    </div>  
                </div>
            </div>
            <div class="col-lg-6">
                <div class="about-content pb-5">
                    <div class="section-heading">
                        <h3 class="mb-2 text-theme">Director's Message</h3>
                        <h2 class="section__title">&#8220; Get mentored by those who have succeeded. &#8221;</h2>
                        <span class="section-divider"></span>
                        <p class="section__desc">
                              It doesn’t need to be a topper or a gold medallist for being successful in Civil Services Examination conducted by UPSC. Being focussed and persistently hard worker is the key to success for which you need a motivator, guide and mentor, who not only prepare you for this challenge with his own example of success and experience of unique nature having conquered the summit in his fist and the only attempt in perhaps one of the most difficult examination in the country. A moment with a right mentor is worth more than spending an hour with an amateur.
                        </p>
                    </div><!-- end section-heading -->
                    <div class="row pt-4 pb-3">
                        <div class="col-lg-4 responsive-column-half">
                            <div class="info-icon-box mb-3">
                                <div class="icon-element icon-element-md shadow-sm">
                                    <i class="la la-pager text-primary"></i>
                                </div>
                                <h4 class="fs-20 font-weight-semi-bold pt-3">Mentorship by Former Civil Servants</h4>
                            </div><!-- end info-icon-box -->
                        </div><!-- end col-lg-4 -->
                        <div class="col-lg-4 responsive-column-half">
                            <div class="info-icon-box mb-3">
                                <div class="icon-element icon-element-md shadow-sm">
                                    <i class="la la-tv text-success"></i>
                                </div>
                                <h4 class="fs-20 font-weight-semi-bold pt-3">Answer Writing Skills</h4>
                            </div><!-- end info-icon-box -->
                        </div><!-- end col-lg-4 -->
                        <div class="col-lg-4 responsive-column-half">
                            <div class="info-icon-box mb-3">
                                <div class="icon-element icon-element-md shadow-sm">
                                    <i class="la la-users text-warning"></i>
                                </div>
                                <h4 class="fs-20 font-weight-semi-bold pt-3">Hybrid Class Rooms</h4>
                            </div>
                        </div>
                    </div>
                    <div class="btn-box">
                        <router-link to="/about-us/director-message" class="btn theme-btn">Learn More <i class="la la-arrow-right icon ml-1"></i></router-link> 
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</section>

</template>
<script>
export default {
    
}
</script>
<style scoped>
    .director-name
    {
        font-size: 30px;
        font-weight: 600;
        margin-top: 31px;
    }
</style>