<template>
	<div>
		<article-content :article='article'/>
		<article-reference :article='article'/>
		<hr>
		<edit-content :article='article'/>
	</div>
</template>

<script>
	import ArticleContent from '@/components/Article/form/content'
	import ArticleReference from '@/components/Article/form/reference'
	import EditContent from '@/components/Article/operation/edit'

	export default {
		props: ['article'],
		components: {
			ArticleContent,
			ArticleReference,
			EditContent
		}
	}
</script>