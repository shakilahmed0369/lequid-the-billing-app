<template>
    <div class="z-0 hero  container mx-auto px-4 bg-gray-500 h-64 relative">
        <div class="status absolute top-1/4">
            <div class="time">
                <span class="text-7xl font-mono font-extralight text-white">
                    {{currentTime}}
                </span>
            </div>
            <div class="date text-white text-2xl ml-1 font-default font-light">
                <span class="">
                    {{weekday}}
                    <br>
                    {{currentDate}}
                </span>
            </div>
        </div>
    </div>
    <div class="item-section container mx-auto px-8 relative -mt-8">
        <div class="grid grid-cols-2 gap-3">
            <div class="flex p-4 shadow-lg rounded-lg bg-white">
                <div class="icon">
                    <img class="w-14" :src="houseIcon" alt="">
                </div>
                <div class=" ml-4 self-center" >
                  <h3 class="-mb-2 self-center text-xl font-default">Flats</h3>  
                  <span class="font-default text-xs text-gray-500">Total : 4</span>
                </div>
            </div>
            <div class="flex p-4 shadow-lg rounded-lg bg-white">
                <div class="icon">
                    <img class="w-14" :src="shopIcon" alt="">
                </div>
                <div class=" ml-4 self-center" >
                  <h3 class="-mb-2 self-center text-xl font-default">Flats</h3>  
                  <span class="font-default text-xs text-gray-500">Total : 4</span>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import useTimeAndDate from '../composable/dateAndTimeIndex';
import { onMounted } from 'vue';
import shopIcon from '../assets/store.png'
import houseIcon from '../assets/house.png'
export default {

    setup() {
        const {currentTime, showTime, currentDate, weekday} = useTimeAndDate(); 
        onMounted(showTime)

        return {
            weekday,
            currentDate,
            currentTime,
            shopIcon,
            houseIcon,
        }
    },
    
}
</script>

<style>

</style>