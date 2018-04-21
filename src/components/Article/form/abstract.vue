<template>
	<form>
		<div class='form-group'>
			<textarea id='edit-abstract' class='form-control textarea-control' rows="3" placeholder="简介" v-model='article.abstract'/>
		</div>
	</form>
</template>

<script>
	export default {
		props: ['article']
	}
</script>
