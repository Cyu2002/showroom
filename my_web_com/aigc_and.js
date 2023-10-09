import {request_and} from '@/my_web_com/aigc_net.js'
import {and_stop_send} from '@/my_web_com/aigc_net.js'


export function and_powersend(number_power){
	switch(number_power)
	{
		case 1:request_and(1,1);break;
		case 2:request_and(1,2);break;
		case 3:request_and(1,3);break;
		case 4:request_and(1,4);break;
		case 5:request_and(1,5);break;
		default:break;
	}
}
export function and_syssend(number_sys){
	switch(number_sys)
	{
		case 1:request_and(2,1);break;
		case 2:request_and(2,2);break;
		case 3:request_and(2,3);break;
		case 4:request_and(2,4);break;
		case 5:request_and(2,5);break;
		case 6:request_and(2,6);break;
		case 7:request_and(2,7);break;
		case 8:request_and(2,8);break;
		default:break;
	}
}
	
export function and_power_down(number_power){
	switch(number_power)
	{
		case 1:and_stop_send(1,1);break;
		case 2:and_stop_send(1,2);break;
		case 3:and_stop_send(1,3);break;
		case 4:and_stop_send(1,4);break;
		case 5:and_stop_send(1,5);break;
		default:break;
	}
}
	
export function and_sys_down(number_sys){
	switch(number_sys)
	{
		case 1:and_stop_send(2,1);break;
		case 2:and_stop_send(2,2);break;
		case 3:and_stop_send(2,3);break;
		case 4:and_stop_send(2,4);break;
		case 5:and_stop_send(2,5);break;
		case 6:and_stop_send(2,6);break;
		case 7:and_stop_send(2,7);break;
		case 8:and_stop_send(2,8);break;
		default:break;
	}
}