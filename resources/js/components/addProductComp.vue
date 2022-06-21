<template>
    <div>
        
        <h4 :class="msgcolor">{{successmsg}}</h4>
    <form class="needs-validation add-product-form" novalidate="" @submit.prevent="addproduct">
        
        <div class="row product-adding">
            <div class="col-xl-12 border border-success p-3">
                <div class="form-group row">
                    <label class="col-xl-2 col-sm-2 mb-0">Product Name</label>
                    <input type="text" class="form-control col-xl-10 col-sm-10" v-model="protitle" placeholder="Product name or title">
                    <br>
                    <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.productName" :key="err" class="text-danger" >
                                             {{err}}
                                        </li>
                                    </ul>
                                </div>
                               
                                <!-- Error msg -->
                </div>
            </div>
            
            <div class="col-xl-4 border border-success p-3 mt-2">
                
                    <div class="form">
                        
                         <div class="form-group row">
                             <div class="col-md-12">
                                 <label >Product SKU</label>
                                <input type="text" class="form-control " v-model="procode" placeholder="Product SKU or code">
                                <!-- Error msg -->
                                    <div v-if="error">
                                        <ul>
                                            <li v-for="err of error.productCode" :key="err" class="text-danger" >
                                                {{err}}
                                            </li>
                                        </ul>
                                    </div>
                                
                                    <!-- Error msg -->
                             </div>
                            
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-12">
                                <p class="text-warning">Price Setting</p>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-xl-12 col-sm-12 mb-0">Regular Price</label>
                                    <input type="number" class="form-control ml-3" v-model="proprice" placeholder="Product price(Regular/MRP)">
                                    <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.productPrice" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                </div>  
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-xl-12 col-sm-12 mb-0">Sale Price</label>
                                    <input type="text" class="form-control ml-3" v-model="prosaleprice" placeholder="Product sale price)">
                                    <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.productSalePrice" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                </div>  
                            </div>
                        </div>
                        <hr>
                        
                        <div class="row">
                            <div class="col-md-12">
                                <p class="text-warning">Inventory setting</p>
                            </div>
                            <div class="col-md-4">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" v-model="prostock">In Stock
                                    </label>
                                     <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.productStock" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                    
                                </div>
                                  
                            </div>
                            <div class="col-md-8">
                                <div class="form-group row">
                                    <label class="col-xl-12 col-sm-12 mb-0">Stock Quantity</label>
                                    <input type="number" class="form-control ml-3" v-model="prostockqty" placeholder="Product stock quantity">
                                     <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.productStockQty" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                </div>  
                            </div>
                        </div>
                        <hr>
                        
                    </div>
                    
                
            </div>
            <div class="col-xl-4 border border-success p-3 mt-2">
                <div class="add-product">
                    <div class="form">
                        <div class="form-group row">
                            <label for=" " class="col-xl-4 col-sm-4 mb-0">Pro Categories</label>
                            
                            <select class="form-control digits col-xl-7 col-sm-7" v-model="category" @change="prcats($event)">

                                <option value="0">Select Categories :</option>
                                <option v-for="cList in catList" :key="cList.id" :value="cList.id" >{{cList.catname}}</option>
                                
                            </select>
                            
                            <!-- <span v-for="(catToadde,index) in procatlist" :key="index">
                                <div class="alert alert-success alert-dismissible" style="width:auto">
                                    <button type="button" class="close" data-dismiss="alert" @click="removeCats(catToadde)">&times;</button>
                                    <singcatdetail :cid="catToadde"></singcatdetail>
                                </div>
                            </span> -->
                            <!-- {{category}} -->
                             <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.productCategory" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                        </div>
                         <div class="form-group row">
                            <label for=" " class="col-xl-4 col-sm-4 mb-0">Product Type</label>
                            <select class="form-control digits col-xl-7 col-sm-7"  v-model="proType">

                                <option value="1">Simple </option>
                                <option value="0">Variable </option>                               
                                
                            </select>
                             <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.productType" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                                      
                        </div>
                        <div class="form-group">
                            <label for="comment">Meta Keywords:</label>
                            <textarea class="form-control" rows="2" v-model="prometakeyword"   placeholder="Meta Keywords"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="comment">Meta Description:</label>
                            <textarea class="form-control" rows="3" v-model="prometadescript"   placeholder="Meta Description"></textarea>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            <div class="col-xl-4 border border-success p-3 mt-2">
                <div class="add-product">
                    <div class="form">
                        <div class="form-group">
                                
                                <p>Product Main Image</p> 
                                <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.productMainImage" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                <addimage-input :imagecount="1" @getImageData="imglist"></addimage-input>
                                <img v-if="mainimage" :src="mainimage" height="70" width="70">
                                
                         </div>
                    </div>
                </div>
                <div class="add-product">
                    <div class="form">
                        <div class="form-group">
                                
                                <p>More Product images </p>
                                <addimage-input :imagecount="10" @getImageData="imglist2"></addimage-input>
                                <div v-if="moreimageList">
                                    <div  v-for="mimg in moreimageList" :key="mimg.id">
                                        <img  :src="mimg.src" height="70" width="70">
                                    </div>
                                </div>
                               
                         </div>
                    </div>
                </div>
                
                
            </div>
            <div class="col-xl-4 border border-success p-3 mt-2">
                    <div class="form-group row">
                        <div class="col-md-12">
                            <h4>Physical Appearance</h4>
                            <label>Product Weight</label>
                            <input type="number" class="form-control" v-model="proweight" placeholder="Enter Product Weight">
                            <br>
                            <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.productWeight" :key="err" class="text-danger" >
                                            {{err}}
                                        </li>
                                    </ul>
                                </div>
                            
                                <!-- Error msg -->
                        </div>
                        
                    
                        <div class="col-md-4">
                            <label >Product Length</label>
                            <input type="number" class="form-control col-xl-11 col-sm-11 ml-3" v-model="prolength" placeholder="Enter Product Length">
                            <br>
                            <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.productLength" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->    
                        </div> 
                        <div class="col-md-4">
                            <label >Product Width</label>
                            <input type="number" class="form-control col-xl-11 col-sm-11 ml-3" v-model="prowidth" placeholder="Enter Product Width">
                            <br>
                            <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.productWidth" :key="err" class="text-danger" >
                                            {{err}}
                                        </li>
                                    </ul>
                                </div>
                            
                                <!-- Error msg -->    
                        </div> 
                        <div class="col-md-4">
                            <label >Product Height</label>
                            <input type="number" class="form-control col-xl-11 col-sm-11 ml-3" v-model="proheight" placeholder="Enter Product Height">
                            <br>
                            <!-- Error msg -->
                                <div v-if="error">
                                    <ul>
                                        <li v-for="err of error.productHeight" :key="err" class="text-danger" >
                                            {{err}}
                                        </li>
                                    </ul>
                                </div>
                            
                                <!-- Error msg -->    
                        </div>    


                    </div>
            </div>
            <div class="col-xl-4 border border-success p-3 mt-2">

            </div>
            <div class="col-md-12 border border-success p-3 mt-2">
                <div class="form-group">
                    <label for="comment">Short Description:</label>
                    <vue-editor v-model="proshortdescription" :editorToolbar="customToolbar"></vue-editor>
                     <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error.productShortDescrip" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                </div>
            </div>
            <div class="col-md-12 border border-success p-3 mt-2">
                <div class="form-group">
                    <label for="comment">Long Description:</label>
                    <vue-editor v-model="prolongdescription" :editorToolbar="customToolbar"></vue-editor>
                    
                </div>
                <div class="form-group">

                    <label for="comment">Product Special Note(Optional):</label>
                    <vue-editor v-model="proSpecialNote" :editorToolbar="customToolbar"></vue-editor>
                    
                </div>
                <div class="offset-xl-3 offset-sm-4">
                    <button type="submit" class="btn btn-primary">Add</button>
                    <button type="reset" class="btn btn-light">Discard</button>
                    <h4 :class="msgcolor">{{successmsg}}</h4>
                </div>
            </div>
            
        </div>
    </form>
    </div>
