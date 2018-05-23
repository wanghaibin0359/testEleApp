/*
* @Author: 59246
* @Date:   2018-05-23 14:07:44
* @Last Modified by:   59246
* @Last Modified time: 2018-05-23 15:01:41
*/

async function allAction (...arg) {
	let obj = {};
	let self = arg.shift();
	for (let [i, v] of arg.entries()) {
		obj[i] = await v.call(self);
	}
	/* for (let i = 0; i < arg.length; i++) {
		obj[i] = await arg[i];
	} */
	return obj
}
export default allAction;
