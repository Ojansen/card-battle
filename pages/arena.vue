<template>
    <div class="space-y-10">
        <h1>Arena</h1>
        <h2>phase: {{ game.phase }}</h2>

        <div class="space-y-10">
            <Enemy />

            <h2>Player</h2>
            <button type="button" @click="game.endTurn">End turn</button>

            <PlayerStats />

            <Hand />

            <Graveyard />

            <!-- <CardPlayingDeck /> -->
            <pre>{{ hand.copyDeck.value }}</pre>
        </div>
    </div>
</template>

<script setup lang="ts">
const game = useGame();
const deck = usePlayerDeck();
const hand = usePlayerHand();

onMounted(() => {
	game.startGame();
});
</script>