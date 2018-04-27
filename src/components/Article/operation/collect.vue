<template>
	<button class='btn btn-info' @click='collect' :disabled='collecting'>
		{{article.collected ? '已收藏' : '收藏'}}
	</button>
</template>

<script>
	import {mapState, mapActions} from 'vuex'

	export default {
		props: ['article'],
		computed: {
			...mapState({
				collecting: state => state.ArticleModule.collecting
			})
		},
		methods: {
			...mapActions({
				collectArticle: 'collectArticle'
			}),
			collect: function () {
				this.collectArticle({
					id: this.$route.params.id,
					collected: this.article.collected
				})
			}
		}
	}
</script>