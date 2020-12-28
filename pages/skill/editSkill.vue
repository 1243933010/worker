<template>
	<view>
		<view style="height: 150rpx;"></view>
		<view class="top_tab">
			<view class="icon" @click="goIndex">
				<image src="../../static/login/back.png" mode="widthFix"></image>
				<text>编辑技能</text>
			</view>
			<view class="right">
				<text>保存</text>
			</view>
		</view>
		
		<view class="form">
			<view class="inp">
				<view class="left">
					<text class="name">技能名称</text>
				</view>
				<view class="right">
					<input type="text" placeholder="限30字以内" />
				</view>
			</view>
			<view class="inp" @click="checkList">
				<view class="left">
					<text class="name">技能分类</text>
				</view>
				<view class="right">
					<text>保姆</text>
					<!-- <input type="text" placeholder="限30字以内" /> -->
					<image src="../../static/index/bottom_arrow.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="inp" >
				<view class="left">
					<text class="name">上传图片</text>
					<text class="label">图片格式需要大于600*450</text>
				</view>
				<view class="upload">
					<image src="../../static/logo.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="inp">
				<view class="left">
					<text class="name">单价</text>
				</view>
				<view class="right">
					<input type="text" placeholder="请填写价格" />
				</view>
			</view>
			<view class="inp">
				<view class="left">
					<text class="name">技能人数</text>
				</view>
				<view class="right">
					<input type="text" placeholder="默认为1" />
				</view>
			</view>
			<view class="inp">
				<view class="left">
					<text class="name">附带材料</text>
				</view>
				<view class="right">
					<input type="text" placeholder="" />
				</view>
			</view>
			<view class="inp">
				<view class="left">
					<text class="name">材料单价</text>
				</view>
				<view class="right">
					<input type="text" placeholder="" />
				</view>
			</view>
			<view class="inp">
				<view class="left">
					<text class="name">附带工具</text>
				</view>
				<view class="right">
					<input type="text" placeholder="" />
				</view>
			</view>
			<view class="inp">
				<view class="left">
					<text class="name">技能属性</text>
				</view>
				<view class="right">
					<text>普工</text>
					<image src="../../static/index/bottom_arrow.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="inp">
				<view class="left">
					<text class="name">技能单位</text>
				</view>
				<view class="right">
					<input type="text" placeholder="比如小时" />
				</view>
			</view>
			<view class="inp">
				<view class="left">
					<text class="name">最小出工条件</text>
				</view>
				<view class="right">
					<input type="text" placeholder="比如1" />
				</view>
			</view>
		    <view class="texa">
		    	<view class="title"><text>技能描述</text></view>
				<textarea value="" placeholder="介绍一下你的技能" />
		    </view>
			<!-- Attributes -->
			<view class="btn">
				<view style="background: white; color: red;"><text>删除</text></view>
				<view class="" @click="saveBack"><text>停工休息</text></view>
			</view>
		</view>
		
		
		
		
		<!-- 选择分类 -->
		<w-picker :visible.sync="visible" mode="selector" value="" default-type="name" :default-props="defaultProps"
		 :options="options" @confirm="onConfirm($event,'selector')" ref="selector"></w-picker>
		 <!-- 选择技能属性 -->
		 <w-picker :visible.sync="attributesVisible" mode="selector" value="" default-type="name" :default-props="defaultProps"
		  :options="attributesList" @confirm="attributesConfirm($event,'selector')" ref="selector"></w-picker>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components: {
			wPicker
		},
		data() {
			return {
				defaultProps: {
					"label": "name",
					"value": "id"
				},
				options: [{
						name: "保姆",
						id: '1'
					},
					{
						name: "修水表",
						id: '2'
					}],
					visible:false,
					attributesVisible:false,
					attributesList:[{
						name: "专业",
						id: '1'
					},
					{
						name: "普工",
						id: '2'
					}]
			};
		},
		methods:{
			onConfirm(e){
				console.log(e)
				
			},
			checkList(){
				this.visible = true;
			},
			saveBack(){
				uni.navigateBack({
					delta:1
				})
			},
			goIndex(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.form{
		width: 100%;
		box-sizing: border-box;
		padding: 0rpx 0rpx;
		.inp{
			width: 100%;
			box-sizing: border-box;
			padding: 10rpx 15rpx;
			margin-bottom: 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #f0f0f0;
			.left{
				width: 40%;
				display: flex;
				flex-direction: column;
				.name{
					font-size: 30rpx;
				}
				.label{
					font-size: 24rpx;
				}
			}
			.right{
				width: 50%;
				// display: flex;
				// justify-content: center;
				// align-items: center;
				// align-self: flex-end;
				text-align: right;
				input{
					width: 100%;
					font-size: 26rpx;
				}
				image{
					width: 40rpx;
					vertical-align: middle;
				}
				text{
					color: #808080;
				}
			}
			.upload{
				image{
					width: 100rpx;
				}
			}
		}
		.texa{
			width: 100%;
			box-sizing: border-box;
			padding: 10rpx 15rpx;
			.title{
				font-size: 28rpx;
				margin-bottom: 15rpx;
			}
			textarea{
				width: 100%;
				height: 150rpx;
				font-size: 26rpx;
			}
		}
		.btn{
			display: flex;
			justify-content: space-between;
			align-items: center;
			view{
				width: 50%;
				height: 70rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
				background: #06C1AE;
				color: white;
			}
		}
	}
</style>
