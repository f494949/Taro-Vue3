<script>
export default {
    name:'HomePage',
    setup() {
        let name = '张三'
        let age = 18

        function sayHi () {
            alert(`我是${name},`)
        }
    }
}
</script>

<template>
    <h2>姓名：</h2>
    <h2>年龄：</h2>
</template>

<style scoped></style>