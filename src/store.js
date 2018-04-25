import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './vuex/auth'
import AccountModule from './vuex/account'
import ArticleModule from './vuex/article'
import TagModule from './vuex/tag'
import SearchModule from './vuex/search'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		AuthModule,
		AccountModule,
		ArticleModule,
		TagModule,
		SearchModule
	}
})
