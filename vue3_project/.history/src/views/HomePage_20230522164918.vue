<script>
	import { ref } from 'vue'
	import userPoint from '../hooks/userPoint'
	export default {
		name: 'HomePage',
		setup() {
			let sum = ref(0)
			let point = userPoint()

			return {sum, point}

		}
	}
</script>

<template>
	<input type="text" v-model="keyWord">
	<h3></h3>
</template>