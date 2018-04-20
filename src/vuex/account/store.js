import {
	GET_ACCOUNT_INFO,
	GET_ACCOUNT_INFO_ERROR
} from './type'

const state = {
	user_info: {}
}

const mutations = {
	[GET_ACCOUNT_INFO] (state, action) {
		state.user_info = action.info
	},
	[GET_ACCOUNT_INFO_ERROR] (state, action) {
		state.user_info = {}
	}
}

export default {
	state,
	mutations
}

