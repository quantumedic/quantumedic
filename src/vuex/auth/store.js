import {
	SUBMITTING_ACCOUNT_INFO,
	ACCOUNT_SIGN_IN,
	ACCOUNT_SIGN_ERROR,
	ACCOUNT_SIGN_OUT
} from './type'

import token from '@/api/token'

const state= {
	submitting: false,
	ifLogged: token.get('uid') && true
}

const mutations = {
	[SUBMITTING_ACCOUNT_INFO] (state, action) {
		state.submitting = true
		state.ifLogged = false
	},
	[ACCOUNT_SIGN_IN] (state, action) {
		token.set(action.uid, action.token)
		state.ifLogged = true
		state.submitting = false
	},
	[ACCOUNT_SIGN_ERROR] (state, action) {
		state.ifLogged = false
		state.submitting = false
	},
	[ACCOUNT_SIGN_OUT] (state) {
		state.ifLogged = false
		token.clean()
		token.submitting = false
	}
}

export default {
	state,
	mutations
}
