"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["coursesetting"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CourseListComp.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CourseListComp.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
Vue.component('singcatdetail', (__webpack_require__(/*! ./singleCategoryComp.vue */ "./resources/js/components/singleCategoryComp.vue")["default"]));
Vue.component('singcoursedetail', (__webpack_require__(/*! ./singleCourseDetailComp.vue */ "./resources/js/components/singleCourseDetailComp.vue")["default"]));
Vue.component('productstate-change', (__webpack_require__(/*! ./ChangeProStatusComp.vue */ "./resources/js/components/ChangeProStatusComp.vue")["default"]));
Vue.component('delete-product', (__webpack_require__(/*! ./deleteProductComp.vue */ "./resources/js/components/deleteProductComp.vue")["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["cat"],
  data: function data() {
    return {
      prolist: {},
      catlist: [],
      statevalue: "",
      productid: ""
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/course-dashboard/courses-list").then(function (response) {
      return _this.prolist = response.data;
    })["catch"](function (error) {
      return console.log(error);
    });
  },
  methods: {
    deleteProduct: function deleteProduct(pid) {
      this.productid = pid;
    },
    changeProState: function changeProState(pid) {
      this.productid = pid;
    },
    updatepList: function updatepList(response) {
      this.prolist = response.data;
    },
    restorePro: function restorePro(pid) {
      var _this2 = this;

      axios.get("restore-product/" + pid).then(function (response) {
        return _this2.prolist = response.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Default Title',
    // all titles will be injected into this template
    titleTemplate: '%s | My Awesome Webapp',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'description',
      content: 'foo'
    }]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addCourseComp.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addCourseComp.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
Vue.component('singcatdetail', (__webpack_require__(/*! ./singleCategoryComp.vue */ "./resources/js/components/singleCategoryComp.vue")["default"]));
Vue.component('addimage-input', (__webpack_require__(/*! ./imageInputComp.vue */ "./resources/js/components/imageInputComp.vue")["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      localhos: "http://localhost/myCom/storage/app/public/",
      courseList: "",
      parentCourse: "0",
      isDisabled: true,
      catList: "",
      coursetitle: "",
      coursegroup: "1",
      bundleNaam: "",
      procatlist: [],
      category: "0",
      coursecode: "",
      courseprice: "",
      disprice: "",
      pricenote: "",
      teachername: "",
      classlanguage: "",
      coursetype: "1",
      positivemark: "2",
      negativemark: "1",
      coursemetakeyword: "",
      coursemetadescript: "",
      startdate: "",
      enddate: "",
      lecturestarttime: "",
      lectureendtime: "",
      courseduration: "",
      mainimage: "",
      infovideo: "",
      buyerNotes: "",
      courseshortdescription: "",
      courselongdescription: "",
      coursefeaturepoints: "",
      dataImages: [],
      successmsg: "",
      error: [],
      msgcolor: "text-success",
      bundleDisplayed: "none",
      bundleList: {}
    };
  },
  created: function created() {
    var _this = this;

    // bundle list
    axios.get("/course-dashboard/bundle-list").then(function (response) {
      return _this.bundleList = response.data;
    })["catch"](function (error) {
      return console.log(error);
    }); // bundle list

    axios.get("/media/all-media").then(function (response) {
      return _this.dataImages = response.data;
    })["catch"](function (error) {
      return console.log(error);
    }); // Category List

    axios.get("/course-category-setting/category-raw-list/").then(function (response) {
      return _this.catList = response.data;
    })["catch"](function (error) {
      return console.log(error);
    }); // Category List
    // Course List

    axios.get("/course-dashboard/courses-list/").then(function (response) {
      return _this.courseList = response.data;
    })["catch"](function (error) {
      return console.log(error);
    }); // Course List  
  },
  methods: {
    addproduct: function addproduct() {
      var _this2 = this;

      this.msgcolor = "text-success";
      this.successmsg = "Please Wait..";
      var formdata = new FormData();
      formdata.append("courseName", this.coursetitle);
      formdata.append("cGroup", this.coursegroup);
      formdata.append("bundleNaam", this.bundleNaam);
      formdata.append("courseCode", this.coursecode);
      formdata.append("coursePrice", this.courseprice);
      formdata.append("discountPrice", this.disprice);
      formdata.append("priceNote", this.pricenote);
      formdata.append("teacherName", this.teachername);
      formdata.append("classLanguage", this.classlanguage);
      formdata.append("courseCategory", this.category);
      formdata.append("courseType", this.coursetype);
      formdata.append("positiveMark", this.positivemark);
      formdata.append("negativeMark", this.negativemark);
      formdata.append("courseMetaKeyWord", this.coursemetakeyword);
      formdata.append("courseMetaDescript", this.coursemetadescript);
      formdata.append("courseStartDate", this.startdate);
      formdata.append("courseEndDate", this.enddate);
      formdata.append("lectureStartTime", this.lecturestarttime);
      formdata.append("lectureEndTime", this.lectureendtime);
      formdata.append("courseDuration", this.courseduration);
      formdata.append("courseMainImage", this.mainimage);
      formdata.append("infoVideo", this.infovideo);
      formdata.append("buyerNotes", this.buyerNotes);
      formdata.append("courseShortDescrip", this.courseshortdescription);
      formdata.append("courseLongDescrip", this.courselongdescription);
      formdata.append("courseFeaturepoints", this.coursefeaturepoints);
      formdata.append("parentCourse", this.parentCourse);
      axios.post("/course-dashboard/add-new-course-data", formdata).then(function (data) {
        console.log(data.data);
        _this2.successmsg = "Product added successfully";
        _this2.error = "";
        _this2.coursetitle = "";
        _this2.procatlist = [];
        _this2.category = "0";
        _this2.parentCourse = "0";
        _this2.coursecode = "";
        _this2.courseprice = "";
        _this2.disprice = "";
        _this2.pricenote = "";
        _this2.teachername = "";
        _this2.classlanguage = "";
        _this2.coursetype = "1";
        _this2.negativemark = "1";
        _this2.coursemetakeyword = "";
        _this2.coursemetadescript = "";
        _this2.startdate = "";
        _this2.enddate = "";
        _this2.lecturestarttime = "";
        _this2.lectureendtime = "";
        _this2.courseduration = "";
        _this2.mainimage = "";
        _this2.infovideo = "";
        _this2.buyerNotes = "";
        _this2.courseshortdescription = "";
        _this2.courselongdescription = "";
        _this2.coursefeaturepoints = "";
      })["catch"](function (error) {
        _this2.msgcolor = "text-danger";
        _this2.successmsg = "Please Fix error";
        _this2.error = error.response.data.errors;
        console.log(error.response.data);
      });
    },
    imglist: function imglist(response) {
      this.mainimage = response.src;
    },
    prcats: function prcats(str) {
      // this.procatlist.push(str.target.value);
      this.category = str.target.value;
      console.log(str.target.value);
    },
    // removeCats(catid){
    //     var myindex = this.procatlist.indexOf(catid);
    //      this.procatlist.splice(myindex,1);
    //      this.category = this.procatlist;
    // },
    onSelectImage: function onSelectImage(response) {
      this.mainimage = response;
    },
    chnagetotestseries: function chnagetotestseries(response) {
      this.coursetype = response.target.value;
      if (response.target.value == 0) this.isDisabled = false;else this.isDisabled = true;
    },
    checkCourseGrp: function checkCourseGrp(e) {
      var grpVal = e.target.value;

      if (grpVal == 0) {
        this.bundleDisplayed = "block";
      } else {
        this.bundleDisplayed = "none";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addCourseComp.vue?vue&type=style&index=0&id=42e97b90&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addCourseComp.vue?vue&type=style&index=0&id=42e97b90&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nlabel[data-v-42e97b90]{\n    font-size:12px !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addCourseComp.vue?vue&type=style&index=0&id=42e97b90&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addCourseComp.vue?vue&type=style&index=0&id=42e97b90&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addCourseComp_vue_vue_type_style_index_0_id_42e97b90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addCourseComp.vue?vue&type=style&index=0&id=42e97b90&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addCourseComp.vue?vue&type=style&index=0&id=42e97b90&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addCourseComp_vue_vue_type_style_index_0_id_42e97b90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addCourseComp_vue_vue_type_style_index_0_id_42e97b90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/CourseListComp.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/CourseListComp.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CourseListComp_vue_vue_type_template_id_11f7159a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseListComp.vue?vue&type=template&id=11f7159a& */ "./resources/js/components/CourseListComp.vue?vue&type=template&id=11f7159a&");
/* harmony import */ var _CourseListComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseListComp.vue?vue&type=script&lang=js& */ "./resources/js/components/CourseListComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CourseListComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CourseListComp_vue_vue_type_template_id_11f7159a___WEBPACK_IMPORTED_MODULE_0__.render,
  _CourseListComp_vue_vue_type_template_id_11f7159a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CourseListComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/addCourseComp.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/addCourseComp.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addCourseComp_vue_vue_type_template_id_42e97b90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addCourseComp.vue?vue&type=template&id=42e97b90&scoped=true& */ "./resources/js/components/addCourseComp.vue?vue&type=template&id=42e97b90&scoped=true&");
/* harmony import */ var _addCourseComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addCourseComp.vue?vue&type=script&lang=js& */ "./resources/js/components/addCourseComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _addCourseComp_vue_vue_type_style_index_0_id_42e97b90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addCourseComp.vue?vue&type=style&index=0&id=42e97b90&scoped=true&lang=css& */ "./resources/js/components/addCourseComp.vue?vue&type=style&index=0&id=42e97b90&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _addCourseComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addCourseComp_vue_vue_type_template_id_42e97b90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _addCourseComp_vue_vue_type_template_id_42e97b90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "42e97b90",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/addCourseComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CourseListComp.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/CourseListComp.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseListComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CourseListComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CourseListComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseListComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/addCourseComp.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/addCourseComp.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addCourseComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addCourseComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addCourseComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addCourseComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/addCourseComp.vue?vue&type=style&index=0&id=42e97b90&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/addCourseComp.vue?vue&type=style&index=0&id=42e97b90&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addCourseComp_vue_vue_type_style_index_0_id_42e97b90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addCourseComp.vue?vue&type=style&index=0&id=42e97b90&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addCourseComp.vue?vue&type=style&index=0&id=42e97b90&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/CourseListComp.vue?vue&type=template&id=11f7159a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/CourseListComp.vue?vue&type=template&id=11f7159a& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseListComp_vue_vue_type_template_id_11f7159a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseListComp_vue_vue_type_template_id_11f7159a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseListComp_vue_vue_type_template_id_11f7159a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CourseListComp.vue?vue&type=template&id=11f7159a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CourseListComp.vue?vue&type=template&id=11f7159a&");


/***/ }),

/***/ "./resources/js/components/addCourseComp.vue?vue&type=template&id=42e97b90&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/addCourseComp.vue?vue&type=template&id=42e97b90&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addCourseComp_vue_vue_type_template_id_42e97b90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addCourseComp_vue_vue_type_template_id_42e97b90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addCourseComp_vue_vue_type_template_id_42e97b90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addCourseComp.vue?vue&type=template&id=42e97b90&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addCourseComp.vue?vue&type=template&id=42e97b90&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CourseListComp.vue?vue&type=template&id=11f7159a&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CourseListComp.vue?vue&type=template&id=11f7159a& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("productstate-change", {
        attrs: { proid: _vm.productid },
        on: { updateprolist: _vm.updatepList },
      }),
      _vm._v(" "),
      _c("delete-product", {
        attrs: { proid: _vm.productid },
        on: { updateprolist: _vm.updatepList },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive" }, [
        _c("table", { staticClass: "table table-bordered" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.prolist, function (pList, index) {
              return _c("tr", { key: index }, [
                _c("td", [_vm._v(_vm._s(index + 1))]),
                _vm._v(" "),
                _c("td", [
                  _c("img", {
                    staticClass: "img-response",
                    attrs: { src: pList.featureImg, alt: "", height: "70" },
                  }),
                ]),
                _vm._v(" "),
                _c("td", [
                  pList.courseType === "0"
                    ? _c(
                        "p",
                        { staticClass: "font-weight-bold text-warning" },
                        [
                          _vm._v(
                            "\n                    Test Series\n                "
                          ),
                        ]
                      )
                    : pList.courseType === "1"
                    ? _c(
                        "p",
                        { staticClass: "font-weight-bold text-success" },
                        [
                          _vm._v(
                            "\n                    Class\n                "
                          ),
                        ]
                      )
                    : _c(
                        "p",
                        { staticClass: "font-weight-bold text-success" },
                        [
                          _vm._v(
                            "\n                    Class\n                "
                          ),
                        ]
                      ),
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(pList.courseName))]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c("singcoursedetail", {
                      attrs: { cid: pList.parentCourse },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("td", [
                  _c("h6", { staticClass: "d-flex flex-row" }, [
                    _c(
                      "b",
                      [
                        _c("currency-symbol", {
                          attrs: { priceValue: pList.price },
                        }),
                        _vm._v(" "),
                        pList.discounted_price
                          ? _c("currency-symbol", {
                              staticClass: "text-success",
                              attrs: { priceValue: pList.discounted_price },
                            })
                          : _vm._e(),
                      ],
                      1
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c("singcatdetail", {
                      attrs: { cid: pList.courseCategory },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("td", [
                  pList.status == 1
                    ? _c("span", { staticClass: "badge badge-success" }, [
                        _vm._v("Active"),
                      ])
                    : pList.status == 2
                    ? _c("span", { staticClass: "badge badge-warning" }, [
                        _vm._v("Pending"),
                      ])
                    : _c("span", { staticClass: "badge badge-danger" }, [
                        _vm._v("De-activated"),
                      ]),
                  _vm._v(" "),
                  _c("br"),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default btn-xs",
                      attrs: {
                        "data-target": "#changeprostatemodal",
                        "data-toggle": "modal",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.changeProState(pList.id)
                        },
                      },
                    },
                    [_vm._v("Change Status")]
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  pList.deleted == 1
                    ? _c("div", [
                        _c(
                          "span",
                          { staticClass: "badge badge-danger badge-xs" },
                          [_vm._v("Temporary Deleted")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-xs",
                            on: {
                              click: function ($event) {
                                return _vm.restorePro(pList.id)
                              },
                            },
                          },
                          [_vm._v("Restore")]
                        ),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "div",
                      { staticClass: "btn-group" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-info btn-xs",
                            attrs: {
                              to: {
                                name: "editcourse",
                                params: { courseId: pList.id },
                              },
                            },
                          },
                          [_vm._v("Edit")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger btn-xs",
                            attrs: {
                              type: "button",
                              "data-target": "#prodelModal",
                              "data-toggle": "modal",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.deleteProduct(pList.id)
                              },
                            },
                          },
                          [_vm._v("Delete")]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-success btn-xs",
                        attrs: {
                          to: {
                            name: "couseChapsetting",
                            params: { courseId: pList.id },
                          },
                        },
                      },
                      [
                        pList.courseType === "1"
                          ? _c("span", [
                              _vm._v(
                                "\n                            Class & Lecture Setting \n                        "
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        pList.courseType === "0"
                          ? _c("span", [
                              _vm._v(
                                "\n                            Test Setting\n                        "
                              ),
                            ])
                          : _vm._e(),
                      ]
                    ),
                  ],
                  1
                ),
              ])
            }),
            0
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Sr. No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Main Image ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Course Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Course Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Parents Course")]),
        _vm._v(" "),
        _c("th", [_vm._v("Price / Dis. Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Course Category")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addCourseComp.vue?vue&type=template&id=42e97b90&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addCourseComp.vue?vue&type=template&id=42e97b90&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "d-flex" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "ml-auto" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-warning",
                attrs: { to: { name: "courseSetting" } },
              },
              [_vm._v("Course List")]
            ),
          ],
          1
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c("br"),
      _vm._v(" "),
      _c("h4", { class: _vm.msgcolor }, [_vm._v(_vm._s(_vm.successmsg))]),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "needs-validation add-product-form",
          attrs: { novalidate: "" },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.addproduct($event)
            },
          },
        },
        [
          _c("div", { staticClass: "row product-adding" }, [
            _c("div", { staticClass: "col-xl-12 border border-success p-3" }, [
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-xl-2 col-sm-2 mb-0" }, [
                  _vm._v("Course Name"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.coursetitle,
                      expression: "coursetitle",
                    },
                  ],
                  staticClass: "form-control col-xl-10 col-sm-10",
                  attrs: {
                    type: "text",
                    placeholder: "Enter Course name or title",
                  },
                  domProps: { value: _vm.coursetitle },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.coursetitle = $event.target.value
                    },
                  },
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _vm.error
                  ? _c("div", [
                      _c(
                        "ul",
                        _vm._l(_vm.error.courseName, function (err) {
                          return _c(
                            "li",
                            { key: err, staticClass: "text-danger" },
                            [
                              _vm._v(
                                "\n                                         " +
                                  _vm._s(err) +
                                  "\n                                    "
                              ),
                            ]
                          )
                        }),
                        0
                      ),
                    ])
                  : _vm._e(),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-4 border border-success p-3 mt-2" },
              [
                _c("div", { staticClass: "form" }, [
                  _c("div", { staticClass: "form-group row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("label", [_vm._v("Course Code")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.coursecode,
                            expression: "coursecode",
                          },
                        ],
                        staticClass: "form-control ",
                        attrs: { type: "text", placeholder: "Course code" },
                        domProps: { value: _vm.coursecode },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.coursecode = $event.target.value
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.error
                        ? _c("div", [
                            _c(
                              "ul",
                              _vm._l(_vm.error.courseCode, function (err) {
                                return _c(
                                  "li",
                                  { key: err, staticClass: "text-danger" },
                                  [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(err) +
                                        "\n                                        "
                                    ),
                                  ]
                                )
                              }),
                              0
                            ),
                          ])
                        : _vm._e(),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-xl-4 col-sm-4 mb-0 text-warning",
                        attrs: { for: " " },
                      },
                      [_vm._v("Course Group")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.coursegroup,
                            expression: "coursegroup",
                          },
                        ],
                        staticClass: "form-control digits col-xl-7 col-sm-7",
                        on: {
                          change: [
                            function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.coursegroup = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                            _vm.checkCourseGrp,
                          ],
                        },
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("Single Course"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "0" } }, [
                          _vm._v("Bundle course"),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _vm.error
                      ? _c("div", [
                          _c(
                            "ul",
                            _vm._l(_vm.error.cGroup, function (err) {
                              return _c(
                                "li",
                                { key: err, staticClass: "text-danger" },
                                [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(err) +
                                      "\n                                        "
                                  ),
                                ]
                              )
                            }),
                            0
                          ),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { style: { display: _vm.bundleDisplayed } }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-xl-4 col-sm-4 mb-0 text-warning",
                          attrs: { for: " " },
                        },
                        [_vm._v("Select A bundle")]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.bundleNaam,
                              expression: "bundleNaam",
                            },
                          ],
                          staticClass: "form-control digits col-xl-7 col-sm-7",
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.bundleNaam = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                          },
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("-- Select Bundle Name --"),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.bundleList, function (bunList, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: bunList.id } },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(bunList.bundleName) +
                                    "\n                                        "
                                ),
                              ]
                            )
                          }),
                        ],
                        2
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-xl-4 col-sm-4 mb-0",
                        attrs: { for: " " },
                      },
                      [_vm._v("Parent Course")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.parentCourse,
                            expression: "parentCourse",
                          },
                        ],
                        staticClass: "form-control digits col-xl-7 col-sm-7",
                        on: {
                          change: function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.parentCourse = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "0" } }, [
                          _vm._v("Select Parent course :"),
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.courseList, function (courseitem) {
                          return _c(
                            "option",
                            {
                              key: courseitem.id,
                              domProps: { value: courseitem.id },
                            },
                            [_vm._v(_vm._s(courseitem.courseName))]
                          )
                        }),
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.error
                      ? _c("div", [
                          _c(
                            "ul",
                            _vm._l(_vm.error.courseCategory, function (err) {
                              return _c(
                                "li",
                                { key: err, staticClass: "text-danger" },
                                [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(err) +
                                      "\n                                        "
                                  ),
                                ]
                              )
                            }),
                            0
                          ),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          { staticClass: "col-xl-12 col-sm-12 mb-0" },
                          [_vm._v("Course Standard Price")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.courseprice,
                              expression: "courseprice",
                            },
                          ],
                          staticClass: "form-control ml-3",
                          attrs: {
                            type: "number",
                            placeholder: "Course Satndard Price",
                          },
                          domProps: { value: _vm.courseprice },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.courseprice = $event.target.value
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.error
                          ? _c("div", [
                              _c(
                                "ul",
                                _vm._l(_vm.error.coursePrice, function (err) {
                                  return _c(
                                    "li",
                                    { key: err, staticClass: "text-danger" },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(err) +
                                          "\n                                            "
                                      ),
                                    ]
                                  )
                                }),
                                0
                              ),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          { staticClass: "col-xl-12 col-sm-12 mb-0" },
                          [_vm._v("Dis. Price(Optional)")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.disprice,
                              expression: "disprice",
                            },
                          ],
                          staticClass: "form-control ml-3",
                          attrs: {
                            type: "number",
                            placeholder: "Discounted Price",
                          },
                          domProps: { value: _vm.disprice },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.disprice = $event.target.value
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.error
                          ? _c("div", [
                              _c(
                                "ul",
                                _vm._l(_vm.error.discountPrice, function (err) {
                                  return _c(
                                    "li",
                                    { key: err, staticClass: "text-danger" },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(err) +
                                          "\n                                            "
                                      ),
                                    ]
                                  )
                                }),
                                0
                              ),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "add-product" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "comment" } }, [
                            _vm._v("Price Note(Optional):"),
                          ]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.pricenote,
                                expression: "pricenote",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { rows: "2", placeholder: "Price Note" },
                            domProps: { value: _vm.pricenote },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.pricenote = $event.target.value
                              },
                            },
                          }),
                          _vm._v(" "),
                          _vm.error
                            ? _c("div", [
                                _c(
                                  "ul",
                                  _vm._l(_vm.error.priceNote, function (err) {
                                    return _c(
                                      "li",
                                      { key: err, staticClass: "text-danger" },
                                      [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(err) +
                                            "\n                                            "
                                        ),
                                      ]
                                    )
                                  }),
                                  0
                                ),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-5" }, [
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          { staticClass: "col-xl-12 col-sm-12 mb-0" },
                          [_vm._v("Teacher Name(Optional)")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.teachername,
                              expression: "teachername",
                            },
                          ],
                          staticClass: "form-control ml-3",
                          attrs: {
                            type: "text",
                            placeholder: "Enter teacher Name",
                          },
                          domProps: { value: _vm.teachername },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.teachername = $event.target.value
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.error
                          ? _c("div", [
                              _c(
                                "ul",
                                _vm._l(_vm.error.teacherName, function (err) {
                                  return _c(
                                    "li",
                                    { key: err, staticClass: "text-danger" },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(err) +
                                          "\n                                            "
                                      ),
                                    ]
                                  )
                                }),
                                0
                              ),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-7" }, [
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          { staticClass: "col-xl-12 col-sm-12 mb-0" },
                          [_vm._v("Lecture & Notes Language ")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.classlanguage,
                              expression: "classlanguage",
                            },
                          ],
                          staticClass: "form-control ml-3",
                          attrs: {
                            type: "Text",
                            placeholder: "Enter Class languages",
                          },
                          domProps: { value: _vm.classlanguage },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.classlanguage = $event.target.value
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.error
                          ? _c("div", [
                              _c(
                                "ul",
                                _vm._l(_vm.error.classLanguage, function (err) {
                                  return _c(
                                    "li",
                                    { key: err, staticClass: "text-danger" },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(err) +
                                          "\n                                            "
                                      ),
                                    ]
                                  )
                                }),
                                0
                              ),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-4 border border-success p-3 mt-2" },
              [
                _c("div", { staticClass: "add-product" }, [
                  _c("div", { staticClass: "form" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-xl-4 col-sm-4 mb-0",
                          attrs: { for: " " },
                        },
                        [_vm._v("Course Category")]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.category,
                              expression: "category",
                            },
                          ],
                          staticClass: "form-control digits col-xl-7 col-sm-7",
                          on: {
                            change: [
                              function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.category = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              _vm.prcats,
                            ],
                          },
                        },
                        [
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v("Select Categories :"),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.catList, function (cList) {
                            return _c(
                              "option",
                              { key: cList.id, domProps: { value: cList.id } },
                              [_vm._v(_vm._s(cList.catname))]
                            )
                          }),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.error
                        ? _c("div", [
                            _c(
                              "ul",
                              _vm._l(_vm.error.courseCategory, function (err) {
                                return _c(
                                  "li",
                                  { key: err, staticClass: "text-danger" },
                                  [
                                    _vm._v(
                                      "\n                                                " +
                                        _vm._s(err) +
                                        "\n                                            "
                                    ),
                                  ]
                                )
                              }),
                              0
                            ),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-xl-4 col-sm-4 mb-0",
                          attrs: { for: " " },
                        },
                        [_vm._v("Course Type")]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.coursetype,
                              expression: "coursetype",
                            },
                          ],
                          staticClass: "form-control digits col-xl-7 col-sm-7",
                          on: {
                            change: [
                              function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.coursetype = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              _vm.chnagetotestseries,
                            ],
                          },
                        },
                        [
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Lecture Course "),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v("Test Series "),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.error
                        ? _c("div", [
                            _c(
                              "ul",
                              _vm._l(_vm.error.courseType, function (err) {
                                return _c(
                                  "li",
                                  { key: err, staticClass: "text-danger" },
                                  [
                                    _vm._v(
                                      "\n                                                " +
                                        _vm._s(err) +
                                        "\n                                            "
                                    ),
                                  ]
                                )
                              }),
                              0
                            ),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "comment" } }, [
                        _vm._v("Marks per question(In test series case):"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.positivemark,
                            expression: "positivemark",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          disabled: _vm.isDisabled,
                          placeholder: "+Ve Marking/right question",
                        },
                        domProps: { value: _vm.positivemark },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.positivemark = $event.target.value
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _vm.error
                        ? _c("div", [
                            _c(
                              "ul",
                              _vm._l(_vm.error.positiveMark, function (err) {
                                return _c(
                                  "li",
                                  { key: err, staticClass: "text-danger" },
                                  [
                                    _vm._v(
                                      "\n                                                " +
                                        _vm._s(err) +
                                        "\n                                            "
                                    ),
                                  ]
                                )
                              }),
                              0
                            ),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "comment" } }, [
                        _vm._v(
                          "-Ve Marking per wrong question(In test series case):"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.negativemark,
                            expression: "negativemark",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          disabled: _vm.isDisabled,
                          placeholder: "-Ve Marking/wrong question",
                        },
                        domProps: { value: _vm.negativemark },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.negativemark = $event.target.value
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _vm.error
                        ? _c("div", [
                            _c(
                              "ul",
                              _vm._l(_vm.error.negativeMark, function (err) {
                                return _c(
                                  "li",
                                  { key: err, staticClass: "text-danger" },
                                  [
                                    _vm._v(
                                      "\n                                                " +
                                        _vm._s(err) +
                                        "\n                                            "
                                    ),
                                  ]
                                )
                              }),
                              0
                            ),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "comment" } }, [
                        _vm._v("Meta Keywords:"),
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.coursemetakeyword,
                            expression: "coursemetakeyword",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { rows: "2", placeholder: "Meta Keywords" },
                        domProps: { value: _vm.coursemetakeyword },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.coursemetakeyword = $event.target.value
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "comment" } }, [
                        _vm._v("Meta Description:"),
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.coursemetadescript,
                            expression: "coursemetadescript",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { rows: "3", placeholder: "Meta Description" },
                        domProps: { value: _vm.coursemetadescript },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.coursemetadescript = $event.target.value
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            { staticClass: "col-xl-12 col-sm-12 mb-0" },
                            [_vm._v("Course Starting Date")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.startdate,
                                expression: "startdate",
                              },
                            ],
                            staticClass: "form-control ml-3",
                            attrs: {
                              type: "date",
                              placeholder: "Course Satndard Price",
                            },
                            domProps: { value: _vm.startdate },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.startdate = $event.target.value
                              },
                            },
                          }),
                          _vm._v(" "),
                          _vm.error
                            ? _c("div", [
                                _c(
                                  "ul",
                                  _vm._l(
                                    _vm.error.courseStartDate,
                                    function (err) {
                                      return _c(
                                        "li",
                                        {
                                          key: err,
                                          staticClass: "text-danger",
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(err) +
                                              "\n                                            "
                                          ),
                                        ]
                                      )
                                    }
                                  ),
                                  0
                                ),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            { staticClass: "col-xl-12 col-sm-12 mb-0" },
                            [_vm._v("Course End Date")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.enddate,
                                expression: "enddate",
                              },
                            ],
                            staticClass: "form-control ml-3",
                            attrs: {
                              type: "date",
                              placeholder: "Discounted Price",
                            },
                            domProps: { value: _vm.enddate },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.enddate = $event.target.value
                              },
                            },
                          }),
                          _vm._v(" "),
                          _vm.error
                            ? _c("div", [
                                _c(
                                  "ul",
                                  _vm._l(
                                    _vm.error.courseEndDate,
                                    function (err) {
                                      return _c(
                                        "li",
                                        {
                                          key: err,
                                          staticClass: "text-danger",
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(err) +
                                              "\n                                            "
                                          ),
                                        ]
                                      )
                                    }
                                  ),
                                  0
                                ),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            { staticClass: "col-xl-12 col-sm-12 mb-0" },
                            [_vm._v("Live Class Start Time")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.lecturestarttime,
                                expression: "lecturestarttime",
                              },
                            ],
                            staticClass: "form-control ml-3",
                            attrs: {
                              type: "time",
                              placeholder: "Live Class Start Time",
                            },
                            domProps: { value: _vm.lecturestarttime },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.lecturestarttime = $event.target.value
                              },
                            },
                          }),
                          _vm._v(" "),
                          _vm.error
                            ? _c("div", [
                                _c(
                                  "ul",
                                  _vm._l(
                                    _vm.error.lectureStartTime,
                                    function (err) {
                                      return _c(
                                        "li",
                                        {
                                          key: err,
                                          staticClass: "text-danger",
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(err) +
                                              "\n                                            "
                                          ),
                                        ]
                                      )
                                    }
                                  ),
                                  0
                                ),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            { staticClass: "col-xl-12 col-sm-12 mb-0" },
                            [_vm._v("Live Class End Time")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.lectureendtime,
                                expression: "lectureendtime",
                              },
                            ],
                            staticClass: "form-control ml-3",
                            attrs: {
                              type: "time",
                              placeholder: "Live Class End Time",
                            },
                            domProps: { value: _vm.lectureendtime },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.lectureendtime = $event.target.value
                              },
                            },
                          }),
                          _vm._v(" "),
                          _vm.error
                            ? _c("div", [
                                _c(
                                  "ul",
                                  _vm._l(
                                    _vm.error.lectureEndTime,
                                    function (err) {
                                      return _c(
                                        "li",
                                        {
                                          key: err,
                                          staticClass: "text-danger",
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(err) +
                                              "\n                                            "
                                          ),
                                        ]
                                      )
                                    }
                                  ),
                                  0
                                ),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("div", { staticClass: "add-product" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "comment" } }, [
                              _vm._v("Course Duration(Optional):"),
                            ]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.courseduration,
                                  expression: "courseduration",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: {
                                rows: "2",
                                placeholder:
                                  "Course Duration - For example 1 year, 2 years or 6 months",
                              },
                              domProps: { value: _vm.courseduration },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.courseduration = $event.target.value
                                },
                              },
                            }),
                          ]),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                  ]),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-4 border border-success p-3 mt-2" },
              [
                _c("div", { staticClass: "add-product" }, [
                  _c("div", { staticClass: "form" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("p", [_vm._v("Course Image")]),
                        _vm._v(" "),
                        _vm.error
                          ? _c("div", [
                              _c(
                                "ul",
                                _vm._l(
                                  _vm.error.courseMainImage,
                                  function (err) {
                                    return _c(
                                      "li",
                                      { key: err, staticClass: "text-danger" },
                                      [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(err) +
                                            "\n                                            "
                                        ),
                                      ]
                                    )
                                  }
                                ),
                                0
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("addimage-input", {
                          attrs: { imagecount: 1 },
                          on: { getImageData: _vm.imglist },
                        }),
                        _vm._v(" "),
                        _vm.mainimage
                          ? _c("img", {
                              attrs: {
                                src: _vm.mainimage,
                                height: "70",
                                width: "70",
                              },
                            })
                          : _vm._e(),
                      ],
                      1
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "add-product" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "comment" } }, [
                      _vm._v("Course Info Video Link:"),
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.infovideo,
                          expression: "infovideo",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        rows: "2",
                        placeholder: "Course Info Video Link",
                      },
                      domProps: { value: _vm.infovideo },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.infovideo = $event.target.value
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "add-product" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "comment" } }, [
                      _vm._v("Buyer Notes:"),
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.buyerNotes,
                          expression: "buyerNotes",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { rows: "2", placeholder: "Buyer Note" },
                      domProps: { value: _vm.buyerNotes },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.buyerNotes = $event.target.value
                        },
                      },
                    }),
                  ]),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-12 border border-success p-3 mt-2" },
              [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "comment" } }, [
                      _vm._v("Short Description:"),
                    ]),
                    _vm._v(" "),
                    _c("tinymce", {
                      staticClass: "form-control",
                      attrs: { id: "d1" },
                      model: {
                        value: _vm.courseshortdescription,
                        callback: function ($$v) {
                          _vm.courseshortdescription = $$v
                        },
                        expression: "courseshortdescription",
                      },
                    }),
                    _vm._v(" "),
                    _vm.error
                      ? _c("div", [
                          _c(
                            "ul",
                            _vm._l(
                              _vm.error.courseShortDescrip,
                              function (err) {
                                return _c(
                                  "li",
                                  { key: err, staticClass: "text-danger" },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(err) +
                                        "\n                            "
                                    ),
                                  ]
                                )
                              }
                            ),
                            0
                          ),
                        ])
                      : _vm._e(),
                  ],
                  1
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-12 border border-success p-3 mt-2" },
              [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "comment" } }, [
                      _vm._v("Long Description:"),
                    ]),
                    _vm._v(" "),
                    _c("tinymce", {
                      attrs: { id: "d2" },
                      model: {
                        value: _vm.courselongdescription,
                        callback: function ($$v) {
                          _vm.courselongdescription = $$v
                        },
                        expression: "courselongdescription",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "comment" } }, [
                      _vm._v("Course Feature Points:"),
                    ]),
                    _vm._v(" "),
                    _c("tinymce", {
                      attrs: { id: "d3" },
                      model: {
                        value: _vm.coursefeaturepoints,
                        callback: function ($$v) {
                          _vm.coursefeaturepoints = $$v
                        },
                        expression: "coursefeaturepoints",
                      },
                    }),
                    _vm._v(" "),
                    _vm.error
                      ? _c("div", [
                          _c(
                            "ul",
                            _vm._l(
                              _vm.error.courseFeaturepoints,
                              function (err) {
                                return _c(
                                  "li",
                                  { key: err, staticClass: "text-danger" },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(err) +
                                        "\n                            "
                                    ),
                                  ]
                                )
                              }
                            ),
                            0
                          ),
                        ])
                      : _vm._e(),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "offset-xl-3 offset-sm-4" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" },
                    },
                    [_vm._v("Add")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    { staticClass: "btn btn-light", attrs: { type: "reset" } },
                    [_vm._v("Discard")]
                  ),
                  _vm._v(" "),
                  _c("h4", { class: _vm.msgcolor }, [
                    _vm._v(_vm._s(_vm.successmsg)),
                  ]),
                ]),
              ]
            ),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mr-3" }, [
      _c("h5", [_vm._v("Add New Course")]),
      _vm._v(" "),
      _c("p"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("p", { staticClass: "text-warning" }, [_vm._v("Price Setting")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("p", { staticClass: "text-warning" }, [
        _vm._v("Course Schedule Setting"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);