export const clone = obj => {
	let str = obj.constructor === Array ? [] : {}
	let result = obj.constructor === Array ? [] : {}
	if (typeof obj !== 'object') {
		return
	} else if (window.JSON) {
		str = JSON.stringify(obj)
		result = JSON.parse(str)
	} else {
		for (var i in obj) {
			result[i] = typeof obj[i] === 'object'
				? clone(obj[i])
				: obj[i]
		}
	}
	return result
}
