"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editUserProfile"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/userEditProfileComp.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/userEditProfileComp.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      userInfo: {},
      btnDisabled: false,
      msgclass: "",
      msg: "",
      error: ""
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
      formdata.append("username", this.userInfo.name);
      axios.post("/update-user-data", formdata).then(function (data) {
        console.log(data.data);
        _this.msg = "Your profile is updated successfully.";
        _this.error = "";
      })["catch"](function (error) {
        _this.msgclass = "text-danger";
        _this.msg = "Please Fix error";
        _this.btnDisabled = false;
        _this.error = error.response.data.errors; // console.log(this.error)

        if (error == "Error: Request failed with status code 500") {
          _this.msg = "Email or Phone number is already registered. Please try with different Email and Phone NUmber.";
        }
      });
      this.$Progress.finish();
    }
  },
  beforeCreate: function beforeCreate() {
    this.$Progress.start();

    if (!this.$session.has("userId") || !this.$session.exists()) {
      this.$router.push("/user-login");
    }
  },
  created: function created() {
    var _this2 = this;

    axios.get("/auth-single-user-detail").then(function (response) {
      return _this2.userInfo = response.data;
    })["catch"](function (error) {
      return console.log(error);
    });
    this.$Progress.finish();
  }
});

/***/ }),

/***/ "./resources/js/components/user/userEditProfileComp.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/user/userEditProfileComp.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _userEditProfileComp_vue_vue_type_template_id_ff2bb7ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userEditProfileComp.vue?vue&type=template&id=ff2bb7ac& */ "./resources/js/components/user/userEditProfileComp.vue?vue&type=template&id=ff2bb7ac&");
/* harmony import */ var _userEditProfileComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userEditProfileComp.vue?vue&type=script&lang=js& */ "./resources/js/components/user/userEditProfileComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _userEditProfileComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _userEditProfileComp_vue_vue_type_template_id_ff2bb7ac___WEBPACK_IMPORTED_MODULE_0__.render,
  _userEditProfileComp_vue_vue_type_template_id_ff2bb7ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/userEditProfileComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/userEditProfileComp.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/user/userEditProfileComp.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userEditProfileComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./userEditProfileComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/userEditProfileComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userEditProfileComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/userEditProfileComp.vue?vue&type=template&id=ff2bb7ac&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/user/userEditProfileComp.vue?vue&type=template&id=ff2bb7ac& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userEditProfileComp_vue_vue_type_template_id_ff2bb7ac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userEditProfileComp_vue_vue_type_template_id_ff2bb7ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userEditProfileComp_vue_vue_type_template_id_ff2bb7ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./userEditProfileComp.vue?vue&type=template&id=ff2bb7ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/userEditProfileComp.vue?vue&type=template&id=ff2bb7ac&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/userEditProfileComp.vue?vue&type=template&id=ff2bb7ac&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/userEditProfileComp.vue?vue&type=template&id=ff2bb7ac& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
                  [_vm._v("Edit Profile")]
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
                              value: _vm.userInfo.name,
                              expression: "userInfo.name",
                            },
                          ],
                          staticClass: "form-control form--control",
                          attrs: { type: "text", placeholder: "First name" },
                          domProps: { value: _vm.userInfo.name },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.userInfo,
                                "name",
                                $event.target.value
                              )
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
                          staticClass: "disabled form-control form--control",
                          attrs: {
                            disabled: "",
                            type: "email",
                            placeholder: "Enter email address",
                          },
                          domProps: { value: _vm.userInfo.email },
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "la la-envelope input-icon",
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-box" }, [
                      _c("label", { staticClass: "label-text" }, [
                        _vm._v("Mobile Number"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          staticClass: "disabled form-control form--control",
                          attrs: { disabled: "", type: "text" },
                          domProps: { value: _vm.userInfo.phoneNumber },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "la la-phone input-icon" }),
                      ]),
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
                          _vm._v("Update Profile Info "),
                          _c("i", {
                            staticClass: "la la-arrow-right icon ml-1",
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c("h4", { class: _vm.msgclass }, [
                        _vm._v(_vm._s(_vm.msg)),
                      ]),
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