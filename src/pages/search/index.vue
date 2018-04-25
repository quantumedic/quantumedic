<template>
	<div>
		<div v-for='doc in list'>
			<router-link :to='{name: "doc", params: {id: doc.id}}' target='_blank'>
				<h4 class='text-title'>{{doc.title}}</h4>
			</router-link>
			<p>{{doc.abstract}}</p>
			<p class='text-muted text-right small'>{{doc.update_time}}</p>
			<hr>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'

	export default {
		computed: {
			...mapState({
				list: state => state.SearchModule.list
			})
		},
		methods: {
			...mapActions({
				searchDocsByCondition: 'searchDocsByCondition'
			}),
			search: function () {
				this.searchDocsByCondition()
			}
		},
		created () {
			this.search()
		}
	}
</script>