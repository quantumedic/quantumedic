import {
	ArticleResource
} from '../interface'

export default {
	getArticle: id => {
		return ArticleResource().get('', {params: {id: id}})
	},
	editArticle: info => {
		return ArticleResource().put('', info)
	}
}
