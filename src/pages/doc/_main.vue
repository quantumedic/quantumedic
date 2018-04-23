<template>
	<div>
		<article-content :article='article'/>
		<hr>
		<article-footer :article='article'/>
	</div>
</template>

<script>
	import ArticleContent from '@/components/Article/info/content'
	import ArticleFooter from '@/components/Article/info/footer'

	export default {
		props: ['article'],
		components: {
			ArticleContent,
			ArticleFooter
		}
	}
</script>
