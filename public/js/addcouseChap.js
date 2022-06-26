"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["addcouseChap"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addcourseChapterComp.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addcourseChapterComp.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      courseid: "",
      chapName: "",
      duration: "",
      instruction: "",
      error: [],
      testAttemps: 1,
      scheludTime: "",
      successmsg: "",
      msgCls: ""
    };
  },
  created: function created() {
    this.courseid = this.$route.params.courseId;
  },
  methods: {
    addcourseChap: function addcourseChap() {
      var _this = this;

      this.msgCls = "text-success";
      this.successmsg = "Please Wait..";
      var formdata = new FormData();
      formdata.append("chaptername", this.chapName);
      formdata.append("chapterduration", this.duration);
      formdata.append("topicnotes", this.instruction);
      formdata.append("attempts", this.testAttemps);
      formdata.append("scheludTime", this.scheludTime);
      formdata.append("corseId", this.courseid);
      axios.post("/course-dashboard/add-new-chapter-data", formdata).then(function (data) {
        // console.log(data.data);
        _this.chapName = "";
        _this.duration = "";
        _this.instruction = "";
        _this.testAttemps = 1;
        _this.scheludTime = "";
        _this.successmsg = "Chapter/Module is added successfully";
        _this.error = "";
      })["catch"](function (error) {
        _this.msgCls = "text-danger";
        _this.successmsg = "Please Fix error";
        _this.error = error.response.data.errors;
        console.log(_this.error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/addcourseChapterComp.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/addcourseChapterComp.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addcourseChapterComp_vue_vue_type_template_id_5dbd77aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addcourseChapterComp.vue?vue&type=template&id=5dbd77aa& */ "./resources/js/components/addcourseChapterComp.vue?vue&type=template&id=5dbd77aa&");
/* harmony import */ var _addcourseChapterComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addcourseChapterComp.vue?vue&type=script&lang=js& */ "./resources/js/components/addcourseChapterComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addcourseChapterComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addcourseChapterComp_vue_vue_type_template_id_5dbd77aa___WEBPACK_IMPORTED_MODULE_0__.render,
  _addcourseChapterComp_vue_vue_type_template_id_5dbd77aa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/addcourseChapterComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/addcourseChapterComp.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/addcourseChapterComp.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addcourseChapterComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addcourseChapterComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addcourseChapterComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addcourseChapterComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/addcourseChapterComp.vue?vue&type=template&id=5dbd77aa&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/addcourseChapterComp.vue?vue&type=template&id=5dbd77aa& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addcourseChapterComp_vue_vue_type_template_id_5dbd77aa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addcourseChapterComp_vue_vue_type_template_id_5dbd77aa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addcourseChapterComp_vue_vue_type_template_id_5dbd77aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addcourseChapterComp.vue?vue&type=template&id=5dbd77aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addcourseChapterComp.vue?vue&type=template&id=5dbd77aa&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addcourseChapterComp.vue?vue&type=template&id=5dbd77aa&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addcourseChapterComp.vue?vue&type=template&id=5dbd77aa& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-1" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-10 p-2" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body p-4" }, [
            _c(
              "div",
              { staticClass: "text-right" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-danger btn-xs py-2 px-5",
                    attrs: {
                      to: {
                        name: "couseChapsetting",
                        params: { courseId: _vm.courseid },
                      },
                    },
                  },
                  [_vm._v("Back to List")]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "needs-validation add-product-form",
                attrs: { novalidate: "" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.addcourseChap($event)
                  },
                },
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Chapter or module Name :")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.chapName,
                        expression: "chapName",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Enter Chapter/Module name",
                    },
                    domProps: { value: _vm.chapName },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.chapName = $event.target.value
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.error
                    ? _c("div", [
                        _c(
                          "ul",
                          _vm._l(_vm.error.chaptername, function (err) {
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
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Chapter or module Duration :")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.duration,
                        expression: "duration",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Chapter or module Duration",
                    },
                    domProps: { value: _vm.duration },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.duration = $event.target.value
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("tinymce", {
                      staticClass: "form-control",
                      attrs: { id: "chapadding" },
                      model: {
                        value: _vm.instruction,
                        callback: function ($$v) {
                          _vm.instruction = $$v
                        },
                        expression: "instruction",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [
                    _vm._v(
                      "Number Of Attempts(In case of Prelims test series):"
                    ),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.testAttemps,
                        expression: "testAttemps",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number" },
                    domProps: { value: _vm.testAttemps },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.testAttemps = $event.target.value
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [
                    _vm._v("Schedule Test(In case of Prelims test series):"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.scheludTime,
                        expression: "scheludTime",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "datetime-local" },
                    domProps: { value: _vm.scheludTime },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.scheludTime = $event.target.value
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [_vm._v("Save")]
                ),
                _vm._v(" "),
                _c("h3", { class: _vm.msgCls }, [
                  _vm._v(_vm._s(_vm.successmsg)),
                ]),
              ]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Chapter/Test Notes ("),
      _c("span", { staticClass: "text-danger" }, [
        _vm._v("In case of test series please write here instruction"),
      ]),
      _vm._v(")"),
    ])
  },
]
render._withStripped = true



/***/ })

}]);