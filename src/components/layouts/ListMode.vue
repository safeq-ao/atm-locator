<script setup lang="ts">
import ListModeItem from './ListModeItem.vue'
import { atms } from '../../data/atms.ts'
</script>
<template>
    <div class="relative w-full h-full mt-2">
        <ListModeItem
            v-for="(atm, index) in atms"
            :key="index"
            :atm-name="atm.name"
            :horary="atm.horary"
            :atm-distance="atm.distance"
            :atm-time="atm.time"
            :money-status="atm.moneyStatus"
            :paper-status="atm.paperStatus"
            :index="index"
        />
    </div>
</template>

<style scoped></style>
../../data
