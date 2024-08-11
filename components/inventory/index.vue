<template>
    <div>
        <div>
        </div>
        <h2>Player inventory</h2>
        <ul>
            <li v-for="item in inventory.inventoryItems.value">
                <div>
                    {{ item }}
                    <button @click="inventory.equip(player, item)">Equip</button>
                </div>
            </li>
        </ul>
        <h2>Currently equipped</h2>
        <ul class="flex flex-col">
            <li>
                head {{ inventory.head }}
                <button v-if="inventory.head.value"
                    @click="inventory.unEquip(player, inventory.head.value)">unEquip</button>
            </li>
            <li>
                Hands {{ inventory.hands }}
                <button v-if="inventory.hands.value"
                    @click="inventory.unEquip(player, inventory.hands.value)">unEquip</button>
            </li>
            <li>
                torso {{ inventory.torso }}
                <button v-if="inventory.torso.value"
                    @click="inventory.unEquip(player, inventory.torso.value)">unEquip</button>
            </li>
            <li>
                weapon {{ inventory.weapon }}
                <button v-if="inventory.weapon.value"
                    @click="inventory.unEquip(player, inventory.weapon.value)">unEquip</button>

            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const inventory = usePlayerInventory();
const itemStore = useItems();
const player = usePlayer();
</script>