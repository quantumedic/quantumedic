<template>
	<button class='btn btn-info' @click.prevent='edit' :disabled='editing'>
		{{editing ? '保存中...' : '保存草稿'}}
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
					info: this.article,
					success: function () {
						that.$emit('update')
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
