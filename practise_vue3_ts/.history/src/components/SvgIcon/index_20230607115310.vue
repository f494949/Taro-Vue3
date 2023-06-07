<template>
    <div>
        <svg>
            <use></use>
        </svg>
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