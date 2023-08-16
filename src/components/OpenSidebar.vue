<script setup lang="ts">
import { ref } from 'vue'
import AppSidebar from './layouts/AppSidebar.vue'

const openSidebar = ref(false)

const toggleSidebar = () => {
    openSidebar.value = !openSidebar.value
}

const closeSidebar = () => {
    openSidebar.value = false
}
</script>

<template>
    <div>
        <div
            class="flex justify-center items-center h-12 w-12 text-2xl cursor-pointer"
            v-on:click="toggleSidebar"
        >
            <ion-icon name="menu-outline"></ion-icon>
        </div>
        <AppSidebar :open="openSidebar" @update:open="closeSidebar" />
    </div>
</template>

<style scoped></style>
