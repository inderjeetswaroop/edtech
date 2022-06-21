<template>
        <div class="sidebar">
           
            <div class="card card-item">
                <div class="card-body">
                    <h3 class="card-title fs-18 pb-2">Categories</h3>
                    <div class="divider"><span></span></div>
                    <div v-for="category in catList" :key="category.id" class="custom-control custom-checkbox mb-1 fs-15">
                        <router-link class="text-black" :to="'/post-category/'+category.catName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')+'/'+category.id">
                            <ul class="d-flex">
                                <li><i class="la la-dot-circle text-theme mr-2"></i></li>
                                <li>{{category.catName}}</li>
                                <li>(<count-cat :catId="category.id"></count-cat>)</li>
                            </ul>
                        </router-link>
                    </div><!-- end custom-control -->
                    
                    
                </div>
            </div><!-- end card -->
            <div class="card card-item">
                <div class="card-body">
                    <h3 class="card-title fs-18 pb-2">Month and Years wise</h3>
                    <div class="divider"><span></span></div>
                    <div class="row p-2">
                        <div class="col-md-6 p-2">
                            <div class="form-group mb-0">
                                <label for="months">Choose Month</label>
                                <select class="form-control form--control pl-3" id="months" v-model="months">
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </div>        
                        </div>
                         <div class="col-md-6 p-2">
                            <div class="form-group mb-0">
                                <label for="months">Choose year</label>
                                <select class="form-control form--control pl-3" id="months" v-model="years">
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                </select>
                            </div>        
                        </div>
                    </div>
                    
                    
                    <div class="view-all-course-btn-box">
                        <button  class="btn theme-btn w-100" @click="datewiseSearch">Search Articles <i class="la la-arrow-right icon ml-1"></i></button>
                    </div>
                </div>
            </div><!-- end card -->
            <div class="card card-item">
                <div class="card-body">
                    <h3 class="card-title fs-18 pb-2">Post Subjects</h3>
                    <div class="divider"><span></span></div>
                    <ul class="d-flex flex-wrap fs-15">
                        <li v-for="(subs,index) in subject" :key="index" class="mr-2">
                            <router-link :to="{ path: '/search', query: { searchkey: subs.name , type:'subject' }}"  class="badge-success badge px-2" >
                                {{subs.name}}
                            </router-link>
                            
                        </li>
                    </ul>
                </div>
            </div><!-- end card -->
            <div class="card card-item">
                <div class="card-body">
                    <h3 class="card-title fs-18 pb-2">Post Tags</h3>
                    <div class="divider"><span></span></div>
                    <ul class="d-flex flex-wrap fs-15">
                        <li v-for="(tag,index) in taggs" :key="index" class="mr-2">
                            <router-link :to="{ path: '/search', query: { searchkey: tag.name , type:'tag' }}" :class="index % 2 ==0 ?'badge-danger':'badge-warning'" class="badge px-2" :for="index++">
                                {{tag.name}}
                            </router-link>
                            
                        </li>
                    </ul>
                </div>
            </div><!-- end card -->

            <div class="card card-item">
                <div class="card-body">
                    <h3 class="card-title fs-18 pb-2">Connect & Follow</h3>
                    <div class="divider"><span></span></div>
                    <ul class="social-icons social-icons-styled social--icons-styled">
                        <li><a href="#"><i class="la la-facebook"></i></a></li>
                        <li><a href="#"><i class="la la-twitter"></i></a></li>
                        <li><a href="#"><i class="la la-instagram"></i></a></li>
                        <li><a href="#"><i class="la la-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return {
            catList:{},
            taggs:{},
            subject:{},
            months:"02",
            years:"2022",
        }
    },
    created(){
        // Blog Cat list
         axios.get("/front-blog-category-list")
            .then((response) => this.catList = response.data)
            .catch((error) => console.log(error));

        // Blog tags list
        axios.get("/latest-tags-list/20")
                .then((response) => this.taggs = response.data)
                .catch((error) => console.log(error));

        // blog subject list
        axios.get("/all-subject-list")
                .then((response) => this.subject = response.data)
                .catch((error) => console.log(error));
        

    },
    methods:{
                datewiseSearch(){
                    var range = this.years+"-"+ this.months;
                    this.$router.push({path:'/search', query:{searchkey: range, type: "range"}})    
                }
    }
}
</script>
<style scoped>
  .text-theme{
      color: #dc3545
  }
</style>