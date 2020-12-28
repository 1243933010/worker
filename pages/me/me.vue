<template>
	<view>
		<view style="height: 200rpx;"></view>
		<view class="top_tab">
			<view class="icon" >
				<image class="img" src="../../static/logo.png" mode="widthFix"></image>
				<view class="text">
					<text class="name">麦香包</text>
					<view class="yulan">
						<text>点击预览门店</text>
						<image src="../../static/index/right-arrow.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="right">
				<image src="../../static/logo.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="type">
			<text class="name">营业状态</text>
			<view class="icon">
				<text>已停止营业</text>
				<image src="../../static/index/right-arrow.png" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="tab">
			<view class="item" v-for="(item,index) in tabList" :key="index" @click="goTo(item.url)" :style="{'border-right':index===3?'none':''}">
				<image :src="item.icon" mode="widthFix"></image>
				<text>{{item.title}}</text>
			</view>
		</view>
		
		<view class="setting">
			<view class="item" v-for="(item,index) in setList" :key="index" :style="{'border-bottom':index===4?'none':''}">
				<view class="left">
					<text>{{item.title}}</text>
				</view>
				<view class="right">
					<text :style="{color:item.color}">{{item.rightText}}</text>
					<image src="../../static/index/right-arrow.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		
		<view class="logut">
			<text>退出登录</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList:[
					{title:'门店设置',icon:'../../static/logo.png',url:'./setting'},
					{title:'订单设置',icon:'../../static/logo.png'},
					{title:'打印设置',icon:'../../static/logo.png'},
					{title:'消息和铃声',icon:'../../static/logo.png'},
				],
				setList:[
					{title:'联系我的业务经理',rightText:'18555555555',color:'#30B9AB'},
					{title:'商家服务中心'},
					{title:'产品建议反馈'},
					{title:'当前账号',rightText:'18555555555',color:'#243850'},
					{title:'检查更新',rightText:'18555555555',color:'#243850'}
				]
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
		height: 200rpx;
		.icon{
			width: 50%;
			.img{
				width: 120rpx;
				margin-right: 15rpx;
			}
			.text{
				display: flex;
				flex-direction: column;
				.name{
					font-size: 34rpx;
					margin-bottom: 15rpx;
				}
				.yulan{
					display: flex;
					flex-direction: row;
					align-items: center;
					font-size: 26rpx;
					text{
						margin-right: 10rpx;
					}
					image{
						width: 20rpx;
					}
				}
			}
		}
		.right{
			image{
				width: 60rpx;
			}
		}
	}
    .type{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		border-bottom: 20rpx solid #F0EFF4;
		padding: 15rpx 20rpx;
		.name{
			font-size: 28rpx;
		}
		.icon{
			display: flex;
			flex-direction: row;
			align-items: center;
			color: #2B9939;
			image{
				width: 20rpx;
				margin-left: 15rpx;
			}
		}
	}
	.tab{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 20rpx solid #F0EFF4;
		.item{
			width: 25%;
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 26rpx;
			box-sizing: border-box;
			padding: 30rpx 0;
			border-right: 1px solid #808080 ;
			image{
				width: 60rpx;
				margin-bottom: 15rpx;
			}
		}
	}
    .setting{
		width: 100%;
		box-sizing: border-box;
		border-bottom: 20rpx solid #F0EFF4;
		margin-bottom: 40rpx;
		.item{
			width: 100%;
			box-sizing: border-box;
			padding: 25rpx 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #C0C0C0;
			margin-bottom: 15rpx;
			.left{
				font-size: 27rpx;
			}
			.right{
				display: flex;
				flex-direction: row;
				align-items: center;
				font-size: 26rpx;
				image{
					width: 20rpx;
					margin-left: 15rpx;
				}
			}
		}
	}
	.logut{
		font-size: 30rpx;
		color: red;
		text-align: center;
		// background: #F0EFF4;
		padding: 25rpx 0;
	}
</style>
