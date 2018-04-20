<template>
	<div class="container-fluid navbar-fixed-top handbook-header">
		<div class='row'>
			<div class='col-xs-6'>
				<router-link :to='{name: "home"}'>Handbook</router-link>
			</div>
			<div class='col-xs-6 text-right small'>
				<router-link v-if='ifLogged' :to='{name: "account", params: {tab: "profile"}}'>
					<i class='fa fa-user-circle-o'/>
					{{user_info.username}}&nbsp;&nbsp;
				</router-link>
				<a @click='logout' v-if='ifLogged'>退出</a>
				<router-link :to='{name: "account", params: {tab: "login"}}' v-else>
					登录/注册
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'

	export default {
		computed: {
			...mapState({
				ifLogged: state => state.AuthModule.ifLogged,
				user_info: state => state.AccountModule.user_info
			})
		},
		methods: {
			...mapActions({
				getAccount: 'getAccount',
				signout: 'signout'
			}),
			logout: function () {
				const that = this
				this.signout(() => {
					that.$router.push({name: 'home'})
				})
			},
			init: function () {
				if (this.ifLogged) {
					this.getAccount()
				}
			}
		},
		mounted() {
			this.init()
		},
		watch: {
			'ifLogged': 'init'
		}
	}
</script>

<style lang='less' scoped>
	.handbook-header {
		padding-top: 10px;
		padding-bottom: 10px;
	}
</style>