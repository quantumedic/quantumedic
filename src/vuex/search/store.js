import {
	SEARCHING_DOCS,
	SEARCHING_DOCS_SUCCESS,
	SEARCHING_DOCS_FAIL,
	SEARCHING_TAGS,
	SEARCHING_TAGS_SUCCESS,
	SEARCHING_TAGS_FAIL,
	SEARCHING_CONTRIBUTIONS,
	SEARCHING_CONTRIBUTIONS_SUCCESS,
	SEARCHING_CONTRIBUTIONS_FAIL,
	SEARCHING_COLLECTIONS,
	SEARCHING_COLLECTIONS_SUCCESS,
	SEARCHING_COLLECTIONS_FAIL
} from './type'

const state = {
	searching: false,
	search_result: {
		docs: [],
		tags: []
	},
	tag_list: [],
	contribution_list: [],
	collection_list: []
}

const mutations = {
	[SEARCHING_DOCS] (state, action) {
		state.searching = true
	},
	[SEARCHING_DOCS_SUCCESS] (state, action) {
		state.search_result = action.list
		state.searching = false
	},
	[SEARCHING_DOCS_FAIL] (state, action) {
		state.searching = false
	},
	[SEARCHING_TAGS] (state, action) {
		state.searching = true
	},
	[SEARCHING_TAGS_SUCCESS] (state, action) {
		state.tag_list = action.list
		state.searching = false
	},
	[SEARCHING_TAGS_FAIL] (state, action) {
		state.searching = false
	},
	[SEARCHING_CONTRIBUTIONS] (state, action) {
		state.searching = true
	},
	[SEARCHING_CONTRIBUTIONS_SUCCESS] (state, action) {
		state.contribution_list = action.list
		state.searching = false
	},
	[SEARCHING_CONTRIBUTIONS_FAIL] (state, action) {
		state.searching = false
	},
	[SEARCHING_COLLECTIONS] (state, action) {
		state.searching = true
	},
	[SEARCHING_COLLECTIONS_SUCCESS] (state, action) {
		state.collection_list = action.list
		state.searching = false
	},
	[SEARCHING_COLLECTIONS_FAIL] (state, action) {
		state.searching = false
	}
}

export default {
	state,
	mutations
}
