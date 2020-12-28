<template>
	<view>
		<view style="height: 150rpx;"></view>
		<view class="top_tab">
			<view class="icon" @click="back">
				<image src="../../static/login/back.png" mode="widthFix"></image>
				<text>编辑工铺</text>
			</view>
			<view class="right">
				<!-- <image src="../../static/login/search.png" mode="widthFix"></image>
				<image @click="showFlog" src="../../static/login/more.png" mode="widthFix"></image> -->
			</view>
		</view>
		
		<view class="con">
			<textarea value="" placeholder="" />
			<view class="btn">
				<text>保存</text>
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	.con{
		width: 100%;
		box-sizing: border-box;
		padding: 0 15rpx;
		margin-top: 30rpx;
		textarea{
			width: 100%;
			height: 600rpx;
			margin-bottom: 40rpx;
			border: 1px solid #C8C7CC;
		}
		.btn{
			width: 80%;
			margin: 0 auto;
			box-sizing: border-box;
			padding: 15rpx 0;
			border-radius: 10rpx;
			background: #243850;
			color: white;
			font-size: 26rpx;
			text-align: center;
		}
	}
</style>
