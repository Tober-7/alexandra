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
		path: '/:catchAll(.*)',
		name: 'NotFound',
	},

	{
		path: '/bd2023',
		name: 'Bd2023',
		component: () => import('@/plugins/app@alexandra/bd/alexandra-bd-2023.vue'),
		meta: { requiresAuth: true },
	},

	{
		path: '/ch2023',
		name: 'Ch2023',
		component: () => import('@/plugins/app@alexandra/ch/alexandra-ch-2023.vue'),
		meta: { requiresAuth: true },
	},

	{
		path: '/va2024',
		name: 'Va2024',
		component: () => import('@/plugins/app@alexandra/va/alexandra-va-2024.vue'),
		meta: { requiresAuth: true },
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
})

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth === true) {
		if (!Helpers.isAuth()) next({ name: "Auth" });
		else next();
	} else {
		if (to.name === "NotFound") {
			if (!Helpers.isAuth()) next({ name: "Auth" });
			else next({ name: "Home"} );
		}  
		else if (to.name === "Auth") {
			if (Helpers.isAuth()) next({ name: "Home" });
			else next();
		}
	}
})

export default router