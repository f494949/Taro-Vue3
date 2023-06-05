<script>
	import { reactive } from 'vue'
	export default {
		name: 'HomePage',
		setup() {
			// let name = ref('张三')
			// let age = ref(18)
			// let job = reactive({
			//     type: '前端',
			//     salary: '3k'
			// })
			let person = reactive({
				name: '张三',
				age: 18,
				job: {
					type: '前端',
					salary: '3k'
				}
			})

			function changeInfo() {
				// ;(name.value = '李四'), (age.value = 20)
				// job.type = '后端'
				// job.salary = '4k'
				// console.log(job)
                person.name = '李四'
                person.age = 20
                person.job.type = '后端'
                person.job.salary = '4k'
			}

			

			return {
				// name,
				// age,
				// job,
                person,
				changeInfo
			}
		}
	}
</script>

<template>
	<h2>姓名：{{ person.name }}</h2>
	<h2>年龄：{{ person.age }}</h2>
	<h2>职业：{{ person.job.type }}</h2>
	<h2>薪资：{{ person.job.salary }}</h2>
	<button @click="changeInfo">更改信息</button>
</template>

<style scoped></style>
