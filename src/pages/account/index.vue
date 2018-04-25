<template>
	<div class='login-panel'>
		<transition name="slideright" mode='out-in'>
			<login-panel v-if='$route.params.tab === "login"'/>
			<register-panel v-if='$route.params.tab === "register"'/>
			<profile-panel v-if='$route.params.tab === "profile"'/>
		</transition>
	</div>
</template>

<script>
	import LoginPanel from './_login.form'
	import RegisterPanel from './_register.form'
	import ProfilePanel from './_profile.form'

	export default {
		components: {
			LoginPanel,
			RegisterPanel,
			ProfilePanel
		}
	}
</script>
