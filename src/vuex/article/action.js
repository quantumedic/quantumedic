import api from './api'
import * as article from './type'

const createNewArticle = ({commit}, {tag, success}) => {
	api.createArticle(tag).then(res => {
		let detail = res.data.result
		if (success) success(detail)
	}, err => {
		console.log(err)
	})
}

const getArticleDetail = ({commit}, {id, preview, success}) => {
	commit(article.REQUESTING_ARITCLE)
	api.getArticle(id, preview).then(res => {
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

export default {
	actions: {
		createNewArticle,
		getArticleDetail,
		editArticleInfo
	}
}
