"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["userRegistration"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
Vue.component('my-countdown', (__webpack_require__(/*! ./mycountdownComp.vue */ "./resources/js/components/user/mycountdownComp.vue")["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      phoneNum: "",
      phoneOtp: "",
      verifyOTP: "",
      otpbox: "none",
      phoneBox: false,
      msgclass: "",
      msg: "",
      btnDisabled: false,
      error: "",
      testTime: ""
    };
  },
  methods: {
    registerForm: function registerForm() {
      var _this = this;

      this.$Progress.start();
      this.msgclass = "text-success";
      this.msg = "Please wait... ";
      this.phoneBox = true;
      this.btnDisabled = true;
      var formdata = new FormData();
      formdata.append("userphone", this.phoneNum);
      axios.post("/user-phone-verification", formdata).then(function (data) {
        // console.log(data.data);
        var result = data.data;

        if (result == 'try' || result == 'duplicate') {
          if (result == 'try') {
            _this.msg = "wrong phone format! Please try again with correct phone number.";
          } else {
            _this.msg = "Phone Number is already registred.";
          }

          _this.error = "Fix Error";
          _this.otpbox = "none";
          _this.phoneBox = false;
          _this.btnDisabled = false;
        } else {
          var dt = new Date();
          _this.testing = dt.setMinutes(dt.getMinutes() + 1);
          _this.testTime = new Date(_this.testing).toString().split('GMT')[0];
          _this.phoneOtp = data.data;

          _this.$session.start();

          _this.$session.remove("userRegPhone");

          _this.$session.set("userRegPhone", _this.phoneNum);

          _this.otpbox = "";
          _this.msg = "Please Enter OTP to verify phone number";
          _this.error = "";
        }
      })["catch"](function (error) {
        _this.msgclass = "text-danger";
        _this.msg = "Please Fix error";
        _this.btnDisabled = false;
        _this.otpbox = "none";
        _this.phoneBox = false;
        console.log(error);
        _this.error = error.response.data.errors;
        /* if (error == "Error: Request failed with status code 500") {
            this.msg = "Email or Phone number is already registered. Please try with different Email and Phone NUmber.";
        } */
      });
      this.$Progress.finish();
    },
    checkMyOTP: function checkMyOTP() {
      if (this.phoneOtp == this.verifyOTP) {
        this.$router.push("/complete-user-registration");
      } else {
        this.msgclass = "text-danger";
        this.msg = "Please enter Correct OTP!";
      }
    },
    setNewOTP: function setNewOTP() {
      this.otpbox = "none";
      this.btnDisabled = false;
      this.phoneBox = false;
      this.msg = "";
      this.error = "";
    }
  },
  beforeCreate: function beforeCreate() {
    this.$Progress.start();

    if (this.$session.has("userId")) {
      this.$router.push("/my-course");
    }
  },
  created: function created() {
    this.$Progress.finish();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/mycountdownComp.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/mycountdownComp.vue?vue&type=script&lang=js& ***!
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
var interval = null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'vuejsCountDown',
  props: {
    deadline: {
      type: String
    },
    end: {
      type: String
    },
    stop: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      date: null,
      diff: 0
    };
  },
  created: function created() {
    var _this = this;

    if (!this.deadline && !this.end) {
      throw new Error("Missing props 'deadline' or 'end'");
    }

    var endTime = this.deadline ? this.deadline : this.end;
    this.date = Math.trunc(Date.parse(endTime.replace(/-/g, "/")) / 1000);

    if (!this.date) {
      throw new Error("Invalid props value, correct the 'deadline' or 'end'");
    }

    interval = setInterval(function () {
      _this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  computed: {
    seconds: function seconds() {
      return Math.trunc(this.diff) % 60;
    },
    minutes: function minutes() {
      return Math.trunc(this.diff / 60) % 60;
    },
    hours: function hours() {
      return Math.trunc(this.diff / 60 / 60) % 24;
    },
    days: function days() {
      return Math.trunc(this.diff / 60 / 60 / 24);
    }
  },
  watch: {
    now: function now(value) {
      this.diff = this.date - this.now;

      if (this.diff <= 0 || this.stop) {
        this.diff = 0; // Remove interval

        clearInterval(interval);
        this.$emit("timerEnd", "finished");
      }
    }
  },
  filters: {
    twoDigits: function twoDigits(value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString();
      }

      return value.toString();
    }
  },
  destroyed: function destroyed() {
    clearInterval(interval);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=style&index=0&id=d5bbb5fa&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=style&index=0&id=d5bbb5fa&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Chrome, Safari, Edge, Opera */\ninput[data-v-d5bbb5fa]::-webkit-outer-spin-button,\n    input[data-v-d5bbb5fa]::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n    /* Firefox */\ninput[type=number][data-v-d5bbb5fa] {\n    -moz-appearance: textfield;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/mycountdownComp.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/mycountdownComp.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.timerHead{\r\n    font-size:20px;\n}\n.vuejs-countdown {\r\n  padding: 0;\r\n  margin: 0;\n}\n.vuejs-countdown li {\r\n  display: inline-block;\r\n  margin: 0 8px;\r\n  text-align: center;\r\n  position: relative;\n}\n.vuejs-countdown li p {\r\n    margin: 0;\n}\n.vuejs-countdown li:after {\r\n  content: \":\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: -13px;\r\n  font-size: 32px;\n}\n.vuejs-countdown li:first-of-type {\r\n  margin-left: 0;\n}\n.vuejs-countdown li:last-of-type {\r\n  margin-right: 0;\n}\n.vuejs-countdown li:last-of-type:after {\r\n  content: \"\";\n}\n.vuejs-countdown .digit {\r\n  font-size: 32px;\r\n  font-weight: 600;\r\n  line-height: 1.4;\r\n  margin-bottom: 0;\n}\n.vuejs-countdown .text {\r\n  text-transform: uppercase;\r\n  margin-bottom: 0;\r\n  font-size: 10px;\n}\n@media screen and (max-width: 768px) {\n.vuejs-countdown .digit{\r\n        font-size: 20px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=style&index=0&id=d5bbb5fa&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=style&index=0&id=d5bbb5fa&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_emailPhoneVerifyComp_vue_vue_type_style_index_0_id_d5bbb5fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./emailPhoneVerifyComp.vue?vue&type=style&index=0&id=d5bbb5fa&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=style&index=0&id=d5bbb5fa&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_emailPhoneVerifyComp_vue_vue_type_style_index_0_id_d5bbb5fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_emailPhoneVerifyComp_vue_vue_type_style_index_0_id_d5bbb5fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/mycountdownComp.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/mycountdownComp.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mycountdownComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mycountdownComp.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/mycountdownComp.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mycountdownComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mycountdownComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/user/emailPhoneVerifyComp.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/user/emailPhoneVerifyComp.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emailPhoneVerifyComp_vue_vue_type_template_id_d5bbb5fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emailPhoneVerifyComp.vue?vue&type=template&id=d5bbb5fa&scoped=true& */ "./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=template&id=d5bbb5fa&scoped=true&");
/* harmony import */ var _emailPhoneVerifyComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emailPhoneVerifyComp.vue?vue&type=script&lang=js& */ "./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _emailPhoneVerifyComp_vue_vue_type_style_index_0_id_d5bbb5fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emailPhoneVerifyComp.vue?vue&type=style&index=0&id=d5bbb5fa&scoped=true&lang=css& */ "./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=style&index=0&id=d5bbb5fa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _emailPhoneVerifyComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _emailPhoneVerifyComp_vue_vue_type_template_id_d5bbb5fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _emailPhoneVerifyComp_vue_vue_type_template_id_d5bbb5fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d5bbb5fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/emailPhoneVerifyComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/mycountdownComp.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/user/mycountdownComp.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mycountdownComp_vue_vue_type_template_id_1001c93b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mycountdownComp.vue?vue&type=template&id=1001c93b& */ "./resources/js/components/user/mycountdownComp.vue?vue&type=template&id=1001c93b&");
/* harmony import */ var _mycountdownComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mycountdownComp.vue?vue&type=script&lang=js& */ "./resources/js/components/user/mycountdownComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _mycountdownComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mycountdownComp.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/user/mycountdownComp.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mycountdownComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mycountdownComp_vue_vue_type_template_id_1001c93b___WEBPACK_IMPORTED_MODULE_0__.render,
  _mycountdownComp_vue_vue_type_template_id_1001c93b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/mycountdownComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_emailPhoneVerifyComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./emailPhoneVerifyComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_emailPhoneVerifyComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/mycountdownComp.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/user/mycountdownComp.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mycountdownComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mycountdownComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/mycountdownComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mycountdownComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=style&index=0&id=d5bbb5fa&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=style&index=0&id=d5bbb5fa&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_emailPhoneVerifyComp_vue_vue_type_style_index_0_id_d5bbb5fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./emailPhoneVerifyComp.vue?vue&type=style&index=0&id=d5bbb5fa&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=style&index=0&id=d5bbb5fa&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/user/mycountdownComp.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/user/mycountdownComp.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mycountdownComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mycountdownComp.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/mycountdownComp.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=template&id=d5bbb5fa&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=template&id=d5bbb5fa&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_emailPhoneVerifyComp_vue_vue_type_template_id_d5bbb5fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_emailPhoneVerifyComp_vue_vue_type_template_id_d5bbb5fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_emailPhoneVerifyComp_vue_vue_type_template_id_d5bbb5fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./emailPhoneVerifyComp.vue?vue&type=template&id=d5bbb5fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=template&id=d5bbb5fa&scoped=true&");


/***/ }),

/***/ "./resources/js/components/user/mycountdownComp.vue?vue&type=template&id=1001c93b&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/user/mycountdownComp.vue?vue&type=template&id=1001c93b& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mycountdownComp_vue_vue_type_template_id_1001c93b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mycountdownComp_vue_vue_type_template_id_1001c93b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mycountdownComp_vue_vue_type_template_id_1001c93b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mycountdownComp.vue?vue&type=template&id=1001c93b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/mycountdownComp.vue?vue&type=template&id=1001c93b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=template&id=d5bbb5fa&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/emailPhoneVerifyComp.vue?vue&type=template&id=d5bbb5fa&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
              _c("div", { staticClass: "card-body p-5" }, [
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
                    staticClass: "needs-validation pt-4",
                    attrs: { method: "post", novalidate: "" },
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.registerForm($event)
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "input-box " }, [
                      _c("label", { staticClass: "label-text" }, [
                        _vm._v("Enter 10 Digit Phone Number"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.phoneNum,
                              expression: "phoneNum",
                            },
                          ],
                          staticClass: "form-control form--control",
                          attrs: {
                            type: "number",
                            placeholder: "Enter 10 Digit Phone Number",
                            disabled: _vm.phoneBox,
                          },
                          domProps: { value: _vm.phoneNum },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.phoneNum = $event.target.value
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
                    _vm.otpbox == "none"
                      ? _c("div", { staticClass: "btn-box" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn theme-btn",
                              attrs: {
                                disabled: _vm.btnDisabled,
                                type: "submit",
                              },
                            },
                            [
                              _vm._v("Start Registration "),
                              _c("i", {
                                staticClass: "la la-arrow-right icon ml-1",
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _c("h4", { class: _vm.msgclass }, [
                            _vm._v(_vm._s(_vm.msg)),
                          ]),
                        ])
                      : _vm._e(),
                  ]
                ),
                _vm._v(" "),
                _vm.otpbox != "none"
                  ? _c(
                      "div",
                      { staticClass: "input-box " },
                      [
                        _c("label", { staticClass: "label-text" }, [
                          _vm._v("Enter OTP"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.verifyOTP,
                                expression: "verifyOTP",
                              },
                            ],
                            staticClass: "form-control form--control",
                            attrs: { type: "number", placeholder: "Enter OTP" },
                            domProps: { value: _vm.verifyOTP },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.verifyOTP = $event.target.value
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "la la-lock input-icon" }),
                        ]),
                        _vm._v(" "),
                        _c("my-countdown", {
                          attrs: { end: _vm.testTime },
                          on: { timerEnd: _vm.setNewOTP },
                        }),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.otpbox != "none"
                  ? _c("div", { staticClass: "btn-box" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn theme-btn",
                          on: { click: _vm.checkMyOTP },
                        },
                        [
                          _vm._v("Verify OTP "),
                          _c("i", {
                            staticClass: "la la-arrow-right icon ml-1",
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c("h4", { class: _vm.msgclass }, [
                        _vm._v(_vm._s(_vm.msg)),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex fs-14 pt-2" }, [
                  _c(
                    "div",
                    { staticClass: "mr-4" },
                    [
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
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "text-color hover-underline",
                          attrs: { to: "/" },
                        },
                        [_vm._v("Home")]
                      ),
                    ],
                    1
                  ),
                ]),
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/mycountdownComp.vue?vue&type=template&id=1001c93b&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/mycountdownComp.vue?vue&type=template&id=1001c93b& ***!
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
  return _c("ul", { staticClass: "vuejs-countdown" }, [
    _vm.days > 0
      ? _c("li", [
          _c("p", { staticClass: "digit" }, [
            _vm._v(_vm._s(_vm._f("twoDigits")(_vm.days))),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text" }, [
            _vm._v(_vm._s(_vm.days > 1 ? "days" : "day")),
          ]),
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("li", [
      _c("p", { staticClass: "digit" }, [
        _vm._v(_vm._s(_vm._f("twoDigits")(_vm.hours))),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text" }, [
        _vm._v(_vm._s(_vm.hours > 1 ? "hours" : "hour")),
      ]),
    ]),
    _vm._v(" "),
    _c("li", [
      _c("p", { staticClass: "digit" }, [
        _vm._v(_vm._s(_vm._f("twoDigits")(_vm.minutes))),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text" }, [_vm._v("min")]),
    ]),
    _vm._v(" "),
    _c("li", [
      _c("p", { staticClass: "digit" }, [
        _vm._v(_vm._s(_vm._f("twoDigits")(_vm.seconds))),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text" }, [_vm._v("Sec")]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);