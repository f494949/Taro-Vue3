<script>
	export default {
		name:'HomePage',
		setup() {
			
		}
	}
</script>

<template>
	<input type="text" v-model="keyWord">
	<h3>{{keyWord}}</h3>
</template>