<template>
	<div>
		<article-title :article='article'/>
		<article-abstract :article='article'/>	
	</div>
</template>

<script>
	import ArticleTitle from '@/components/Article/form/title'
	import ArticleAbstract from '@/components/Article/form/abstract'

	export default {
		props: ['article'],
		components: {
			ArticleTitle,
			ArticleAbstract
		}
	}
</script>