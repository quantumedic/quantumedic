import {
	REQUESTING_ARITCLE,
	REQUESTING_ARITCLE_SUCCESS,
	REQUESTING_ARITCLE_FAIL,
	EDITING_ARTICLE,
	EDITING_ARTICLE_SUCCESS,
	EDITING_ARTICLE_FAIL,
	REQUESTING_ARITCLE_TAGS,
	REQUESTING_ARITCLE_TAGS_FAIL
} from './type'

const state = {
	requesting: false,
	article_unexistance: false,
	article_detail: {},
	tag_list: [],
	editing: false
}

const mutations = {
	[REQUESTING_ARITCLE] (state, action) {
		state.requesting = true
		state.article_unexistance = false
	},
	[REQUESTING_ARITCLE_SUCCESS] (state, action) {
		state.article_detail = action.detail
		state.article_detail.tags.forEach(tag => {
			state.tag_list[tag.level - 1]
				? state.tag_list[tag.level - 1].push(tag)
				: state.tag_list[tag.level - 1] = [tag]
		})
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
		let _list = []
		action.list.forEach(tag => {
			_list[tag.level - 1]
				? _list[tag.level - 1].push(tag)
				: _list[tag.level - 1] = [tag]
		})
		state.tag_list = Object.assign([], _list)
	},
	[REQUESTING_ARITCLE_TAGS_FAIL] (state, action) {
		console.log(action.err)
	}
}

export default {
	state,
	mutations
}
