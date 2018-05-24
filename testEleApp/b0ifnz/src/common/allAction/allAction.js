/*
* @Author: 59246
* @Date:   2018-05-23 14:07:44
* @Last Modified by:   59246
* @Last Modified time: 2018-05-24 13:26:46
*/

async function allAction (...arg) {
	let obj = [];
	for (let [i, v] of arg.entries()) {
		obj[i] = await v;
	}
	return obj
}
export default allAction;
