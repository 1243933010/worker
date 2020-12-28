<template>
	<view class="content">
	  <view class="header">
	  	<view class="top">
	  		<view class=""></view>
	  		<view class=""><text>待处理</text></view>
	  		<view style="text-align: right;"><image src="../../static/index/msg.png" mode="widthFix"></image></view>
	  	</view>
		<view class="tab">
			<view class="" :class="ind===0?'active':''" @click="setTab(0)">
				<text class="text">新</text>
				<text>新订单</text>
			</view>
			<view class="" :class="ind===1?'active':''" @click="setTab(1)">
				<text  class="text">催</text>
			   <text>催单</text>
			</view>
			<view class="" :class="ind===2?'active':''" @click="setTab(2)">
				<text class="text">退</text>
				<text>退单</text>
			</view>
		</view>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ind:0
			}
		},
		onLoad() {

		},
		methods: {
			setTab(num){
				this.ind = num;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.active{
		color: #07BDAB !important;
		border-bottom: 3px solid #07BDAB;
		.text{
			color: white !important;
			background: #02C3B1 !important;
		}
	}
	.header{
		background: #243850;
		height: 248rpx;
		.top{
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 30rpx;
			color: white;
			box-sizing: border-box;
			padding: 15rpx 20rpx;
			margin-bottom: 30rpx;
			view{
				width: 35%;
				text-align: center;
			}
			image{
				width: 40rpx;
			}
		}
		.tab{
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			padding: 0rpx 20rpx;
			view{
				display: flex;
				flex-direction: column;
				align-items: center;
				box-sizing: border-box;
				padding: 0 20rpx;
				height: 140rpx;
				text{
					font-size: 26rpx;
					color: white;
				}
				.text{
					font-size: 36rpx;
					background: #3A4C62;
					box-sizing: border-box;
					padding: 10rpx 20rpx;
					border-radius: 20rpx;
					margin-bottom: 15rpx;
				}
			}
		}
	}
</style>
