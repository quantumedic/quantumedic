<template>
	<div>
		<div v-if='!requesting && !article_unexistance'>
			<router-link :to='{name: "doc", params: {id: $route.params.id}}' target='_blank'>
				查看文档
			</router-link>
			<br>
			<article-intro :article='article'/>
			<hr>
			<article-content :article='article'/>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import {clone} from '@/model'
	import {ARTICLE_MODEL} from '@/model/article.model'
	import ArticleIntro from './_intro'
	import ArticleContent from './_content'

	export default {
		components: {
			ArticleIntro,
			ArticleContent
		},
		data () {
			return {
				article: clone(ARTICLE_MODEL)
			}
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
			sync: function () {
				for (let prop in this.article) {
					this.article[prop] = this.article_detail[prop]
				}
			},
			fetch: function () {
				const that = this
				this.getArticleDetail({
					id: this.$route.params.id,
					success: function () {
						that.sync()
					}
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
