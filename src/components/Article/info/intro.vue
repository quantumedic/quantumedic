<template>
	<div class='doc-intro bg-silver'>
		<h2>
			{{article.title}}

			<router-link :to='{name: "edit", params: $route.params}' class='small' v-if='user_info.type == "editor"'>
				<i class='fa fa-pencil'/>
			</router-link>
		</h2>
		<p>
			<em>{{article.abstract}}</em>
		</p>
	</div>
</template>

<script>
	import {mapState} from 'vuex'

	export default {
		props: ['article'],
		computed: {
			...mapState({
				user_info: state => state.AccountModule.user_info
			})
		}
	}
</script>

<style lang='less' scoped>
	.doc-intro {
		padding: 20px;
		margin-bottom: 15px;
	}
</style>