<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'

const props = defineProps({
    open: Boolean
})
const sidebarItems = [
    {
        icon: 'chatbubble-ellipses-outline',
        title: 'Feedback',
        route: '/feedback'
    },
    {
        icon: 'information-circle-outline',
        title: 'Sobre o App',
        route: '/about'
    },
    {
        icon: 'help-circle-outline',
        title: 'Ajuda',
        route: '/help'
    }
]

const emit = defineEmits(['update:open'])

const closeSidebar = () => {
    emit('update:open', false)
}
</script>

<template>
    <div class="fixed top-0 left-0 w-72 h-full bg-[#ccc] z-50" :class="!open && 'hidden'">
        <header class="flex justify-between items-center w-full h-20 py-8 px-4">
            <div class="flex items-center gap-2">
                <RouterLink to="/">
                    <div class="icon">
                        <ion-icon name="arrow-back-outline" class="text-3xl"></ion-icon>
                    </div>
                </RouterLink>
                <h3>ATM Locator</h3>
            </div>
            <div class="icon" v-on:click="closeSidebar">
                <ion-icon name="close-outline"></ion-icon>
            </div>
        </header>
        <hr class="border-black" />
        <main>
            <SidebarItem
                v-for="item in sidebarItems"
                :key="item.title"
                :icon-name="item.icon"
                :title="item.title"
                :route="item.route"
            />
        </main>
    </div>
</template>

<style scoped>
.icon {
    @apply flex justify-center items-center w-12 h-12 text-4xl cursor-pointer;
}
</style>
