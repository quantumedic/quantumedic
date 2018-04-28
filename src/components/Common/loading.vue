<template>
	<div class='loading-spin'>
		<img :src="loading" alt="加载中" height="28" />
	</div>
</template>

<script>
	export default {
		data () {
			return {
				loading: require('loading-svg/loading-spin.svg')
			}
		}
	}
</script>

<style lang='less' scoped>
	.loading-spin {
		margin: 20px;
		text-align: center;
	}
</style>
