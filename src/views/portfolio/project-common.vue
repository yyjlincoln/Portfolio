<template>
  <div>
    <div
      class="bg-cover bg-no-repeat"
      :style="'background-image: url(\'' + project.fullimage + '\');'"
    >
      <page-frame
        style="background-color: rgba(0, 0, 0, 0.5)"
        class="relative w-full h-full"
        :both_center="true"
        :reserve_nav_bar_space="false"
      >
        <div class="text-center">
          <slot name="title"></slot>
        </div>
      </page-frame>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import PageFrame from "../../components/page-frame.vue";
export default {
  components: {
    PageFrame,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>