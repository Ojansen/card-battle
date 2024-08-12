<template>
    <div>
        <h2>Buy card to add to collection</h2>
        <div class="flex gap-6 justify-evenly flex-wrap">
            <div v-for="card in allCards.cardList.value">
                <Card :card="card">
                    <button class="button" type="button" @click="currency.buyCard(card)">Buy for ({{
                        currency.prices[card.rarity] }})</button>
                </Card>
            </div>
        </div>
        <Collection />
    </div>
</template>

<script setup lang="ts">
const deck = usePlayerDeck();
const currency = useCurrency();
const allCards = useCard();
</script>