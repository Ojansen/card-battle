<template>
    <div class="space-y-6">
        <div>
            <div v-for="card in collection.cards.value.filter((item: CardInterface) => item.location === 'collection')">
                {{ card }}
                <button type="button" @click="deck.add(card)">Add card</button>
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