<template>
	<div>
		<p class='small text-muted'>分类标签</p>
		<h2>{{tag.name}}</h2>
		<p>{{tag.description}}</p>
	</div>
</template>

<script>
	export default {
		props: ['tag']
	}
</script>
