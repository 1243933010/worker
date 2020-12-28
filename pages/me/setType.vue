<template>
	<view>
		<view style="height: 150rpx;"></view>
		<view class="top_tab">
			<view class="icon" @click="back">
				<image src="../../static/login/back.png" mode="widthFix"></image>
				<text>营业状态</text>
			</view>
			<view class="right">
				<text>修改营业时间</text>
				<!-- <image src="../../static/login/search.png" mode="widthFix"></image>
				<image @click="showFlog" src="../../static/login/more.png" mode="widthFix"></image> -->
			</view>
		</view>
		
		<view class="bk">
			<view class="top">
				<image src="../../static/logo.png" mode="widthFix"></image>
				<text v-if="type==='1'">已停止营业</text>
				<text v-if="type==='2'">已恢复营业</text>
			</view>
			<view class="bottom">
				<text>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</text>
			</view>
		</view>
		<view class="btn">
			<text v-if="type==='1'" @click="set('2')">恢复营业</text>
			<text v-if="type==='2'"  @click="set('1')">暂停营业</text>
		</view>
		<text>当你希望接收新订单时，请点击上方按钮恢复营业</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:'1'
			};
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			set(str){
				this.type = str;
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background: #F0EFF4 !important;
	}
	.bk{
		background: white;
		box-sizing: border-box;
		padding: 20rpx 15rpx;
		// margin-bottom: 15rpx;
		.top{
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-bottom: 15rpx;
			image{
				width: 120rpx;
				margin-right: 20rpx;
			}
		}
		.bottom{
			font-size: 26rpx;
		}
	}
	.btn{
		width: 90%;
		margin: 20rpx auto;
		border: 1px solid #12B8A6;
		padding: 15rpx 0;
		text-align: center;
		border-radius: 7rpx;
		font-size: 30rpx;
		color: #12B8A6;
		background: white;
	}
</style>
