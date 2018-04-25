<template>
	<button class='btn btn-info btn-sm' @click.prevent='add' style="float: right">
		<i class='fa fa-book'/>
		创建文档
	</button>
</template>

<script>
	import {mapActions} from 'vuex'

	export default {
		methods: {
			...mapActions({
				createNewArticle: 'createNewArticle'
			}),
			add: function () {
				const that = this
				this.createNewArticle({
					tag: this.$route.params.id,
					success: doc => {
						that.$router.push({name: 'edit', params: {id: doc.id}})
					}
				})
			}
		}
	}
</script>