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
</template>

<style scoped></style>
