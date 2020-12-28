<template>
	<view>
		<view style="height: 150rpx;"></view>
		<view class="top_tab">
			<view class="icon" @click="goIndex">
				<image src="../../static/login/back.png" mode="widthFix"></image>
				<text>工铺管理</text>
			</view>
			<view class="right">
				<image src="../../static/login/search.png" mode="widthFix"></image>
				<image @click="showFlog" src="../../static/login/more.png" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="con">
			<view class="con_left">
				<scroll-view scroll-y="true" :style="{height:Height+'px'}">
					<view class="box">
						<view class="item" 
						v-for="(item,index) in skillList" 
						:key="index" 
						:class="index===skillInd?'active':''"
						@click="chooseSkill(item,index)">
							<text>{{item.title}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="con_right">
				<scroll-view scroll-y="true"  :style="{height:Height+'px'}">
					<view class="pox">
						<view class="item" 
						v-for="(item,index) in listList" 
						:key="index" 
						:class="index===skillInd?'active2':''"
						@click="chooseList(item,index)">
							<view class="top">
								<image :src="item.img" mode="widthFix"></image>
								<view class="text">
									<text>{{item.name}}</text>
									<text>{{item.price}}/天</text>
									<text>出工次数：5</text>
									<text>可出工次数：2</text>
								</view>
							</view>
							<view class="fn">
								<view class="edit"><text>编辑</text></view>
								<view class="edit" v-if="item.status==='1'" @click="sleep(item,index)"><text>停工休息</text></view>
								<view class="edit active3"  v-if="item.status==='0'" @click="work(item,index)"><text>上工营业</text></view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="tab_bottom">
			<view class="one"><text>管理分类</text></view>
			<view class="two" @click="filter"><text>排序批量操作</text></view>
			<view class="three" @click="add"><text>新建技能</text></view>
		</view>
		
		<view class="fixed" v-show="flog">
			<view class="con">
				<view class=""><text>预览商铺</text></view>
				<view class="" @click="goTo"><text>停工休息技能</text></view>
				<view class=""  @click="goTo"><text>回收站</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Height:0,
				skillList:[
					{title:'水电'},
					{title:'泥瓦'}
				],
				skillInd:0,
				listList:[],
				listInd:0,
				flog:false
			};
		},
		mounted() {
			this.Height=getApp().globalData.windowHeight-75-50;
			this.listList=[
				{name:'老王水电',price:100,img:'../../static/logo.png',status:'0'},
				{name:'老李水电',price:10,img:'../../static/logo.png',status:'1'},
			]
		},
		methods:{
			goIndex(){
				uni.reLaunch({
					url:'../me/me'
				})
			},
			goTo(){
				uni.navigateTo({
					url:'../skill/filterSkill'
				})
			},
			showFlog(){
				this.flog = !this.flog;
			},
			chooseSkill(item,index){
				this.skillInd = index;
				if(this.skillInd===0){
					this.listList=[
						{name:'老王水电',price:100,img:'../../static/logo.png',status:'0'},
						{name:'老李水电',price:10,img:'../../static/logo.png',status:'1'},
					]
				}else if(this.skillInd===1){
					this.listList=[
						{name:'老刘水电',price:80,img:'../../static/logo.png',status:'0'},
						{name:'老岳水电',price:70,img:'../../static/logo.png',status:'1'},
					]
				}
			},
			chooseList(item,index){
				this.listInd = index;
			},
			sleep(item,index){
				this.listList[index].status='0';
				this.$forceUpdate();
			},//休息
			work(item,index){
				this.listList[index].status='1';
				this.$forceUpdate();
			},//工作
			filter(){
				uni.navigateTo({
					url:'../skill/filterSkill'
				})
			},
			add(){
				uni.navigateTo({
					url:'../skill/addSkill'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.fixed{
		position: fixed;
		right: 0;
		top: 150rpx;
		.con{
			background: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			border: 1px solid #555555;
			box-sizing: border-box;
			padding: 20rpx;
			view{
				margin-bottom: 20rpx;
			}
		}
	}
	.active3{
		background: #808080;
		border: 1px solid #808080 !important;
		color: white !important;
	}
	.tab_bottom{
		width: 100%;
		height: 100rpx;
		// background: red;
		display: flex;
		justify-content: space-between;
		align-items: center;
		view{
			text-align: center;
			font-size: 27rpx;
			height: 100%;
			line-height: 100rpx;
			background: #F6F6F6;
		}
		.one{
			width: 30%;
			background: #E2E2E2;
		}
		.two{
			width: 35%;
		}
		.three{
			width: 35%;
		}
	}
    .con{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.con_left{
			width: 30%;
			background: #F0EFF4;
			.box{
				width: 100%;
				display: flex;
				flex-direction: column;
				.item{
					border-bottom: 1px solid #8F8F94;
					font-size: 26rpx;
					box-sizing: border-box;
					padding: 25rpx 10rpx;
				}
			}
		}
		.con_right{
			width: 70%;
			.pox{
				width: 100%;
				background: #F7F7F7;
				.item{
					width: 100%;
					box-sizing: border-box;
					padding: 20rpx 10rpx;
					.top{
						display: flex;
						flex-direction: row;
						margin-bottom: 25rpx;
						.text{
							display: flex;
							flex-direction: column;
							font-size: 26rpx;
							text{
								margin-bottom: 10rpx;
							}
						}
						image{
							width: 100rpx;
							margin-right: 20rpx;
						}
					}
					.fn{
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.edit{
							width: 45%;
							border: 1px solid #06C1AE;
							text-align: center;
							font-size: 26rpx;
							font-weight: 600rpx;
							color: #06C1AE;
							padding: 10rpx 0;
							border-radius: 7rpx;
						}
					}
				}
			}
		}
	}
	
	.active{
		border-left: 4px solid #06C1AE;
		background: white;
		border-bottom: none !important;
		color: #06C1AE !important;
	}
	.active2{
		background: white !important;
	}
</style>
