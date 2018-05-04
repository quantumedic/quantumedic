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
	editTag: info => {
		return TagResource().put('', info)
	},
	getTagDocs: id => {
		return TagResource().get('/docs', {params: {id: id}})
	},
	favorTag: (id, favored) => {
		return favored ? TagResource().delete('favor', {params: {id: id}}) : TagResource().put('/favor', {id: id})
	},
	getList: level => {
		return TagResource().get('list', {params: {level: level}})
	}
}
