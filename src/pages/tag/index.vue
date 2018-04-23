<template>
	<div class='row'>
		<div class='col-lg-8'>
			<div class='panel'>
				<div class='panel-body'>
					<p class='small text-muted'>分类标签</p>
					<h2>{{tag_detail.name}}</h2>
					<p>{{tag_detail.description}}</p>
				</div>
			</div>
			<div class='panel'>
				<div class='panel-body'>
					<div v-for='doc in tag_detail.docs'>
						<router-link :to='{name: "doc", params: {id: doc._id}}' target='_blank'>
							<h4 class='text-title'>{{doc.title}}</h4>
						</router-link>
						<p class='text-muted'>
							{{doc.abstract}}
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class='col-lg-4'>
			<div class='panel'>
				<div class='panel-body'>
					<h4 class='text-muted'>父分类</h4>
					<div>
						<router-link
						class='tag'
						v-for='tag in tag_detail.parents'
						:key='tag.id'
						:to='{name: "tag", params: {id: tag.id}}'
						target="_blank">
							{{tag.name}}
						</router-link>
					</div>
					<br>
					<h4 class='text-muted'>子分类</h4>
					<div>
						<router-link
						class='tag'
						v-for='tag in tag_detail.children'
						:key='tag.id'
						:to='{name: "tag", params: {id: tag.id}}'
						target="_blank">
							{{tag.name}}
						</router-link>
					</div>
				</div>
			</div>
			<p class='text-center text-muted'>{{tag_detail.update_time}}</p>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'

	export default {
		computed: {
			...mapState({
				requesting: state => state.TagModule.requesting,
				tag_unexistance: state => state.TagModule.tag_unexistance,
				tag_detail: state => state.TagModule.tag_detail
			})
		},
		methods: {
			...mapActions({
				getTagDetail: 'getTagDetail'
			}),
			fetch: function () {
				const that = this
				this.getTagDetail({
					id: this.$route.params.id
				})
			}
		},
		created () {
			this.fetch()
		},
		watch: {
			'$route': 'fetch'
		}
	}
</script>
