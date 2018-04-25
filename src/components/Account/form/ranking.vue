<template>
	<form>
		<div class='form-group select-group'>
			<div class='form-control'>
				<i class='fa fa-angle-down'/>
				&nbsp;
				{{ranking[info.rank_title] ? ranking[info.rank_title].name : "职称"}}
			</div>

			<select v-model='info.rank_title'>
				<option :value='""' disabled>
					请选择一个职称
				</option>
				<option v-for='(rank, title) in ranking' :value='title'>
					{{rank.name}}
				</option>
			</select>
		</div>
	</form>
</template>

<script>
	import {RANKING_TITLES} from '@/model/ranking.model'

	export default {
		props: ['info'],
		data () {
			return {
				ranking: RANKING_TITLES
			}
		}
	}
</script>