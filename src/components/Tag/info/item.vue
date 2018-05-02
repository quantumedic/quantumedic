<template>
	<div>
		<div class='panel tag-item' v-for='tag in tags'>
			<div class='panel-body'>
				<p class='text-muted small'>分类</p>
				<h4>
					<router-link
					:key='tag.id'
					:to='{name: "tag", params: {id: tag.id}}'
					target="_blank">
						{{tag.name}}
					</router-link>
				</h4>
				<p class='text-muted'>
					{{tag.description}}
				</p>	
			</div>
		</div>
	</div>
		
</template>

<script>
	export default {
		props: ['tags']
	}
</script>


<style lang='less' scoped>
	.tag-item {
		margin-bottom: 1px;
	}
</style>
