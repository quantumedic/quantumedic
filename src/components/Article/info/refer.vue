<template>
	<div class='text-right small'>
		<p v-if='article.reference'>
			<em v-for='refer in article.reference.split(";")'>
				{{refer}}<br>
			</em>
		</p>
	</div>
</template>

<script>
	export default {
		props: ['article']
	}
</script>
