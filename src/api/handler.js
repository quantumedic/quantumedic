const handler = res => {
	switch (res.data.code) {
		case 200:
			return res
		case 401:
			token.clean()
			window.location.reload()
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
