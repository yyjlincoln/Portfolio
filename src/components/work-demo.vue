<template>
  <div class="projects">
    <!-- Projects -->
    <text-styles
      type="medium primary_color extrabold"
      class="text-center mt-10"
    >
      Projects
    </text-styles>
    <div class="my-5">
      <!-- Project Cards -->
      <div class="flex flex-col justify-center md:flex-row flex-wrap w-full">
        <div
          v-for="project in $commondata.projects"
          :key="project.name"
          class="projectcard"
        >
          <project-card
            :project="project"
            class=""
            :brief="brief"
          ></project-card>
        </div>
      </div>
    </div>
    <text-styles
      type="medium primary_color extrabold"
      class="text-center mt-10"
    >
      Utilities / Plugins
    </text-styles>
    <div class="my-5">
      <div class="flex flex-col justify-center md:flex-row flex-wrap w-full">
        <div
          v-for="project in $commondata.utilities"
          :key="project.name"
          class="projectcard"
        >
          <project-card
            :project="project"
            class=""
            :brief="brief"
          ></project-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "./project-card.vue";
import TextStyles from "./text-styles.vue";
export default {
  components: {
    ProjectCard,
    TextStyles,
  },
  props: {
    brief: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>