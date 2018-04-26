<template>
	<div>
		<router-link :to='{name: "add", params: {id: "root"}}' class='btn btn-info'>
			+ 创建根标签
		</router-link>
		<hr>
		<div v-for='tags in list'>
			<tag-list :tags='tags'/>
			<hr>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import TagList from '@/components/Tag/info/list'

	export default {
		components: {
			TagList
		},
		computed: {
			...mapState({
				list: state => state.SearchModule.tag_list
			})
		},
		methods: {
			...mapActions({
				getAllTags: 'getAllTags'
			}),
			search: function () {
				this.getAllTags()
			}
		},
		created () {
			this.search()
		}
	}
</script>