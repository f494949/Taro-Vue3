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
	<h2>当前信息为：{{ msg }}</h2>
	<button @click="msg+='!'">修改信息</button>
	<h2>姓名：{{  }}</h2>
	<h2></h2>
</template>

<style scoped></style>
