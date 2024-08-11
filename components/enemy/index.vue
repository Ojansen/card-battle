<template>
    <div>
        <h2>{{ enemy.currentEnemy.value.name }}</h2>
        <div class="flex flex-col gap-1">
            Health: {{ enemy.currentEnemy.value.health }}
        </div>
    </div>
</template>

<script setup lang="ts">
const enemy = useEnemy();
</script>