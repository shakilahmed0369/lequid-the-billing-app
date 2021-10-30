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

            <router-link :to="{name: 'shop.index'}">
                <card 
                    name="Shops" 
                    subname="Total: 4"
                    :icon="shopIcon"
                />
            </router-link>

            <router-link :to="{name: 'shop.index'}">
                <card 
                    name="Shops" 
                    subname="Total: 4"
                    :icon="shopIcon"
                />
            </router-link>
            <router-link :to="{name: 'shop.index'}">
                <card 
                    name="Shops" 
                    subname="Total: 4"
                    :icon="shopIcon"
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
    <add-button-vue />
</template>

<script>
import useTimeAndDate from '../composable/dateAndTimeIndex';
import AddButtonVue from './AddButton.vue';
import backIcon from '../assets/back.png'
import shopIcon from '../assets/store.png'

import Card from './Card.vue';
export default {
    components: {
    AddButtonVue,
    Card
},

    setup() {
        const {currentDate, weekday} = useTimeAndDate(); 
        return {
            weekday,
            currentDate,
            shopIcon,
            backIcon,
            shopIcon
        }
    },
    
}
</script>

<style scoped>
.text-7xl.font-secondary.font-extralight.text-white {
    line-height: 0.5;
}
</style>