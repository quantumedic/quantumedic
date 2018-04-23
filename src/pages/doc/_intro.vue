<template>
	<div>
		<article-intro :article='article'/>
	</div>
</template>

<script>
	import ArticleIntro from '@/components/Article/info/intro'

	export default {
		props: ['article'],
		components: {
			ArticleIntro
		}
	}
</script>
