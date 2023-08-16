<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps({
    iconName: String,
    title: String,
    route: String
})
</script>
<template>
    <RouterLink :to="route as string">
        <div class="flex items-center gap-2 h-16 text-xl cursor-pointer py-10 px-4 hover:bg-white">
            <div class="flex justify-center items-center w-12 h-12 text-2xl">
                <ion-icon :name="iconName"></ion-icon>
            </div>
            <span>{{ title }}</span>
        </div>
    </RouterLink>
</template>
