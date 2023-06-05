<script>
	import { reactive } from 'vue'
	export default {
		name: 'HomePage',
		setup() {
			let person = reactive({
				name: '张三',
				age: 18,
				job: {
					type: '前端',
					salary: '3k'
				}
			})

			function changeInfo() {
                person.name = '李四'
                person.age = 20
                person.job.type = '后端'
                person.job.salary = '4k'
			}

			function addSex() {
				person.sex = '女'
			}

			return {
                person,
				changeInfo,
				addSex
			}
		}
	}
</script>

<template>
	<h2>姓名：{{ person.name }}</h2>
	<h2>年龄：{{ person.age }}</h2>
	<h2 v-show="pe">性别：{{ person.age }}</h2>
	<h2>职业：{{ person.job.type }}</h2>
	<h2>薪资：{{ person.job.salary }}</h2>
	<button @click="changeInfo">更改信息</button>
</template>

<style scoped></style>
