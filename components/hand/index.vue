<template>
    <div>
        <h2>Current hand</h2>
        <div v-if="deck.locationFilter('hand').length">
            <div class="flex flex-wrap justify-center gap-6">
                <div v-for="card in deck.locationFilter('hand')" :key="card.uuid">
                    <Card :card="card">
                        <button class="button" type="button" @click="game.playCard(card)">Play</button>
                    </Card>
                </div>
            </div>
        </div>
        <div v-else>
            <p>No cards in hand</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const deck = usePlayerDeck();
const game = useGame();
</script>