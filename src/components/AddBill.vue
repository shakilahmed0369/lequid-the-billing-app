<template>
    <div class="z-0 her container mx-auto px-4 bg-primary">
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
    </div>
    <div class="item-section container mx-auto px-8 ">
        <div class="form mt-4">
            <form action="">
                    <div class="grid grid-cols-1 my-2">
                        <input class=" rounded-full focus:outline-none border-2 p-1 pl-3 border-secondary-deep bg-secondary" type="date" placeholder="date">
                    </div>
                    <div class="grid grid-cols-1 my-2">
                        <input class=" rounded-full focus:outline-none border-2 p-1 pl-3 border-secondary-deep bg-secondary" type="text" placeholder="Current E-unit">
                    </div>

                <div class="grid grid-cols-1 my-2 gap-3">
                    <input class="rounded-full focus:outline-none border-primary border-4 mt-2 p-1 pl-3 bg-primary text-white" type="Submit" value="Add Bill">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import useTimeAndDate from '../composable/dateAndTimeIndex';
import backIcon from '../assets/back.png'

export default {
    setup() {
        const { currentDate, weekday } = useTimeAndDate();
        return {
            weekday,
            currentDate,
            backIcon,
        }
    },

}
</script>

<style scoped>
.text-7xl.font-secondary.font-extralight.text-white {
    line-height: 0.5;
}
</style>