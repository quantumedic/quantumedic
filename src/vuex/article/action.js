import api from './api'
import * as article from './type'

const createNewArticle = ({commit}, {tag, success}) => {
	api.createArticle(tag).then(res => {
		let id = res.data.result
		if (success) success(id)
	}, err => {
		console.log(err)
	})
}

const getArticleDetail = ({commit}, {id, draft, success}) => {
	commit(article.REQUESTING_ARITCLE)
	api.getArticle(id, draft).then(res => {
		let detail = res.data.result
		commit(article.REQUESTING_ARITCLE_SUCCESS, {
			detail: detail
		})
		if (success) success()
	}, err => {
		commit(article.REQUESTING_ARITCLE_FAIL, {
			err: err
		})
	})
}

const editArticleInfo = ({commit}, {info, success}) => {
	commit(article.EDITING_ARTICLE)
	api.editArticle(info).then(res => {
		let detail = res.data.result
		commit(article.EDITING_ARTICLE_SUCCESS, {
			detail: detail
		})
		if (success) success()
	}, err => {
		commit(article.EDITING_ARTICLE_FAIL, {
			err: err
		})
	})
}

const getArticleTags = ({commit}, {level, ids, success}) => {
	api.getArticleTags(level, ids).then(res => {
		let list = res.data.result
		commit(article.REQUESTING_ARITCLE_TAGS, {
			level: level,
			list: list
		})
		if (success) success()
	}, err => {
		commit(article.REQUESTING_ARITCLE_TAGS_FAIL, {
			err: err
		})
	})
}

const collectArticle = ({commit}, {id, collected, success}) => {
	commit(article.COLLECTING_ARTICLE)
	api.collectArticle(id, collected).then(res => {
		if (res.data.result === true) {
			commit(article.COLLECTING_ARTICLE_SUCCESS)
		}
	}, err => {
		commit(article.COLLECTING_ARTICLE_FAIL, {
			err: err
		})
	})
}

export default {
	actions: {
		createNewArticle,
		getArticleDetail,
		editArticleInfo,
		getArticleTags,
		collectArticle
	}
}
