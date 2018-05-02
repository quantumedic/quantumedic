<template>
	<button class='btn btn-danger' @click.prevent='remove' :disabled='removing'>
		{{removing ? '删除中...' : '删除文档'}}
	</button>
</template>

<script>
	import {mapState, mapActions} from 'vuex'

	export default {
		computed: {
			...mapState({
				removing: state => state.ArticleModule.removing
			})
		},
		methods: {
			...mapActions({
				removeArticle: 'removeArticle'
			}),
			remove: function () {
				const that = this
				let ifConfirmed = window.confirm('你确定要删除该文档？')
				if (ifConfirmed) {
					this.removeArticle({
						id: this.$route.params.id,
						success: function () {
							that.$router.push({name: 'contribution'})
						}
					})
				}
			}
		}
	}
</script>