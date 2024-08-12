<template>
    <div class="space-y-4">
        <div :class="cardRing" class="flex rounded-xl flex-col ring-2 p-2 gap-2 w-64 max-w-64 max-h-80 h-80">
            <div class="flex justify-between items-center">
                <span class="text-xl px-2 font-semibold">{{ card.name }}</span>
                <span class=" rounded-full bg-blue-600 text-white size-10 items-center justify-center font-bold flex">{{
                    card.cost
                    }}</span>
            </div>
            <div class="bg-gray-500 w-full h-40 rounded-xl"></div>
            <div class="px-2" v-html="card.desciption" />
            <span class="ml-auto mt-auto px-2">{{ card.rarity }}</span>
        </div>
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { CardInterface } from "global";

const props = defineProps<{
    card: CardInterface;
}>();

const cardRing = computed(() => ({
    common: 'ring-gray-200',
    uncommon: 'ring-green-200',
    rare: 'ring-blue-200',
    epic: 'ring-violet-200',
    legendary: 'ring-amber-200',
}[props.card.rarity]));
</script>