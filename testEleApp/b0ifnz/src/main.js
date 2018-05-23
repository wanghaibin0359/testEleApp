import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import routers from 'src/router/index.js';
import stores from 'src/store/index';
import util from 'src/action/util.js';
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(util);
let router = new VueRouter(routers);
let store = new Vuex.Store(stores);
let Apps = new Vue({
		el: '#app',
		router,
		store,
		render: h => h(App)
	});
export default Apps;
