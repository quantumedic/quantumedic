<template>
	<div>
		<article-tags :article='article'/>
	</div>
</template>

<script>
	import ArticleTags from '@/components/Article/info/tags'

	export default {
		props: ['article'],
		components: {
			ArticleTags
		}
	}
</script>