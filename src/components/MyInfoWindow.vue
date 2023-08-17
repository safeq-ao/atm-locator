<template>
    <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 w-72 mt-1 px-2 py-3 bg-white rounded-lg hover:cursor-pointer z-[9999] lg:w-96"
        v-if="atm && atm"
    >
        <h3>{{ atm.name }}</h3>
        <div class="flex justify-between items-end">
            <div class="flex flex-col gap-1">
                <p class="flex gap-2 text-gray-500">
                    <span>{{ atm.distance }} Km</span><span>{{ atm.time }} min</span>
                </p>
                <div class="flex items-center gap-2 text-lg">
                    <span>Status:</span>
                    <span
                        class="status-icon"
                        :class="atm.moneyStatus ? 'text-green-700' : 'text-red-700'"
                    >
                        <ion-icon name="cash-outline"></ion-icon>
                    </span>
                    |
                    <span
                        class="status-icon"
                        :class="atm.paperStatus ? 'text-green-700' : 'text-red-700'"
                    >
                        <ion-icon name="document-text-outline"></ion-icon>
                    </span>
                </div>
            </div>
            <DirectionsButton />
        </div>
    </div>
</template>

<script setup lang="ts">
interface ATM {
    name: string
    horary: string
    distance: string
    time: string
    moneyStatus: boolean
    paperStatus: boolean
    position: {
        lat: number
        lng: number
    }
}

const props = defineProps({
    atm: Object as () => ATM
})
</script>
