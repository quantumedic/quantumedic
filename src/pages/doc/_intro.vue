<template>
	<div>
		<article-intro :article='article'/>
		<article-authors :article='article'/>
	</div>
</template>

<script>
	import ArticleIntro from '@/components/Article/info/intro'
	import ArticleAuthors from '@/components/Article/info/editors'

	export default {
		props: ['article'],
		components: {
			ArticleIntro,
			ArticleAuthors
		}
	}
</script>
