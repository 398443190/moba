(function(t){function e(e){for(var a,r,c=e[0],l=e[1],o=e[2],u=0,p=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},i={app:0},n=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"74c45adc"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=a);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t);var o=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",o.name="ChunkLoadError",o.type=a,o.request=n,s[1](o)}i[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0972":function(t,e,s){},"0f58":function(t,e,s){"use strict";var a=s("c355"),i=s.n(a);i.a},1399:function(t,e,s){"use strict";var a=s("ef4a"),i=s.n(a);i.a},"21bb":function(t,e,s){"use strict";var a=s("2dad"),i=s.n(a);i.a},"2dad":function(t,e,s){},"49c5":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r={name:"app"},c=r,l=s("2877"),o=Object(l["a"])(c,i,n,!1,null,null,null),u=o.exports,d=(s("d3b7"),s("8c4f")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("swiper",{attrs:{options:t.swiperOptions}},[a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("c5e6"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("c5e6"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("c5e6"),alt:""}})]),a("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-1",attrs:{slot:"pagination"},slot:"pagination"})],1),a("div",{staticClass:"nav-icons bg-white mt-3 text-center pt-3 text-dark-1"},[a("div",{staticClass:"d-flex flex-wrap"},t._l(10,(function(e){return a("div",{key:e,staticClass:"nav-item mb-3"},[a("i",{staticClass:"sprite sprite-news"}),a("div",{staticClass:"py-2"},[t._v("爆料站")])])})),0),t._m(0)]),a("m-list-card",{attrs:{icon:"menu1",title:"新闻资讯",categories:t.newsCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return t._l(s.newsList,(function(e,s){return a("router-link",{key:s,staticClass:"py-2 fs-lg d-flex",attrs:{tag:"div",to:"/articles/"+e._id}},[a("span",{staticClass:"text-info"},[t._v("["+t._s(e.categoryName)+"]")]),a("span",{staticClass:"px-2"},[t._v("|")]),a("span",{staticClass:"flex-1 text-dark-1 text-ellipsis pr-2"},[t._v(t._s(e.title))]),a("span",{staticClass:"text-grey-1 fs-sm"},[t._v(t._s(e.createdAt))])])}))}}])}),a("m-list-card",{attrs:{icon:"menu1",title:"英雄列表",categories:t.heroesList},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return[a("div",{staticClass:" d-flex flex-wrap",staticStyle:{margin:"0 -0.5rem"}},t._l(s.heroList,(function(e,s){return a("router-link",{key:s,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/heroes/"+e._id}},[a("img",{staticClass:"w-100",attrs:{src:e.avatar,alt:""}}),a("div",{staticClass:"text-info"},[t._v(t._s(e.name))])])})),1)]}}])})],1)},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-light py-2 fs-sm"},[s("i",{staticClass:"sprite sprite-arrow mr-1"}),s("span",[t._v("收起")])])}],v=(s("96cf"),s("1da1")),m={name:"Home",data:function(){return{swiperOptions:{pagination:{el:".swiper-pagination"}},newsCats:[],heroesList:[]}},created:function(){this.getData(),this.getHeroList()},methods:{getData:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("news/list");case 2:s=e.sent,console.log(s,"res"),t.newsCats=s.data;case 5:case"end":return e.stop()}}),e)})))()},getHeroList:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/list");case 2:s=e.sent,console.log(s,"res"),t.heroesList=s.data;case 5:case"end":return e.stop()}}),e)})))()}}},_=m,g=(s("21bb"),Object(l["a"])(_,p,f,!1,null,null,null)),b=g.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[t._m(0),s("div",{staticClass:"bg-primary pt-3 pb-2"},[s("div",{staticClass:"nav nav-inverse pb-1 jc-around"},[s("div",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("首页")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("攻略中心")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("赛事中心")])],1)])]),s("router-view")],1)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar d-flex ai-center bg-black py-2 px-3"},[a("img",{attrs:{src:s("cf05"),height:"30",alt:""}}),a("div",{staticClass:"px-2 flex-1"},[a("div",{staticClass:"text-white"},[t._v("英雄联盟")]),a("div",{staticClass:"text-grey-1 fs-xxs"},[t._v("团队成就更多")])]),a("button",{staticClass:"bg-primary",attrs:{type:"button"}},[t._v("立即下载")])])}],x=(s("a006"),{}),y=Object(l["a"])(x,C,h,!1,null,null,null),w=y.exports,k=(s("78a7"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-article"},[s("div",{staticClass:"d-flex py-3 px-2"},[s("div",{staticClass:"iconfont icon-Back",on:{click:function(e){return t.$router.go(-1)}}}),s("strong",{staticClass:"flex-1"},[t._v(" "+t._s(t.model.title)+" ")]),s("div",{staticClass:"text-grey fs-xs"},[t._v(" "+t._s(t.model.createdAt)+" ")])]),s("div",{staticClass:"px-3 py-3 body",domProps:{innerHTML:t._s(t.model.description)}}),s("div",{staticClass:"p-3 border-top"},[t._m(0),s("div",{staticClass:"pt-2"},t._l(t.model.related,(function(e,a){return s("router-link",{key:a,staticClass:"py-1",attrs:{tag:"div",to:"/articles/"+e._id}},[t._v(" "+t._s(e.title)+" ")])})),1)])]):t._e()}),j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex ai-center"},[s("i",{staticClass:"iconfont icon-menu1"}),s("strong",{staticClass:"text-blue fs-lg"},[t._v("相关资讯")])])}],O={data:function(){return{model:null}},props:{id:{type:String,required:!0}},watch:{id:"fetchData"},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("articles/".concat(t.id));case 2:s=e.sent,t.model=Object.assign({},t.model,s.data);case 4:case"end":return e.stop()}}),e)})))()}}},S=O,$=(s("1399"),Object(l["a"])(S,k,j,!1,null,null,null)),E=$.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("div",{staticClass:"page-hero"},[a("div",{staticClass:"topbar d-flex ai-center bg-black py-2 px-3 text-white"},[a("img",{attrs:{src:s("cf05"),height:"30",alt:""}}),t._m(0),a("router-link",{attrs:{to:"/",tag:"div"}},[t._v("更多英雄 >")])],1),a("div",{staticClass:"top",style:{"background-image":"url("+t.model.banner}},[a("div",{staticClass:"info text-white p-3 d-flex flex-column h-100 jc-end"},[a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.title))]),a("h2",{staticClass:"my-2"},[t._v(t._s(t.model.name))]),a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.category.map((function(t){return t.name})).join("/")))]),a("div",{staticClass:"d-flex jc-between pt-2"},[t.model.scories?a("div",{staticClass:"scores  d-flex ai-center"},[a("span",[t._v("难度")]),a("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scories.difficult))]),a("span",[t._v("技能")]),a("span",{staticClass:"badge bg-blue-1"},[t._v(t._s(t.model.scories.skill))]),a("span",[t._v("攻击")]),a("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.model.scories.attack))]),a("span",[t._v("生存")]),a("span",{staticClass:"badge bg-dark"},[t._v(t._s(t.model.scories.survice))])]):t._e(),a("router-link",{staticClass:"text-grey fs-sm",attrs:{to:"/",tag:"span"}},[t._v(" 皮肤:2 >")])],1)])]),a("div",[a("div",{staticClass:"bg-white px-3"},[a("div",{staticClass:"nav d-flex jc-around pt-3 pb-2 border-bottom"},t._l(t.dataType,(function(e,s){return a("div",{key:s,staticClass:"nav-item",class:{active:t.active===s},on:{click:function(e){return t.$refs.list.swiper.slideTo(s)}}},[a("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])})),0)]),a("swiper",{ref:"list",on:{"slide-change":function(){return t.active=t.$refs.list.swiper.realIndex}}},[a("swiper-slide",[a("div",[a("div",{staticClass:"p-3 bg-white border-bottom"},[a("div",{staticClass:"d-flex"},[a("router-link",{staticClass:"btn btn-lg flex-1",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu1"}),t._v(" 英雄介绍视频 ")]),a("router-link",{staticClass:"btn btn-lg flex-1 ml-2",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu1"}),t._v(" 英雄介绍视频 ")])],1),a("div",{staticClass:"skills bg-white mt-4"},[a("div",{staticClass:"d-flex jc-around"},t._l(t.model.skills,(function(e,s){return a("img",{key:e.name,staticClass:"icon",class:{active:t.currentSkillIndex===s},attrs:{src:e.icon},on:{click:function(e){t.currentSkillIndex=s}}})})),0),t.currentSkill?a("div",[a("div",{staticClass:"d-flex pt-4 pb-3"},[a("h3",{staticClass:"m-0"},[t._v(t._s(t.currentSkill.name))]),a("span",{staticClass:"text-grey-1 ml-4"},[t._v(" (冷却值: "+t._s(t.currentSkill.delay)+" 消耗: "+t._s(t.currentSkill.cost)+") ")])]),a("p",[t._v(t._s(t.currentSkill.description))]),a("div",{staticClass:"border-bottom"}),a("p",{staticClass:"text-grey-1"},[t._v("小提示: "+t._s(t.currentSkill.tips))])]):t._e()])]),a("m-card",{staticClass:"hero-items",attrs:{plain:"",icon:"menu1",title:"出装推荐"}},[a("div",{staticClass:"fs-xl"},[t._v("顺风出装")]),a("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.itemdefeat,(function(e){return a("div",{key:e.name},[a("img",{staticClass:"icon",attrs:{src:e.icon}}),a("div",{staticClass:"fs-xs"},[t._v(t._s(e.name))])])})),0),a("div",{staticClass:"border-bottom mt-3"}),a("div",{staticClass:"fs-xl mt-3"},[t._v("逆风出装")]),a("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.itemssucc,(function(e){return a("div",{key:e.name},[a("img",{staticClass:"icon",attrs:{src:e.icon}}),a("div",{staticClass:"fs-xs"},[t._v(t._s(e.name))])])})),0)]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"使用技巧"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.usageTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"对抗技巧"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.battleTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"团战思路"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.teamTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"英雄关系"}},[a("div",{staticClass:"fs-xl"},[t._v("最佳搭档")]),t._l(t.model.partners,(function(e){return a("div",{key:e.name,staticClass:"d-flex pt-3"},[a("img",{attrs:{src:e.hero.avatar,alt:"",height:"50"}}),a("p",{staticClass:"flex-1 m-0 ml-3"},[t._v(" "+t._s(e.description)+" ")])])})),a("div",{staticClass:"border-bottom mt-3"})],2)],1)]),a("swiper-slide",[t._v("222")])],1)],1)]):t._e()},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-2 flex-1"},[s("span",{staticClass:"text-white"},[t._v("英雄联盟")]),s("span",{staticClass:"text-grey-1 fs-xxs ml-2"},[t._v("攻略战")])])}],T={props:{id:{required:!0}},data:function(){return{model:null,currentSkillIndex:0,dataType:[{name:"英雄初识"},{name:"进阶攻略"}],active:0}},computed:{currentSkill:function(){return this.model.skills[this.currentSkillIndex]}},methods:{fetch:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/".concat(t.id));case 2:s=e.sent,t.model=s.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetch()}},R=T,A=(s("6e94"),Object(l["a"])(R,L,P,!1,null,null,null)),q=A.exports;a["default"].use(d["a"]);var H=[{path:"/",component:w,children:[{path:"/",name:"Home",component:b},{path:"/articles/:id",name:"Article",component:E,props:!0}]},{path:"/heroes/:id",name:"Hero",component:q,props:!0},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],I=new d["a"]({routes:H}),D=I,M=s("2f62");a["default"].use(M["a"]);var U=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}}),B=s("5c96"),N=s.n(B);s("c69f");a["default"].use(N.a);var J=s("7212"),V=s.n(J),z=(s("dfa4"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card bg-white p-3 mt-3"},[s("div",{staticClass:"card-header d-flex ai-center",class:{"border-bottom":!t.plain,"pb-3":!t.plain}},[s("i",{staticClass:"iconfont",class:"icon-"+t.icon}),s("div",{staticClass:"fs-xl flex-1 px-2"},[s("strong",[t._v(t._s(t.title))])]),t.plain?t._e():s("i",{staticClass:"iconfont icon-menu"})]),s("div",{staticClass:"card-body pt-3"},[t._t("default")],2)])}),F=[],G={props:{title:{type:String,required:!0},icon:{type:String,required:!0},plain:{type:Boolean}}},K=G,Q=(s("0f58"),Object(l["a"])(K,z,F,!1,null,null,null)),W=Q.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("m-card",{attrs:{icon:t.icon,title:t.title}},[s("div",{staticClass:"nav jc-between"},t._l(t.categories,(function(e,a){return s("div",{key:a,staticClass:"nav-item",class:{active:t.active===a},on:{click:function(e){return t.$refs.list.swiper.slideTo(a)}}},[s("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])})),0),s("div",{staticClass:"pt-3"},[s("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return t.active=t.$refs.list.swiper.realIndex}}},t._l(t.categories,(function(e,a){return s("swiper-slide",{key:a},[t._t("items",null,{category:e})],2)})),1)],1)])},Y=[],Z={props:{icon:{type:String,required:!0},title:{type:String,required:!0},categories:{type:Array,required:!0}},data:function(){return{active:0}}},tt=Z,et=Object(l["a"])(tt,X,Y,!1,null,null,null),st=et.exports,at=s("bc3a"),it=s.n(at);s("be35");a["default"].config.productionTip=!1,a["default"].component("m-card",W),a["default"].component("m-list-card",st),a["default"].prototype.$http=it.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||"/web/api"}),a["default"].use(V.a),new a["default"]({router:D,store:U,render:function(t){return t(u)}}).$mount("#app")},"6e94":function(t,e,s){"use strict";var a=s("49c5"),i=s.n(a);i.a},"78a7":function(t,e,s){},a006:function(t,e,s){"use strict";var a=s("0972"),i=s.n(a);i.a},be35:function(t,e,s){},c355:function(t,e,s){},c5e6:function(t,e,s){t.exports=s.p+"img/210794580bb9303653804bb7b482f2a4.21079458.jpeg"},c69f:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.fc64bf07.png"},ef4a:function(t,e,s){}});
//# sourceMappingURL=app.07642d7f.js.map