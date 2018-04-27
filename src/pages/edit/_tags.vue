<template>
	<div class='panel'>
		<div class='panel-body'>
			<p>管理标签</p>
			<hr>
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
