<script>
	import {customRef} from 'vue'
	export default {
		name:'HomePage',
		setup() {
			function myRef(value, delay) {
				let timer
				return customRef((track, trigger) => {
					return {
						get() {
							console.log(`someone read the data from myRef. I gave him ${value}`)
							track()
							return value
						},
						set(newValue) {
							console.log(`someone change data to ${newValue} `)
							cle

							setTimeout(() => {
								value = newValue
								trigger()
							}, delay)
						}
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