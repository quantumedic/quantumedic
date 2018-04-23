<template>
	<h2 class='text-right text-primary'>
		<button class='btn-clean' @click.prevent='update' :disabled='updating'>
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
				updating: state => state.AccountModule.updating
			})
		},
		methods: {
			...mapActions({
				updateAccount: 'updateAccount'
			}),
			update: function () {
				const that = this
				this.updateAccount({
					info: this.info,
					success: function () {
						that.$router.push({name: 'home'})
					}
				})
			}
		}
	}
</script>