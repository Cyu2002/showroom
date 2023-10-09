<template>
	<view class="container">
		<text>电脑控制：</text><br>
		<switch style="margin-left: 1cm;" @change="switchcom" />
		<text> {{flag_com}}</text>
		<uni-collapse>
			<uni-collapse-item title="电脑列表">
				<!--电脑设备列表-->
				<view class="uni-list">
					<view class="uni-list-cell uni-list-cell-pd">
						<span class="left-content">电脑1</span>
						<span class="right-content">
							<switch color="#FFCC33" style="transform: scale(0.7)"/>
						</span>
						<span class="right-content">
							<switch color="#FFCC33" style="transform: scale(0.7)"/>
						</span>
					</view>
					<view class="uni-list-cell uni-list-cell-pd">
						<span class="left-content">电脑2</span>
						<span class="right-content">
							<switch color="#FFCC33" style="transform: scale(0.7)"/>
						</span>
						<span class="right-content">
							<switch color="#FFCC33" style="transform: scale(0.7)"/>
						</span>
					</view>
				</view>
			</uni-collapse-item>
		</uni-collapse>
		<br>
		<text>安卓控制：</text><br>
		<switch style="margin-left: 1cm;" @change="switchand" :checked="and_all" />
		<text> {{flag_an}}</text>
		<br>
		<uni-collapse>
			<uni-collapse-item title="安卓列表">
			<view class="uni-list">
				<view class="uni-list-cell uni-list-cell-pd">
					<span class="left-content">安卓1</span>
					<span class="right-content">
						<switch :checked='and_pow_check1' color="#FFCC33" style="transform: scale(0.7);" @change="switchandpow1"/>
					</span>
					<span class="right-content">
						<switch color="#FFCC33" style="transform: scale(0.7)" @change="switchandsys1" :checked="and_sys_check1"/>
					</span>
					<!--显示设备是否在线-->
					<span style="margin-left: 1cm;" >
						<text :style="{ color: and_pow_color1 }">{{show_andpow1}}</text>
					</span>
					<span style="margin-left: 1cm;" >
						<text :style="{ color: and_sys_color1 }">{{show_andsys1}}</text>
					</span>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<span class="left-content">安卓2</span>
					<span class="right-content">
						<switch color="#FFCC33" style="transform: scale(0.7)" @change="switchandpow2" :checked="and_pow_check2"/>
					</span>
					<span class="right-content">
						<switch color="#FFCC33" style="transform: scale(0.7)" @change="switchandsys2" :checked="and_sys_check2"/>
					</span>
					<!--显示设备是否在线-->
					<span style="margin-left: 1cm;" >
						<text :style="{ color: and_pow_color2 }">{{show_andpow2}}</text>
					</span>
					<span style="margin-left: 1cm;" >
						<text :style="{ color: and_sys_color2 }">{{show_andsys2}}</text>
					</span>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<span class="left-content">安卓3</span>
					<span class="right-content">
						<switch color="#FFCC33" style="transform: scale(0.7)" @change="switchandpow3" :checked="and_pow_check3"/>
					</span>
					<span class="right-content">
						<switch color="#FFCC33" style="transform: scale(0.7)" @change="switchandsys3" :checked="and_sys_check3"/>
					</span>
					<!--显示设备是否在线-->
					<span style="margin-left: 1cm;" >
						<text :style="{ color: and_pow_color3 }">{{show_andpow3}}</text>
					</span>
					<span style="margin-left: 1cm;" >
						<text :style="{ color: and_sys_color3 }">{{show_andsys3}}</text>
					</span>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<span class="left-content">安卓4</span>
					<span class="right-content">
						<switch color="#FFCC33" style="transform: scale(0.7)" @change="switchandpow4" :checked="and_pow_check4"/>
					</span>
					<span class="right-content">
						<switch color="#FFCC33" style="transform: scale(0.7)" @change="switchandsys4" :checked="and_sys_check4"/>
					</span>
					<!--显示设备是否在线-->
					<span style="margin-left: 1cm;" >
						<text :style="{ color: and_pow_color4 }">{{show_andpow4}}</text>
					</span>
					<span style="margin-left: 1cm;" >
						<text :style="{ color: and_sys_color4 }">{{show_andsys4}}</text>
					</span>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<span class="left-content">安卓5</span>
					<span class="right-content">
						<switch color="#FFCC33" style="transform: scale(0.7)" @change="switchandpow5" :checked="and_pow_check5"/>
					</span>
					<span class="right-content">
						<switch color="#FFCC33" style="transform: scale(0.7)" @change="switchandsys5" :checked="and_sys_check5"/>
					</span>
					<!--显示设备是否在线-->
					<span style="margin-left: 1cm;" >
						<text :style="{ color: and_pow_color5 }">{{show_andpow5}}</text>
					</span>
					<span style="margin-left: 1cm;" >
						<text :style="{ color: and_sys_color5 }">{{show_andsys5}}</text>
					</span>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<span class="left-content">安卓6</span>
					<span class="right-content">
						<switch color="#FFCC33" style="transform: scale(0.7)" @change="switchandpow6" :checked="and_pow_check6"/>
					</span>
					<span class="right-content">
						<switch color="#FFCC33" style="transform: scale(0.7)" @change="switchandsys6" :checked="and_sys_check6"/>
					</span>
					<!--显示设备是否在线-->
					<span style="margin-left: 1cm;" >
						<text :style="{ color: and_pow_color6 }">{{show_andpow6}}</text>
					</span>
					<span style="margin-left: 1cm;" >
						<text :style="{ color: and_sys_color6 }">{{show_andsys6}}</text>
					</span>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<span class="left-content">安卓7</span>
					<span class="right-content">
						<switch color="#FFCC33" style="transform: scale(0.7)" @change="switchandpow7" :checked="and_pow_check7"/>
					</span>
					<span class="right-content">
						<switch color="#FFCC33" style="transform: scale(0.7)" @change="switchandsys7" :checked="and_sys_check7"/>
					</span>
					<!--显示设备是否在线-->
					<span style="margin-left: 1cm;" >
						<text :style="{ color: and_pow_color7 }">{{show_andpow7}}</text>
					</span>
					<span style="margin-left: 1cm;" >
						<text :style="{ color: and_sys_color7 }">{{show_andsys7}}</text>
					</span>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<span class="left-content">安卓8</span>
					<span class="right-content">
						<switch color="#FFCC33" style="transform: scale(0.7)" @change="switchandpow8" :checked="and_pow_check8"/>
					</span>
					<span class="right-content">
						<switch color="#FFCC33" style="transform: scale(0.7)" @change="switchandsys8" :checked="and_sys_check8"/>
					</span>
					<!--显示设备是否在线-->
					<span style="margin-left: 1cm;"  >
						<text :style="{ color: and_pow_color8 }">{{show_andpow8}}</text>
					</span>
					<span style="margin-left: 1cm;" >
						<text :style="{ color: and_sys_color8 }">{{show_andsys8}}</text>
					</span>
				</view>
			</view>
			</uni-collapse-item>
		</uni-collapse>
		<br>
		<button style="margin-left: 5cm;" class="mini-btn" type="warn" size="mini" @click="refr_clk" >刷新</button>
		<br>
		<text>{{text_of_web}}</text>
		<br>
		<text>{{text_data}}</text>
		<br>
		<button @click="test_button">测试</button>
	</view>
