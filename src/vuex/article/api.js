import {
	ArticleResource,
	TagResource
} from '../interface'

export default {
	getArticle: (id, draft) => {
		return ArticleResource().get('', {params: {id: id, draft: draft}})
	},
	editArticle: info => {
		return ArticleResource().put('', info)
	},
	createArticle: tag => {
		return ArticleResource().post('', {tag_id: tag})
	},
	getArticleTags: (level, ids) => {
		return TagResource().get('/list', {params: {level: level, ids: ids}})
	}
}
