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
                    <select name="type" id="" class="text-xs focus:outline-none  rounded-full border-2 p-2 border-secondary-deep bg-secondary">
                        <option value="">Chose Type</option>
                        <option value="flat" @click="handleType('flat')">Flat</option>
                        <option value="shop" @click="handleType('shop')">Shop</option>
                    </select>
                </div>

                <div class="" v-if="Type == 'flat'">
                    <div class="grid grid-cols-1 my-2">
                        <input class=" rounded-full focus:outline-none border-2 p-1 pl-3 border-secondary-deep bg-secondary" type="text" placeholder="Name">
                    </div>
                    <div class="grid grid-cols-1 my-2">
                        <input class=" rounded-full focus:outline-none border-2 p-1 pl-3 border-secondary-deep bg-secondary" type="text" placeholder="Sub Name">
                    </div>
                    <div class="grid grid-cols-2 my-2 gap-3">
                        <input class=" rounded-full focus:outline-none border-2 p-1 pl-3 border-secondary-deep bg-secondary" type="text" placeholder="Flat Bill">
                        <input class=" rounded-full focus:outline-none border-2 p-1 pl-3 border-secondary-deep bg-secondary" type="text" placeholder="E-unit Cost">
                    </div>
                    <div class="grid grid-cols-2 my-2 gap-3">
                        <input class=" rounded-full focus:outline-none border-2 p-1 pl-3 border-secondary-deep bg-secondary" type="text" placeholder="Gass Bill">
                        <input class=" rounded-full focus:outline-none border-2 p-1 pl-3 border-secondary-deep bg-secondary" type="text" placeholder="Gurbage Bill">
                    </div>
                </div>

                <div class="" v-if="Type == 'shop'">
                    <div class="grid grid-cols-1 my-2">
                        <input class=" rounded-full focus:outline-none border-2 p-1 pl-3 border-secondary-deep bg-secondary" type="text" placeholder="Name">
                    </div>
                    <div class="grid grid-cols-1 my-2">
                        <input class=" rounded-full focus:outline-none border-2 p-1 pl-3 border-secondary-deep bg-secondary" type="text" placeholder="Sub Name">
                    </div>
                    <div class="grid grid-cols-2 my-2 gap-3">
                        <input class=" rounded-full focus:outline-none border-2 p-1 pl-3 border-secondary-deep bg-secondary" type="text" placeholder="Bill">
                        <input class=" rounded-full focus:outline-none border-2 p-1 pl-3 border-secondary-deep bg-secondary" type="text" placeholder="Unit Cost">
                    </div>
                </div>

                <div class="grid grid-cols-1 my-2 gap-3">
                    <input class="rounded-full focus:outline-none border-primary border-4 mt-2 p-1 pl-3 bg-primary text-white" type="Submit" value="Create">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import useTimeAndDate from '../composable/dateAndTimeIndex';
import backIcon from '../assets/back.png'
import { ref } from '@vue/reactivity';

export default {
    setup() {
        const Type = ref('');
        const { currentDate, weekday } = useTimeAndDate();
        const handleType = (data) => {
            Type.value = data;
        }
        return {
            weekday,
            currentDate,
            backIcon,
            Type,
            handleType
        }
    },

}
</script>

<style scoped>
.text-7xl.font-secondary.font-extralight.text-white {
    line-height: 0.5;
}
</style>