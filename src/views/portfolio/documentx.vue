<template>
  <div>
    <page-frame :reserve_nav_bar_space="false" class="frame">
      <project-common :project="project" class="display" framestyle="background-color: rgba(0,49,140,0.5)">
        <template slot="title">
          <div class="text-center flex flex-col">
            <text-styles type="extra_large white extrabold"
              >DocumentX DMS</text-styles
            >
            <text-styles type="large white bold"
              >Manage your documents like a pro.</text-styles
            >
            <ui-button-stack class="mt-10">
              <ui-button
                :asRouterLink="false"
                to="https://mcsrv.icu/"
                type="external_primary"
                >Check it out</ui-button
              >
              <ui-button
                :asRouterLink="false"
                to=""
                :linkClickPrevent="$func.utils.inlineScrollTo({
                  y: '#info',
                  offsetY: 100,
                })"
                type="docs_secondary"
                >Read More</ui-button
              >
            </ui-button-stack>
          </div>
        </template>
        <template slot="info">
          <div class="max-w-4xl">
            <text-styles type="medium bold documentx_secondary_color">
              DocumentX is my first MongoDB project, second Flask project &amp;
              second Vue PWA project
            </text-styles>
            <hr class="my-5" />
            <text-styles
              class="mt-5"
              type="large extrabold documentx_primary_color"
            >
              Demo
            </text-styles>
            <text-styles
              class="mt-5"
              type="medium bold documentx_secondary_color"
            >
              You can use username: sample, password: sample to access the system.

            </text-styles>
            <ui-button-stack class="mt-10">
              <ui-button
                :asRouterLink="false"
                to="https://mcsrv.icu/"
                type="external_primary"
                >Project Website</ui-button
              >
              <ui-button
                :asRouterLink="false"
                to="https://github.com/yyjlincoln/DocumentX-NG"
                type="github_primary"
                >Server Repository</ui-button
              >
              <ui-button
                :asRouterLink="false"
                to="https://github.com/yyjlincoln/DocumentX-NG-UI"
                type="github_primary"
                >Client (Web) Repository</ui-button
              >
            </ui-button-stack>
          </div>
        </template>
      </project-common>
    </page-frame>
  </div>
</template>

<script>
import gsap from "gsap";
import pageFrame from "../../components/page-frame.vue";
import TextStyles from "../../components/text-styles.vue";
import uiButton from "../../components/ui-button.vue";
import ProjectCommon from "./project-common.vue";
import UiButtonStack from "../../components/ui-button-stack.vue";
export default {
  components: { pageFrame, ProjectCommon, TextStyles, uiButton, UiButtonStack },
  data: () => ({
    timeline: null,
  }),
  computed: {
    project() {
      return this.$commondata.projects.documentx;
    },
  },
  methods: {},
  mounted() {
    this.timeline = gsap
      .timeline({
        defaults: { duration: 0.5, ease: "power3.out", stagger: 0.1 },
      })
      .from(".frame", { opacity: 0 })
      .from(".text-styles", { opacity: 0, y: "50" })
      .from(".ui-button", { opacity: 0, y: "25" }, "<+=50%");
  },
  async beforeRouteLeave(to, from, next) {
    await this.$func.reverseAnimation(this);
    next();
  },
};
</script>

<style>
</style>