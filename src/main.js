// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from './store'
import './less/core.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
sync(store, router)
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
window.router = router
