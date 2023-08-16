<script setup lang="ts">
const props = defineProps({
    open: Boolean
})

const emit = defineEmits(['update:open'])

const closeSidebar = () => {
    emit('update:open', false)
}
</script>

<template>
    <div class="fixed top-40 left-0 w-9/12 h-full bg-[#ccc] sidebar" :class="!open && 'hidden'">
        <header class="flex justify-between items-center w-full h-20 p-8">
            <div class="flex items-center">
                <div class="icon">
                    <ion-icon name="arrow-back-outline" class="text-3xl"></ion-icon>
                </div>
                <h3>ATM Locator</h3>
            </div>
            <div class="icon" v-on:click="closeSidebar">
                <ion-icon name="close-outline"></ion-icon>
            </div>
        </header>
        <hr class="border-black" />
    </div>
</template>

<style scoped>
.icon {
    @apply flex justify-center items-center w-12 h-12 text-4xl cursor-pointer;
}
</style>
