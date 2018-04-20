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
			info: info
		})
	})
}

export default {
	actions: {
		getAccount
	}
}
