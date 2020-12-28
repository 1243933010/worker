<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.getSystemInfo({
				success: (data) => {
					this.globalData.windowHeight = data.windowHeight;
				}
			})
			// #ifdef APP-PLUS
			let cid;
						plus.push.getClientInfoAsync((info) => {
							cid = info.clientid;
							getApp().globalData.clientid = cid;
						}, err => {}); //获取当前手机得cid
						this.$toast(`当前app的cid是${cid}`)
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData:{
			windowHeight:0
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	.top_tab{
		background: #243850;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: 60rpx 20rpx 40rpx 20rpx;
		width: 100%;
		height: 150rpx;
		position: fixed;
		top: 0;
		z-index: 100;
		.icon{
			display: flex;
			flex-direction: row;
			align-items: center;
			font-size: 30rpx;
			color: white;
			image{
				width: 40rpx;
				margin-right: 15rpx;
			}
		}
		.right{
			display: flex;
			flex-direction: row;
			align-items: center;
			image{
				width: 50rpx;
				margin-left: 15rpx;
			}
			text{
				color: white;
			}
		}
	}
</style>
