<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
    mapOrList: Boolean
})

const emit = defineEmits(['update:mapOrList'])

const list = ref(false)
const map = ref(true)

function SwitchModeToList() {
    if (!list.value) {
        map.value = false
        emit('update:mapOrList', false)
        list.value = !list.value
    }
}

function SwitchModeToMap() {
    if (!map.value) {
        list.value = false
        emit('update:mapOrList', true)
        map.value = !map.value
    }

    return 'lg:mx-auto'
}
</script>

<template>
    <div class="flex w-36 h-10 bg-white rounded-lg mt-3">
        <button v-on:click="SwitchModeToMap" :class="{ active: map }">Mapa</button>
        <button v-on:click="SwitchModeToList" :class="{ active: list }">Lista</button>
    </div>
</template>

<style scoped>
.active {
    @apply bg-[#ccc];
}

button {
    @apply w-1/2 h-full rounded-lg cursor-pointer;
}
</style>
