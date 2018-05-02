<template>
	<form>
		<div class='form-group'>
			<input
			type="text"
			name=""
			class='form-control'
			v-model='info.keyword'
			placeholder="输入关键词，搜索分类、文档"
			@keydown.enter.prevent='search'>
		</div>
	</form>
</template>

<script>
	export default {
		props: ['info'],
		methods: {
			search: function () {
				this.$router.push({
					name: 'search',
					query: {keyword: this.info.keyword}
				})
			}
		}
	}
</script>
