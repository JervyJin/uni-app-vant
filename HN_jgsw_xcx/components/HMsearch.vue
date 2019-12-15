<template>
	<view class="content">
		
		<view class="search-box">
			<!-- mSearch组件 如果使用原样式，删除组件元素-->
			<!-- <mSearch class="mSearch-input-box" :mode="2" button="inside" :placeholder="defaultKeyword" @search="doSearch(false)"
			 @input="inputChange" @confirm="doSearch(false)" v-model="keyword" @focus="showHot"></mSearch> -->
			<!-- 原样式 如果使用原样式，恢复下方注销代码 -->

			<view class="input-box">
				<!-- <image src="../static/QQkongjian.png" mode="" style="width: 48rpx;height: 48rpx;position: absolute;left: 0;top: 0;"></image> -->
				<uni-icons type="search" size="25" color="#C7C7C7" style="width: 48rpx;height: 48rpx;position: absolute;left: 15rpx;top: 10rpx;"></uni-icons>
				<input type="text" :placeholder="defaultKeyword" @input="inputChange" v-model="keyword" @confirm="doSearch(false)"
				 placeholder-class="placeholder-class" placeholder="输入您要搜索的内容" confirm-type="search" style="text-indent: initial;padding-left:60rpx;display: inline;padding-top: 6px;height: 0;">
			</view>
			<view class="search-btn" @tap="closeSearch()" v-if="isShow">取消</view>

			<!-- 原样式 end -->
		</view>
		<!--  -->
		<view class="search-keyword" @touchstart="blur" v-if="isShow">
			<scroll-view class="keyword-list-box" v-show="isShowKeywordList" scroll-y>
				<!-- <view class="keyword-entry" hover-class="keyword-entry-tap" v-for="row in keywordList" :key="row.keyword">
					<view class="keyword-text" @tap="doSearch(row.keyword)">
						<rich-text :nodes="row.htmlStr"></rich-text>
					</view>
					<view class="keyword-img" @tap="setkeyword(row)">
						<image src="/static/HM-search/back.png"></image>
					</view>
				</view> -->
			</scroll-view>
			<!-- -->
			<scroll-view class="keyword-box" v-show="!isShowKeywordList" scroll-y>
				<view class="keyword-block" v-if="oldKeywordList.length>0">
					<view class="keyword-list-header">
						<view>历史搜索</view>
						<view>
							<!-- <image @tap="oldDelete" src="."></image> -->
							<uni-icons type="trash" size="20" color="#C7C7C7" @tap="oldDelete"></uni-icons>
						</view>
					</view>
					<view class="keyword">
						<view v-for="(keyword,index) in oldKeywordList" @tap="doSearch(keyword)" :key="index">{{keyword}}</view>
					</view>
				</view>
				
				<view class="keyword-block" v-if="oldKeywordList.length>0">
					<view class="keyword-list-header">
						<view><image src="/static/hot.png" style="vertical-align: text-bottom;"></image>热门搜索</view>
						<view>
							<!-- <image @tap="hotToggle" :src="'/static/HM-search/attention'+forbid+'.png'"></image> -->
							<uni-icons type="eye" size="20" color="#C7C7C7" @tap="hotToggle"></uni-icons>
						</view>
					</view>
					<view class="hot_keyword" v-if="forbid==''">
						<view  v-for="(keyword,index) in hotKeywordList" :key="index"><text>{{index+1}}、</text>{{keyword.wentiTitle}}</view>
					</view>
					<view class="hide-hot-tis" v-else>
						<view>当前搜热门搜索已隐藏</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	//引用mSearch组件，如不需要删除即可
	// import mSearch from './mehaotian-search-revision.vue';
	// import Req from '../common/util.js'
	import uniIcons from "./uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				defaultKeyword: "",
				keyword: "",
				oldKeywordList: [],
				hotKeywordList: [],
				keywordList: [],
				forbid: '',
				isShowKeywordList: false,
				isShow:false

			}
		},
		onLoad() {
			this.init();
		},
		components: {
			//引用mSearch组件，如不需要删除即可
			// mSearch
			uniIcons,
			// Req
		},
		methods: {
			init() {
				this.loadDefaultKeyword();
				this.loadOldKeyword();
				this.loadHotKeyword();

			},
			blur() {
				// 隐藏软键盘
				uni.hideKeyboard()
		
			},
			//加载默认搜索关键字
			loadDefaultKeyword() {
				//定义默认搜索关键字，可以自己实现ajax请求数据再赋值,用户未输入时，以水印方式显示在输入框，直接不输入内容搜索会搜索默认关键字
				this.defaultKeyword = "默认关键字";
			},
			//加载历史搜索,自动读取本地Storage
			loadOldKeyword() {
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						var OldKeys = JSON.parse(res.data);
						this.oldKeywordList = OldKeys;
					}
				});
			},
			//加载热门搜索
			loadHotKeyword() {
				//定义热门搜索关键字，可以自己实现ajax请求数据再赋值
				this.hotKeywordList = ['键盘', '鼠标', '显示器', '电脑主机', '蓝牙音箱', '笔记本电脑', '鼠标垫', 'USB', 'USB3.0'];
			},
			//监听输入
			inputChange(event) {
				this.isShow=true
				//兼容引入组件时传入参数情况
				var keyword = event.detail ? event.detail.value : event;
				if (!keyword) {
					this.keywordList = [];
					this.isShowKeywordList = false;
					return;
				}
				// this.isShowKeywordList = true;
				//以下示例截取淘宝的关键字，请替换成你的接口
				uni.request({
					url: this.img_url+'/system/phone/redian', //仅为示例
					success: (res) => {
						console.log(res)
						this.hotKeywordList = res.data
						// this.keywordList = this.drawCorrelativeKeyword(res.data.result, keyword);
					}
				});
			},
			//高亮关键字
			// drawCorrelativeKeyword(keywords, keyword) {
			// 	// var len = keywords.length,
			// 		keywordArr = [];
			// 	for (var i = 0; i < len; i++) {
			// 		var row = keywords[i];
			// 		//定义高亮#9f9f9f
			// 		var html = row[0].replace(keyword, "<span style='color: #9f9f9f;'>" + keyword + "</span>");
			// 		html = '<div>' + html + '</div>';
			// 		var tmpObj = {
			// 			keyword: row[0],
			// 			htmlStr: html
			// 		};
			// 		keywordArr.push(tmpObj)
			// 	}
			// 	return keywordArr;
			// },
			//顶置关键字
			setkeyword(data) {
				this.keyword = data.keyword;
			},
			//清除历史搜索
			oldDelete() {
				uni.showModal({
					content: '确定清除历史搜索记录？',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							this.oldKeywordList = [];
							uni.removeStorage({
								key: 'OldKeys'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			//热门搜索开关
			hotToggle() {
				this.forbid = this.forbid ? '' : '_forbid';
			},
			closeSearch(){
				this.isShow=false
				this.keyword = ""
			},
			//接收子组件传过来的search方法，跳转页面执行搜索
			doSearch(key) {			
				key = key ? key : this.keyword ? this.keyword : this.defaultKeyword;
				this.keyword = key;
				this.saveKeyword(key); //保存为历史 
				this.isShow=true
				let url = "/pages/searchResult/searchResult?id="+this.keyword;
					uni.navigateTo({
						url: url
					})
				//以下是示例跳转淘宝搜索，可自己实现搜索逻辑
				//#ifdef APP-PLUS
				// plus.runtime.openURL(encodeURI('taobao://s.taobao.com/search?q=' + key));
				//#endif
				//#ifdef H5
				// window.location.href = 'http://taobao://s.taobao.com/search?q=' + key
				//#endif
			},
			// 光标聚焦时,显示热门搜索内容
			showHot(){
				this.isShow = true;
			},
			//保存关键字到历史记录
			saveKeyword(keyword) {
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						console.log(res.data);
						var OldKeys = JSON.parse(res.data);
						var findIndex = OldKeys.indexOf(keyword);
						if (findIndex == -1) {
							OldKeys.unshift(keyword);
						} else {
							OldKeys.splice(findIndex, 1);
							OldKeys.unshift(keyword);
						}
						//最多10个纪录
						OldKeys.length > 10 && OldKeys.pop();
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.oldKeywordList = OldKeys; //更新历史搜索
					},
					fail: (e) => {
						var OldKeys = [keyword];
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.oldKeywordList = OldKeys; //更新历史搜索
					}
				});
			},
		}
	}
