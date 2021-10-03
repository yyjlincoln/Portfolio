<template>
  <div>
    <page-frame :reserve_nav_bar_space="false">
      <project-common :project="$commondata.projects.wishes">
        <template slot="title">
          <div class="text-center flex flex-col">
            <text-styles type="extra_large white bold"
              >Make a wish.</text-styles
            >
            <text-styles type="large white bold">It'll come true.</text-styles>
            <text-styles type="medium white bold" class="mt-20"
              >Coming early 2022.</text-styles
            >
          </div>
        </template>
        
      </project-common>
    </page-frame>
  </div>
</template>

<script>
import PageFrame from "../../components/page-frame.vue";
import TextStyles from "../../components/text-styles.vue";
import ProjectCommon from "./project-common.vue";
export default {
  components: {
    PageFrame,
    TextStyles,
    ProjectCommon,
  },
};
</script>

<style>
</style>