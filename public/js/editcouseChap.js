"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editcouseChap"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editcourseChapterComp.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editcourseChapterComp.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      chapid: "",
      chapInfo: "",
      successmsg: "",
      msgCls: ""
    };
  },
  created: function created() {
    var _this = this;

    this.chapid = this.$route.params.chapterId;
    axios.get("/course-dashboard/single-chapter-info/" + this.chapid).then(function (response) {
      _this.chapInfo = response.data;
    })["catch"](function (error) {
      return console.log(error);
    });
  },
  methods: {
    chapupdate: function chapupdate() {
      var _this2 = this;

      this.successmsg = "Please wait..";
      var formdata = new FormData();
      formdata.append("chaptername", this.chapInfo.chaptername);
      formdata.append("chapterduration", this.chapInfo.chapDuration);
      formdata.append("topicnotes", this.chapInfo.topicNotes);
      formdata.append("attempts", this.chapInfo.attempts);
      formdata.append("scheludTime", this.chapInfo.testSchedule);
      formdata.append("chapid", this.chapInfo.id);
      axios.post("/course-dashboard/edit-chapter-data", formdata).then(function (data) {
        // this.chapterlist = data.data;
        _this2.msgCls = "text-success";
        _this2.successmsg = "Course Chapter updated successfully";
      })["catch"](function (error) {
        _this2.msgCls = "text-danger";
        _this2.successmsg = "Please fix error.";
        _this2.error = error.response.data.errors;
        _this2.successmsg = _this2.error;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/editcourseChapterComp.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/editcourseChapterComp.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editcourseChapterComp_vue_vue_type_template_id_193fe748___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editcourseChapterComp.vue?vue&type=template&id=193fe748& */ "./resources/js/components/editcourseChapterComp.vue?vue&type=template&id=193fe748&");
/* harmony import */ var _editcourseChapterComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editcourseChapterComp.vue?vue&type=script&lang=js& */ "./resources/js/components/editcourseChapterComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editcourseChapterComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editcourseChapterComp_vue_vue_type_template_id_193fe748___WEBPACK_IMPORTED_MODULE_0__.render,
  _editcourseChapterComp_vue_vue_type_template_id_193fe748___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/editcourseChapterComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/editcourseChapterComp.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/editcourseChapterComp.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editcourseChapterComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./editcourseChapterComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editcourseChapterComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editcourseChapterComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/editcourseChapterComp.vue?vue&type=template&id=193fe748&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/editcourseChapterComp.vue?vue&type=template&id=193fe748& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editcourseChapterComp_vue_vue_type_template_id_193fe748___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editcourseChapterComp_vue_vue_type_template_id_193fe748___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editcourseChapterComp_vue_vue_type_template_id_193fe748___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./editcourseChapterComp.vue?vue&type=template&id=193fe748& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editcourseChapterComp.vue?vue&type=template&id=193fe748&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editcourseChapterComp.vue?vue&type=template&id=193fe748&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editcourseChapterComp.vue?vue&type=template&id=193fe748& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "text-right" },
      [
        _vm.chapInfo
          ? _c(
              "router-link",
              {
                staticClass: "btn btn-danger btn-xs py-2 px-5",
                attrs: {
                  to: {
                    name: "couseChapsetting",
                    params: { courseId: _vm.chapInfo.courseId },
                  },
                },
              },
              [_vm._v("Back to List")]
            )
          : _vm._e(),
      ],
      1
    ),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-1" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-10" }, [
        _vm.chapInfo
          ? _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body p-5" }, [
                _c(
                  "form",
                  {
                    staticClass: "needs-validation add-product-form",
                    attrs: { method: "post", novalidate: "" },
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.chapupdate($event)
                      },
                    },
                  },
                  [
                    _c("h3", { staticClass: "text-success" }, [
                      _vm._v(_vm._s(_vm.successmsg)),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form" }, [
                      _c("div", { staticClass: "form-group " }, [
                        _c(
                          "label",
                          {
                            staticClass: "mb-1",
                            attrs: { for: "validationCustom02" },
                          },
                          [_vm._v("Chapter or module Name :")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.chapInfo.chaptername,
                              expression: "chapInfo.chaptername",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Chapter or module Name",
                          },
                          domProps: { value: _vm.chapInfo.chaptername },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.chapInfo,
                                "chaptername",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "mb-1",
                            attrs: { for: "validationCustom02" },
                          },
                          [_vm._v("Chapter or module Duration :")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.chapInfo.chapDuration,
                              expression: "chapInfo.chapDuration",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Chapter or module Duration",
                          },
                          domProps: { value: _vm.chapInfo.chapDuration },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.chapInfo,
                                "chapDuration",
                                $event.target.value
                              )
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
                            attrs: { id: "d55" },
                            model: {
                              value: _vm.chapInfo.topicNotes,
                              callback: function ($$v) {
                                _vm.$set(_vm.chapInfo, "topicNotes", $$v)
                              },
                              expression: "chapInfo.topicNotes",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "comment" } }, [
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
                              value: _vm.chapInfo.attempts,
                              expression: "chapInfo.attempts",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "number",
                            placeholder: "Number Of Attempts",
                          },
                          domProps: { value: _vm.chapInfo.attempts },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.chapInfo,
                                "attempts",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "comment" } }, [
                          _vm._v(
                            "Schedule date and time(In case of Prelims test series):"
                          ),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.chapInfo.testSchedule,
                              expression: "chapInfo.testSchedule",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { type: "datetime-local", step: "any" },
                          domProps: { value: _vm.chapInfo.testSchedule },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.chapInfo,
                                "testSchedule",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                    ]),
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
            ])
          : _vm._e(),
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
    return _c("label", { attrs: { for: "d55" } }, [
      _vm._v("Chapter/Test Notes("),
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