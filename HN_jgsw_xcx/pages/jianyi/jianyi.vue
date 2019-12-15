<template>	
	<view class="banner">
		<!-- search -->
		<form class="input-box" action="javascript:return true;">
			<image style="width: 40rpx; height: 40rpx;position: absolute;left: 70rpx;top: 20rpx;" src="../../static/search.png"
			 mode="" class="item_img"></image>
			<input class="uni-input" placeholder="河南省机关事务管理局" @click="goHotSearch" confirm-type="search" @confirm="searchResult" style="background: #F2F2F2; padding: 17rpx 78rpx;margin-top: 21rpx;border-radius: 28rpx;" />
		</form>
		<!-- <HMsearch></HMsearch> -->

		<!-- question select -->
		<view class="tips">
			<view class="tips_content">

				<view class="question_title" style="font-weight: 500;color: #999999;font-size:28rpx;">
					<text style="vertical-align: middle;">问题标题：</text>
					<input type="text" v-model="title" placeholder="请输入问题标题（20字以内）" placeholder-style="color:#B5B5B5" style="display: inline-block;vertical-align: middle;font-size:28rpx;color:#000000;width: 75%;" />
				</view>
				<view class="line" style="height:2rpx;background:rgba(242,242,242,1);border-radius:2rpx;margin: 31rpx auto;"></view>

				<!-- <view style="text-align: center;color:rgba(199,199,199,1);height:23px;" @click="open" v-if="!isShow">展开所有选项<uni-icons
					 type="arrowdown" size="20" color="#C7C7C7"></uni-icons>
				</view> -->
				<!-- 折叠内容 -->
				<view class="tips_content_display">
					<view style="color:rgba(153,153,153,1);margin-bottom: 31rpx;">问题说明：</view>
					<textarea v-model="content" placeholder-style="color:#B5B5B5" placeholder="请输入问题标题（20字以内）"
					 style="background:rgba(249,249,249,1);border-radius:8rpx;height: 265rpx;line-height:42rpx;padding: 30rpx 20rpx;display: table-cell" />
					 
					<!-- 上传图片 -->
					<view style="font-family:PingFang SC;font-weight:500;color:rgba(153,153,153,1);margin:49rpx auto;margin-bottom:32rpx;">选择图片或视频：</view>
					
					<view style="padding: 30rpx;background:rgba(249,249,249,1);border-radius:8rpx;display: flex;align-items: center;">
						<view v-for="(a,i) in temp_img" :key="i" style="position: relative;">
							<image :src="img_url+a" style="width:138upx;height: 138upx;margin:20upx 20upx 0 0;" mode=""></image>
							<view style="position: absolute;width: 30upx;height: 30upx;top:10%;right: 10%;" @click="del_img(i)">
								<image src="../../static/close1.png" style="width: 30upx;height: 30upx" mode="" ></image>
							</view>
						</view>
						
						<view class="" style="width: 138rpx; height: 138rpx;border:1px solid rgba(217,217,217,1);border-radius:8rpx;text-align: center;" @click="choose_img">
							<uni-icons type="camera" size="30" color="#B5B5B5" style="display: inherit;margin-top: 20rpx;"></uni-icons>
							<text style="color: #B5B5B5;">上传</text>
						</view>
							
					</view>
					
				         
						 
				</view>
				 
								 
				 <button @type="primary" @click="submit">我要咨询</button>
			</view>	
		</view>
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

</template>

