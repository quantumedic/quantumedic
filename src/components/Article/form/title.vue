<template>
	<form>
		<div class='form-group'>
			<input type="text" name="" class='form-control' placeholder="标题" v-model='article.title'>
		</div>
	</form>
</template>

<script>
	export default {
		props: ['article']
	}
</script>
