<template>
	<div>
		<article-refer :article='article'/>
		<article-authors :article='article'/>
	</div>
</template>

<script>
	import ArticleRefer from '@/components/Article/info/refer'
	import ArticleAuthors from '@/components/Article/info/editors'

	export default {
		props: ['article'],
		components: {
			ArticleRefer,
			ArticleAuthors
		}
	}
</script>
