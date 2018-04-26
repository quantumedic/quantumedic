import api from './api'
import * as tag from './type'

const getTagDetail = ({commit}, {id, success, need_doc, need_tree}) => {
	commit(tag.REQUESTING_TAG)
	api.getTagInfo(id, need_doc, need_tree).then(res => {
		let detail = res.data.result
		commit(tag.REQUESTING_TAG_SUCCESS, {
			detail: detail
		})
	}, err => {
		commit(tag.REQUESTING_TAG_FAIL, {
			err: err
		})
	})
}

const createTag = ({commit}, {info, success}) => {
	commit(tag.SUBMITTING_TAG)
	api.createTag(info).then(res => {
		let _tag = res.data.result
		commit(tag.TAG_OPERATION_SUCCESS)
		if (success) success(_tag)
	}, err => {
		commit(tag.TAG_OPERATION_FAIL, {
			err: err
		})
	})
}

export default {
	actions: {
		getTagDetail,
		createTag
	}
}
