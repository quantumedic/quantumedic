<template>
	<div class='panel'>
		<div class='panel-body'>
			<h3>{{article_detail.title}}</h3>
			<p>
				{{article_detail.abstract}}
			</p>
			<hr>
			<div v-html='article_detail.content'></div>
			<hr>
			<div class='text-right small'>
				<p v-for='refer in article_detail.reference'>
					<em>{{refer}}</em>
				</p>
				<p>
					{{article_detail.update_time}}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'

	export default {
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
					id: this.$route.params.id
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
