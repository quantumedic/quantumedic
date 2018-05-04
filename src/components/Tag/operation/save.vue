<template>
	<h2 class='text-right text-info'>
		<button class='btn-clean' @click.prevent='save' :disabled='submitting'>
			<i class='fa fa-arrow-circle-right pointer'/>
		</button>
	</h2>
</template>

<script>
	import {mapState, mapActions} from 'vuex'

	export default {
		props: ['info', 'selects'],
		computed: {
			...mapState({
				submitting: state => state.TagModule.submitting
			})
		},
		methods: {
			...mapActions({
				modifyTag: 'modifyTag'
			}),
			save: function () {
				const that = this
				this.info.parents = this.selects.selected.join(',')
				this.modifyTag({
					info: this.info,
					success: function () {
						that.$router.push({name: 'tag', params: {id: that.$route.params.id}})
					}
				})
			}
		}
	}
</script>
