<template lang="">
  <div class="flex p-4 shadow-lg rounded-lg bg-secondary">
    <div class="icon">
      <img class="w-12 h-12" :src="icon" alt="" />
    </div>
    <div class="ml-3 self-center">
      <h3 class="-mb-2 self-center text-xl font-default">{{name}}</h3>
      <span class="font-default text-xs text-gray-500">{{subname}}</span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        name: String,
        subname: String,
        icon: String
    },
    setup() {

    }
};
</script>

<style lang=""></style>
