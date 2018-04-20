<template>
	<div>
		<h2 class='text-center'>
			完善个人信息
		</h2>
		<hr>
		<profile-form :info='info'/>
		<p class='small'>
			让我更好的了解你
		</p>
		<done-button :info='info'/>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import {clone} from '@/model'
	import {USER_PROFILE_FORM} from '@/model/account.model'
	import ProfileForm from '@/components/Account/form/profile'
	import DoneButton from '@/components/Account/operation/modify'

	export default {
		data () {
			return {
				info: clone(USER_PROFILE_FORM)
			}
		},
		computed: {
			...mapState({
				user_info: state => state.AccountModule.user_info
			})
		},
		components: {
			ProfileForm,
			DoneButton
		},
		methods: {
			sync: function () {
				for (let prop in this.info) {
					this.info[prop] = this.user_info[prop] ? this.user_info[prop] : ''
				}
			}
		},
		mounted () {
			this.sync()
		},
		watch: {
			'user_info': {
				deep: true,
				handler: function () {
					this.sync()
				}
			}
		}
	}
</script>