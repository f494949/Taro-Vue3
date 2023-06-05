<script>
	import { reactive, ref,watch } from 'vue'
	export default {
		name: 'HomePage',
		setup() {
			let sum = ref(0)
			let msg = ref('你好')
			let person = reactive()

			watch(() => person.age, (newValue, oldValue) => {
				console.log('person变化了', newValue, oldValue)
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
	<h2>当前信息为：{{ msg }}</h2>
	<button @click="msg+='!'">修改信息</button>
	<hr>
	<h2>姓名：{{ person.name }}</h2>
	<h2>年龄：{{ person.age }}</h2>
	<button @click="person.age++">增加年龄</button>
</template>

<style scoped></style>
