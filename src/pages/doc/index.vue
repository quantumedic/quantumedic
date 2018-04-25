<template>
	<div>
		<article-tags :article='article_detail'/>
		<div class='panel'>
			<div class='panel-body'>
				<br>
				<div class='row'>
					<div class='col-lg-3'>
						<article-intro :article='article_detail'/>
					</div>
					<div class='col-lg-8 col-lg-offset-1'>
						<article-main :article='article_detail'/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import ArticleTags from './_tag'
	import ArticleIntro from './_intro'
	import ArticleMain from './_main'

	export default {
		components: {
			ArticleTags,
			ArticleIntro,
			ArticleMain
		},
		computed: {
			...mapState({
				requesting: state => state.ArticleModule.requesting,
				article_unexistance: state => state.ArticleModule.article_unexistance,
				article_detail: state => state.ArticleModule.article_detail
			})
		},
		methods: {
			...mapActions({
				getArticleDetail: 'getArticleDetail'
			}),
			fetch: function () {
				const that = this
				this.getArticleDetail({
					id: this.$route.params.id,
					preview: this.$route.query.preview
				})
			}
		},
		created () {
			this.fetch()
		},
		watch: {
			'$route': 'fetch'
		}
	}
</script>
