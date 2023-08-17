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
        >
            <CustomMarker
                v-for="(atm, i) in locations"
                :key="i"
                :options="{ position: atm.position, anchorPoint: 'BOTTOM_CENTER' }"
            >
                <div>
                    <img :src="changeSrc(i)" width="20" height="20" />
                </div>
            </CustomMarker>
        </GoogleMap>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GoogleMap, CustomMarker } from 'vue3-google-map'
import { FAKE_ATMS } from '../../data/atms'
import hasMoneyPaper from '@/assets/images/has-money-paper.svg'
import noMoneyPaper from '@/assets/images/no-money-paper.svg'
import onlyMoney from '@/assets/images/only-money.svg'
import onlyPaper from '@/assets/images/only-paper.svg'

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
</script>
