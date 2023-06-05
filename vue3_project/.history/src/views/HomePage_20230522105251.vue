<script>
	import { reactive, ref} from 'vue'
	export default {
		name: 'HomePage',
		setup() {
			let sum = ref(0)
			let point = reactive({
				x: 0,
				y: 0
			})

			return {}

		}
	}
</script>

<template>
	<h2>计数：{{ sum }}</h2>
	<button @click="sum++">点击+1</button>
	<hr>
	<h2>当前鼠标点击的坐标为: x:{{ point.x }}, y:{{point.y}}</h2>
</template>

<style scoped></style>
