<template>
    <div>
        <svg xlink:href="pr"></svg>
    </div>
</template>

<script setup lang="ts">
defineProps{
    //xlink:href前缀
    prefix: {
        type: String,
        default: '#icon-'
    },
}
</script>

<style scoped>

</style>