<template>
	<div>
		<article-content :article='article'/>
	</div>
</template>

<script>
	import ArticleContent from '@/components/Article/info/content'
	

	export default {
		props: ['article'],
		components: {
			ArticleContent
		}
	}
</script>
