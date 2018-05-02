import {
	REQUESTING_ARITCLE,
	REQUESTING_ARITCLE_SUCCESS,
	REQUESTING_ARITCLE_FAIL,
	EDITING_ARTICLE,
	EDITING_ARTICLE_SUCCESS,
	EDITING_ARTICLE_FAIL,
	REQUESTING_ARITCLE_TAGS,
	REQUESTING_ARITCLE_TAGS_FAIL,
	COLLECTING_ARTICLE,
	COLLECTING_ARTICLE_SUCCESS,
	COLLECTING_ARTICLE_FAIL,
	REMOVING_ARTICLE,
	REMOVING_ARTICLE_SUCCESS,
	REMOVING_ARTICLE_FAIL
} from './type'

const state = {
	requesting: false,
	article_unexistance: false,
	article_detail: {
		author: {},
		editors: [],
		tags: [],
		last_update_author: {}
	},
	tag_list: [],
	editing: false,
	removing: false
}

const mutations = {
	[REQUESTING_ARITCLE] (state, action) {
		state.requesting = true
		state.article_unexistance = false
	},
	[REQUESTING_ARITCLE_SUCCESS] (state, action) {
		state.article_detail = action.detail
		state.requesting = false
		state.article_unexistance = false
	},
	[REQUESTING_ARITCLE_FAIL] (state, action) {
		state.requesting = false
		state.article_unexistance = true
	},
	[EDITING_ARTICLE] (state, action) {
		state.editing = true
	},
	[EDITING_ARTICLE_SUCCESS] (state, action) {
		state.article_detail = action.detail
		state.editing = false
	},
	[EDITING_ARTICLE_FAIL] (state, action) {
		state.editing = false
	},
	[REQUESTING_ARITCLE_TAGS] (state, action) {
		state.tag_list = action.list
	},
	[REQUESTING_ARITCLE_TAGS_FAIL] (state, action) {
		console.log(action.err)
	},
	[COLLECTING_ARTICLE] (state, action) {
		state.collecting = true
	},
	[COLLECTING_ARTICLE_SUCCESS] (state, action) {
		state.article_detail.collected = !state.article_detail.collected
		state.collecting = false
	},
	[COLLECTING_ARTICLE_FAIL] (state, action) {
		state.collecting = false
	},
	[REMOVING_ARTICLE] (state, action) {
		state.removing = true
	},
	[REMOVING_ARTICLE_SUCCESS] (state, action) {
		state.removing = false
	},
	[REMOVING_ARTICLE_FAIL] (state, action) {
		state.removing = false
	}
}

export default {
	state,
	mutations
}
