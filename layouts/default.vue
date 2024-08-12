<template>
    <div class="grid grid-rows-[min-content,auto] min-h-svh">
        <nav class="bg-gray-100 mb-12">
            <menu class="flex py-6 container jen flex-wrap">
                <li class="py-4">
                    <NuxtLink class="button button-link" :to="{ name: 'index' }">Home</NuxtLink>
                </li>
                <li class="py-4">
                    <NuxtLink class="button" :to="{ name: 'inventory' }">Inventory</NuxtLink>
                </li>
                <li class="py-4">
                    <NuxtLink class="button button-link" :to="{ name: 'store' }">Store</NuxtLink>
                </li>
                <li class="py-4">
                    <NuxtLink class="button button-link" :to="{ name: 'arena' }">Arena</NuxtLink>
                </li>
                <li class="py-4">
                    <NuxtLink class="button button-link" :to="{ name: 'collection' }">Collection</NuxtLink>
                </li>
                <li class="py-4">
                    <NuxtLink class="button button-link" :to="{ name: 'deck' }">Deck</NuxtLink>
                </li>
            </menu>
        </nav>

        <main class="container">
            <slot />
        </main>

    </div>
</template>