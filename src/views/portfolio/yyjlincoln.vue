<template>
  <div>
    <page-frame :reserve_nav_bar_space="false">
      <project-common :project="$commondata.projects.yyjlincoln">
        <template slot="title">
          <text-styles type="white extra_large extrabold"
            >About this site</text-styles
          >
          <text-styles type="white large extrabold"
            >My Personal Website &amp; Digital Portfolio</text-styles
          >
          <ui-button-stack class="mt-10">
            <ui-button to="/">Home</ui-button>
            <ui-button
              :asRouterLink="false"
              type="github_secondary"
              to="https://github.com/yyjlincoln/yyjlincoln.com"
              >Github</ui-button
            >
          </ui-button-stack>
        </template>
        <template slot="info">
          <div>
            <text-styles type="primary">Source Code</text-styles>
            <ui-button-stack>
                
              <ui-button
                :asRouterLink="false"
                type="github_primary"
                to="https://github.com/yyjlincoln/yyjlincoln.com"
                >Github</ui-button
              >
            </ui-button-stack>
          </div>
        </template>
      </project-common>
    </page-frame>
  </div>
</template>

<script>
import pageFrame from "../../components/page-frame.vue";
import TextStyles from "../../components/text-styles.vue";
import UiButtonStack from "../../components/ui-button-stack.vue";
import UiButton from "../../components/ui-button.vue";
import ProjectCommon from "./project-common.vue";
export default {
  components: { pageFrame, ProjectCommon, TextStyles, UiButton, UiButtonStack },
};
</script>

<style>
</style>