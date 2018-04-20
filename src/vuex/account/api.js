import {
	AccountResource
} from '../interface'

export default {
	getUserInfo: () => {
		return AccountResource().get('/info')
	} 
}
