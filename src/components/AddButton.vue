<template lang="">
    <div  class="add-more fixed bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class=" h-14 w-14 bg-primary rounded-full">
            <img :src="plusIcon" alt="">
        </div >
    </div>
</template>

<script>
import plusIcon from '../assets/plus.gif';
export default {
   setup() {
       
       return {
           plusIcon,
       }
   } 
}
</script>

<style lang="">
    
</style>