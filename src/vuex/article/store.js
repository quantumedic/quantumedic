import {
	REQUESTING_ARITCLE,
	REQUESTING_ARITCLE_SUCCESS,
	REQUESTING_ARITCLE_FAIL,
	EDITING_ARTICLE,
	EDITING_ARTICLE_SUCCESS,
	EDITING_ARTICLE_FAIL
} from './type'

const state = {
	requesting: false,
	article_unexistance: false,
	article_detail: {},
	editing: false
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
	}
}

export default {
	state,
	mutations
}
