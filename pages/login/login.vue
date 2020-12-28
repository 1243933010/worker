<template>
	<view>
		<view class="login_top">
			<text></text>
			<text style="font-size: 38rpx;color: #333333;font-weight: 600;">登录</text>
			<!-- <image src="../../static/index/guanbi.png" mode="widthFix" @click="back"></image> -->
			<text style="text-align: right;">开店</text>
		</view>


		<view class="address">
			<view class="tab" 
			v-for="(item,index) in tabList" 
			:key="index"
			@click="Switch(index)"
			:class="[ind===index?'active':'']">
			<view class="tab_text">
				<text>{{item.title}}</text>
			</view>
			
			</view>
			
		</view>
		
		<view class="pwd" v-if="ind===0">
			<view class="inp">
				<image src="../../static/index/address.png" mode="widthFix"></image>
			    <input type="text" v-model="phone" placeholder="请输入账号" />
			</view>
			<view class="inp">
				<image src="../../static/index/address.png" mode="widthFix"></image>
			    <input type="text" v-model="pwd"  placeholder="请输入密码"/>
			</view>
		</view>
		<view class="code" v-if="ind===1">
			<view class="phone">
				<view class="icon">
					<image src="../../static/index/address.png" mode="widthFix"></image>
				    <input type="text" v-model="phone" placeholder="请输入手机号" />
				</view>
				<view class="yz"><text>获取验证码</text></view>
			</view>
			<view class="inp">
				<image src="../../static/index/address.png" mode="widthFix"></image>
				<input type="text" v-model="code"  placeholder="请输入验证码"/>
			</view>
		</view>
		<!-- <view class="address yz">

			<view class="bottom">
				<input type="text" v-model="pwd" placeholder="请输入密码" />
				<image src="../../static/index/hide.png" mode="widthFix"></image>
			</view>
		</view>
 -->

		<view class="btn" @click="btn">
			<view class=""><text>登录</text></view>
		</view>
		<view class="other">
			<text>登录遇到问题？</text>
			<text @click="registered">注册</text>
		</view>


	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				account:'',
				pwd:'',
				code:'',
				phone:'',
				tabList: [{
						title: '账号密码登录'
					},
					{
						title: '手机验证码登录'
					}
				],
				ind: 1
			};
		},
		mounted() {

		},
		onLoad() {

			// getApp().globalData.flog = false;
		},
		methods: {
			Switch(ind){
				this.ind = ind;
			},
			async btn() {
				let head = {
					'InfoType': '1',
					'InterfaceName': 'getOneUserLogin'
				}
				let obj = {
					strPhoneNumber: this.phone,
					strUserPassword: this.pwd,
					strCode: ''
				}
				let res = await this.$request('/Worker/Item', head, obj);
				this.$toast(res.data.errorInfo);
				if (res.data.errorCode === 200) {
					uni.setStorageSync('userId', res.data.result.ID);
					setTimeout(() => {
						uni.switchTab({
							url: '../index/index'
						})
					}, 500)
					return false;
				}
				this.$toast(res.data.errorInfo);
				// console.log(res)
			},
			registered(){
				uni.navigateTo({
					url:'./registered'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		// position: relative;
	}

	.login_top {
		width: 100%;
		padding-top: 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #f0f0f0;

		image {
			width: 40rpx;
		}

		color: #00C9A0;
		font-size: 30rpx;
		margin-bottom: 80rpx;
		padding-left: 40rpx;
		padding-right: 40rpx;
		padding-bottom: 20rpx;
		box-sizing: border-box;

		text {
			width: 30%;
			text-align: center;
		}
	}

	.title {
		font-size: 48rpx;
		color: #333333;
		text-align: left;
		padding-left: 20rpx;
		// font-weight: bold;
		margin-bottom: 40rpx;
	}

	.logo {
		width: 100%;
		text-align: center;
		margin: 40rpx 0;

		image {
			width: 180rpx;
		}
	}

	.btn {
		// position: fixed;
		width: 100%;
		// bottom: 20rpx;
		margin-top: 50rpx;
		margin-bottom: 50rpx;

		view {
			width: 90%;
			margin: 0 auto;
			background: #3DC6B6;
			box-sizing: border-box;
			padding: 20rpx 0;
			font-size: 36rpx;
			color: white;
			border-radius: 10rpx;
			text-align: center;
		}
	}

	.other {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 30rpx;
		color: #05BEA6;
		box-sizing: border-box;
		padding: 0 30rpx;
	}

    .active{
		border-bottom: 2px solid #05BEA6;
		color: #05BEA6;
	}
	.address {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #f0f0f0;
		height: 65rpx;
		margin-bottom: 20rpx;
		.tab{
			width: 50%;
			text-align: center;
			font-size: 26rpx;
			height: 65rpx;
			// line-height: 60rpx;
		}
	}
	.pwd,.code{
		width: 100%;
		box-sizing: border-box;
		// padding: 20rpx;
		.phone{
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #f0f0f0;
			padding: 20rpx ;
			.icon{
				display: flex;
				flex-direction: row;
				align-items: center;
				image{
					width: 40rpx;
					margin-right: 15rpx;
				}
				input{
					font-size: 26rpx;
					color: #333333;
				}
			}
			.yz{
				width: 200rpx;
				padding: 15rpx 0;
				background: #F7F7F7;
				color: #333333;
				font-size: 26rpx;
				text-align: center;
				border-radius: 10rpx;
				text{
					font-size: 23rpx;
				}
			}
		}
		.inp{
			display: flex;
			flex-direction: row;
			align-items: center;
			border-bottom: 1px solid #f0f0f0;
			padding: 20rpx ;
			image{
				width: 40rpx;
				margin-right: 15rpx;
			}
			input{
				font-size: 26rpx;
				color: #333333;
			}
		}
	}
</style>
