<template>
	<div>
		<tag-list :tags='tags'/>
		<hr v-if='tags.length > 0 && docs.length > 0'>
		<doc-list :docs='docs'/>
	</div>
	
</template>

<script>
	import DocList from '@/components/Article/info/list'
	import TagList from '@/components/Tag/info/item'

	export default {
		props: ['docs', 'tags'],
		components: {
			TagList,
			DocList
		}
	}
</script>