import { createRouter, createWebHashHistory } from "vue-router"
import globalProperties from "./main.js"

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/plugins/app/views/password-auth.vue'),
	},
	{
		path: '/home',
		name: 'Main',
		component: () => import('@/plugins/lib@alexandra/alexandra-main/alexandra-main.vue'),
		meta: { requiresAuth: true },
	},
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
	}
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

router.beforeEach((to) => {
	if (to.meta.requiresAuth === true) {
		if (!globalProperties.$isAuthenticated) return false;
	} else {
		if (to.name === "NotFound") return { name: "Main" };
		if (to.name === "Login" && globalProperties.$isAuthenticated) return false;
	}
})

export default router