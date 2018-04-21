<template>
	<h2 class='text-right text-info'>
		<button class='btn btn-info' @click.prevent='edit' :disabled='editing'>
			{{editing ? '保存中...' : '保存'}}
		</button>
	</h2>
</template>

<script>
	import {mapState, mapActions} from 'vuex'

	export default {
		props: ['article'],
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
		}
	}
</script>
