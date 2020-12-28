<template>
	<view>
		<view class="bk">
			<image src="../../static/logo.png" mode="widthFix"></image>
			<text>先简单介绍下你的店铺吧</text>
		</view>

		<view class="form">
			<view class="inp">
				<view class="title"><text>请输入您的店铺名称</text></view>
				<view class="con">
					<input type="text" v-model="name" placeholder="" />
				</view>

			</view>
			<view class="inp" @click="checkSelect">
				<view class="title"><text>请选择您的经营类别</text></view>
				<view class="con">
					<input type="text" v-model="classification" placeholder="" />
					<image src="../../static/index/bottom_arrow.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="inp">
				<view class="title"><text>请输入您的真实姓名</text></view>
				<view class="con">
					<input type="text" v-model="userName" placeholder="" />
				</view>
			</view>
			<view class="inp">
				<view class="title"><text>请输入您的城市</text></view>
				<view class="con">
					<input type="text" v-model="city" placeholder="" />
				</view>
			</view>
			<view class="inp">
				<view class="title"><text>请输入您在城市的区名</text></view>
				<view class="con">
					<input type="text" v-model="region" placeholder="" />
				</view>
			</view>
			<view class="inp">
				<view class="title"><text>请输入您在详细地址</text></view>
				<view class="con">
					<input type="text" v-model="houseInfo" placeholder="" />
				</view>
			</view>
			<view class="inp">
				<view class="title"><text>请输入您的电话</text></view>
				<view class="con">
					<input type="text" v-model="phone" placeholder="" />
				</view>
			</view>

			<view class="inp" @click="checkType">
				<view class="title"><text>请选择您的店铺类别</text></view>
				<view class="con">
					<input type="text" v-model="classType" placeholder="" />
					<image src="../../static/index/bottom_arrow.png" mode="widthFix"></image>
				</view>
			</view>

			<view class="inp" @click="isShop">
				<view class="title"><text>是否有实体店？</text></view>
				<view class="con">
					<input type="text" v-model="shopFlog" placeholder="" />
					<image src="../../static/index/bottom_arrow.png" mode="widthFix"></image>
				</view>
			</view>

			<view class="inp">
				<view class="title"><text>请输入您的地址</text></view>
				<view class="con">
					<input type="text" v-model="address" placeholder="" />
				</view>
			</view>

			<view class="inp" @click="startTime">
				<view class="title"><text>开始营业时间</text></view>
				<view class="con">
					<input type="text" v-model="sTime" placeholder="" />
					<image src="../../static/index/bottom_arrow.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="inp" @click="endTime">
				<view class="title"><text>结束营业时间</text></view>
				<view class="con">
					<input type="text" v-model="eTime" placeholder="" />
					<image src="../../static/index/bottom_arrow.png" mode="widthFix"></image>
				</view>
			</view>
			
			
			<view class="inp">
				<view class="title"><text>请输入您的店铺描述</text></view>
				<view class="con">
					<input type="text"  v-model="description" placeholder="" />
				</view>
			</view>
			
			<view class="inp" @click="goMsg">
				<view class="title"><text>资质信息</text></view>
				<view class="con">
					<input type="text"   placeholder="" v-model="msg"/>
				</view>
			</view>
			
			<view class="inp" v-if="shopFlog==='有'"  @click="goShop">
				<view class="title"><text>实体店描述</text></view>
				<view class="con">
					<input type="text"  placeholder=""  v-model="shopDescription"/>
				</view>
			</view>

		</view>
		
		<view class="next">
			<view class="btn" @click="btn">
				<text>去开店</text>
			</view>
		</view>


		<!-- 选择分类 -->
		<w-picker :visible.sync="visible" mode="selector" value="保姆" default-type="name" :default-props="defaultProps"
		 :options="options" @confirm="onConfirm($event,'selector')" ref="selector"></w-picker>

		<!-- 选择分类 -->
		<w-picker :visible.sync="typeVisible" mode="selector" value="个人" default-type="name" :default-props="defaultProps"
		 :options="typeList" @confirm="typeConfirm($event,'selector')" ref="selector"></w-picker>

		<!-- 是否有实体店 -->
		<w-picker :visible.sync="isVisible" mode="selector" value="否" default-type="name" :default-props="defaultProps"
		 :options="isList" @confirm="isConfirm($event,'selector')" ref="selector"></w-picker>

		<!-- 开始时间 -->
		<w-picker :visible.sync="startVisible" mode="time" value="18:08:00" :current="false" :second="false" @confirm="startConfirm($event,'time')"
		 ref="time"></w-picker>

		<!-- 开始时间 -->

		<w-picker :visible.sync="endVisible" mode="time" value="18:08:00" :current="false" :second="false" @confirm="endConfirm($event,'time')"
		 ref="time"></w-picker>

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
				classification: '',
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
					},
					{
						name: "修电表",
						id: '3'
					},
					{
						name: "修马桶",
						id: '4'
					},
					{
						name: "修车",
						id: '5'
					},
					{
						name: "修衣服",
						id: '6'
					},
					{
						name: "修下水道",
						id: '7'
					}
				],
				visible: false,
				name: '',
				userName: '',
				phone: '',
				typeVisible: false,
				typeList: [{
						name: "个人",
						id: '0'
					},
					{
						name: "公司",
						id: '1'
					},
				],
				classType: '个人',
				shopFlog: '无',
				isVisible: false,
				isList: [{
						name: "无",
						id: '0'
					},
					{
						name: "有",
						id: '1'
					},
				],
				address: '',
				sTime: '8:00',
				eTime: '18:00',
				startVisible: false,
				endVisible:false,
				description:'',
				shopDescription:'',
				msg:'',
				city:'',
				region:'',
				houseInfo:''
			};
		},
		methods: {
			onConfirm(e) {
				this.classification = e.result;
				console.log(e)
			}, //选择分类
			checkSelect() {
				this.visible = true;
			}, //吊起分类弹窗
			checkType() {
				this.typeVisible = true;
			}, //吊起类型弹窗
			typeConfirm(e) {
				this.classType = e.result;
				console.log(e)
			}, //选择类型
			isShop() {
				this.isVisible = true;
			}, //吊起是否有店弹窗
			isConfirm(e) {
				this.shopFlog = e.result;
			}, //选择是否有店弹窗
			startTime() {
				this.startVisible = true;
			}, //吊起开始时间弹窗
			startConfirm(e) {
				console.log(e);
				this.sTime = e.result;
			}, //选择开始时间
			endTime() {
				this.endVisible = true;
			}, //吊起结束时间弹窗
			endConfirm(e){
				this.eTime = e.result;
			}, //选择结束时间
			goShop(){
				this.$toast('后面会去实体店界面');
			},//去实体店描述界面
			goMsg(){
				this.$toast('后面会去资质界面');
			},//去资质界面
			async btn(){
				let header = {
					InfoType:'1',
					InterfaceName:'postOneShopInfo'
				}
				// console.log(this.shopFlog);
				let intShopClassify; 
				this.typeList.forEach((val,ind)=>{
					if(val.name ===this.classType){
						intShopClassify = val.id;
					}
				})
				let intHaveRealShop;
				this.isList.forEach((val,ind)=>{
					if(val.name ===this.shopFlog){
						intHaveRealShop = val.id;
					}
				})
				
				let intWokerID = uni.getStorageSync('userId');
				let obj={
					    intWokerID, //工铺注册人ID
					    strShopName:this.name,//店铺名称
					    "strShopStatus":"0",//店铺状态
					    strShopBusinessHoursBegin:this.sTime,//店铺营业开始时间
					    strShopDescription:this.description,//店铺描述
					    strContentName:this.userName,//联系人
					    strCity:this.city,//城市
					    strRegion:this.region,//区
					    strHouseInfo:this.houseInfo,//具体地址
					    strContectsPhoneNumber:this.phone,//联系人电话
					    strManageClassify:this.classification,//经营类别
					    intShopClassify,//店铺类别
					    intHaveRealShop,//是否实体店铺
					    strShopBusinessHoursEnd:this.eTime,//营业终止时间
					    "strPicsPath":"",//店铺介绍图片
					    intQualificationID:this.msg,//店铺资质信息ID
					    intRealShopID:this.shopDescription//实体店铺ID

				}
				console.log(obj)
				let data = await this.$request('/Worker/Shop',header,obj);
				if(data.data.errorCode===200){
					setTimeout(()=>{
						uni.navigateTo({
							url:'./shopManagement'
						})
					},500)
					return false;
				}
				this.$toast(data.data.errorInfo);
				console.log(data)

			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		padding: 50rpx 0;
	}

	.bk {
		width: 100%;
		padding: 35rpx 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 28rpx;
		color: #808080;
		margin-bottom: 40rpx;

		image {
			width: 200rpx;
			margin-bottom: 25rpx;
		}
	}

	.form {
		width: 90%;
		margin: 20rpx auto;
		box-sizing: border-box;
		padding: 25rpx 10rpx;
		border: 2px solid red;
		border-radius: 10rpx;

		.inp {
			width: 100%;
			padding: 15rpx 0;
			border-bottom: 1px solid #f0f0f0;
			display: flex;
			// justify-content: space-between;
			// align-items: center;
			flex-direction: column;
			margin-bottom: 15rpx;

			.title {
				font-size: 26rpx;
				margin-bottom: 25rpx;
			}

			.con {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			input {
				font-size: 26rpx;
				color: #808080;
			}

			image {
				width: 40rpx;
			}
		}
	}
	.next{
		width: 90%;
		margin: 20rpx auto;
		padding-top: 30rpx;
	}
	.btn{
		width: 100%;
		background: #06C1AE;
		margin: 20rpx auto;
		font-size: 28rpx;
		color: white;
		padding: 20rpx 0;
		text-align: center;
		border-radius: 10rpx;
	}
</style>
