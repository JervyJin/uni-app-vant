function request(url, data, method = 'GET', callback, errorCallback) {

	var ctype = 'application/json;charset=utf-8';
	if (method.toUpperCase() != 'GET')
		ctype = 'application/x-www-form-urlencoded;charset=utf-8';

	uni.request({
		// url: 'http://192.168.0.117:8080/system/phone' + url,
		url: 'http://zm.dangjian.link/system/phone' + url,

		method: method,
		data: data,
		header: {
			'content-type': ctype,
		},

		success: function(res) {
			 callback(res.data)
		}
	})
}


export default {
	request
}
