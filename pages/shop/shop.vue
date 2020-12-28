<template>
	<view>
		<view style="height: 150rpx;"></view>
		<view class="top_tab">
			<view class="icon" @click="goIndex">
				<!-- <image src="../../static/login/back.png" mode="widthFix"></image>
				<text>工铺管理</text> -->
			</view>
			<view class="right">
				<text class="h1">0</text>
				<text>今日单量/单</text>
				<!-- <image src="../../static/login/search.png" mode="widthFix"></image>
				<image @click="showFlog" src="../../static/login/more.png" mode="widthFix"></image> -->
			</view>
		</view>
		
		<view class="msg">
			<text>消息中心</text>
			<view class="num">
				<text>10</text>
				<image src="../../static/index/bottom_arrow.png" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="shop">
			<view class="title"><text>工铺管理</text></view>
			<view class="con">
				<view class="" @click="goTo('../login/shopManagement')">
					<image src="../../static/logo.png" mode="widthFix"></image>
					<text>技能管理</text>
				</view>
				<view class="" @click="goTo('../shop/evaluation')">
					<image src="../../static/logo.png" mode="widthFix"></image>
					<text>客户管理</text>
				</view>
				<view class="">
					<image src="../../static/logo.png" mode="widthFix"></image>
					<text>财报详细</text>
				</view>
				<view class="">
					<image src="../../static/logo.png" mode="widthFix"></image>
					<text>经营数据</text>
				</view>
			</view>
		</view>
		
		<view class="shop">
			<view class="title"><text>常用服务</text></view>
			<view class="con">
				<view class="">
					<image src="../../static/logo.png" mode="widthFix"></image>
					<text>订单保险</text>
				</view>
				<view class="">
					<image src="../../static/logo.png" mode="widthFix"></image>
					<text>邀请入驻</text>
				</view>
				<view class="">
					<image src="../../static/logo.png" mode="widthFix"></image>
					<text>到点自取</text>
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
			goTo(url){
				// uni.navigateTo({
				// 	url:'../shop/evaluation'
				// })
				uni.navigateTo({url});
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		// background: #F0EFF4;
	}
	.top_tab{
		.right{
			display: flex;
			flex-direction: column;
			align-items: center;
			.h1{
				font-size: 50rpx;
				color: white;
			}
			text{
				color: #808080;
			}
		}
	}
	.msg{
		width: 100%;
		box-sizing: border-box;
		padding: 15rpx 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 20rpx solid #F0EFF4;
		margin-bottom: 20rpx;
		.num{
			display: flex;
			flex-direction: row;
			align-items: center;
			text{
				box-sizing: border-box;
				background: #FE595A;
				padding: 5rpx 15rpx;
				color: white;
				font-size: 26rpx;
				border-radius: 20rpx;
			}
			image{
				width: 40rpx;
				margin-left: 15rpx;
			}
		}
	}
	.shop{
		width: 100%;
		margin-bottom: 40rpx;
		.title{
			margin-left: 15rpx;
			font-size: 26rpx;
			margin-bottom: 20rpx;
		}
		.con{
			border-top:1px solid #C0C0C0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 10rpx solid #c0c0c0;
			view{
				width: 25%;
				border-right: 1px solid #c0c0c0;
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 26rpx;
				padding: 25rpx 0;
				image{
					width: 100rpx;
					margin-bottom: 15rpx;
				}
			}
		}
	}
</style>
