<script setup lang="ts">
import OpenSidebar from "@/components/OpenSidebar.vue"
</script>
<template>
    <div class="flex justify-between items-center bg-white w-[20.5rem] h-14 mx-auto mt-4 p-1">
        <OpenSidebar />
        
        <form action="" class="flex items-center gap-1 h-full">
            <input type="search" placeholder="Pesquisar por área" class="h-12 w-[13.5rem]" />
            <div class="flex justify-center items-center h-12 w-12 text-2xl cursor-pointer">
                <ion-icon name="search-outline"></ion-icon>
            </div>
        </form>
    </div>
</template>


<style scoped></style>
