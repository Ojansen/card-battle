<template>
    <div>
        <h2>Player deck</h2>
        <h3><strong>Deck must have 8 or more cards</strong></h3>
        <div v-for="card in deck.locationFilter('deck')" :key="card.uuid">
            <Card :card="card" />
            <button type="button" @click="deck.remove(card)">Remove</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const deck = usePlayerDeck();
</script>