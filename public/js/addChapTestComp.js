"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["addChapTestComp"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addChapTestComp.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addChapTestComp.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // props: ["chapterid","courseId"],
  data: function data() {
    return {
      chapId: "",
      courseid: "",
      chapInfo: "",
      successmsg: "",
      testquest: "",
      ansA: "",
      ansB: "",
      ansC: "",
      ansD: "",
      ansE: "",
      correctAns: "a",
      ansJustify: "",
      error: [],
      msgCls: ""
    };
  },
  created: function created() {
    this.courseid = this.$route.params.courseId;
    this.chapId = this.$route.params.chapId;
  },
  methods: {
    upload: function upload() {
      var _this = this;

      this.msgCls = "text-success";
      this.successmsg = "Please wait";
      var formdata = new FormData();
      formdata.append("questions", this.testquest);
      formdata.append("ansa", this.ansA);
      formdata.append("ansb", this.ansB);
      formdata.append("ansc", this.ansC);
      formdata.append("ansd", this.ansD);
      formdata.append("anse", this.ansE);
      formdata.append("correctans", this.correctAns);
      formdata.append("justification", this.ansJustify);
      formdata.append("courseId", this.courseid);
      formdata.append("chapterId", this.chapId);
      axios.post("/course-dashboard/course-test/add-new-test-question", formdata).then(function (data) {
        _this.successmsg = "Class added successfully";
        _this.testquest = "";
        _this.ansA = "";
        _this.ansB = "";
        _this.ansC = "";
        _this.ansD = "";
        _this.ansE = "";
        _this.correctAns = "a";
        _this.ansJustify = ""; // location.reload();
      })["catch"](function (error) {
        _this.msgCls = "text-danger";
        _this.error = error.response.data.errors;
        _this.successmsg = "Something Wrong please try again"; // console.log(this.error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/addChapTestComp.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/addChapTestComp.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addChapTestComp_vue_vue_type_template_id_26ecaefb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addChapTestComp.vue?vue&type=template&id=26ecaefb& */ "./resources/js/components/addChapTestComp.vue?vue&type=template&id=26ecaefb&");
/* harmony import */ var _addChapTestComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addChapTestComp.vue?vue&type=script&lang=js& */ "./resources/js/components/addChapTestComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addChapTestComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addChapTestComp_vue_vue_type_template_id_26ecaefb___WEBPACK_IMPORTED_MODULE_0__.render,
  _addChapTestComp_vue_vue_type_template_id_26ecaefb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/addChapTestComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/addChapTestComp.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/addChapTestComp.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addChapTestComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addChapTestComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addChapTestComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addChapTestComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/addChapTestComp.vue?vue&type=template&id=26ecaefb&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/addChapTestComp.vue?vue&type=template&id=26ecaefb& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addChapTestComp_vue_vue_type_template_id_26ecaefb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addChapTestComp_vue_vue_type_template_id_26ecaefb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addChapTestComp_vue_vue_type_template_id_26ecaefb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addChapTestComp.vue?vue&type=template&id=26ecaefb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addChapTestComp.vue?vue&type=template&id=26ecaefb&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addChapTestComp.vue?vue&type=template&id=26ecaefb&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addChapTestComp.vue?vue&type=template&id=26ecaefb& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-1" }),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-10 p-3" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c(
            "div",
            { staticClass: "text-right" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-danger btn-xs",
                  attrs: {
                    to: {
                      name: "courseChapClassSetting",
                      params: { chapId: _vm.chapId, courseId: _vm.courseid },
                    },
                  },
                },
                [_vm._v("Back")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("h3", { class: _vm.msgCls }, [_vm._v(_vm._s(_vm.successmsg))]),
          _vm._v(" "),
          _c(
            "form",
            {
              staticClass: "needs-validation add-product-form",
              attrs: { novalidate: "", method: "post" },
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
                  _vm._m(0),
                  _vm._v(" "),
                  _c("tinymce", {
                    staticClass: "form-control",
                    attrs: { id: "addtest1" },
                    model: {
                      value: _vm.testquest,
                      callback: function ($$v) {
                        _vm.testquest = $$v
                      },
                      expression: "testquest",
                    },
                  }),
                  _vm._v(" "),
                  _vm.error
                    ? _c("div", [
                        _c(
                          "ul",
                          _vm._l(_vm.error.questions, function (err) {
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
                _vm._v(" "),
                _vm.error
                  ? _c("div", [
                      _c(
                        "ul",
                        _vm._l(_vm.error.ansa, function (err) {
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
                _vm._v(" "),
                _vm.error
                  ? _c("div", [
                      _c(
                        "ul",
                        _vm._l(_vm.error.ansb, function (err) {
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
                _vm._v(" "),
                _vm.error
                  ? _c("div", [
                      _c(
                        "ul",
                        _vm._l(_vm.error.ansc, function (err) {
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
                _vm._v(" "),
                _vm.error
                  ? _c("div", [
                      _c(
                        "ul",
                        _vm._l(_vm.error.ansd, function (err) {
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
              _c("div", { staticClass: "form-group" }, [
                _vm._m(1),
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
                    _c("option", { attrs: { selected: "", value: "a" } }, [
                      _vm._v("A"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { selected: "", value: "b" } }, [
                      _vm._v("B"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { selected: "", value: "c" } }, [
                      _vm._v("C"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { selected: "", value: "d" } }, [
                      _vm._v("D"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { selected: "", value: "e" } }, [
                      _vm._v("E"),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("tinymce", {
                    staticClass: "form-control",
                    attrs: { id: "addtest2" },
                    model: {
                      value: _vm.ansJustify,
                      callback: function ($$v) {
                        _vm.ansJustify = $$v
                      },
                      expression: "ansJustify",
                    },
                  }),
                  _vm._v(" "),
                  _vm.error
                    ? _c("div", [
                        _c(
                          "ul",
                          _vm._l(_vm.error.justification, function (err) {
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
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [_vm._v("Save")]
              ),
              _vm._v(" "),
              _c("h3", { class: _vm.msgCls }, [_vm._v(_vm._s(_vm.successmsg))]),
            ]
          ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-1" }),
  ])
}
var staticRenderFns = [
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
]
render._withStripped = true



/***/ })

}]);