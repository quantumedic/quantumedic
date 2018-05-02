<template>
	<div class='text-muted text-right small'>
		<p>
			创建者：
			<a>{{article.author.username}}</a>
			&nbsp;|&nbsp;
			参与编辑：
			<a v-for='editor in article.editors'>
				{{editor.username}}
			</a>
			<br>
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