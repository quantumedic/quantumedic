<template>
	<div class='text-muted small'>
		<p>
			创建者：
			<a>{{article.author.username}}</a>
			<br>
			参与编辑：
			<a v-for='editor in article.editors'>
				{{editor.username}}&nbsp;
			</a>
		</p>
	</div>
</template>

<script>
	export default {
		props: ['article']
	}
</script>