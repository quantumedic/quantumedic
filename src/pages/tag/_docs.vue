<template>
	<div class='panel'>
		<div class='panel-body'>
			<tag-docs :docs='tag.docs'/>
		</div>
	</div>
</template>

<script>
	import TagDocs from '@/components/Article/info/list'

	export default {
		props: ['tag'],
		components: {
			TagDocs
		}
	}
</script>
