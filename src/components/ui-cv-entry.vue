<template>
  <div class="flex flex-row h-fit border-t ">
    <div
      class="
        flex flex-col
        justify-center
        break-words
        w-32
        md:w-64
        my-4
        py-2
        pagebreak-prevent
        text-left
      "
    >
      <text-styles type="secondary_color small bold text-wrap flex-shrink-0">{{
        label
      }}</text-styles>
    </div>
    <div class="ml-5 flex flex-col justify-center text-left">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import TextStyles from "./text-styles.vue";
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  components: {
    TextStyles,
  },
};
</script>

<style>
</style>