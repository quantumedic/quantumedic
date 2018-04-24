<template>
	<div class='panel'>
		<div class='panel-body'>
			<tag-description :tag='tag'/>
			<hr>
			<h4>
				<edit-tag/>
				<add-doc/>
			</h4>
		</div>
	</div>
</template>

<script>
	import TagDescription from '@/components/Tag/info/description'
	import EditTag from '@/components/Tag/operation/edit'
	import AddDoc from '@/components/Article/operation/create'

	export default {
		props: ['tag'],
		components: {
			EditTag,
			TagDescription,
			AddDoc
		}
	}
</script>
