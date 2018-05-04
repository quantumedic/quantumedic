<template>
	<div>
		<div v-for='doc in docs' class='panel doc-item'>
			<div class='panel-body'>
				<p class='text-muted small'>
					所属分类：
					<router-link :to='{name: "tag", params: {id: tag.id}}' v-for='tag in doc.tags' target='_blank' :key='tag.id'>
						{{tag.name}}
					</router-link>
				</p>
				<router-link :to='{name: "doc", params: {id: doc.id}}' target='_blank'>
					<h4 class='text-title'>
						{{doc.title ? doc.title : '未命名草稿'}}
					</h4>
				</router-link>
				<p class='text-muted'>
					{{doc.abstract}}
				</p>
				<p class='text-right text-muted small'>
					<router-link :to='{name: "doc", params: {id: doc.id}, query: {draft: 1}}' class='small'>
						预览
					</router-link>
					<router-link :to='{name: "edit", params: {id: doc.id}}' class='small' target='_blank'>
						编辑
					</router-link>
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
