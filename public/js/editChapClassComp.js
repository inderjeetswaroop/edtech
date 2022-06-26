"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editChapClassComp"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editChapClassComp.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editChapClassComp.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      singclassInfo: "",
      successmsg: "",
      error: [],
      claasid: "",
      msgCls: ""
    };
  },
  created: function created() {
    var _this = this;

    this.claasid = this.$route.params.classId;
    axios.get("/course-dashboard/course-classes/singleclassInfo/" + this.claasid).then(function (response) {
      return _this.singclassInfo = response.data;
    })["catch"](function (error) {
      return console.log(error);
    });
  },
  methods: {
    upload: function upload() {
      var _this2 = this;

      this.msgCls = "text-success";
      this.successmsg = "Please wait...";
      var formdata = new FormData();
      formdata.append("topicname", this.singclassInfo.topicName);
      formdata.append("classtype", this.singclassInfo.classType);
      formdata.append("videoLink", this.singclassInfo.videoLink);
      formdata.append("chatlink", this.singclassInfo.chatlink);
      formdata.append("classPdf", this.singclassInfo.classPdf);
      formdata.append("classScript", this.singclassInfo.classScript);
      formdata.append("classdate", this.singclassInfo.classdate);
      formdata.append("classTime", this.singclassInfo.classTime);
      formdata.append("classMode", this.singclassInfo.classMode);
      formdata.append("classId", this.singclassInfo.id);
      axios.post("/course-dashboard/course-classes/update-class", formdata).then(function (data) {
        _this2.msgCls = "text-success";
        _this2.successmsg = "Class updated successfully"; // location.reload();
      })["catch"](function (error) {
        _this2.msgCls = "text-danger";
        _this2.successmsg = "Fix Error ";
        _this2.error = error.response.data.errors; // console.log(this.error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/editChapClassComp.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/editChapClassComp.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editChapClassComp_vue_vue_type_template_id_41c82e8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editChapClassComp.vue?vue&type=template&id=41c82e8e& */ "./resources/js/components/editChapClassComp.vue?vue&type=template&id=41c82e8e&");
/* harmony import */ var _editChapClassComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editChapClassComp.vue?vue&type=script&lang=js& */ "./resources/js/components/editChapClassComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editChapClassComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editChapClassComp_vue_vue_type_template_id_41c82e8e___WEBPACK_IMPORTED_MODULE_0__.render,
  _editChapClassComp_vue_vue_type_template_id_41c82e8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/editChapClassComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/editChapClassComp.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/editChapClassComp.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editChapClassComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./editChapClassComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editChapClassComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editChapClassComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/editChapClassComp.vue?vue&type=template&id=41c82e8e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/editChapClassComp.vue?vue&type=template&id=41c82e8e& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editChapClassComp_vue_vue_type_template_id_41c82e8e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editChapClassComp_vue_vue_type_template_id_41c82e8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editChapClassComp_vue_vue_type_template_id_41c82e8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./editChapClassComp.vue?vue&type=template&id=41c82e8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editChapClassComp.vue?vue&type=template&id=41c82e8e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editChapClassComp.vue?vue&type=template&id=41c82e8e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editChapClassComp.vue?vue&type=template&id=41c82e8e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _vm.singclassInfo
    ? _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-1" }),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-10 p-3" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body p-4" }, [
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
                          params: {
                            chapId: _vm.singclassInfo.chapterId,
                            courseId: _vm.singclassInfo.courseId,
                          },
                        },
                      },
                    },
                    [_vm._v("Back ")]
                  ),
                ],
                1
              ),
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
                              value: _vm.singclassInfo.topicName,
                              expression: "singclassInfo.topicName",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Enter Topic name",
                          },
                          domProps: { value: _vm.singclassInfo.topicName },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.singclassInfo,
                                "topicName",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
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
                                value: _vm.singclassInfo.classType,
                                expression: "singclassInfo.classType",
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
                                  _vm.singclassInfo,
                                  "classType",
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
                              { attrs: { selected: "", value: "1" } },
                              [_vm._v("Video Class")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Only Note"),
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
                              value: _vm.singclassInfo.classdate,
                              expression: "singclassInfo.classdate",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { type: "datetime-local" },
                          domProps: { value: _vm.singclassInfo.classdate },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.singclassInfo,
                                "classdate",
                                $event.target.value
                              )
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
                              value: _vm.singclassInfo.classTime,
                              expression: "singclassInfo.classTime",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { type: "time" },
                          domProps: { value: _vm.singclassInfo.classTime },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.singclassInfo,
                                "classTime",
                                $event.target.value
                              )
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
                                value: _vm.singclassInfo.classMode,
                                expression: "singclassInfo.classMode",
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
                                  _vm.singclassInfo,
                                  "classMode",
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
                              { attrs: { selected: "", value: "1" } },
                              [_vm._v("Live Class")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "0" } }, [
                              _vm._v("Recorded"),
                            ]),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "comment" } }, [
                          _vm._v("Video Embed Link:"),
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.singclassInfo.videoLink,
                              expression: "singclassInfo.videoLink",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { rows: "2" },
                          domProps: { value: _vm.singclassInfo.videoLink },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.singclassInfo,
                                "videoLink",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "comment" } }, [
                          _vm._v("chat Link:"),
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.singclassInfo.chatlink,
                              expression: "singclassInfo.chatlink",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { rows: "2" },
                          domProps: { value: _vm.singclassInfo.chatlink },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.singclassInfo,
                                "chatlink",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "topic" } }, [
                      _vm._v("Class PDF:"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.singclassInfo.classPdf,
                          expression: "singclassInfo.classPdf",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Class PDF" },
                      domProps: { value: _vm.singclassInfo.classPdf },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.singclassInfo,
                            "classPdf",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
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
                            attrs: { id: "dedit" },
                            model: {
                              value: _vm.singclassInfo.classScript,
                              callback: function ($$v) {
                                _vm.$set(_vm.singclassInfo, "classScript", $$v)
                              },
                              expression: "singclassInfo.classScript",
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
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" },
                    },
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
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);