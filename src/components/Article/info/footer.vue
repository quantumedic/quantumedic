<template>
	<div class='text-right small'>
		<p v-if='article.reference'>
			<em v-for='refer in article.reference.split(";")'>
				{{refer}}<br>
			</em>
		</p>
		<p class='text-muted'>
			<i class='fa fa-clock-o'></i>&nbsp;
			{{$route.query.preview ? article.draft_time : article.update_time}}
		</p>
	</div>
</template>

<script>
	export default {
		props: ['article']
	}
</script>
