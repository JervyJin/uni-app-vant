<script>
	global.isLogin = function() {
		try {
			var openid = uni.getStorageSync('openid');
			// var user_id = uni.getStorageSync('user_id');
			// var user_type = uni.getStorageSync('user_type');
		} catch (e) {

		}
		if (!openid) return false;
		else return {
			openid
		}
	};
	export default {

// 		onLaunch: function() {
// 
// 
// 			//根据payload传递过来的数据，打开一个详情  
// 			plus.push.addEventListener('click', function(msg) {
// 				console.log(msg);
// 
// 				//var payload=msg.payload;
// 				// var payload = (plus.os.name == 'iOS') ? msg.payload : JSON.parse(msg.payload);
// 				// plus.ui.alert('click' + JSON.stringify(msg) + ':' + msg.payload)
// 				var id = msg.payload.id;
// 				var type = msg.payload.type;
// 				var url = '';
// 				if (type == 3) {
// 					url = '/pages/tab_wd/hdrw_dtl?id=' + id;
// 				} else {
// 					url = '/pages/tab_wd/tzgg_dtl?id=' + id;
// 				}
// 				uni.navigateTo({
// 					url: url,
// 					success() {
// 						// 进入订单管理模块后，清除订单角标
// 						BMsetDec('order', 1)
// 					}
// 				})
// 				// pushGetRun(payload);
// 			}, false);
// 
// 
// 			//监听receive事件//监听推送的接受事件  
// 			plus.push.addEventListener('receive', function(msg) {
// 				console.log("dddd");
// 				BMsetInc('order', 1);
// 				console.log('通知内容' + msg.content);
// 				if (msg.payload) {
// 					if (typeof(msg.payload) == "string") {
// 
// 					} else {
// 						plus.push.createMessage(msg.payload.content, msg.payload, {
// 							title: msg.payload.title,
// 							cover: false
// 						});
// 					}
// 				} else {
// 
// 				}
// 
// 			}, false);
// 
// 			BMremoveBadgeNumber('order');
// 
// 			function BadgeManager() {};
// 
// 			/**  
// 			 * 角标增长  
// 			 * @param {String} key  键值  
// 			 * @param {Number} step 增长值  
// 			 */
// 			function BMsetInc(key, step) {
// 				var key = "badge_" + key;
// 				var total_number = plus.storage.getItem("badge_total_number");
// 				var key_number = plus.storage.getItem(key);
// 				total_number = parseInt(total_number); // 字符串转数字  
// 				key_number = parseInt(key_number);
// 				if (!key_number) key_number = 0;
// 				if (!total_number) total_number = 0;
// 				key_number = key_number + step;
// 				total_number = total_number + step;
// 
// 				plus.storage.setItem(key, key_number.toString()); // 数字转字符串  
// 				plus.storage.setItem("badge_total_number", total_number.toString());
// 
// 				// 设置APP图标的角标  
// 				plus.runtime.setBadgeNumber(total_number);
// 			}
// 
// 			/**  
// 			 * 角标减少  
// 			 * @param {String} key  键值  
// 			 * @param {Number} step 减少值  
// 			 */
// 			function BMsetDec(key, step) {
// 				var key = "badge_" + key;
// 				var total_number = plus.storage.getItem("badge_total_number");
// 				var key_number = plus.storage.getItem(key);
// 				total_number = parseInt(total_number);
// 				key_number = parseInt(key_number);
// 				if (!key_number) key_number = 0;
// 				if (!total_number) total_number = 0;
// 				key_number = key_number - step;
// 				total_number = total_number - step;
// 
// 				if (key_number < 0) key_number = 0;
// 				if (total_number < 0) total_number = 0;
// 
// 				plus.storage.setItem(key, key_number.toString());
// 				plus.storage.setItem("badge_total_number", total_number.toString());
// 
// 				// 设置APP图标的角标  
// 				plus.runtime.setBadgeNumber(total_number);
// 			}
// 
// 			function BMremoveBadgeNumber(key) {
// 				var key = "badge_" + key;
// 				var total_number = plus.storage.getItem("badge_total_number");
// 				var key_number = plus.storage.getItem(key);
// 				total_number = parseInt(total_number);
// 				key_number = parseInt(key_number);
// 				if (!key_number) key_number = 0;
// 				if (!total_number) total_number = 0;
// 				total_number = total_number - key_number;
// 
// 				if (total_number < 0) total_number = 0;
// 
// 				plus.storage.removeItem(key);
// 				plus.storage.setItem("badge_total_number", total_number.toString());
// 
// 				// 设置APP图标的角标  
// 				plus.runtime.setBadgeNumber(total_number);
// 			}
// 
// 
// 			var res = uni.getSystemInfoSync(),
// 				platform_type = 0;
// 			if (res.platform == 'ios') platform_type = 1;
// 
// 			let _this = this;
// 
// 			uni.request({
// 
// 			});
// 
// 		},
		// onShow: function() {
		// 	var res = global.isLogin();
		// 	if (res) {
		// 		this.user_token = res.user_token;
		// 		let _this = this;
		// 		_this.req.request('/notice/unread', {
		// 			token: _this.user_token
		// 		}, 'POST', function(res) {
		// 			if (res.huodong >= 1) {
		// 				uni.setTabBarBadge({
		// 					index: 2,
		// 					text: res.huodong.toString()
		// 				})
		// 			} else {
		// 				uni.removeTabBarBadge({
		// 					index: 2
		// 				})
		// 			}
		// 		}, function(err) {
		// 			console.log(err);
		// 		})
		// 	}
		// },
		onHide: function() {

		},


	}
</script>

<style>
	/*每个页面公共css */
	body {
		background-color: #FFFFFF;
		font-size: 28rpx;
		font-weight: 500;
		font-family: PingFang-SC;
	}
	/* 引入vantUI组件库的 样式文件 */
	@import "/wxcomponents/vant/dist/common/index.wxss";

	/* 阿里图标库 */
	/* @import url("./common/iconfont.css"); */

	@import url("//at.alicdn.com/t/font_1493539_eryrr5hmtko.css");
	/* 	@import url("/components/gaoyia-parse/parse.css"); */

</style>
