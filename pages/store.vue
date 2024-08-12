<template>
    <div class="flex flex-col gap-2">
        <h1>Store</h1>
        <span>Keys: {{ player.keys.value }}</span>
        <span>Honour Medals: {{ player.medals.value }}</span>
        <span>Gold: {{ player.gold.value }}</span>
        <div>
            <button class="button" type="button" @click="lootbox.openChest">Open lootbox</button>
            <button class="button" type="button" @click="lootbox.dropGold">Get free Gold</button>
            <button class="button" type="button" @click="currency.buyGold">Buy 1000 gold for 1 medal</button>
            <button class="button" type="button" @click="currency.buyKeys">Buy 1 key for 1 medal</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const player = usePlayer();
const lootbox = useLoot();
const currency = useCurrency();
</script>