import api from './api'
import * as search from './type'

const getAllTags = ({commit}) => {
	commit(search.SEARCHING_TAGS)
	api.searchTags().then(res => {
		let list = res.data.result
		commit(search.SEARCHING_TAGS_SUCCESS, {
			list: list
		})
	}, err => {
		commit(search.SEARCHING_TAGS_FAIL, {
			err: err
		})
	})
}

const searchDocsByCondition = ({commit}, {keyword}) => {
	commit(search.SEARCHING_DOCS)
	api.searchDocs(keyword).then(res => {
		let list = res.data.result
		commit(search.SEARCHING_DOCS_SUCCESS, {
			list: list
		})
	}, err => {
		commit(search.SEARCHING_DOCS_FAIL, {
			err: err
		})
	})
}

const searchMyContributions = ({commit}) => {
	commit(search.SEARCHING_CONTRIBUTIONS)
	api.searchContributions().then(res => {
		let list = res.data.result
		commit(search.SEARCHING_CONTRIBUTIONS_SUCCESS, {
			list: list
		})
	}, err => {
		commit(search.SEARCHING_CONTRIBUTIONS_FAIL, {
			err: err
		})
	})
}

const searchMyCollections = ({commit}) => {
	commit(search.SEARCHING_COLLECTIONS)
	api.searchCollections().then(res => {
		let list = res.data.result
		commit(search.SEARCHING_COLLECTIONS_SUCCESS, {
			list: list
		})
	}, err => {
		commit(search.SEARCHING_COLLECTIONS_FAIL, {
			err: err
		})
	})
}

export default {
	actions: {
		searchDocsByCondition,
		getAllTags,
		searchMyContributions,
		searchMyCollections
	}
}
