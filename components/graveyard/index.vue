<template>
    <div>
        <h2>Graveyard</h2>
        <div v-if="deck.locationFilter('graveyard').length">
            <div class="flex flex-wrap justify-evenly gap-6">
                <div v-for="card in deck.locationFilter('graveyard')" :key="card.uuid">
                    <Card :card="card" />
                </div>
            </div>
        </div>
        <div v-else>
            Noting in the graveyard
        </div>
    </div>
</template>

<script setup lang="ts">
const deck = usePlayerDeck();
</script>