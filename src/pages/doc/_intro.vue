<template>
	<div>
		<article-intro :article='article'/>
		<div class='text-right'>
			<collect-article :article='article'/>
		</div>
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
