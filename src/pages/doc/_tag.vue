<template>
	<div>
		<br>
		<article-tags :tags='article.tags'/>
	</div>
</template>

<script>
	import ArticleTags from '@/components/Tag/info/list'

	export default {
		props: ['article'],
		components: {
			ArticleTags
		}
	}
</script>