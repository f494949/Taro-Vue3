<script>
    import {ref,reactive} from 'vue'
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
                age: 18
            })

			function changeInfo() {
				name.value = '李四',
                age.value = 20
                job.type = '后端'
                job.salary = '4k'
                console.log(job);
			}

			return {
				name,
				age,
                job,
				changeInfo
			}
		}
	}
</script>

<template>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>职业：{{ job.type }}</h2>
	<h2>薪资：{{ job.salary }}</h2>
	<button @click="changeInfo">更改信息</button>
</template>

<style scoped></style>
