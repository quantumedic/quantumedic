import {
	SEARCHING_DOCS,
	SEARCHING_DOCS_SUCCESS,
	SEARCHING_DOCS_FAIL
} from './type'

const state = {
	searching: false,
	list: []
}

const mutations = {
	[SEARCHING_DOCS] (state, action) {
		state.searching = true
	},
	[SEARCHING_DOCS_SUCCESS] (state, action) {
		state.list = action.list
		state.searching = false
	},
	[SEARCHING_DOCS_FAIL] (state, action) {
		state.searching = false
	}
}

export default {
	state,
	mutations
}
