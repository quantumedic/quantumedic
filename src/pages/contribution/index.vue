<template>
	<div>
		<contribution-list :docs='list'/>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import ContributionList from './_docs'

	export default {
		components: {
			ContributionList
		},
		computed: {
			...mapState({
				list: state => state.SearchModule.contribution_list
			})
		},
		methods: {
			...mapActions({
				searchMyContributions: 'searchMyContributions'
			}),
			search: function () {
				this.searchMyContributions()
			}
		},
		created () {
			this.search()
		}
	}
</script>