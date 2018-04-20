const localstorage = window.localStorage

export default {
	get: key => localstorage.getItem(key),
	set: (uid, token) => {
		localstorage.setItem('uid', uid)
		localstorage.setItem('token', token)
	},
	clean: () => {
		localstorage.removeItem('uid')
		localstorage.removeItem('token')
	}
}
