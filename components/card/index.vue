<template>
    <div>
        {{ card }}
    </div>
</template>

<script setup lang="ts">
import type { CardInterface } from "global";

defineProps<{
	card: CardInterface;
}>();
</script>