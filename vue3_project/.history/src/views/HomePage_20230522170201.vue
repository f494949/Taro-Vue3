<script>
	import {ref, customRef} from 'vue'
	export default {
		name:'HomePage',
		setup() {
			function myRef(value, delay) {
				let timer
				return customRef((track, trigger) => {
					return {
						get() {}
						set
					}
				})
			}
		}
	}
</script>

<template>
	<input type="text" v-model="keyWord">
	<h3>{{keyWord}}</h3>
</template>