</template>
<script>

Vue.component('singcatdetail', require('./singleCategoryComp.vue').default);
export default {

    data() {
        return{
            localhos : "http://localhost/myCom/storage/app/public/",
            catList:"",
            protitle:"",
            prostock:1,
            procatlist:[],
            category:"0",
            procode:"",
            proprice:"",
            prosaleprice:"",
            prostockqty:"",
            proType:"1",
            proshortdescription:"",
            prolongdescription:"",
            proSpecialNote:"",
            prometakeyword:"",
            prometadescript:"",
            mainimage:"",
            dataImages:[],
            moreimageList:"",
            successmsg:"",
            error:[],
            proweight:"0",
            proheight:"0",
            prowidth:"0",
            prolength:"0",
            extraImage:[],
            msgcolor:"text-success",
            customToolbar: [[{ header: [false, 1, 2, 3, 4, 5, 6] }],["bold", "italic", "underline"], [{ list: "ordered" }, { list: "bullet" }, { list: "check" }], [
    { align: "" },
    { align: "center" },
    { align: "right" },
    { align: "justify" }
  ]]
            
        }
    },
    created() {

        axios.get("../../media/all-media")
            .then((response) => this.dataImages = response.data)
            .catch((error) => console.log(error));

         axios.get("../../seller-category-setting/category-raw-list/")
            .then((response) => this.catList = response.data)
            .catch((error) => console.log(error));
    },
    methods:{
        addproduct(){
                this.msgcolor="text-success";
                this.successmsg = "Please Wait..";
                    if (this.prostock != 1) {
                        this.prostock = 0
                    }
                    if (this.proType !=1 || this.proType!= 0) {
                        this.proType = 1;    
                    }
                const formdata = new FormData();
                formdata.append("productName",this.protitle);
                formdata.append("productCode",this.procode);
                formdata.append("productPrice",this.proprice);
                formdata.append("productSalePrice",this.prosaleprice);
                formdata.append("productStock",this.prostock);
                formdata.append("productStockQty",this.prostockqty);
                formdata.append("productCategory",this.category);
                formdata.append("productType",this.proType);
                formdata.append("productmKeywords",this.prometakeyword);
                formdata.append("productmDescrip",this.prometadescript);
                formdata.append("productShortDescrip",this.proshortdescription);
                formdata.append("productLongDescrip",this.prolongdescription);
                formdata.append("productNote",this.proSpecialNote);
                formdata.append("productMainImage",this.mainimage);
                formdata.append("productMoreImages",this.extraImage);
                formdata.append("productWeight",this.proweight);
                formdata.append("productHeight",this.proheight);
                formdata.append("productWidth",this.prowidth);
                formdata.append("productLength",this.prolength);
                

                axios.post("add-new-product-data",formdata)
                .then((data) =>{
                    console.log(data.data);
                    

                 this.successmsg = "Product added successfully";
                 this.error = "";
                this.protitle="";
                this.prostock=1;
                this.category="0";
                this.procode="";
                this.proprice="";
                this.prosaleprice="";
                this.prostockqty="";
                this.proType="1";
                this.proshortdescription="";
                this.prolongdescription="";
                this.proSpecialNote="";
                this.prometakeyword="";
                this.prometadescript="";
                this.mainimage="";
                this.moreimageList="";
                this.proweight="0";
                this.proheight="0";
                this.prowidth="0";
                this.prolength="0";
                this.extraImage=[];
                })
                .catch(error => {
                    this.msgcolor = "text-danger";
                     this.successmsg = "Please Fix error";
                    this.error = error.response.data.errors;
                    // console.log(this.error);
                })
        },
        imglist(response){
                this.mainimage = response.src;
            },
        imglist2(response){
            this.moreimageList = response;
            console.log(response);
            for (let i = 0; i < response.length; i++) {
                this.extraImage.push(response[i].src);
                
            }
            // console.log(response[0].src);
        },
        prcats(str){
            // this.procatlist.push(str.target.value);
            this.category = str.target.value;
            
            
        },
        // removeCats(catid){
        //     var myindex = this.procatlist.indexOf(catid);
        //      this.procatlist.splice(myindex,1);
        //      this.category = this.procatlist;
           
        // },
         onSelectImage(response){
                this.mainimage = response;
            },
        
    }
    
}
</script>
<style scoped>
    label{
        font-size:12px !important;
    }
</style>