<script>
	import { ref,reactive } from 'vue'
	export default {
		name: 'HomePage',
		setup() {
			
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
