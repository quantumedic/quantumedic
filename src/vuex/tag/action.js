import api from './api'
import * as tag from './type'

const getTagDetail = ({commit}, {id, success}) => {
	commit(tag.REQUESTING_TAG)
	api.getTagInfo(id).then(res => {
		let detail = res.data.result
		commit(tag.REQUESTING_TAG_SUCCESS, {
			detail: detail
		})
		if (success) success()
	}, err => {
		commit(tag.REQUESTING_TAG_FAIL, {
			err: err
		})
	})
}

const getTagDocs = ({commit}, {id, success}) => {
	commit(tag.REQUESTING_TAG_DOCS)
	api.getTagDocs(id).then(res => {
		let list = res.data.result
		commit(tag.REQUESTING_TAG_DOCS_SUCCESS, {
			list: list
		})
	}, err => {
		commit(tag.REQUESTING_TAG_DOCS_FAIL, {
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

const modifyTag = ({commit}, {info, success}) => {
	commit(tag.SUBMITTING_TAG)
	api.editTag(info).then(res => {
		if (res.data.result === true) {
			commit(tag.FAVORING_TAG_SUCCESS)
		}
		if (success) success()
	}, err => {
		commit(tag.FAVORING_TAG_FAIL, {
			err: err
		})
	})
}

const favorTag = ({commit}, {id, favored}) => {
	commit(tag.FAVORING_TAG)
	api.favorTag(id, favored).then(res => {
		if (res.data.result === true) {
			commit(tag.FAVORING_TAG_SUCCESS)
		}
	}, err => {
		commit(tag.FAVORING_TAG_FAIL, {
			err: err
		})
	})
}

const getTagsByLevel = ({commit}, {level, success}) => {
	commit(tag.REQUESTING_TAGS)
	api.getList(level).then(res => {
		let list = res.data.result
		commit(tag.REQUESTING_TAGS_SUCCESS, {
			list: list
		})
	}, err => {
		commit(tag.REQUESTING_TAGS_FAIL, {
			err: err
		})
	})
}

export default {
	actions: {
		getTagDetail,
		getTagDocs,
		modifyTag,
		createTag,
		favorTag,
		getTagsByLevel
	}
}
