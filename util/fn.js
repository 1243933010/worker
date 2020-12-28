// export let baseUrl = 'http://39.99.140.107:1220'
export let baseUrl = 'http://192.168.0.104:1219';
// export let baseUrl = 'http://192.168.0.7:1220';
export let $request = (url,header,data)=>{
	
	// console.log(token)
	return new Promise((resolve,reject)=>{
		uni.request({
			url:`${baseUrl}${url}`,
			method:'POST',
			data,
			header,
			success:(res)=>{
				resolve(res)
				if(res.data.status===1010){
					uni.reLaunch({
						url:'/pages/login/login'
					})
				}
				//  if(res.statusCode ===200){
				// 	resolve(res.data)
				// }else if(res.data.errMsg){
				// 	uni.showToast({
				// 		icon:'none',
				// 		title:`${res.data.errMsg}`
				// 	})
				// }else{
				// 	uni.showToast({
				// 		icon:'none',
				// 		title:`数据错误`
				// 	})
				// }
				
			},fail:(err)=>{
				reject(err);
				// console.log(err)
			}
		})
	})
}

export let $toast = (title)=>{
	uni.showToast({
		icon:'none',
		title
	})
}