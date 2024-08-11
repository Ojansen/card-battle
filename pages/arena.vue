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
            <DeckActive />
        </div>
    </div>
</template>

<script setup lang="ts">
const game = useGame();

onMounted(() => {
	game.startGame();
});
</script>