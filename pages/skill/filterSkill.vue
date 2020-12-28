<template>
	<view>
		<view class="top_tab">
			<view class="icon" @click="back">
				<image src="../../static/login/back.png" mode="widthFix"></image>
				<text>装修类</text>
			</view>
			<view class="right" @click="save">
				<text>保存</text>
			</view>
		</view>

		<view class="box">
			<view class="item" v-for="(item,index) in list" :key="index">
				<view class="left">
					<view class="check">
						<checkbox-group style="transform:scale(0.7)" @change="check($event,index)">
							<label>
								<checkbox value="cb" :checked="item.flog" />
							</label>
						</checkbox-group>
					</view>
					<image src="../../static/logo.png" mode="widthFix"></image>
					<view class="con">
						<text>{{item.name}}</text>
						<text>100/天</text>
						<text>可出工次数5</text>
						<text>可出工人数2</text>
					</view>
				</view>
				<view class="right">
					<text @click="toTop(item,index)">往上</text>
					<text @click="toBottom(item,index)">往下</text>
				</view>
			</view>
		</view>


		<view class="fixed">
			<view class="con">
				<view class="check">
					<checkbox-group style="transform:scale(0.7)" @change="allChange">
						<label>
							<checkbox value="all" :checked="false" />
						</label>
					</checkbox-group>
					<text>全部</text>
				</view>
				<view class="">
					<text>上工营业</text>
				</view>
				<view class="">
					<text>停工休息</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '老王水电',
						flog: false
					},
					{
						name: '老李水电',
						flog: false
					},
					{
						name: '老岳水电',
						flog: false
					},
					{
						name: '老图水电',
						flog: false
					},
					{
						name: '老水水电',
						flog: false
					},
					{
						name: '老唐水电',
						flog: false
					}
				]
			};
		},
		methods: {
			toTop(item, index) {
				console.log(this.upGo(this.list, index));
			},
			toBottom(item, index) {
				this.downGo(this.list,index);
			},
			upGo(fieldData, index) {
				if (index != 0) {
					fieldData[index] = fieldData.splice(index - 1, 1, fieldData[index])[0];
				} else {
					fieldData.push(fieldData.shift());
				}
				return fieldData;
			},
			downGo(fieldData, index) {
				if (index != fieldData.length - 1) {
					fieldData[index] = fieldData.splice(index + 1, 1, fieldData[index])[0];
				} else {
					fieldData.unshift(fieldData.splice(index, 1)[0]);
				}
			},
			check(e, index) {
				console.log(e, item)
				if (e.detail.value.length > 0) {
					this.list[index].flog = true;
				} else {
					this.list[index].flog = false;
				}
			},
			allChange(e) {
				if (e.detail.value.length > 0) {
					this.list.forEach((val, ind) => {
						val.flog = true;
					})
				} else {
					this.list.forEach((val, ind) => {
						val.flog = false;
					})
				}
				this.$forceUpdate();
				console.log(e)
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			save(){
				this.$toast('保存成功');
				setTimeout(()=>{
					uni.navigateBack({
						delta:1
					})
				},500)
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		padding-bottom: 100rpx;
	}

	.box {
		width: 100%;
		box-sizing: border-box;
		padding: 40rpx 20rpx;

		.item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 40rpx;

			.left {
				display: flex;
				flex-direction: row;

				.check {
					margin-right: 15rpx;
				}

				image {
					width: 180rpx;
					margin-right: 15rpx;
				}

				.con {
					display: flex;
					flex-direction: column;

					text {
						margin-bottom: 10rpx;
					}
				}
			}
		}
	}

	.fixed {
		width: 100%;
		position: fixed;
		bottom: 0;
		height: 100rpx;
		background: #f0f0f0;

		.con {
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			padding: 0 15rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 26rpx;

			.check {
				display: flex;
				flex-direction: row;
				align-items: center;
			}
		}
	}
</style>
