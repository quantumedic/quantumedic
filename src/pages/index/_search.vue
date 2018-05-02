<template>
	<div>
		<search-form :info='info'/>
	</div>
</template>

<script>
	import SearchForm from '@/components/Search/form/keyword'

	export default {
		props: ['info'],
		components: {
			SearchForm
		}
	}
</script>