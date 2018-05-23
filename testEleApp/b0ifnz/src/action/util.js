/*
* @Author: 59246
* @Date:   2018-05-22 16:23:04
* @Last Modified by:   59246
* @Last Modified time: 2018-05-23 13:45:34
*/
import axios from 'axios';
const ajax = axios.create({
	'baseURL': '/api',
	'timeout': 3000
})
ajax.interceptors.request.use((config) => {
	return config
})
ajax.interceptors.response.use((config) => {
  const data = config.data;
  if (config.status !== 200) {
    const err = new Error(data.description);
    err.data = data;
    err.response = config;
    return Promise.reject(err);
  } else {
    return data
  }
}, (rej) => {
  return Promise.reject(rej);
})

let openBox = function (alert) {
	this.$alert(alert, '报错信息', {
		dangerouslyUseHTMLString: '确定'
	})
}
export default {
	install: function(ss) {
		ss.prototype.$ajax = ajax;
		ss.prototype.$openBox = openBox;
	}
}
