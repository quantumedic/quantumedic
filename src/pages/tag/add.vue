<template>
	<div class='login-panel'>
		<h2 class='text-center'>
			添加子标签
		</h2>
		<hr>
		<tag-form :info='info'/>
		<create-tag :info='info'/>
	</div>
</template>

<script>
	import {clone} from '@/model'
	import {TAG_CREATE_MODEL} from '@/model/tag.model'
	import TagForm from './_form'
	import CreateTag from '@/components/Tag/operation/create'

	export default {
		components: {
			TagForm,
			CreateTag
		},
		data () {
			return {
				info: clone(TAG_CREATE_MODEL)
			}
		}
	}
</script>
