/*
* @Author: 59246
* @Date:   2018-05-22 09:37:00
* @Last Modified by:   59246
* @Last Modified time: 2018-05-22 16:19:34
*/
import goods from 'src/components/goods/goods';
import ratings from 'src/components/ratings/ratings';
import seller from 'src/components/seller/seller';

const router = {
	mode: 'history',
	routes: [
		{	path: '/goods',
			component: goods
		},
		{path: '/ratings',
			component: ratings
		},
		{path: '/seller',
			component: seller
		},
		{path: '/',
			component: goods
		}]
	}
export default router;
