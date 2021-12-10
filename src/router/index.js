import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Another from '../views/Another.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/another',
		name: 'Another',
		component: Another
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
