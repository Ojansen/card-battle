<template>
    <div>
        <h2>Player card collection</h2>
        <div v-for="card in collection.cards.value" :key="card.uuid">
            <Card :card="card" />
            <button type="button" @click="currency.sellCard(card)">sell</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CardInterface } from "global";

const collection = useCollection();
const currency = useCurrency();
</script>