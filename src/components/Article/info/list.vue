<template>
	<div>
		<div v-for='doc in docs'>
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
</template>

<script>
	export default {
		props: ['docs']
	}
</script>
