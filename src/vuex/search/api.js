import {
	SearchResource
} from '../interface'

export default {
	searchDocs: keyword => {
		return SearchResource().get('/docs', {params: {keyword: keyword}})
	},
	searchTags: () => {
		return SearchResource().get('/tags')
	},
	searchContributions: () => {
		return SearchResource().get('/contributions')
	},
	searchCollections: () => {
		return SearchResource().get('/collections')
	}
}
