import axios from 'axios'
import handler from './handler'
import token from './token'

export const buildResource = url => {
	const resource = module => {
		let _resource = axios.create({
			baseURL: url + module
		})

		_resource.interceptors.request.use(config => {
			if (token.get('uid')) config.headers.common['Authorization'] = "uid=" + token.get('uid') + ";token=" + token.get('token')
			return config
		}, err => {
			return Promise.reject(err)
		})

		_resource.interceptors.response.use(res => {
			return handler.resolve(res)
		}, error => {
			return Promise.reject(error)
		})
		// return
		return _resource
	}

	return resource
}
