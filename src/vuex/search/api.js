import {
	SearchResource
} from '../interface'

export default {
	searchDocs: () => {
		return SearchResource().get('/docs')
	},
	searchTags: () => {
		return SearchResource().get('/tags')
	}
}
