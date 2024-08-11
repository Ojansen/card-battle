<template>
    <div>
        <h2>Graveyard</h2>
        <div v-if="hand.graveyard.value.length">
            <div v-for="(card, index) in hand.graveyard.value" :key="index">
                <Card :card="card" />
            </div>
        </div>
        <div v-else>
            Noting in the graveyard
        </div>
    </div>
</template>

<script setup lang="ts">
const hand = usePlayerHand();
</script>