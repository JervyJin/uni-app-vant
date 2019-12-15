<template>
	<view class="banner">
		<view class="question_title">
			<text style="font-size:36rpx;">{{wentiDetail.wentiTitle}}</text>
			<view class="question_user">
				
				<text>{{wentiDetail.createTime}}/{{wentiDetail.wentiType=='1'? '咨询':this.wentiDetail.wentiType=='2'? '投诉':'建议'}}</text>
				<view style="">
					<!-- <image src="" mode=""></image> -->
				</view>
			</view>
		</view>
		<view class="line"></view>
		<view class="my_question">
			<view class="cont" >
				<view class="cont_req">
					<image src="../../static/req.png"  style="width: 48rpx; height: 48rpx;vertical-align: middle;"></image>
					<text>网友“{{wentiDetail.liuyanName}}”</text>
					<view style="">{{wentiDetail.wentiNeirong}}</view>
				</view>
				<!-- <view class="imgs">
					<image src="" mode=""></image>
				</view> -->
				<view class="cont_res">
					<image src="../../static/res.png"  style="width: 48rpx; height: 48rpx;vertical-align: middle;"></image>
					<text style="color: #EF4545;">省机关事务局回复：</text>
					<text>{{wentiDetail.hfNeirong}}</text>
					
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		components: {
			
		},
		data() {
			return {
				wentiDetail:{}
			}
		},
		methods: {
			
	// 		questionList(){
	// 
	// 			var url = `/detail/${this.wtId}`
	// 			this.req.request('url',{
	// 			},'GET',(res) =>{
	// 				console.log(res)		
	// 			},function(e) {
	// 				uni.showToast({
	// 					title: e.errMsg,
	// 					mask: true,
	// 					duration: 1200,
	// 					icon: 'none'
	// 				});
	// 			});
	// 		}
				

		},
		// onLoad相当于created生命周期
		onLoad(options) {
			// var url = `/detail/${this.wtId}`
			this.req.request(`/detail/${options.id}`,{
			},'GET',(res) =>{
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
			 // console.log(options.id)
			 
		}

	}
</script>

<style lang="scss">
	.banner{
		padding: 27rpx 30rpx;
		margin-top: auto;
		background: #FFFFFF;
		.question_user{
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #666666;
			margin-top: 20rpx;
		}
		.line{
			margin: 40rpx 0;
			height:1rpx;
			background:rgba(245,245,245,1);
		}
		.my_question {
			// padding-top: 30px;
			.cont {
				width: 100%;
				.cont_req{
					color: #666666;
					background: #F1F6F8;
					margin-bottom: 53rpx;
					padding: 15rpx;
					font-size: 30rpx;
				}
				.cont_res {
					padding: 15rpx;
					// padding-bottom: 20rpx;
					background: #F7F8FC;
					border-radius:8rpx;
					font-size: 30rpx;
				}
			}
		}
		
	}
</style>
