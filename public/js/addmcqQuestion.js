"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["addmcqQuestion"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adddailyMcqQuestComp.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adddailyMcqQuestComp.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // props: ["chapterid","courseId"],
  data: function data() {
    return {
      dateid: "",
      successmsg: "",
      testquest: "",
      ansA: "",
      ansB: "",
      ansC: "",
      ansD: "",
      correctAns: "a",
      ansJustify: "",
      questList: {},
      singleQuestInfo: {}
    };
  },
  created: function created() {
    var _this = this;

    this.dateid = this.$route.params.mcqdateid;
    axios.get("/course-dashboard/daily-mcq-quest-list/" + this.dateid).then(function (response) {
      return _this.questList = response.data;
    })["catch"](function (error) {
      return console.log(error);
    });
  },
  methods: {
    upload: function upload() {
      var _this2 = this;

      var formdata = new FormData();
      formdata.append("questions", this.testquest);
      formdata.append("ansa", this.ansA);
      formdata.append("ansb", this.ansB);
      formdata.append("ansc", this.ansC);
      formdata.append("ansd", this.ansD);
      formdata.append("correctans", this.correctAns);
      formdata.append("justification", this.ansJustify);
      formdata.append("dateId", this.dateid);
      axios.post("/course-dashboard/add-mcq-question-data", formdata).then(function (data) {
        _this2.questList = data.data;
        _this2.successmsg = "Question added successfully";
        _this2.testquest = "";
        _this2.ansA = "";
        _this2.ansB = "";
        _this2.ansC = "";
        _this2.ansD = "";
        _this2.correctAns = "a";
        _this2.ansJustify = "";
      })["catch"](function (error) {
        _this2.error = error.response.data.errors;
        console.log(_this2.error);
      });
    },
    deleteMe: function deleteMe(qId) {
      var _this3 = this;

      if (window.confirm("Are you sure to delete this question?")) {
        axios.get("/course-dashboard/delete-daily-mcq-quest/" + qId).then(function (response) {
          return _this3.questList = response.data;
        })["catch"](function (error) {
          return console.log(error);
        });
      }
    },
    findme: function findme(qId) {
      var _this4 = this;

      axios.get("/course-dashboard/singleMcqQuest/" + qId).then(function (response) {
        return _this4.singleQuestInfo = response.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    updateQuestion: function updateQuestion(qId) {
      var _this5 = this;

      this.successmsg = "Please wait";
      var formdata = new FormData();
      formdata.append("questions", this.singleQuestInfo.question);
      formdata.append("ansa", this.singleQuestInfo.ansA);
      formdata.append("ansb", this.singleQuestInfo.ansB);
      formdata.append("ansc", this.singleQuestInfo.ansC);
      formdata.append("ansd", this.singleQuestInfo.ansD);
      formdata.append("correctans", this.singleQuestInfo.correctAns);
      formdata.append("justification", this.singleQuestInfo.answerJustification);
      formdata.append("questId", qId);
      axios.post("/course-dashboard/edit-mcq-question-data", formdata).then(function (data) {
        _this5.questList = data.data;
        _this5.successmsg = "Question updated successfully";
      })["catch"](function (error) {
        _this5.error = error.response.data.errors;
        console.log(_this5.error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adddailyMcqQuestComp.vue?vue&type=style&index=0&id=3122688e&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adddailyMcqQuestComp.vue?vue&type=style&index=0&id=3122688e&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.table-bordered th[data-v-3122688e], .table-bordered td[data-v-3122688e]\n{\n    border: 1px solid #000000;\n    color: #000000;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adddailyMcqQuestComp.vue?vue&type=style&index=0&id=3122688e&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adddailyMcqQuestComp.vue?vue&type=style&index=0&id=3122688e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adddailyMcqQuestComp_vue_vue_type_style_index_0_id_3122688e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adddailyMcqQuestComp.vue?vue&type=style&index=0&id=3122688e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adddailyMcqQuestComp.vue?vue&type=style&index=0&id=3122688e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adddailyMcqQuestComp_vue_vue_type_style_index_0_id_3122688e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adddailyMcqQuestComp_vue_vue_type_style_index_0_id_3122688e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/adddailyMcqQuestComp.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/adddailyMcqQuestComp.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _adddailyMcqQuestComp_vue_vue_type_template_id_3122688e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adddailyMcqQuestComp.vue?vue&type=template&id=3122688e&scoped=true& */ "./resources/js/components/adddailyMcqQuestComp.vue?vue&type=template&id=3122688e&scoped=true&");
/* harmony import */ var _adddailyMcqQuestComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adddailyMcqQuestComp.vue?vue&type=script&lang=js& */ "./resources/js/components/adddailyMcqQuestComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _adddailyMcqQuestComp_vue_vue_type_style_index_0_id_3122688e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adddailyMcqQuestComp.vue?vue&type=style&index=0&id=3122688e&scoped=true&lang=css& */ "./resources/js/components/adddailyMcqQuestComp.vue?vue&type=style&index=0&id=3122688e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _adddailyMcqQuestComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _adddailyMcqQuestComp_vue_vue_type_template_id_3122688e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _adddailyMcqQuestComp_vue_vue_type_template_id_3122688e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3122688e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/adddailyMcqQuestComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/adddailyMcqQuestComp.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/adddailyMcqQuestComp.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adddailyMcqQuestComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adddailyMcqQuestComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adddailyMcqQuestComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adddailyMcqQuestComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/adddailyMcqQuestComp.vue?vue&type=style&index=0&id=3122688e&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/adddailyMcqQuestComp.vue?vue&type=style&index=0&id=3122688e&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adddailyMcqQuestComp_vue_vue_type_style_index_0_id_3122688e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adddailyMcqQuestComp.vue?vue&type=style&index=0&id=3122688e&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adddailyMcqQuestComp.vue?vue&type=style&index=0&id=3122688e&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/adddailyMcqQuestComp.vue?vue&type=template&id=3122688e&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/adddailyMcqQuestComp.vue?vue&type=template&id=3122688e&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adddailyMcqQuestComp_vue_vue_type_template_id_3122688e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adddailyMcqQuestComp_vue_vue_type_template_id_3122688e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adddailyMcqQuestComp_vue_vue_type_template_id_3122688e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adddailyMcqQuestComp.vue?vue&type=template&id=3122688e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adddailyMcqQuestComp.vue?vue&type=template&id=3122688e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adddailyMcqQuestComp.vue?vue&type=template&id=3122688e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adddailyMcqQuestComp.vue?vue&type=template&id=3122688e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card p-3 bg-light" }, [
    _c(
      "button",
      {
        staticClass: "btn btn-success",
        attrs: { "data-toggle": "modal", "data-target": "#addmcqModal" },
      },
      [_vm._v("+add New question")]
    ),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "addmcqModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("h3", { staticClass: "text-success" }, [
                  _vm._v(_vm._s(_vm.successmsg)),
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "needs-validation",
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.upload($event)
                      },
                    },
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("tinymce", {
                          staticClass: "form-control",
                          attrs: { id: "d21" },
                          model: {
                            value: _vm.testquest,
                            callback: function ($$v) {
                              _vm.testquest = $$v
                            },
                            expression: "testquest",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ansA,
                            expression: "ansA",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { rows: "1", placeholder: "A" },
                        domProps: { value: _vm.ansA },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.ansA = $event.target.value
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ansB,
                            expression: "ansB",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { rows: "1", placeholder: "B" },
                        domProps: { value: _vm.ansB },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.ansB = $event.target.value
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ansC,
                            expression: "ansC",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { rows: "1", placeholder: "C" },
                        domProps: { value: _vm.ansC },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.ansC = $event.target.value
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ansD,
                            expression: "ansD",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { rows: "1", placeholder: "D" },
                        domProps: { value: _vm.ansD },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.ansD = $event.target.value
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.correctAns,
                              expression: "correctAns",
                            },
                          ],
                          staticClass: "form-control",
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
                              _vm.correctAns = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                          },
                        },
                        [
                          _c(
                            "option",
                            { attrs: { selected: "", value: "a" } },
                            [_vm._v("A")]
                          ),
                          _vm._v(" "),
                          _c(
                            "option",
                            { attrs: { selected: "", value: "b" } },
                            [_vm._v("B")]
                          ),
                          _vm._v(" "),
                          _c(
                            "option",
                            { attrs: { selected: "", value: "c" } },
                            [_vm._v("C")]
                          ),
                          _vm._v(" "),
                          _c(
                            "option",
                            { attrs: { selected: "", value: "d" } },
                            [_vm._v("D")]
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _vm._m(3),
                        _vm._v(" "),
                        _c("tinymce", {
                          staticClass: "form-control",
                          attrs: { id: "d22" },
                          model: {
                            value: _vm.ansJustify,
                            callback: function ($$v) {
                              _vm.ansJustify = $$v
                            },
                            expression: "ansJustify",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" },
                      },
                      [_vm._v("Save")]
                    ),
                    _vm._v(" "),
                    _c("h3", { staticClass: "text-success" }, [
                      _vm._v(_vm._s(_vm.successmsg)),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _vm._m(4),
            ]),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "editmcqModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(5),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("h3", { staticClass: "text-success" }, [
                  _vm._v(_vm._s(_vm.successmsg)),
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "needs-validation",
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.updateQuestion(_vm.singleQuestInfo.id)
                      },
                    },
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _vm._m(6),
                        _vm._v(" "),
                        _c("tinymce", {
                          staticClass: "form-control",
                          attrs: { id: "d23" },
                          model: {
                            value: _vm.singleQuestInfo.question,
                            callback: function ($$v) {
                              _vm.$set(_vm.singleQuestInfo, "question", $$v)
                            },
                            expression: "singleQuestInfo.question",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.singleQuestInfo.ansA,
                            expression: "singleQuestInfo.ansA",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { rows: "1", placeholder: "A" },
                        domProps: { value: _vm.singleQuestInfo.ansA },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.singleQuestInfo,
                              "ansA",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.singleQuestInfo.ansB,
                            expression: "singleQuestInfo.ansB",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { rows: "1", placeholder: "B" },
                        domProps: { value: _vm.singleQuestInfo.ansB },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.singleQuestInfo,
                              "ansB",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.singleQuestInfo.ansC,
                            expression: "singleQuestInfo.ansC",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { rows: "1", placeholder: "C" },
                        domProps: { value: _vm.singleQuestInfo.ansC },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.singleQuestInfo,
                              "ansC",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.singleQuestInfo.ansD,
                            expression: "singleQuestInfo.ansD",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { rows: "1", placeholder: "D" },
                        domProps: { value: _vm.singleQuestInfo.ansD },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.singleQuestInfo,
                              "ansD",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(7),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.singleQuestInfo.correctAns,
                              expression: "singleQuestInfo.correctAns",
                            },
                          ],
                          staticClass: "form-control",
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
                                _vm.singleQuestInfo,
                                "correctAns",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        [
                          _c(
                            "option",
                            { attrs: { selected: "", value: "a" } },
                            [_vm._v("A")]
                          ),
                          _vm._v(" "),
                          _c(
                            "option",
                            { attrs: { selected: "", value: "b" } },
                            [_vm._v("B")]
                          ),
                          _vm._v(" "),
                          _c(
                            "option",
                            { attrs: { selected: "", value: "c" } },
                            [_vm._v("C")]
                          ),
                          _vm._v(" "),
                          _c(
                            "option",
                            { attrs: { selected: "", value: "d" } },
                            [_vm._v("D")]
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _vm._m(8),
                        _vm._v(" "),
                        _c("tinymce", {
                          staticClass: "form-control",
                          attrs: { id: "d24" },
                          model: {
                            value: _vm.singleQuestInfo.answerJustification,
                            callback: function ($$v) {
                              _vm.$set(
                                _vm.singleQuestInfo,
                                "answerJustification",
                                $$v
                              )
                            },
                            expression: "singleQuestInfo.answerJustification",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" },
                      },
                      [_vm._v("Update")]
                    ),
                    _vm._v(" "),
                    _c("h3", { staticClass: "text-success" }, [
                      _vm._v(_vm._s(_vm.successmsg)),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _vm._m(9),
            ]),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "table-responsive" }, [
      _c("table", { staticClass: "table table-bordered" }, [
        _vm._m(10),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.questList, function (qlist, index) {
            return _c("tr", { key: index }, [
              _c("td", [_vm._v(_vm._s(index + 1))]),
              _vm._v(" "),
              _c("td", [
                _c("div", { domProps: { innerHTML: _vm._s(qlist.question) } }),
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  "\n                        " +
                    _vm._s(qlist.ansA) +
                    "\n                    "
                ),
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  "\n                        " +
                    _vm._s(qlist.ansB) +
                    "\n                    "
                ),
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  "\n                        " +
                    _vm._s(qlist.ansC) +
                    "\n                    "
                ),
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  "\n                        " +
                    _vm._s(qlist.ansD) +
                    "\n                    "
                ),
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(qlist.correctAns))]),
              _vm._v(" "),
              _c("td", [
                _c("div", {
                  domProps: { innerHTML: _vm._s(qlist.answerJustification) },
                }),
              ]),
              _vm._v(" "),
              _c("td", [
                _c("div", { staticClass: "btn-group" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-info",
                      attrs: {
                        "data-toggle": "modal",
                        "data-target": "#editmcqModal",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.findme(qlist.id)
                        },
                      },
                    },
                    [_vm._v("Edit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      on: {
                        click: function ($event) {
                          return _vm.deleteMe(qlist.id)
                        },
                      },
                    },
                    [_vm._v("Delete")]
                  ),
                ]),
              ]),
            ])
          }),
          0
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        {
          staticClass: "modal-title f-w-600",
          attrs: { id: "exampleModalLabel" },
        },
        [_vm._v("Add Test Ques. and Ans.  ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close",
          },
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "comment" } }, [
      _c("b", { staticClass: "text-warning" }, [_vm._v("Test Question:")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "topic" } }, [
      _c("b", { staticClass: "text-success" }, [_vm._v("Correct Answer:")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "comment" } }, [
      _c("b", [_vm._v("Answer Justification (Optional)  :")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-danger",
          attrs: { type: "button", "data-dismiss": "modal" },
        },
        [_vm._v("Close")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        {
          staticClass: "modal-title f-w-600",
          attrs: { id: "exampleModalLabel" },
        },
        [_vm._v("Add Test Ques. and Ans.  ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close",
          },
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "comment" } }, [
      _c("b", { staticClass: "text-warning" }, [_vm._v("Test Question:")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "topic" } }, [
      _c("b", { staticClass: "text-success" }, [_vm._v("Correct Answer:")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "comment" } }, [
      _c("b", [_vm._v("Answer Justification (Optional)  :")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-danger",
          attrs: { type: "button", "data-dismiss": "modal" },
        },
        [_vm._v("Close")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Sr. No.")]),
        _vm._v(" "),
        _c("th", [_vm._v("Question")]),
        _vm._v(" "),
        _c("th", [_vm._v("Option A")]),
        _vm._v(" "),
        _c("th", [_vm._v("Option B")]),
        _vm._v(" "),
        _c("th", [_vm._v("Option C")]),
        _vm._v(" "),
        _c("th", [_vm._v("Option D")]),
        _vm._v(" "),
        _c("th", [_vm._v("Correct Ans")]),
        _vm._v(" "),
        _c("th", [_vm._v("Justification")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);