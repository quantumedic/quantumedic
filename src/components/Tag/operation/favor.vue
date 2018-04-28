<template>
	<button class='btn btn-info btn-sm' style="float: right" @click='favor' :disabled='favoring'>
		<i :class='["fa", tag.favored ? "fa-star" : "fa-star-o"]'/>
		{{tag.favored ? '已关注' : '关注分类'}}
	</button>
</template>

<script>
	import {mapState, mapActions} from 'vuex'

	export default {
		props: ['tag'],
		computed: {
			...mapState({
				favoring: state => state.TagModule.favoring
			})
		},
		methods: {
			...mapActions({
				favorTag: 'favorTag'
			}),
			favor: function () {
				this.favorTag({
					id: this.$route.params.id,
					favored: this.tag.favored
				})
			}
		}
	}
</script>
