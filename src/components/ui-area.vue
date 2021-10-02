<template>
  <div>
    <div
      class="px-5 py-5 rounded-md w-fit flex flex-col mx-5 my-5 overflow-hidden"
      :class="bg"
    >
      <div class="flex flex-col flex-nowrap justify-center md:justify-start">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bg:{
      default: " bg-gray-100"
    }
  },
  components: {

  },
};
</script>

<style>
</style>