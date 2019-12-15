<template>
	<view class="banner">
		<!-- question list -->
		<view class="my_question" v-for="(item,index) in wentiDetail" :key ="index" @click="gotoDetail(item.wentiId)">
			<view class="cont" >
				<view class="cont_req">
					<image src="../../static/req.png"  style="width: 48rpx; height: 48rpx;vertical-align: middle;"></image>
					<text>{{item.wentiNeirong}}</text>
				</view>
				<view class="cont_res">
					<image src="../../static/res.png"  style="width: 48rpx; height: 48rpx;vertical-align: middle;"></image>
					<text style="color: #EF5858;">省机关事务局回复：</text>
					{{item.hfNeirong}}
				</view>
			</view>
		</view>
		<view v-if="wentiDetail.length==0">
			<image style="width: 750rpx;height: 480rpx;" src="../../static/no.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import request from "../../common/util.js"
	export default {
		components: {

		},
		data() {
			return {
				wentiDetail:[]
			}
		},
		methods: {
			gotoDetail(i){
			let url = "/pages/question/question?id="+i;
				uni.navigateTo({
					url: url
				})
			},
		},
		// onLoad相当于created生命周期
		onLoad(op) {
			console.log(op)
			this.req.request("/searchTitle",{
				 "title":op.id
			},'POST',(res) =>{
				console.log(res)
				this.wentiDetail = res
				
			},function(e) {
				uni.showToast({
					title: e.errMsg,
					mask: true,
					duration: 1200,
					icon: 'none'
				});
			});
		}

	}
</script>

<style lang="scss">
	.banner {
		width: 90%;
		margin: auto;
	}
	.my_question {
		padding-top: 30rpx;
		.cont {
			// padding:20px 15px;
			width: 100%;
			// height: 800px;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 2px 6px 0px rgba(3, 0, 6, 0.1);
			border-radius: 6px;
	
			.cont_req {
				padding: 20rpx 15rpx;
				font-size: 32rpx;
			}
	
			.cont_res {
				padding: 0 15rpx;
				padding-bottom: 20rpx;
				color: #666666;
				font-size: 28rpx;
			}
		}
	}
		
</style>
