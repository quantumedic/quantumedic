<template>
	<div>
		<doc-list :docs='list'/>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import DocList from './_docs'

	export default {
		components: {
			DocList
		},
		computed: {
			...mapState({
				list: state => state.SearchModule.collection_list
			})
		},
		methods: {
			...mapActions({
				searchMyCollections: 'searchMyCollections'
			}),
			search: function () {
				this.searchMyCollections()
			}
		},
		created () {
			this.search()
		}
	}
</script>