<template>
	<view class="">
		<view class="user_info">
			<view class="user">
				<image :src="user[0]" mode="" style="width: 130rpx;
				height: 130rpx;
				border-radius: 50%;
				background: #fff;
				margin-right: 33rpx;"></image>
				<view class="info">
					<view class="info_name">
						{{user[1]}}
					</view>
					<!-- <view class="info_desc">
						描述
					</view> -->
				</view>
			</view>
		</view>
		<view class="banner">
			<view class="nav">
				<view class="nav_item">
					<view class="num">{{zixun_num}}</view>
					<view class="title">我的咨询</view>
				</view>
				<view class="nav_item">
					<view class="num">{{jianyi_num}}</view>
					<view class="title">我的建议</view>
				</view>
				<view class="nav_item">
					<view class="num">{{tousu_num}}</view>
					<view class="title">我的投诉</view>
				</view>
			</view>
			<view style="margin-top: 70rpx;font-size: 32rpx;">我的提问 ({{this.list.length}})</view>
			<!-- question list -->
			<view class="my_question" v-for="(item,index) in list" :key ="index" @click="gotoDetail(item.wentiId)">
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
		</view>
		<van-button type="info" custom-class="btn">按钮。。。</van-button>
	</view>
</template>

<script>
	var openid = uni.getStorageSync('openid');
	
	export default {
		components: {

		},
		data() {
			return {
				list:[],
				user:[],
				type:"",
				zixun_num:0,
				jianyi_num:0,
				tousu_num:0
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
		onLoad() {	
				this.req.request('/list/'+openid,{
					"spare4":"-1"
				},'POST',(res) =>{
					if(res.success){
					console.log(res)
					this.list = res.message
						this.list.map(it=>{
							this.type = it.wentiType
							if(this.type=='1')this.zixun_num++;
							else if(this.type=='2')this.jianyi_num++;
							else if(this.type=='3')this.tousu_num++
							
						})
					this.user = res.nameAndAvator
					
					
					}else{
						uni.showModal({
							title: '提示',
							content: "请先登录吧！",
							showCancel: false,
							success: function() {
								uni.navigateTo({
									url: ""
								});
							}
						})
					}
					
			
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
	.user_info {
		width: 100%;
		height: 268rpx;
		// line-height: 240upx;
		background: #175497;

		.user {
			// display: flex;
			// align-items: center;
			// padding-top: 20rpx;
			// padding-left: 30rpx;
			text-align: center;
			color: #fff;
			line-height:58rpx;
			.info_name{
				font-size: 32rpx;
			}
			.info_desc{
				font-size: 28rpx;
			}

		}
	}

	.nav {
		padding: 15rpx 30rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow:0px 2px 20px 0px rgba(4,0,0,0.2);
		border-radius: 8rpx;
		margin-top: -55rpx;
		text-align: center;
		display: flex;
		justify-content: space-around;
		.nav_item{
			font-size: 28rpx;
			color: #666666;
			.num{
				font-size: 46rpx;
				color: #000;
			}
		}
	}

	.my_question {
		padding-top: 30rpx;
		.cont {
			// padding:20px 15px;
			width: 100%;
			// height: 800px;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 2px 6px 0px rgba(3, 0, 6, 0.1);
			border-radius: 6rpx;
	
			.cont_req {
				padding: 20rpx 15rpx;
				color: #000000;
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
	.btn{
		margin-top: 100rpx;
	}
</style>
