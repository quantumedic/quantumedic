<template>
	<div class='panel'>
		<div class='panel-body'>
			<div class='row'>
				<div class='col-md-4' v-for='route in routes'>
					<router-link :to='{name: route.name}' :style='{color: route.color}'>
						<h2 class='text-center'>
							<i :class='["fa fa-" + route.icon]'/>
						</h2>
						
						<h5 class='text-center'>
							{{route.text}}
						</h5>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				routes: [
					{name: 'home', text: '首页', icon: 'home', color: '#0086AD'},
					{name: 'tags', text: '分类', icon: 'tag', color: '#FDA900'},
					{name: 'collection', text: '收藏', icon: 'star', color: '#E57453'},
					{name: 'contribution', text: '贡献', icon: 'file', color: '#90326D'}
				]
			}
		}
	}
</script>