<template>
    <div>
        <h2>Current hand</h2>
        <div v-if="hand.currentHand.value.length">
            <div v-for="(card, index) in hand.currentHand.value" :key="index">
                <Card :card="card" />
                <button type="button" @click="game.playCard(card)">Play</button>
            </div>
        </div>
        <div v-else>
            <p>No cards in hand</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const hand = usePlayerHand();
const game = useGame();
</script>