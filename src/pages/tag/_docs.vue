<template>
	<div class='panel'>
		<div class='panel-body'>
			<tag-docs :docs='docs'/>
		</div>
	</div>
</template>

<script>
	import TagDocs from '@/components/Article/info/list'

	export default {
		props: ['docs'],
		components: {
			TagDocs
		}
	}
</script>
