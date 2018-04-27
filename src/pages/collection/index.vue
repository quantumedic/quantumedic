<template>
	<div>
		<div v-for='doc in list'>
			<h4>
				{{doc.title ? doc.title : '未命名草稿'}}
				<router-link :to='{name: "doc", params: {id: doc.id}}' class='small'>
					查看
				</router-link>
			</h4>
			<p class='small'>
				<router-link
					class='tag'
					:to='{name: "tag", params: {id: tag.id}}'
					v-for='tag in doc.tags'
					:key='tag.id'>
					{{tag.name}}
				</router-link>
			</p>
			<p v-if='doc.abstract'>{{doc.abstract}}</p>
			<p class='text-muted text-right small'>
				{{doc.update_time}}
			</p>
			<hr>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'

	export default {
		computed: {
			...mapState({
				list: state => state.SearchModule.collection_list
			})
		},
		methods: {
			...mapActions({
				searchMyCollections: 'searchMyCollections'
			}),
			search: function () {
				this.searchMyCollections()
			}
		},
		created () {
			this.search()
		}
	}
</script>