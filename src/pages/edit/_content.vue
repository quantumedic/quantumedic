<template>
	<div>
		<article-content :article='article'/>
		<article-reference :article='article'/>
		<hr>
		<h2 class='text-right text-info'>
			<edit-content :article='article' :selects='selects'/>
			<remove-article/>
			<publish-content :article='article' :selects='selects'/>
		</h2>
		<br>
	</div>
</template>

<script>
	import ArticleContent from '@/components/Article/form/content'
	import ArticleReference from '@/components/Article/form/reference'
	import EditContent from '@/components/Article/operation/edit'
	import PublishContent from '@/components/Article/operation/publish'
	import RemoveArticle from '@/components/Article/operation/remove'

	export default {
		props: ['article', 'selects'],
		components: {
			ArticleContent,
			ArticleReference,
			EditContent,
			PublishContent,
			RemoveArticle
		}
	}
</script>