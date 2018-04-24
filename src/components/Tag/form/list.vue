<template>
	<form>
		<div class='form-group'>
			<label v-for='tag in tags' class='small'>
				<input type="checkbox" name="doc-tag" v-model='selected' :value='tag.id'>

				{{tag.name}}
				&nbsp;&nbsp;&nbsp;&nbsp;
			</label>
		</div>
	</form>
</template>

<script>
	export default {
		props: ['selected', 'tags']
	}
</script>