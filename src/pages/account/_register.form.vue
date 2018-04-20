<template>
	<div>
		<h2 class='text-center'>
			注册
		</h2>
		<hr>
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
	import {clone} from '@/model'
	import {USER_SIGNUP_FORM} from '@/model/auth.model'
	import RegisterForm from '@/components/Account/form/auth'
	import UserName from '@/components/Account/form/username'
	import RegisterButton from '@/components/Account/operation/signup'

	export default {
		data () {
			return {
				info: clone(USER_SIGNUP_FORM)
			}
		},
		components: {
			RegisterForm,
			UserName,
			RegisterButton
		}
	}
</script>