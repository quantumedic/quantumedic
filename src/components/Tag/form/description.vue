<template>
	<form>
		<div class='form-group'>
			<textarea class='form-control textarea-control' v-model='info.description' placeholder="标签描述" rows='6'/>
		</div>
	</form>
</template>

<script>
	export default {
		props: ['info']
	}
</script>
