<template>
  <router-link :to="project.link">
    <div
      class="rounded-md px-8 py-8 w-80 mx-auto my-4 py-4 md:mx-4 project-card pagebreak-prevent"
      :class="project.bg != undefined ? project.bg : 'bg-gray-100'"
      :style="project.bgstyle"
    >
      <div class="mx-auto" v-if="project.image">
        <img
          :src="project.image"
          class="mx-auto object-contain w-full h-40 rounded-md"
        />
      </div>
      <div class="flex flex-col text-center mt-4">
        <text-styles
          :type="
            'extrabold small ' + (project.nametype ? project.nametype : '')
          "
          >{{ project.name }}</text-styles
        >
        <div class="my-4" v-if="!brief">
          <div
            v-for="description in project.description"
            :key="description"
            class="my-2"
          >
            <text-styles
              :type="
                'bold smaller ' +
                (project.descriptiontype ? project.descriptiontype : '')
              "
              >{{ description }}</text-styles
            >
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import textStyles from "@/components/text-styles.vue";
export default {
  components: { textStyles },
  props: {
    project: {
      default: {},
    },
    brief:{
      default: false
    }
  },
};
</script>

<style>
</style>