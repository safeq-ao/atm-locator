<script setup lang="ts">
</script>

<template>
    <div>
        <div class="flex w-36 h-10 bg-white border rounded-lg mx-auto mt-3">
            <button class="active">Mapa</button>
            <button>Lista</button>
        </div>
    </div>
</template>

<style>
.active {
    @apply bg-[#ccc];
}

button {
    @apply w-1/2 cursor-pointer rounded-lg;
}
</style>
