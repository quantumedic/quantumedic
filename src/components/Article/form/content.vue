<template>
	<form>
		<div class='form-group'>
			<div id='edit-area'/>
		</div>
	</form>
</template>

<script>
	import Editor from 'wangeditor'
	const editor = new Editor('#edit-area')
	
	export default {
		props: ['article'],
		mounted () {
			editor.customConfig.menus = [
				'head',
				'bold',
				'italic',
				'underline',
				'strikeThrough',
				'link',
				'list',
				'justify',
				'image',
				'table',
				'undo',
				'redo'
			]
			editor.customConfig.onchange = html => {
				this.article.content = html
			}
			editor.create()
			editor.txt.html('<p>' + this.article.content + '</p>')
		}
	}
</script>
