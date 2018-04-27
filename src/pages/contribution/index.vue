<template>
	<div>
		<div v-for='draft in list'>
			<h4>
				{{draft.title ? draft.title : '未命名草稿'}}
				<router-link :to='{name: "edit", params: {id: draft.id}}' class='small'>
					编辑
				</router-link>
			</h4>
			<p class='small'>
				<router-link
					class='tag'
					:to='{name: "tag", params: {id: tag.id}}'
					v-for='tag in draft.tags'
					:key='tag.id'>
					{{tag.name}}
				</router-link>
			</p>
			<p v-if='draft.abstract'>{{draft.abstract}}</p>
			<p class='text-muted text-right small'>
				{{draft.update_time}}
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
				list: state => state.SearchModule.contribution_list
			})
		},
		methods: {
			...mapActions({
				searchMyContributions: 'searchMyContributions'
			}),
			search: function () {
				this.searchMyContributions()
			}
		},
		created () {
			this.search()
		}
	}
</script>