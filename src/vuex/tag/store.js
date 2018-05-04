import {
	REQUESTING_TAG,
	REQUESTING_TAG_SUCCESS,
	REQUESTING_TAG_FAIL,
	REQUESTING_TAG_DOCS,
	REQUESTING_TAG_DOCS_SUCCESS,
	REQUESTING_TAG_DOCS_FAIL,
	SUBMITTING_TAG,
	TAG_OPERATION_SUCCESS,
	TAG_OPERATION_FAIL,
	FAVORING_TAG,
	FAVORING_TAG_SUCCESS,
	FAVORING_TAG_FAIL,
	REQUESTING_TAGS,
	REQUESTING_TAGS_SUCCESS,
	REQUESTING_TAGS_FAIL
} from './type'

const state = {
	requesting: false,
	tag_detail: {
		parents: [],
		children: []
	},
	tag_unexistance: false,
	requesting_docs: false,
	tag_docs: [],
	submitting_tag: false,
	favoring: false,
	parent_tags: []
}

const mutations = {
	[REQUESTING_TAG] (state, action) {
		state.tag_docs = []
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
	},
	[REQUESTING_TAG_DOCS] (state, action) {
		state.requesting_docs = true
	},
	[REQUESTING_TAG_DOCS_SUCCESS] (state, action) {
		state.tag_docs = action.list
		state.requesting_docs = false
	},
	[REQUESTING_TAG_DOCS_FAIL] (state, action) {
		state.requesting_docs = false
	},
	[SUBMITTING_TAG] (state, action) {
		state.submitting_tag = true
	},
	[TAG_OPERATION_SUCCESS] (state, action) {
		state.submitting_tag = false
	},
	[TAG_OPERATION_FAIL] (state, action) {
		state.submitting_tag = false
	},
	[FAVORING_TAG] (state, action) {
		state.favoring = true
	},
	[FAVORING_TAG_SUCCESS] (state, action) {
		state.tag_detail.favored = !state.tag_detail.favored
		state.favoring = false
	},
	[FAVORING_TAG_FAIL] (state, action) {
		state.favoring = false
	},
	[REQUESTING_TAGS] (state, action) {
		state.parent_tags = []
		state.requesting = true
	},
	[REQUESTING_TAGS_SUCCESS] (state, action) {
		state.parent_tags = action.list
		state.requesting = false
	},
	[REQUESTING_TAGS_FAIL] (state, action) {
		state.requesting = false
	}
}

export default {
	state,
	mutations
}
