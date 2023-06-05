<script>
    import {ref} from 'vue'
	export default {
		name: 'HomePage',
		setup() {
			let name = ref('张三')
			let age = ref(18)

			function changeInfo() {
				name.value = '李四',
                age.value = 20
			}

			return {
				name,
				age,
				changeInfo
			}
		}
	}
</script>

<template>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<button @click="changeInfo">更改信息</button>
</template>

<style scoped></style>
