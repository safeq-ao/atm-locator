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
            class="flex justify-center items-center h-12 w-12 text-4xl cursor-pointer"
            v-on:click="toggleSidebar"
        >
            <ion-icon name="menu-outline"></ion-icon>
        </div>
        <AppSidebar :open="openSidebar" @update:open="closeSidebar" />
        <div
            v-if="openSidebar"
            class="overlay fixed top-0 left-0 w-full bg-black bg-opacity-20 h-full z-[999]"
            @click="closeSidebar"
        ></div>
    </div>
</template>
