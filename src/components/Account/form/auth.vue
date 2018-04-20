<template>
	<form>
		<div class='form-group'>
			<input type="text" name="" class='form-control' v-model='info.email' placeholder="邮箱">
		</div>
		<div class='form-group'>
			<input type="password" name="" class='form-control' v-model='info.password' placeholder="密码">
		</div>
	</form>
</template>

<script>
	export default {
		props: ['info']
	}
</script>
