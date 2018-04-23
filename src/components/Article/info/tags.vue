<template>
	<div>
		<router-link
		class='tag'
		v-for='tag in article.tags'
		:key='tag._id'
		:to='{name: "tag", params: {id: tag._id}}'
		target="_blank">
			{{tag.name}}
		</router-link>
	</div>
</template>

<script>
	export default {
		props: ['article']
	}
</script>
