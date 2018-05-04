<template>
	<div class='login-panel'>
		<h2 class='text-center'>
			配置标签信息
		</h2>
		<hr>
		<parent-tags :selects='parents' :tags='parent_tags'/>
		<tag-form :info='info'/>
		<edit-tag :info='info' :selects='parents'/>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import {clone} from '@/model'
	import {TAG_EDIT_MODEL} from '@/model/tag.model'
	import ParentTags from './_parents'
	import TagForm from './_form'
	import EditTag from '@/components/Tag/operation/save'

	export default {
		components: {
			ParentTags,
			TagForm,
			EditTag
		},
		data () {
			return {
				info: clone(TAG_EDIT_MODEL),
				parents: { selected: [] }
			}
		},
		computed: {
			...mapState({
				requesting: state => state.TagModule.requesting,
				tag_unexistance: state => state.TagModule.tag_unexistance,
				tag_detail: state => state.TagModule.tag_detail,
				tag_docs: state => state.TagModule.tag_docs,
				parent_tags: state => state.TagModule.parent_tags
			})
		},
		methods: {
			...mapActions({
				getTagDetail: 'getTagDetail',
				getTagsByLevel: 'getTagsByLevel'
			}),
			sync: function () {
				for (let prop in this.info) {
					this.info[prop] = this.tag_detail[prop]
				}
				this.parents.selected = this.tag_detail.parents.map(tag => {
					return tag.id
				})
				this.info.parents = this.parents.selected.join(',')
				console.info(this.parents.selected, this.info.parents)
			},
			fetch: function () {
				const that = this
				this.getTagDetail({
					id: this.$route.params.id,
					success: function () {
						that.getTagsByLevel({
							level: that.tag_detail.level
						})
						that.sync()
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
