"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["dailymcqset"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dailymcqSettComp.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dailymcqSettComp.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      mcqDateList: {},
      mcqdate: "",
      msgcolor: "",
      successmsg: "",
      mcqtype: "0",
      mcqtopic: "",
      testInstruction: "",
      singleMcqdateInfo: {}
    };
  },
  created: function created() {
    var _this = this;

    // MCQs date list
    axios.get("/course-dashboard/mcsdatelist").then(function (response) {
      return _this.mcqDateList = response.data;
    })["catch"](function (error) {
      return console.log(error);
    }); // MCQs date list
  },
  methods: {
    addmcqdate: function addmcqdate() {
      var _this2 = this;

      this.msgcolor = "text-success";
      this.successmsg = "Please Wait..";
      var formdata = new FormData();
      formdata.append("mcqDate", this.mcqdate);
      formdata.append("mcqTopic", this.mcqtopic);
      formdata.append("mcqType", this.mcqtype);
      formdata.append("instruction", this.testInstruction);
      axios.post("/course-dashboard/addmcqdateData", formdata).then(function (data) {
        _this2.mcqDateList = data.data; // console.log(data.data);                   

        _this2.successmsg = "Date added successfully";
        _this2.error = "";
      })["catch"](function (error) {
        _this2.msgcolor = "text-danger";
        _this2.successmsg = "Please Fix error- " + error.response.data.errors;
      });
    },
    deleteDate: function deleteDate(dId) {
      var _this3 = this;

      if (window.confirm("Are you sure to delete this date?")) {
        axios.get("/course-dashboard/deletemcqDate/" + dId).then(function (response) {
          return _this3.mcqDateList = response.data;
        })["catch"](function (error) {
          return console.log(error);
        });
      }
    },
    findme: function findme(dId) {
      var _this4 = this;

      axios.get("/single-mcq-date-info/" + dId).then(function (response) {
        return _this4.singleMcqdateInfo = response.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    updatemcqdate: function updatemcqdate() {
      var _this5 = this;

      this.msgcolor = "text-success";
      this.successmsg = "Please Wait..";
      var formdata = new FormData();
      formdata.append("mcqDate", this.singleMcqdateInfo.date);
      formdata.append("mcqTopic", this.singleMcqdateInfo.topic);
      formdata.append("mcqType", this.singleMcqdateInfo.type);
      formdata.append("mcqId", this.singleMcqdateInfo.id);
      formdata.append("instruction", this.singleMcqdateInfo.instruction);
      axios.post("/course-dashboard/updatemcqdateData", formdata).then(function (data) {
        _this5.mcqDateList = data.data; // console.log(data.data);                   

        _this5.successmsg = "Date update successfully";
        _this5.error = "";
      })["catch"](function (error) {
        _this5.msgcolor = "text-danger";
        _this5.successmsg = "Please Fix error- " + error.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/dailymcqSettComp.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/dailymcqSettComp.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dailymcqSettComp_vue_vue_type_template_id_787fb364___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dailymcqSettComp.vue?vue&type=template&id=787fb364& */ "./resources/js/components/dailymcqSettComp.vue?vue&type=template&id=787fb364&");
/* harmony import */ var _dailymcqSettComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dailymcqSettComp.vue?vue&type=script&lang=js& */ "./resources/js/components/dailymcqSettComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dailymcqSettComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dailymcqSettComp_vue_vue_type_template_id_787fb364___WEBPACK_IMPORTED_MODULE_0__.render,
  _dailymcqSettComp_vue_vue_type_template_id_787fb364___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dailymcqSettComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dailymcqSettComp.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/dailymcqSettComp.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dailymcqSettComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dailymcqSettComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dailymcqSettComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dailymcqSettComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dailymcqSettComp.vue?vue&type=template&id=787fb364&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/dailymcqSettComp.vue?vue&type=template&id=787fb364& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dailymcqSettComp_vue_vue_type_template_id_787fb364___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dailymcqSettComp_vue_vue_type_template_id_787fb364___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dailymcqSettComp_vue_vue_type_template_id_787fb364___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dailymcqSettComp.vue?vue&type=template&id=787fb364& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dailymcqSettComp.vue?vue&type=template&id=787fb364&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dailymcqSettComp.vue?vue&type=template&id=787fb364&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dailymcqSettComp.vue?vue&type=template&id=787fb364& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      "button",
      {
        staticClass: "btn btn-success float-right",
        attrs: { "data-toggle": "modal", "data-target": "#myModal" },
      },
      [_vm._v("+ Add New ")]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "modal", attrs: { id: "myModal" } }, [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c(
              "form",
              {
                staticClass: "needs-validation add-product-form",
                attrs: { novalidate: "" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.addmcqdate($event)
                  },
                },
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "comment" } }, [
                    _vm._v("Enter Topic"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.mcqtopic,
                        expression: "mcqtopic",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      required: "",
                      placeholder: "Enter Topic",
                    },
                    domProps: { value: _vm.mcqtopic },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.mcqtopic = $event.target.value
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "comment" } }, [
                    _vm._v("Choose Date"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.mcqdate,
                        expression: "mcqdate",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "date", required: "" },
                    domProps: { value: _vm.mcqdate },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.mcqdate = $event.target.value
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "comment" } }, [
                    _vm._v("Choose Type"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.mcqtype,
                          expression: "mcqtype",
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
                          _vm.mcqtype = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "0" } }, [
                        _vm._v("Daily Questionary"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "1" } }, [
                        _vm._v("Free Mock Test"),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("tinymce", {
                      staticClass: "form-control",
                      attrs: { id: "addmcqs" },
                      model: {
                        value: _vm.testInstruction,
                        callback: function ($$v) {
                          _vm.testInstruction = $$v
                        },
                        expression: "testInstruction",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(2),
              ]
            ),
            _vm._v(" "),
            _c("h4", { class: _vm.msgcolor }, [_vm._v(_vm._s(_vm.successmsg))]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _vm.singleMcqdateInfo
      ? _c("div", { staticClass: "modal", attrs: { id: "ediModal" } }, [
          _c("div", { staticClass: "modal-dialog" }, [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    staticClass: "needs-validation add-product-form",
                    attrs: { novalidate: "" },
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.updatemcqdate($event)
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "comment" } }, [
                        _vm._v("Enter Topic"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.singleMcqdateInfo.topic,
                            expression: "singleMcqdateInfo.topic",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          required: "",
                          placeholder: "Enter Topic",
                        },
                        domProps: { value: _vm.singleMcqdateInfo.topic },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.singleMcqdateInfo,
                              "topic",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "comment" } }, [
                        _vm._v("Choose Date"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.singleMcqdateInfo.date,
                            expression: "singleMcqdateInfo.date",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "date", required: "" },
                        domProps: { value: _vm.singleMcqdateInfo.date },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.singleMcqdateInfo,
                              "date",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "comment" } }, [
                        _vm._v("Choose Type"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.singleMcqdateInfo.type,
                              expression: "singleMcqdateInfo.type",
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
                                _vm.singleMcqdateInfo,
                                "type",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        [
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v("Daily Questionary"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Free Mock Test"),
                          ]),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _vm._m(4),
                        _vm._v(" "),
                        _c("tinymce", {
                          staticClass: "form-control",
                          attrs: { id: "editmcqs" },
                          model: {
                            value: _vm.singleMcqdateInfo.instruction,
                            callback: function ($$v) {
                              _vm.$set(
                                _vm.singleMcqdateInfo,
                                "instruction",
                                $$v
                              )
                            },
                            expression: "singleMcqdateInfo.instruction",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(5),
                  ]
                ),
                _vm._v(" "),
                _c("h4", { class: _vm.msgcolor }, [
                  _vm._v(_vm._s(_vm.successmsg)),
                ]),
              ]),
            ]),
          ]),
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "table-responsive" }, [
      _c("table", { staticClass: "table table-hovered" }, [
        _vm._m(6),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.mcqDateList, function (dList, index) {
            return _c("tr", { key: index }, [
              _c("td", [_vm._v(_vm._s(index + 1))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(dList.topic))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(dList.date))]),
              _vm._v(" "),
              _c("td", [
                dList.type == 1
                  ? _c("span", { staticClass: "badge badge-primary" }, [
                      _vm._v("Free Mock Test"),
                    ])
                  : _c("span", { staticClass: "badge badge-success" }, [
                      _vm._v("Daily Questionary"),
                    ]),
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(dList.created_at))]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "div",
                  { staticClass: "btn-group" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-xs",
                        attrs: {
                          "data-toggle": "modal",
                          "data-target": "#ediModal",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.findme(dList.id)
                          },
                        },
                      },
                      [_vm._v("Edit")]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-info btn-xs",
                        attrs: {
                          to: {
                            name: "addmcqQuestion",
                            params: { mcqdateid: dList.id },
                          },
                        },
                      },
                      [_vm._v("Add Questions")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger btn-xs",
                        on: {
                          click: function ($event) {
                            return _vm.deleteDate(dList.id)
                          },
                        },
                      },
                      [_vm._v("Delete")]
                    ),
                  ],
                  1
                ),
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
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Add Date and Topic")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" },
        },
        [_vm._v("×")]
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
    return _c("div", { staticClass: "offset-xl-3 offset-sm-4" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Update")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Edit Date")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" },
        },
        [_vm._v("×")]
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
    return _c("div", { staticClass: "offset-xl-3 offset-sm-4" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("+Update")]
      ),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-light", attrs: { type: "reset" } }, [
        _vm._v("Discard"),
      ]),
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
        _c("th", [_vm._v("Topic")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created At")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);