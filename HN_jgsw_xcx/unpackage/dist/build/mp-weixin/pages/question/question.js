(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/question/question"],{1808:function(n,t,e){"use strict";var o=e("90c1"),u=e.n(o);u.a},"1b91":function(n,t,e){"use strict";e.r(t);var o=e("744b"),u=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=u.a},"3c6b":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return u})},"744b":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={components:{},data:function(){return{wentiDetail:{}}},methods:{},onLoad:function(t){var e=this;this.req.request("/detail/".concat(t.id),{},"GET",function(n){console.log(n),e.wentiDetail=n},function(t){n.showToast({title:t.errMsg,mask:!0,duration:1200,icon:"none"})})}};t.default=e}).call(this,e("543d")["default"])},"90c1":function(n,t,e){},cd60:function(n,t,e){"use strict";e.r(t);var o=e("3c6b"),u=e("1b91");for(var i in u)"default"!==i&&function(n){e.d(t,n,function(){return u[n]})}(i);e("1808");var c=e("2877"),a=Object(c["a"])(u["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports}},[["4170","common/runtime","common/vendor"]]]);