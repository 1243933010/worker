<template>
	<view>
		<view style="height: 150rpx;"></view>
		<view class="top_tab">
			<view class="icon" @click="back">
				<image src="../../static/login/back.png" mode="widthFix"></image>
				<text>门店设置</text>
			</view>
			<view class="right">
				<!-- <image src="../../static/login/search.png" mode="widthFix"></image>
				<image @click="showFlog" src="../../static/login/more.png" mode="widthFix"></image> -->
			</view>
		</view>
		
		
		<view class="con">
			<view class="item" @click="goTo('./setType')">
				<view class="left">
					<text>营业状态</text>
				</view>
				<view class="right">
					<text>已停止营业</text>
					<image src="../../static/index/right-arrow.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="item noBorder" @click="goTo('./setText')">
				<view class="left">
					<text>工铺公告</text>
				</view>
				<view class="right">
					<!-- <text>已停止营业</text> -->
					<image src="../../static/index/right-arrow.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="hr"></view>
			<view class="item bigImg">
				<view class="left">
					<text>店铺头像</text>
				</view>
				<view class="right">
					<image src="../../static/logo.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<text>工铺电话</text>
				</view>
				<view class="right">
					<text>18555555555</text>
					<image src="../../static/index/right-arrow.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<text>工铺地址</text>
				</view>
				<view class="right">
					<text ></text>
					<text>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</text>
					<!-- <image src="../../static/index/right-arrow.png" mode="widthFix"></image> -->
				</view>
			</view>
			<view class="item noBorder">
				<view class="left">
					<text>营业时间</text>
				</view>
				<view class="right">
					<text>18555555555</text>
					<image src="../../static/index/right-arrow.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="hr"></view>
			<view class="item">
				<view class="left">
					<text>营业资质</text>
				</view>
				<view class="right">
					<!-- <text>18555555555</text> -->
					<image src="../../static/index/right-arrow.png" mode="widthFix"></image>
				</view>
			</view>

			<view class="hr"></view>
			<view class="item">
				<view class="left">
					<text>电子合同</text>
				</view>
				<view class="right">
					<text>已生效</text>
					<image src="../../static/index/right-arrow.png" mode="widthFix"></image>
				</view>
			</view>

			<view class="item">
				<view class="left">
					<text>已签署的协议</text>
				</view>
				<view class="right">
					<!-- <text>生效中</text> -->
					<image src="../../static/index/right-arrow.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<text>管理规范</text>
				</view>
				<view class="right">
					<!-- <text>生效中</text> -->
					<image src="../../static/index/right-arrow.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			goTo(url){
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		// background-color: #F0EFF4;
	}
	.hr{
		background: #F0EFF4;
		width: 100%;
		height: 20rpx;
	}
	.noBorder{
		border-bottom: none !important;
	}
	.bigImg{
		.right{
			width: 180rpx !important;
			image{
				width: 100% !important;
			}
		}
	}
	.con{
		width: 100%;
		box-sizing: border-box;
		padding: 15rpx 0rpx;
		.item{
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: white;
			box-sizing: border-box;
			padding: 25rpx 20rpx;
			border-bottom: 1px solid #C8C7CC;
			.left{
				width: 30%;
				font-size: 28rpx;
			}
			.right{
				// width: 70%;
				display: flex;
				flex-direction: row;
				align-items: center;
				font-size: 27rpx;
				text{
					width: 90%;
					display: flex;
					flex-wrap: wrap;
					align-self: flex-end;
				}
				image{
					width: 18rpx;
					margin-left: 15rpx;
				}
			}
		}
	}
</style>
