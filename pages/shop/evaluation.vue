<template>
	<view>
		<view style="height: 150rpx;"></view>
		<view class="top_tab">
			<view class="icon" @click="goIndex">
				<image src="../../static/login/back.png" mode="widthFix"></image>
			</view>
			<view class="center">
				<view @click="setTop(0)" :class="topInd===0?'active':''" class="one"><text>用户评价</text></view>
				<view @click="setTop(1)" :class="topInd===1?'active':''" class="two"><text>评价统计</text></view>
			</view>
			<view class="right"></view>
		</view>
		
		<view class="box" v-show="topInd===0">
			<pingjia id="111" :key="key"/>
		</view>
		<view class="box" v-show="topInd===1">
			<tongji id="111"/>
		</view>
	</view>
</template>

<script>
	import pingjia from '@/components/pingjia.vue'
	import tongji from '@/components/tongji.vue'
	export default {
		components:{
			pingjia,
			tongji
		},
		data() {
			return {
				topInd:0,
				key:0
			};
		},
		onShow() {
			this.key++;
		},
		methods:{
			setTop(num){
				this.topInd = num;
			},
			goIndex(){
				uni.navigateBack({
					delta:1
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.active{
		background: white !important;
		color: #243850 !important;
		border: none !important;
		padding: 15rpx 0 !important;
	}
	.top_tab{
		.center{
			display: flex;
			justify-content: center;
			align-items: center;
			view{
				width: 200rpx;
				color: white;
				font-size: 28rpx;
				border: 2px solid white;
				text-align: center;
				padding: 10rpx 0;
			}
			.one{
				border-right: none;
				border-top-left-radius: 15rpx;
				border-bottom-left-radius: 15rpx;
			}
			.two{
				border-top-right-radius: 15rpx;
				border-bottom-right-radius: 15rpx;
			}
		}
	}
</style>
