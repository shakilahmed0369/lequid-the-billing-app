<template>
    <div class="z-0 her container mx-auto px-4 bg-primary h-28">
        <div class="status flex items-center justify-between ">
            <router-link :to="{name: 'index'}">
            <div class="go-back flex items-center justify-center w-10 h-10 rounded-full bg-primary-light">
               <img :src="backIcon" class="w-5 h-5 mr-1 text-center " alt=""> 
            </div>
            </router-link>
            <div class="date text-right text-white text-lg py-3 ml-1 font-default font-light">
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

            <router-link v-for="flat in flats" :key="flat.id" :to="{name: 'flat.paidlist', params: {id: flat.id}}">
                <card 
                    :name="flat.name" 
                    :subname="flat.sub_name"
                    :icon="houseIcon"
                />
            </router-link>
        </div> 
    </div>
    <add-button-vue />
</template>

<script>
import useTimeAndDate from '../composable/dateAndTimeIndex';
import AddButtonVue from './AddButton.vue';
import houseIcon from '../assets/house.png'
import backIcon from '../assets/back.png'
import Card from './Card.vue';

import useFlat from '../composable/Flats';
import { onMounted } from '@vue/runtime-core';
export default {
    components: {
    AddButtonVue,
    Card
},

    setup() {
        const {currentDate, weekday} = useTimeAndDate(); 
        const {getFlats, flats} = useFlat();

        onMounted(getFlats)
        return {
            weekday,
            currentDate,
            houseIcon,
            backIcon,
            flats
        }
    },
    
}
</script>

<style scoped>
.text-7xl.font-secondary.font-extralight.text-white {
    line-height: 0.5;
}
</style>