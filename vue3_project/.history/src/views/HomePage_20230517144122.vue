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

			function deleteName() {
				delete person.name
			}

			return {
                person,
				changeInfo,
				addSex,
				deleteName
			}
		}
	}
</script>

<template>
	<h2 v-show="person.name">姓名：{{ person.name }}</h2>
	<h2>年龄：{{ person.age }}</h2>
	<h2 v-show="person.sex">性别：{{ person.sex }}</h2>
	<h2>职业：{{ person.job.type }}</h2>
	<h2>薪资：{{ person.job.salary }}</h2>
	<button @click="changeInfo">更改信息</button>
	<button @click="deleteName">删除姓名</button>
	<button @click="addSex">添加性别</button>
</template>

<style scoped></style>
