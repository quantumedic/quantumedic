<template>
	<div>首页</div>
</template>

<script>
	export default {
		mounted () {
			this.$router.push({name: 'search'})
		}
	}
</script>