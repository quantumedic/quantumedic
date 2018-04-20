import {
	AccountResource
} from '../interface'

export default {
	getUserInfo: () => {
		return AccountResource().get('/info')
	},
	updateUserInfo: info => {
		return AccountResource().put('/info', info)
	}
}
