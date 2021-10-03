<template>
  <div>
    <page-frame :reserve_nav_bar_space="false" class="frame">
      <project-common :project="project">
        <template slot="title">
          <div class="text-center flex flex-col">
            <text-styles type="extra_large white extrabold"
              >DocumentX DMS</text-styles
            >
            <text-styles type="large white bold"
              >Manage your documents like a pro.</text-styles
            >
            <ui-button
              class="mt-10"
              :asRouterLink="false"
              to="https://mcsrv.icu/"
              type="primary"
              >Check it out</ui-button
            >
          </div>
        </template>
      </project-common>
    </page-frame>
  </div>
</template>

<script>
import pageFrame from "../../components/page-frame.vue";
import TextStyles from "../../components/text-styles.vue";
import uiButton from "../../components/ui-button.vue";
import ProjectCommon from "./project-common.vue";
export default {
  components: { pageFrame, ProjectCommon, TextStyles, uiButton },
  data: () => ({
    timeline: null
  }),
  computed: {
    project() {
      return this.$commondata.projects.documentx;
    },
  },
  methods: {},
};
</script>

<style>
</style>