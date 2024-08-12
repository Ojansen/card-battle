<template>
    <div class="relative h-6 w-64 overflow-hidden rounded-full">
        <progress class="h-6 w-64" :max="maxhealthCopy" :value="health"> </progress>
        <span class="absolute inset-x-0 text-center font-semibold">{{ health }} / {{ maxHealth }}</span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    health: number;
    maxHealth: number;
}>();

const maxhealthCopy = props.maxHealth;
</script>

<style scoped>
::-webkit-progress-bar {
    @apply bg-red-500;
}

::-webkit-progress-value {
    @apply bg-green-500;
}
</style>