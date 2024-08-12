<template>
    <div>
        <h2>Active deck state</h2>
        <div v-if="deck.locationFilter('deck').length">
            <div class="flex flex-wrap justify-evenly gap-6">
                <div v-for="card in deck.locationFilter('deck')" :key="card.uuid">
                    <Card :card="card" />
                </div>
            </div>
        </div>
        <div v-else>
            <p>No cards in deck</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const deck = usePlayerDeck();
</script>
