<template>
	<div>
		<h2 class='text-center'>
			完善个人信息
		</h2>
		<hr>
		<profile-form :info='info'/>
		<rank-form :info='info'/>
		<p class='small' v-if='user_info.type != "editor"'>
			<span v-if='!ifEditor'>
				想成为手册的贡献者？点击
				<a @click='ifEditor = true'>成为编辑</a>
			</span>
			<span v-else>
				觉得自己力有未逮？
				<a @click='clean'>还是算了吧</a>
			</span>
		</p>
		<certificate-form :info='info' v-if='ifEditor'/>
		<done-button :info='info'/>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import {clone} from '@/model'
	import {USER_PROFILE_FORM} from '@/model/account.model'
	import ProfileForm from '@/components/Account/form/profile'
	import RankForm from '@/components/Account/form/ranking'
	import CertificateForm from '@/components/Account/form/certificate'
	import DoneButton from '@/components/Account/operation/modify'

	export default {
		data () {
			return {
				ifEditor: false,
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
			DoneButton,
			RankForm,
			CertificateForm
		},
		methods: {
			sync: function () {
				for (let prop in this.info) {
					this.info[prop] = this.user_info[prop] ? this.user_info[prop] : ''
				}
				this.ifEditor = this.user_info.type === 'editor'
			},
			clean: function () {
				this.info.phone = ''
				this.info.credential_number = ''
				this.ifEditor = false
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