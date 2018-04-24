<template>
	<div class='doc-text'>
		<div v-html='$route.query.preview ? article.draft : article.content'/>
	</div>
</template>

<script>
	export default {
		props: ['article']
	}
</script>

<style lang='less'>
	.doc-text {
		table {
			width: 100%;
			max-width: 100%;
			margin-bottom: 20px;
			border: 1px solid #ddd;
			&>tbody>tr>th, &>tbody>tr>td {
				border: 1px solid #ddd;
				padding: 8px;
				line-height: 1.42857143;
				vertical-align: top;
			}
		}
	}
</style>
