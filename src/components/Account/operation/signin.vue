<template>
	<h2 class='text-right text-info'>
		<button class='btn-clean' @click.prevent='login' :disabled='submitting'>
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
				submitting: state => state.AuthModule.submitting
			})
		},
		methods: {
			...mapActions({
				signin: 'signin'
			}),
			login: function () {
				const that = this
				this.signin({
					info: this.info,
					success: function () {
						that.$router.push({name: 'home'})
					}
				})
			}
		}
	}
</script>
