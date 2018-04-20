import {
	AccountResource
} from '../interface'

export default {
	registerUser: info => {
		return AccountResource().post('/register', info)
	},
	getUserAuth: info => {
		return AccountResource().post('/login', info)
	}
}
