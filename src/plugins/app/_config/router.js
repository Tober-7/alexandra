import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
	{
		path: 'asd',
		name: 'Main',
		component: () => import('@/plugins/lib@alexandra/alexandra-main/alexandra-main.vue')
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