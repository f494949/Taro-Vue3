<script>
	import {customRef} from 'vue'
	export default {
		name:'HomePage',
		setup() {
			function myRef(value, delay) {
				return customRef((track, trigger) => {
					return {
						get() {
							console.log(`someone read the data from myRef. I gave him ${value}`)
							track()
							return value
						},
						set(newValue) {
							console.log(`someone change data to ${newValue} `)
							clearTimeout()

							let timer = setTimeout(() => {
								value = newValue
								trigger()
							}, delay)
						}
					}
				})
			}

			let keyWord = myRef('hello', 500)

			return {keyWord}
		}
	}
</script>

<template>
	<input type="text" v-model="keyWord">
	<h3>{{keyWord}}</h3>
</template>