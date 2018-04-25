import token from './token'

const handler = res => {
	switch (res.data.code) {
		case 200:
			return res
		case 404:
			token.clean()
			window.location.href = window.location.origin
			// deal token err
			return Promise.reject(res.data.msg)
		default:
			// deal code err
			window.alert(res.data.msg)
			return Promise.reject(res.data)
	}
}

export default {
	resolve: res => res.status === 200 ? handler(res) : false
}
