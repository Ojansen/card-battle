<template>
    <div>
        <div v-for="card in allCards.cardList.value">
            {{ card }}
            <button type="button" @click="currency.buyCard(card)">Buy card</button>
        </div>
        <Collection />
    </div>
</template>

<script setup lang="ts">
const deck = usePlayerDeck();
const currency = useCurrency();
const allCards = useCard();
</script>