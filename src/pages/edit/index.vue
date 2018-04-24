<template>
	<div>
		<div class='row' v-if='!requesting && !article_unexistance'>
			<div class='col-lg-8'>
				<article-intro :article='article'/>
				<hr>
				<article-content :article='article'/>
			</div>
			<div class='col-lg-4'>
				<article-tags :selected='selected' :tags='tag_list'/>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import {clone} from '@/model'
	import {ARTICLE_MODEL} from '@/model/article.model'
	import ArticleIntro from './_intro'
	import ArticleContent from './_content'
	import ArticleTags from './_tags'

	export default {
		components: {
			ArticleIntro,
			ArticleContent,
			ArticleTags
		},
		data () {
			return {
				selected: [],
				article: clone(ARTICLE_MODEL)
			}
		},
		computed: {
			...mapState({
				requesting: state => state.ArticleModule.requesting,
				article_unexistance: state => state.ArticleModule.article_unexistance,
				article_detail: state => state.ArticleModule.article_detail,
				tag_list: state => state.ArticleModule.tag_list
			})
		},
		methods: {
			...mapActions({
				getArticleDetail: 'getArticleDetail'
			}),
			sync: function () {
				for (let prop in this.article) {
					prop === 'content'
						? this.article[prop] = this.article_detail.draft
						: this.article[prop] = this.article_detail[prop]
				}
				this.selected = this.article_detail.tags.map(tag => {
					return tag.id
				})
			},
			fetch: function () {
				const that = this
				this.getArticleDetail({
					id: this.$route.params.id,
					preview: 1,
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
