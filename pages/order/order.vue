<template>
	<view>
		<view style="height: 220rpx;"></view>
	<view class="top_bk">
		<view class="top">
			<view class="time">
				<text >04.01</text>
			</view>
			<view class="inp">
				<image src="../../static/index/search.png" mode="widthFix"></image>
				<input type="text" placeholder="订单号/手机号/地址" />
			</view>
			<text class="right">预订单</text>
		</view>
		<view class="tab">
			<view class="item" :class="index===ind?'active':''" v-for="(item,index) in tabList" :key="index" @click="setTab(index)">
				<text>{{item.name}}</text>
			</view>
		</view>
	</view>
	
	
	<view class="doing">
		<view class="btn"><text>立即出发</text></view>
		<view class="msg">
			<view class="top">
				<view class="name">
					<text class="name_title">李女士</text>
					<text class="label">门店新客</text>
				</view>
				<view class="icon">
					<image src="../../static/index/QQ.png" mode="widthFix"></image>
					<image src="../../static/index/address.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="mobile">
				<text>18555555555</text>
			</view>
			<view class="address">
				<text>测试地址测试地址测试地址测试地址测试地址</text>
			</view>
		</view>
		<view class="other">
			<view class="hr"><text>开工时间：明天</text></view>
			<view class=""><text>附带工具：自备</text></view>
			<view class="hr"><text>附带材料：线</text></view>
		</view>
	</view>
	
	<view class="jineng">
		<view class="top">
			<text class="title">技能</text>
		    <view class="switch"><text>收起</text></view>
		</view>
		<view class="jineng_list">
			<view class="item">
				<text>老王水电</text>
				<text>x1天</text>
				<text>预计收入:￥100</text>
			</view>
			<view class="item">
				<text>老王水电</text>
				<text>x1天</text>
				<text>预计收入:￥100</text>
			</view>
		</view>
	</view>
	<view class="fuwu">
		<text>本单服务费</text>
		<text>无</text>
	</view>
	<view class="shouru">
		<text>本单预计收入</text>
		<text>200</text>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ind:0,
				tabList:[
					{name:'进行中'},
					{name:'已完成'},
					{name:'已取消'}
				]
			};
		},
		methods:{
			jineng(){
				uni.navigateTo({
					url:'../login/shopManagement'
				})
			},
			pingjia(){
				uni.navigateTo({
					url:'./evaluation'
				})
			},
			setTab(index){
				this.ind = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.shouru{
		width: 100%;
		box-sizing: border-box;
		padding: 15rpx 20rpx;
		font-size: 35rpx;
		font-weight: 600;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15rpx;
	}
	.jineng{
		width: 100%;
		box-sizing: border-box;
		padding: 40rpx 20rpx;
		.top{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 20rpx;
			.title{
				font-size: 45rpx;
				font-weight: 600;
			}
			.switch{
				color: #06C1AE;
				font-size: 26rpx;
			}
		}
		.jineng_list{
			width: 100%;
			background: #FFFCED;
			box-sizing: border-box;
			padding: 40rpx 20rpx;
			font-size: 30rpx;
			font-weight: 600;
			.item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 15rpx;
			}
		}
	}
	.fuwu{
		width: 100%;
		box-sizing: border-box;
		padding: 15rpx 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px dashed #555555;
		border-bottom: 1px dashed #555555;
		margin-bottom: 50rpx;
	}
	page{
		background: #F9F9F9;
	}
	.active{
		color: #06C1AE !important;
		border-bottom: 3px solid #06C1AE;
	}
		.top_bk{
			width: 100%;
			background: #243850;
			padding-top: 44rpx;
			height: 160rpx;
			position: fixed;
			top: 0;
			.top{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 15rpx;
				.time{
					display: flex;
					flex-direction: row;
					align-items: center;
					color: white;
				}
				.inp{
					width: 60%;
					display: flex;
					flex-direction: row;
					align-items: center;
					background: #314358;
					box-sizing: border-box;
					padding: 5rpx 10rpx;
					image{
						width: 40rpx;
					}
				}
				.right{
					font-size: 26rpx;
					color: white;
				}
			}
			.tab{
				width: 100%;
				box-sizing: border-box;
				padding: 0 40rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.item{
					font-size: 26rpx;
					height: 94rpx;
					color: white;
					box-sizing: border-box;
					padding: 25rpx 20rpx;
				}
			}
		}
		.doing{
			width: 100%;
			box-sizing: border-box;
			padding: 0 20rpx;
			.btn{
				color: #06C1AE;
				font-weight: 600;
				margin-bottom: 15rpx;
			}
			.msg{
				.top{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.name{
						display: flex;
						flex-direction: row;
						align-items: center;
						font-size: 24rpx;
						color: #808080;
						margin-bottom: 15rpx;
						.name_title{
							font-size: 40rpx;
							font-weight: 600;
							color: black;
							margin-right: 15rpx;
						}
					}
					.icon{
						image{
							width: 45rpx;
							margin-right: 15rpx;
						}
					}
				}
				.mobile{
					color: #06C1B0;
					font-size: 26rpx;
					margin-bottom: 15rpx;
				}
				.address{
					font-size: 26rpx;
					color: #808080;
					margin-bottom: 25rpx;
				}
			}
			.other{
				font-size: 32rpx;
				font-weight: 600;
				view{
					margin-bottom: 25rpx;
				}
				.hr{
					border-bottom: 1px dashed #808080;
					padding-bottom: 25rpx;
				}
			}
		}
</style>
