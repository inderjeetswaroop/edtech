"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[423],{9922:(t,a,e)=>{e.d(a,{Z:()=>i});var s=e(3645),o=e.n(s)()((function(t){return t[1]}));o.push([t.id,".img-response[data-v-6c7c9c2e]{width:50px}",""]);const i=o},1780:(t,a,e)=>{e.d(a,{Z:()=>i});var s=e(3645),o=e.n(s)()((function(t){return t[1]}));o.push([t.id,".img-thumb[data-v-2d47d14f]{width:100px}",""]);const i=o},9089:(t,a,e)=>{e.d(a,{Z:()=>o});Vue.component("addimage-input",e(1319).Z);const s={data:function(){return{image:"",fPath:"",catname:"",keys:"",descrip:"",error:[],successmsg:"",catList:{},parentCat:"0",imageList:""}},created:function(){var t=this;axios.get("category-raw-list").then((function(a){return t.catList=a.data})).catch((function(t){return console.log(t)}))},methods:{imglist:function(t){this.imageList=t.src},upload:function(){var t=this,a=new FormData;a.append("mainImage",this.imageList),a.append("catname",this.catname),a.append("descrip",this.descrip),a.append("keyword",this.keys),a.append("pCat",this.parentCat),axios.post("add-category",a).then((function(a){t.$emit("catAdded",a),t.error="",t.catname="",t.keys="",t.descrip="",t.parentCat="0",t.imageList="",t.successmsg="Category added successfully"})).catch((function(a){t.error=a.response.data.errors,console.log(t.error)}))}}};const o=(0,e(1900).Z)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),e("div",{staticClass:"modal-body"},[e("h3",{staticClass:"text-success"},[t._v(t._s(t.successmsg))]),t._v(" "),e("form",{staticClass:"needs-validation",on:{submit:function(a){return a.preventDefault(),t.upload(a)}}},[e("div",{staticClass:"form"},[e("div",{staticClass:"form-group mb-0"},[e("label",{staticClass:"mb-1",attrs:{for:"validationCustom02"}},[t._v("Category Name :")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.catname,expression:"catname"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.catname},on:{input:function(a){a.target.composing||(t.catname=a.target.value)}}}),t._v(" "),t.error?e("div",[e("ul",t._l(t.error.catname,(function(a){return e("li",{key:a,staticClass:"text-danger"},[t._v("\n                                         "+t._s(a)+"\n                                    ")])})),0)]):t._e()]),t._v(" "),e("div",{staticClass:"form-group mb-0"},[e("label",{staticClass:"mb-1",attrs:{for:"validationCustom02"}},[t._v("Parent Category :")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.parentCat,expression:"parentCat"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.parentCat=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"0"}},[t._v("Select Parent Category")]),t._v(" "),t._l(t.catList,(function(a){return e("option",{key:a.id,attrs:{"v-show":t.catList},domProps:{value:a.id}},[t._v("\n                                    "+t._s(a.catname)+"\n                                ")])}))],2)]),t._v(" "),e("div",{staticClass:"form-group mb-0"},[e("label",{staticClass:"mb-1",attrs:{for:"validationCustom02"}},[t._v("Seo Keyword:")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.keys,expression:"keys"}],staticClass:"form-control",attrs:{rows:"2",placeholder:"SEO Keywords"},domProps:{value:t.keys},on:{input:function(a){a.target.composing||(t.keys=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group mb-0"},[e("label",{staticClass:"mb-1",attrs:{for:"validationCustom02"}},[t._v("Seo Description:")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.descrip,expression:"descrip"}],staticClass:"form-control",attrs:{rows:"4",placeholder:"SEO Description"},domProps:{value:t.descrip},on:{input:function(a){a.target.composing||(t.descrip=a.target.value)}}})]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"form-group"},[e("p",[t._v("Category Image ")]),t._v(" "),e("addimage-input",{attrs:{imagecount:1},on:{getImageData:t.imglist}}),t._v(" "),t.imageList?e("img",{staticClass:"float-right",attrs:{src:t.imageList,height:"70",width:"70"}}):t._e()],1)]),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Save")])])]),t._v(" "),t._m(1)])])])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title f-w-600",attrs:{id:"exampleModalLabel"}},[t._v("Add Product Category")]),t._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],!1,null,"11a94ec7",null).exports},4855:(t,a,e)=>{e.r(a),e.d(a,{default:()=>l});Vue.component("catadd-modal",e(9089).Z),Vue.component("catedit-modal",e(7681).Z),Vue.component("delete-modal",e(3927).Z),Vue.component("singcatdetail",e(5242).Z);const s={data:function(){return{counter:1,localhos:"http://localhost/myCom/storage/app/public/",catList:{},singCatDetail:{},categoryid:""}},created:function(){var t=this;axios.get("/course-category-setting/category-raw-list").then((function(a){return t.catList=a.data})).catch((function(t){return console.log(t)}))},methods:{refreshCatlist:function(t){this.catList=t.data},catidToChild:function(t){var a=this;axios.get("/course-category-setting/fetch-single-category/"+t).then((function(t){return a.singCatDetail=t.data})).catch((function(t){return console.log(t)}))},deleteCatoryr:function(t){this.categoryid=t},changeCatState:function(t){var a=this;axios.get("/course-category-setting/change-category-state/"+t).then((function(t){return a.catList=t.data})).catch((function(t){return console.log(t)}))}}};var o=e(3379),i=e.n(o),r=e(9922),n={insert:"head",singleton:!1};i()(r.Z,n);r.Z.locals;const l=(0,e(1900).Z)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"btn-popup pull-right"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-original-title":"test","data-target":"#exampleModal"}},[t._v("Add Category")]),t._v(" "),e("catadd-modal",{on:{catAdded:t.refreshCatlist}}),t._v(" "),e("catedit-modal",{attrs:{sCatdata:t.singCatDetail},on:{catAdded:t.refreshCatlist}}),t._v(" "),e("delete-modal",{attrs:{catid:t.categoryid},on:{catAdded:t.refreshCatlist}})],1),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table"},[t._m(0),t._v(" "),e("tbody",t._l(t.catList,(function(a,s){return e("tr",{key:s},[e("td",[t._v(t._s(s+1))]),t._v(" "),e("td",[t._v(t._s(a.catname)+" ")]),t._v(" "),e("td",[0==a.parent_category||""==a.parent_category?e("p",[t._v("\n                             No Parent\n                         ")]):e("p",[e("singcatdetail",{attrs:{cid:a.parent_category}})],1)]),t._v(" "),e("td",[e("img",{staticClass:"img-response",attrs:{src:a.catimage,alt:""}})]),t._v(" "),e("td",[1==a.status?e("span",{staticClass:"badge badge-success"},[t._v("Active")]):e("span",{staticClass:"badge badge-danger"},[t._v("De-Actived")]),t._v(" "),e("button",{staticClass:"btn btn-link ",attrs:{type:"button"},on:{click:function(e){return t.changeCatState(a.id)}}},[t._v("Change Status")])]),t._v(" "),e("td",[e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-info btn-xs",attrs:{type:"button","data-toggle":"modal","data-original-title":"test","data-target":"#editModal"},on:{click:function(e){return t.catidToChild(a.id)}}},[t._v("Edit")]),t._v(" "),e("button",{staticClass:"btn btn-danger btn-xs",attrs:{type:"button","data-target":"#deleteModal","data-toggle":"modal"},on:{click:function(e){return t.deleteCatoryr(a.id)}}},[t._v("Delete")])])])])})),0)])])])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("Sr. No")]),t._v(" "),e("th",[t._v("Category Name")]),t._v(" "),e("th",[t._v("Parent Category")]),t._v(" "),e("th",[t._v("Cat Img")]),t._v(" "),e("th",[t._v("Status")]),t._v(" "),e("th",[t._v("Action")])])])}],!1,null,"6c7c9c2e",null).exports},3927:(t,a,e)=>{e.d(a,{Z:()=>o});const s={props:["catid"],methods:{deleteCatnow:function(t){var a=this;axios.get("delete-category/"+t).then((function(t){return a.$emit("catAdded",t)})).catch((function(t){return console.log(t)}))}}};const o=(0,e(1900).Z)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal fade",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),e("div",{staticClass:"modal-body"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(a){return t.deleteCatnow(t.catid)}}},[t._v("Yes Delete")]),t._v(" "),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancel")])])])])])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title f-w-600",attrs:{id:"exampleModalLabel"}},[t._v("Are you sure to delete this category? ")]),t._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],!1,null,null,null).exports},7681:(t,a,e)=>{e.d(a,{Z:()=>l});Vue.component("addimage-input",e(1319).Z);const s={props:["sCatdata"],data:function(){return{localhos:"http://localhost/myCom/storage/app/public/",image:this.sCatdata.catimage,fPath:"",error:[],successmsg:"",catList:{},parentCat:"0",imageList:""}},created:function(){var t=this;axios.get("category-raw-list").then((function(a){t.catList=a.data,t.parentCat=catList.parent_category,t.imageList=catList.catimage})).catch((function(t){return console.log(t)}))},methods:{imglist:function(t){this.imageList=t.src},upload:function(){var t=this,a=new FormData;a.append("mainImage",this.imageList),a.append("catname",this.sCatdata.catname),a.append("descrip",this.sCatdata.description),a.append("keyword",this.sCatdata.keywords),a.append("pCat",this.sCatdata.parent_category),a.append("catId",this.sCatdata.id),axios.post("edit-category-data",a).then((function(a){t.$emit("catAdded",a),t.error="",t.catname="",t.keys="",t.descrip="",t.parentCat="0",t.imageList="",t.successmsg="Category updated successfully"})).catch((function(a){t.error=a.response.data.errors,console.log(t.error)}))}}};var o=e(3379),i=e.n(o),r=e(1780),n={insert:"head",singleton:!1};i()(r.Z,n);r.Z.locals;const l=(0,e(1900).Z)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal fade",attrs:{id:"editModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),e("div",{staticClass:"modal-body"},[e("h3",{staticClass:"text-success"},[t._v(t._s(t.successmsg))]),t._v(" "),e("form",{staticClass:"needs-validation",attrs:{enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),t.upload(a)}}},[e("div",{staticClass:"form"},[e("div",{staticClass:"form-group mb-0"},[e("label",{staticClass:"mb-1",attrs:{for:"validationCustom02"}},[t._v("Category Name :")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.sCatdata.catname,expression:"sCatdata.catname"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.sCatdata.catname},on:{input:function(a){a.target.composing||t.$set(t.sCatdata,"catname",a.target.value)}}}),t._v(" "),t.error?e("div",[e("ul",t._l(t.error.catname,(function(a){return e("li",{key:a,staticClass:"text-danger"},[t._v("\n                                         "+t._s(a)+"\n                                    ")])})),0)]):t._e()]),t._v(" "),e("div",{staticClass:"form-group mb-0"},[e("label",{staticClass:"mb-1",attrs:{for:"validationCustom02"}},[t._v("Parent Category :")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.parentCat,expression:"parentCat"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.parentCat=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"0"}},[t._v("Select Parent Category")]),t._v(" "),t._l(t.catList,(function(a){return e("option",{key:a.id,domProps:{value:a.id}},[t._v("\n                                    "+t._s(a.catname)+"\n                                ")])}))],2)]),t._v(" "),e("div",{staticClass:"form-group mb-0"},[e("label",{staticClass:"mb-1",attrs:{for:"validationCustom02"}},[t._v("Seo Keyword:")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sCatdata.keywords,expression:"sCatdata.keywords"}],staticClass:"form-control",attrs:{rows:"2",placeholder:"SEO Keywords"},domProps:{value:t.sCatdata.keywords},on:{input:function(a){a.target.composing||t.$set(t.sCatdata,"keywords",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group mb-0"},[e("label",{staticClass:"mb-1",attrs:{for:"validationCustom02"}},[t._v("Seo Description:")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sCatdata.description,expression:"sCatdata.description"}],staticClass:"form-control",attrs:{rows:"4",placeholder:"SEO Description"},domProps:{value:t.sCatdata.description},on:{input:function(a){a.target.composing||t.$set(t.sCatdata,"description",a.target.value)}}})]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"form-group"},[e("addimage-input",{attrs:{imagecount:1},on:{getImageData:t.imglist}}),t._v(" "),t.imageList?e("img",{staticClass:"float-right",attrs:{src:t.imageList,height:"70",width:"70"}}):t._e()],1)]),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Save")])])]),t._v(" "),t._m(1)])])])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title f-w-600",attrs:{id:"exampleModalLabel"}},[t._v("Edit Product Category  ")]),t._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],!1,null,"2d47d14f",null).exports}}]);