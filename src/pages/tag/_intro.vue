<template>
	<div class='panel'>
		<div class='panel-body'>
			<tag-description :tag='tag'/>
			<hr>
			<h4>
				<edit-tag v-if='user_info.type == "editor" || user_info.type == "admin"'/>
				<add-tag v-if='user_info.type == "editor" || user_info.type == "admin"'/>
				<favor-tag :tag='tag'/>
				<add-doc v-if='user_info.type == "editor" || user_info.type == "admin"'/>
			</h4>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import TagDescription from '@/components/Tag/info/description'
	import EditTag from '@/components/Tag/operation/edit'
	import AddTag from '@/components/Tag/operation/add'
	import FavorTag from '@/components/Tag/operation/favor'
	import AddDoc from '@/components/Article/operation/create'

	export default {
		props: ['tag'],
		computed: {
			...mapState({
				user_info: state => state.AccountModule.user_info
			})
		},
		components: {
			TagDescription,
			EditTag,
			AddTag,
			FavorTag,
			AddDoc
		}
	}
</script>
