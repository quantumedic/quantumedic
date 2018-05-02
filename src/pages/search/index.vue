<template>
	<div class='row'>
		<div class='col-lg-9'>
			<search-bar :info='info'/>
			<search-result :docs='docs' :tags='tags'/>
		</div>
		<div class='col-lg-3'>
			<navigation-menu/>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import SearchResult from './_result'
	import SearchBar from '@/components/Search/form/keyword'
	import NavigationMenu from '@/components/Navigation/menu'

	export default {
		components: {
			SearchBar,
			SearchResult,
			NavigationMenu
		},
		data () {
			return {
				info: {keyword: ''}
			}
		},
		computed: {
			...mapState({
				docs: state => state.SearchModule.search_result.docs,
				tags: state => state.SearchModule.search_result.tags
			})
		},
		methods: {
			...mapActions({
				searchDocsByCondition: 'searchDocsByCondition'
			}),
			search: function () {
				this.info.keyword = this.$route.query.keyword
				this.searchDocsByCondition({
					keyword: this.info.keyword
				})
			}
		},
		created () {
			this.search()
		},
		watch: {
			'$route.query': {
				deep: true,
				handler: function () {
					this.search()
				}
			}
		}
	}
</script>