</template>

<script>
	import {and_powersend} from '../../my_web_com/aigc_and.js'//调用安卓的电源接口为and_powersend
	import {and_syssend,and_power_down,and_sys_down} from '@/my_web_com/aigc_and.js'//调用安卓sys接口为and_syssend
	import {and_check_and_state,send_all_and_check,and_now_flag,and_dev_flag,and_checkdev_state} from '@/my_web_com/aigc_check.js'
	
	
	var and_power_start=1
	var and_power_stop=0
	export default {
		data() {
			return {
				//变量
				flag_com:'关闭中',
				flag_an:'关闭中',
				text_of_web:'测试ing..',
				com_disable_flag:true,
				and_pow_check1:false,
				and_pow_check2:false,
				and_pow_check3:false,
				and_pow_check4:false,
				and_pow_check5:false,
				and_pow_check6:false,
				and_pow_check7:false,
				and_pow_check8:false,
				and_sys_check1:false,
				and_sys_check2:false,
				and_sys_check3:false,
				and_sys_check4:false,
				and_sys_check5:false,
				and_sys_check6:false,
				and_sys_check7:false,
				and_sys_check8:false,
				and_all:false,
				show_andpow1:'',
				show_andsys1:'',
				show_andpow2:'',
				show_andsys2:'',
				show_andpow3:'',
				show_andsys3:'',
				show_andpow4:'',
				show_andsys4:'',
				show_andpow5:'',
				show_andsys5:'',
				show_andpow6:'',
				show_andsys6:'',
				show_andpow7:'',
				show_andsys7:'',
				show_andpow8:'',
				show_andsys8:'',
				and_pow_color1:'black',
				and_pow_color2:'black',
				and_pow_color3:'black',
				and_pow_color4:'black',
				and_pow_color5:'black',
				and_pow_color6:'black',
				and_pow_color7:'black',
				and_pow_color8:'black',
				and_sys_color1:'black',
				and_sys_color2:'black',
				and_sys_color3:'black',
				and_sys_color4:'black',
				and_sys_color5:'black',
				and_sys_color6:'black',
				and_sys_color7:'black',
				and_sys_color8:'black'
			}
		},
		methods: {
			//电脑总开关
			
			switchcom:function(get_flag)
			{
				if(get_flag.detail.value==1){
					//console.log("开启")
					//switchcom.disable=true
					//发送API控制电脑开机
					uni.request({
						method:'POST',
						url: 'https://songguoyun.topwd.top/Esp_Api_new.php', //仅为示例，并非真实接口地址。
					    header: {
							'custom-header': 'application/json'
					    },
						data: {
							sgdz_account: 'MLZZ',
							sgdz_password: '20020528Cyh',
							device_name: 'AIGC-0',
							value: '1'
					    },
					    success: (res) => {
					        console.log(res.data);
					        this.text_of_web ='request success';
							this.text_data=res.data;
					    },
						fail:(res)=>{
							this.text_of_web = 'request fail';
						}
					});
					//switchcom.disable=false
					this.flag_com='开启中'
				}
				else{
					//发送API关闭电脑
					uni.request({
						method:'POST',
						url: 'https://songguoyun.topwd.top/Esp_Api_new.php', //仅为示例，并非真实接口地址。
					    header: {
							'custom-header': 'application/json'
					    },
						data: {
							sgdz_account: 'MLZZ',
							sgdz_password: '20020528Cyh',
							device_name: 'AIGC-0',
							value: '0'
					    },
					    success: (res) => {
					        console.log(res.data);
					        this.text_of_web ='request success';
							this.text_data=res.data;
					    },
						fail:(res)=>{
							this.text_of_web = 'request fail';
						}
					});
					this.flag_com='关闭中'
				}
			},
			//安卓总开关
			switchand:function(get_flag)
			{
				this.and_all=get_flag.detail.value
				this.flag_an='开启中...'
				if(get_flag.detail.value==1){
					//发送API控制安卓开机	
					//首先开启安卓机所有屏幕电源 屏幕电源共5个
					and_powersend(1)
					var intervalId = setInterval(() =>{
					  // 在这里编写您要周期性执行的代码
					  and_power_start++
					  and_powersend(and_power_start)
					  console.log(and_power_start);
					  if(and_power_start>=5)
					  {
					  	clearInterval(intervalId)
						and_power_start=1
						//等待18秒开启所有sys
						intervalId = setInterval(()=> {
						  //开启8个sys开启
							clearInterval(intervalId)
							var i=0
							intervalId = setInterval(()=> {
								i++
								and_syssend(i)
								if(i==8) {
									clearInterval(intervalId)
									this.flag_an='开启完成'
									send_all_and_check()
									var timeid=setTimeout(function(){
										//读取所有插座状态
										and_check_and_state(1,1)
										and_check_and_state(1,2)
										and_check_and_state(1,3)
										and_check_and_state(1,4)
										and_check_and_state(1,5)
										and_check_and_state(2,1)
										and_check_and_state(2,2)
										and_check_and_state(2,3)
										and_check_and_state(2,4)
										and_check_and_state(2,5)
										and_check_and_state(2,6)
										and_check_and_state(2,7)
										and_check_and_state(2,8)
										clearTimeout(timeid)
									},3200)
									var timeid1=setTimeout(()=>{
										//显示安卓机状态
										for(var i=0;i<13;i++){
											if(i==0){
												if(and_now_flag[0]==true) {
													this.and_pow_check1=true
													this.and_pow_check2=true
												}
												else {
													this.and_pow_check1=false
													this.and_pow_check2=false
												}
											}
											else if(i==1){
												if(and_now_flag[1]==true){
													this.and_pow_check3=true
													this.and_pow_check4=true
												}
												else {
													this.and_pow_check3=false
													this.and_pow_check4=false
												}
											}
											else if(i==2){
												if(and_now_flag[2]==true) this.and_pow_check5=true
												else this.and_pow_check5=false
											}
											else if(i==3){
												if(and_now_flag[3]==true) {
													this.and_pow_check6=true
													this.and_pow_check7=true
												}
												else {
													this.and_pow_check6=false
													this.and_pow_check7=false
												}
											}
											else if(i==4){
												if(and_now_flag[4]==true) this.and_pow_check8=true
												else this.and_pow_check8=false
											}
											else {
												switch(i){
													case 5: this.and_sys_check1=and_now_flag[i];break;
													case 6: this.and_sys_check2=and_now_flag[i];break;
													case 7: this.and_sys_check3=and_now_flag[i];break;
													case 8: this.and_sys_check4=and_now_flag[i];break;
													case 9: this.and_sys_check5=and_now_flag[i];break;
													case 10: this.and_sys_check6=and_now_flag[i];break;
													case 11: this.and_sys_check7=and_now_flag[i];break;
													case 12: this.and_sys_check8=and_now_flag[i];break;
													default:break;
												}
											}
										}
										var count=0
										for(var i=0;i<13;i++){
											if(and_now_flag[i]==true) count++;
										}
										if(count==13) {
											this.and_all=true
											this.flag_an='开启完成'
										}
										console.log(count)
										clearTimeout(timeid1)
									},3500)
								}
							},400)
						}, 18000);
					  }
					}, 700); // 每700豪秒执行一次
					
				}
				else{
					//先关闭8个SYS开关
					this.flag_an='关闭中...'
					for (var i = 1; i < 9; i++) {
					  and_sys_down(i)
					}
					//后关闭5个电源开关
					var intervalId = setInterval(()=>{
						and_power_stop++
						and_power_down(and_power_stop)
						if(and_power_stop==5)
						{
							clearInterval(intervalId)
							this.flag_an='关闭完成'
							this.and_pow_check1=false
							this.and_pow_check2=false
							this.and_pow_check3=false
							this.and_pow_check4=false
							this.and_pow_check5=false
							this.and_pow_check6=false
							this.and_pow_check7=false
							this.and_pow_check8=false
							this.and_sys_check1=false
							this.and_sys_check2=false
							this.and_sys_check3=false
							this.and_sys_check4=false
							this.and_sys_check5=false
							this.and_sys_check6=false
							this.and_sys_check7=false
							this.and_sys_check8=false
							and_power_stop=0
						}
					},800);
					
				}
			},
			//安卓1开关
			switchandpow1:function(get_flag)
			{
				this.and_pow_check1=get_flag.detail.value
				if(get_flag.detail.value==1)
				{
					//open
					and_powersend(1)
					this.and_pow_check2=get_flag.detail.value
					console.log(this.and_pow_check2)
				}
				else
				{
					//down
					and_power_down(1)
					this.and_pow_check2=get_flag.detail.value
					this.and_sys_check1=get_flag.detail.value
					this.and_sys_check2=get_flag.detail.value
				}
			},
			switchandsys1:function(get_flag)
			{
				this.and_sys_check1=get_flag.detail.value
				if(get_flag.detail.value==1)
				{
					and_syssend(1)
				}
				else and_sys_down(1)
			},
			//安卓2开关
			switchandpow2:function(get_flag)
			{
				this.and_pow_check2=get_flag.detail.value
				if(get_flag.detail.value==1)
				{
					//open
					and_powersend(1)
					this.and_pow_check1=get_flag.detail.value
				}
				else
				{
					//down
					and_power_down(1)
					this.and_pow_check1=get_flag.detail.value
					this.and_sys_check1=get_flag.detail.value
					this.and_sys_check2=get_flag.detail.value
				}
			},
			switchandsys2:function(get_flag)
			{
				this.and_sys_check2=get_flag.detail.value
				if(get_flag.detail.value==1)
				{
					and_syssend(2)
				}
				else and_sys_down(2)
			},
			//安卓3开关
			switchandpow3:function(get_flag)
			{
				this.and_pow_check3=get_flag.detail.value
				if(get_flag.detail.value==1)
				{
					//open
					and_powersend(2)
					this.and_pow_check4=get_flag.detail.value
				}
				else
				{
					//down
					and_power_down(2)
					this.and_pow_check4=get_flag.detail.value
					this.and_sys_check3=get_flag.detail.value
					this.and_sys_check4=get_flag.detail.value
				}
			},
			switchandsys3:function(get_flag)
			{
				this.and_sys_check3=get_flag.detail.value
				if(get_flag.detail.value==1)
				{
					and_syssend(3)
				}
				else and_sys_down(3)
			},
			//安卓4开关
			switchandpow4:function(get_flag)
			{
				this.and_pow_check4=get_flag.detail.value
				if(get_flag.detail.value==1)
				{
					//open
					and_powersend(2)
					this.and_pow_check3=get_flag.detail.value
				}
				else
				{
					//down
					and_power_down(2)
					this.and_pow_check3=get_flag.detail.value
					this.and_sys_check3=get_flag.detail.value
					this.and_sys_check4=get_flag.detail.value
				}
			},
			switchandsys4:function(get_flag)
			{
				this.and_sys_check4=get_flag.detail.value
				if(get_flag.detail.value==1)
				{
					and_syssend(4)
				}
				else and_sys_down(4)
			},
			//安卓5开关
			switchandpow5:function(get_flag)
			{
				this.and_pow_check5=get_flag.detail.value
				if(get_flag.detail.value==1)
				{
					//open
					and_powersend(3)
				}
				else
				{
					//down
					and_power_down(3)
					this.and_sys_check5=get_flag.detail.value
				}
			},
			switchandsys5:function(get_flag)
			{
				this.and_sys_check5=get_flag.detail.value
				if(get_flag.detail.value==1)
				{
					and_syssend(5)
				}
				else and_sys_down(5)
			},
			//安卓6开关
			switchandpow6:function(get_flag)
			{
				this.and_pow_check6=get_flag.detail.value
				if(get_flag.detail.value==1)
				{
					//open
					and_powersend(4)
					this.and_pow_check7=get_flag.detail.value
				}
				else
				{
					//down
					and_power_down(4)
					this.and_pow_check7=get_flag.detail.value
					this.and_sys_check7=get_flag.detail.value
					this.and_sys_check6=get_flag.detail.value
				}
			},
			switchandsys6:function(get_flag)
			{
				this.and_sys_check6=get_flag.detail.value
				if(get_flag.detail.value==1)
				{
					and_syssend(6)
				}
				else and_sys_down(6)
			},
			//安卓7开关
			switchandpow7:function(get_flag)
			{
				this.and_pow_check7=get_flag.detail.value
				if(get_flag.detail.value==1)
				{
					//open
					and_powersend(4)
					this.and_pow_check6=get_flag.detail.value
				}
				else
				{
					//down
					and_power_down(4)
					this.and_pow_check6=get_flag.detail.value
					this.and_sys_check7=get_flag.detail.value
					this.and_sys_check6=get_flag.detail.value
				}
			},
			switchandsys7:function(get_flag)
			{
				this.and_sys_check7=get_flag.detail.value
				if(get_flag.detail.value==1)
				{
					and_syssend(7)
				}
				else and_sys_down(7)
			},
			//安卓8开关
			switchandpow8:function(get_flag)
			{
				this.and_pow_check8=get_flag.detail.value
				if(get_flag.detail.value==1)
				{
					//open
					and_powersend(5)
				}
				else
				{
					//down
					and_power_down(5)
					this.and_sys_check8=get_flag.detail.value
				}
			},
			switchandsys8:function(get_flag)
			{
				this.and_sys_check8=get_flag.detail.value
				if(get_flag.detail.value==1)
				{
					and_syssend(8)
				}
				else and_sys_down(8)
			},
			//刷新按键（执行对所有设备状态的刷新）
			refr_clk()
			{
				//this.text_of_web='123'
				//查询是否设备状态在线
				and_checkdev_state(1,1)
				and_checkdev_state(1,2)
				and_checkdev_state(1,3)
				and_checkdev_state(1,4)
				and_checkdev_state(1,5)
				and_checkdev_state(2,1)
				and_checkdev_state(2,2)
				and_checkdev_state(2,3)
				and_checkdev_state(2,4)
				and_checkdev_state(2,5)
				and_checkdev_state(2,6)
				and_checkdev_state(2,7)
				and_checkdev_state(2,8)
				var timeid_dev=setTimeout(()=>{
					//检测状态buffer
					console.log(and_dev_flag[10])
					if(and_dev_flag[0]==true){
						this.and_pow_color1='black'
						this.and_pow_color2='black'
						this.show_andpow1='正常'
						this.show_andpow2='正常'
					}
					else {
						this.and_pow_color1='red'
						this.and_pow_color2='red'
						this.show_andpow1='断开'
						this.show_andpow2='断开'
					}
					if(and_dev_flag[1]==true){
						this.and_pow_color3='black'
						this.and_pow_color4='black'
						this.show_andpow3='正常'
						this.show_andpow4='正常'
					}
					else {
						this.and_pow_color3='red'
						this.and_pow_color4='red'
						this.show_andpow3='断开'
						this.show_andpow4='断开'
					}
					if(and_dev_flag[2]==true){
						this.and_pow_color5='black'
						this.show_andpow5='正常'
					}
					else {
						this.and_pow_color5='red'
						this.show_andpow5='断开'
					}
					if(and_dev_flag[3]==true){
						this.and_pow_color6='black'
						this.and_pow_color7='black'
						this.show_andpow6='正常'
						this.show_andpow7='正常'
					}
					else {
						this.and_pow_color6='red'
						this.and_pow_color7='red'
						this.show_andpow6='断开'
						this.show_andpow7='断开'
					}
					if(and_dev_flag[4]==true){
						this.and_pow_color8='black'
						this.show_andpow8='正常'
					}
					else {
						this.and_pow_color8='red'
						this.show_andpow8='断开'
					}
					if(and_dev_flag[5]==true){
						this.and_sys_color1='black'
						this.show_andsys1='正常'
					}
					else{
						this.and_sys_color1='red'
						this.show_andsys1='断开'
					}
					if(and_dev_flag[6]==true){
						this.and_sys_color2='black'
						this.show_andsys2='正常'
					}
					else{
						this.and_sys_color2='red'
						this.show_andsys2='断开'
					}
					if(and_dev_flag[7]==true){
						this.and_sys_color3='black'
						this.show_andsys3='正常'
					}
					else{
						this.and_sys_color3='red'
						this.show_andsys3='断开'
					}
					if(and_dev_flag[8]==true){
						this.and_sys_color4='black'
						this.show_andsys4='正常'
					}
					else{
						this.and_sys_color4='red'
						this.show_andsys4='断开'
					}
					if(and_dev_flag[9]==true){
						this.and_sys_color5='black'
						this.show_andsys5='正常'
					}
					else{
						this.and_sys_color5='red'
						this.show_andsys5='断开'
					}
					if(and_dev_flag[10]==true){
						this.and_sys_color6='black'
						this.show_andsys6='正常'
					}
					else{
						this.and_sys_color6='red'
						this.show_andsys6='断开'
					}
					if(and_dev_flag[11]==true){
						this.and_sys_color7='black'
						this.show_andsys7='正常'
					}
					else{
						this.and_sys_color7='red'
						this.show_andsys7='断开'
					}
					if(and_dev_flag[12]==true){
						this.and_sys_color8='black'
						this.show_andsys8='正常'
					}
					else{
						this.and_sys_color8='red'
						this.show_andsys8='断开'
					}
					clearTimeout(timeid_dev)
				},800)
				//发送所有q1
				send_all_and_check()
				//间隔两秒发送q1请求云查询插座状态
				var timeid=setTimeout(function(){
					//读取所有插座状态
					and_check_and_state(1,1)
					and_check_and_state(1,2)
					and_check_and_state(1,3)
					and_check_and_state(1,4)
					and_check_and_state(1,5)
					and_check_and_state(2,1)
					and_check_and_state(2,2)
					and_check_and_state(2,3)
					and_check_and_state(2,4)
					and_check_and_state(2,5)
					and_check_and_state(2,6)
					and_check_and_state(2,7)
					and_check_and_state(2,8)
					clearTimeout(timeid)
				},2000)
				//间隔2.5秒查询云读取的状态消息
				var timeid1=setTimeout(()=>{
					//显示安卓机状态
					for(var i=0;i<13;i++){
						if(i==0){
							if(and_now_flag[0]==true) {
								this.and_pow_check1=true
								this.and_pow_check2=true
							}
							else {
								this.and_pow_check1=false
								this.and_pow_check2=false
							}
						}
						else if(i==1){
							if(and_now_flag[1]==true){
								this.and_pow_check3=true
								this.and_pow_check4=true
							}
							else {
								this.and_pow_check3=false
								this.and_pow_check4=false
							}
						}
						else if(i==2){
							if(and_now_flag[2]==true) this.and_pow_check5=true
							else this.and_pow_check5=false
						}
						else if(i==3){
							if(and_now_flag[3]==true) {
								this.and_pow_check6=true
								this.and_pow_check7=true
							}
							else {
								this.and_pow_check6=false
								this.and_pow_check7=false
							}
						}
						else if(i==4){
							if(and_now_flag[4]==true) this.and_pow_check8=true
							else this.and_pow_check8=false
						}
						else {
							switch(i){
								case 5: this.and_sys_check1=and_now_flag[i];break;
								case 6: this.and_sys_check2=and_now_flag[i];break;
								case 7: this.and_sys_check3=and_now_flag[i];break;
								case 8: this.and_sys_check4=and_now_flag[i];break;
								case 9: this.and_sys_check5=and_now_flag[i];break;
								case 10: this.and_sys_check6=and_now_flag[i];break;
								case 11: this.and_sys_check7=and_now_flag[i];break;
								case 12: this.and_sys_check8=and_now_flag[i];break;
								default:break;
							}
						}
					}
					var count=0
					for(var i=0;i<13;i++){
						if(and_now_flag[i]==true) count++;
					}
					if(count==13) {
						this.and_all=true
						this.flag_an='开启完成'
					}
					else if(count==0){
						this.and_all=false
						this.flag_an='关闭完成'
					}
					console.log(count)
					clearTimeout(timeid1)
				},2500)
			},
			test_button()
			{
				//this.text_of_web='ceshi'
				//var get=and_check_and_state(1,1)
				//this.text_of_web=get
				//and_check_and_state(1,1)
				and_checkdev_state(1,1)
				and_checkdev_state(1,2)
				and_checkdev_state(1,3)
				and_checkdev_state(1,4)
				and_checkdev_state(1,5)
				and_checkdev_state(2,1)
				and_checkdev_state(2,2)
				and_checkdev_state(2,3)
				and_checkdev_state(2,4)
				and_checkdev_state(2,5)
				and_checkdev_state(2,6)
				and_checkdev_state(2,7)
				and_checkdev_state(2,8)
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 20px;
		line-height: 24px;
	}
</style>