<script>
	import uniIcons from "../../components/uni-icons/uni-icons.vue"
	import HMsearch from '../../components/HMsearch.vue'
	// import Attachment from '../../components/jin-attachment/jin-attachment.vue';
	var res = global.isLogin();
	var openid = uni.getStorageSync('openid');
	console.log(openid)
	
	export default {
		components: {
			uniIcons,
			HMsearch
			// Attachment
		},
		data() {
			return {
				title:"",
				content:"",
				checked: true,			
				list: [],
				isShow: true,
				img_url: `${this.img_url}`,
				temp_img: [],
				temp_video:[],
				type:[]
		
			}
		},
		methods: {
			goHotSearch(){
				uni.navigateTo({
					url: '/pages/hotSearch/hotSearch'
				});
			},
			/**
			 * 问答list
			 * @wentiType类型
			 */
			getLiuyanList() {	
				this.req.request('/list/'+openid,{
					
					"tmyZs":0
				},'POST',(res) =>{
					if(res.success){
					console.log(res)
					this.list = res.message	
					}
					
				},function(e) {
					uni.showToast({
						title: e.errMsg,
						mask: true,
						duration: 1200,
						icon: 'none'
					});
				});
				
				
			},
			searchResult(){
				this.getLiuyanList()
			},
			gotoDetail(i){
			// console.log(i)
			let url = "/pages/question/question?id="+i;
				uni.navigateTo({
					url: url
				})
			},
			// 上传图片
			choose_img() {
				let _this = this,
					tempFilePaths;
				uni.chooseImage({
					count: 6,
					success: (res) => {
						tempFilePaths = res.tempFilePaths[0];
						uni.uploadFile({
							url: this.img_url+'/system/phone/upload/'+openid,
							filePath: tempFilePaths,
							name: 'file',
							success: (e) => {								
								let img_list = JSON.parse(e.data);
								console.log(img_list)
								
								// var imgType="gif"; "jpeg"; "jpg"; "bmp"; "png";
								// var imgType=["gif","jpeg","jpg","bmp","png"];
								// var videoType=["avi","wmv","mkv","mp4","mov","rm","3gp","flv","mpg","rmvb"];
								this.type = img_list.data
								console.log(this.type)
								this.type.forEach(fileName =>{
									var first = fileName.lastIndexOf(".");//取到文件名开始到最后一个点的长度
									var namelength = fileName.length;//取到文件名长度
									var filesuffix = fileName.substring(first + 1, namelength );//截取获得后缀名
									if(filesuffix =='jpg'||'png'){
										_this.temp_img.push(img_list.data);
									}else if(filesuffix =='mp4'){
										_this.temp_video.push(img_list.data);
									}
								
								})
							
								
								console.log(_this.temp_img);
							},
					
						});
			
					}
				});
			},
			del_img(e) {
							this.temp_img.splice(e, 1);
						},
			
		
			// 提交问题
			submit(){
				
				if(!this.title||!this.content){
					uni.showToast({
						title: '请输入完整的内容~',
						mask: true,
						duration: 1100,
						icon: 'none'
					});
					return
				}else if(!res){
					uni.showModal({
						title: '提示',
						content: "请先登录吧！",
						showCancel: false,
						success: function() {
							uni.navigateTo({
								url: ""
							})	
						}
					})
				}
				
				this.req.request('/addwt/'+openid, {
					wentiTitle:this.title,
					wentiNeirong:this.content,
					sfnmStatus:1,
					images:this.temp_img,
					videos:this.temp_video,
					"wentiType": "3"
				}, 'POST', (res)=> {
					console.log(res)
					if (res.success) {
						this.title="",
						this.content="",
						this.temp_img=[]
						uni.showToast({
							title: res.message,
							mask: true,
							duration: 1200,
							icon: 'none'
						});
						setTimeout(()=>{
							uni.navigateTo({
							url: '/pages/my/my'
						})
						},2000)	
					} 
				
				},function(e) {
					uni.showToast({
						title: e.message,
						mask: true,
						duration: 1200,
						icon: 'none'
					});
				})
				
			},
			 
		},
		
		// onLoad相当于created生命周期
		onLoad() {
			this.getLiuyanList()
		}

	}
</script>

<style lang="scss">
	.banner {
		width: 90%;
		margin: auto;
	}

	.tips {
		margin-top: 29rpx;

		.title {
			font-weight: Medium;
			font-size: 32rpx;
			font-weight: 600;
			color: rgba(0, 0, 0, 1);
			margin-right: 20upx;
			font-family: PingFang-SC;
		}

		.tips_content {
			
			background: rgba(255, 255, 255, 1);
			border: 1rpx solid rgba(242, 242, 242, 1);
			box-shadow: 0px 4rpx 20rpx 0px rgba(0, 0, 0, 0.08);
			border-radius: 10rpx;
			padding: 67rpx 52rpx 42rpx 48rpx;
			button{
				background:linear-gradient(90deg,#4E9DE0,#1D7DBA);border-radius:41rpx;font-size:32rpx;margin: 30rpx 0;color: #fff;
			}

		}
	}
.imgBox{
    position: relative;
    width: 2.15rem;
    height: 2.15rem;
    margin: 0.4rem 0;
}
.file-box{
    position: relative;
    width: 2.15rem;
    height: 2.15rem;
    display: inline-block;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    margin: 0.4rem 0;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 2.15rem;
    text-align: center;
    font-size: 1.2rem;
}
.uploadphoto{
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
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
