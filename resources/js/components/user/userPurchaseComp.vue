<template>
    <div>
        <section class="breadcrumb-area py-5 bg-white pattern-bg">
            <div class="container">
                <div class="breadcrumb-content">
                    <div class="section-heading">
                        <h2 class="section__title">My Purchase History</h2>
                    </div><!-- end section-heading -->
                    
                </div>
            </div>
        </section>
        <section class="my-courses-area pt-30px pb-90px">
            <div class="container">
                <div class="my-course-content-wrap">
                        <div class="my-course-cards pt-40px">
                            <div class="row">
                                  <div class="table-responsive">
                                      <table class="table">
                                          <thead>
                                              <tr class="bg-light px-2">
                                                  <th>ID</th>
                                                  <th>Item</th>
                                                  <th>Amount</th>
                                                  <th>Date</th>
                                                  <th>Status</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr v-for="pays in payments" :key="pays.id">
                                                  <td>#{{pays.id}}</td>
                                                  <td>
                                                      <single-course :cid="pays.courseId"></single-course>
                                                      
                                                  </td>
                                                  <td><currency-symbol :priceValue="pays.amount"></currency-symbol></td>
                                                  <td>{{pays.created_at.replace(/T/g," ").replace(/.000000Z/g," ")}}</td>
                                                  <td>
                                                      <span v-if="pays.paymentStatus == 1" class="badge badge-success">Success</span>
                                                      <span v-else class="badge badge-danger">Failed</span>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
Vue.component('single-course', require('./../singleCourseDetailComp.vue').default);

export default {
    data(){
        return {
            payments:{}
        }
    },
    beforeCreate(){
        this.$Progress.start();
         if (!this.$session.has("userId") || !this.$session.exists()) {
                this.$router.push("/user-login");
            }
    },
    created(){

         axios.get("/myPaymentHistory")
            .then((response) => this.payments = response.data)
            .catch((error) => console.log(error));  
        // 
        this.$Progress.finish();
        // 


    }
}
</script>