<template>
  <div class="min-h-screen h-fit" :class="reserve_nav_bar_space ? 'pt-14' : ''">
    <div v-if="vertical_center" class="flex flex-col justify-center">
      <div>
        <slot></slot>
      </div>
    </div>
    <div v-else-if="horizontal_center" class="mx-auto">
      <slot></slot>
    </div>
    <div v-else-if="both_center" class="flex flex-row justify-center">
      <div class="mx-auto">
        <slot></slot>
      </div>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vertical_center: {
      type: Boolean,
      default: false,
    },
    horizontal_center: {
      type: Boolean,
      default: false,
    },
    both_center: {
      type: Boolean,
      default: false,
    },
    reserve_nav_bar_space: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
</style>