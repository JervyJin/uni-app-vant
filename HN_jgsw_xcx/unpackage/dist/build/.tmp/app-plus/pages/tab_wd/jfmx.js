(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tab_wd/jfmx"],{"2e3f":function(t,e,n){"use strict";n.r(e);var a=n("bbd4"),o=n("b586");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var r=n("2877"),u=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"3b27":function(t,e,n){"use strict";(function(t){n("25b1"),n("921b");a(n("66fd"));var e=a(n("2e3f"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"58a1":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{info:[],current_page:1,is_more:!0,totalPages:""}},onLoad:function(){var e=t.isLogin();e?(this.user_id=e.user_id,this.user_token=e.user_token):n.showModal({title:"提示",content:"请先登录吧！",showCancel:!0,success:function(t){t.confirm?n.navigateTo({url:"../login/login"}):t.cancel&&n.switchTab({url:"../home_page/home_page"})}})},onReady:function(){var t=this;this.req.request("/integral/detailList",{page:1,token:this.user_token},"POST",function(e){e.data.length||(t.is_more=!1),t.info=e.data,t.totalPages=e.totalPages})},onPullDownRefresh:function(t){var e=this;this.req.request("/integral/detailList",{page:1,token:this.user_token},"POST",function(t){t.data.length||(e.is_more=!1),e.info=t.data,e.totalPages=t.totalPages}),setTimeout(function(){n.stopPullDownRefresh()},1e3)},onReachBottom:function(){if(this.current_page<this.totalPages){var t=this;setTimeout(function(){t.get_more()},500)}else this.is_more=!1},methods:{get_more:function(t){var e=this;this.current_page++,this.req.request("/integral/detailList",{page:this.current_page,token:this.user_token},"POST",function(t){t.data.length||(e.is_more=!1),e.info=e.info.concat(t.data)})}}};e.default=a}).call(this,n("c8ba"),n("6e42")["default"])},b586:function(t,e,n){"use strict";n.r(e);var a=n("58a1"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},bbd4:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})}},[["3b27","common/runtime","common/vendor"]]]);