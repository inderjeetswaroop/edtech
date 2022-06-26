"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["useremailVerification"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/userRegisterComp.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/userRegisterComp.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      fullname: "",
      uemail: "",
      uphone: "",
      uphonedummy: "",
      upassword: "",
      btnDisabled: false,
      msgclass: "",
      msg: "",
      error: "",
      passwordtype: "password",
      eyeword: "la la-eye"
    };
  },
  methods: {
    registerForm: function registerForm() {
      var _this = this;

      this.$Progress.start();
      this.msgclass = "text-success";
      this.msg = "Please wait... ";
      this.btnDisabled = true;
      var formdata = new FormData();
      formdata.append("username", this.fullname);
      formdata.append("useremail", this.uemail);
      formdata.append("userphone", this.uphone);
      formdata.append("userpass", this.upassword);
      axios.post("/user-register-data", formdata).then(function (data) {
        _this.msg = "You are registered Successfully. Please Wait ... your are redirecting to login page";
        _this.error = "";

        _this.$router.push("/user-login");
      })["catch"](function (error) {
        _this.msgclass = "text-danger";
        _this.msg = "Please Fix error";
        _this.btnDisabled = false;
        console.log(error);
        _this.error = error.response.data.errors;

        if (error == "Error: Request failed with status code 500") {
          _this.msg = "Email or Phone number is already registered. Please try with different Email and Phone NUmber.";
        }
      });
      this.$Progress.finish();
    },
    changepasstype: function changepasstype() {
      this.passwordtype = this.passwordtype === "password" ? "text" : "password";
      this.eyeword = this.eyeword === "la la-eye" ? "la la-eye-slash" : "la la-eye";
    }
  },
  beforeCreate: function beforeCreate() {
    this.$Progress.start();

    if (this.$session.has("userId") || this.$session.exists()) {
      if (this.$session.has("userId")) {
        this.$router.push("/my-course");
      }
    }
  },
  created: function created() {
    this.$Progress.finish();

    if (this.$session.has("userRegPhone")) {
      this.uphonedummy = this.uphone = this.$session.get("userRegPhone");
    } else {
      this.$router.push("/user-registration");
    }
  }
});

/***/ }),

