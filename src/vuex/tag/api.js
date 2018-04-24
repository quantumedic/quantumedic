import {
	TagResource
} from '../interface'

export default {
	getTagInfo: (id, need_doc, need_tree) => {
		return TagResource().get('', {params: {id: id, need_doc: true, need_tree: need_tree}})
	}
}
