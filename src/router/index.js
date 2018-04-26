import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
	if (savedPosition) {
		return savedPosition
	} else {
		const position = {}
		if (to.hash) {
			position.selector = to.hash
		}
		if (to.matched.some(m => m.meta.scrollToTop)) {
			position.x = 0
			position.y = 0
		}
		return position
	}
}

export default new Router({
	mode: 'history',
	scrollBehavior,
	routes: [
		{
			path: '/',
			name: 'home',
			component: resolve => require(['@/pages/index/index.vue'], resolve)
		},
		{
			path: '/search',
			name: 'search',
			component: resolve => require(['@/pages/search/index.vue'], resolve)
		},
		{
			path: '/account/:tab',
			name: 'account',
			component: resolve => require(['@/pages/account/index.vue'], resolve)
		},
		{
			path: '/edit/:id',
			name: 'edit',
			component: resolve => require(['@/pages/edit/index.vue'], resolve)
		},
		{
			path: '/doc/:id',
			name: 'doc',
			component: resolve => require(['@/pages/doc/index.vue'], resolve)
		},
		{
			path: '/tag/:id',
			name: 'tag',
			component: resolve => require(['@/pages/tag/index.vue'], resolve)
		},
		{
			path: '/tags',
			name: 'tags',
			component: resolve => require(['@/pages/tag/list.vue'], resolve)
		},
		{
			path: '/add/:id',
			name: 'add',
			component: resolve => require(['@/pages/tag/add.vue'], resolve)
		}
	]
})
