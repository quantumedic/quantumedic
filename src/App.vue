<template>
	<div id="app">
		<header-bar/>
		<div class='container'>
			<transition name="fade" mode='out-in'>
				<router-view/>
			</transition>
		</div>
	</div>
</template>

<script>
	import store from './store'
	import HeaderBar from './components/Navigation/header'
	
	export default {
		name: 'App',
		store,
		components: {
			HeaderBar
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin-top: 100px;
	}
</style>
