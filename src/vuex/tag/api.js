import {
	TagResource
} from '../interface'

export default {
	getTagInfo: id => {
		return TagResource().get('', {params: {id: id, need_doc: true}})
	}
}
