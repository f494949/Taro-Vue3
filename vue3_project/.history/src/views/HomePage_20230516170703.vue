<script>
    import ref f
	export default {
		name: 'HomePage',
		setup() {
			let name = '张三'
			let age = 18
			function sayHi() {
				alert(`我是${name},今年${age}岁`)
			}

			return {
				name,
				age,
				sayHi
			}
		}
	}
</script>

<template>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<button @click="sayHi">检查</button>
</template>

<style scoped></style>
