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
    <div
      id="info"
      class="
        mx-auto
        text-center
        sm:text sm:text-left
        sm:mx-10
        md:mx-15
        lg:mx-20
        my-20
        px-5
      "
    >
      <div>
        <text-styles
          :type="
            'extrabold large ' +
            (project.nametype ? project.nametype : 'primary_color')
          "
          >Project Information</text-styles
        >
        <text-styles type="secondary" class="mt-5">
          <div
            v-for="description in project.description"
            :key="description"
            class="my-2"
          >
            <text-styles
              :type="
                'bold medium ' +
                (project.descriptiontype ? project.descriptiontype : '')
              "
              >{{ description }}</text-styles
            >
          </div>
        </text-styles>
      </div>
      <div class="mt-10">
        <text-styles
          :type="
            'extrabold large ' +
            (project.nametype ? project.nametype : 'primary_color')
          "
          >Development Status</text-styles
        >
        <text-styles
          :type="
            'bold medium ' +
            (project.descriptiontype ? project.descriptiontype : '')
          "
          class="mt-5"
        >
          {{ project.status }}
        </text-styles>
      </div>
      <!-- Additional Information -->
      <div class="mt-8">
        <slot name="info"> </slot>
      </div>
    </div>
    <div>
      <!-- Custom info -->
      <slot></slot>
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