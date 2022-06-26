(self["webpackChunk"] = self["webpackChunk"] || []).push([["aboutIas"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/allArticlesComp.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/allArticlesComp.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
Vue.component('pagination', __webpack_require__(/*! laravel-vue-pagination */ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.common.js"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      categoryName: "",
      catId: "",
      loadDisplayed: "none",
      blogList: {}
    };
  },
  created: function created() {
    var _this = this;

    this.loadDisplayed = "block";
    this.categoryName = this.$route.params.categoryName;
    this.catId = this.$route.params.categoryId;
    axios.get("/get-all-articles/").then(function (response) {
      // console.log()
      _this.blogList = response.data;
      _this.loadDisplayed = "none";
    })["catch"](function (error) {
      return console.log(error);
    });
    this.$Progress.finish();
  },
  beforeCreate: function beforeCreate() {
    this.$Progress.start();
  },
  methods: {
    getResults: function getResults() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.loadDisplayed = "block";
      this.categoryName = this.$route.params.categoryName;
      this.catId = this.$route.params.categoryId;
      axios.get("/get-all-articles" + "?page=" + page).then(function (response) {
        // console.log()
        _this2.blogList = response.data;
        _this2.loadDisplayed = "none";
      })["catch"](function (error) {
        return console.log(error);
      }); // 
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
Vue.component('pagination', __webpack_require__(/*! laravel-vue-pagination */ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.common.js"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      categoryName: "",
      catId: "",
      loadDisplayed: "none",
      blogList: {}
    };
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Category Name",
    // all titles will be injected into this template
    titleTemplate: '%s | BE N BY IAS',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      name: 'description',
      content: 'Category Description'
    }, {
      name: 'keywords',
      content: 'An example Vue application with vue-meta.'
    }]
  },
  created: function created() {
    var _this = this;

    this.loadDisplayed = "block";
    this.categoryName = this.$route.params.categoryName;
    this.catId = this.$route.params.categoryId;
    axios.get("/front-blog-list-cat-wise/" + this.catId).then(function (response) {
      // console.log()
      _this.blogList = response.data;
      _this.loadDisplayed = "none";
    })["catch"](function (error) {
      return console.log(error);
    });
    this.$Progress.finish();
  },
  beforeCreate: function beforeCreate() {
    this.$Progress.start();
  },
  methods: {
    getResults: function getResults() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.loadDisplayed = "block";
      this.categoryName = this.$route.params.categoryName;
      this.catId = this.$route.params.categoryId;
      axios.get("/front-blog-list-cat-wise/" + this.catId + "?page=" + page).then(function (response) {
        // console.log()
        _this2.blogList = response.data;
        _this2.loadDisplayed = "none";
      })["catch"](function (error) {
        return console.log(error);
      }); // 
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
Vue.component('pagination', __webpack_require__(/*! laravel-vue-pagination */ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.common.js"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      categoryName: "",
      catId: "",
      loadDisplayed: "none",
      mcqDateList: {},
      questType: "daily"
    };
  },
  created: function created() {
    var _this = this;

    var rootname = this.$router.currentRoute.path;

    if (rootname == "/free-mock-test") {
      this.questType = "mocktest";
    } else {
      this.questType = "daily";
    }

    this.loadDisplayed = "block";
    axios.get("/front-mock-test-date-list/" + this.questType).then(function (response) {
      // console.log()
      _this.mcqDateList = response.data;
      _this.loadDisplayed = "none";
    })["catch"](function (error) {
      return console.log(error);
    });
    this.$Progress.finish();
  },
  beforeCreate: function beforeCreate() {
    this.$Progress.start();
  },
  methods: {
    getResults: function getResults() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.loadDisplayed = "block";
      this.categoryName = this.$route.params.categoryName;
      this.catId = this.$route.params.categoryId;
      axios.get("front-mock-test-date-list/?page=" + page).then(function (response) {
        // console.log()
        _this2.mcqDateList = response.data;
        _this2.loadDisplayed = "none";
      })["catch"](function (error) {
        return console.log(error);
      }); // 
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/mcqquestionattempComp.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/mcqquestionattempComp.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dateId: "",
      questListId: {},
      courseLists: {},
      testanswer: [],
      instruc: 0,
      singleMcqdateInfo: "",
      myData: "hello description"
    };
  },
  meta: function meta() {
    return [{
      name: 'description',
      content: this.myData
    }];
  },
  created: function created() {
    var _this = this;

    this.dateId = this.$route.params.dateid;
    axios.get("/free-mock-mcq-quest-list/" + this.dateId).then(function (response) {
      return _this.questListId = response.data;
    })["catch"](function (error) {
      return console.log(error);
    }); // course lIst

    axios.get("/top-courses/3").then(function (response) {
      return _this.courseLists = response.data;
    })["catch"](function (error) {
      return console.log(error);
    }); // course lIst    
    // single mcq date

    axios.get("/single-mcq-date-info/" + this.dateId).then(function (response) {
      return _this.singleMcqdateInfo = response.data;
    })["catch"](function (error) {
      return console.log(error);
    }); // single mcq date
  },
  methods: {
    submitanswer: function submitanswer() {
      alert("There is some server config issue. Please try after some time.");
    },
    uncheckMe: function uncheckMe(str) {
      if (str.target.checked == true) {
        str.target.checked = false;
      }
    },
    startTest: function startTest() {
      this.instruc = 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/ncertbooksComp.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/ncertbooksComp.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      catList: {}
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/ncert-books-download").then(function (response) {
      return _this.catList = response.data;
    })["catch"](function (error) {
      return console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/preyearQuestPaperComp.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/preyearQuestPaperComp.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      catList: {}
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/previous-year-quest-paper").then(function (response) {
      return _this.catList = response.data;
    })["catch"](function (error) {
      return console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/searchResultComp.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/searchResultComp.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
Vue.component('pagination', __webpack_require__(/*! laravel-vue-pagination */ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.common.js"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      query: "",
      bType: "",
      loadDisplayed: "none",
      blogList: {}
    };
  },
  created: function created() {
    var _this = this;

    this.loadDisplayed = "block";
    this.query = this.$route.query.searchkey;
    this.bType = this.$route.query.type;

    if ((this.query == "" || this.query.length < 4) && (this.bType == "" || this.bType.length < 4)) {
      this.query = "all";
      this.bType = "all";
    }

    axios.get("/get-search-result/" + this.query + "/" + this.bType).then(function (response) {
      // console.log()
      _this.blogList = response.data;
      _this.loadDisplayed = "none";
    })["catch"](function (error) {
      return console.log(error);
    });
    this.$Progress.finish();
  },
  beforeCreate: function beforeCreate() {
    this.$Progress.start();
  },
  methods: {
    getResults: function getResults() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      // 
      this.loadDisplayed = "block";
      this.query = this.$route.query.searchkey;
      this.bType = this.$route.query.type;

      if ((this.query == "" || this.query.length < 4) && (this.bType == "" || this.bType.length < 4)) {
        this.query = "all";
        this.bType = "all";
      }

      axios.get("/get-search-result/" + this.query + "/" + this.bType + "?page=" + page).then(function (response) {
        // console.log()
        _this2.blogList = response.data;
        _this2.loadDisplayed = "none";
      })["catch"](function (error) {
        return console.log(error);
      }); // 
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/whychooseLawComp.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/whychooseLawComp.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      mypageTitle: ""
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: "".concat(this.mypageTitle, " - BE N BY IAS"),
      meta: [{
        name: 'title',
        content: 'Why choose Law optional'
      }, {
        name: 'description',
        content: 'Why choose Law optional'
      }, {
        name: 'keywords',
        content: 'Why choose Law optional'
      }, {
        property: 'og:description',
        content: 'Why choose Law optional'
      }]
    };
  },
  beforeCreate: function beforeCreate() {
    this.$Progress.start();
  },
  created: function created() {
    this.mypageTitle = "Why choose law optional";
    this.$Progress.finish();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/allArticlesComp.vue?vue&type=style&index=0&id=ed5e3d18&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/allArticlesComp.vue?vue&type=style&index=0&id=ed5e3d18&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fullpage[data-v-ed5e3d18] {\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    background: #000000ad;\n    z-index: 9;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n.center-text[data-v-ed5e3d18] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    min-height: 100vh;\n    color: white;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=style&index=0&id=7924ac14&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=style&index=0&id=7924ac14&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fullpage[data-v-7924ac14] {\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    background: #000000ad;\n    z-index: 9;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n.center-text[data-v-7924ac14] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    min-height: 100vh;\n    color: white;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=style&index=0&id=76c76e47&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=style&index=0&id=76c76e47&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fullpage[data-v-76c76e47] {\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    background: #000000ad;\n    z-index: 9;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n.center-text[data-v-76c76e47] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    min-height: 100vh;\n    color: white;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/iasaboutComp.vue?vue&type=style&index=0&id=3c13af1c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/iasaboutComp.vue?vue&type=style&index=0&id=3c13af1c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nul[data-v-3c13af1c]{\n    text-indent: 25px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/privacyComp.vue?vue&type=style&index=0&id=57d4b496&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/privacyComp.vue?vue&type=style&index=0&id=57d4b496&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.card-body[data-v-57d4b496]\n{\n    padding:30px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/refundPolicyComp.vue?vue&type=style&index=0&id=927836ac&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/refundPolicyComp.vue?vue&type=style&index=0&id=927836ac&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.card-body[data-v-927836ac]\n{\n    padding:30px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/searchResultComp.vue?vue&type=style&index=0&id=3fb04276&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/searchResultComp.vue?vue&type=style&index=0&id=3fb04276&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fullpage[data-v-3fb04276] {\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    background: #000000ad;\n    z-index: 9;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n.center-text[data-v-3fb04276] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    min-height: 100vh;\n    color: white;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/termsandconditionComp.vue?vue&type=style&index=0&id=00f1fd79&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/termsandconditionComp.vue?vue&type=style&index=0&id=00f1fd79&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.card-body[data-v-00f1fd79]\n{\n    padding:30px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/whychooseLawComp.vue?vue&type=style&index=0&id=12d8c223&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/whychooseLawComp.vue?vue&type=style&index=0&id=12d8c223&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\np[data-v-12d8c223]{\r\n    font-size: 18px;\r\n    padding-bottom: 20px;\r\n    padding-top: 10px;\r\n    color: rgb(46, 40, 40);\n}\nli[data-v-12d8c223]{\r\n    padding-bottom: 20px;\r\n    padding-top: 10px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.common.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.common.js ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_187__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_187__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_187__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_187__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_187__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_4937__) {

"use strict";
__nested_webpack_require_4937__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __nested_webpack_require_4937__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __nested_webpack_require_4937__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"604a59b1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/LaravelVuePagination.vue?vue&type=template&id=7f71b5a7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('renderless-laravel-vue-pagination',{attrs:{"data":_vm.data,"limit":_vm.limit,"show-disabled":_vm.showDisabled,"size":_vm.size,"align":_vm.align},on:{"pagination-change-page":_vm.onPaginationChangePage},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var data = ref.data;
var limit = ref.limit;
var showDisabled = ref.showDisabled;
var size = ref.size;
var align = ref.align;
var computed = ref.computed;
var prevButtonEvents = ref.prevButtonEvents;
var nextButtonEvents = ref.nextButtonEvents;
var pageButtonEvents = ref.pageButtonEvents;
return (computed.total > computed.perPage)?_c('ul',{staticClass:"pagination",class:{
            'pagination-sm': size == 'small',
            'pagination-lg': size == 'large',
            'justify-content-center': align == 'center',
            'justify-content-end': align == 'right'
        }},[(computed.prevPageUrl || showDisabled)?_c('li',{staticClass:"page-item pagination-prev-nav",class:{'disabled': !computed.prevPageUrl}},[_c('a',_vm._g({staticClass:"page-link",attrs:{"href":"#","aria-label":"Previous","tabindex":!computed.prevPageUrl && -1}},prevButtonEvents),[_vm._t("prev-nav",[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("«")]),_c('span',{staticClass:"sr-only"},[_vm._v("Previous")])])],2)]):_vm._e(),_vm._l((computed.pageRange),function(page,key){return _c('li',{key:key,staticClass:"page-item pagination-page-nav",class:{ 'active': page == computed.currentPage }},[_c('a',_vm._g({staticClass:"page-link",attrs:{"href":"#"}},pageButtonEvents(page)),[_vm._v("\n                "+_vm._s(page)+"\n                "),(page == computed.currentPage)?_c('span',{staticClass:"sr-only"},[_vm._v("(current)")]):_vm._e()])])}),(computed.nextPageUrl || showDisabled)?_c('li',{staticClass:"page-item pagination-next-nav",class:{'disabled': !computed.nextPageUrl}},[_c('a',_vm._g({staticClass:"page-link",attrs:{"href":"#","aria-label":"Next","tabindex":!computed.nextPageUrl && -1}},nextButtonEvents),[_vm._t("next-nav",[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("»")]),_c('span',{staticClass:"sr-only"},[_vm._v("Next")])])],2)]):_vm._e()],2):_vm._e()}}],null,true)})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/LaravelVuePagination.vue?vue&type=template&id=7f71b5a7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/RenderlessLaravelVuePagination.vue?vue&type=script&lang=js&
/* harmony default export */ var RenderlessLaravelVuePaginationvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Object,
      default: function _default() {}
    },
    limit: {
      type: Number,
      default: 0
    },
    showDisabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
      validator: function validator(value) {
        return ['small', 'default', 'large'].indexOf(value) !== -1;
      }
    },
    align: {
      type: String,
      default: 'left',
      validator: function validator(value) {
        return ['left', 'center', 'right'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    isApiResource: function isApiResource() {
      return !!this.data.meta;
    },
    currentPage: function currentPage() {
      return this.isApiResource ? this.data.meta.current_page : this.data.current_page;
    },
    firstPageUrl: function firstPageUrl() {
      return this.isApiResource ? this.data.links.first : null;
    },
    from: function from() {
      return this.isApiResource ? this.data.meta.from : this.data.from;
    },
    lastPage: function lastPage() {
      return this.isApiResource ? this.data.meta.last_page : this.data.last_page;
    },
    lastPageUrl: function lastPageUrl() {
      return this.isApiResource ? this.data.links.last : null;
    },
    nextPageUrl: function nextPageUrl() {
      return this.isApiResource ? this.data.links.next : this.data.next_page_url;
    },
    perPage: function perPage() {
      return this.isApiResource ? this.data.meta.per_page : this.data.per_page;
    },
    prevPageUrl: function prevPageUrl() {
      return this.isApiResource ? this.data.links.prev : this.data.prev_page_url;
    },
    to: function to() {
      return this.isApiResource ? this.data.meta.to : this.data.to;
    },
    total: function total() {
      return this.isApiResource ? this.data.meta.total : this.data.total;
    },
    pageRange: function pageRange() {
      if (this.limit === -1) {
        return 0;
      }

      if (this.limit === 0) {
        return this.lastPage;
      }

      var current = this.currentPage;
      var last = this.lastPage;
      var delta = this.limit;
      var left = current - delta;
      var right = current + delta + 1;
      var range = [];
      var pages = [];
      var l;

      for (var i = 1; i <= last; i++) {
        if (i === 1 || i === last || i >= left && i < right) {
          range.push(i);
        }
      }

      range.forEach(function (i) {
        if (l) {
          if (i - l === 2) {
            pages.push(l + 1);
          } else if (i - l !== 1) {
            pages.push('...');
          }
        }

        pages.push(i);
        l = i;
      });
      return pages;
    }
  },
  methods: {
    previousPage: function previousPage() {
      this.selectPage(this.currentPage - 1);
    },
    nextPage: function nextPage() {
      this.selectPage(this.currentPage + 1);
    },
    selectPage: function selectPage(page) {
      if (page === '...') {
        return;
      }

      this.$emit('pagination-change-page', page);
    }
  },
  render: function render() {
    var _this = this;

    return this.$scopedSlots.default({
      data: this.data,
      limit: this.limit,
      showDisabled: this.showDisabled,
      size: this.size,
      align: this.align,
      computed: {
        isApiResource: this.isApiResource,
        currentPage: this.currentPage,
        firstPageUrl: this.firstPageUrl,
        from: this.from,
        lastPage: this.lastPage,
        lastPageUrl: this.lastPageUrl,
        nextPageUrl: this.nextPageUrl,
        perPage: this.perPage,
        prevPageUrl: this.prevPageUrl,
        to: this.to,
        total: this.total,
        pageRange: this.pageRange
      },
      prevButtonEvents: {
        click: function click(e) {
          e.preventDefault();

          _this.previousPage();
        }
      },
      nextButtonEvents: {
        click: function click(e) {
          e.preventDefault();

          _this.nextPage();
        }
      },
      pageButtonEvents: function pageButtonEvents(page) {
        return {
          click: function click(e) {
            e.preventDefault();

            _this.selectPage(page);
          }
        };
      }
    });
  }
});
// CONCATENATED MODULE: ./src/RenderlessLaravelVuePagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_RenderlessLaravelVuePaginationvue_type_script_lang_js_ = (RenderlessLaravelVuePaginationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/RenderlessLaravelVuePagination.vue
var RenderlessLaravelVuePagination_render, RenderlessLaravelVuePagination_staticRenderFns




/* normalize component */

var component = normalizeComponent(
  src_RenderlessLaravelVuePaginationvue_type_script_lang_js_,
  RenderlessLaravelVuePagination_render,
  RenderlessLaravelVuePagination_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RenderlessLaravelVuePagination = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/LaravelVuePagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var LaravelVuePaginationvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Object,
      default: function _default() {}
    },
    limit: {
      type: Number,
      default: 0
    },
    showDisabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
      validator: function validator(value) {
        return ['small', 'default', 'large'].indexOf(value) !== -1;
      }
    },
    align: {
      type: String,
      default: 'left',
      validator: function validator(value) {
        return ['left', 'center', 'right'].indexOf(value) !== -1;
      }
    }
  },
  methods: {
    onPaginationChangePage: function onPaginationChangePage(page) {
      this.$emit('pagination-change-page', page);
    }
  },
  components: {
    RenderlessLaravelVuePagination: RenderlessLaravelVuePagination
  }
});
// CONCATENATED MODULE: ./src/LaravelVuePagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_LaravelVuePaginationvue_type_script_lang_js_ = (LaravelVuePaginationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/LaravelVuePagination.vue





