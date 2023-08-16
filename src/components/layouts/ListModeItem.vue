<script setup lang="ts">
import { ref } from 'vue'
import DirectionsButton from '../buttons/DirectionsButton.vue'

const props = defineProps({
    atmName: String,
    horary: String,
    atmDistance: String,
    atmTime: String,
    moneyStatus: Boolean,
    paperStatus: Boolean,
    index: Number
})
const showDetails = ref<number | null>(null)

function toggleShowDetails(index: number) {
    if (showDetails.value === index) {
        showDetails.value = null
    } else {
        showDetails.value = index
    }
}

function closeShowDetails() {
    showDetails.value = null
}
</script>

<template>
    <div
        v-on:click="toggleShowDetails(index as number)"
        class="flex flex-col gap-3 w-full mt-1 px-2 py-3 bg-white hover:bg-black900 hover:text-white hover:cursor-pointer"
    >
        <h3>{{ atmName }}</h3>
        <div class="flex justify-between items-end">
            <div class="flex flex-col gap-1">
                <p class="flex gap-2 text-gray-500">
                    <span>{{ atmDistance }} Km</span><span>{{ atmTime }} min</span>
                </p>
                <div class="flex items-center gap-2 text-lg">
                    <span>Status:</span>
                    <span
                        class="status-icon"
                        :class="moneyStatus ? 'text-green-700' : 'text-red-700'"
                    >
                        <ion-icon name="cash-outline"></ion-icon>
                    </span>
                    |
                    <span
                        class="status-icon"
                        :class="paperStatus ? 'text-green-700' : 'text-red-700'"
                    >
                        <ion-icon name="document-text-outline"></ion-icon>
                    </span>
                </div>
            </div>
            <DirectionsButton />
        </div>
    </div>

    <div
        v-show="showDetails === index"
        class="absolute top-10 left-1/2 -translate-x-1/2 flex-col gap-3 w-80 bg-white rounded-lg mx-auto mt-1 px-2 py-3 hidden"
    >
        <h3>{{ atmName }}</h3>
        <div class="flex justify-between">
            <div class="flex flex-col gap-1">
                <p>
                    Horário: <span>{{ horary }}</span>
                </p>
                <p class="flex gap-2 text-gray-500">
                    <span>{{ atmDistance }} Km</span><span>{{ atmTime }} min</span>
                </p>
                <div class="flex items-center gap-2 text-lg">
                    <span>Status:</span>
                    <span
                        class="status-icon"
                        :class="moneyStatus ? 'text-green-700' : 'text-red-700'"
                    >
                        <ion-icon name="cash-outline"></ion-icon>
                    </span>
                    |
                    <span
                        class="status-icon"
                        :class="paperStatus ? 'text-green-700' : 'text-red-700'"
                    >
                        <ion-icon name="document-text-outline"></ion-icon>
                    </span>
                </div>
            </div>
            <DirectionsButton />
        </div>
    </div>
</template>

<style scoped>
.status-icon {
    @apply flex justify-center items-center w-4 h-4;
}
</style>
