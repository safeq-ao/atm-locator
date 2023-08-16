<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
    mapOrList: Boolean
})

const emit = defineEmits(['update:mapOrList'])

const list = ref(false)
const map = ref(true)

function SwitchModeToList() {
    map.value = false
    emit('update:mapOrList', false)

    return (list.value = !list.value)
}

function SwitchModeToMap() {
    list.value = false
    emit('update:mapOrList', true)

    return (map.value = !map.value)
}
</script>

<template>
    <div>
        <div class="flex w-36 h-10 bg-white border rounded-lg mx-auto mt-3">
            <button v-on:click="SwitchModeToMap" :class="map && 'active'">Mapa</button>
            <button v-on:click="SwitchModeToList" :class="list && 'active'">Lista</button>
        </div>
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