/* normalize component */

var LaravelVuePagination_component = normalizeComponent(
  src_LaravelVuePaginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LaravelVuePagination = (LaravelVuePagination_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (LaravelVuePagination);



/***/ })

/******/ })["default"];
//# sourceMappingURL=laravel-vue-pagination.common.js.map

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/allArticlesComp.vue?vue&type=style&index=0&id=ed5e3d18&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/allArticlesComp.vue?vue&type=style&index=0&id=ed5e3d18&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_allArticlesComp_vue_vue_type_style_index_0_id_ed5e3d18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./allArticlesComp.vue?vue&type=style&index=0&id=ed5e3d18&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/allArticlesComp.vue?vue&type=style&index=0&id=ed5e3d18&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_allArticlesComp_vue_vue_type_style_index_0_id_ed5e3d18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_allArticlesComp_vue_vue_type_style_index_0_id_ed5e3d18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=style&index=0&id=7924ac14&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=style&index=0&id=7924ac14&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_categoryBlogListComp_vue_vue_type_style_index_0_id_7924ac14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./categoryBlogListComp.vue?vue&type=style&index=0&id=7924ac14&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=style&index=0&id=7924ac14&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_categoryBlogListComp_vue_vue_type_style_index_0_id_7924ac14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_categoryBlogListComp_vue_vue_type_style_index_0_id_7924ac14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=style&index=0&id=76c76e47&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=style&index=0&id=76c76e47&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_freemcqQuestpaperComp_vue_vue_type_style_index_0_id_76c76e47_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./freemcqQuestpaperComp.vue?vue&type=style&index=0&id=76c76e47&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=style&index=0&id=76c76e47&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_freemcqQuestpaperComp_vue_vue_type_style_index_0_id_76c76e47_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_freemcqQuestpaperComp_vue_vue_type_style_index_0_id_76c76e47_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/iasaboutComp.vue?vue&type=style&index=0&id=3c13af1c&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/iasaboutComp.vue?vue&type=style&index=0&id=3c13af1c&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_iasaboutComp_vue_vue_type_style_index_0_id_3c13af1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./iasaboutComp.vue?vue&type=style&index=0&id=3c13af1c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/iasaboutComp.vue?vue&type=style&index=0&id=3c13af1c&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_iasaboutComp_vue_vue_type_style_index_0_id_3c13af1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_iasaboutComp_vue_vue_type_style_index_0_id_3c13af1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/privacyComp.vue?vue&type=style&index=0&id=57d4b496&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/privacyComp.vue?vue&type=style&index=0&id=57d4b496&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_privacyComp_vue_vue_type_style_index_0_id_57d4b496_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./privacyComp.vue?vue&type=style&index=0&id=57d4b496&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/privacyComp.vue?vue&type=style&index=0&id=57d4b496&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_privacyComp_vue_vue_type_style_index_0_id_57d4b496_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_privacyComp_vue_vue_type_style_index_0_id_57d4b496_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/refundPolicyComp.vue?vue&type=style&index=0&id=927836ac&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/refundPolicyComp.vue?vue&type=style&index=0&id=927836ac&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_refundPolicyComp_vue_vue_type_style_index_0_id_927836ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./refundPolicyComp.vue?vue&type=style&index=0&id=927836ac&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/refundPolicyComp.vue?vue&type=style&index=0&id=927836ac&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_refundPolicyComp_vue_vue_type_style_index_0_id_927836ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_refundPolicyComp_vue_vue_type_style_index_0_id_927836ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/searchResultComp.vue?vue&type=style&index=0&id=3fb04276&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/searchResultComp.vue?vue&type=style&index=0&id=3fb04276&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_searchResultComp_vue_vue_type_style_index_0_id_3fb04276_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./searchResultComp.vue?vue&type=style&index=0&id=3fb04276&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/searchResultComp.vue?vue&type=style&index=0&id=3fb04276&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_searchResultComp_vue_vue_type_style_index_0_id_3fb04276_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_searchResultComp_vue_vue_type_style_index_0_id_3fb04276_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/termsandconditionComp.vue?vue&type=style&index=0&id=00f1fd79&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/termsandconditionComp.vue?vue&type=style&index=0&id=00f1fd79&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_termsandconditionComp_vue_vue_type_style_index_0_id_00f1fd79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./termsandconditionComp.vue?vue&type=style&index=0&id=00f1fd79&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/termsandconditionComp.vue?vue&type=style&index=0&id=00f1fd79&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_termsandconditionComp_vue_vue_type_style_index_0_id_00f1fd79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_termsandconditionComp_vue_vue_type_style_index_0_id_00f1fd79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/whychooseLawComp.vue?vue&type=style&index=0&id=12d8c223&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/whychooseLawComp.vue?vue&type=style&index=0&id=12d8c223&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_whychooseLawComp_vue_vue_type_style_index_0_id_12d8c223_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./whychooseLawComp.vue?vue&type=style&index=0&id=12d8c223&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/whychooseLawComp.vue?vue&type=style&index=0&id=12d8c223&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_whychooseLawComp_vue_vue_type_style_index_0_id_12d8c223_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_whychooseLawComp_vue_vue_type_style_index_0_id_12d8c223_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/blogs/allArticlesComp.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/blogs/allArticlesComp.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _allArticlesComp_vue_vue_type_template_id_ed5e3d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allArticlesComp.vue?vue&type=template&id=ed5e3d18&scoped=true& */ "./resources/js/components/blogs/allArticlesComp.vue?vue&type=template&id=ed5e3d18&scoped=true&");
/* harmony import */ var _allArticlesComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allArticlesComp.vue?vue&type=script&lang=js& */ "./resources/js/components/blogs/allArticlesComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _allArticlesComp_vue_vue_type_style_index_0_id_ed5e3d18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allArticlesComp.vue?vue&type=style&index=0&id=ed5e3d18&scoped=true&lang=css& */ "./resources/js/components/blogs/allArticlesComp.vue?vue&type=style&index=0&id=ed5e3d18&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _allArticlesComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _allArticlesComp_vue_vue_type_template_id_ed5e3d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _allArticlesComp_vue_vue_type_template_id_ed5e3d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ed5e3d18",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/blogs/allArticlesComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/blogs/categoryBlogListComp.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/blogs/categoryBlogListComp.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _categoryBlogListComp_vue_vue_type_template_id_7924ac14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categoryBlogListComp.vue?vue&type=template&id=7924ac14&scoped=true& */ "./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=template&id=7924ac14&scoped=true&");
/* harmony import */ var _categoryBlogListComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoryBlogListComp.vue?vue&type=script&lang=js& */ "./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _categoryBlogListComp_vue_vue_type_style_index_0_id_7924ac14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoryBlogListComp.vue?vue&type=style&index=0&id=7924ac14&scoped=true&lang=css& */ "./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=style&index=0&id=7924ac14&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _categoryBlogListComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _categoryBlogListComp_vue_vue_type_template_id_7924ac14_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _categoryBlogListComp_vue_vue_type_template_id_7924ac14_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7924ac14",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/blogs/categoryBlogListComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/freemcqQuestpaperComp.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/front/freemcqQuestpaperComp.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freemcqQuestpaperComp_vue_vue_type_template_id_76c76e47_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./freemcqQuestpaperComp.vue?vue&type=template&id=76c76e47&scoped=true& */ "./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=template&id=76c76e47&scoped=true&");
/* harmony import */ var _freemcqQuestpaperComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./freemcqQuestpaperComp.vue?vue&type=script&lang=js& */ "./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _freemcqQuestpaperComp_vue_vue_type_style_index_0_id_76c76e47_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./freemcqQuestpaperComp.vue?vue&type=style&index=0&id=76c76e47&scoped=true&lang=css& */ "./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=style&index=0&id=76c76e47&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _freemcqQuestpaperComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _freemcqQuestpaperComp_vue_vue_type_template_id_76c76e47_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _freemcqQuestpaperComp_vue_vue_type_template_id_76c76e47_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "76c76e47",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/freemcqQuestpaperComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/iasaboutComp.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/front/iasaboutComp.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _iasaboutComp_vue_vue_type_template_id_3c13af1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iasaboutComp.vue?vue&type=template&id=3c13af1c&scoped=true& */ "./resources/js/components/front/iasaboutComp.vue?vue&type=template&id=3c13af1c&scoped=true&");
/* harmony import */ var _iasaboutComp_vue_vue_type_style_index_0_id_3c13af1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iasaboutComp.vue?vue&type=style&index=0&id=3c13af1c&scoped=true&lang=css& */ "./resources/js/components/front/iasaboutComp.vue?vue&type=style&index=0&id=3c13af1c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}
;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _iasaboutComp_vue_vue_type_template_id_3c13af1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _iasaboutComp_vue_vue_type_template_id_3c13af1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3c13af1c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/iasaboutComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/mcqquestionattempComp.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/front/mcqquestionattempComp.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mcqquestionattempComp_vue_vue_type_template_id_a9d896d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mcqquestionattempComp.vue?vue&type=template&id=a9d896d4& */ "./resources/js/components/front/mcqquestionattempComp.vue?vue&type=template&id=a9d896d4&");
/* harmony import */ var _mcqquestionattempComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mcqquestionattempComp.vue?vue&type=script&lang=js& */ "./resources/js/components/front/mcqquestionattempComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mcqquestionattempComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mcqquestionattempComp_vue_vue_type_template_id_a9d896d4___WEBPACK_IMPORTED_MODULE_0__.render,
  _mcqquestionattempComp_vue_vue_type_template_id_a9d896d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/mcqquestionattempComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/ncertbooksComp.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/front/ncertbooksComp.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ncertbooksComp_vue_vue_type_template_id_a63a0710___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ncertbooksComp.vue?vue&type=template&id=a63a0710& */ "./resources/js/components/front/ncertbooksComp.vue?vue&type=template&id=a63a0710&");
/* harmony import */ var _ncertbooksComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ncertbooksComp.vue?vue&type=script&lang=js& */ "./resources/js/components/front/ncertbooksComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ncertbooksComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ncertbooksComp_vue_vue_type_template_id_a63a0710___WEBPACK_IMPORTED_MODULE_0__.render,
  _ncertbooksComp_vue_vue_type_template_id_a63a0710___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/ncertbooksComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/preyearQuestPaperComp.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/front/preyearQuestPaperComp.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _preyearQuestPaperComp_vue_vue_type_template_id_274984d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preyearQuestPaperComp.vue?vue&type=template&id=274984d0& */ "./resources/js/components/front/preyearQuestPaperComp.vue?vue&type=template&id=274984d0&");
/* harmony import */ var _preyearQuestPaperComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preyearQuestPaperComp.vue?vue&type=script&lang=js& */ "./resources/js/components/front/preyearQuestPaperComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _preyearQuestPaperComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _preyearQuestPaperComp_vue_vue_type_template_id_274984d0___WEBPACK_IMPORTED_MODULE_0__.render,
  _preyearQuestPaperComp_vue_vue_type_template_id_274984d0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/preyearQuestPaperComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/privacyComp.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/front/privacyComp.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _privacyComp_vue_vue_type_template_id_57d4b496_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacyComp.vue?vue&type=template&id=57d4b496&scoped=true& */ "./resources/js/components/front/privacyComp.vue?vue&type=template&id=57d4b496&scoped=true&");
/* harmony import */ var _privacyComp_vue_vue_type_style_index_0_id_57d4b496_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacyComp.vue?vue&type=style&index=0&id=57d4b496&scoped=true&lang=css& */ "./resources/js/components/front/privacyComp.vue?vue&type=style&index=0&id=57d4b496&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}
;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _privacyComp_vue_vue_type_template_id_57d4b496_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _privacyComp_vue_vue_type_template_id_57d4b496_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "57d4b496",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/privacyComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/refundPolicyComp.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/front/refundPolicyComp.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _refundPolicyComp_vue_vue_type_template_id_927836ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refundPolicyComp.vue?vue&type=template&id=927836ac&scoped=true& */ "./resources/js/components/front/refundPolicyComp.vue?vue&type=template&id=927836ac&scoped=true&");
/* harmony import */ var _refundPolicyComp_vue_vue_type_style_index_0_id_927836ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refundPolicyComp.vue?vue&type=style&index=0&id=927836ac&scoped=true&lang=css& */ "./resources/js/components/front/refundPolicyComp.vue?vue&type=style&index=0&id=927836ac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}
;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _refundPolicyComp_vue_vue_type_template_id_927836ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _refundPolicyComp_vue_vue_type_template_id_927836ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "927836ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/refundPolicyComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/searchResultComp.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/front/searchResultComp.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _searchResultComp_vue_vue_type_template_id_3fb04276_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchResultComp.vue?vue&type=template&id=3fb04276&scoped=true& */ "./resources/js/components/front/searchResultComp.vue?vue&type=template&id=3fb04276&scoped=true&");
/* harmony import */ var _searchResultComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchResultComp.vue?vue&type=script&lang=js& */ "./resources/js/components/front/searchResultComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _searchResultComp_vue_vue_type_style_index_0_id_3fb04276_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchResultComp.vue?vue&type=style&index=0&id=3fb04276&scoped=true&lang=css& */ "./resources/js/components/front/searchResultComp.vue?vue&type=style&index=0&id=3fb04276&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _searchResultComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _searchResultComp_vue_vue_type_template_id_3fb04276_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _searchResultComp_vue_vue_type_template_id_3fb04276_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3fb04276",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/searchResultComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/termsandconditionComp.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/front/termsandconditionComp.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _termsandconditionComp_vue_vue_type_template_id_00f1fd79_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termsandconditionComp.vue?vue&type=template&id=00f1fd79&scoped=true& */ "./resources/js/components/front/termsandconditionComp.vue?vue&type=template&id=00f1fd79&scoped=true&");
/* harmony import */ var _termsandconditionComp_vue_vue_type_style_index_0_id_00f1fd79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termsandconditionComp.vue?vue&type=style&index=0&id=00f1fd79&scoped=true&lang=css& */ "./resources/js/components/front/termsandconditionComp.vue?vue&type=style&index=0&id=00f1fd79&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}
;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _termsandconditionComp_vue_vue_type_template_id_00f1fd79_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _termsandconditionComp_vue_vue_type_template_id_00f1fd79_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "00f1fd79",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/termsandconditionComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/whychooseLawComp.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/front/whychooseLawComp.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _whychooseLawComp_vue_vue_type_template_id_12d8c223_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./whychooseLawComp.vue?vue&type=template&id=12d8c223&scoped=true& */ "./resources/js/components/front/whychooseLawComp.vue?vue&type=template&id=12d8c223&scoped=true&");
/* harmony import */ var _whychooseLawComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whychooseLawComp.vue?vue&type=script&lang=js& */ "./resources/js/components/front/whychooseLawComp.vue?vue&type=script&lang=js&");
/* harmony import */ var _whychooseLawComp_vue_vue_type_style_index_0_id_12d8c223_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whychooseLawComp.vue?vue&type=style&index=0&id=12d8c223&scoped=true&lang=css& */ "./resources/js/components/front/whychooseLawComp.vue?vue&type=style&index=0&id=12d8c223&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _whychooseLawComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _whychooseLawComp_vue_vue_type_template_id_12d8c223_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _whychooseLawComp_vue_vue_type_template_id_12d8c223_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "12d8c223",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/whychooseLawComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/blogs/allArticlesComp.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/blogs/allArticlesComp.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_allArticlesComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./allArticlesComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/allArticlesComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_allArticlesComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categoryBlogListComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./categoryBlogListComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categoryBlogListComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_freemcqQuestpaperComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./freemcqQuestpaperComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_freemcqQuestpaperComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/front/mcqquestionattempComp.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/front/mcqquestionattempComp.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mcqquestionattempComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mcqquestionattempComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/mcqquestionattempComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mcqquestionattempComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/front/ncertbooksComp.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/front/ncertbooksComp.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ncertbooksComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ncertbooksComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/ncertbooksComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ncertbooksComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/front/preyearQuestPaperComp.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/front/preyearQuestPaperComp.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_preyearQuestPaperComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./preyearQuestPaperComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/preyearQuestPaperComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_preyearQuestPaperComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/front/searchResultComp.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/front/searchResultComp.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchResultComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./searchResultComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/searchResultComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchResultComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/front/whychooseLawComp.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/front/whychooseLawComp.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_whychooseLawComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./whychooseLawComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/whychooseLawComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_whychooseLawComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/blogs/allArticlesComp.vue?vue&type=style&index=0&id=ed5e3d18&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/blogs/allArticlesComp.vue?vue&type=style&index=0&id=ed5e3d18&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_allArticlesComp_vue_vue_type_style_index_0_id_ed5e3d18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./allArticlesComp.vue?vue&type=style&index=0&id=ed5e3d18&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/allArticlesComp.vue?vue&type=style&index=0&id=ed5e3d18&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=style&index=0&id=7924ac14&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=style&index=0&id=7924ac14&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_categoryBlogListComp_vue_vue_type_style_index_0_id_7924ac14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./categoryBlogListComp.vue?vue&type=style&index=0&id=7924ac14&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=style&index=0&id=7924ac14&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=style&index=0&id=76c76e47&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=style&index=0&id=76c76e47&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_freemcqQuestpaperComp_vue_vue_type_style_index_0_id_76c76e47_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./freemcqQuestpaperComp.vue?vue&type=style&index=0&id=76c76e47&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=style&index=0&id=76c76e47&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/front/iasaboutComp.vue?vue&type=style&index=0&id=3c13af1c&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/front/iasaboutComp.vue?vue&type=style&index=0&id=3c13af1c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_iasaboutComp_vue_vue_type_style_index_0_id_3c13af1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./iasaboutComp.vue?vue&type=style&index=0&id=3c13af1c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/iasaboutComp.vue?vue&type=style&index=0&id=3c13af1c&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/front/privacyComp.vue?vue&type=style&index=0&id=57d4b496&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/front/privacyComp.vue?vue&type=style&index=0&id=57d4b496&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_privacyComp_vue_vue_type_style_index_0_id_57d4b496_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./privacyComp.vue?vue&type=style&index=0&id=57d4b496&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/privacyComp.vue?vue&type=style&index=0&id=57d4b496&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/front/refundPolicyComp.vue?vue&type=style&index=0&id=927836ac&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/front/refundPolicyComp.vue?vue&type=style&index=0&id=927836ac&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_refundPolicyComp_vue_vue_type_style_index_0_id_927836ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./refundPolicyComp.vue?vue&type=style&index=0&id=927836ac&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/refundPolicyComp.vue?vue&type=style&index=0&id=927836ac&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/front/searchResultComp.vue?vue&type=style&index=0&id=3fb04276&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/front/searchResultComp.vue?vue&type=style&index=0&id=3fb04276&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_searchResultComp_vue_vue_type_style_index_0_id_3fb04276_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./searchResultComp.vue?vue&type=style&index=0&id=3fb04276&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/searchResultComp.vue?vue&type=style&index=0&id=3fb04276&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/front/termsandconditionComp.vue?vue&type=style&index=0&id=00f1fd79&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/front/termsandconditionComp.vue?vue&type=style&index=0&id=00f1fd79&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_termsandconditionComp_vue_vue_type_style_index_0_id_00f1fd79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./termsandconditionComp.vue?vue&type=style&index=0&id=00f1fd79&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/termsandconditionComp.vue?vue&type=style&index=0&id=00f1fd79&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/front/whychooseLawComp.vue?vue&type=style&index=0&id=12d8c223&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/front/whychooseLawComp.vue?vue&type=style&index=0&id=12d8c223&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_whychooseLawComp_vue_vue_type_style_index_0_id_12d8c223_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./whychooseLawComp.vue?vue&type=style&index=0&id=12d8c223&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/whychooseLawComp.vue?vue&type=style&index=0&id=12d8c223&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/blogs/allArticlesComp.vue?vue&type=template&id=ed5e3d18&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/blogs/allArticlesComp.vue?vue&type=template&id=ed5e3d18&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allArticlesComp_vue_vue_type_template_id_ed5e3d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allArticlesComp_vue_vue_type_template_id_ed5e3d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allArticlesComp_vue_vue_type_template_id_ed5e3d18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./allArticlesComp.vue?vue&type=template&id=ed5e3d18&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/allArticlesComp.vue?vue&type=template&id=ed5e3d18&scoped=true&");


