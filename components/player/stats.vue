<template>
    <div>
        <ul>
            <li>
                Attack
                {{ player.attack }}
            </li>
            <li>
                Shield
                {{ player.shield }}
            </li>
            <li>
                Health
                <UiHealthbar :health="player.health.value" :max-health="player.maxHealth.value" />
                {{ player.health }} - {{ player.maxHealth }}
            </li>
            <li>
                Mana
                {{ player.mana }}
            </li>
            <li>
                Gold
                {{ player.gold }}
            </li>
            <li>
                Lootbox keys
                {{ player.keys }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const player = usePlayer();
</script>