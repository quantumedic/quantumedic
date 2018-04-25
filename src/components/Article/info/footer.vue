<template>
	<div class='text-right small'>
		<p v-if='article.reference'>
			<em v-for='refer in article.reference.split(";")'>
				{{refer}}<br>
			</em>
		</p>
		<p class='text-muted'>
			最后编辑：
			<a v-if='article.last_update_author'>{{article.last_update_author.username}}</a>
			&nbsp;
			{{$route.query.preview ? article.draft_time : article.update_time}}
		</p>
	</div>
</template>

<script>
	export default {
		props: ['article']
	}
</script>
