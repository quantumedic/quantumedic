<template>
	<div class='panel'>
		<div class='panel-body'>
			<p>可选父标签：</p>
			<tag-list :tags='tags' :selects='selects'/>
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
