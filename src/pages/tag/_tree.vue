<template>
	<div>
		<div class='panel'>
			<div class='panel-body'>
				<div v-if='tag.parents.length > 0'>
					<h4 class='text-muted'>父分类</h4>
					<tag-list :tags='tag.parents'/>
				</div>

				<br v-if='tag.parents.length > 0 && tag.children.length > 0'>
				
				<div v-if='tag.children.length > 0'>
					<h4 class='text-muted'>子分类</h4>
					<tag-list :tags='tag.children'/>
				</div>
			</div>
		</div>
		<p class='text-center text-muted small'>{{tag.update_time}}</p>
	</div>
	
</template>

<script>
	import TagList from '@/components/Tag/info/list'

	export default {
		props: ['tag'],
		components: {
			TagList
		}
	}
</script>