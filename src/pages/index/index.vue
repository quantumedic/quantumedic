<template>
	<div class='row'>
		<div class='col-md-8 col-md-offset-2'>
			<br><br>
			<h4 class='text-center'>
				<img src="../../assets/logo.png" height="96">
			</h4>
			<search-bar :info='info'/>
		</div>
	</div>
</template>

<script>
	import SearchBar from './_search'

	export default {
		components: {
			SearchBar
		},
		data () {
			return {
				info: {keyword: ''}
			}
		}
	}
</script>
