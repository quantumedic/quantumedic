<template>
	<div>
		<tag-list :tags='list'/>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import TagList from '@/components/Tag/info/list'

	export default {
		components: {
			TagList
		},
		computed: {
			...mapState({
				list: state => state.SearchModule.tag_list
			})
		},
		methods: {
			...mapActions({
				getAllTags: 'getAllTags'
			}),
			search: function () {
				this.getAllTags()
			}
		},
		created () {
			this.search()
		}
	}
</script>