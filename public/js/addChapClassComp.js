"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["addChapClassComp"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addChapClassComp.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addChapClassComp.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
Vue.component('addimage-input', (__webpack_require__(/*! ./imageInputComp.vue */ "./resources/js/components/imageInputComp.vue")["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["chapterid", "courseId"],
  data: function data() {
    return {
      chapId: "",
      courseid: "",
      chapInfo: "",
      chap: this.chapterid,
      topic: "",
      cType: "1",
      videoLink: "",
      chatLink: "",
      classPdf: "",
      classScript: "",
      classDate: "",
      classTime: "",
      cMode: "0",
      successmsg: "",
      error: "",
      msgColor: ""
    };
  },
  created: function created() {
    this.courseid = this.$route.params.courseId;
    this.chapId = this.$route.params.chapId;
  },
  methods: {
    upload: function upload() {
      var _this = this;

      this.msgColor = "text-success";
      this.successmsg = "Please wait ...";
      var formdata = new FormData();
      formdata.append("topicname", this.topic);
      formdata.append("classtype", this.cType);
      formdata.append("videoLink", this.videoLink);
      formdata.append("chatlink", this.chatLink);
      formdata.append("classPdf", this.classPdf);
      formdata.append("classScript", this.classScript);
      formdata.append("classdate", this.classDate);
      formdata.append("classTime", this.classTime);
      formdata.append("classMode", this.cMode);
      formdata.append("courseId", this.courseid);
      formdata.append("chapterId", this.chapId);
      axios.post("/course-dashboard/course-classes/add-new-class", formdata).then(function (data) {
        _this.topic = "", _this.cType = "1", _this.videoLink = "", _this.chatLink = "", _this.classPdf = "", _this.classScript = "", _this.classDate = "", _this.classTime = "", _this.msgColor = "text-success";
        _this.successmsg = "Class added successfully";
      })["catch"](function (error) {
        _this.error = error.response.data.errors; // console.log(this.error);

        _this.msgColor = "text-danger";
        _this.successmsg = "fix errors";
      });
    },
    imglist: function imglist(response) {
      this.videoLink = response.src;
    },
    getPdf: function getPdf(response) {
      this.classPdf = response.src;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/addChapClassComp.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/addChapClassComp.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addChapClassComp_vue_vue_type_template_id_03c3a5dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addChapClassComp.vue?vue&type=template&id=03c3a5dd&scoped=true& */ "./resources/js/components/addChapClassComp.vue?vue&type=template&id=03c3a5dd&scoped=true&");
/* harmony import */ var _addChapClassComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addChapClassComp.vue?vue&type=script&lang=js& */ "./resources/js/components/addChapClassComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addChapClassComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addChapClassComp_vue_vue_type_template_id_03c3a5dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _addChapClassComp_vue_vue_type_template_id_03c3a5dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "03c3a5dd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/addChapClassComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/addChapClassComp.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/addChapClassComp.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addChapClassComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addChapClassComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addChapClassComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addChapClassComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/addChapClassComp.vue?vue&type=template&id=03c3a5dd&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/addChapClassComp.vue?vue&type=template&id=03c3a5dd&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addChapClassComp_vue_vue_type_template_id_03c3a5dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addChapClassComp_vue_vue_type_template_id_03c3a5dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addChapClassComp_vue_vue_type_template_id_03c3a5dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addChapClassComp.vue?vue&type=template&id=03c3a5dd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addChapClassComp.vue?vue&type=template&id=03c3a5dd&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addChapClassComp.vue?vue&type=template&id=03c3a5dd&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addChapClassComp.vue?vue&type=template&id=03c3a5dd&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "card-body p-5" }, [
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
                [_vm._v("Back ")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
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
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-8 py-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "topic" } }, [
                      _vm._v("Topic Name:"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.topic,
                          expression: "topic",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Enter Topic name" },
                      domProps: { value: _vm.topic },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.topic = $event.target.value
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _vm.error
                    ? _c("div", [
                        _c(
                          "ul",
                          _vm._l(_vm.error.topicname, function (err) {
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
                _c("div", { staticClass: "col-md-4 py-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "topic" } }, [
                      _vm._v("Class/lecture Type:"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.cType,
                            expression: "cType",
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
                            _vm.cType = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { selected: "", value: "1" } }, [
                          _vm._v("Video Class"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v("Only Note"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "3" } }, [
                          _vm._v("Schedule Test"),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-4 py-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "topic" } }, [
                      _vm._v("Class Date:"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.classDate,
                          expression: "classDate",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "datetime-local" },
                      domProps: { value: _vm.classDate },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.classDate = $event.target.value
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 py-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "topic" } }, [
                      _vm._v("Class Time:"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.classTime,
                          expression: "classTime",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "time" },
                      domProps: { value: _vm.classTime },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.classTime = $event.target.value
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 py-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "topic" } }, [
                      _vm._v("Class Mode:"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.cMode,
                            expression: "cMode",
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
                            _vm.cMode = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("Live Class"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "0" } }, [
                          _vm._v("Recorded"),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _vm.error
                    ? _c("div", [
                        _c(
                          "ul",
                          _vm._l(_vm.error.classMode, function (err) {
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
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "comment" } }, [
                        _vm._v("Video Link:"),
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.videoLink,
                            expression: "videoLink",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { rows: "2" },
                        domProps: { value: _vm.videoLink },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.videoLink = $event.target.value
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("addimage-input", {
                        attrs: { imagecount: 1 },
                        on: { getImageData: _vm.imglist },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.error
                    ? _c("div", [
                        _c(
                          "ul",
                          _vm._l(_vm.error.videoLink, function (err) {
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
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "comment" } }, [
                      _vm._v("chat Link(Optional):"),
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.chatLink,
                          expression: "chatLink",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { rows: "2" },
                      domProps: { value: _vm.chatLink },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.chatLink = $event.target.value
                        },
                      },
                    }),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "topic" } }, [
                    _vm._v("Class PDF:"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.classPdf,
                        expression: "classPdf",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Enter Topic name" },
                    domProps: { value: _vm.classPdf },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.classPdf = $event.target.value
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("addimage-input", {
                    attrs: { imagecount: 1 },
                    on: { getImageData: _vm.getPdf },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _vm.error
                ? _c("div", [
                    _c(
                      "ul",
                      _vm._l(_vm.error.classPdf, function (err) {
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
                        _vm._v("class Script:"),
                      ]),
                      _vm._v(" "),
                      _c("tinymce", {
                        staticClass: "form-control",
                        attrs: { id: "d1" },
                        model: {
                          value: _vm.classScript,
                          callback: function ($$v) {
                            _vm.classScript = $$v
                          },
                          expression: "classScript",
                        },
                      }),
                    ],
                    1
                  ),
                ]
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
              _c("h3", { staticClass: "text-success" }, [
                _vm._v(_vm._s(_vm.successmsg)),
              ]),
            ]
          ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-1" }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);