import api from './api'
import * as account from './type'

const getAccount = ({commit}) => {
	api.getUserInfo().then(res => {
		let info = res.data.result
		commit(account.GET_ACCOUNT_INFO, {
			info: info
		})
	}, err => {
		commit(account.GET_ACCOUNT_INFO_ERROR, {
			err: err
		})
	})
}

const updateAccount = ({commit}, {info, success}) => {
	commit(account.UPDATING_ACCOUNT)
	api.updateUserInfo(info).then(res => {
		let info = res.data.result
		commit(account.UPDATING_ACCOUNT_SUCCESS, {
			info: info
		})
		if (success) success()
	}, err => {
		commit(account.UPDATING_ACCOUNT_FAIL, {
			err: err
		})
	})
}

export default {
	actions: {
		getAccount,
		updateAccount
	}
}
