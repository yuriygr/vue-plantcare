import { createRouter, createWebHistory } from 'vue-router'

import Plants from '@/views/Plants'
import Menu from '@/views/Menu'
import About from '@/views/About'

import MyRoutes from '@/app/components/router/modules/my'
import SettingsRoutes from '@/app/components/router/modules/settings'
import HelpRoutes from '@/app/components/router/modules/help'
import AuthRoutes from '@/app/components/router/modules/auth'

const routes = [
  ...MyRoutes,
	...SettingsRoutes,
	...HelpRoutes,
  ...AuthRoutes,

  { path: '/', name: 'plants', component: Plants, meta: { layout: 'wide' } },
  { path: '/plant/:id', name: 'plant', component: Plants, meta: { layout: 'wide' } },

	{ path: '/menu', name: 'menu', component: Menu, meta: { requiresAuth: true } },
	{ path: '/donate', name: 'donate', component: About },
	{ path: '/about', name: 'about', component: About },

  { path: '/:pathMatch(.*)*', redirect: { name: 'plants' } }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  pathToRegexOptions: { strict: true },
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition)
      return savedPosition
    else if (to.hash)
      return { selector: to.hash }
    else
      return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  //if (to.meta.requiresAuth) { //&& !auth.isLoggedIn()) {
  //  // this route requires auth, check if logged in
  //  // if not, redirect to login page.
  //  return {
  //    name: 'auth',
  //    // save the location we were at to come back later
  //    query: { redirect: to.fullPath },
  //  }
  //}
})

export default router