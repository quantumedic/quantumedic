<template>
	<form>
		<div class='form-group'>
			<input type="text" name="" class='form-control' v-model='info.name' placeholder='标签名称'>
		</div>
	</form>
</template>

<script>
	export default {
		props: ['info']
	}
</script>
