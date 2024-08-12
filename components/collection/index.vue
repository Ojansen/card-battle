<template>
    <div>
        <h2>Player card collection ({{ collection.cards.value.length }})</h2>
        <div class="flex justify-evenly gap-6 flex-wrap">
            <div v-for="card in collection.cards.value" :key="card.uuid">
                <Card :card="card">
                    <button class="button" type="button" @click="currency.sellCard(card)">Sell for ({{
                        currency.prices[card.rarity] / 2 }})</button>
                </Card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const collection = useCollection();
const currency = useCurrency();
</script>