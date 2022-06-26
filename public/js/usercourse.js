"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[292],{4362:(t,s,e)=>{e.d(s,{Z:()=>r});var a=e(3645),n=e.n(a)()((function(t){return t[1]}));n.push([t.id,'.timerHead{font-size:20px}.vuejs-countdown{margin:0;padding:0}.vuejs-countdown li{display:inline-block;margin:0 8px;position:relative;text-align:center}.vuejs-countdown li p{margin:0}.vuejs-countdown li:after{content:":";font-size:32px;position:absolute;right:-13px;top:0}.vuejs-countdown li:first-of-type{margin-left:0}.vuejs-countdown li:last-of-type{margin-right:0}.vuejs-countdown li:last-of-type:after{content:""}.vuejs-countdown .digit{font-size:32px;font-weight:600;line-height:1.4;margin-bottom:0}.vuejs-countdown .text{font-size:10px;margin-bottom:0;text-transform:uppercase}@media screen and (max-width:768px){.vuejs-countdown .digit{font-size:20px}}',""]);const r=n},1153:(t,s,e)=>{e.d(s,{Z:()=>r});var a=e(3645),n=e.n(a)()((function(t){return t[1]}));n.push([t.id,".timerHead[data-v-88ff9132]{font-size:22px;margin-right:44px}html[data-v-88ff9132]{scroll-behavior:smooth}.test-title[data-v-88ff9132]{color:#000;text-transform:capitalize}.text-black[data-v-88ff9132]{color:#000}.fullpage[data-v-88ff9132]{background:#000000ad;bottom:0;height:100%;left:0;position:fixed;right:0;top:0;width:100%;z-index:9}.center-text[data-v-88ff9132]{align-items:center;color:#fff;display:flex;justify-content:center;min-height:100vh;text-align:center}.testCountdown[data-v-88ff9132]{background:#fff;bottom:0;position:fixed;text-align:center;width:100%;z-index:9}@media screen and (max-width:768px){.timerHead[data-v-88ff9132]{font-size:14px}}",""]);const r=n},7232:(t,s,e)=>{e.d(s,{Z:()=>r});var a=e(3645),n=e.n(a)()((function(t){return t[1]}));n.push([t.id,".progress[data-v-26533b18]{height:2rem}.progress-bar-success[data-v-26533b18]{background-color:#5cb85c}.progress-bar-warning[data-v-26533b18]{background-color:#f0ad4e}.progress-bar-danger[data-v-26533b18]{background-color:#d9534f}.fullpage[data-v-26533b18]{background:#000000ad;bottom:0;height:100%;left:0;position:fixed;right:0;top:0;width:100%;z-index:9}.center-text[data-v-26533b18]{align-items:center;color:#fff;display:flex;justify-content:center;min-height:100vh;text-align:center}.scoreboard[data-v-26533b18]{height:200px}",""]);const r=n},8956:(t,s,e)=>{e.d(s,{Z:()=>r});var a=e(3645),n=e.n(a)()((function(t){return t[1]}));n.push([t.id,".courser-item-meta-wrap[data-v-57894f8c]{color:red}",""]);const r=n},5060:(t,s,e)=>{e.d(s,{Z:()=>r});var a=e(3645),n=e.n(a)()((function(t){return t[1]}));n.push([t.id,".videoFrame[data-v-a4879f88]{height:550px}",""]);const r=n},5502:(t,s,e)=>{e.d(s,{Z:()=>r});var a=e(3645),n=e.n(a)()((function(t){return t[1]}));n.push([t.id,".fullpage[data-v-95d808ba]{background:#00000093;bottom:0;height:100%;left:0;position:fixed;right:0;top:0;width:100%;z-index:99999}.pdfArea[data-v-95d808ba]{height:800px;width:100%}.generic-accordion .card-header[data-v-95d808ba]{padding:16px 10px}",""]);const r=n},5706:(t,s,e)=>{e.d(s,{Z:()=>n});Vue.component("chapClassList",e(6202).Z);const a={props:["uCourseId","keyId","corsname","cType"],data:function(){return{chapterlist:{},loadmsg:""}},created:function(){var t=this;this.loadmsg="Please wait....",axios.get("/course-dashboard/course-chapter/single-course-all-chapter-list/"+this.uCourseId).then((function(s){return t.chapterlist=s.data})).catch((function(t){return console.log(t)})),this.loadmsg=""}};const n=(0,e(1900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("h3",[t._v(t._s(t.loadmsg))]),t._v(" "),t._l(t.chapterlist,(function(s,a){return e("div",{key:a,staticClass:"card"},[e("div",{staticClass:"card-header",attrs:{id:"headingOne"}},[1==t.cType?e("button",{staticClass:"btn btn-link",attrs:{type:"button","data-toggle":"collapse","data-target":"#"+t.keyId+"collapse"+a,"aria-expanded":"0"==a,"aria-controls":"collapseOne"}},[e("i",{staticClass:"la la-angle-down"}),t._v(" "),e("i",{staticClass:"la la-angle-up"}),t._v(" "),e("span",{staticClass:"fs-15 py-2 px-3"},[e("a",{staticClass:"fs-18 text-black",attrs:{href:"#"}},[t._v("\n                        "+t._s(s.chaptername)+" "),e("br")])])]):e("router-link",{attrs:{to:"/course/"+t.corsname+"/"+s.chaptername.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")+"/"+t.uCourseId+"/"+s.id}},[e("span",{staticClass:"fs-15 p-4 text-secondary"},[t._v(t._s(s.chaptername)+" "),e("br")])])],1),t._v(" "),1==t.cType?e("div",{staticClass:"collapse",class:"0"==a?"show":"",attrs:{id:t.keyId+"collapse"+a,"aria-labelledby":"headingOne","data-parent":"#accordionCourseExample",for:a++}},[e("chap-class-list",{attrs:{courseId:s.courseId,chapterId:s.id,courseName:t.corsname}})],1):t._e()])}))],2)}),[],!1,null,null,null).exports},5465:(t,s,e)=>{e.r(s),e.d(s,{default:()=>n});Vue.component("user-my-course",e(5688).Z);const a={data:function(){return{topthree:{}}},beforeCreate:function(){this.$Progress.start(),this.$session.has("userId")&&this.$session.exists()||this.$router.push("/user-login")},created:function(){var t=this;this.$Progress.finish(),axios.get("/my-course-list").then((function(s){return t.topthree=s.data})).catch((function(t){return console.log(t)}))}};const n=(0,e(1900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._m(0),t._v(" "),e("section",{staticClass:"my-courses-area pt-30px pb-90px"},[e("div",{staticClass:"container"},[e("div",{staticClass:"my-course-content-wrap"},[e("div",{staticClass:"my-course-cards pt-40px"},[t.topthree.length>0?e("div",{staticClass:"row"},t._l(t.topthree,(function(t){return e("user-my-course",{key:t.id,attrs:{courseInfo:t}})})),1):e("div",{staticClass:"row text-center"},[e("div",{staticClass:"col-md-12"},[e("h3",[t._v("No course found")]),t._v(" "),e("router-link",{staticClass:"btn theme-btn",attrs:{to:"/course-list"}},[t._v("Explore All Course "),e("i",{staticClass:"la la-arrow-right icon ml-1"})])],1)])])])])])])}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"breadcrumb-area py-5 bg-white pattern-bg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"breadcrumb-content"},[e("div",{staticClass:"section-heading"},[e("h2",{staticClass:"section__title"},[t._v("My Courses")])])])])])}],!1,null,null,null).exports},8556:(t,s,e)=>{e.d(s,{Z:()=>l});var a=null;const n={name:"vuejsCountDown",props:{deadline:{type:String},end:{type:String},stop:{type:Boolean}},data:function(){return{now:Math.trunc((new Date).getTime()/1e3),date:null,diff:0}},created:function(){var t=this;if(!this.deadline&&!this.end)throw new Error("Missing props 'deadline' or 'end'");var s=this.deadline?this.deadline:this.end;if(this.date=Math.trunc(Date.parse(s.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline' or 'end'");a=setInterval((function(){t.now=Math.trunc((new Date).getTime()/1e3)}),1e3)},computed:{seconds:function(){return Math.trunc(this.diff)%60},minutes:function(){return Math.trunc(this.diff/60)%60},hours:function(){return Math.trunc(this.diff/60/60)%24},days:function(){return Math.trunc(this.diff/60/60/24)}},watch:{now:function(t){this.diff=this.date-this.now,(this.diff<=0||this.stop)&&(this.diff=0,clearInterval(a),this.$emit("timerEnd","finished"))}},filters:{twoDigits:function(t){return t.toString().length<=1?"0"+t.toString():t.toString()}},destroyed:function(){clearInterval(a)}};var r=e(3379),i=e.n(r),o=e(4362),c={insert:"head",singleton:!1};i()(o.Z,c);o.Z.locals;const l=(0,e(1900).Z)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"vuejs-countdown"},[t.days>0?e("li",[e("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.days)))]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.days>1?"days":"day"))])]):t._e(),t._v(" "),e("li",[e("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.hours)))]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.hours>1?"hours":"hour"))])]),t._v(" "),e("li",[e("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.minutes)))]),t._v(" "),e("p",{staticClass:"text"},[t._v("min")])]),t._v(" "),e("li",[e("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.seconds)))]),t._v(" "),e("p",{staticClass:"text"},[t._v("Sec")])])])}),[],!1,null,null,null).exports},573:(t,s,e)=>{e.d(s,{Z:()=>c});Vue.component("my-countdown",e(8556).Z);const a={props:["chapId","testName"],data:function(){return{getClassInfo:{},testanswer:[],loadDisplayed:"none",testAllowed:!0,usrAttempt:"",totalAttempt:"",instructionRead:!1,testInstruction:"",testSchedule:"",testReadyState:0,testTime:"",testing:"Sun Feb 13 2022 13:32:00 "}},beforeCreate:function(){},created:function(){var t=this;this.loadDisplayed="block",axios.get("/user-test-attempts/"+this.chapId).then((function(s){if(t.loadDisplayed="none","success"==s.data.msg){t.usrAttempt=s.data.userAttemptscounts,t.totalAttempt=s.data.totalTestAttempts,t.testInstruction=s.data.testInstruction,t.testSchedule=s.data.testSchedule,t.testReadyState=s.data.testReadytoStart;var e=new Date;t.testing=e.setHours(e.getHours()+2),t.testTime=new Date(t.testing).toString().split("GMT")[0],s.data.totalTestAttempts>s.data.userAttemptscounts?(t.testAllowed=!0,axios.get("/user-test-list/"+t.chapId).then((function(s){t.getClassInfo=s.data})).catch((function(t){return console.log(t)}))):t.testAllowed=!1}else t.$router.push("/user-login")})).catch((function(t){return console.log(t)}))},methods:{submitanswer:function(){var t=this;this.loadDisplayed="block";var s=new FormData;s.append("chapterId",this.chapId),s.append("submitedAns",this.testanswer),axios.post("/submit-test-answer",s).then((function(s){t.$router.push("/test-result/"+t.testName+"/"+t.chapId+"/"+s.data.submitTest)})).catch((function(s){console.log(s),t.loadDisplayed="none"}))},startTest:function(){this.instructionRead=!0},testFinish:function(){alert("File has submitted"),this.submitanswer()},uncheckMe:function(t){1==t.target.checked&&(t.target.checked=!1)}}};var n=e(3379),r=e.n(n),i=e(1153),o={insert:"head",singleton:!1};r()(i.Z,o);i.Z.locals;const c=(0,e(1900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bg-light"},[e("div",{staticClass:"text-center mt-4 pt-3"},[e("h2",{staticClass:"test-title"},[t._v(t._s(t.testName.replace(/-/g," "))+" ")])]),t._v(" "),e("br"),t._v(" "),1==t.instructionRead?e("div",{staticClass:"testCountdown shadow"},[e("div",{staticClass:"container d-flex align-items-center flex-wrap"},[e("div",[e("h4",{staticClass:"timerHead"},[t._v("Test will "),e("br"),t._v(" auto submit in - "+t._s(t.testTime))])]),t._v(" "),e("div",{},[e("my-countdown",{attrs:{end:t.testTime},on:{timerEnd:t.testFinish}})],1)])]):t._e(),t._v(" "),e("div",{staticClass:"fullpage",style:{display:t.loadDisplayed}},[t._m(0)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.usrAttempt>0,expression:"usrAttempt > 0"}]},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"}),t._v(" "),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card py-1 px-md-5 px-sm-1 bg-white shadow mb-3"},[e("table",{staticClass:"table table-striped table-hovered"},[t._m(1),t._v(" "),e("tr",[e("td",[e("h3",[e("span",{staticClass:"badge badge-success p-2"},[t._v(t._s(t.totalAttempt))])])]),t._v(" "),e("td",[e("h3",[e("span",{staticClass:"badge badge-primary p-2"},[t._v(t._s(t.usrAttempt))])])]),t._v(" "),e("td",[e("h3",[e("span",{staticClass:"badge badge-danger p-2"},[t._v(t._s(t.totalAttempt-t.usrAttempt))])])])])]),t._v(" "),e("router-link",{staticClass:"btn theme-btn mb-3",style:"width:200px;padding:5px 10px",attrs:{to:"/test-result/"+t.testName+"/"+t.chapId}},[t._v("Check Results")])],1)]),t._v(" "),e("div",{staticClass:"col-md-2"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.instructionRead&&1==t.testAllowed,expression:"instructionRead == false && testAllowed == true"}],staticClass:"row"},[e("div",{staticClass:"col-md-2"}),t._v(" "),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card p-5 bg-white shadow mb-3"},[e("div",{domProps:{innerHTML:t._s(t.testInstruction)}}),t._v(" "),e("br"),t._v(" "),1==t.testReadyState?e("button",{staticClass:"btn theme-btn mb-3",style:"width:200px;padding:5px 10px",on:{click:t.startTest}},[t._v("Start Test")]):e("button",{staticClass:"btn btn-secondary mb-3",style:"width:auto;padding:5px 10px"},[t._v("Test Will Start at : "+t._s(t.testSchedule.replace(/T/g," ")))])])]),t._v(" "),e("div",{staticClass:"col-md-2"})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:1==t.instructionRead,expression:"instructionRead == true"}]},[e("div",{directives:[{name:"show",rawName:"v-show",value:1==t.testAllowed,expression:"testAllowed == true"}],staticClass:"row"},[e("div",{staticClass:"col-md-2"}),t._v(" "),e("div",{staticClass:"col-md-8"},[e("br"),t._v(" "),e("div",{staticClass:"numberBox border border-secondary p-3 bg-white"},[e("div",{staticClass:"d-flex flex-wrap"},[t._l(t.getClassInfo,(function(s,a){return e("div",{key:a},[e("a",{directives:[{name:"show",rawName:"v-show",value:0!=a,expression:"index !=0"}],staticClass:"btn m-1 btn-sm",class:null==t.testanswer[a]?"btn-secondary":"btn-success",attrs:{href:"#q"+a}},[t._v(t._s(a))])])})),t._v(" "),e("div",[e("button",{staticClass:"btn mx-2 btn-secondary btn-sm m-1"},[t._v(t._s(t.getClassInfo.length))])])],2)]),t._v(" "),e("br"),t._v(" "),e("form",{staticClass:"needs-validation pt-4",attrs:{method:"post",novalidate:""},on:{submit:function(s){return s.preventDefault(),t.submitanswer(s)}}},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._l(t.getClassInfo,(function(s,a){return e("div",{key:a,staticClass:"card p-5 bg-white shadow mb-3"},[e("div",{staticClass:"text-black",attrs:{id:"q"+(a+1)}},[e("span",{staticClass:"font-weight-bold"},[t._v(" Question. "+t._s(++a))]),t._v(" "),e("div",{domProps:{innerHTML:t._s(s.question)}})]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"form-check"},[e("label",{staticClass:"form-check-label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.testanswer[a],expression:"testanswer[index]"}],staticClass:"form-check-input",attrs:{type:"radio",value:"a"},domProps:{checked:t._q(t.testanswer[a],"a")},on:{dblclick:t.uncheckMe,change:function(s){return t.$set(t.testanswer,a,"a")}}}),t._v("\n                            "+t._s(s.ansA)+"\n                        ")])]),t._v(" "),e("div",{staticClass:"form-check"},[e("label",{staticClass:"form-check-label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.testanswer[a],expression:"testanswer[index]"}],staticClass:"form-check-input",attrs:{type:"radio",value:"b"},domProps:{checked:t._q(t.testanswer[a],"b")},on:{dblclick:t.uncheckMe,change:function(s){return t.$set(t.testanswer,a,"b")}}}),t._v("\n                            "+t._s(s.ansB)+"\n                        ")])]),t._v(" "),e("div",{staticClass:"form-check"},[e("label",{staticClass:"form-check-label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.testanswer[a],expression:"testanswer[index]"}],staticClass:"form-check-input",attrs:{type:"radio",value:"c"},domProps:{checked:t._q(t.testanswer[a],"c")},on:{dblclick:t.uncheckMe,change:function(s){return t.$set(t.testanswer,a,"c")}}}),t._v("\n                            "+t._s(s.ansC)+"\n                        ")])]),t._v(" "),e("div",{staticClass:"form-check"},[e("label",{staticClass:"form-check-label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.testanswer[a],expression:"testanswer[index]"}],staticClass:"form-check-input",attrs:{type:"radio",value:"d"},domProps:{checked:t._q(t.testanswer[a],"d")},on:{dblclick:t.uncheckMe,change:function(s){return t.$set(t.testanswer,a,"d")}}}),t._v("\n                            "+t._s(s.ansD)+"\n                        ")])]),t._v(" "),e("br")])})),t._v(" "),t._m(4)],2)]),t._v(" "),e("div",{staticClass:"col-md-2"})])])])}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h3",{staticClass:"center-text"},[t._v("Please wait "),e("div",{staticClass:"spinner-border text-light"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("th",[t._v("\n                                    Total Attempts Allowed\n                                ")]),t._v(" "),e("th",[t._v("\n                                    You Attempted\n                                ")]),t._v(" "),e("th",[t._v("\n                                    Remaining Attempted\n                                ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"text-danger"},[t._v("Imp Note : You can remove your selection by double click on selected ( "),e("i",{staticClass:"la la-dot-circle",staticStyle:{color:"blue"}}),t._v(" )")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card p-5 bg-white mb-3"},[e("button",{staticClass:"btn btn-lg btn-primary float-right"},[t._v("Submit Test")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card p-5 bg-white mb-3"},[e("button",{staticClass:"btn btn-lg btn-primary float-right"},[t._v("Submit Test")])])}],!1,null,"88ff9132",null).exports},433:(t,s,e)=>{e.r(s),e.d(s,{default:()=>c});const a={data:function(){return{resultList:{},chapId:"",loadDisplayed:"none",ansArr:[],wrongAns:"",wrongANScount:"",correctAns:"",correctAnscount:"",notAnsweredCount:"",positiveMarks:"",negativeMarks:"",totalQuest:"",getClassInfo:{}}},beforeCreate:function(){this.$Progress.start()},created:function(){var t=this;this.chapId=this.$route.params.chapterId,axios.get("/user-test-attempts-results/"+this.chapId).then((function(s){return t.resultList=s.data})).catch((function(t){return console.log(t)})),this.$Progress.finish()},methods:{getTestResult:function(t){var s=this;this.loadDisplayed="block",axios.get("/test-result-calculation/"+t).then((function(t){s.notAnsweredCount=t.data.notAnsweredCount,s.wrongAns=t.data.wrongAns.toFixed(2),s.wrongANScount=t.data.wrongANScount,s.correctAns=t.data.correctAns.toFixed(2),s.correctAnscount=t.data.correctAnscount,s.totalQuest=t.data.totalQuest,s.ansArr=t.data.ansArr,s.getClassInfo=t.data.originalTest,s.positiveMarks=t.data.positiveMark,s.negativeMarks=t.data.negativeMark,s.loadDisplayed="none"})).catch((function(t){return console.log(t)}))}}};var n=e(3379),r=e.n(n),i=e(7232),o={insert:"head",singleton:!1};r()(i.Z,o);i.Z.locals;const c=(0,e(1900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"fullpage",style:{display:t.loadDisplayed}},[t._m(0)]),t._v(" "),e("div",{staticClass:"col-md-1"}),t._v(" "),e("div",{staticClass:"col-md-10 my-5"},[e("div",{staticClass:"card border border-secondary p-2"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-striped table-hovered"},[t._m(1),t._v(" "),e("tbody",t._l(t.resultList,(function(s,a){return e("tr",{key:a},[e("td",[t._v(t._s(++a))]),t._v(" "),e("td",[t._v(t._s(s.created_at.replace(/T/g," ").replace(/.000000Z/g," "))+"\n                                    \n                                ")]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-sm btn-info",on:{click:function(e){return t.getTestResult(s.id)}}},[t._v("Check Result")])])])})),0)])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.getClassInfo.length>0,expression:"getClassInfo.length > 0"}]},[e("div",{staticClass:"card p-5 bg-white shadow mb-3 mt-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 col-lg-3 col-sm-6 col-xs-6"},[e("div",{staticClass:"card shadow py-4 px-2 text-center scoreboard"},[e("h3",[t._v("\n                                            Total "),e("br"),t._v(" Marks "),e("br"),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"rounded-circle text-white bg-primary p-3"},[t._v("\n                                                "+t._s(t.totalQuest*t.positiveMarks)+"\n                                                ")])])])]),t._v(" "),e("div",{staticClass:"col-md-3 col-lg-3 col-sm-6 col-xs-6"},[e("div",{staticClass:"card shadow py-4 px-2 text-center scoreboard"},[e("h3",[t._v("\n                                            Correct "),e("br"),t._v(" Marks "),e("br"),e("br"),t._v(" "),e("span",{staticClass:"rounded-circle text-white bg-success p-3"},[t._v("\n                                             "+t._s(t.correctAns)+"\n                                            ")])])])]),t._v(" "),e("div",{staticClass:"col-md-3 col-lg-3 col-sm-6 col-xs-6"},[e("div",{staticClass:"card shadow py-4 px-2 text-center scoreboard"},[e("h3",[t._v("\n                                            Wrong "),e("br"),t._v("Marks "),e("br"),e("br"),t._v(" "),e("span",{staticClass:"rounded-circle text-white bg-danger p-3"},[t._v("\n                                             -"+t._s(t.wrongAns)+"\n                                            ")])])])]),t._v(" "),e("div",{staticClass:"col-md-3 col-lg-3 col-sm-6 col-xs-6"},[e("div",{staticClass:"card shadow py-4 px-2 text-center scoreboard"},[e("h3",[t._v("\n                                             Scored "),e("br"),t._v(" Marks "),e("br"),e("br"),t._v(" "),e("span",{staticClass:"rounded-circle text-white bg-success p-3"},[t._v("\n                                                "+t._s((t.correctAns-t.wrongAns).toFixed(2))+"\n                                            ")])])])])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar progress-bar-success",style:"width:"+100*t.correctAnscount/t.totalQuest+"%",attrs:{role:"progressbar","aria-valuenow":100*t.correctAnscount/t.totalQuest,"aria-valuemin":"0","aria-valuemax":"100"}},[t._v("\n                                    "+t._s(100*t.correctAnscount/t.totalQuest)+"% Correct Answered ("+t._s(t.correctAnscount)+")\n                                ")])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar progress-bar-warning",style:"width:"+100*t.notAnsweredCount/t.totalQuest+"%",attrs:{role:"progressbar","aria-valuenow":100*t.notAnsweredCount/t.totalQuest,"aria-valuemin":"0","aria-valuemax":"100"}},[t._v("\n                                    "+t._s(100*t.notAnsweredCount/t.totalQuest)+"% Not Answered ("+t._s(t.notAnsweredCount)+")\n                                ")])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar progress-bar-danger",style:"width:"+100*t.wrongANScount/t.totalQuest+"%",attrs:{role:"progressbar","aria-valuenow":100*t.wrongANScount/t.totalQuest,"aria-valuemin":"0","aria-valuemax":"100"}},[t._v("\n                                    "+t._s(100*t.wrongANScount/t.totalQuest)+"% Wrong Answered ("+t._s(t.wrongANScount)+")\n                                ")])])]),t._v(" "),t._l(t.getClassInfo,(function(s,a){return e("div",{key:a,staticClass:"card p-5 bg-white shadow mb-3"},[e("div",{staticClass:"text-black",attrs:{id:"q"+(a+1)}},[e("span",{staticClass:"font-weight-bold"},[t._v(" Quest. "+t._s(++a))]),t._v(" "),e("div",{domProps:{innerHTML:t._s(s.question)}})]),t._v(" "),e("br"),t._v(" "),e("h3",{class:""!=t.ansArr[a]?"text-warning":"text-danger"},[""!=t.ansArr[a]?e("span",[t._v("\n                                Your Answer : "+t._s(t.ansArr[a])+"\n                            ")]):e("span",[t._v("\n                                Not Answered\n                            ")])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"form-check"},[e("label",{staticClass:"form-check-label pr-2",class:["a"==s.correctAns?"text-white bg-success py-1 rounded":"","a"==t.ansArr[a]&&"a"!=s.correctAns?"text-white bg-danger py-1 rounded":""]},[t._v("\n                                \n                                "+t._s(s.ansA)+" \n                            ")])]),t._v(" "),e("div",{staticClass:"form-check"},[e("label",{staticClass:"form-check-label pr-2",class:["b"==s.correctAns?"text-white bg-success py-1 rounded":"","b"==t.ansArr[a]&&"b"!=s.correctAns?"text-white bg-danger py-1 rounded":""]},[t._v("\n                                \n                                "+t._s(s.ansB)+"\n                            ")])]),t._v(" "),e("div",{staticClass:"form-check"},[e("label",{staticClass:"form-check-label pr-2",class:["c"==s.correctAns?"text-white bg-success py-1 rounded":"","c"==t.ansArr[a]&&"c"!=s.correctAns?"text-white bg-danger py-1 rounded":""]},[t._v("\n                                \n                                "+t._s(s.ansC)+"\n                            ")])]),t._v(" "),e("div",{staticClass:"form-check"},[e("label",{staticClass:"form-check-label pr-2 ",class:["d"==s.correctAns?"text-white bg-success py-1 rounded":"","d"==t.ansArr[a]&&"d"!=s.correctAns?"text-white bg-danger py-1 rounded":""]},[t._v("\n                                \n                                "+t._s(s.ansD)+" ")])]),t._v(" "),e("br"),t._v(" "),e("h4",[t._v("Explaination:")]),t._v(" "),e("div",{domProps:{innerHTML:t._s(s.answerJustification)}})])}))],2)]),t._v(" "),e("div",{staticClass:"col-md-1"})])])}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h3",{staticClass:"center-text"},[t._v("Please wait "),e("div",{staticClass:"spinner-border text-light"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",[t._v("SR No.")]),t._v(" "),e("th",[t._v("Attempted Date")]),t._v(" "),e("th",[t._v("Action")])])])}],!1,null,"26533b18",null).exports},5688:(t,s,e)=>{e.d(s,{Z:()=>n});const a={props:["courseInfo"],data:function(){return{coursedetail:this.courseInfo,catInfo:{},seoTitle:this.courseInfo.courseName.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,""),firstClassInfo:{},firstTestInfo:{},myClassName:""}},created:function(){var t=this;this.$Progress.finish(),axios.get("/front-fetch-single-category/"+this.courseInfo.courseCategory).then((function(s){return t.catInfo=s.data})).catch((function(t){return console.log(t)})),axios.get("/course-first-class-info/"+this.courseInfo.id).then((function(s){t.firstClassInfo=s.data,t.myClassName=t.firstClassInfo.topicName.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")})).catch((function(t){return console.log(t)})),axios.get("/course-first-test-info/"+this.courseInfo.id).then((function(s){t.firstTestInfo=s.data,t.myClassName=t.firstTestInfo.chaptername.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")})).catch((function(t){return console.log(t)}))},beforeCreate:function(){this.$Progress.start()}};const n=(0,e(1900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-lg-4 responsive-column-half"},[e("div",{staticClass:"card card-item card-preview",attrs:{"data-tooltip-content":"#tooltip_content_1"}},[e("div",{staticClass:"card-image"},[e("img",{staticClass:"card-img-top lazy",attrs:{src:t.coursedetail.featureImg,alt:"Card image cap"}})]),t._v(" "),e("div",{staticClass:"card-body"},[e("h6",{staticClass:"ribbon ribbon-blue-bg fs-14 mb-3"},[t._v(t._s(t.catInfo.catname))]),t._v(" "),e("h5",{staticClass:"card-title"},[t._v(t._s(t.coursedetail.courseName))]),t._v(" "),t.coursedetail.languages?e("p",{staticClass:"card-text"},[e("a",{attrs:{href:"javascript:void()"}},[t._v(t._s(t.coursedetail.languages))])]):t._e(),t._v(" "),e("div",{staticClass:"d-flex justify-content-between align-items-center"},[null!=t.firstClassInfo.id&&1==t.courseInfo.courseType?e("router-link",{staticClass:"btn btn-primary btn-xs",attrs:{to:"/course/"+t.seoTitle+"/"+t.myClassName+"/"+t.coursedetail.id+"/"+t.firstClassInfo.id}},[t._v("Start Learning")]):null!=t.firstTestInfo.id&&0==t.courseInfo.courseType?e("router-link",{staticClass:"btn btn-primary btn-xs",attrs:{to:"/course/"+t.seoTitle+"/"+t.myClassName+"/"+t.coursedetail.id+"/"+t.firstTestInfo.id}},[t._v("Attempt Tests")]):e("h5",{staticClass:"text-secondary"},[e("br"),t._v("Starting on "+t._s(t.coursedetail.courseStartDate))])],1)])])])}),[],!1,null,null,null).exports},6202:(t,s,e)=>{e.d(s,{Z:()=>c});const a={props:["chapterId","courseName","courseId"],data:function(){return{classList:{}}},created:function(){var t=this;axios.get("/user-courseclass-list/"+this.chapterId+"/"+this.courseId).then((function(s){t.classList=s.data})).catch((function(t){return console.log(t)}))}};var n=e(3379),r=e.n(n),i=e(8956),o={insert:"head",singleton:!1};r()(i.Z,o);i.Z.locals;const c=(0,e(1900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card-body p-0"},[e("ul",{staticClass:"curriculum-sidebar-list"},t._l(t.classList,(function(s,a){return e("li",{key:a,staticClass:"course-item-link",class:{active:"0"==a}},[e("router-link",{attrs:{to:"/course/"+t.courseName+"/"+s.topicName.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")+"/"+s.courseId+"/"+s.id}},[e("div",{staticClass:"course-item-content-wrap"},[e("div",{staticClass:"course-item-content"},[e("h4",{staticClass:"fs-15"},[t._v(t._s(s.topicName))]),t._v(" "),e("div",{staticClass:"courser-item-meta-wrap"},[1==s.classType?e("p",{staticClass:"course-item-meta"},[e("i",{staticClass:"la la-play-circle"}),t._v("Video Class")]):2==s.classType?e("p",{staticClass:"course-item-meta"},[e("i",{staticClass:"la la-file"}),t._v("Notes Class")]):t._e(),t._v(" "),""!=s.classdate?e("p",{staticClass:"course-item-meta"},[e("i",{staticClass:"la la-stopwatch"}),t._v(t._s(s.classdate))]):t._e()])])])])],1)})),0)])}),[],!1,null,"57894f8c",null).exports},3182:(t,s,e)=>{e.d(s,{Z:()=>c});const a={props:["classInfo"]};var n=e(3379),r=e.n(n),i=e(5060),o={insert:"head",singleton:!1};r()(i.Z,o);i.Z.locals;const c=(0,e(1900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[1==t.classInfo.classMode?e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9 p-4  p-sm-2"},[e("iframe",{staticClass:"videoFrame",staticStyle:{width:"100%",height:"100%"},attrs:{src:t.classInfo.videoLink,frameborder:"0",allowfullscreen:"allowfullscreen"}})]),t._v(" "),e("div",{staticClass:"col-md-3 p-md-4 p-sm-2"},[e("iframe",{staticStyle:{width:"100%",height:"550px"},attrs:{src:t.classInfo.chatlink}})])]):e("vue-plyr",[e("video",{attrs:{controls:"",playsinline:""}},[e("source",{attrs:{size:"720",src:t.classInfo.videoLink,type:"video/mp4"}})])])],1)}),[],!1,null,"a4879f88",null).exports},4125:(t,s,e)=>{e.r(s),e.d(s,{default:()=>c});Vue.component("my-countdown",e(8556).Z),Vue.component("video-class-list",e(5706).Z),Vue.component("video-module",e(3182).Z),Vue.component("testView",e(573).Z);const a={data:function(){return{courseName:"",className:"",courseId:"",classId:"",loadDisplayed:"block",getClassInfo:{},corsType:"",testSchedule:0,startTest:0,classtype:0,testTime:"",testing:"Sun Feb 13 2022 13:32:00 "}},beforeCreate:function(){this.loadDisplayed="block",this.$Progress.start(),this.$session.has("userId")&&this.$session.exists()||this.$router.push("/user-login")},methods:{testPdfVisible:function(){this.startTest=1}},created:function(){var t=this;this.courseName=this.$route.params.courseName,this.className=this.$route.params.classname,this.courseId=this.$route.params.courseId,this.classId=this.$route.params.classId,axios.get("/course-type-detail/"+this.courseId).then((function(s){return t.corsType=s.data})).catch((function(t){return console.log(t)})),axios.get("/get-class-info/"+this.classId).then((function(s){if(t.getClassInfo=s.data,t.classtype=t.getClassInfo.classType,3==t.classtype){t.testSchedule=1,t.testing=new Date(t.getClassInfo.classdate),t.testTime=new Date(t.testing).toString().split("GMT")[0];var e=new Date(t.getClassInfo.classdate),a=new Date;e.getTime()<a.getTime()?t.startTest=1:t.startTest=0}})).catch((function(t){return console.log(t)})),this.$Progress.finish(),this.loadDisplayed="none"}};var n=e(3379),r=e.n(n),i=e(5502),o={insert:"head",singleton:!1};r()(i.Z,o);i.Z.locals;const c=(0,e(1900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"fullpage",style:{display:t.loadDisplayed}}),t._v(" "),e("section",{staticClass:"course-dashboard"},[e("div",{staticClass:"course-dashboard-wrap"},[e("div",{staticClass:"course-dashboard-container d-flex"},[e("div",{staticClass:"course-dashboard-column"},[e("div",{staticClass:"lecture-viewer-container"},[e("div",{staticClass:"lecture-video-item p-2"},[1==t.corsType.courseType&&1==t.getClassInfo.classType?e("video-module",{attrs:{classInfo:t.getClassInfo}}):0==t.corsType.courseType?e("test-view",{attrs:{testName:t.className,chapId:t.classId}}):e("div",{staticClass:"p-4 card border border-secondary",domProps:{innerHTML:t._s(t.getClassInfo.classScript)}})],1)]),t._v(" "),e("div",{staticClass:"lecture-video-detail"},[t._m(0),t._v(" "),e("div",{staticClass:"lecture-video-detail-body"},[e("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[e("div",{staticClass:"tab-pane fade",attrs:{id:"course-content",role:"tabpanel","aria-labelledby":"course-content-tab"}},[e("div",{staticClass:"mobile-course-menu pt-4"},[e("div",{staticClass:"accordion generic-accordion generic--accordion",attrs:{id:"mobileCourseAccordionCourseExample"}},[e("video-class-list",{attrs:{keyId:"mobile",cType:t.corsType.courseType,uCourseId:t.courseId}})],1)])]),t._v(" "),e("div",{staticClass:"tab-pane active",attrs:{id:"announcements",role:"tabpanel","aria-labelledby":"announcements-tab"}},[e("div",{staticClass:"lecture-overview-wrap lecture-announcement-wrap"},[1==t.testSchedule?e("div",{staticClass:"lecture-overview-item"},[0==t.startTest?e("h3",[t._v("PDF Of Question Paper will be visible in \r\n                                            "),e("span",{staticClass:"text-danger"},[e("my-countdown",{attrs:{end:t.testTime},on:{timerEnd:t.testPdfVisible}})],1)]):e("iframe",{staticClass:"pdfArea",attrs:{src:t.getClassInfo.classPdf,frameborder:"0"}})]):e("div",{staticClass:"lecture-overview-item"},[null==t.getClassInfo.classPdf||"null"==t.getClassInfo.classPdf?e("div"):e("iframe",{staticClass:"pdfArea",attrs:{src:t.getClassInfo.classPdf,frameborder:"0"}})])])])])])])]),t._v(" "),e("div",{staticClass:"course-dashboard-sidebar-column"},[t._m(1),t._v(" "),e("div",{staticClass:"course-dashboard-sidebar-wrap custom-scrollbar-styled"},[t._m(2),t._v(" "),e("div",{staticClass:"course-dashboard-side-content"},[e("div",{staticClass:"accordion generic-accordion generic--accordion",attrs:{id:"accordionCourseExample"}},[e("video-class-list",{attrs:{keyId:"desktop",cType:t.corsType.courseType,corsname:t.courseName,uCourseId:t.courseId}})],1)])])])])])])])}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"lecture-tab-body bg-gray p-4"},[e("ul",{staticClass:"nav nav-tabs generic-tab",attrs:{id:"myTab",role:"tablist"}},[e("li",{staticClass:"nav-item mobile-menu-nav-item"},[e("a",{staticClass:"nav-link ",attrs:{id:"course-content-tab","data-toggle":"tab",href:"#course-content",role:"tab","aria-controls":"course-content","aria-selected":"false"}},[t._v("\r\n                                    Course Content\r\n                                ")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{id:"announcements-tab","data-toggle":"tab",href:"#announcements",role:"tab","aria-controls":"announcements","aria-selected":"false"}},[t._v("\r\n                                    PDF Notes\r\n                                ")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"sidebar-open",attrs:{type:"button"}},[e("i",{staticClass:"la la-angle-left"}),t._v(" Course content")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"course-dashboard-side-heading d-flex align-items-center justify-content-between"},[e("h3",{staticClass:"fs-18 font-weight-semi-bold"},[t._v("Course content")]),t._v(" "),e("button",{staticClass:"sidebar-close",attrs:{type:"button"}},[e("i",{staticClass:"la la-times"})])])}],!1,null,"95d808ba",null).exports}}]);