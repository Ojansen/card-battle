<template>
    <div>
        <h2>Playing deck state</h2>
        <div v-if="deck.deck.">
            <div v-for="(card, index) in hand.copyDeck.value" :key="index">
                {{ card }}
            </div>
        </div>
        <div v-else>
            <p>No cards in deck</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const hand = usePlayerHand();
const deck = usePlayerDeck();
</script>