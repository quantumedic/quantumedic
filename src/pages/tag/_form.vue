<template>
	<div>
		<tag-name :info='info'/>
		<tag-description :info='info'/>
	</div>
</template>

<script>
	import TagName from '@/components/Tag/form/name'
	import TagDescription from '@/components/Tag/form/description'

	export default {
		props: ['info'],
		components: {
			TagName,
			TagDescription
		}
	}
</script>