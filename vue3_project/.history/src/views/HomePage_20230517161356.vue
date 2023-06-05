<script>
	import { ref,reactive,watch } from 'vue'
	export default {
		name: 'HomePage',
		setup() {
			let sum = ref(0)
			let msg = ref('你好')
			let person = {
				name: '张三',
				age: 18
			}
		}
	}
</script>

<template>
	<button @c'l>点击+1</button>
	<h2></h2>
</template>

<style scoped></style>
