const and_power_id = ["e8db8453b680", "e8db8453b682", "e8db8453b693", "e8db8453b69f","e8db8453b6b1"];
const and_sys_id=["e8db8453b6b8","e8db8453b705","e8db8453b718","e8db8453b727","e8db8453b72b","e8db8453b732","e8db8453b7a2","e8db8453b7a5"];

function my_and_pow_request(dev_list)
{
	return new Promise((resolve, reject) => {
	    dev_list = dev_list - 1;
	    const myand_url = 'https://apis.bemfa.com/va/getmsg?uid=fed4ee5c5da54564b724892de4b32fa7&topic=' + and_power_id[dev_list] + '&type=3';
	    uni.request({
	      url: myand_url,
	      method: 'GET',
	      success: (res) => {
	        resolve(res.data); // 成功时将数据传递给 Promise 的 resolve
	      },
	      fail: (err) => {
	        reject(err); // 失败时将错误传递给 Promise 的 reject
	      }
	    });
	})
}
export function and_pow_check_base(dev_list)
{
	return my_and_pow_request(dev_list);
}
function my_and_sys_request(dev_list)
{
	return new Promise((resolve, reject) => {
	    dev_list = dev_list - 1;
	    const myand_url = 'https://apis.bemfa.com/va/getmsg?uid=fed4ee5c5da54564b724892de4b32fa7&topic=' + and_sys_id[dev_list] + '&type=3';
	    uni.request({
	      url: myand_url,
	      method: 'GET',
	      success: (res) => {
	        resolve(res.data); // 成功时将数据传递给 Promise 的 resolve
	      },
	      fail: (err) => {
	        reject(err); // 失败时将错误传递给 Promise 的 reject
	      }
	    });
	})
}
export function and_sys_check_base(dev_list)
{
	return my_and_sys_request(dev_list);
}


function and_sendpow_q1(and_id){
	and_id--
	uni.request({
		url:'https://apis.bemfa.com/va/postmsg',
		method:'POST',
		header: {
			'custom-header': 'application/json',
		},
		data: {
			uid:'fed4ee5c5da54564b724892de4b32fa7',
			topic:and_power_id[and_id],
			type:3,
			msg:'q1'
		},
		success: (res) => {
		    console.log(res.data);
		}
	})
}
function and_sendsys_q1(and_id){
	and_id--
	uni.request({
		url:'https://apis.bemfa.com/va/postmsg',
		method:'POST',
		header: {
			'custom-header': 'application/json',
		},
		data: {
			uid:'fed4ee5c5da54564b724892de4b32fa7',
			topic:and_sys_id[and_id],
			type:3,
			msg:'q1'
		},
		success: (res) => {
		    console.log(res.data);
		}
	})
}


export function all_send_q1()
{
	  for(var i=1;i<6;i++){
		  and_sendpow_q1(i)
	  }
	  for(var i=1;i<9;i++){
		  and_sendsys_q1(i)
	  }
}
function all_devpow_check(and_id)
{
	return new Promise((resolve, reject) => {
	    and_id = and_id - 1;
	    const myand_url = 'https://apis.bemfa.com/va/online?uid=fed4ee5c5da54564b724892de4b32fa7&topic=' + and_power_id[and_id] + '&type=3';
	    uni.request({
	      url: myand_url,
	      method: 'GET',
	      success: (res) => {
	        resolve(res.data); // 成功时将数据传递给 Promise 的 resolve
	      },
	      fail: (err) => {
	        reject(err); // 失败时将错误传递给 Promise 的 reject
	      }
	    });
	})
}
function all_devsys_check(and_id)
{
	return new Promise((resolve, reject) => {
	    and_id = and_id - 1;
	    const myand_url = 'https://apis.bemfa.com/va/online?uid=fed4ee5c5da54564b724892de4b32fa7&topic=' + and_sys_id[and_id] + '&type=3';
	    uni.request({
	      url: myand_url,
	      method: 'GET',
	      success: (res) => {
	        resolve(res.data); // 成功时将数据传递给 Promise 的 resolve
	      },
	      fail: (err) => {
	        reject(err); // 失败时将错误传递给 Promise 的 reject
	      }
	    });
	})
}
export function and_powdev_check_base(dev_list)
{
	return all_devpow_check(dev_list);
}
export function and_sysdev_check_base(dev_list)
{
	return all_devsys_check(dev_list);
}