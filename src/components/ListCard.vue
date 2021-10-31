<template lang="">
  <div class="mb-3 p-5 shadow-lg rounded-lg bg-secondary">
    <div class="flex w-full justify-between ">
      <h3 class="-mb-2 text-md font-default">{{date}}</h3>
      <div class="flex">
        <div class="icon mx-2"><img class="w-5" :src="Eye" alt=""></div>
        <div class="icon mx-2"><img class="w-5" :src="Edit" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
import Eye from '../assets/view.png'
import Edit from '../assets/edit.png'
export default {
    props: {
        date: String,
    },
    setup() {
        return {
            Eye,
            Edit,
        }

    }
};
</script>

<style lang=""></style>
