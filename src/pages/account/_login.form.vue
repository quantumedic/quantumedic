<template>
	<div>
		<h2>
			登录
		</h2>
		<login-form :info='info'/>
		<p class='small'>
			没有账号？点击
			<router-link :to='{name: "account", params: {tab: "register"}}'>
				注册
			</router-link>
		</p>
		<login-button :info='info'/>
	</div>
</template>

<script>
	import LoginForm from '@/components/Account/form/auth'
	import LoginButton from '@/components/Account/operation/signin'

	export default {
		data () {
			return {
				info: { email: '', password: '' }
			}
		},
		components: {
			LoginForm,
			LoginButton
		}
	}
</script>