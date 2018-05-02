<template>
	<tag-docs :docs='docs'/>
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
