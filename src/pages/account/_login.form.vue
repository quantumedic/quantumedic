<template>
	<div>
		<h2 class='text-center'>
			登录
		</h2>
		<hr>
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
	import {clone} from '@/model'
	import {USER_SIGNIN_FORM} from '@/model/auth.model'
	import LoginForm from '@/components/Account/form/auth'
	import LoginButton from '@/components/Account/operation/signin'

	export default {
		data () {
			return {
				info: clone(USER_SIGNIN_FORM)
			}
		},
		components: {
			LoginForm,
			LoginButton
		}
	}
</script>