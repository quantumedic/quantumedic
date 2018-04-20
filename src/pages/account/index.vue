<template>
	<div class='login-panel'>
		<transition name="slideright" mode='out-in'>
			<login-panel v-if='$route.params.tab === "login"'/>
			<register-panel v-if='$route.params.tab === "register"'/>
		</transition>
	</div>
</template>

<script>
	import LoginPanel from './_login.form'
	import RegisterPanel from './_register.form'

	export default {
		components: {
			LoginPanel,
			RegisterPanel
		}
	}
</script>

<style lang='less' scoped>
	.login-panel {
		width: 300px;
		margin: 0 auto;
	}
</style>