/***/ }),

/***/ "./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=template&id=7924ac14&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=template&id=7924ac14&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_categoryBlogListComp_vue_vue_type_template_id_7924ac14_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_categoryBlogListComp_vue_vue_type_template_id_7924ac14_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_categoryBlogListComp_vue_vue_type_template_id_7924ac14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./categoryBlogListComp.vue?vue&type=template&id=7924ac14&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=template&id=7924ac14&scoped=true&");


/***/ }),

/***/ "./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=template&id=76c76e47&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=template&id=76c76e47&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_freemcqQuestpaperComp_vue_vue_type_template_id_76c76e47_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_freemcqQuestpaperComp_vue_vue_type_template_id_76c76e47_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_freemcqQuestpaperComp_vue_vue_type_template_id_76c76e47_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./freemcqQuestpaperComp.vue?vue&type=template&id=76c76e47&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=template&id=76c76e47&scoped=true&");


/***/ }),

/***/ "./resources/js/components/front/iasaboutComp.vue?vue&type=template&id=3c13af1c&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/front/iasaboutComp.vue?vue&type=template&id=3c13af1c&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_iasaboutComp_vue_vue_type_template_id_3c13af1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_iasaboutComp_vue_vue_type_template_id_3c13af1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_iasaboutComp_vue_vue_type_template_id_3c13af1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./iasaboutComp.vue?vue&type=template&id=3c13af1c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/iasaboutComp.vue?vue&type=template&id=3c13af1c&scoped=true&");


/***/ }),

/***/ "./resources/js/components/front/mcqquestionattempComp.vue?vue&type=template&id=a9d896d4&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/front/mcqquestionattempComp.vue?vue&type=template&id=a9d896d4& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mcqquestionattempComp_vue_vue_type_template_id_a9d896d4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mcqquestionattempComp_vue_vue_type_template_id_a9d896d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mcqquestionattempComp_vue_vue_type_template_id_a9d896d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mcqquestionattempComp.vue?vue&type=template&id=a9d896d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/mcqquestionattempComp.vue?vue&type=template&id=a9d896d4&");


/***/ }),

/***/ "./resources/js/components/front/ncertbooksComp.vue?vue&type=template&id=a63a0710&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/front/ncertbooksComp.vue?vue&type=template&id=a63a0710& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ncertbooksComp_vue_vue_type_template_id_a63a0710___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ncertbooksComp_vue_vue_type_template_id_a63a0710___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ncertbooksComp_vue_vue_type_template_id_a63a0710___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ncertbooksComp.vue?vue&type=template&id=a63a0710& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/ncertbooksComp.vue?vue&type=template&id=a63a0710&");


/***/ }),

/***/ "./resources/js/components/front/preyearQuestPaperComp.vue?vue&type=template&id=274984d0&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/front/preyearQuestPaperComp.vue?vue&type=template&id=274984d0& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preyearQuestPaperComp_vue_vue_type_template_id_274984d0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preyearQuestPaperComp_vue_vue_type_template_id_274984d0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preyearQuestPaperComp_vue_vue_type_template_id_274984d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./preyearQuestPaperComp.vue?vue&type=template&id=274984d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/preyearQuestPaperComp.vue?vue&type=template&id=274984d0&");


/***/ }),

/***/ "./resources/js/components/front/privacyComp.vue?vue&type=template&id=57d4b496&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/front/privacyComp.vue?vue&type=template&id=57d4b496&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_privacyComp_vue_vue_type_template_id_57d4b496_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_privacyComp_vue_vue_type_template_id_57d4b496_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_privacyComp_vue_vue_type_template_id_57d4b496_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./privacyComp.vue?vue&type=template&id=57d4b496&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/privacyComp.vue?vue&type=template&id=57d4b496&scoped=true&");


/***/ }),

/***/ "./resources/js/components/front/refundPolicyComp.vue?vue&type=template&id=927836ac&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/front/refundPolicyComp.vue?vue&type=template&id=927836ac&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_refundPolicyComp_vue_vue_type_template_id_927836ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_refundPolicyComp_vue_vue_type_template_id_927836ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_refundPolicyComp_vue_vue_type_template_id_927836ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./refundPolicyComp.vue?vue&type=template&id=927836ac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/refundPolicyComp.vue?vue&type=template&id=927836ac&scoped=true&");


/***/ }),

/***/ "./resources/js/components/front/searchResultComp.vue?vue&type=template&id=3fb04276&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/front/searchResultComp.vue?vue&type=template&id=3fb04276&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_searchResultComp_vue_vue_type_template_id_3fb04276_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_searchResultComp_vue_vue_type_template_id_3fb04276_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_searchResultComp_vue_vue_type_template_id_3fb04276_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./searchResultComp.vue?vue&type=template&id=3fb04276&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/searchResultComp.vue?vue&type=template&id=3fb04276&scoped=true&");


/***/ }),

/***/ "./resources/js/components/front/termsandconditionComp.vue?vue&type=template&id=00f1fd79&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/front/termsandconditionComp.vue?vue&type=template&id=00f1fd79&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_termsandconditionComp_vue_vue_type_template_id_00f1fd79_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_termsandconditionComp_vue_vue_type_template_id_00f1fd79_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_termsandconditionComp_vue_vue_type_template_id_00f1fd79_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./termsandconditionComp.vue?vue&type=template&id=00f1fd79&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/termsandconditionComp.vue?vue&type=template&id=00f1fd79&scoped=true&");


/***/ }),

