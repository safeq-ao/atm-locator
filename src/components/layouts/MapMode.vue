<template>
    <div class="absolute top-0 left-0 w-full h-full">
        <GoogleMap
            api-key="AIzaSyAHZNwosIcay6KTDWdUnx9OO3hriw76DwI"
            style="width: 100%; height: 100%"
            :center="center"
            :zoom="11"
            :disableDefaultUi="true"
            :map-type-control="true"
            :map-type-control-options="{ position: 6 }"
            :zoom-control="true"
            class="overflow-hidden"
            @click="hideInfoWindow"
        >
            <CustomMarker
                v-for="(atm, i) in locations"
                :key="i"
                :options="{ position: atm.position, anchorPoint: 'BOTTOM_CENTER' }"
                @click="showInfoWindow(i)"
                class="relative"
            >
                <div>
                    <img :src="changeSrc(i)" width="20" height="20" />
                </div>
            </CustomMarker>
            <MyInfoWindow
                v-for="(atm, i) in filteredLocations"
                :key="i"
                v-show="infoWindowVisible"
                :atm="(selectedAtm as ATM)"
            />
        </GoogleMap>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { GoogleMap, CustomMarker } from 'vue3-google-map'
import { FAKE_ATMS } from '../../data/atms'
import hasMoneyPaper from '@/assets/images/has-money-paper.svg'
import noMoneyPaper from '@/assets/images/no-money-paper.svg'
import onlyMoney from '@/assets/images/only-money.svg'
import onlyPaper from '@/assets/images/only-paper.svg'
import MyInfoWindow from '../MyInfoWindow.vue'
import { type ATM } from '../../data/atms'

const center = ref({ lat: -8.936636, lng: 13.3009833 })

const changeSrc = (index = 0) => {
    if (FAKE_ATMS[index].moneyStatus && FAKE_ATMS[index].paperStatus) {
        return hasMoneyPaper
    } else if (FAKE_ATMS[index].moneyStatus) {
        return onlyMoney
    } else if (FAKE_ATMS[index].paperStatus) {
        return onlyPaper
    } else {
        return noMoneyPaper
    }
}

const locations = FAKE_ATMS
let selectedAtm = ref<ATM | null>(null)
const infoWindowVisible = ref(false)

const showInfoWindow = (index: number) => {
    selectedAtm.value = locations[index]
    infoWindowVisible.value = true // Mostrar a InfoWindow
    setTimeout(() => {
        selectedAtm.value = null // Limpar a seleção do ATM
        infoWindowVisible.value = false // Esconder a InfoWindow
    }, 5000)
}

const hideInfoWindow = () => {
  selectedAtm.value = null; // Limpar a seleção do ATM
  infoWindowVisible.value = false; // Esconder a InfoWindow
}

const filteredLocations = computed(() => {
    return locations.filter((atm: ATM) => selectedAtm?.value?.name === atm.name)
})
</script>

<style scoped></style>
