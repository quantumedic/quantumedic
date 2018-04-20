import {
	GET_ACCOUNT_INFO,
	GET_ACCOUNT_INFO_ERROR,
	UPDATING_ACCOUNT,
	UPDATING_ACCOUNT_SUCCESS,
	UPDATING_ACCOUNT_FAIL
} from './type'

const state = {
	user_info: {},
	updating: false
}

const mutations = {
	[GET_ACCOUNT_INFO] (state, action) {
		state.user_info = action.info
	},
	[GET_ACCOUNT_INFO_ERROR] (state, action) {
		state.user_info = {}
	},
	[UPDATING_ACCOUNT] (state, action) {
		state.updating = true
	},
	[UPDATING_ACCOUNT_SUCCESS] (state, action) {
		state.user_info = action.info
		state.updating = false
	},
	[UPDATING_ACCOUNT_FAIL] (state, action) {
		state.updating = false
	}
}

export default {
	state,
	mutations
}

