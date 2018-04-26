<template>
	<form>
		<div class='form-group'>
			<input type="text" name="" class='form-control' v-model='info.realname' placeholder="真实姓名" :disabled='user_info.type === "editor"'>
		</div>
		<div class='form-group'>
			<input type="tel" name="" class='form-control' v-model='info.phone' placeholder="手机号" :disabled='user_info.type === "editor"'>
		</div>
		<div class='form-group'>
			<input type="text" name="" class='form-control' v-model='info.credential_number' placeholder="执业医师执照编号" :disabled='user_info.type === "editor"'>
		</div>
	</form>
</template>

<script>
	import {mapState} from 'vuex'

	export default {
		props: ['info'],
		computed: {
			...mapState({
				user_info: state => state.AccountModule.user_info
			})
		}
	}
</script>
