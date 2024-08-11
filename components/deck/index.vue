<template>
    <div>
        <h2>Player deck</h2>
        <div v-for="(card, index) in deck.deck.value" :key="index">
            <Card :card="card" />
            <button type="button" @click="deck.remove(card)">Remove</button>
        </div>
        <button type="button" @click="deck.shuffle">Shuffle</button>
    </div>
</template>

<script setup lang="ts">
const deck = usePlayerDeck();
</script>