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
    <div class="h-full">
        <div class="" :class="mapOrList ? 'absolute top-4 left-2  z-50' : 'mt-4 ms-4'">
            <SearchBar />
            <SwitchMode class="w-36 mx-auto sm:mx-0" @update:map-or-list="SwitchModeToMapOrList" />
        </div>

        <MapMode v-if="mapOrList" />
        <ListMode v-else />
    </div>
</template>
