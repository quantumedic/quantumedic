<template>
	<div>
		<article-intro :article='article'/>
		<collect-article :article='article'/>
	</div>
</template>

<script>
	import ArticleIntro from '@/components/Article/info/intro'
	import CollectArticle from '@/components/Article/operation/collect'

	export default {
		props: ['article'],
		components: {
			ArticleIntro,
			CollectArticle
		}
	}
</script>
