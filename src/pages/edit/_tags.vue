<template>
	<div class='panel'>
		<div class='panel-body'>
			<div v-for='group in tags'>
				<tag-list :tags='group' :selected='selected'/>
			</div>
		</div>
	</div>
</template>

<script>
	import TagList from '@/components/Tag/form/list'

	export default {
		props: ['selected', 'tags'],
		components: {
			TagList
		}
	}
</script>
