<template>
	<div>
		<h2>
			注册
		</h2>
		<register-form :info='info'/>
		<user-name :info='info'/>

		<p class='small'>
			已注册？点击
			<router-link :to='{name: "account", params: {tab: "login"}}'>
				登录
			</router-link>
		</p>
		<register-button :info='info'/>
	</div>
</template>

<script>
	import RegisterForm from '@/components/Account/form/auth'
	import UserName from '@/components/Account/form/username'
	import RegisterButton from '@/components/Account/operation/signup'

	export default {
		data () {
			return {
				info: { email: '', password: '', username: '' }
			}
		},
		components: {
			RegisterForm,
			UserName,
			RegisterButton
		}
	}
</script>