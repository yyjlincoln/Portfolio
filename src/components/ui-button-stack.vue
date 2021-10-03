<template>
  <div
    class="flex flex-col sm:flex-row w-full flex-wrap"
    :class="centered ? 'sm:justify-center' : ''"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    centered: {
      default: true,
    },
  },
};
</script>

<style>
</style>