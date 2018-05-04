<template>
	<draft-docs :docs='docs'/>
</template>

<script>
	import DraftDocs from '@/components/Article/info/drafts'

	export default {
		props: ['docs'],
		components: {
			DraftDocs
		}
	}
</script>
