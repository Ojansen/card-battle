<template>
    <div class="space-y-6">
        <h2>Collection</h2>
        <div class="flex gap-6 flex-wrap justify-evenly">
            <div v-for="card in collection.cards.value.filter((item: CardInterface) => item.location === 'collection')">
                <Card :card="card">
                    <button class="button" type="button" @click="deck.add(card)">Add card</button>
                </Card>
            </div>
        </div>
        <Deck />
    </div>
</template>

<script setup lang="ts">
import type { CardInterface } from "global";

const deck = usePlayerDeck();
const collection = useCollection();
</script>