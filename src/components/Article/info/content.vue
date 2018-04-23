<template>
	<div v-html='article.content'/>
</template>

<script>
	export default {
		props: ['article']
	}
</script>
