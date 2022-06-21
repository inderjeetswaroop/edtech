<template>
    <div>
        
        
        <h4 :class="msgcolor">{{successmsg}}</h4>
       
    <form class="needs-validation add-product-form" novalidate="" @submit.prevent="addproduct">
        
        <div class="row product-adding">
            <div class="col-xl-12 border border-success p-3">
                <div class="form-group row">
                    <label class="col-xl-2 col-sm-2 mb-0">Product Name</label>
                    <input type="text" class="form-control col-xl-10 col-sm-10" v-model="productInfo.title" placeholder="Product name or title">
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
                                <input type="text" class="form-control " v-model="productInfo.procode" placeholder="Product SKU or code">
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
                                <p class="text-warning">Price Setting<currency-symbol></currency-symbol></p>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-xl-12 col-sm-12 mb-0">Regular Price </label>
                                    <input type="number" class="form-control ml-3" v-model="productInfo.price" placeholder="Product price(Regular/MRP)">
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
                                    <input type="text" class="form-control ml-3" v-model="productInfo.salePrice" placeholder="Product sale price)">
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
                                        <input type="checkbox" class="form-check-input" v-model="productInfo.stockstatus">In Stock
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
                                    <input type="number" class="form-control ml-3" v-model="productInfo.stockqty" placeholder="Product stock quantity">
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
                            <select class="form-control digits col-xl-7 col-sm-7"  @change="prcats($event)" v-model="productInfo.category">

                                <option value="0">Select Categories :</option>
                                <option v-for="cList in catList" :key="cList.id" :value="cList.id" >{{cList.catname}}</option>
                                
                            </select>
                            <br>
                            <br>
                            <span v-for="(catToadde,index) in procatlist" :key="index">
                                <div class="alert alert-success alert-dismissible" style="width:auto">
                                    <button type="button" class="close" data-dismiss="alert" @click="removeCats(catToadde)">&times;</button>
                                    <singcatdetail :cid="catToadde"></singcatdetail>
                                </div>
                            </span>
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
                            <select class="form-control digits col-xl-7 col-sm-7"  v-model="productInfo.proType">

                                <option value="1">Simple :</option>
                                <option value="0">Variable :</option>                               
                                
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
                            <textarea class="form-control" rows="2" v-model="productInfo.mkeywords"   placeholder="Meta Keywords"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="comment">Meta Description:</label>
                            <textarea class="form-control" rows="3" v-model="productInfo.mdescription"   placeholder="Meta Description"></textarea>
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
                                                <li v-for="err of error.productprimeImage" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                                <addimage-input :imagecount="1" @getImageData="imglist"></addimage-input>
                                <img v-if="primeImage" :src="primeImage" height="70" width="70">
                                
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
                            <input type="number" class="form-control" v-model="productInfo.weight" placeholder="Enter Product Weight">
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
                            <input type="number" class="form-control col-xl-11 col-sm-11 ml-3" v-model="productInfo.length" placeholder="Enter Product Length">
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
                            <input type="number" class="form-control col-xl-11 col-sm-11 ml-3" v-model="productInfo.width" placeholder="Enter Product Width">
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
                            <input type="number" class="form-control col-xl-11 col-sm-11 ml-3" v-model="productInfo.height" placeholder="Enter Product Height">
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
                    <vue-editor v-model="productInfo.shortdescription" :editorToolbar="customToolbar"></vue-editor>
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
                    <vue-editor v-model="productInfo.longdescription" :editorToolbar="customToolbar"></vue-editor>
                    
                </div>
                <div class="form-group">

                    <label for="comment">Product Special Note(Optional):</label>
                    <vue-editor v-model="productInfo.notes" :editorToolbar="customToolbar"></vue-editor>
                    
                </div>
                <div class="offset-xl-3 offset-sm-4">
                    <button type="submit" class="btn btn-primary">Add</button>
                    <button type="reset" class="btn btn-light">Discard</button>
                    <h4 :class="msgcolor">{{successmsg}}</h4>
                    <!-- Error msg -->
                                        <div v-if="error">
                                            <ul>
                                                <li v-for="err of error" :key="err" class="text-danger" >
                                                    {{err}}
                                                </li>
                                            </ul>
                                        </div>
                                    
                                        <!-- Error msg -->
                </div>
            </div>
            
        </div>
    </form>
    {{normalizedSize}}
    </div>
