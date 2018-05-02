<template>
	<div>
		<loading v-if='requesting'/>
		<div class='row' v-if='!requesting && !tag_unexistance'>
			<div class='col-lg-8'>
				<tag-intro :tag='tag_detail'/>
				<tag-docs :docs='tag_docs' v-if='tag_docs.length > 0'/>
				<br>
			</div>
			<div class='col-lg-4'>
				<tag-tree :tag='tag_detail' v-if='tag_detail.parents.length > 0 || tag_detail.children.length > 0'/>
			</div>
		</div>
		<p class='text-center text-muted' v-if='!requesting && tag_unexistance'>
			喔~你要找的分类好像没有哦
		</p>
	</div>
		
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import Loading from '@/components/Common/loading'
	import TagIntro from './_intro'
	import TagDocs from './_docs'
	import TagTree from './_tree'

	export default {
		components: {
			Loading,
			TagIntro,
			TagDocs,
			TagTree
		},
		computed: {
			...mapState({
				requesting: state => state.TagModule.requesting,
				tag_unexistance: state => state.TagModule.tag_unexistance,
				tag_detail: state => state.TagModule.tag_detail,
				tag_docs: state => state.TagModule.tag_docs
			})
		},
		methods: {
			...mapActions({
				getTagDetail: 'getTagDetail',
				getTagDocs: 'getTagDocs'
			}),
			fetch: function () {
				const that = this
				this.getTagDetail({
					id: this.$route.params.id,
					success: function () {
						that.getTagDocs({
							id: that.$route.params.id
						})
					}
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
