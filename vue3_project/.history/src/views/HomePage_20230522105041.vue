<script>
	import { reactive, ref, watch } from 'vue'
	export default {
		name: 'HomePage',
		setup() {
			let sum = ref(0)
			let msg = ref('你好')
			let person = reactive({
				name: '张三',
				age: 18
			})

			

			return {
				sum,
				msg,
				person
			}

		}
	}
</script>

<template>
	<h2>计数：{{ sum }}</h2>
	<button @click="sum++">点击+1</button>
	<hr>
	<h2>当前鼠标点击的坐标为: x</h2>
</template>

<style scoped></style>
