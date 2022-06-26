"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editcourse"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editCourseComp.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editCourseComp.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  // props:["courseid"],
  data: function data() {
    return {
      localhos: "http://localhost/myCom/storage/app/public/",
      cid: "",
      courseInfo: "",
      isDisabled: true,
      catList: "",
      procatlist: [],
      category: "0",
      coursetype: "1",
      mainimage: "",
      dataImages: [],
      successmsg: "",
      error: [],
      bundleList: {},
      msgcolor: "text-success",
      customToolbar: [[{
        header: [false, 1, 2, 3, 4, 5, 6]
      }], ["bold", "italic", "underline"], [{
        list: "ordered"
      }, {
        list: "bullet"
      }, {
        list: "check"
      }], [{
        align: ""
      }, {
        align: "center"
      }, {
        align: "right"
      }, {
        align: "justify"
      }]]
    };
  },
  created: function created() {
    var _this = this;

    this.cid = this.$route.params.courseId;
    axios.get("/course-dashboard/single-course-info/" + this.cid).then(function (response) {
      _this.courseInfo = response.data;
      _this.category = _this.courseInfo.courseCategory;
      _this.coursetype = _this.courseInfo.courseType;
      _this.mainimage = _this.courseInfo.featureImg;

      if (_this.coursetype == 0) {
        _this.isDisabled = false;
      } else {
        _this.isDisabled = true;
      }
    })["catch"](function (error) {
      return console.log(error);
    }); // bundle list

    axios.get("/course-dashboard/bundle-list").then(function (response) {
      return _this.bundleList = response.data;
    })["catch"](function (error) {
      return console.log(error);
    }); // bundle list

    axios.get("../../media/all-media").then(function (response) {
      return _this.dataImages = response.data;
    })["catch"](function (error) {
      return console.log(error);
    });
    axios.get("../../course-category-setting/category-raw-list/").then(function (response) {
      return _this.catList = response.data;
    })["catch"](function (error) {
      return console.log(error);
    });
  },
  methods: {
    addproduct: function addproduct() {
      var _this2 = this;

      this.msgcolor = "text-success";
      this.successmsg = "Please Wait..";
      var formdata = new FormData();
      formdata.append("courseName", this.courseInfo.courseName);
      formdata.append("cGroup", this.courseInfo.courseGroup);
      formdata.append("bundleNaam", this.courseInfo.courseBundleId);
      formdata.append("courseCode", this.courseInfo.courseCode);
      formdata.append("coursePrice", this.courseInfo.price);
      formdata.append("discountPrice", this.courseInfo.discounted_price);
      formdata.append("priceNote", this.courseInfo.priceNote);
      formdata.append("teacherName", this.courseInfo.teacherName);
      formdata.append("classLanguage", this.courseInfo.languages);
      formdata.append("courseCategory", this.category);
      formdata.append("courseType", this.coursetype);
      formdata.append("positiveMark", this.courseInfo.positiveMark);
      formdata.append("negativeMark", this.courseInfo.negativeMark);
      formdata.append("courseMetaKeyWord", this.courseInfo.mkeywords);
      formdata.append("courseMetaDescript", this.courseInfo.mdescription);
      formdata.append("courseStartDate", this.courseInfo.courseStartDate);
      formdata.append("courseEndDate", this.courseInfo.courseEndDate);
      formdata.append("lectureStartTime", this.courseInfo.classStartTime);
      formdata.append("lectureEndTime", this.courseInfo.classEndTime);
      formdata.append("courseDuration", this.courseInfo.courseDuration);
      formdata.append("courseMainImage", this.mainimage);
      formdata.append("infoVideo", this.courseInfo.infoVideoLink);
      formdata.append("buyerNotes", this.courseInfo.buyerNotes);
      formdata.append("courseShortDescrip", this.courseInfo.shortDescription);
      formdata.append("courseLongDescrip", this.courseInfo.longDecription);
      formdata.append("courseFeaturepoints", this.courseInfo.featuresPoints);
      formdata.append("courseId", this.courseInfo.id);
      axios.post("/course-dashboard/edit-course-data", formdata).then(function (data) {
        console.log(data.data);
        _this2.successmsg = "Course added successfully";
        _this2.error = "";
      })["catch"](function (error) {
        _this2.msgcolor = "text-danger";
        _this2.successmsg = "Please Fix error";
        _this2.error = error.response.data.errors;
        console.log(_this2.error);
      });
    },
    imglist: function imglist(response) {
      this.mainimage = response.src;
    },
    prcats: function prcats(str) {
      // this.procatlist.push(str.target.value);
      this.category = str.target.value;
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
      alert(this.coursetype);
      if (response.target.value == 0) this.isDisabled = false;else this.isDisabled = true;
    },
    checkCourseGrp: function checkCourseGrp(e) {
      var grpVal = e.target.value;

      if (grpVal == 0) {
        this.courseInfo.courseGroup = 0;
      } else {
        this.courseInfo.courseGroup = 1;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editCourseComp.vue?vue&type=style&index=0&id=7afc187f&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editCourseComp.vue?vue&type=style&index=0&id=7afc187f&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nlabel[data-v-7afc187f]{\n    font-size:12px !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editCourseComp.vue?vue&type=style&index=0&id=7afc187f&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editCourseComp.vue?vue&type=style&index=0&id=7afc187f&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editCourseComp_vue_vue_type_style_index_0_id_7afc187f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./editCourseComp.vue?vue&type=style&index=0&id=7afc187f&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editCourseComp.vue?vue&type=style&index=0&id=7afc187f&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editCourseComp_vue_vue_type_style_index_0_id_7afc187f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editCourseComp_vue_vue_type_style_index_0_id_7afc187f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/editCourseComp.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/editCourseComp.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editCourseComp_vue_vue_type_template_id_7afc187f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editCourseComp.vue?vue&type=template&id=7afc187f&scoped=true& */ "./resources/js/components/editCourseComp.vue?vue&type=template&id=7afc187f&scoped=true&");
/* harmony import */ var _editCourseComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editCourseComp.vue?vue&type=script&lang=js& */ "./resources/js/components/editCourseComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _editCourseComp_vue_vue_type_style_index_0_id_7afc187f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editCourseComp.vue?vue&type=style&index=0&id=7afc187f&scoped=true&lang=css& */ "./resources/js/components/editCourseComp.vue?vue&type=style&index=0&id=7afc187f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _editCourseComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editCourseComp_vue_vue_type_template_id_7afc187f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _editCourseComp_vue_vue_type_template_id_7afc187f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7afc187f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/editCourseComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/editCourseComp.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/editCourseComp.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editCourseComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./editCourseComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editCourseComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editCourseComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/editCourseComp.vue?vue&type=style&index=0&id=7afc187f&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/editCourseComp.vue?vue&type=style&index=0&id=7afc187f&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editCourseComp_vue_vue_type_style_index_0_id_7afc187f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./editCourseComp.vue?vue&type=style&index=0&id=7afc187f&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editCourseComp.vue?vue&type=style&index=0&id=7afc187f&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/editCourseComp.vue?vue&type=template&id=7afc187f&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/editCourseComp.vue?vue&type=template&id=7afc187f&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editCourseComp_vue_vue_type_template_id_7afc187f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editCourseComp_vue_vue_type_template_id_7afc187f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editCourseComp_vue_vue_type_template_id_7afc187f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./editCourseComp.vue?vue&type=template&id=7afc187f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editCourseComp.vue?vue&type=template&id=7afc187f&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editCourseComp.vue?vue&type=template&id=7afc187f&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editCourseComp.vue?vue&type=template&id=7afc187f&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
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
                    value: _vm.courseInfo.courseName,
                    expression: "courseInfo.courseName",
                  },
                ],
                staticClass: "form-control col-xl-10 col-sm-10",
                attrs: {
                  type: "text",
                  placeholder: "Enter Course name or title",
                },
                domProps: { value: _vm.courseInfo.courseName },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.courseInfo, "courseName", $event.target.value)
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
                          value: _vm.courseInfo.courseCode,
                          expression: "courseInfo.courseCode",
                        },
                      ],
                      staticClass: "form-control ",
                      attrs: { type: "text", placeholder: "Course code" },
                      domProps: { value: _vm.courseInfo.courseCode },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.courseInfo,
                            "courseCode",
                            $event.target.value
                          )
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
                          value: _vm.courseInfo.courseGroup,
                          expression: "courseInfo.courseGroup",
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
                            _vm.$set(
                              _vm.courseInfo,
                              "courseGroup",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
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
                _c(
                  "div",
                  {
                    style:
                      _vm.courseInfo.courseGroup == 0
                        ? "display : block"
                        : "display :none",
                  },
                  [
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
                              value: _vm.courseInfo.courseBundleId,
                              expression: "courseInfo.courseBundleId",
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
                              _vm.$set(
                                _vm.courseInfo,
                                "courseBundleId",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
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
                  ]
                ),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-xl-12 col-sm-12 mb-0" }, [
                        _vm._v("Course Standard Price"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.courseInfo.price,
                            expression: "courseInfo.price",
                          },
                        ],
                        staticClass: "form-control ml-3",
                        attrs: {
                          type: "number",
                          placeholder: "Course Satndard Price",
                        },
                        domProps: { value: _vm.courseInfo.price },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.courseInfo,
                              "price",
                              $event.target.value
                            )
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
                      _c("label", { staticClass: "col-xl-12 col-sm-12 mb-0" }, [
                        _vm._v("Discounted Price(Optional)"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.courseInfo.discounted_price,
                            expression: "courseInfo.discounted_price",
                          },
                        ],
                        staticClass: "form-control ml-3",
                        attrs: {
                          type: "text",
                          placeholder: "Discounted Price",
                        },
                        domProps: { value: _vm.courseInfo.discounted_price },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.courseInfo,
                              "discounted_price",
                              $event.target.value
                            )
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
                              value: _vm.courseInfo.priceNote,
                              expression: "courseInfo.priceNote",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { rows: "2", placeholder: "Price Note" },
                          domProps: { value: _vm.courseInfo.priceNote },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.courseInfo,
                                "priceNote",
                                $event.target.value
                              )
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
                      _c("label", { staticClass: "col-xl-12 col-sm-12 mb-0" }, [
                        _vm._v("Teacher Name(Optional)"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.courseInfo.teacherName,
                            expression: "courseInfo.teacherName",
                          },
                        ],
                        staticClass: "form-control ml-3",
                        attrs: {
                          type: "text",
                          placeholder: "Enter teacher Name",
                        },
                        domProps: { value: _vm.courseInfo.teacherName },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.courseInfo,
                              "teacherName",
                              $event.target.value
                            )
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
                      _c("label", { staticClass: "col-xl-12 col-sm-12 mb-0" }, [
                        _vm._v("Lecture & Notes Language "),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.courseInfo.languages,
                            expression: "courseInfo.languages",
                          },
                        ],
                        staticClass: "form-control ml-3",
                        attrs: {
                          type: "Text",
                          placeholder: "Enter Class languages",
                        },
                        domProps: { value: _vm.courseInfo.languages },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.courseInfo,
                              "languages",
                              $event.target.value
                            )
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
                            function ($event) {
                              return _vm.prcats($event)
                            },
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
                          value: _vm.courseInfo.positiveMark,
                          expression: "courseInfo.positiveMark",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        disabled: _vm.isDisabled,
                        placeholder: "+Ve Marking/right question",
                      },
                      domProps: { value: _vm.courseInfo.positiveMark },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.courseInfo,
                            "positiveMark",
                            $event.target.value
                          )
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
                          value: _vm.courseInfo.negativeMark,
                          expression: "courseInfo.negativeMark",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        disabled: _vm.isDisabled,
                        placeholder: "-Ve Marking/wrong question",
                      },
                      domProps: { value: _vm.courseInfo.negativeMark },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.courseInfo,
                            "negativeMark",
                            $event.target.value
                          )
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
                          value: _vm.courseInfo.mkeywords,
                          expression: "courseInfo.mkeywords",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { rows: "2", placeholder: "Meta Keywords" },
                      domProps: { value: _vm.courseInfo.mkeywords },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.courseInfo,
                            "mkeywords",
                            $event.target.value
                          )
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
                          value: _vm.courseInfo.mdescription,
                          expression: "courseInfo.mdescription",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { rows: "3", placeholder: "Meta Description" },
                      domProps: { value: _vm.courseInfo.mdescription },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.courseInfo,
                            "mdescription",
                            $event.target.value
                          )
                        },
                      },
                    }),
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
                          [_vm._v("Course Starting Date")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.courseInfo.courseStartDate,
                              expression: "courseInfo.courseStartDate",
                            },
                          ],
                          staticClass: "form-control ml-3",
                          attrs: {
                            type: "date",
                            placeholder: "Course Satndard Price",
                          },
                          domProps: { value: _vm.courseInfo.courseStartDate },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.courseInfo,
                                "courseStartDate",
                                $event.target.value
                              )
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
                              value: _vm.courseInfo.courseEndDate,
                              expression: "courseInfo.courseEndDate",
                            },
                          ],
                          staticClass: "form-control ml-3",
                          attrs: {
                            type: "date",
                            placeholder: "Discounted Price",
                          },
                          domProps: { value: _vm.courseInfo.courseEndDate },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.courseInfo,
                                "courseEndDate",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.error
                          ? _c("div", [
                              _c(
                                "ul",
                                _vm._l(_vm.error.courseEndDate, function (err) {
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
                          [_vm._v("Live Class Start Time")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.courseInfo.classStartTime,
                              expression: "courseInfo.classStartTime",
                            },
                          ],
                          staticClass: "form-control ml-3",
                          attrs: {
                            type: "time",
                            placeholder: "Live Class Start Time",
                          },
                          domProps: { value: _vm.courseInfo.classStartTime },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.courseInfo,
                                "classStartTime",
                                $event.target.value
                              )
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
                              value: _vm.courseInfo.classEndTime,
                              expression: "courseInfo.classEndTime",
                            },
                          ],
                          staticClass: "form-control ml-3",
                          attrs: {
                            type: "time",
                            placeholder: "Live Class End Time",
                          },
                          domProps: { value: _vm.courseInfo.classEndTime },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.courseInfo,
                                "classEndTime",
                                $event.target.value
                              )
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
                                value: _vm.courseInfo.courseDuration,
                                expression: "courseInfo.courseDuration",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              rows: "2",
                              placeholder:
                                "Course Duration - For example 1 year, 2 years or 6 months",
                            },
                            domProps: { value: _vm.courseInfo.courseDuration },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.courseInfo,
                                  "courseDuration",
                                  $event.target.value
                                )
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
                              _vm._l(_vm.error.courseMainImage, function (err) {
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
                        value: _vm.courseInfo.infoVideoLink,
                        expression: "courseInfo.infoVideoLink",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { rows: "2", placeholder: "Course Info Video Link" },
                    domProps: { value: _vm.courseInfo.infoVideoLink },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.courseInfo,
                          "infoVideoLink",
                          $event.target.value
                        )
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
                        value: _vm.courseInfo.buyerNotes,
                        expression: "courseInfo.buyerNotes",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { rows: "2", placeholder: "Buyer Note" },
                    domProps: { value: _vm.courseInfo.buyerNotes },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.courseInfo,
                          "buyerNotes",
                          $event.target.value
                        )
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
                      value: _vm.courseInfo.shortDescription,
                      callback: function ($$v) {
                        _vm.$set(_vm.courseInfo, "shortDescription", $$v)
                      },
                      expression: "courseInfo.shortDescription",
                    },
                  }),
                  _vm._v(" "),
                  _vm.error
                    ? _c("div", [
                        _c(
                          "ul",
                          _vm._l(_vm.error.courseShortDescrip, function (err) {
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
                          }),
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
                      value: _vm.courseInfo.longDecription,
                      callback: function ($$v) {
                        _vm.$set(_vm.courseInfo, "longDecription", $$v)
                      },
                      expression: "courseInfo.longDecription",
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
                      value: _vm.courseInfo.featuresPoints,
                      callback: function ($$v) {
                        _vm.$set(_vm.courseInfo, "featuresPoints", $$v)
                      },
                      expression: "courseInfo.featuresPoints",
                    },
                  }),
                  _vm._v(" "),
                  _vm.error
                    ? _c("div", [
                        _c(
                          "ul",
                          _vm._l(_vm.error.courseFeaturepoints, function (err) {
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
                          }),
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
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [_vm._v("Update")]
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
  ])
}
var staticRenderFns = [
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