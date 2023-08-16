<template>
    <div class="absolute top-0 left-0 w-full h-full">
        <GoogleMap
            api-key="AIzaSyAHZNwosIcay6KTDWdUnx9OO3hriw76DwI"
            style="width: 100%; height: 100%"
            :center="center"
            :zoom="11"
            :disableDefaultUi="true"
            :mapTypeControl="true"
            :mapTypeControlOptions="{position: 6}"
            :zoomControl="true"
            zoomControlPosition="4"
        >
        </GoogleMap>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
    components: { GoogleMap },
    setup() {
        const center = { lat: -8.936636, lng: 13.3009833 }
        const markerOptions = { position: center, label: 'L', title: 'LADY LIBERTY' }

        return { center, markerOptions }
    }
})
</script>
