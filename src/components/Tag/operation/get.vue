<template>
	<button class='btn btn-default btn-sm' @click.prevent='getAll'>编辑</button>
</template>

<script>
	import {mapState, mapActions} from 'vuex'

	export default {
		computed: {
			...mapState({
				tag_list: state => state.ArticleModule.tag_list
			})
		},
		methods: {
			...mapActions({
				getArticleTags: 'getArticleTags'
			}),
			getAll: function () {
				const that = this
				this.tag_list.forEach((group, index) => {
					that.getArticleTags({
						level: index + 1
					})
				})
			}
		}
	}
</script>