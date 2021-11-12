<template>
    <div class="z-0 hero  container mx-auto px-4 bg-primary h-64 relative">
        <div class="status mt-5 absolute top-1/4">
            <div class="time">
                <span class="text-7xl font-secondary font-extralight text-white">
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
            <router-link :to="{name: 'flat.index'}">
                <card 
                    name="Flats" 
                    subname="Total: 4"
                    :icon="houseIcon"
                />
            </router-link>

            <router-link :to="{name: 'shop.index'}">
                <card 
                    name="Shops" 
                    subname="Total: 4"
                    :icon="shopIcon"
                />
            </router-link>
        </div> 
    </div>
    <router-link :to="{name: 'create'}">
        <add-button-vue />
    </router-link>
</template>

<script>
import useTimeAndDate from '../composable/dateAndTimeIndex';
import { onMounted } from 'vue';
import AddButtonVue from './AddButton.vue';
import shopIcon from '../assets/store.png'
import houseIcon from '../assets/house.png'
import Card from './Card.vue';
export default {
    components: {
    AddButtonVue,
    Card
},

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

<style scoped>
.text-7xl.font-secondary.font-extralight.text-white {
    line-height: 0.5;
}
</style>