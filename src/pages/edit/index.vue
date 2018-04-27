<template>
	<div>
		<div class='row' v-if='!requesting && !article_unexistance'>
			<div class='col-lg-8'>
				<article-intro :article='article'/>
				<hr>
				<article-content :article='article' :selects='select_tag'/>
			</div>
			<div class='col-lg-4'>
				<article-tags :selects='select_tag' :tags='tag_list'/>
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
				select_tag: { selected: [] },
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
				getArticleDetail: 'getArticleDetail',
				getArticleTags: 'getArticleTags'
			}),
			sync: function () {
				for (let prop in this.article) {
					prop === 'content'
						? this.article[prop] = this.article_detail.draft
						: this.article[prop] = this.article_detail[prop]
				}
				this.select_tag.selected = this.article_detail.tags.map(tag => {
					return tag.id
				})
				this.article.tags = this.select_tag.selected.join(',')
				this.getTags()
			},
			getTags: function () {
				const that = this
				this.getArticleTags({
					level: this.article_detail.tags[0].level
				})
			},
			fetch: function () {
				const that = this
				this.getArticleDetail({
					id: this.$route.params.id,
					draft: 1,
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