/***/ "./resources/js/components/front/whychooseLawComp.vue?vue&type=template&id=12d8c223&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/front/whychooseLawComp.vue?vue&type=template&id=12d8c223&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_whychooseLawComp_vue_vue_type_template_id_12d8c223_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_whychooseLawComp_vue_vue_type_template_id_12d8c223_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_whychooseLawComp_vue_vue_type_template_id_12d8c223_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./whychooseLawComp.vue?vue&type=template&id=12d8c223&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/whychooseLawComp.vue?vue&type=template&id=12d8c223&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/allArticlesComp.vue?vue&type=template&id=ed5e3d18&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/allArticlesComp.vue?vue&type=template&id=ed5e3d18&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      { staticClass: "fullpage", style: { display: _vm.loadDisplayed } },
      [_vm._m(0)]
    ),
    _vm._v(" "),
    _c("section", { staticClass: "blog-area section--padding" }, [
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.blogList.data, function (blogInfo) {
            return _c(
              "div",
              { key: blogInfo.id, staticClass: "col-lg-4" },
              [_c("blog-list-view", { attrs: { bloginfo: blogInfo } })],
              1
            )
          }),
          0
        ),
        _vm._v(" "),
        _c("div", { staticClass: "text-center pt-3" }, [
          _c(
            "nav",
            {
              staticClass: "pagination-box",
              attrs: { "aria-label": "Page navigation example" },
            },
            [
              _c("pagination", {
                attrs: { data: _vm.blogList },
                on: { "pagination-change-page": _vm.getResults },
              }),
            ],
            1
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "center-text" }, [
      _vm._v("Please wait "),
      _c("div", { staticClass: "spinner-border text-light" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=template&id=7924ac14&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/blogs/categoryBlogListComp.vue?vue&type=template&id=7924ac14&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      { staticClass: "fullpage", style: { display: _vm.loadDisplayed } },
      [_vm._m(0)]
    ),
    _vm._v(" "),
    _c("section", { staticClass: "blog-area section--padding" }, [
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.blogList.data, function (blogInfo) {
            return _c(
              "div",
              { key: blogInfo.id, staticClass: "col-lg-4" },
              [_c("blog-list-view", { attrs: { bloginfo: blogInfo } })],
              1
            )
          }),
          0
        ),
        _vm._v(" "),
        _c("div", { staticClass: "text-center pt-3" }, [
          _c(
            "nav",
            {
              staticClass: "pagination-box",
              attrs: { "aria-label": "Page navigation example" },
            },
            [
              _c("pagination", {
                attrs: { data: _vm.blogList },
                on: { "pagination-change-page": _vm.getResults },
              }),
            ],
            1
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "center-text" }, [
      _vm._v("Please wait "),
      _c("div", { staticClass: "spinner-border text-light" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=template&id=76c76e47&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/freemcqQuestpaperComp.vue?vue&type=template&id=76c76e47&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      { staticClass: "fullpage", style: { display: _vm.loadDisplayed } },
      [_vm._m(0)]
    ),
    _vm._v(" "),
    _c("section", { staticClass: "blog-area section--padding" }, [
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.mcqDateList.data, function (dateinfo, index) {
            return _c("div", { key: index, staticClass: "col-lg-3 p-2" }, [
              _c(
                "div",
                { staticClass: "card p-3 rounded shadow bg-white" },
                [
                  _c("div", { staticClass: "d-flex" }, [
                    _vm._m(1, true),
                    _vm._v(" "),
                    _c("div", { staticClass: "ml-auto" }, [
                      _c("small", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(dateinfo.date) + " "),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("h3", [_vm._v(_vm._s(dateinfo.topic))]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "btn theme-btn theme-btn-sm theme-btn-white border border-danger",
                      attrs: {
                        to:
                          "/free-mock-test/" +
                          dateinfo.date +
                          "/" +
                          dateinfo.id,
                      },
                    },
                    [
                      _c("i", { staticClass: "la la-arrow-right icon ml-1" }),
                      _vm._v("Attempt Now\n                        "),
                    ]
                  ),
                ],
                1
              ),
            ])
          }),
          0
        ),
        _vm._v(" "),
        _c("div", { staticClass: "text-center pt-3" }, [
          _c(
            "nav",
            {
              staticClass: "pagination-box",
              attrs: { "aria-label": "Page navigation example" },
            },
            [
              _c("pagination", {
                attrs: { data: _vm.mcqDateList },
                on: { "pagination-change-page": _vm.getResults },
              }),
            ],
            1
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "center-text" }, [
      _vm._v("Please wait "),
      _c("div", { staticClass: "spinner-border text-light" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("small", [_vm._v("Updated On ")])])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/iasaboutComp.vue?vue&type=template&id=3c13af1c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/iasaboutComp.vue?vue&type=template&id=3c13af1c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    { staticClass: "privacy-policy-area section--padding" },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-8 col-md-8" }, [
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card card-item  p-4", attrs: { id: "pattern" } },
              [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-22 pb-2" }, [
                    _vm._v("EXAM PATTERNS - STAGES"),
                  ]),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _vm._m(7),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _vm._m(8),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "h3",
                    { staticClass: "fs-16 font-weight-semi-bold pb-1" },
                    [_vm._v("Papers qualifying in nature:")]
                  ),
                  _vm._v(" "),
                  _vm._m(9),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "h3",
                    { staticClass: "fs-16 font-weight-semi-bold pb-1" },
                    [_vm._v("Papers to be counted for merit:")]
                  ),
                  _vm._v(" "),
                  _vm._m(10),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "h3",
                    { staticClass: "fs-16 font-weight-semi-bold pb-1" },
                    [_vm._v("Qualifying Papers for UPSC CSE Mains")]
                  ),
                  _vm._v(" "),
                  _vm._m(11),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "h3",
                    { staticClass: "fs-16 font-weight-semi-bold pb-1" },
                    [_vm._v("Papers Counted for Merit in UPSC CSE")]
                  ),
                  _vm._v(" "),
                  _vm._m(12),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "h3",
                    { staticClass: "fs-16 font-weight-semi-bold pb-1" },
                    [_vm._v("Optional Subjects for UPSC Mains")]
                  ),
                  _vm._v(" "),
                  _vm._m(13),
                  _vm._v(" "),
                  _vm._m(14),
                  _vm._v(" "),
                  _vm._m(15),
                  _vm._v(" "),
                  _vm._m(16),
                  _vm._v(" "),
                  _vm._m(17),
                  _vm._v(" "),
                  _vm._m(18),
                  _vm._v(" "),
                  _vm._m(19),
                  _vm._v(" "),
                  _vm._m(20),
                  _vm._v(" "),
                  _vm._m(21),
                  _vm._v(" "),
                  _vm._m(22),
                  _vm._v(" "),
                  _vm._m(23),
                  _vm._v(" "),
                  _vm._m(24),
                  _vm._v(" "),
                  _vm._m(25),
                  _vm._v(" "),
                  _vm._m(26),
                  _vm._v(" "),
                  _vm._m(27),
                  _vm._v(" "),
                  _vm._m(28),
                  _vm._v(" "),
                  _vm._m(29),
                  _vm._v(" "),
                  _vm._m(30),
                  _vm._v(" "),
                  _vm._m(31),
                  _vm._v(" "),
                  _vm._m(32),
                  _vm._v(" "),
                  _vm._m(33),
                  _vm._v(" "),
                  _vm._m(34),
                  _vm._v(" "),
                  _vm._m(35),
                  _vm._v(" "),
                  _vm._m(36),
                  _vm._v(" "),
                  _vm._m(37),
                  _vm._v(" "),
                  _vm._m(38),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "h3",
                    { staticClass: "fs-16 font-weight-semi-bold pb-1" },
                    [
                      _vm._v("UPSC Mains Syllabus "),
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: "/mains-syllabus",
                            title: "Mains Syllabus",
                          },
                        },
                        [_c("i", { staticClass: "la la-link la-2x" })]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _vm._m(39),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "h3",
                    { staticClass: "fs-16 font-weight-semi-bold pb-1" },
                    [_vm._v("UPSC CSE/IAS Interview Syllabus ")]
                  ),
                  _vm._v(" "),
                  _vm._m(40),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "h3",
                    { staticClass: "fs-16 font-weight-semi-bold pb-1" },
                    [_vm._v("UPSC CSE/IAS Interview Marks")]
                  ),
                  _vm._v(" "),
                  _vm._m(41),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "h3",
                    {
                      staticClass: "fs-16 font-weight-semi-bold pb-1",
                      attrs: { id: "cutoff" },
                    },
                    [_vm._v("UPSC CSE CUT OFF’s")]
                  ),
                  _vm._v(" "),
                  _vm._m(42),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "h3",
                    {
                      staticClass: "fs-16 font-weight-semi-bold pb-1",
                      attrs: { id: "strategy" },
                    },
                    [_vm._v("UPSC CSE RESOURCES")]
                  ),
                  _vm._v(" "),
                  _c("ul", [
                    _vm._m(43),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _c("i", {
                          staticClass:
                            "la la-arrow-alt-circle-right text-theme mr-2",
                        }),
                        _c("strong", [
                          _vm._v("Select only credible sources like."),
                        ]),
                        _vm._v(" "),
                        _c("ul", { staticClass: "ml-3" }, [
                          _c("li", [
                            _c(
                              "p",
                              [
                                _c("i", {
                                  staticClass:
                                    "la la-dot-circle text-info mr-2",
                                }),
                                _c("strong", [_vm._v("INTERNET  - ")]),
                                _vm._v(
                                  " Official government sites: PIB, PRS, "
                                ),
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "text-underline",
                                    attrs: { to: "/" },
                                  },
                                  [_vm._v("BENBY IAS website")]
                                ),
                                _vm._v(
                                  " etc.\n                                            "
                                ),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _vm._m(44),
                          _vm._v(" "),
                          _vm._m(45),
                          _vm._v(" "),
                          _vm._m(46),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "h3",
                    { staticClass: "fs-16 font-weight-semi-bold pb-1" },
                    [_vm._v("UPSC CSE NOTE MAKING:")]
                  ),
                  _vm._v(" "),
                  _vm._m(47),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "h3",
                    { staticClass: "fs-16 font-weight-semi-bold pb-1" },
                    [_vm._v("POINTS TO REMEMBER FOR UPSC CSE/IAS")]
                  ),
                  _vm._v(" "),
                  _vm._m(48),
                ]),
              ]
            ),
            _vm._v(" "),
            _vm._m(49),
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
    return _c("div", { staticClass: "col-lg-4 col-md-4" }, [
      _c("div", { staticClass: "sidebar" }, [
        _c("div", { staticClass: "card card-item p-4" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h3", { staticClass: "card-title fs-18 pb-2" }, [
              _vm._v("BE N BY IAS"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "divider" }, [_c("span")]),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "generic-list-item",
                staticStyle: { "text-indent": "0" },
              },
              [
                _c("li", { staticClass: "pb-3" }, [
                  _c("a", { attrs: { href: "#exam" } }, [
                    _c("i", {
                      staticClass: "la la-chevron-right mr-2 text-theme",
                    }),
                    _vm._v("   ABOUT UPSC CIVIL SERVICES EXAM (CSE/IAS)"),
                  ]),
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "pb-3" }, [
                  _c("a", { attrs: { href: "#eligibility" } }, [
                    _c("i", {
                      staticClass: "la la-chevron-right mr-2 text-theme",
                    }),
                    _vm._v(
                      "ELIGIBILITY CRITERIA (Age Limit, Educational Qualifications and Number of Attempts)"
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "pb-3" }, [
                  _c("a", { attrs: { href: "#postoffers" } }, [
                    _c("i", {
                      staticClass: "la la-chevron-right mr-2 text-theme",
                    }),
                    _vm._v("POST OFFERED THROUGH CIVIL SERVICES EXAM"),
                  ]),
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "pb-3" }, [
                  _c("a", { attrs: { href: "#pattern" } }, [
                    _c("i", {
                      staticClass: "la la-chevron-right mr-2 text-theme",
                    }),
                    _vm._v("EXAM PATTERNS- STAGES"),
                  ]),
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "pb-3" }, [
                  _c("a", { attrs: { href: "#cutoff" } }, [
                    _c("i", {
                      staticClass: "la la-chevron-right mr-2 text-theme",
                    }),
                    _vm._v("IAS Cut off 2019- Category- wise"),
                  ]),
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "pb-3" }, [
                  _c("a", { attrs: { href: "#strategy" } }, [
                    _c("i", {
                      staticClass: "la la-chevron-right mr-2 text-theme",
                    }),
                    _vm._v("BEST STRATEGY TO CRACK"),
                  ]),
                ]),
              ]
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card card-item  p-4", attrs: { id: "exam" } },
      [
        _c("div", { staticClass: "card-body" }, [
          _c("h2", { staticClass: "card-title fs-22 pb-2" }, [
            _vm._v("ABOUT UPSC CIVIL SERVICES EXAM (CSE/IAS)"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "divider" }, [_c("span")]),
          _vm._v(" "),
          _c("h3", { staticClass: "fs-16 font-weight-semi-bold pb-1" }, [
            _vm._v(
              "Union Public Service Commission (UPSC) every year conducts the Civil Services Examination (CSE) which is one of the toughest exams both domestically and internationally. In order to ace this exam, it is important to understand every aspect, do’s and don’ts. Our team at BENBY IAS has compiled the following details for you to start your preparation. "
            ),
          ]),
          _vm._v(" "),
          _c("br"),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card card-item  p-4", attrs: { id: "eligibility" } },
      [
        _c("div", { staticClass: "card-body" }, [
          _c("h2", { staticClass: "card-title fs-22 pb-2" }, [
            _vm._v(
              "UPSC CSE ELIGIBILITY CRITERIA (Age Limit, Educational Qualifications and Number of Attempts):"
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "divider" }, [_c("span")]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h3", { staticClass: "fs-16 font-weight-semi-bold pb-1" }, [
            _vm._v("Nationality"),
          ]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [
              _c("p", { staticClass: "pb-3" }, [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _c("strong", [
                  _vm._v(
                    " For the IAS, IFS & IPS, a candidate must be a citizen of India"
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", { staticClass: "pb-3" }, [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(" "),
                _c("strong", [
                  _vm._v(
                    "For the IRS and other services, a candidate must be one of the following:"
                  ),
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "ml-md-5 ml-sm-2" }, [
                  _c("li", [
                    _c("i", {
                      staticClass: "la la-chevron-right text-theme mr-2",
                    }),
                    _vm._v(
                      "A citizen of India,\n                                        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", {
                      staticClass: "la la-chevron-right text-theme mr-2",
                    }),
                    _vm._v(
                      "A subject of Bhutan, and\n                                        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", {
                      staticClass: "la la-chevron-right text-theme mr-2",
                    }),
                    _vm._v(
                      "A subject of Nepal\n                                        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", {
                      staticClass: "la la-chevron-right text-theme mr-2",
                    }),
                    _vm._v(
                      "Refugee of Tibet who came in India before 1st Jan 1962 to permanently settle in India.\n                                        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", {
                      staticClass: "la la-chevron-right text-theme mr-2",
                    }),
                    _vm._v(
                      "A person of Indian origin who has migrated from Pakistan, Myanmar, Sri Lanka, Kenya, Uganda, Tanzania, Zambia, Malawi, Zaire, Ethiopia, or Vietnam with the intention of permanently settling in India.\n                                        "
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h3", { staticClass: "fs-16 font-weight-semi-bold pb-1" }, [
            _vm._v("Educational Qualification:"),
          ]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [
              _c("p", { staticClass: "pb-3" }, [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _c("strong", [
                  _vm._v(
                    "All candidates must have as a minimum one of the following educational qualifications to appear in UPSC Exam."
                  ),
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "ml-md-5 ml-sm-2" }, [
                  _c("li", [
                    _c("i", {
                      staticClass: "la la-chevron-right text-theme mr-2",
                    }),
                    _vm._v(
                      "There is no minimum Pass percentage but must be a graduate.\n                                        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", {
                      staticClass: "la la-chevron-right text-theme mr-2",
                    }),
                    _vm._v(
                      "A degree from a Central, State or Deemed university\n                                        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", {
                      staticClass: "la la-chevron-right text-theme mr-2",
                    }),
                    _vm._v(
                      "A degree received through correspondence or distance education is valid\n                                        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", {
                      staticClass: "la la-chevron-right text-theme mr-2",
                    }),
                    _vm._v(
                      "A degree from an open university is also valid\n                                        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", {
                      staticClass: "la la-chevron-right text-theme mr-2",
                    }),
                    _vm._v(
                      "A qualification recognized by the Govt. of India as being equivalent to one of the above\n                                        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", {
                      staticClass: "la la-chevron-right text-theme mr-2",
                    }),
                    _vm._v(
                      "Candidates who are in last Semester or in Last year of any degree.\n                                        "
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h3", { staticClass: "fs-16 font-weight-semi-bold pb-1" }, [
            _vm._v("Age Limit:"),
          ]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [
              _c("p", { staticClass: "pb-3" }, [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _c("strong", [
                  _vm._v(
                    "21 years to 32 years. The cutoff date is considered as the 1st of August of that year. However, certain relaxations are allowed in age limit is given below"
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_c("b", [_vm._v("Category")])]),
                      _vm._v(" "),
                      _c("th", [
                        _c("b", [
                          _vm._v(
                            "\n                                                            Relaxation (Number of Years)\n                                                        "
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("th", [_c("b", [_vm._v("Number of Attempts")])]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [
                        _vm._v(
                          "\n                                                        Scheduled Caste / Schedule Tribe (SC, ST, OBC)\n                                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                                        5 Years\n                                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                                        Unlimited\n                                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [
                        _vm._v(
                          "\n                                                        Other Backward Classes (excluding creamy layer)\t\n                                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                                        3 Years\n                                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                                        9\n                                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [
                        _vm._v(
                          "\n                                                        Defense Service Personnel (disability due to certain reasons)\t\n                                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                                        3 Years\n                                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                                        -\n                                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [
                        _vm._v(
                          "\n                                                        Ex-Servicemen (with 5 years’ service\n                                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                                        5 Years\n                                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                                        -\n                                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [
                        _vm._v(
                          "\n                                                        Persons with Benchmark Disabilities \n                                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                                        10 Years\n                                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                                        9\n                                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [
                        _vm._v(
                          "\n                                                        Defense Service Personnel (disability due to certain reasons)\t\n                                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                                        3 Years\n                                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                                        -\n                                                    "
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", { staticClass: "pb-3" }, [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _c("strong", [_vm._v("Note:")]),
              ]),
              _vm._v(" "),
              _c("ul", { staticClass: "ml-md-5 ml-sm-2" }, [
                _c("li", [
                  _c("i", {
                    staticClass: "la la-chevron-right text-theme mr-2",
                  }),
                  _vm._v(
                    "A candidate must have attained the age of 21 years (Twenty-One) and must not have attained the age of 32 years on August 1st of the year of exam.\n                                    "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("i", {
                    staticClass: "la la-chevron-right text-theme mr-2",
                  }),
                  _vm._v(
                    "For OBC the upper age limit is 35, and for SC and ST the limit is (37) Thirty-Seven years.\n                                    "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("i", {
                    staticClass: "la la-chevron-right text-theme mr-2",
                  }),
                  _vm._v(
                    "The minimum age limit for candidates is 21 years\n                                    "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("i", {
                    staticClass: "la la-chevron-right text-theme mr-2",
                  }),
                  _vm._v(
                    "The maximum age limit is 32 years.\n                                    "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("i", {
                    staticClass: "la la-chevron-right text-theme mr-2",
                  }),
                  _vm._v(
                    "The upper age limit is further relaxed by (5) Five years and 3 years for candidates belonging to SC/ST and OBC categories respectively.\n                                    "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("i", {
                    staticClass: "la la-chevron-right text-theme mr-2",
                  }),
                  _vm._v(
                    "Up to a maximum of 10 years in the case of blind, deaf-mute, and orthopedically handicapped persons.\n                                    "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("i", {
                    staticClass: "la la-chevron-right text-theme mr-2",
                  }),
                  _vm._v(
                    "Candidates belonging to more than one category would be eligible for cumulative relaxation as per the prevailing norms. For instance, an SC candidate with Benchmark Disabilities may be eligible for 5+10 i.e., 15 years relaxation.\n                                    "
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card card-item  p-4", attrs: { id: "postoffers" } },
      [
        _c("div", { staticClass: "card-body" }, [
          _c("h2", { staticClass: "card-title fs-22 pb-2" }, [
            _vm._v("POST OFFERED THROUGH CIVIL SERVICES EXAM (CSE)"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "divider" }, [_c("span")]),
          _vm._v(" "),
          _c("p", { staticClass: "pb-3" }, [
            _vm._v(
              "\n                            There are three types or categories of jobs through the Civil Service Exam (CSE). Under these 3 broad categories are different services that are prestigious. The civil service rank list comes out with the results of the exams. These are:\n                        "
            ),
          ]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "All India Civil Services\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Group A Services or Central Services\n\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Group B Services or State Services\n                                "
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h3", { staticClass: "fs-16 font-weight-semi-bold pb-1" }, [
            _vm._v("All India Civil Services:"),
          ]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian Administrative Service or IAS\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian Forest Service or IFS\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian Police Service or IPS\n                                "
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h3", { staticClass: "fs-16 font-weight-semi-bold pb-1" }, [
            _vm._v("Central Group A Services:"),
          ]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian Foreign Service (IFoS)\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian P & T Accounts & Finance Service\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian Audit and Accounts Service\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian Revenue Service (Customs and Central Excise)\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian Defense Accounts Service\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian Revenue Service (Income Tax) or IRS\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian Revenue Service (Customs and Indirect Taxes)\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian Postal Service\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian Civil Accounts Service\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian Railway Traffic Service\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian Railway Protection Force (Assistant Security Commissioner)\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian Defense Estates Service\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian Information Service (Junior Grade)\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian Trade Service, (Gr. III)\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Indian Corporate Law Service\n                                "
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h3", { staticClass: "fs-16 font-weight-semi-bold pb-1" }, [
            _vm._v("Group - B Services:"),
          ]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Armed Forces Headquarters Civil Service (Section Officer's Grade)\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Delhi, Andaman & Nicobar Islands, Lakshadweep, Daman & Diu and Dadra & Nagar Haveli Civil Service\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Delhi, Andaman & Nicobar Islands, Lakshadweep, Daman & Diu and Dadra & Nagar Haveli Police Service\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Pondicherry Civil Service\n                                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
                }),
                _vm._v(
                  "Pondicherry Police Service\n                                "
                ),
              ]),
            ]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "divider" }, [_c("span")])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _c("h3", { staticClass: "fs-16 font-weight-semi-bold pb-1" }, [
          _vm._v(
            "\n                                    Stage 1: Civil Services (Preliminary) Examination (Objective Type)\n\n                                "
          ),
        ]),
        _vm._v(" "),
        _c("h3", { staticClass: "fs-16 font-weight-semi-bold pb-1" }, [
          _vm._v(
            "\n                                    Stage 2: Civil Services (Mains) Examination (Descriptive Type)\n                                "
          ),
        ]),
        _vm._v(" "),
        _c("h3", { staticClass: "fs-16 font-weight-semi-bold pb-1" }, [
          _vm._v(
            "\n                                     Stage 3: Personal Interview (Personality Test)\n                                "
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-responsive" }, [
      _c("table", { staticClass: "table table-bordered" }, [
        _c("thead", { staticClass: "bg-warning" }, [
          _c("tr", [
            _c("th", [
              _c("strong", [
                _vm._v(
                  "Pattern of Stage 1: Preliminary Examination (Objective Type):"
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("th", [
              _c("strong", [
                _vm._v(
                  "Negative marking for each incorrect answer is one-third (0.33)."
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-responsive" }, [
      _c("table", { staticClass: "table table-bordered" }, [
        _c("thead", { staticClass: "bg-secondary" }, [
          _c("tr", [
            _c("th", [_c("b", [_vm._v("Paper")])]),
            _vm._v(" "),
            _c("th", [_c("b", [_vm._v("Subjects")])]),
            _vm._v(" "),
            _c("th", [_c("b", [_vm._v("Total Marks")])]),
            _vm._v(" "),
            _c("th", [_c("b", [_vm._v("Duration")])]),
            _vm._v(" "),
            _c("th", [_c("b", [_vm._v("Syllabus")])]),
          ]),
        ]),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [
              _vm._v(
                "\n                                            Prelims Paper I\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            General Studies (GS)\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            200 (2x100)\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            2 Hours (9:30 AM to 11:30 AM)\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _c("ul", [
                _c("li", [
                  _vm._v(
                    "\n                                                    •\tCurrent events of national and international importance\n                                                "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "\n                                                    •\tHistory of India and Indian National Movement\n\n                                                "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "\n                                                    •\tIndian and World Geography – Physical, Social, Economic Geography of India and the World\n                                                "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "\n                                                    •\tIndian Polity and Governance – Constitution, Political System, Panchayati Raj, Public Policy Rights Issues, etc.\n                                                "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "\n                                                    •\tEconomic and Social Development – Sustainable Development, Poverty, Inclusion, Demographics, Social Sector initiatives, etc.\n                                                "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "\n                                                    •\tGeneral issues on Environmental Ecology, Bio-diversity and Climate Change – that do not require subject specialization\n                                                "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "\n                                                    •\tGeneral Science\n                                                "
                  ),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _vm._v(
                "\n                                            Prelims Paper II\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            Civil Services Aptitude Test (CSAT)\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            200 (2.5x80)\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            2 Hours (2:30 PM to 4:30 PM)\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _c("ul", [
                _c("li", [
                  _vm._v(
                    "\n                                                    •\tComprehension\n                                                "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "\n                                                    •\tInterpersonal skills including communication skills\n\n                                                "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "\n                                                    •\tLogical reasoning and analytical ability\n                                                "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "\n                                                    •\tDecision-making and problem solving\n                                                "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "\n                                                    •\tGeneral mental ability\n                                                "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "\n                                                    •\tBasic numeracy (numbers and their relations, orders of magnitude etc.) (Class X level), Data interpretation (charts, graphs, tables, data sufficiency etc. Class X level)\n                                                "
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-responsive" }, [
      _c("table", { staticClass: "table table-bordered" }, [
        _c("thead", { staticClass: "bg-success" }, [
          _c("tr", [
            _c("th", { staticClass: "my-auto" }, [
              _c("strong", [
                _vm._v(
                  "Pattern of Stage 2: Mains Examination (Descriptive Type)"
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("th", [
              _c("ul", [
                _c("li", [
                  _vm._v(
                    "\n                                                        •\tPaper A and Paper B of UPSC Civil Services Mains are qualifying in nature only and the score secured in these papers are not considered while counting the candidates’ ranking.\n                                                   \n                                                "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "\n                                                   \n                                                        •\tHowever, only those aspirants, who obtain at least 25% twenty-five per cent in Paper A and Paper B, will be taken into consideration while making of rank list based on General Studies and Optional Subjects papers.\n                                                   \n                                                "
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "Paper A – An Indian language selected by the candidates\n                                "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v("Paper B – English\n                                "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _c("p", { staticClass: "text-underline" }, [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v("Essay (Paper I)\n                                "),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", { staticClass: "text-underline" }, [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "General Studies (Paper II-V)\n                                "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", { staticClass: "text-underline" }, [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "Optional Subjects (Paper VI-VII)\n                                "
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-responsive" }, [
      _c("table", { staticClass: "table table-bordered table-hovered" }, [
        _c("thead", [
          _c("tr", [
            _c("th", [
              _vm._v(
                "\n                                            PAPER\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("th", [
              _vm._v(
                "\n                                            MARKS\n                                        "
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [
              _vm._v(
                "\n                                            Paper A: An Indian Language\t\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            300 Marks (Need 25 % at least)\n                                        "
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _vm._v(
                "\n                                            Paper B: English\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            300 Marks (Need 25 % at least)\n                                        "
              ),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-responsive" }, [
      _c("table", { staticClass: "table table-bordered table-hovered" }, [
        _c("thead", [
          _c("tr", [
            _c("th", [
              _vm._v(
                "\n                                            PAPER\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("th", [
              _vm._v(
                "\n                                            MARKS\n                                        "
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [
              _vm._v(
                "\n                                            Paper I: Essay\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            250\n                                        "
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _vm._v(
                "\n                                            Paper-II: General Studies-I "
              ),
              _c("br"),
              _vm._v(
                "\n                                            (Indian Heritage and Culture, History and Geography of the World and Society)\n\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            250\n                                        "
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _vm._v(
                "\n                                            Paper III: General Studies-II "
              ),
              _c("br"),
              _vm._v(
                "\n                                            (Governance, Constitution, Polity, Social Justice, and International relations)\n\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            250\n                                        "
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _vm._v(
                "\n                                            Paper IV: General Studies-III "
              ),
              _c("br"),
              _vm._v(
                "\n                                            (Technology, Economic Development, Bio-diversity, Environment, Security and Disaster Management)\n\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            250\n                                        "
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _vm._v(
                "\n                                            Paper V: General Studies-IV "
              ),
              _c("br"),
              _vm._v(
                "\n                                            (Ethics, Integrity and Aptitude)\n\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            250\n                                        "
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _vm._v(
                "\n                                            Paper VI: Optional Subject-Paper1\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            250\n                                        "
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _vm._v(
                "\n                                            Paper-VII: Optional Subject-Paper 2\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            250\n                                        "
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("tr", { staticClass: "bg-info" }, [
            _c("td", [_c("strong", [_vm._v("Sub Total (Written test) \t")])]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            1750\n                                        "
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_c("strong", [_vm._v("Personality Test (Stage 3)")])]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            275\n                                        "
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("tr", { staticClass: "bg-success" }, [
            _c("td", [
              _vm._v(
                "\n                                            Grand Total\t\n                                        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                            2025\n                                        "
              ),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Agriculture,")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Animal Husbandry and Veterinary Science, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Anthropology,")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Botany,")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Chemistry,")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Civil Engineering, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Commerce & Accountancy, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Economics, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Electrical Engineering, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Geography Optional, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Geology, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("History, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Law Optional, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Management, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Management, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Mathematics, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Mechanical Engineering, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Medical Science,")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Philosophy, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Physics, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Political Science & International Relations, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Psychology, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Public Administration, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Sociology, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Statistics, ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-secondary" }, [
      _c("strong", [_vm._v("Zoology. ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-responsive" }, [
      _c("table", { staticClass: "table table-bordered" }, [
        _c("thead", { staticClass: "bg-primary" }, [
          _c("tr", [
            _c("th", { staticClass: "my-auto" }, [
              _c("strong", [
                _vm._v(
                  "Pattern of Stage 3: Personal Interview (Personality Test/IAS Interview)"
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("th", [
              _c("ul", [
                _c("li", [
                  _vm._v(
                    "\n                                                        •\tCandidates who qualify the UPSC Mains Exam will be called for the 'Personality Test/Interview'. These candidates will be interviewed by a Board appointed by the UPSC.\n                                                   \n                                                "
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "It is the last stage of the examination.\n\n                                "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "There is no defined UPSC syllabus for the interview. Questions are asked from wide-ranging issues.\n\n                                "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "The objective of the interview is to assess the personal suitability of the candidate for a career in civil services by a board of competent and unbiased observers.\n\n                                "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "The interview is more of a purposive conversation intended to explore the mental qualities and analytical ability of the candidate.\n                                "
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "The Interview test will be 275 marks and the total marks for the written examination is 1750. This sums up to a Grand Total of 2025 Marks (as mentioned above in the table), based on which the final merit list will be prepared.\n                                "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "Candidates should note that there are no changes in UPSC Syllabus 2022 in comparison to UPSC Syllabus 2021 and UPSC Syllabus 2020.\n                                "
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "The minimum qualifying marks or cut off is released by the authorities post the declaration of result of each stage.\n                                "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "Candidates scoring more than or equal to the cut off marks are eligible for the next step of the selection process.\n                                "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "The cut off for both the examinations depends upon a number of factors like the difficulty level of the IAS Exam, vacancies available and number of appearing candidates etc.\n                                "
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("p", [
        _c("i", {
          staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
        }),
        _vm._v(
          "Always stick to the latest trend by going through the previous year’s papers. Find which section (subject) is challenging and scoring.\n                                "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("p", [
        _c("i", { staticClass: "la la-dot-circle text-info mr-2" }),
        _c("strong", [_vm._v("NEWSPAPERS   - ")]),
        _vm._v(
          " The Hindu, Indian Express etc.\n                                            "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("p", [
        _c("i", { staticClass: "la la-dot-circle text-info mr-2" }),
        _c("strong", [_vm._v("MAGAZINES   - ")]),
        _vm._v(
          " Down to Earth, Frontline, BENBY IAS Monthly Magazine, Yojana, Kurukshetra etc.\n                                            "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("p", [
        _c("i", { staticClass: "la la-dot-circle text-info mr-2" }),
        _c("strong", [_vm._v("BOOKS   - ")]),
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "ml-3" }, [
        _c("li", [
          _c("p", [
            _c("i", { staticClass: "la la-caret-right text-info mr-2" }),
            _vm._v(" "),
            _c("strong", [_vm._v("NCERTS (6 -12): Must Read Books")]),
          ]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [
            _c("i", { staticClass: "la la-caret-right text-info mr-2" }),
            _vm._v(" "),
            _c("strong", [_vm._v("BENBY IAS Course Material Books.")]),
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "ml-3" }, [
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-long-arrow-right text-danger mr-2",
                }),
                _vm._v(
                  "Books are finely refined as per the current trend of the UPSC CSE (Pre + Mains).\n                                                            "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-long-arrow-right text-danger mr-2",
                }),
                _vm._v(
                  "These books are not just updated as per the current UPSC CSE syllabus but also carries important previous year questions to practice.\n                                                            "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-long-arrow-right text-danger mr-2",
                }),
                _vm._v(
                  "BENBY IAS books combined with BENBY IAS Monthly magazine, BENBY IAS Prelims Test Series, BENBY IAS Mains Test Series and BENBY IAS website for daily current affairs will support you a lot in your preparation and ace this exam.\n                                                            "
                ),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [
            _c("i", { staticClass: "la la-caret-right text-info mr-2" }),
            _vm._v(" "),
            _c("strong", [_vm._v("\tStandard Books:")]),
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "ml-3" }, [
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-long-arrow-right text-danger mr-2",
                }),
                _c("strong", [_vm._v("History:")]),
                _vm._v(
                  "    India’s struggle for Independence by Bipin Chandra.\n                                                            "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-long-arrow-right text-danger mr-2",
                }),
                _c("strong", [_vm._v("Art and Culture:")]),
                _vm._v(
                  " CCRT Website.\n                                                            "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-long-arrow-right text-danger mr-2",
                }),
                _c("strong", [_vm._v("World History:")]),
                _vm._v(
                  "Norman Lowe.\n                                                            "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-long-arrow-right text-danger mr-2",
                }),
                _c("strong", [_vm._v(" Geography:")]),
                _vm._v(
                  " Certificate Physical and Human Geography by Goh Cheng Leong, Oxford School Atlas.\n                                                            "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-long-arrow-right text-danger mr-2",
                }),
                _c("strong", [_vm._v("Polity:")]),
                _vm._v(
                  " Constitution of India by DD Basu.\n                                                            "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-long-arrow-right text-danger mr-2",
                }),
                _c("strong", [_vm._v("Economy: ")]),
                _vm._v(
                  " Indian Economy by Datt and Sundaram, Indian Economy by K. Sankarganesh; Any good economics newspaper, the budget, and the current economic survey.\n                                                            "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-long-arrow-right text-danger mr-2",
                }),
                _c("strong", [_vm._v("Environment:")]),
                _vm._v(
                  "  Environmental Studies by Erach Barucha.\n                                                            "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-long-arrow-right text-danger mr-2",
                }),
                _c("strong", [_vm._v("Science and Technology: ")]),
                _vm._v(
                  "Need special focus on Current Affairs and Class 6 to 10 NCERTs for basics.\n                                                            "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-long-arrow-right text-danger mr-2",
                }),
                _c("strong", [_vm._v("Ethics: ")]),
                _vm._v(
                  "Ethics, Integrity and Aptitude by G Subba Rao.\n                                                            "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-long-arrow-right text-danger mr-2",
                }),
                _c("strong", [_vm._v("International Relations: ")]),
                _vm._v(
                  "Book by Rajiv Sikri.\n                                                            "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _c("i", {
                  staticClass: "la la-long-arrow-right text-danger mr-2",
                }),
                _c("strong", [_vm._v("Internal Security:  ")]),
                _vm._v(
                  "IDSA Website.\n                                                            "
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "After reading any of the source mentioned above always try to make short notes. \n                                "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "For Prelims the notes should be on Book itself and for Mains descriptive notes required.\n                                "
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "Identify the syllabus overlap between Prelims and Mains and focus on those areas first. \n                                "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "The best strategy is to prepare for Mains first and makes notes from them for Prelims.\n                                "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(" "),
          _c("b", { staticClass: "text-underline" }, [
            _vm._v("Choose optional subject"),
          ]),
          _vm._v(
            "    wisely based on your aptitude, interest and experience. Optional subject has weightage of 500 marks in Mains, so it is also important to select the scoring one.\n                                "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "Do not take lightly the CSAT paper in Prelims because it can surprise you if you did not practice its mock papers before the exam.\n                                "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "Similarly, are two qualifying language papers in Mains because failing to score at least 25% in them will automatically eliminate you from the IAS exam process notwithstanding your stellar performance in all the other papers.\n                                "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "Take out time daily for answer writing practice for Mains and MCQs practice for prelims at least 3-4 months before the Preliminary Examination.\n                                "
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", [
          _c("i", {
            staticClass: "la la-arrow-alt-circle-right text-theme mr-2",
          }),
          _vm._v(
            "Revise the books multiple times and update your notes.\n                                "
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center my-4" }, [
      _c("h2", [_vm._v("GOOD LUCK")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/mcqquestionattempComp.vue?vue&type=template&id=a9d896d4&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/mcqquestionattempComp.vue?vue&type=template&id=a9d896d4& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container pt-4" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-8 p-2" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _vm.instruc == 0
              ? _c("div", [
                  _c("div", {
                    domProps: {
                      innerHTML: _vm._s(_vm.singleMcqdateInfo.instruction),
                    },
                  }),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: { click: _vm.startTest },
                    },
                    [_vm._v("Start Test")]
                  ),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.instruc != 0
              ? _c(
                  "form",
                  {
                    staticClass: "needs-validation pt-4",
                    attrs: { method: "post", novalidate: "" },
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.submitanswer($event)
                      },
                    },
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _vm._l(_vm.questListId, function (test, index) {
                      return _c(
                        "div",
                        {
                          key: index,
                          staticClass: "card p-5 bg-white shadow mb-3",
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "text-black",
                              attrs: { id: "q" + (index + 1) },
                            },
                            [
                              _c("span", { staticClass: "font-weight-bold" }, [
                                _vm._v(" Question " + _vm._s(++index)),
                              ]),
                              _vm._v(" "),
                              _c("div", {
                                domProps: { innerHTML: _vm._s(test.question) },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-check" }, [
                            _c("label", { staticClass: "form-check-label" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.testanswer[index],
                                    expression: "testanswer[index]",
                                  },
                                ],
                                staticClass: "form-check-input",
                                attrs: { type: "radio", value: "a" },
                                domProps: {
                                  checked: _vm._q(_vm.testanswer[index], "a"),
                                },
                                on: {
                                  dblclick: _vm.uncheckMe,
                                  change: function ($event) {
                                    return _vm.$set(_vm.testanswer, index, "a")
                                  },
                                },
                              }),
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(test.ansA) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-check" }, [
                            _c("label", { staticClass: "form-check-label" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.testanswer[index],
                                    expression: "testanswer[index]",
                                  },
                                ],
                                staticClass: "form-check-input",
                                attrs: { type: "radio", value: "b" },
                                domProps: {
                                  checked: _vm._q(_vm.testanswer[index], "b"),
                                },
                                on: {
                                  dblclick: _vm.uncheckMe,
                                  change: function ($event) {
                                    return _vm.$set(_vm.testanswer, index, "b")
                                  },
                                },
                              }),
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(test.ansB) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-check" }, [
                            _c("label", { staticClass: "form-check-label" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.testanswer[index],
                                    expression: "testanswer[index]",
                                  },
                                ],
                                staticClass: "form-check-input",
                                attrs: { type: "radio", value: "c" },
                                domProps: {
                                  checked: _vm._q(_vm.testanswer[index], "c"),
                                },
                                on: {
                                  dblclick: _vm.uncheckMe,
                                  change: function ($event) {
                                    return _vm.$set(_vm.testanswer, index, "c")
                                  },
                                },
                              }),
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(test.ansC) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-check" }, [
                            _c("label", { staticClass: "form-check-label" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.testanswer[index],
                                    expression: "testanswer[index]",
                                  },
                                ],
                                staticClass: "form-check-input",
                                attrs: { type: "radio", value: "d" },
                                domProps: {
                                  checked: _vm._q(_vm.testanswer[index], "d"),
                                },
                                on: {
                                  dblclick: _vm.uncheckMe,
                                  change: function ($event) {
                                    return _vm.$set(_vm.testanswer, index, "d")
                                  },
                                },
                              }),
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(test.ansD) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _vm._m(1),
                  ],
                  2
                )
              : _vm._e(),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 p-2" }, [
        _c("div", { staticClass: "card card-item" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c("h3", { staticClass: "card-title fs-18 pb-2" }, [
                _vm._v("Exclusive Launches "),
              ]),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _vm._l(_vm.courseLists, function (comeList, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "mb-2 card p-2 " },
                  [
                    index < 3
                      ? _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "p-2 pl-4 my-auto col-md-3" },
                            [
                              _c("img", {
                                staticClass: "img-fluid",
                                staticStyle: { height: "50px", width: "100px" },
                                attrs: { src: comeList.featureImg, alt: "" },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "p-2 my-auto col-md-9" },
                            [
                              _c("p", [_vm._v(_vm._s(comeList.courseName))]),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "font-weight-bold text-black" },
                                [_vm._v(_vm._s(comeList.courseStartDate))]
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  staticClass: " text-theme ",
                                  attrs: {
                                    to:
                                      "/course/" +
                                      comeList.courseName
                                        .toLowerCase()
                                        .replace(/ /g, "-")
                                        .replace(/[^\w-]+/g, "") +
                                      "/" +
                                      comeList.id,
                                  },
                                },
                                [
                                  _vm._v("View The Program "),
                                  _c("i", {
                                    staticClass: "la la-arrow-right pl-3",
                                  }),
                                ]
                              ),
                            ],
                            1
                          ),
                        ])
                      : _vm._e(),
                  ]
                )
              }),
            ],
            2
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-danger" }, [
      _vm._v(
        "Imp Note : You can remove your selection by double click on selected ( "
      ),
      _c("i", {
        staticClass: "la la-dot-circle",
        staticStyle: { color: "blue" },
      }),
      _vm._v(" )"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card p-5 bg-white mb-3" }, [
      _c("button", { staticClass: "btn btn-lg btn-primary float-right" }, [
        _vm._v("Submit Test"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "divider" }, [_c("span")])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/ncertbooksComp.vue?vue&type=template&id=a63a0710&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/ncertbooksComp.vue?vue&type=template&id=a63a0710& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    _c("img", {
      staticClass: "img-fluid",
      attrs: {
        src: "https://beandbyias.com/storage/app/public/images/category/XuTjtVROLBTEIGAYkrmAmQ5nCCSm6xqFO2QIsx9F.png",
        alt: "Download NCERT books for UPSC Preparation",
      },
    }),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "container pt-4" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "div",
                { staticClass: "row" },
                _vm._l(_vm.catList, function (category, index) {
                  return _c(
                    "div",
                    {
                      key: index,
                      staticClass: "col-lg-4 responsive-column-half",
                    },
                    [
                      _c("div", { staticClass: "category-item" }, [
                        _c("img", {
                          staticClass: "cat__img lazy",
                          attrs: { src: category.image, alt: "Category image" },
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "category-content" }, [
                          _c("div", { staticClass: "category-inner" }, [
                            _c(
                              "h3",
                              { staticClass: "cat__title" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to:
                                        "/post-category/" +
                                        category.catName
                                          .toLowerCase()
                                          .replace(/ /g, "-")
                                          .replace(/[^\w-]+/g, "") +
                                        "/" +
                                        category.id,
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                                    " +
                                        _vm._s(category.catName) +
                                        "\n                                                "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  )
                }),
                0
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/preyearQuestPaperComp.vue?vue&type=template&id=274984d0&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/preyearQuestPaperComp.vue?vue&type=template&id=274984d0& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    _c("img", {
      staticClass: "img-fluid",
      attrs: {
        src: "https://beandbyias.com/storage/app/public/images/category/nJkcLLT4fxm6wnR4AMkqJfmGFjsgjSrUT1BIrAXr.png",
        alt: "Download NCERT books for UPSC Preparation",
      },
    }),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "container pt-4" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "div",
                { staticClass: "row" },
                _vm._l(_vm.catList, function (category, index) {
                  return _c(
                    "div",
                    {
                      key: index,
                      staticClass: "col-lg-4 responsive-column-half",
                    },
                    [
                      _c("div", { staticClass: "category-item" }, [
                        _c("img", {
                          staticClass: "cat__img lazy",
                          attrs: { src: category.image, alt: "Category image" },
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "category-content" }, [
                          _c("div", { staticClass: "category-inner" }, [
                            _c(
                              "h3",
                              { staticClass: "cat__title" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to:
                                        "/post-category/" +
                                        category.catName
                                          .toLowerCase()
                                          .replace(/ /g, "-")
                                          .replace(/[^\w-]+/g, "") +
                                        "/" +
                                        category.id,
                                    },
                                  },
                                  [
                                    _c("div", {
                                      domProps: {
                                        innerHTML: _vm._s(category.catName),
                                      },
                                    }),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  )
                }),
                0
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/privacyComp.vue?vue&type=template&id=57d4b496&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/privacyComp.vue?vue&type=template&id=57d4b496&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    _c("section", { staticClass: "breadcrumb-area section-padding img-bg-2" }, [
      _c("div", { staticClass: "overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          {
            staticClass:
              "breadcrumb-content d-flex flex-wrap align-items-center justify-content-between",
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass:
                  "generic-list-item generic-list-item-white generic-list-item-arrow d-flex flex-wrap align-items-center",
              },
              [
                _c(
                  "li",
                  [_c("router-link", { attrs: { to: "/" } }, [_vm._v("Home")])],
                  1
                ),
                _vm._v(" "),
                _c("li", [_vm._v("Privacy Policy")]),
              ]
            ),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _vm._m(1),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-heading" }, [
      _c("h2", { staticClass: "section__title text-white" }, [
        _vm._v("BE N BY IAS - Privacy Policy"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "privacy-policy-area section--padding" },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-12" }, [
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("Introduction:"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    This privacy policy contains the details of all the issues related to the website, www.beandbyias.com and other cyber related issues of all the information displayed and put onto public domain by BE N BY IAS (hereinafter referred to as ‘institute’) and is not exhaustive or limited.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    All visitors to www.beandbyias.com (Website) are advised to read and understand our Privacy Policy carefully, as by accessing the Website you agree to be bound by the terms and conditions of the Privacy Policy and consent to the collection, storage and use of information relating to you as provided herein.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    If you do not agree with the terms and conditions of our Privacy Policy, including in relation to the manner of collection or use of your information, please do not use or access the Site. If you have any questions or concerns regarding this privacy policy, you should contact at beandbyias@gmail.com\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "font-weight-bold" }, [
                    _vm._v(
                      "\n                                    ANY CAPITALIZED WORDS USED HENCEFORTH SHALL HAVE THE MEANING ACCORDED TO THEM UNDER THIS AGREEMENT. FURTHER, ALL HEADING USED HEREIN ARE ONLY FOR THE PURPOSE OF ARRANGING THE VARIOUS PROVISIONS OF THE AGREEMENT IN ANY MANNER. NEITHER THE USER NOR THE CREATERS OF THIS PRIVACY POLICY MAY USE THE HEADING TO INTERPRET THE PROVISIONS CONTAINED WITHIN IT IN ANY MANNER.\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("1. DEFINITIONS:"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                   “We”, “Our”, and “Us” shall mean and refer to the creators of this privacy policy.\n                                    “You”, “Your”, “Yourself” and “User” shall mean and refer to natural and legal individuals who use the Website.\n                                    “Website” shall mean and refer to www.beandbyias.com\n                                    “Personal Information” shall mean and refer to any personally identifiable information that We may collect from You. For removal of any doubts, please refer to Clause 2.\n                                    “Third Parties” refer to any Website, Website company or individual apart from the User and the creator of the Website.\n\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("2. Overview"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                   We commit to respecting your online privacy data. We further recognize your need for appropriate protection and management of any personally identifiable information (“Personal Information”) you share with us. Information that is considered personal about you by us includes, but is not limited to, your name, address, email address, phone number or other contact information.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    In order to purchase any product from this Website, you are required to provide the following information which includes, but is not limited to:\n                                    \n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("ol", { staticClass: "ml-md-5", attrs: { type: "i" } }, [
                    _c("li", [
                      _vm._v(
                        "\n                                            Name;\n                                        "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(
                        "\n                                            User name;\n                                        "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(
                        "\n                                            Password;\n                                        "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(
                        "\n                                            DOB;\n                                        "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(
                        "\n                                            Mobile number;\n                                        "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(
                        "\n                                            Banking details;\n                                        "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(
                        "\n                                            Class, subject and syllabus details;\n                                        "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(
                        "\n                                            E-mail address\n                                        "
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      " \n                                        This privacy policy also applies to data we collect from users who are not registered as members of this site, including, but not limited to, browsing behaviour, pages viewed etc.\n                                    "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                        The Website also requests for permissions while linking your BE N BY IAS Account with your Social account, the information shall be collected directly from your social media account in the event You have granted permission to link such accounts.\n                                    "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v(
                      "3.\tNOTIFICATION OF MODIFICATIONS AND CHANGES TO THE TERMS &CONDITIONS AND PRIVACY POLICY"
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                  We reserve the right to change the Terms and Privacy Policy from time to time as we deem fit, without any intimation to you, and your continued use of the site will signify your acceptance of any amendment to these terms.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    You are therefore advised to re-read the Terms of Service on a regular basis. Should it be that you do not accept any of the modifications or amendments to the Terms, you may terminate your use of this Website immediately.                                    \n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("4.\tINFORMATION WE COLLECT"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                  Our Platform’s online requisition/registration form requires users to give us contact information (like your name, address, telephone number and email address), and demographic information (like your zip code/pin code). As a member, you are required to provide a valid email address at registration and choose a username or alias that represents your identity on our Website. This information is compiled and analysed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on the Site or not), which URL you next go to (whether this URL is on the Site or not), your computer browser information, your IP address, and other information associated with your interaction with the Site.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    The rest of www.beandbyias.com is handled by graduates from the top engineering institutes in India. That is why, when you subscribe to our test-series and video lectures, you can be assured of a faultless service, and one that’ll surely put you on the road to success.                                   \n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    We also collect and store personal information provided by you from time to time on the Site. We only collect and use such information from you that we consider necessary for achieving a seamless, efficient and safe experience, customized to your needs including:\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    i.\tTo enable the provision of services opted for by you; "
                    ),
                    _c("br"),
                    _c("br"),
                    _vm._v(
                      "\n                                    ii.\tTo communicate necessary account and product/service-related information from time to time;"
                    ),
                    _c("br"),
                    _c("br"),
                    _vm._v(
                      "\n                                    iii.\tTo allow you to receive quality customer care services;"
                    ),
                    _c("br"),
                    _c("br"),
                    _vm._v(
                      "\n                                    iv.\tTo undertake necessary fraud and money laundering prevention checks, and comply with the highest security standards;"
                    ),
                    _c("br"),
                    _c("br"),
                    _vm._v(
                      "\n                                    v.\tTo comply with applicable laws, rules and regulations; and"
                    ),
                    _c("br"),
                    _c("br"),
                    _vm._v(
                      "\n                                    vi.\tTo provide you with information and offers on products and services, on updates, on promotions, on related, affiliated or associated service providers and partners, that we believe would be of interest to you.\n\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    Where any service requested by you involves a third party, such information as is reasonably necessary by the institute to carry out your service request may be shared with such third party.\nWe also do use your contact information to send you offers based on your interests and prior activity. The institute may also use contact information internally to direct its efforts for product improvement, to contact you as a survey respondent, to notify you if you win any contest; and to send you promotional materials from its contest sponsors or advertisers.\n\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    Further, you may from time to time choose to provide payment related financial information (credit card, debit card, bank account details, billing address etc.) on the website. We are committed to keeping all such sensitive data/information safe at all times and ensure that such data/information is only transacted over secure Site of approved payment gateways which are digitally encrypted, and provide the highest possible degree of care available under the technology presently in use.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    The institute will not use your financial information for any purpose other than to complete a transaction with you.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    To the extent possible, we provide you the option of not divulging any specific information that you wish for us not to collect, store or use. You may also choose not to use a particular service or feature on the website, and opt out of any non-essential communications from the institute.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    Further, transacting over the internet has inherent risks which can only be avoided by you following security practices yourself, such as not revealing account/login related information to any other person and informing our customer care team about any suspicious activity or where your account has/may have been compromised.\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("5.\tHOW INFORMATION IS COLLECTED"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                  Our Platform’s online requisition/registration form requires users to give us contact information (like your name, address, telephone number and email address), and demographic information (like your zip code/pin code). As a member, you are required to provide a valid email address at registration and choose a username or alias that represents your identity on our Website. This information is compiled and analysed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on the Site or not), which URL you next go to (whether this URL is on the Site or not), your computer browser information, your IP address, and other information associated with your interaction with the Site.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                   Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.                                    \n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    We will only retain personal information as long as necessary for the fulfilment of those purposes.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("6.\tCOOKIES"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                 We use data collection devices such as “cookies” on certain pages of our Websites. “Cookies” are small files sited on your hard drive that assist us in providing customized services. We also offer certain features that are only available through the use of a “cookie”. Cookies can also help us provide information, which is targeted to your interests. Cookies may be used to identify logged in or registered users.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                   Third party vendors including google.com (“Google”) may use cookies to serve ads based on your visits to this Website. You may visit the Website of the third party and choose to opt out of the use of cookies for interest- based advertising, if the third party offers such an option. You may choose to opt-out of the DoubleClick cookie that Google and its partners use for interest-based advertising by visiting Ads Settings. (Alternatively, you can direct users to opt out of a third-party vendor’s use of cookies for interest-based advertising by visiting aboutads.info.)\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    The Website also has enabled the Google Analytics Advertising, which allows Google to collect data about users on our Website, in addition to Google advertising cookies and anonymous identifiers. You may choose to opt out of this by downloading and installing the Google Analytics opt-out add-on here https://tools.google.com/dlpage/gaoptout/ We use data collection devices such as “cookies” on certain pages of our Websites. “Cookies” are small files sited on your hard drive that assist us in providing customized services. We also offer certain features that are only available through the use of a “cookie”. Cookies can also help us provide information, which is targeted to your interests. Cookies may be used to identify logged in or registered users.\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("7.\tEXTERNAL LINKS ON WEBSITE"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                 The Website may include hyperlinks to other web sites or content or resources. We have no control over any Websites or resources, which are provided by companies or persons other than Us.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                   You acknowledge and agree that we are not responsible for the availability of any such external sites or resources, and do not endorse any advertising, products or other materials on or available from such Websites or resources.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    You acknowledge and agree that we are not liable for any loss or damage which may be incurred by you as a result of the availability of those external sites or resources, or as a result of any reliance placed by you on the completeness, accuracy or existence of any advertising, products or other materials on, or available from such Websites or resources.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    These third-party service providers and Third-Party Sites may have their own privacy policies governing the storage and retention of your personal information that you may be subject to. We recommend that when you enter a Third- Party Site, you review the Third Party Site’s privacy policy as it relates to safeguarding your personal information. We use third-party advertising companies to serve ads when you visit the Website.\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("8.\tOUR USE OF YOUR INFORMATION"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                 Your contact information is also used to contact you when necessary. We use your IP address to help diagnose problems with our server, and to administer our Website. Your IP address is also used to help identify you and to gather broad demographic information. Finally, we may use your IP address to help protect our partners and ourselves from fraud. We will continue to enhance our security procedures as new technology becomes available. We will transfer information about you if we are acquired by or merged with another company or legal entity. In this event, we will notify you by email or by putting a prominent notice on the site before information about you is transferred and becomes subject to a different privacy policy.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                   We may release your personal information to a third-party in order to comply with a Court Order or other similar legal procedure, or when we believe in good faith that such disclosure is necessary to comply with the law; prevent imminent physical harm or financial loss; or investigate or take action regarding illegal activities, suspected fraud, or violations of Our Terms of Use. We may disclose personally identifiable information to parties in compliance with our Copyright Policy as mentioned in the Terms of Use as we in our sole discretion believe necessary or appropriate in connection with an investigation of fraud, intellectual property infringement, piracy, or other unlawful activity. In such events, We may disclose name, address, country, phone number, email address and company name.\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("9.\tCONFIDENTIALITY"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                You further acknowledge that the Website may contain information which is designated confidential by Us and that you shall not disclose such information without our prior written consent\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                   Your information is regarded as confidential and therefore will not be divulged to any third party, unless if legally required to do so to the appropriate authorities.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    We will not sell, share, or rent your personal information to any third party or use your e-mail address for unsolicited mail. Any emails sent by us will only be in connection with the provision of agreed services and products.\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("10.\tOUR DISCLOSURE OF YOUR INFORMATION"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                               Due to the existing regulatory environment, we cannot ensure that all of your private communications and other personally identifiable information will never be disclosed in ways not otherwise described in this Privacy Policy. By way of example (without limiting and foregoing), we may be forced to disclose information to the government, law enforcement agencies or third parties. Under certain circumstances, third parties may unlawfully intercept or access transmissions or private communications, or members may abuse or misuse your information that they collect from our Website. Therefore, although we use industry standard practices to protect your privacy, we do not promise, and you should not expect, that your personally identifiable information or private communications would always remain private.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                   As a matter of policy, we do not sell or rent any personally identifiable information about you to any third party. However, the following describes some of the ways that your personally identifiable information may be disclosed:\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    External Service Providers: There may be a number of services offered by external service providers that help you use our Website. If you choose to use these optional services, and in the course of doing so, disclose information to the external service providers, and/or grant them permission to collect information about you, then their use of your information is governed by their private policy.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    Other Corporate Entities: We share much of our data, including personally identifiable information about you, with our parent and/or subsidiaries that are committed to serving your online needs and related services, throughout the world. Such data will be shared for the sole purpose of enhancing your browsing experience and providing our services to you. To the extent that these entities have access to your information, they will treat it at least as protectively as they treat information they obtain from their other members. It is possible that We and/or our subsidiaries, or any combination of such, could merge with or be acquired by another business entity. Should such a combination, merger or amalgamation etc. occur, you should expect that we would share some or all of your information in order to continue to provide the service. You will receive notice of such event (to the extent that it occurs).\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    Law and Order: We cooperate with law enforcement agencies, as well other third parties to enforce laws, such as: intellectual property rights, fraud and other rights. We can (and you authorize us to) disclose any information about you to law enforcement agencies and other government officials as we, in our sole discretion, believe necessary or appropriate, in connection with an investigation of fraud, intellectual property infringements, or other activity that is illegal or may expose us or you to legal liability.\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("11.\tACCESSING AND REVIEWING INFORMATION"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                Following registration, you can review and change the information you submitted each time except your display name. If you change any information, We may keep track of your old information. You can change your registration information such as: name, address, city, state, zip code, country, phone number, and profile.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                   We will retain in our files information you have requested to remove for certain reasons or under certain circumstances, such as to resolve disputes, troubleshoot problems and enforce our terms and conditions. Further, such prior information is never completely removed from our databases due to technical and legal constraints, including stored ‘back up’ systems. Therefore, you should not expect that all of your personally identifiable information will be completely removed from our databases in response to your requests.\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("12.\tCONTROL OF YOUR PASSWORD"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                When you sign up to become a Member, you will also be asked to choose a password. You are entirely responsible for maintaining the confidentiality of your password. It is important that you protect it against unauthorized access of your account and information by choosing your password carefully, and keeping your password and computer secure by signing out after using our services.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                  You agree not to use the account, username, email address or password of another Member at any time or to disclose your password to any third party. If you choose to share this information with third parties to provide you additional services, you are responsible for all actions taken with your login information and password and therefore should review each third party’s privacy policy. You are responsible for all actions taken with your login information and password, including fees. If you lose control of your password, you may lose substantial control over your personally identifiable information and may be subject to legally binding actions taken on your behalf. Therefore, if your password has been compromised for any reason, you should immediately change your password. You agree to notify us immediately if you suspect any consistent unauthorized use of your account or access to your password even after changing it.\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("13.\tOTHER INFORMATION COLLECTORS"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                Except as otherwise expressly included in this Privacy Policy, this document only addresses the use and disclosure of information we collect from you. To the extent that you disclose your information to other parties, whether they are on our Websites or on other sites throughout the Internet, different rules may apply to their use or disclosure of the information you disclose to them. To the extent that we use third-party advertisers, they adhere to their own privacy policies. Since we do not control the privacy policies of the third parties, you are subject to ask questions before you disclose your personal information to others.\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("14.\tSECURITY"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                We treat data as an asset that must be protected against loss and unauthorized access. We employ many different security techniques to protect such data from unauthorized access by members inside and outside the institute. We do not recommend the transfer of sensitive information (such as credit card numbers) and bank account details via the Site to other Users. Users are recommended to do so offline, on the phone, or via personal emails. We follow generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it. However, “perfect security” does not exist on the Internet. You, therefore, agree that any security breaches beyond the control of our standard security procedures are at your soul risk.\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("15.\t DISCLAIMER"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                We cannot ensure that all of your private communications and other personal information (including sensitive information like credit card information and bank account number) will never be disclosed in ways not otherwise described in this Privacy Policy. Therefore, although we are committed to protecting your privacy, We do not promise, and you should not expect, that your personal information will always remain private. As a user of the Site, you understand and agree that you assume all responsibility and risk for your use of the website, the internet generally, and the documents you post or access, and for your conduct on and off the website.\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("16.\tDISPUTES AND JURISDICTION"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                               All disputes involving but not limited to rights conferred, compensation, refunds, and other claims through this policy will be resolved through a two-step Alternate Dispute Resolution mechanism.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    Stage 1: Mediation. In case of a dispute, the matter will first be attempted to be resolved by a sole mediator who is a neutral third party and will be selected at the mutual acceptance of a proposed mediator by both parties. Both parties may raise a name for the sole mediator and in case both parties accept the proposed name, the said person shall be appointed as sole mediator. In any case, the parties are not able to reach a consensus within two proposed mediators, the Institute reserves the right to decide who the final mediator is. The decision of the mediator is not binding on both parties, however, the parties in good faith will attempt to bind by the decision which will be in the form of a settlement agreement signed by both parties and duly endorsed by the mediator for having mediated that settlement.\n                                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                    Stage 2: Arbitration. In case mediation does not yield a result suitable or preferred by any one of the parties, arbitration may follow, the award of which is binding on both parties. The Arbitral Tribunal shall comprise three members – one appointed by each party and the third member to be nominated by the two appointed members by mutual consent, such third member shall be the Chairman of the Arbitral Tribunal. The provisions of the Arbitration and Conciliation Act, 1996 shall apply to such arbitration. The seat of the Arbitration shall be Delhi and courts in Delhi shall have the exclusive jurisdiction as per the Act. However, the venue for conducting the proceedings shall be chosen by both the parties as per the mutual consent subject to the provisions of the Act. The proceedings of arbitration shall be in the English language. The arbitral award shall be final and binding on the Parties. If the dispute cannot be resolved by this two-step Alternate Dispute Resolution mechanism, it shall be referred to the courts in Delhi, India.\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v(
                      "17.\tQUESTIONS AND SUGGESTIONS AND GRIEVANCE OFFICER"
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                              In case you have concerns that are not resolved by our Customer Care team or to escalate your unresolved concerns, please write into our Grievance Officer on our Email: beandbyias@gmail.com\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("18.\tOTHER TERMS AND CONDITIONS"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                            i.\tDetails of a Subscriber: Every subscriber of a course has to fill in the required details on his/her ‘Profile’ page such as passport size photo, ID Proof, Address, etc. in compliance with the KYC (Know Your Customer) requirements mandated by the regulatory authorities. "
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(
                      "\n                            ii.\tAny enrolled student can watch the video lessons only a limited number of times. "
                    ),
                    _c("br"),
                    _c("br"),
                    _vm._v(
                      "\n                            iii.\tCyber-crime as per IT Act: Sharing your access, recording, downloading, or trying to sell distributed videos and notes is a legally punishable offense under relevant IPC sections, IT Act, 2000, and other relevant laws. We do not tolerate any such activity. Offenses like hacking, data theft, virus attacks, denial of service attacks, illegal tampering with source codes included.\n                            iv.\tRefund Policy: The payment once made will not be refunded. On successful payment, the user will be enrolled in the course until the course duration. "
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(
                      "\n                            v.\tGrievance Support: If you have any questions about this Privacy Policy, the practices of this site, or your dealings in this site, please contact us at:\n                                "
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("b", [
                      _vm._v(
                        "\n                                    Address: 57/11, 2nd floor, Bada Bazar Road, Old Rajinder Nagar, Karol Bagh, Delhi, 110060\n                                "
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/refundPolicyComp.vue?vue&type=template&id=927836ac&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/refundPolicyComp.vue?vue&type=template&id=927836ac&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    _c("section", { staticClass: "breadcrumb-area section-padding img-bg-2" }, [
      _c("div", { staticClass: "overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          {
            staticClass:
              "breadcrumb-content d-flex flex-wrap align-items-center justify-content-between",
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass:
                  "generic-list-item generic-list-item-white generic-list-item-arrow d-flex flex-wrap align-items-center",
              },
              [
                _c(
                  "li",
                  [_c("router-link", { attrs: { to: "/" } }, [_vm._v("Home")])],
                  1
                ),
                _vm._v(" "),
                _c("li", [_vm._v("Refund and Cancellation")]),
              ]
            ),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _vm._m(1),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-heading" }, [
      _c("h2", { staticClass: "section__title text-white" }, [
        _vm._v("BE N BY IAS - Refund and Cancellation"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "privacy-policy-area section--padding" },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-12" }, [
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("Introduction:"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("ul", [
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        After payment has been made to the institute, for any Course/ Purpose, NO REFUND OR CANCELLATION  is permitted under any circumstances.\n                                    "
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _c("br"),
                  _vm._v(" "),
                  _c("h4", [
                    _vm._v("\n                                DIRECTOR "),
                    _c("br"),
                    _vm._v(
                      "  \n                                BE N BY IAS\n                            "
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/searchResultComp.vue?vue&type=template&id=3fb04276&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/searchResultComp.vue?vue&type=template&id=3fb04276&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      { staticClass: "fullpage", style: { display: _vm.loadDisplayed } },
      [_vm._m(0)]
    ),
    _vm._v(" "),
    _c("section", { staticClass: "blog-area section--padding" }, [
      _c("div", { staticClass: "container" }, [
        _vm.blogList.data != ""
          ? _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.blogList.data, function (blogInfo) {
                return _c(
                  "div",
                  { key: blogInfo.id, staticClass: "col-lg-4" },
                  [_c("blog-list-view", { attrs: { bloginfo: blogInfo } })],
                  1
                )
              }),
              0
            )
          : _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-12 text-center" },
                [
                  _c("h3", [
                    _vm._v(
                      "\n                            No result Found!\n                                                            \n                        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn theme-btn",
                      attrs: { to: "/all-articles" },
                    },
                    [
                      _vm._v(
                        "\n                            Explore All Articles "
                      ),
                      _c("i", { staticClass: "la la-arrow-right icon ml-1" }),
                    ]
                  ),
                ],
                1
              ),
            ]),
        _vm._v(" "),
        _c("div", { staticClass: "text-center pt-3" }, [
          _c(
            "nav",
            {
              staticClass: "pagination-box",
              attrs: { "aria-label": "Page navigation example" },
            },
            [
              _c("pagination", {
                attrs: { data: _vm.blogList },
                on: { "pagination-change-page": _vm.getResults },
              }),
            ],
            1
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "center-text" }, [
      _vm._v("Please wait "),
      _c("div", { staticClass: "spinner-border text-light" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/termsandconditionComp.vue?vue&type=template&id=00f1fd79&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/termsandconditionComp.vue?vue&type=template&id=00f1fd79&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    _c("section", { staticClass: "breadcrumb-area section-padding img-bg-2" }, [
      _c("div", { staticClass: "overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          {
            staticClass:
              "breadcrumb-content d-flex flex-wrap align-items-center justify-content-between",
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass:
                  "generic-list-item generic-list-item-white generic-list-item-arrow d-flex flex-wrap align-items-center",
              },
              [
                _c(
                  "li",
                  [_c("router-link", { attrs: { to: "/" } }, [_vm._v("Home")])],
                  1
                ),
                _vm._v(" "),
                _c("li", [_vm._v("Terms And Condition")]),
              ]
            ),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _vm._m(1),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-heading" }, [
      _c("h2", { staticClass: "section__title text-white" }, [
        _vm._v("BE N BY IAS - TERMS AND CONDITIONS"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "privacy-policy-area section--padding" },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-12" }, [
              _c("div", { staticClass: "card card-item" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h2", { staticClass: "card-title fs-18 pb-2" }, [
                    _vm._v("Introduction:"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_c("span")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pb-3" }, [
                    _vm._v(
                      "\n                                The students enrolled with BE N BY IAS (herein after referred to as ‘institute’) are mandatorily required to follow the below mentioned terms and conditions without any exceptions or deviations, failing which strict disciplinary and legal action will be taken including expulsion from the institute.\n                            "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("h3", [_vm._v("1.Payment of Fee and other dues:")]),
                  _vm._v(" "),
                  _c("ul", [
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Students shall pay the fee or any other dues to the institute at the time of admission only or on or before the due dates in case of installments, as the case may be, for any of the courses or services to be availed as per the information provided by the institute from time to time at various places including the website of the institute www.beandbyias.comor by any of its authorized representatives. The fee structure for such courses and /or services is liable to be changed without any notice by the institute. "
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                                        The fee and other dues payable to the institute by the students or any other person on their behalf shall be paid in the following three modes only:\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Online Payment: Through the payment gateway available on the website of the institute www.beandbyias.com.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Demand Draft: Through a Demand Draft / Pay Order / Banker’s Cheque in favor of “BE N BY IAS” payable eat New Delhi.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Instant Electronic Transfer into Bank Account: By way of ECS / NEFT / RTGS or any other mode of instant bank transfer of money into the credit of the notified bank account of the institute.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        No other mode of payment including either through Cheque or payment in cash shall be accepted by the institute.\n                                        "
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                                        Note 1: All payments to the institute shall be made through any of the above-mentioned three modes only for which a printed receipt, either in physical form or computer generated, by the institute shall be issued (All payments receipts will be subject to realization of the due amount of money into the bank account of the institute only).\n                                        "
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                                        Note 2: Students who fail to pay the fee installments or any other dues to the institute on or before the due dates or within the due dates specified by the institute shall not be allowed to attend the classes or avail any of the prescribed services of the institute without any further notice. \n                                        "
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                                        Refund of fee or Replacement (Applicable only for Classroom Study Courses):\n                                        "
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                                        In case a student is not able to continue the classes due to some unavoidable reasons to the satisfaction of the management, the institute will provide the alternatives of fee refund or replacement to such students governed by the following terms and conditions:\n\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Student can avail the fee refund facility within first five days from the date of commencement of either batch or course. Fee will be refunded after deducting initial processing and admission charges, equivalent to admission fee (as mentioned in the fee receipt). Refund amount will be paid through account payee cheque only, which will be in the name of the student.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        The student can replace these at with another student within the first three months from the date of commence men to f batch or course. The student who replaces these at should not be present student of BE N BYIAS and will not be offered any back-up classes, study material or books etc. The amount equivalent to admission fee will be charged as replacement processing fee.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Refund requests made verbally, over telephones, e-mails or by fax will not be valid or accepted.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Submit the refund/replacement application in person to the authorized person in the admissions office of the institute. Only the student or parents can submit “Fee Refund/ Replacement” application. Please note that, we do not accept the Fee Refund/Replacement applications from any other person/relative/friend etc.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        The policy of fee refund or seat replacement is strictly according to the above-mentioned terms and is not negotiable under any circumstances. Any refund of fee or seat replacement received without proper documents like ID-card (if issued), fee receipt and written application after the expiry of applicable period will not processed or entertained.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Admission fee is non-refundable under any circumstances.\n                                        "
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                                        Note: Any fee or other charges for online courses, study material including test series or paid for availing any services online and also other than class room courses shall not be refunded under any circumstances.\n                                        "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("br"),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("h3", [_vm._v("2.Identity Card:")]),
                  _vm._v(" "),
                  _c("ul", [
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Each student will be issued an Identity Card by the institute on payment of full fee and other dues. The entry of the student into classes and the premises of BE N BY IAS will be allowed only with the Identity Card. For attending the classes, students are requested to collect their ID cards from admission department be for commencement of the batch.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Students not carrying the ID card of BE N BY IAS, shall not be permitted to attend the classes under any circumstances.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        If the ID card or fee receipt of the student is lost or misplaced then NO duplicate ID card or fee receipt will be issued to the student.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Students should not overwrite on or tamper with the ID card in any manner, or provide ID card to anybody; also, students are advised not to produce photocopy/duplicate of ID card in any form. The production of the ID cards in original only will allow the student to either enter the premises of the institute and / or attend the classes.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Identity Card must be retained by the students with full caution and safety. It is a very important document and a proof of your association with the institute BE N BY IAS. The re-issuing of the identity card will depend solely on the discretion of the management, considering the circumstances in which the ID card was lost. Management’s decision regarding there – issue will be final and a biding. If the management decides to re-issue the Duplicate ID Card, the student will have to submit a copy of FIR with a processing fee of Rs.500/- (Rupees five hundred only) and one recent passport size photograph.\n                                    "
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("h3", [_vm._v("3.Change of Batch /Centre:")]),
                  _vm._v(" "),
                  _c("ul", [
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        The batch or center, once allotted at the time of admission, will not be changed. Hence, students are advised to discuss batch timings, batch commencement dates, venue and other details with the counselors or other authorized persons of the institute and accordingly join suitable batches as per the convenience.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Batches will not be changed from regular to weekend or vice versa.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Students enrolled under classroom courses will not be transferred or shifted to any other program/course.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        College going/working professionals are advised to join weekend batches, as no request will be entertained at regarding the change of batch.\n                                    "
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("h3", [_vm._v("4.Absenteeism:")]),
                  _vm._v(" "),
                  _c("ul", [
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Students must attend the classes and Test Series regularly in their assigned batches and as per the scheduled time table only. Students will be solely responsible for their absenteeism from classes/Test series. In case of absenteeism, permission to attend missed classes, in other batches, is subjected to the discretion of management and availability of seats, and it is not mandatory for institute to provide backup of missed classes.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        In case of absence in the Test Series, no separate question papers will be issued to the students.\n                                    "
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("h3", [_vm._v("5.General Instructions:")]),
                  _vm._v(" "),
                  _c("ul", [
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Students are advised to adhere to strict discipline and sincerity with in the premises of the institute. If anyone is found contravening any rules such as misbehaving with the staff of the institute or classmates, fighting, resorting to any act of physical violence or verbal abusing, inappropriate offensive gestures, blocking seats, damaging property of the institute or any other illegal activity, the management of the institute reserves the right to debar the student from attending the classes and strict legal action will be taken against the student.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Batch venue and timings are subject to periodic changes as per the availability of faculties and classrooms.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Classes can be extended on week days and public holidays for weekend batches; class timings can be extended for regular batches in order to complete the syllabus on time.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        Students are only responsible for the safety of their vehicles and other belongings and institute shall not be responsible for any loss or damage.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        The Institute reserves the right to alter or carry out any changes in its programs, fee structure, faculty, venue of classes without any prior notice to anybody. However, every possible endeavor will be made by the institute to notify such changes to the students in an appropriate and convenient manner. The decision of the Institute shall be final and abiding.\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        If there is any change in the syllabus during the course, the institute will make all the possible efforts to cover the revised syllabus. However, it will not be mandatory or binding upon the institute\n                                    "
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("h3", [
                    _vm._v(
                      "\n                                6.Copyright and Proprietary Rights:\n                            "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("ul", [
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        All the study materials, test series, lectures in written form, notes, journals and books produced by the institute etc., in written as well as audio-visual forms, provided to the students shall carry the copyright and other intellectual property rights of the institute exclusively and any violation or infringements by the students or anyone else shall make them liable for appropriate legal and other civil / criminal action under the applicable laws by the institute. This will also include any such infringement either with the connivance or negligence of the student and such student shall also be liable for the legal action as an abettor or accomplice.\n                                    "
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("h3", [_vm._v("7.Online Students Please note:")]),
                  _vm._v(" "),
                  _c("ul", [
                    _c("li", [
                      _c("p", [
                        _vm._v(
                          "\n                                        The online contents and other material both audio as well as videos made available to such a student shall be the sole proprietary content of the institute. Any false representation of facts during admission or misuse of proprietary content including downloading and sharing of this content in the public domain will lead to cancellation of admission, penalties and also attract legal action asperlawsinforce.\n                                        "
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                                        NOTE: These terms and conditions are subject to any changes or modifications at the sole and exclusive discretion of the Institute and will not be liable for any challenge by any person before any authority or the Court of law.\n                                    "
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _c("br"),
                  _vm._v(" "),
                  _c("h4", [
                    _vm._v("\n                                DIRECTOR "),
                    _c("br"),
                    _vm._v(
                      "  \n                                BE N BY IAS\n                            "
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/whychooseLawComp.vue?vue&type=template&id=12d8c223&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/front/whychooseLawComp.vue?vue&type=template&id=12d8c223&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "section",
        { staticClass: "breadcrumb-area section-padding img-bg-3" },
        [
          _c("div", { staticClass: "overlay z-index-n1" }),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "breadcrumb-content" }, [
              _c("div", { staticClass: "section-heading" }, [
                _c(
                  "h2",
                  { staticClass: "section__title fs-45 lh-60 text-white" },
                  [_vm._v("STRATEGY FOR PREPARATION OF LAW OPTIONAL")]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "breadcrumb-btn-box pt-40px pl-3" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "btn-text text-white video-play-btn d-inline-flex align-items-center",
                    attrs: {
                      href: "#",
                      "data-fancybox": "",
                      "data-src": "https://www.youtube.com/watch?v=_J6hSTg8Q7c",
                    },
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass:
                          "icon-element icon-element-md pulse-btn mr-3",
                      },
                      [_c("i", { staticClass: "la la-play" })]
                    ),
                    _vm._v("Watch The Video\n                        "),
                  ]
                ),
              ]),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "about-area section--padding overflow-hidden" },
        [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-12" }, [
                _c("div", { staticClass: "about-content pb-5" }, [
                  _c("div", { staticClass: "section-heading" }, [
                    _c("h4", { staticClass: "section__title" }, [
                      _vm._v("INTRODUCTION"),
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "section-divider" }),
                    _vm._v(" "),
                    _c("p", { staticClass: "section__desc" }, [
                      _vm._v(
                        "\n                                    Civil Services Exam is held annually by the Union Public Service Commission (UPSC) to select officers for a variety of government services, the most important of which is the All-India Services, i.e., the Indian Administrative Service (IAS), the Indian Police Service (IPS), and the Indian Forest Services (IFS). The Civil Service Exam comprises of three stages, the Preliminary Exam (Objective Type/ MCQs), Mains Exam (Descriptive Papers), and Personality Test (Interview).\n                                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("p", { staticClass: "section__desc" }, [
                      _c("b", [_vm._v("The Preliminary Examination ")]),
                      _vm._v(
                        " is to screen candidates for the Mains part of the Exam and the marks obtained in the Preliminary Examination are not counted for the final merit. The marks obtained in the Mains Examination and Personality Test are only considered when preparing the final merit list.  The Preliminary Examination consists of two papers:\n                                    "
                      ),
                      _c("ol", { staticClass: "ml-5", attrs: { Type: "i" } }, [
                        _c("li", [
                          _c("strong", [_vm._v("  Paper 1- General Studies,")]),
                          _vm._v(
                            " which comprises 100 MCQ-type questions and is used to narrow down the pool of candidates for the Mains Exam stage.\n                                        "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("strong", [_vm._v(" Paper 2- Aptitude (CSAT),")]),
                          _vm._v(
                            " which consists of 80 MCQ questions for which the aspirant must obtain only 33% qualifying marks and which are not taken into account when shortlisting candidates for the Mains Exam stage. Paper 1 (General Studies) of only those aspirants who clear this Aptitude test are evaluated.\n                                        "
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "bg-warning p-3 border border-danger" },
                      [
                        _c("h4", [_vm._v("Do you know?")]),
                        _vm._v(" "),
                        _c("hr", { staticClass: "border border-dark" }),
                        _vm._v(" "),
                        _c("ul", [
                          _c("li", [
                            _c("p", { staticClass: "text-dark" }, [
                              _vm._v(
                                "\n                                                \tThere is a lot of overlapping between Law Optional and Prelims Paper -1 (General Studies);\n                                            "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("p", { staticClass: "text-dark" }, [
                              _vm._v(
                                "\n                                               \tFor example, in the Preliminary Examination, 18 to 20 questions from Polity, International Relations, and Current Affairs are generally asked, which accounts for 40 marks. \n                                            "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("p", { staticClass: "text-dark" }, [
                              _vm._v(
                                "\n                                                \tThe Candidates who manage to score 100+ marks are able to reach Mains Exam stage. Thus, these topics can fetch almost 40 % of the passing marks.\n                                            "
                              ),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("br"),
                      ]
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                        The Mains Examination consists of "
                      ),
                      _c("strong", [_vm._v(" nine descriptive papers,")]),
                      _vm._v(
                        " two of which are qualifying papers that are not counted in the merit list. "
                      ),
                      _c("strong", [
                        _vm._v(
                          "The remaining seven papers account for a total of 1750 marks"
                        ),
                      ]),
                      _vm._v(" out of which "),
                      _c("strong", [
                        _vm._v(" Optional Paper comprises 500 Marks."),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-3" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: {
                            src: "https://beandbyias.com/storage/app/public/images/category/gjojp0bKZhQpXzURvOyhsG4y2HXckZVcG5b87Oyb.jpg",
                            alt: "",
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                        That's why choosing an Optional Subject wisely becomes imperative. This choice of Optional is from the 26 optional subjects offered by the Union Public Service Commission. Getting one's name in the final merit list largely depends upon one's performance in their Optional as the marks obtained by other candidates in Essay and G.S Papers are almost in the same range and marks obtained in their Optional Subject play a crucial role in deciding whether they reach the next and final stage, i.e., Personality Test.\n                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("h4", [
                      _vm._v("UPSC CSE REQUIRES A DIFFERENT STRATEGY "),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                        Shelly Crane has aptly said that “It doesn't matter who you were or what you've done in the past. The only thing that matters is who you are right now”. Every year, numerous aspirants from different academic backgrounds sit for the most challenging exam with the hope of becoming an IAS officer and serving their country. Coming out of their academics and starting preparation for the UPSC CSE Exam may sometimes be a challenging task. This is because unlike academics, where you only aim for mugging a few topics and jotting them in the exam, UPSC requires a different strategy. \n                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                        While preparing for the Civil Services Exam, a candidate is expected to know numerous aspects which are connected to our day-to-day life. Since the work profile of a civil servant is to act as an efficient administrator and also maintain law and order, UPSC expects the aspirant to be well versed in the practical topics which are related to the happenings around us. In addition to this, the syllabus for UPSC CSE incorporates in itself static as well as dynamic aspects, which anyone with a systematic and focused preparation will be able to ace. "
                      ),
                      _c("strong", [
                        _vm._v(
                          " Just remember, the UPSC CSE Exam is not about scoring the 90 %. You may score as high as 50% and still turn out to be a topper. "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("h4", [_vm._v("HOW TO PREPARE LAW OPTIONAL")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                        Most aspirants prepare their optional subject first and then start preparing for their General Studies Papers. Jasbir Singh Bajaj Sir also advises this strategy to the aspirants because once the aspirant has completed his optional subject, he can easily focus on his GS papers making sure that the optional subject is not a hindrance to his GS preparation. \n                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                        But what if we tell you that there is a subject that instead of being a hindrance, will supplement your GS preparation. Yes, you heard it correctly, Law Optional is one such subject. The General Studies paper has taken out bits and pieces from many optional subjects, but the Law Optional syllabus has a considerable part that overlaps with General Studies, both Prelims, and Mains Exam.\n                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-2" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: {
                            src: "https://beandbyias.com/storage/app/public/images/category/IAYZ5zxVK5ahY5uC7IkTEDCXOe9IdgLdy7eYYktm.jpg",
                            alt: "",
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2" }),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                        Enjoying the highest Success Rate, amongst the most popular Optional subjects, Law Optional stands at a very high pedestal, which means that if an aspirant opts for Law, there is an exorbitant chance that he will come out successfully and get into his desired service. When we talk about Success Rate, consistency is the key and we can see that the law optional has been consistent for the past seven years as mentioned in the Annual UPSC Report, given below:\n                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-2" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: {
                            src: "https://beandbyias.com/storage/app/public/images/category/ttMnnZ2ocpOtY860YeNCyYXRHbM2oOMI08rrPhk1.png",
                            alt: "",
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2" }),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                        If we compare the success ratio of various popular optional subjects, it can clearly be seen through the chart below that Law Optional has been the only consistent performer in the recent time with the highest success ratio triumphing over popular optional subjects such as Anthropology, Geography, History, Public Administration, Philosophy, Psychology, etc. \n                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-2" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: {
                            src: "https://beandbyias.com/storage/app/public/images/category/I9MZ7Q2cKbXU3utT9mzvOLcqxhjo0wNZevKYMwsG.jpg",
                            alt: "",
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2" }),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                        After choosing his optional subject, an aspirant is now required to prepare his own properly planned strategy for the Law Optional Examination. \n                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                        To understand how an aspirant should prepare his strategy for the Optional subject, they should analyze and understand the plan of action of those who have successfully aced the examination with Law as their Optional.  \n                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                        How about having a mentor, who is adorned with proper qualifications, has burnt the midnight oil, went through the rigors of the entire process, and came out with roaring success?\n                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("\n                                        Well,"),
                      _c("strong", [_vm._v(" BE N BY IAS,")]),
                      _vm._v(
                        " an esteemed institution has such a mentor, just for you, to pave your path towards success. "
                      ),
                      _c("strong", [
                        _vm._v(
                          "Mr. Jasbir Singh Bajaj, former IAS Officer of 1987 Batch- Tamil Nadu cadre, secured 89th Rank with Law and Public Administration as his optional subjects."
                        ),
                      ]),
                      _vm._v(
                        " Through his amicable mentorship and unique teaching style, he will make sure that you are not only guided, for the Preliminary and Mains Examination, but the Personality Test as well.\n                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                        Now, once an aspirant has chosen that he is going to opt for Law, it may be a possibility that he may or may not have a law background. Thus, the process of devising a strategy to prepare for Law Optional may be different for Law Graduates and Non-Law Graduates.\n                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                        We, at BE N BY IAS, have devised a three-pronged strategy for the aspirants to prepare. \n                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("ol", { staticClass: "ml-5 bg-dark text-white" }, [
                      _c("li", { staticClass: " py-3 px-2 " }, [
                        _c("p", { staticClass: "text-white" }, [
                          _vm._v(
                            "1. Strategy for those aspirants having a Law background (Law Graduates)"
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "py-3 px-2 " }, [
                        _c("p", { staticClass: "text-white" }, [
                          _vm._v(
                            "2. Strategy for those aspirants without a Law background (Non- Law Graduates)"
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "py-3 px-2 " }, [
                        _c("p", { staticClass: "text-white" }, [
                          _vm._v(
                            "\n                                                3. Common strategy for both the aspirants, who may or may not possess a Law Degree.\n                                            "
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("h4", [
                      _vm._v(
                        "\n                                        PREPARATION STRATEGY FOR ASPIRANTS HAVING A LAW BACKGROUND \n                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                        Aspirants having a law background have already covered numerous laws during their academics and thus they are already versed with the academic part of law. However, as we have already discussed that the strategy required for the preparation of law optional is different from our academics, the aspirants who have already studied law in their college life are now expected to apply such knowledge in accordance with the need of the UPSC exam. The pattern of questions asked in law optional subject tilts towards contemporary legal issues and therefore it is expected from the aspirant to apply their legal knowledge in a restrictive manner keeping in mind the requirement of the exam. \n                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                        In UPSC Law Optional Examination, the study of various legal provisions, case laws, authorities, judgments, etc. is done in a different way than that of the college examinations, but cramming all the Laws in both the scenarios is neither advisable nor feasible. Also, in college, more focus is generally on filling up the sheets; whereas, in Law Optional, your emphasis must be on the precise and crisp writing of the answer within the prescribed word limit. Therefore, in order to start your preparation journey, you need to keep the following points in mind: \n                                        "
                      ),
                      _c("br"),
                      _vm._v(" "),
                      _c("ol", { staticClass: "ml-5", attrs: { type: "I" } }, [
                        _c("li", [
                          _c("strong", [
                            _vm._v(
                              "\n                                                    Peruse the syllabus of the Law Optional furnished by the Union Public Service Commission:\n                                                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "\n                                                Detailed analysis of each and every heading and sub-heading of the syllabus of Law Optional is the first step towards the beginning of the preparation phase. It is always advisable that you paste the syllabus on the places of your sight, so that whenever you will move around that place, in some way or the other you will end up reading the syllabus time and again, which will further lead to stimulation of your mind. This will not let you lose your focus and you will always stay in the broad contours of the areas of the syllabus created by you, in your memory. \n                                            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("strong", [
                            _vm._v(
                              "\n                                                    Analysis of the college syllabi and Law Optional together:\n                                                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "\n                                               It's time to go back to the basics. You need to analyze the syllabus of your college as well as the syllabus of your Law Optional together. After analyzing both the syllabi, you will find that the maximum portion, which formulates the syllabus of Law Optional was taught to you, during your Law Degree. There is an overlapping of almost 70 to 80 percent of the syllabus. So, if you have studied diligently during your LL.B. course with due attention, this means that you have crossed the first milestone. After having the basic knowledge of the subjects to be studied in the Law Optional, now all you need is to devise a plan in accordance with the UPSC Examination Pattern. It is pertinent to note that even if there is an overlap in the syllabus, the approach toward answering the questions is way apart. Unlike college exams, UPSC Examination requires crisp and precise answers which follow the word limit as prescribed against each question. Therefore, here instead of mugging up and jotting down whatever you remember is not the requirement. Instead, you must create a mental synopsis of your answer and then write it within the word limit provided. \n                                            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("strong", [
                            _vm._v(
                              "\n                                                    Prudent analysis of Past Year Question Papers:\n                                                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "\n                                                In order to commence your preparation, start a prudent analysis of the Past Year Question Papers and make a separate register or notebook to jot down the list of frequently asked questions as well as the concepts.\n                                            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("strong", [
                            _vm._v(
                              "\n                                                    Move ahead with your UPSC Civil Services journey with Law Optional:\n                                                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "\n                                                At this stage, you will have an ample understanding of the way of preparing for the Law Optional. It's time to move forward with your journey. Prepare notes, synopsis, case summaries, list of relevant doctrines, case summaries, etc., and make a compendium of your notes, so that you are ready to peruse them as and when required. \n                                            "
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("h4", [
                      _vm._v(
                        "\n                                        PREPARATION STRATEGY FOR ASPIRANTS WITHOUT A LAW BACKGROUND \n                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                       At the outset, we must make it clear that having a law degree is not at all necessary for someone to ace law optional subject, after all, law is a very practical subject that relates to everyday happenings. Any aspirant who is preparing for their General Studies Paper is already well versed with contemporary issues and therefore while preparing for law optional there won't be any need of reading something special. \n                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                        Most of the topics under Law Optional are already covered under GS Paper due to the huge overlapping in them and thus even if the aspirant is not from a legal background, he will be able to understand and grasp the concepts very easily. As we have discussed earlier, the Indian Polity portion of General Studies Paper-II comprises the Constitutional Law. It is overlapping with a significant portion of Law Optional as well. Therefore, commencing the preparation for Law Optional with the Supreme Law of the land i.e., Constitutional Law becomes imperative. This will help you big time in the requisite understanding of the significant basic legal terms and building a premise for a better understanding of other Laws such as Administrative Laws, Law of Crimes, Law of Contract, Environmental Law, Law of Competition etc.\n                                        "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                                        It is a myth among aspirants that law optional is very tough and if you are not from a law background, you won’t be able to comprehend it. This is not true at all, and there are many people who aced at law optional without having any law degree, the biggest example being Jasbir Singh Bajaj Sir, who because of his interest and enthusiasm in law opted for law as his optional and ended up becoming an IAS Officer. \n                                        "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                                        If we talk about the strategy of approaching the Law Optional for the non-law graduates, it is somewhat different to a certain extent. When an aspirant has an interest in law, a lack of a LL.B. Degree won’t become a hindrance for him and therefore Jasbir Singh Bajaj Sir has recommended a different strategy for approaching the examination for those lacking a law degree.\n                                        "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                                        According to him, in order to approach the examination, an aspirant must take into consideration the following points:\n                                        "
                      ),
                      _c("br"),
                      _vm._v(" "),
                      _c("ol", { staticClass: "ml-5", attrs: { type: "I" } }, [
                        _c("li", [
                          _c("strong", [
                            _vm._v(
                              "\n                                                    Detailed perusal of the past year’s question papers:\n                                                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "\n                                                After the basic understanding of the laws, it becomes imperative to understand what type of questions are asked by the Union Public Service Commission in the examination. A deep perusal of the past year’s question papers becomes imperative at this juncture. The aspirants are hereby required to make a separate copy or a register and section it accordingly in different heads of the laws which are asked as per the syllabus, furnished by the UPSC. The concepts derived from the questions asked in the past years are required to be incorporated into the register along with the number of times they have been repeated.  \n                                            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("strong", [
                            _vm._v(
                              "\n                                                    Going through the syllabus of Law Optional:\n                                                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "\n                                               Detailed analysis of each and every heading and sub-heading of the syllabus of Law Optional is the second step. While perusing the syllabus, you will understand that there are some of the topics- which are new and you may also have never heard of them. There is no requirement of being anxious about this fact as such. You just need to read the past year’s papers in detail, corresponding it with the course material and books, that you have chosen for yourself, after detailed research.\nHowever, it is always advisable that you paste the syllabus on the places of your sight, so that whenever you will move around that place, in some way or the other you will end up reading the syllabus time and again, which will further lead to memorization of all the significant portions of the syllabus. This will not let you lose your focus and you will always stay in the broad contours of the areas of the syllabus created by you in your mind. We advise you to strictly adhere to the syllabus as furnished by UPSC from time to time. \n \n                                            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("strong", [
                            _vm._v(
                              "\n                                                    Start your preparation process:\n                                                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "\n                                                When you have decided that you want to finally go with the law as your optional, also have decided as to from which study material you want to study, now it’s time to start your preparation.\n                                                "
                          ),
                          _c("br"),
                          _vm._v(
                            "\n                                                Make a timetable and follow it with discipline, keeping in mind the need and requirements of the syllabus. \n                                                "
                          ),
                          _c("br"),
                          _vm._v(
                            "\n                                                While preparing for law optional, the aspirant must keep in mind that law is not about mugging up some legal provisions or case laws. Instead, law optional requires a thorough understanding of the important concepts which are provided in the law optional syllabus. Your knowledge of suitable case laws will not help you in succeeding if you are not able to apply your knowledge in accordance with the question asked in the examination. And for doing this, all you need to do is practice answer writing. For further elaboration on this point, let’s move on to the strategy which is common to both the aspirants, who may or may not possess a law degree.\n                                            "
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("h4", [
                      _vm._v(
                        "\n                                        COMMON STRATEGY FOR BOTH THE ASPIRANTS, WHO MAY OR MAY NOT POSSESS A LAW DEGREE\n                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\nThere are certain points that the aspirants, whether they are law graduates or non-law graduates must take into consideration during their preparation for UPSC Law optional. They are as follows:                                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c("br"),
                      _vm._v(" "),
                      _c("ol", { staticClass: "ml-5", attrs: { type: "I" } }, [
                        _c("li", [
                          _c("strong", [
                            _vm._v(
                              "\n                                                    Learning the Art of Answer Writing:\n                                                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "\n                                                Law Optional requires the basic format of answer writing, starting with the introduction, followed by the body, and finally the conclusion of the answer. In the Mains examination, the space provided to the aspirant is fixed in the answer booklet, and therefore it is imperative for the aspirant to structure their answer in accordance with the need of the question. We advise that for 20 marker questions, about 250 words; for 15 marker questions, about 200 words and lastly for 10 marker questions, about 150 words must be written by the aspirant to fetch maximum marks. Thus, the aspirant is advised to practice answer writing on a daily basis.  \n                                            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("strong", [
                            _vm._v(
                              "\n                                                    REVISE! REVISE! and REVISE!                                                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "\n                                               Revision is the key. Divide your syllabus into small topics and schedule frequent revisions in your timetable. Be disciplined and keep hustling. Hard work is the key. Constant revision of the Articles, Sections, Concepts of law, Case laws, etc. is also important in order to memorize them and have a better understanding.\n \n                                            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("strong", [
                            _vm._v(
                              "\n                                                    Frequent tests:\n                                                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "\n                                                Constant revision and giving frequent tests are important in order to stay in touch with the practice. Try to write an answer daily. Practice past year questions according to the concepts that you study. You can also join Test Series provided by BE N BY IAS Institute. We offer test series for Law Optional, which are especially designed to cater to the needs of Law Optional aspirants. With the daily answer practice, you will necessarily learn the ART OF WRITING good answers in the examinations which will help you to fetch good marks, not only in Law Optional, but also in the other General Studies Papers as well as the Essay Paper. \n                                               \n                                            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("strong", [
                            _vm._v(
                              "\n                                                    Constant update of the concepts and in the approach of writing the answers:\n                                                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "\n                                                The constant update of the concepts, case laws, and latest amendments in the Bare Acts is very important. Here comes the point where we would need a slight clarity as to how we should approach the answers of the Judicial Services Examination and the answers the of UPSC Law Optional Examination. In comparison to Judicial Service Examination, the answer writing of the Law Optional Examination is quite contemporary and more current developments based. Therefore, a subscription to the legal current affairs magazine becomes imperative. At BE N BY IAS, we also provide a Monthly Magazine for UPSC CSE, Law Optional in the name of “LEGAL UPDATES”, you can keep yourself updated by reading that magazine as well because we strictly adhere to the UPSC pattern and prepare our magazine according to the requirements of the UPSC aspirant.\n                                               \n                                            "
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("p", [
                    _c("strong", [
                      _vm._v(
                        "\n                                    Always remember- Self-belief and hard work will always earn you success! \n                                "
                      ),
                      _c("br"),
                      _c("br"),
                      _vm._v(
                        "\n                                Stay blessed!\n                                "
                      ),
                      _c("br"),
                      _c("br"),
                      _vm._v(
                        "\n                                All the very best!\n                                "
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);