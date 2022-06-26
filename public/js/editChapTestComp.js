"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editChapTestComp"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editTestComp.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editTestComp.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["testId"],
  data: function data() {
    return {
      error: [],
      successmsg: "",
      msgCls: "",
      testInfo: ""
    };
  },
  created: function created() {
    var _this = this;

    this.testid = this.$route.params.testquestId;
    axios.get("/course-dashboard/course-test/single-test-info/" + this.testid).then(function (response) {
      return _this.testInfo = response.data;
    })["catch"](function (error) {
      return console.log(error);
    });
  },
  methods: {
    upload: function upload() {
      var _this2 = this;

      this.successmsg = "Please wait...";
      this.msgCls = "text-success";
      var formdata = new FormData();
      formdata.append("questions", this.testInfo.question);
      formdata.append("ansa", this.testInfo.ansA);
      formdata.append("ansb", this.testInfo.ansB);
      formdata.append("ansc", this.testInfo.ansC);
      formdata.append("ansd", this.testInfo.ansD);
      formdata.append("anse", this.testInfo.ansE);
      formdata.append("correctans", this.testInfo.correctAns);
      formdata.append("justification", this.testInfo.answerJustification);
      formdata.append("testId", this.testid);
      axios.post("/course-dashboard/course-test/update-test-question", formdata).then(function (data) {
        // this.$emit("updatetestlist",data)
        _this2.successmsg = "Test Quetion updated successfully";
      })["catch"](function (error) {
        _this2.msgCls = "text-danger";
        _this2.successmsg = "Please fix the error";
        _this2.error = error.response.data.errors; // console.log(this.error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/editTestComp.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/editTestComp.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editTestComp_vue_vue_type_template_id_7d39b936___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editTestComp.vue?vue&type=template&id=7d39b936& */ "./resources/js/components/editTestComp.vue?vue&type=template&id=7d39b936&");
/* harmony import */ var _editTestComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTestComp.vue?vue&type=script&lang=js& */ "./resources/js/components/editTestComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editTestComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editTestComp_vue_vue_type_template_id_7d39b936___WEBPACK_IMPORTED_MODULE_0__.render,
  _editTestComp_vue_vue_type_template_id_7d39b936___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/editTestComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/editTestComp.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/editTestComp.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editTestComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./editTestComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editTestComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editTestComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/editTestComp.vue?vue&type=template&id=7d39b936&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/editTestComp.vue?vue&type=template&id=7d39b936& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editTestComp_vue_vue_type_template_id_7d39b936___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editTestComp_vue_vue_type_template_id_7d39b936___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editTestComp_vue_vue_type_template_id_7d39b936___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./editTestComp.vue?vue&type=template&id=7d39b936& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editTestComp.vue?vue&type=template&id=7d39b936&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editTestComp.vue?vue&type=template&id=7d39b936&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editTestComp.vue?vue&type=template&id=7d39b936& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "col-md-10" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body p-4" }, [
          _c("h3", { staticClass: "text-success" }, [
            _vm._v(_vm._s(_vm.successmsg)),
          ]),
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
                                  "\n                                        " +
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
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c("tinymce", {
                    staticClass: "form-control",
                    attrs: { id: "d6" },
                    model: {
                      value: _vm.testInfo.question,
                      callback: function ($$v) {
                        _vm.$set(_vm.testInfo, "question", $$v)
                      },
                      expression: "testInfo.question",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
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
                                "\n                                        " +
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
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.testInfo.ansA,
                      expression: "testInfo.ansA",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { rows: "1", placeholder: "Option A" },
                  domProps: { value: _vm.testInfo.ansA },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.testInfo, "ansA", $event.target.value)
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
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
                                "\n                                        " +
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
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.testInfo.ansB,
                      expression: "testInfo.ansB",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { rows: "1", placeholder: "Option B" },
                  domProps: { value: _vm.testInfo.ansB },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.testInfo, "ansB", $event.target.value)
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
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
                                "\n                                        " +
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
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.testInfo.ansC,
                      expression: "testInfo.ansC",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { rows: "1", placeholder: "Option C" },
                  domProps: { value: _vm.testInfo.ansC },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.testInfo, "ansC", $event.target.value)
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
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
                                "\n                                        " +
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
                _vm._v(" "),
                _vm._m(4),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.testInfo.ansD,
                      expression: "testInfo.ansD",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { rows: "1", placeholder: "Option D" },
                  domProps: { value: _vm.testInfo.ansD },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.testInfo, "ansD", $event.target.value)
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _vm.error
                  ? _c("div", [
                      _c(
                        "ul",
                        _vm._l(_vm.error.correctans, function (err) {
                          return _c(
                            "li",
                            { key: err, staticClass: "text-danger" },
                            [
                              _vm._v(
                                "\n                                        " +
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
                _vm._v(" "),
                _vm._m(5),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.testInfo.correctAns,
                        expression: "testInfo.correctAns",
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
                          _vm.testInfo,
                          "correctAns",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                    },
                  },
                  [
                    _c("option", { attrs: { selected: "", value: "a" } }, [
                      _vm._v("Option A"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { selected: "", value: "b" } }, [
                      _vm._v("Option B"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { selected: "", value: "c" } }, [
                      _vm._v("Option C"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { selected: "", value: "d" } }, [
                      _vm._v("Option D"),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
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
                                  "\n                                        " +
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
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _c("tinymce", {
                    staticClass: "form-control",
                    attrs: { id: "d7" },
                    model: {
                      value: _vm.testInfo.answerJustification,
                      callback: function ($$v) {
                        _vm.$set(_vm.testInfo, "answerJustification", $$v)
                      },
                      expression: "testInfo.answerJustification",
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
    return _c("label", { attrs: { for: "comment" } }, [
      _c("b", { staticClass: "text-danger" }, [_vm._v("Option. A  :")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "comment" } }, [
      _c("b", { staticClass: "text-danger" }, [_vm._v("Option. B  :")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "comment" } }, [
      _c("b", { staticClass: "text-danger" }, [_vm._v("Option. C  :")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "comment" } }, [
      _c("b", { staticClass: "text-danger" }, [_vm._v("Option. D  :")]),
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