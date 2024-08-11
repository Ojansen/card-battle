<template>
    <div>
        <nav>
            <menu class="flex gap-2">
                <li>
                    <NuxtLink :to="{ name: 'index' }">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="{ name: 'inventory' }">Inventory</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="{ name: 'store' }">Store</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="{ name: 'arena' }">Arena</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="{ name: 'collection' }">Collection</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="{ name: 'deck' }">Deck</NuxtLink>
                </li>
            </menu>
        </nav>

        <main>
            <slot />
        </main>

    </div>
</template>