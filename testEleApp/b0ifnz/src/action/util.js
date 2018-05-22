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
	return config
})
ajax.interceptors.response.use((config) => {
  const data = config.data;
  console.log(1);
  if (data.code !== '200') {
    const err = new Error(data.description);
    err.data = data;
    err.response = config;
  } else {
    // return config
  }
}, (rej) => {
  console.log(2);
  return rej
})
export default ajax;
