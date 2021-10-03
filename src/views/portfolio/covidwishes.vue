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
        class="relative w-full h-full"
        :both_center="true"
        :reserve_nav_bar_space="false"
      >
        <div class="text-center">
          <text-styles type="extra_large white bold">Make a wish.</text-styles>
          <text-styles type="large white bold"
            >It'll come true.</text-styles
          >
          <text-styles type="medium white bold" class="mt-20"
            >Coming early 2022.</text-styles
          >
        </div>
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