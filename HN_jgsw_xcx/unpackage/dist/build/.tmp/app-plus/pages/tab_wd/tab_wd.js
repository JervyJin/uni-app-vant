(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tab_wd/tab_wd"],{"10a6":function(e,t,n){"use strict";n.r(t);var o=n("451b"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},3393:function(e,t,n){"use strict";var o=n("4794"),r=n.n(o);r.a},"3d16":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},"451b":function(e,t,n){"use strict";(function(e,n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{current_role:3,user_info:{},img_url:"".concat(this.img_url),blur:!1,personal_info:!1,avatar:""}},onShow:function(){var t=e.isLogin(),r=this;t?(this.user_id=t.user_id,this.user_token=t.user_token,this.current_role=t.user_type,console.log(o(this.user_token," at pages\\tab_wd\\tab_wd.vue:343")),console.log(o(this.current_role," at pages\\tab_wd\\tab_wd.vue:344")),this.req.request("/member/member_info",{token:this.user_token},"POST",function(e){r.user_info=e.res})):n.showModal({title:"提示",content:"请先登录吧！",showCancel:!0,success:function(e){e.confirm?n.navigateTo({url:"../login/login"}):e.cancel&&n.switchTab({url:"../home_page/home_page"})}})},onHide:function(){this.blur=!1,this.personal_info=!1},onPullDownRefresh:function(){var e=this;this.req.request("/member/member_info",{},"POST",function(t){e.user_info=t.res}),setTimeout(function(){n.stopPullDownRefresh()},1200)},methods:{saoma:function(){n.scanCode({onlyFromCamera:!0,success:function(e){n.navigateTo({url:e.result})}})},switch_role:function(){var e=this,t=4==this.current_role?0:1;n.showModal({title:"提示",content:"你确认切换为其他角色吗?",success:function(r){r.confirm&&e.req.request("/appChangesUser/myAppChangeUser",{token:e.user_token,type:t},"POST",function(t){n.setStorageSync("user_type",t.userType),e.current_role=t.userType},function(e){console.log(o("错误"," at pages\\tab_wd\\tab_wd.vue:401")),n.showModal({title:"提示",content:e.msg,showCancel:!1})})}})},clear_huancun:function(){n.showLoading({title:"清理中"}),setTimeout(function(){n.hideLoading(),n.showModal({title:"提示",content:"清理完成",showCancel:!1,success:function(){}})},500)},reset:function(){n.navigateTo({url:"./revise_pwd"})},logout:function(){n.showModal({title:"提示",content:"您确定要退出登录吗?",success:function(e){e.confirm&&(n.clearStorageSync(),n.reLaunch({url:"../login/login"}))}})},right_click:function(){var e=this;this.req.request("/member/member_info",{token:this.user_token},"POST",function(t){e.user_info=t.res}),this.blur=!0,this.personal_info=!0},close:function(){this.blur=!1,this.personal_info=!1},choose_img:function(){var e=this;n.chooseImage({count:1,success:function(t){var r=t.tempFilePaths[0];n.uploadFile({url:e.baseurl.baseurl+"/common/upload",name:"circle",formData:{file_name:"circle"},filePath:r,success:function(t){console.log(o(t," at pages\\tab_wd\\tab_wd.vue:481"));var n=JSON.parse(t.data);e.avatar=n.data[0],console.log(o(e.user_token," at pages\\tab_wd\\tab_wd.vue:484")),console.log(o(e.avatar," at pages\\tab_wd\\tab_wd.vue:485")),e.req.request("/modify/portrait",{token:e.user_token,portrait:e.avatar},"POST",function(t){console.log(o(t," at pages\\tab_wd\\tab_wd.vue:491")),e.req.request("/member/member_info",{token:e.user_token},"POST",function(t){e.user_info=t.res})},function(e){console.log(o(e," at pages\\tab_wd\\tab_wd.vue:499"))})}})}})}}};t.default=r}).call(this,n("c8ba"),n("6e42")["default"],n("0de9")["default"])},4794:function(e,t,n){},7684:function(e,t,n){"use strict";n.r(t);var o=n("3d16"),r=n("10a6");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("3393");var s=n("2877"),u=Object(s["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},"910c":function(e,t,n){"use strict";(function(e){n("25b1"),n("921b");o(n("66fd"));var t=o(n("7684"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["910c","common/runtime","common/vendor"]]]);