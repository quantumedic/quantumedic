<template>
	<h2 class='text-right text-info'>
		<button class='btn-clean' @click.prevent='create' :disabled='submitting'>
			<i class='fa fa-arrow-circle-right pointer'/>
		</button>
	</h2>
</template>

<script>
	import {mapState, mapActions} from 'vuex'

	export default {
		props: ['info'],
		computed: {
			...mapState({
				submitting: state => state.TagModule.submitting
			})
		},
		methods: {
			...mapActions({
				createTag: 'createTag'
			}),
			create: function () {
				const that = this
				this.info.parent = this.$route.params.id === 'root' ? '' : this.$route.params.id
				this.info.ifRoot = this.$route.params.id === 'root'
				this.createTag({
					info: this.info,
					success: function (tag) {
						that.$router.push({name: 'tag', params: {id: tag.id}})
					}
				})
			}
		}
	}
</script>
