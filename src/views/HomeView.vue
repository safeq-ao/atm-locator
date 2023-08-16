<script setup lang="ts">
import { ref } from 'vue'

import SearchBar from '../components/SearchBar.vue'
import SwitchMode from './SwitchMode.vue'
import MapMode from '../components/layouts/MapMode.vue'
import ListMode from '../components/layouts/ListMode.vue'

const mapOrList = ref<boolean>(true)

function SwitchModeToMapOrList() {
    mapOrList.value = !mapOrList.value
}
</script>

<template>
    <div class="relative h-full">
        <div class="absolute top-4 left-1/2 -translate-x-1/2 z-50">
            <SearchBar />
            <SwitchMode @update:map-or-list="SwitchModeToMapOrList" />
        </div>

        <MapMode v-if="mapOrList" />
        <ListMode v-else />
    </div>
</template>
