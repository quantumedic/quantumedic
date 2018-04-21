<template>
	<div>
		<article-content :article='article'/>
		<hr>
		<edit-content :article='article'/>
	</div>
</template>

<script>
	import ArticleContent from '@/components/Article/form/content'
	import EditContent from '@/components/Article/operation/edit'

	export default {
		props: ['article'],
		components: {
			ArticleContent,
			EditContent
		}
	}
</script>