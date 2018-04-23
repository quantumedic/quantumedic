import api from './api'
import * as tag from './type'

const getTagDetail = ({commit}, {id, success}) => {
	commit(tag.REQUESTING_TAG)
	api.getTagInfo(id).then(res => {
		let detail = res.data.result
		commit(tag.REQUESTING_TAG_SUCCESS, {
			detail: detail
		})
	}, err => {
		commit(tag.REQUESTING_TAG_FAIL, {
			err: err
		})
	})
}

export default {
	actions: {
		getTagDetail
	}
}