</template>
<script>

Vue.component('singcatdetail', require('./singleCategoryComp.vue').default);
export default {
    props:["proid"],
    data() {
        return{
            prosid: "",
            productInfo:"",
            catList:"",
            procatlist:[],
            primeImage:"",
            dataImages:[],
            moreimageList:"",
            successmsg:"",
            error:[],
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
    computed:{
        normalizedSize:function(){
            this.prosid = this.proid;
             axios.get("/seller/single-product-proinfo/"+this.prosid)
            .then((response) => {
                this.productInfo = response.data;
                this.primeImage = this.productInfo.mainimage;
                 this.moreimageList= this._.split(this.productInfo.otherimages, ',');
                 
                })
            .catch((error) => console.log(error));
            
            

            
        }
    },
    created() {

            

        axios.get("../../media/all-media")
            .then((response) => this.dataImages = response.data)
            .catch((error) => console.log(error));

         axios.get("../../seller-category-setting/category-raw-list/")
            .then((response) => this.catList = response.data)
            .catch((error) => console.log(error));

       // image
            this.primeImage = this.productInfo.primeImage;
            // this.extraImage = this.productInfo.otherimages;
            
            
    },
    methods:{
        addproduct(){
                this.msgcolor="text-success";
                this.successmsg = "Please Wait..";
                    if (this.productInfo.stockstatus != 1) {
                        this.productInfo.stockstatus = 0
                    }
                    if (this.productInfo.stockstatus !=1 || this.productInfo.stockstatus!= 0) {
                        this.productInfo.stockstatus = 1;    
                    }
                const formdata = new FormData();
                formdata.append("productName",this.productInfo.title);
                formdata.append("productCode",this.productInfo.procode);
                formdata.append("productPrice",this.productInfo.price);
                formdata.append("productSalePrice",this.productInfo.salePrice);
                formdata.append("productStock",this.productInfo.stockstatus);
                formdata.append("productStockQty",this.productInfo.stockqty);
                formdata.append("productCategory",this.productInfo.category);
                formdata.append("productType",this.productInfo.proType);
                formdata.append("productmKeywords",this.productInfo.mkeywords);
                formdata.append("productmDescrip",this.productInfo.mdescription);
                formdata.append("productShortDescrip",this.productInfo.shortdescription);
                formdata.append("productLongDescrip",this.productInfo.longdescription);
                formdata.append("productNote",this.productInfo.notes);
                formdata.append("productMainImage",this.primeImage);
                formdata.append("productMoreImages",this.extraImage);
                formdata.append("productWeight",this.productInfo.weight);
                formdata.append("productHeight",this.productInfo.height);
                formdata.append("productWidth",this.productInfo.width);
                formdata.append("productLength",this.productInfo.length);
                formdata.append("productId",this.productInfo.id);
                

                axios.post("../edit-product-data",formdata)
                .then((data) =>{
                    console.log(data.data);
                    

                 this.successmsg = "Product Updated successfully";
                 this.error = "";
                })
                .catch(error => {
                    this.msgcolor = "text-danger";
                     this.successmsg = "Please Fix error";
                    this.error = error.response.data.errors;
                    // console.log(this.error);
                })
        },
        imglist(response){
                this.primeImage = response.src;
            },
        imglist2(response){
            this.moreimageList = response;
            // console.log(response);
            for (let i = 0; i < response.length; i++) {
                this.extraImage.push(response[i].src);
                
            }
            // console.log(response[0].src);
        },
        prcats(str){
            this.procatlist.push(str.target.value);
            this.category = this.procatlist;
            
        },
        removeCats(catid){
            var myindex = this.procatlist.indexOf(catid);
             this.procatlist.splice(myindex,1);
             this.category = this.procatlist;
           
        },
         onSelectImage(response){
                this.primeImage = response;
            },
        
    }
    
}
</script>
<style scoped>
    label{
        font-size:12px !important;
    }
</style>