</script>
<style>
	view {
		display: block;
	}
	.search-box {
		/* width: 95%; */
		/* background-color: rgb(242, 242, 242); */
		/* padding: 15upx 2.5%; */
		display: flex;
		justify-content: space-between;
	}

	.search-box .mSearch-input-box {
		width: 100%;
	}

	.search-box .input-box {
		width: 85%;
		flex-shrink: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		/* border-radius: 28rpx; */
	}

	.search-box .search-btn {
		width: 15%;
		margin: 0 0 0 2%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		font-size: 28upx;
		color: #000;
		/* background: linear-gradient(to right, #ff9801, #ff570a); */
		border-radius: 60upx;
	}

	.search-box .input-box>input {
		width: 100%;
		height: 60upx;
		font-size: 32upx;
		border: 1px solid #D3D3D3;
		border-radius: 60upx;
		text-indent: 60rpx;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		display: block;
		/* padding: 0 3%; */
		margin: 0;
		
	}

	.placeholder-class {
		color: #B4B4B4;
		font-size:26rpx;
		margin-top: -6rpx;
	}

	.search-keyword {
		width: 100%;
		background-color: rgb(242, 242, 242);
	}

	.keyword-list-box {
		height: calc(100vh - 110upx);
		padding-top: 10upx;
		border-radius: 20upx 20upx 0 0;
		background-color: #fff;
	}

	.keyword-entry-tap {
		background-color: #eee;
	}

	.keyword-entry {
		width: 94%;
		height: 80upx;
		margin: 0 3%;
		font-size: 30upx;
		color: #333;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: solid 1upx #e7e7e7;
	}

	.keyword-entry image {
		width: 60upx;
		height: 60upx;
	}

	.keyword-entry .keyword-text,
	.keyword-entry .keyword-img {
		height: 80upx;
		display: flex;
		align-items: center;
	}

	.keyword-entry .keyword-text {
		width: 90%;
	}

	.keyword-entry .keyword-img {
		width: 10%;
		justify-content: center;
	}

	.keyword-box {
		/* height: calc(100vh - 110upx); */
		/* border-radius: 20upx 20upx 0 0; */
		background-color: #fff;
	}

	.keyword-box .keyword-block {
		padding: 10upx 0;
		border-bottom: 1px solid #F5F5F5;
	}

	.keyword-box .keyword-block .keyword-list-header {
		width: 94%;
		padding: 15rpx 0;
		font-size: 32upx;
		color: #000;
		display: flex;
		justify-content: space-between;
	}

	.keyword-box .keyword-block .keyword-list-header image {
		width: 40upx;
		height: 40upx;
	}

	.keyword-box .keyword-block .keyword {
		padding: 3px 3%;
		display: flex;
		flex-flow: wrap;
		justify-content: flex-start;
	}

	.keyword-box .keyword-block .hide-hot-tis {
		display: flex;
		justify-content: center;
		font-size: 28upx;
		color: #6b6b6b;
	}

	.keyword-box .keyword-block .keyword>view {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 60upx;
		padding: 0 20upx;
		margin: 10upx 20upx 10upx 0;
		/* height: 60upx; */
		padding: 10rpx;
		font-size: 28upx;
		background-color: rgb(242, 242, 242);
		color: #6b6b6b;
	}
	.hot_keyword{
		font-size: 28rpx;
		color: #000000;
	}
	.hot_keyword view{
		padding: 28rpx 0;
		border-top: 1px solid #F5F5F5;
	}
	.hot_keyword view>text{
		font-style:italic;
	}
	.hot_keyword view:first-child>text{
		color:#F92A41;
	}
	.hot_keyword view:nth-child(2)>text{
		color:#F92A41;
	}.hot_keyword view:nth-child(3)>text{
		color:#F92A41;
	}
	.uni-input-wrapper{
		margin-left: 30rpx;
	}
	form{
		padding-top: 2px;
	}
</style>
