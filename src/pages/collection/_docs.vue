<template>
	<collect-docs :docs='docs'/>
</template>

<script>
	import CollectDocs from '@/components/Article/info/list'

	export default {
		props: ['docs'],
		components: {
			CollectDocs
		}
	}
</script>
