const and_url='https://apis.bemfa.com/va/postmsg';



export function request_and(num_type,num_set){
	if(num_type==1){//当输入数据类型为电源时
		if(num_set==1){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b680',
					type:3,
					msg:'a1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_set==2){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b682',
					type:3,
					msg:'a1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_set==3){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b693',
					type:3,
					msg:'a1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_set==4){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b69f',
					type:3,
					msg:'a1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_set==5){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b6b1',
					type:3,
					msg:'a1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
	}
	else if(num_type==2){
		if(num_set==1){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b6b8',
					type:3,
					msg:'a1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_set==2){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b705',
					type:3,
					msg:'a1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_set==3){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b718',
					type:3,
					msg:'a1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_set==4){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b727',
					type:3,
					msg:'a1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_set==5){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b72b',
					type:3,
					msg:'a1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_set==6){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b732',
					type:3,
					msg:'a1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_set==7){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b7a2',
					type:3,
					msg:'a1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_set==8){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b7a5',
					type:3,
					msg:'a1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
	}
}
	
export function and_stop_send(num_type,num_stop){
	if(num_type==1){//当输入数据类型为电源时
		if(num_stop==1){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b680',
					type:3,
					msg:'b1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_stop==2){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b682',
					type:3,
					msg:'b1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_stop==3){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b693',
					type:3,
					msg:'b1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_stop==4){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b69f',
					type:3,
					msg:'b1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_stop==5){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b6b1',
					type:3,
					msg:'b1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
	}
	else if(num_type==2){
		if(num_stop==1){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b6b8',
					type:3,
					msg:'b1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_stop==2){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b705',
					type:3,
					msg:'b1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_stop==3){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b718',
					type:3,
					msg:'b1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_stop==4){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b727',
					type:3,
					msg:'b1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_stop==5){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b72b',
					type:3,
					msg:'b1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_stop==6){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b732',
					type:3,
					msg:'b1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_stop==7){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b7a2',
					type:3,
					msg:'b1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
		else if(num_stop==8){
			uni.request({
				url:and_url,
				method:'POST',
				header: {
					'custom-header': 'application/json',
				},
				data: {
					uid:'fed4ee5c5da54564b724892de4b32fa7',
					topic:'e8db8453b7a5',
					type:3,
					msg:'b1'
				},
				success: (res) => {
				    console.log(res.data);
				}
			})
		}
	}
}