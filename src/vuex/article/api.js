import {
	ArticleResource
} from '../interface'

export default {
	getArticle: (id, preview) => {
		return ArticleResource().get('', {params: {id: id, preview: preview}})
	},
	editArticle: info => {
		return ArticleResource().put('', info)
	},
	createArticle: tag => {
		return ArticleResource().post('', {tag_id: tag})
	}
}
