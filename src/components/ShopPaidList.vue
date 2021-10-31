<template>
    <div class="z-0 her container mx-auto px-4 bg-primary h-32">
        <div class="status flex items-center justify-between">
            <router-link :to="{ name: 'index' }">
                <div
                    class="go-back flex items-center justify-center w-10 h-10 rounded-full bg-primary-light"
                >
                    <img :src="backIcon" class="w-5 h-5 mr-1 text-center" alt />
                </div>
            </router-link>
            <div class="date text-right text-white text-lg py-3 ml-1 font-default font-light">
                <span class>
                    {{ weekday }}
                    <br />
                    {{ currentDate }}
                </span>
            </div>
        </div>
        <div class="title">
            <span class=" text-white font-medium text-lg">Shop name</span>
        </div>
    </div>
    <div class="item-section container mx-auto px-8 ">
        <div class="head my-2">
            <span class=" text-md font-medium pb-2 border-b-2 border-primary font-default">Last Added</span>
        </div>
        <div class="">
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
            <list-card date="10-30-2021"/>
        </div>
    </div>
    <add-button-vue />
</template>

<script>
import useTimeAndDate from '../composable/dateAndTimeIndex';
import AddButtonVue from './AddButton.vue';
import ListCard from './ListCard.vue';
import backIcon from '../assets/back.png'
import shopIcon from '../assets/store.png'

export default {
    components: {
        AddButtonVue,
        ListCard
    },
    setup() {
        const { currentDate, weekday } = useTimeAndDate();
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