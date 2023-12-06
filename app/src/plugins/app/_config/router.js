import { createRouter, createWebHistory } from "vue-router"

import Helpers from "@/plugins/uni@helpers/helpers"

const routes = [
	{
		path: '/auth',
		name: 'Auth',
		component: () => import('@/plugins/app@alexandra/general/alexandra-auth.vue'),
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/plugins/app@alexandra/general/alexandra-home.vue'),
		meta: { requiresAuth: true },
	},
	{
		path: '/bd2023',
		name: 'Bd2023',
		component: () => import('@/plugins/app@alexandra/bd/alexandra-bd-2023.vue'),
		meta: { requiresAuth: true },
	},
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
})

router.beforeEach((to, from) => {
	if (to.meta.requiresAuth === true) {
		if (!Helpers.isAuth()) return { name: "Auth" };
	} else {
        if (to.name === "NotFound") {
			if (!Helpers.isAuth()) return { name: 'Auth' };
			else return { name: 'Home' };
		}  
		if (to.name === "Auth" && Helpers.isAuth()) return { name: from.name || "Home" };
	}
})

export default router