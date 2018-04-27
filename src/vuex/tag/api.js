import {
	TagResource
} from '../interface'

export default {
	getTagInfo: id => {
		return TagResource().get('', {params: {id: id}})
	},
	createTag: info => {
		return TagResource().post('', info)
	},
	getTagDocs: id => {
		return TagResource().get('/docs', {params: {id: id}})
	}
}
