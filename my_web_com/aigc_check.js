import {and_pow_check_base,all_send_q1,and_sys_check_base,and_powdev_check_base,and_sysdev_check_base} from '@/my_web_com/aigc_check_base.js'

let and_now_flag = new Array(13).fill(false);
let and_dev_flag=new Array(13).fill(true);

export {and_now_flag}//设备是否开启状态
export {and_dev_flag}//设备是否在线状态

export function and_check_and_state(dev_type,dev_list)
{
	if(dev_type==1)
	{
		if(dev_list==1)
		{
			and_pow_check_base(dev_list).then(data => {
				// 在这里可以访问异步请求的数据(data)
				const str_data=JSON.stringify(data);//转为str
				console.log(str_data)
				const hasN1 = str_data.includes('n1');
				and_now_flag[0]=hasN1
			})
		}
		else if(dev_list==2)
		{
			and_pow_check_base(dev_list).then(data => {
				// 在这里可以访问异步请求的数据(data)
				const str_data=JSON.stringify(data);//转为str
				console.log(str_data)
				const hasN1 = str_data.includes('n1');
				and_now_flag[1]=hasN1
			})
		}
		else if(dev_list==3)
		{
			and_pow_check_base(dev_list).then(data => {
				// 在这里可以访问异步请求的数据(data)
				const str_data=JSON.stringify(data);//转为str
				console.log(str_data)
				const hasN1 = str_data.includes('n1');
				and_now_flag[2]=hasN1
			})
		}
		else if(dev_list==4)
		{
			and_pow_check_base(dev_list).then(data => {
				// 在这里可以访问异步请求的数据(data)
				const str_data=JSON.stringify(data);//转为str
				console.log(str_data)
				const hasN1 = str_data.includes('n1');
				and_now_flag[3]=hasN1
			})
		}
		else if(dev_list==5)
		{
			and_pow_check_base(dev_list).then(data => {
				// 在这里可以访问异步请求的数据(data)
				const str_data=JSON.stringify(data);//转str类型
				console.log(str_data)
				const hasN1 = str_data.includes('n1');
				and_now_flag[4]=hasN1
			})
		}
		
	}
	else if(dev_type==2)
	{
			and_sys_check_base(dev_list).then(data => {
				// 在这里可以访问异步请求的数据(data)
				const str_data=JSON.stringify(data);
				console.log(str_data)
				const hasN1 = str_data.includes('n1');
				and_now_flag[4+dev_list]=hasN1
			})
	}
}
export function send_all_and_check()
{
	all_send_q1()
}

export function and_checkdev_state(dev_type,dev_list)
{
	if(dev_type==1)
	{
		and_powdev_check_base(dev_list).then(data=>{
			const str_data=JSON.stringify(data)
			console.log(str_data)
			const hastrue = str_data.includes('true')
			and_dev_flag[dev_list-1]=hastrue
		})
	}
	else 
	{
		and_sysdev_check_base(dev_list).then(data=>{
			const str_data=JSON.stringify(data)
			console.log(str_data)
			const hastrue = str_data.includes('true')
			and_dev_flag[4+dev_list]=hastrue
		})
	}
	
}
