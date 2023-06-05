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
	<input type="text" v-model="keyword">
</template>