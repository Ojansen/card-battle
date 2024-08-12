<template>
    <div>
        <h2>Player deck</h2>
        <h3><strong>Deck must have 8 or more cards</strong></h3>
        <div class="flex flex-wrap justify-evenly gap-6">
            <div v-for="card in deck.locationFilter('deck')" :key="card.uuid">
                <Card :card="card">
                    <button class="button" type="button" @click="deck.remove(card)">Remove</button>
                </Card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const deck = usePlayerDeck();
</script>