/***/ "./resources/js/components/user/userRegisterComp.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/user/userRegisterComp.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _userRegisterComp_vue_vue_type_template_id_d2c72874___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userRegisterComp.vue?vue&type=template&id=d2c72874& */ "./resources/js/components/user/userRegisterComp.vue?vue&type=template&id=d2c72874&");
/* harmony import */ var _userRegisterComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userRegisterComp.vue?vue&type=script&lang=js& */ "./resources/js/components/user/userRegisterComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _userRegisterComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _userRegisterComp_vue_vue_type_template_id_d2c72874___WEBPACK_IMPORTED_MODULE_0__.render,
  _userRegisterComp_vue_vue_type_template_id_d2c72874___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/userRegisterComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/userRegisterComp.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/user/userRegisterComp.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userRegisterComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./userRegisterComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/userRegisterComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userRegisterComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/userRegisterComp.vue?vue&type=template&id=d2c72874&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/user/userRegisterComp.vue?vue&type=template&id=d2c72874& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userRegisterComp_vue_vue_type_template_id_d2c72874___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userRegisterComp_vue_vue_type_template_id_d2c72874___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userRegisterComp_vue_vue_type_template_id_d2c72874___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./userRegisterComp.vue?vue&type=template&id=d2c72874& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/userRegisterComp.vue?vue&type=template&id=d2c72874&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/userRegisterComp.vue?vue&type=template&id=d2c72874&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/userRegisterComp.vue?vue&type=template&id=d2c72874& ***!
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
  return _c(
    "section",
    { staticClass: "contact-area section--padding position-relative" },
    [
      _c("span", { staticClass: "ring-shape ring-shape-1" }),
      _vm._v(" "),
      _c("span", { staticClass: "ring-shape ring-shape-2" }),
      _vm._v(" "),
      _c("span", { staticClass: "ring-shape ring-shape-3" }),
      _vm._v(" "),
      _c("span", { staticClass: "ring-shape ring-shape-4" }),
      _vm._v(" "),
      _c("span", { staticClass: "ring-shape ring-shape-5" }),
      _vm._v(" "),
      _c("span", { staticClass: "ring-shape ring-shape-6" }),
      _vm._v(" "),
      _c("span", { staticClass: "ring-shape ring-shape-7" }),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-7 mx-auto" }, [
            _c("div", { staticClass: "card card-item" }, [
              _c("div", { staticClass: "card-body p-4" }, [
                _c(
                  "h3",
                  { staticClass: "card-title text-center fs-24 lh-35 pb-2" },
                  [_vm._v("Create an Account and Start Learning!")]
                ),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "needs-validation",
                    attrs: { method: "post", novalidate: "" },
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.registerForm($event)
                      },
                    },
                  },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.uphone,
                          expression: "uphone",
                        },
                      ],
                      staticClass: "form-control form--control",
                      attrs: {
                        type: "hidden",
                        placeholder: "Enter Mobile Number",
                        disabled: "",
                      },
                      domProps: { value: _vm.uphone },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.uphone = $event.target.value
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-box" }, [
                      _c("label", { staticClass: "label-text" }, [
                        _vm._v("Full Name"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.fullname,
                              expression: "fullname",
                            },
                          ],
                          staticClass: "form-control form--control",
                          attrs: { type: "text", placeholder: "First name" },
                          domProps: { value: _vm.fullname },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.fullname = $event.target.value
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "la la-user input-icon" }),
                      ]),
                      _vm._v(" "),
                      _vm.error
                        ? _c("div", [
                            _c(
                              "ul",
                              _vm._l(_vm.error.username, function (err) {
                                return _c(
                                  "li",
                                  { key: err, staticClass: "text-danger" },
                                  [
                                    _vm._v(
                                      "\n                                                    " +
                                        _vm._s(err) +
                                        "\n                                                "
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
                    _c("div", { staticClass: "input-box" }, [
                      _c("label", { staticClass: "label-text" }, [
                        _vm._v("Email Address"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.uemail,
                              expression: "uemail",
                            },
                          ],
                          staticClass: "form-control form--control",
                          attrs: {
                            type: "email",
                            placeholder: "Enter email address",
                          },
                          domProps: { value: _vm.uemail },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.uemail = $event.target.value
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "la la-envelope input-icon",
                        }),
                      ]),
                      _vm._v(" "),
                      _vm.error
                        ? _c("div", [
                            _c(
                              "ul",
                              _vm._l(_vm.error.useremail, function (err) {
                                return _c(
                                  "li",
                                  { key: err, staticClass: "text-danger" },
                                  [
                                    _vm._v(
                                      "\n                                                    " +
                                        _vm._s(err) +
                                        "\n                                                "
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
                    _c("div", { staticClass: "input-box" }, [
                      _c("label", { staticClass: "label-text" }, [
                        _vm._v("Mobile Number"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.uphonedummy,
                              expression: "uphonedummy",
                            },
                          ],
                          staticClass: "form-control form--control",
                          attrs: {
                            type: "text",
                            placeholder: "Enter Mobile Number",
                            disabled: "",
                          },
                          domProps: { value: _vm.uphonedummy },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.uphonedummy = $event.target.value
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "la la-phone input-icon" }),
                      ]),
                      _vm._v(" "),
                      _vm.error
                        ? _c("div", [
                            _c(
                              "ul",
                              _vm._l(_vm.error.userphone, function (err) {
                                return _c(
                                  "li",
                                  { key: err, staticClass: "text-danger" },
                                  [
                                    _vm._v(
                                      "\n                                                    " +
                                        _vm._s(err) +
                                        "\n                                                "
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
                    _c("div", { staticClass: "input-box" }, [
                      _c("label", { staticClass: "label-text" }, [
                        _vm._v("Password"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group mb-3" }, [
                        _c("span", { staticClass: "la la-lock input-icon" }),
                        _vm._v(" "),
                        _vm.passwordtype === "checkbox"
                          ? _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.upassword,
                                  expression: "upassword",
                                },
                              ],
                              staticClass:
                                "form-control form--control password-field",
                              attrs: {
                                placeholder: "Password",
                                type: "checkbox",
                              },
                              domProps: {
                                checked: Array.isArray(_vm.upassword)
                                  ? _vm._i(_vm.upassword, null) > -1
                                  : _vm.upassword,
                              },
                              on: {
                                change: function ($event) {
                                  var $$a = _vm.upassword,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.upassword = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.upassword = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.upassword = $$c
                                  }
                                },
                              },
                            })
                          : _vm.passwordtype === "radio"
                          ? _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.upassword,
                                  expression: "upassword",
                                },
                              ],
                              staticClass:
                                "form-control form--control password-field",
                              attrs: { placeholder: "Password", type: "radio" },
                              domProps: {
                                checked: _vm._q(_vm.upassword, null),
                              },
                              on: {
                                change: function ($event) {
                                  _vm.upassword = null
                                },
                              },
                            })
                          : _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.upassword,
                                  expression: "upassword",
                                },
                              ],
                              staticClass:
                                "form-control form--control password-field",
                              attrs: {
                                placeholder: "Password",
                                type: _vm.passwordtype,
                              },
                              domProps: { value: _vm.upassword },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.upassword = $event.target.value
                                },
                              },
                            }),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group-append" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn theme-btn theme-btn-transparent toggle-password",
                              attrs: { type: "button" },
                            },
                            [
                              _c("i", {
                                class: _vm.eyeword,
                                on: { click: _vm.changepasstype },
                              }),
                            ]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _vm.error
                        ? _c("div", [
                            _c(
                              "ul",
                              _vm._l(_vm.error.userpass, function (err) {
                                return _c(
                                  "li",
                                  { key: err, staticClass: "text-danger" },
                                  [
                                    _vm._v(
                                      "\n                                                    " +
                                        _vm._s(err) +
                                        "\n                                                "
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
                    _c("div", { staticClass: "btn-box" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn theme-btn",
                          attrs: { disabled: _vm.btnDisabled, type: "submit" },
                        },
                        [
                          _vm._v("Register Account "),
                          _c("i", {
                            staticClass: "la la-arrow-right icon ml-1",
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c("h4", { staticClass: "mt-3", class: _vm.msgclass }, [
                        _vm._v(_vm._s(_vm.msg)),
                      ]),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "fs-14 pt-2" },
                        [
                          _vm._v("Already have an account? "),
                          _c(
                            "router-link",
                            {
                              staticClass: "text-color hover-underline",
                              attrs: { to: "/user-login" },
                            },
                            [_vm._v("Login")]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("span", { staticClass: "section-divider" }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);