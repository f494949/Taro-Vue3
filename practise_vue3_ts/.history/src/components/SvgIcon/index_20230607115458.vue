<template>
    <div>
        <svg>
            <use :xlink:href="prefix+name"></use>
        </svg>
    </div>
</template>

<script setup lang="ts">
defineProps({
    //xlink:href前缀
    prefix: {
        type: String,
        default: '#icon-'
    },
    name: {
        type: String,
        default: ''
    },
})
</script>

<style scoped>

</style>