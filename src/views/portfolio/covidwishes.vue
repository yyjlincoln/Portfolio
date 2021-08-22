<template>
  <div>
    <!-- COVID Wishes -->
    <div
      class="bg-gray-900 bg-cover bg-no-repeat w-full h-full"
      style="
        background-image: url('https://static.nowask.me/covidwishes-bg.jpg');
      "
    >
      <page-frame
        style="background-color: rgba(0, 0, 0, 0.5)"
        class="relative w-full h-full" :both_center="true"
      >
            <text-styles class="text-white">Coming soon.</text-styles>
      </page-frame>
    </div>
  </div>
</template>

<script>
import PageFrame from "../../components/page-frame.vue";
import TextStyles from "../../components/text-styles.vue";
export default {
  components: {
    PageFrame,
    TextStyles,
  },
};
</script>

<style>
</style>