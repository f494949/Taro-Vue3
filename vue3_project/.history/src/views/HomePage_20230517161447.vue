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
	<button @click="sum++">点击+1</button>
	<br>
	<h2></h2>
</template>

<style scoped></style>
