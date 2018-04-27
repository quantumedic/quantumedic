<template>
	<div>
		<div class='row'>
			<div class='col-lg-8'>
				<div class='panel'>
					<div class='panel-body'>
						<article-intro :article='article_detail'/>
						<hr>
						<article-main :article='article_detail'/>
						<hr>
						<article-footer :article='article_detail'/>
					</div>
				</div>
			</div>
			<div class='col-lg-4'>
				<div class='panel'>
					<div class='panel-body'>
						<article-tags :article='article_detail'/>
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
	import ArticleFooter from './_foot'

	export default {
		components: {
			ArticleTags,
			ArticleIntro,
			ArticleMain,
			ArticleFooter
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
					draft: this.$route.query.draft
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
