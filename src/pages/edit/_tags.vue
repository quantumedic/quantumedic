<template>
	<div class='panel'>
		<div class='panel-body'>
			<div v-for='(group, index) in tags' v-if='group && group.length > 0'>
				<p class='text-muted'>LEVEL {{index + 1}}</p>
				<tag-list :tags='group' :selects='selects'/>
			</div>
			<!-- <get-tags/> -->
		</div>
	</div>
</template>

<script>
	import TagList from '@/components/Tag/form/list'

	export default {
		props: ['selects', 'tags'],
		components: {
			TagList
		}
	}
</script>
