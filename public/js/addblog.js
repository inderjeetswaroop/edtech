"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["addblog"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addBlogComp.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addBlogComp.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Multiselect: (vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default())
  },
  data: function data() {
    return {
      articletitle: "",
      bContent: "",
      category: "",
      catList: {},
      mainimage: "",
      msgcolor: "",
      successmsg: "",
      mTitle: "",
      mKeywords: "",
      pdfLink: "",
      youtubeLink: "",
      publishdate: "",
      mDescription: "",
      error: [],
      artTags: [],
      options: [],
      artTagValues: [],
      artSubs: [],
      optionsSub: [],
      artSubValues: []
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/course-dashboard/blogs-setting/blog-category-list/").then(function (response) {
      return _this.catList = response.data;
    })["catch"](function (error) {
      return console.log(error);
    }); //All tags

    axios.get("/course-dashboard/blogs-setting/tags-list/").then(function (response) {
      return _this.options = response.data;
    })["catch"](function (error) {
      return console.log(error);
    }); //All tags
    //All Subjects

    axios.get("/course-dashboard/blogs-setting/subject-list/").then(function (response) {
      return _this.optionsSub = response.data;
    })["catch"](function (error) {
      return console.log(error);
    }); //All Subjects
    // check parameters

    if (this.$route.params.catId) {
      this.category = this.$route.params.catId;
    } else {
      this.category = "";
    } // check parameters    

  },
  methods: {
    imglist: function imglist(response) {
      this.mainimage = response.src;
    },
    addArticle: function addArticle() {
      var _this2 = this;

      this.msgcolor = "text-success";
      this.successmsg = "Please Wait..";
      var formdata = new FormData();
      formdata.append("artName", this.articletitle);
      formdata.append("artCat", this.category);
      formdata.append("artImage", this.mainimage);
      formdata.append("artcontent", this.bContent);
      formdata.append("mTitle", this.mTitle);
      formdata.append("mKeywords", this.mKeywords);
      formdata.append("mDescription", this.mDescription);
      formdata.append("artTags", this.artTagValues);
      formdata.append("artsubjects", this.artSubValues);
      formdata.append("pdfLink", this.pdfLink);
      formdata.append("youtubeLink", this.youtubeLink);
      formdata.append("publishdate", this.publishdate);
      axios.post("/course-dashboard/blogs-setting/add-blog-data", formdata).then(function (data) {
        // console.log(data.data);
        _this2.articletitle = "";
        _this2.category = "";
        _this2.mainimage = "";
        _this2.bContent = "";
        _this2.mTitle = "";
        _this2.mDescription = "";
        _this2.mKeywords = "";
        _this2.options = [];
        _this2.successmsg = "Articles added successfully";
        _this2.error = "";
      })["catch"](function (error) {
        _this2.msgcolor = "text-danger";
        _this2.successmsg = "Please Fix error";
        _this2.error = error.response.data.errors; // console.log(this.error);
      });
    },
    addTag: function addTag(query) {
      var _this3 = this;

      // alert(query);
      var formdata = new FormData();
      formdata.append("newTag", query);
      axios.post("/course-dashboard/blogs-setting/tags-search-add", formdata).then(function (data) {
        _this3.options = data.data;
      })["catch"](function (error) {
        console.log(error.response.data.errors);
      });
    },
    getTagsValues: function getTagsValues(e) {
      this.artTagValues.push(e.name); // console.log(e.name);
    },
    removeTagsValues: function removeTagsValues(e) {
      var index = this.artTagValues.indexOf(e.name);

      if (index !== -1) {
        this.artTagValues.splice(index, 1);
      }
    },
    addSubs: function addSubs(query) {
      var _this4 = this;

      // alert(query);
      var formdata = new FormData();
      formdata.append("newSub", query);
      axios.post("/course-dashboard/blogs-setting/blog-subject-add", formdata).then(function (data) {
        _this4.optionsSub = data.data;
      })["catch"](function (error) {
        console.log(error.response.data.errors);
      });
    },
    getSubsValues: function getSubsValues(e) {
      this.artSubValues.push(e.name); // console.log(e.name);
    },
    removeSubsValues: function removeSubsValues(e) {
      var index = this.artSubValues.indexOf(e.name);

      if (index !== -1) {
        this.artSubValues.splice(index, 1);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/addBlogComp.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/addBlogComp.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addBlogComp_vue_vue_type_template_id_508af0d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addBlogComp.vue?vue&type=template&id=508af0d2&scoped=true& */ "./resources/js/components/addBlogComp.vue?vue&type=template&id=508af0d2&scoped=true&");
/* harmony import */ var _addBlogComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addBlogComp.vue?vue&type=script&lang=js& */ "./resources/js/components/addBlogComp.vue?vue&type=script&lang=js&");
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _addBlogComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addBlogComp_vue_vue_type_template_id_508af0d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _addBlogComp_vue_vue_type_template_id_508af0d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "508af0d2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/addBlogComp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/addBlogComp.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/addBlogComp.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addBlogComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addBlogComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addBlogComp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addBlogComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/addBlogComp.vue?vue&type=template&id=508af0d2&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/addBlogComp.vue?vue&type=template&id=508af0d2&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addBlogComp_vue_vue_type_template_id_508af0d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addBlogComp_vue_vue_type_template_id_508af0d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addBlogComp_vue_vue_type_template_id_508af0d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addBlogComp.vue?vue&type=template&id=508af0d2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addBlogComp.vue?vue&type=template&id=508af0d2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addBlogComp.vue?vue&type=template&id=508af0d2&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/addBlogComp.vue?vue&type=template&id=508af0d2&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      "form",
      {
        staticClass: "needs-validation add-product-form",
        attrs: { novalidate: "" },
        on: {
          submit: function ($event) {
            $event.preventDefault()
            return _vm.addArticle($event)
          },
        },
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c("label", {}, [_vm._v("Article Name")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.articletitle,
                expression: "articletitle",
              },
            ],
            staticClass: "form-control ",
            attrs: { type: "text", placeholder: "Enter Course name or title" },
            domProps: { value: _vm.articletitle },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.articletitle = $event.target.value
              },
            },
          }),
          _vm._v(" "),
          _vm.error
            ? _c("div", [
                _c(
                  "ul",
                  _vm._l(_vm.error.artName, function (err) {
                    return _c("li", { key: err, staticClass: "text-danger" }, [
                      _vm._v(
                        "\n                                            " +
                          _vm._s(err) +
                          "\n                                        "
                      ),
                    ])
                  }),
                  0
                ),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", {}, [_vm._v("Publish Date ")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.publishdate,
                expression: "publishdate",
              },
            ],
            staticClass: "form-control ",
            attrs: { type: "date", placeholder: "Enter Course name or title" },
            domProps: { value: _vm.publishdate },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.publishdate = $event.target.value
              },
            },
          }),
          _vm._v(" "),
          _vm.error
            ? _c("div", [
                _c(
                  "ul",
                  _vm._l(_vm.error.publishdate, function (err) {
                    return _c("li", { key: err, staticClass: "text-danger" }, [
                      _vm._v(
                        "\n                                            " +
                          _vm._s(err) +
                          "\n                                        "
                      ),
                    ])
                  }),
                  0
                ),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-group" },
          [
            _c("label", {}, [_vm._v("Tags")]),
            _vm._v(" "),
            _c("multiselect", {
              attrs: {
                "tag-placeholder": "Add this as new tag",
                placeholder: "Search or add a tag",
                label: "name",
                "track-by": "id",
                options: _vm.options,
                "close-on-select": false,
                "clear-on-select": false,
                multiple: true,
                taggable: true,
              },
              on: {
                tag: _vm.addTag,
                select: _vm.getTagsValues,
                remove: _vm.removeTagsValues,
              },
              model: {
                value: _vm.artTags,
                callback: function ($$v) {
                  _vm.artTags = $$v
                },
                expression: "artTags",
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-group" },
          [
            _c("label", {}, [_vm._v("Subject")]),
            _vm._v(" "),
            _c("multiselect", {
              attrs: {
                "tag-placeholder": "Add this as new tag",
                placeholder: "Search or add a tag",
                label: "name",
                "track-by": "id",
                options: _vm.optionsSub,
                "close-on-select": false,
                "clear-on-select": false,
                multiple: true,
                taggable: true,
              },
              on: {
                tag: _vm.addSubs,
                select: _vm.getSubsValues,
                remove: _vm.removeSubsValues,
              },
              model: {
                value: _vm.artSubs,
                callback: function ($$v) {
                  _vm.artSubs = $$v
                },
                expression: "artSubs",
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-9" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Article Category")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.category,
                      expression: "category",
                    },
                  ],
                  staticClass: "form-control",
                  on: {
                    change: [
                      function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.category = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      function ($event) {
                        return _vm.prcats(_vm.event)
                      },
                    ],
                  },
                },
                [
                  _c("option", { attrs: { value: "" } }, [
                    _vm._v("Select Categories :"),
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.catList, function (cList) {
                    return _c(
                      "option",
                      { key: cList.id, domProps: { value: cList.id } },
                      [_vm._v(_vm._s(cList.catName))]
                    )
                  }),
                ],
                2
              ),
            ]),
            _vm._v(" "),
            _vm.error
              ? _c("div", [
                  _c(
                    "ul",
                    _vm._l(_vm.error.artCat, function (err) {
                      return _c(
                        "li",
                        { key: err, staticClass: "text-danger" },
                        [
                          _vm._v(
                            "\n                                                " +
                              _vm._s(err) +
                              "\n                                            "
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
          _c("div", { staticClass: "col-md-3" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", [_vm._v("Article Image")]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("addimage-input", {
                  attrs: { imagecount: 1 },
                  on: { getImageData: _vm.imglist },
                }),
                _vm._v(" "),
                _vm.mainimage
                  ? _c("img", {
                      attrs: { src: _vm.mainimage, height: "70", width: "70" },
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.error
                  ? _c("div", [
                      _c(
                        "ul",
                        _vm._l(_vm.error.artImage, function (err) {
                          return _c(
                            "li",
                            { key: err, staticClass: "text-danger" },
                            [
                              _vm._v(
                                "\n                                                " +
                                  _vm._s(err) +
                                  "\n                                            "
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
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", { staticClass: "mb-0" }, [
                  _vm._v("Article Content"),
                ]),
                _vm._v(" "),
                _c("tinymce", {
                  staticClass: "form-control",
                  attrs: { id: "d1" },
                  model: {
                    value: _vm.bContent,
                    callback: function ($$v) {
                      _vm.bContent = $$v
                    },
                    expression: "bContent",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _vm.error
              ? _c("div", [
                  _c(
                    "ul",
                    _vm._l(_vm.error.artcontent, function (err) {
                      return _c(
                        "li",
                        { key: err, staticClass: "text-danger" },
                        [
                          _vm._v(
                            "\n                                                " +
                              _vm._s(err) +
                              "\n                                            "
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
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", {}, [_vm._v("PDF Link(Optional)")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.pdfLink,
                    expression: "pdfLink",
                  },
                ],
                staticClass: "form-control ",
                attrs: { type: "text", placeholder: "PDF Link" },
                domProps: { value: _vm.pdfLink },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.pdfLink = $event.target.value
                  },
                },
              }),
              _vm._v(" "),
              _vm.error
                ? _c("div", [
                    _c(
                      "ul",
                      _vm._l(_vm.error.pdfLink, function (err) {
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
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", {}, [_vm._v("Youtube Embed Video link(Optional)")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.youtubeLink,
                    expression: "youtubeLink",
                  },
                ],
                staticClass: "form-control ",
                attrs: {
                  type: "text",
                  placeholder: "Youtube Embed Video link",
                },
                domProps: { value: _vm.youtubeLink },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.youtubeLink = $event.target.value
                  },
                },
              }),
              _vm._v(" "),
              _vm.error
                ? _c("div", [
                    _c(
                      "ul",
                      _vm._l(_vm.error.youtubeLink, function (err) {
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
            ]),
          ]),
          _vm._v(" "),
          _c("br"),
          _c("hr"),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", {}, [_vm._v("Meta Title")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.mTitle,
                    expression: "mTitle",
                  },
                ],
                staticClass: "form-control ",
                attrs: { type: "text", placeholder: "Enter Meta Title" },
                domProps: { value: _vm.mTitle },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.mTitle = $event.target.value
                  },
                },
              }),
              _vm._v(" "),
              _vm.error
                ? _c("div", [
                    _c(
                      "ul",
                      _vm._l(_vm.error.mTitle, function (err) {
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
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", {}, [_vm._v("Meta Keywords")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.mKeywords,
                    expression: "mKeywords",
                  },
                ],
                staticClass: "form-control ",
                attrs: { type: "text", placeholder: "Enter Meta Keywords" },
                domProps: { value: _vm.mKeywords },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.mKeywords = $event.target.value
                  },
                },
              }),
              _vm._v(" "),
              _vm.error
                ? _c("div", [
                    _c(
                      "ul",
                      _vm._l(_vm.error.mKeywords, function (err) {
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
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", {}, [_vm._v("Meta Description")]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.mDescription,
                    expression: "mDescription",
                  },
                ],
                staticClass: "form-control",
                attrs: { rows: "3", placeholder: "Enter Meta Description" },
                domProps: { value: _vm.mDescription },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.mDescription = $event.target.value
                  },
                },
              }),
              _vm._v(" "),
              _vm.error
                ? _c("div", [
                    _c(
                      "ul",
                      _vm._l(_vm.error.mDescription, function (err) {
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
          ]),
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-success", attrs: { type: "submit" } },
          [_vm._v("+Add Article")]
        ),
        _vm._v(" "),
        _c("h4", { class: _vm.msgcolor }, [_vm._v(_vm._s(_vm.successmsg))]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("h3", [_vm._v("SEO Enteries")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);