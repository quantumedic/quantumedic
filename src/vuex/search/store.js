import {
	SEARCHING_DOCS,
	SEARCHING_DOCS_SUCCESS,
	SEARCHING_DOCS_FAIL,
	SEARCHING_TAGS,
	SEARCHING_TAGS_SUCCESS,
	SEARCHING_TAGS_FAIL
} from './type'

const state = {
	searching: false,
	doc_list: [],
	tag_list: []
}

const mutations = {
	[SEARCHING_DOCS] (state, action) {
		state.searching = true
	},
	[SEARCHING_DOCS_SUCCESS] (state, action) {
		state.doc_list = action.list
		state.searching = false
	},
	[SEARCHING_DOCS_FAIL] (state, action) {
		state.searching = false
	},
	[SEARCHING_TAGS] (state, action) {
		state.searching = true
	},
	[SEARCHING_TAGS_SUCCESS] (state, action) {
		state.tag_list = []
		action.list.forEach(tag => {
			console.log(state.tag_list[tag.level - 1])
			state.tag_list[tag.level - 1]
				? state.tag_list = Object.assign([], state.tag_list, {[tag.level - 1]: state.tag_list[tag.level - 1].concat([tag])})
				: state.tag_list = Object.assign([], state.tag_list, {[tag.level - 1]: [tag]})
			console.log(state.tag_list)
		})
		console.log(state.tag_list)
		state.searching = false
	},
	[SEARCHING_TAGS_FAIL] (state, action) {
		state.searching = false
	}
}

export default {
	state,
	mutations
}
