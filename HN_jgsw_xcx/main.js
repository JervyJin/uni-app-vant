import Vue from 'vue'
import App from './App'
import Req from './common/util.js'
import baseurl from './common/baseurl.js'

Vue.config.productionTip = false;
var openid = uni.getStorageSync('openid');

// 线上
Vue.prototype.img_url = 'http://zm.dangjian.link';
 // Vue.prototype.img_url = 'http://192.168.0.117:8080';
 Vue.prototype.baseurl = baseurl;
 
Vue.prototype.openid = openid;
Vue.prototype.req = Req;


App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
