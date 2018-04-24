import {
	REQUESTING_TAG,
	REQUESTING_TAG_SUCCESS,
	REQUESTING_TAG_FAIL
} from './type'

const state = {
	requesting: false,
	tag_detail: {
		parents: [],
		children: [],
		docs: []
	},
	tag_unexistance: false
}

const mutations = {
	[REQUESTING_TAG] (state, action) {
		state.requesting = true
		state.tag_unexistance = false
	},
	[REQUESTING_TAG_SUCCESS] (state, action) {
		state.tag_detail = action.detail
		state.tag_unexistance = false
		state.requesting = false
	},
	[REQUESTING_TAG_FAIL] (state, action) {
		state.tag_unexistance = true
		state.requesting = false
	}
}

export default {
	state,
	mutations
}
