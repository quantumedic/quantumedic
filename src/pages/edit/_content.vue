<template>
	<div>
		<article-content :article='article'/>
	</div>
</template>

<script>
	import ArticleContent from '@/components/Article/form/content'

	export default {
		props: ['article'],
		components: {
			ArticleContent
		}
	}
</script>