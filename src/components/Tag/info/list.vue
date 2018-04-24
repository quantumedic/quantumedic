<template>
	<div>
		<router-link
		class='tag'
		v-for='tag in tags'
		:key='tag.id'
		:to='{name: "tag", params: {id: tag.id}}'
		target="_blank">
			{{tag.name}}
		</router-link>
	</div>
</template>

<script>
	export default {
		props: ['tags']
	}
</script>
