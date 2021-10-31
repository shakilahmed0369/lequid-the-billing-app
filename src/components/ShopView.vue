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
        <div class="mt-4">
            <div class="mb-2">
                <span class="">Date: 31/10/21</span>
            </div>
            <div class="card border-2 border-secondary-deep py-4 rounded-lg">
                <div class="mx-4">
                    <div class="flex justify-between">
                        <span class=" font-semibold">
                            current unit
                        </span>
                        <span>
                            1000
                        </span>
                    </div>
                    <div class="flex justify-between">
                        <span class=" font-semibold">
                            prev unit (10/9/21)
                        </span>
                        <span>
                           (-) 500 
                        </span>
                    </div>
                    <div class="pt-4">
                    <hr class="px-2 border-secondary-deep">
                    </div>
                    <div class="flex justify-between">
                        <span class=" font-semibold">
                            Used units
                        </span>
                        <span>
                           500 
                        </span>
                    </div>
                    <div class="flex justify-between">
                        <span class=" font-semibold">
                            per unit cost
                        </span>
                        <span>
                           (x) 12
                        </span>
                    </div>
                    <div class="pt-2">
                    <hr class="px-2 border-secondary-deep">
                    </div>
                    <div class="flex justify-between">
                        <span class=" font-semibold">
                            Total Electrocity bill:
                        </span>
                        <span>
                            10000
                        </span>
                    </div>
                    <div class="flex justify-between">
                        <span class=" font-semibold">
                            shop bill:
                        </span>
                        <span>
                            9500
                        </span>
                    </div>
                    <div class="flex justify-between">
                        <span class=" text-primary font-semibold">
                            Due
                        </span>
                        <span class="text-primary">
                            500
                        </span>
                    </div>
                    <div class="pt-2">
                    <hr class="px-2 border-secondary-deep">
                    </div>
                    <div class="flex justify-between">
                        <span class=" font-semibold">
                            Total bill
                        </span>
                        <span>
                            19500
                        </span>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <span>Due Pending : 100</span>
            </div>
            <div class="flex justify-between">
                <input type="text" class="p-1 w-full border-2 border-secondary-deep rounded-l-full mt-4">
                <input type="submit" class="p-1 bg-primary border-2 border-primary rounded-r-full mt-4 text-white" value="Pay bill">
            </div>
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