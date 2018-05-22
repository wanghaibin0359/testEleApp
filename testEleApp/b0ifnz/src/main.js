import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import routers from 'src/router/index.js';
import stores from 'src/store/index';
Vue.use(VueRouter);
Vue.use(Vuex);
let router = new VueRouter(routers);
let store = new Vuex.Store(stores);
console.log(routers)
let Apps = new Vue({
		el: '#app',
		router,
		store,
		render: h => h(App)
	});

export default Apps;

/* let app = Vue.extend(App);
   let router = new VueRouter({
	linkActiveClass: 'active'
	});
router.map({
	'/goods': {
		component: goods
	},
	'/ratings': {
		component: ratings
	},
	'seller': {
		component: seller
	}
});
router.start(app, '#app');*/
// router.go('/goods');
