<script setup lang="ts">
import { ref } from 'vue'

import SearchBar from '../components/SearchBar.vue'
import SwitchMode from './SwitchMode.vue'
import MapMode from '../components/layouts/MapMode.vue'
import ListMode from '../components/layouts/ListMode.vue'


const mapOrList = ref<boolean>(false)

function SwitchModeToMapOrList() {
    mapOrList.value = !mapOrList.value
}
</script>

<template>
    <div>
        <SearchBar />
        <SwitchMode @update:map-or-list="SwitchModeToMapOrList" />

        <MapMode v-if="mapOrList" />
        <ListMode v-else />
    </div>
</template>
