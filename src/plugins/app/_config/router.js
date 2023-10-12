import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
	{
		path: '',
		name: 'Login',
		component: () => import('@/plugins/app/views/log-in.vue')
	},
	{
		path: '/home',
		name: 'Main',
		component: () => import('@/plugins/lib@alexandra/alexandra-main/alexandra-main.vue'),
	},
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: () => import('@/plugins/app/views/not-found.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router