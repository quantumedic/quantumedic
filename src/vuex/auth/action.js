import api from './api'
import * as auth from './type'

const setAuth = (request, commit, success) => {
	request.then(res => {
		let token = res.data.result.token
		let uid = res.data.result.uid
		commit(auth.ACCOUNT_SIGN_IN, {
			token: token,
			uid: uid
		})
		if (success) success()
	}, err => {
		commit(auth.ACCOUNT_SIGN_ERROR, {
			err: err
		})
	})	
}

const signup = ({commit}, {info, success}) => {
	setAuth(api.registerUser(info), commit, success)
}

const signin = ({commit}, {info, success}) => {
	commit(auth.SUBMITTING_ACCOUNT_INFO)
	setAuth(api.getUserAuth(info), commit, success)
}

const signout = ({commit}, success) => {
	api.logoutUser().then(res => {
		if (res.data.result === true) {
			commit(auth.ACCOUNT_SIGN_OUT)
			if (success) success()
		}
	}, err => {
		console.log(err)
	})
	
}

export default {
	actions: {
		signup,
		signin,
		signout
	}
}
