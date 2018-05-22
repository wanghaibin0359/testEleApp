/*
* @Author: 59246
* @Date:   2018-05-22 16:23:04
* @Last Modified by:   59246
* @Last Modified time: 2018-05-22 16:36:33
*/

import axios from 'axios';
const ajax = axios.create({
	'baseURL': '/api',
	'timeout': 3000
})
ajax.interceptors.request.use((config) => {
	console.log(config)
	return config
})
ajax.interceptors.response.use((config) => {
	console.log(config)
	return config
})
export default ajax;
