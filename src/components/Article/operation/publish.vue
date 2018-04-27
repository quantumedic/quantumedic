<template>
	<button class='btn btn-link' @click.prevent='edit' :disabled='editing'>
		{{editing ? '发布中...' : '发布文档'}}
	</button>
</template>

<script>
	import {mapState, mapActions} from 'vuex'

	export default {
		props: ['article', 'selects'],
		computed: {
			...mapState({
				editing: state => state.ArticleModule.editing
			})
		},
		methods: {
			...mapActions({
				editArticleInfo: 'editArticleInfo'
			}),
			edit: function () {
				const that = this
				this.editArticleInfo({
					info: {
						...this.article,
						publish: true
					},
					success: function () {
						that.$router.push({name: 'doc', params: {id: that.$route.params.id}})
					}
				})
			}
		},
		watch: {
			'selects': {
				deep: true,
				handler: function () {
					this.article.tags = this.selects.selected.join(',')
				}
			}
		}
	}
</script>
