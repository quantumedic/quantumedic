<template>
	<form>
		<div class='form-group'>
			<label v-for='gender in genders'>
				<input type="radio" name="gender" v-model='info.gender' :value='gender.value'>
				&nbsp;
				{{gender.name}}&nbsp;&nbsp;&nbsp;&nbsp;
			</label>
		</div>
		<div class='form-group'>
			<input type="text" name="" class='form-control' v-model='info.username' placeholder="昵称">
		</div>
		<div class='form-group'>
			<input type="text" name="" class='form-control' v-model='info.hospital' placeholder="就职医院 例：北京协和医院">
		</div>
		<div class='form-group'>
			<input type="text" name="" class='form-control' v-model='info.department' placeholder="所属科室 例：血液科">
		</div>
	</form>
</template>

<script>
	import {USER_GENDERS} from '@/model/account.model'

	export default {
		props: ['info'],
		data () {
			return {
				genders: USER_GENDERS
			}
		}
	}
</script>
