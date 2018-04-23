<template>
	<form>
		<div class='form-group'>
			<input type="text" name="" class='form-control' placeholder="参考来源 多个来源请用;分隔" v-model='article.reference'>
		</div>
		</div>
	</form>
</template>

<script>
	export default {
		props: ['article']
	}
</script>
