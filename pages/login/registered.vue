<template>
	<view>
		<view class="bk">
			<view class="bk_text">
				<text>验证手机号</text>
				<text>完善账号信息</text>
				
			</view>
			<view class="bk_radio">
				<view class="one"><text>1</text></view>
				<view class="hr"></view>
				<view class="two"><text>2</text></view>
			</view>
		</view>
		
		<view class="code" >
			<view class="phone">
				<view class="icon">
					<image src="../../static/index/address.png" mode="widthFix"></image>
				    <input type="text" v-model="phone" placeholder="请输入手机号" />
				</view>
				<view class="yz"><text>获取验证码</text></view>
			</view>
			<view class="inp">
				<image src="../../static/index/address.png" mode="widthFix"></image>
				<input type="text" v-model="pwd"  placeholder="请输入密码"/>
			</view>
			<view class="inp">
				<image src="../../static/index/address.png" mode="widthFix"></image>
				<input type="text" v-model="confirmPwd"  placeholder="确认密码"/>
			</view>
		</view>
		<view class="next" @click="next">
			<text>下一步</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:'',
				pwd:'',
				confirmPwd:''
			};
		},
		methods:{
			async next(){
				let obj = {strPhoneNumber:this.phone,strCode:'',strUserPassword:this.pwd,strUserRepeatPassword:this.confirmPwd}
				let header={InfoType:'1',InterfaceName:'postOneUserInfo'};
				let data = await this.$request('/Worker/Item',header,obj);
				console.log(data);
				if(data.data.errorCode===200){
					uni.setStorageSync('userId',data.data.result.ID)
					setTimeout(() => {
						uni.switchTab({
							url: './shop'
						})
					}, 500)
					return false;
				}
				this.$toast(data.data.errorInfo)
				// uni.navigateTo({
				// 	url:'./shop'
				// })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bk{
		width: 100%;
		background: #06C1B0;
		box-sizing: border-box;
		padding: 40rpx 0;
		.bk_text{
			width: 80%;
			margin: 20rpx auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 26rpx;
			color: white;
		}
		.bk_radio{
			width: 70%;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 26rpx;
			.one{
				width: 60rpx;
				height: 60rpx;
				line-height: 60rpx;
				border-radius: 50%;
				text-align: center;
				background: white;
				color:#06C1B0 ;
			}
			.hr{
				width: 80%;
				height: 1px;
				background: white;
			}
			.two{
				width: 60rpx;
				height: 60rpx;
				line-height: 60rpx;
				border-radius: 50%;
				text-align: center;
				// background: white;
				color:white ;
				border: 1px solid white;
			}
		}
	}
	
	.pwd,.code{
		width: 100%;
		box-sizing: border-box;
		// padding: 20rpx;
		margin-bottom: 40rpx;
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
	.next{
		background: #3DC6B6;
		width: 80%;
		margin: 0 auto;
		text-align: center;
		font-size: 30rpx;
		color: white;
		border-radius: 10rpx;
		padding: 18rpx 0;
	}
</style>
