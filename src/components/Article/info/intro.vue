<template>
	<div class='doc-intro'>
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