<template>
	<div class='row'>
		<div class='col-lg-8'>
			<tag-intro :tag='tag_detail'/>
			<tag-docs :tag='tag_detail' v-if='tag_detail.docs.length > 0'/>
		</div>
		<div class='col-lg-4'>
			<tag-tree :tag='tag_detail'/>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import TagIntro from './_intro'
	import TagDocs from './_docs'
	import TagTree from './_tree'

	export default {
		components: {
			TagIntro,
			TagDocs,
			TagTree
		},
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
					id: this.$route.params.id,
					success: function () {
						return true
					},
					need_doc: true
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
