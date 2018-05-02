<template>
	<div>
		<div v-for='doc in docs' class='panel doc-item'>
			<div class='panel-body'>
				<p class='text-muted small'>
					来自分类：
					<router-link :to='{name: "tag", params: {id: tag.id}}' v-for='tag in doc.tags' target='_blank' :key='tag.id'>
						{{tag.name}}
					</router-link>
				</p>
				<router-link :to='{name: "doc", params: {id: doc.id}}' target='_blank'>
					<h4 class='text-title'>{{doc.title}}</h4>
				</router-link>
				<p class='text-muted'>
					{{doc.abstract}}
				</p>
				<p class='text-right text-muted small'>
					{{doc.update_time}}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['docs']
	}
</script>

<style lang='less' scoped>
	.doc-item {
		margin-bottom: 1px;
	}
</style>
