<template>
	<div class='panel'>
		<div class='panel-body'>
			<tag-description :tag='tag'/>
			<hr>
			<h4>
				<edit-tag/>
				<add-tag/>
				<add-doc/>
			</h4>
		</div>
	</div>
</template>

<script>
	import TagDescription from '@/components/Tag/info/description'
	import EditTag from '@/components/Tag/operation/edit'
	import AddTag from '@/components/Tag/operation/add'
	import AddDoc from '@/components/Article/operation/create'

	export default {
		props: ['tag'],
		components: {
			TagDescription,
			EditTag,
			AddTag,
			AddDoc
		}
	}
</script>
