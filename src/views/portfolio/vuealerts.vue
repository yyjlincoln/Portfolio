<template>
  <div>
    <page-frame :reserve_nav_bar_space="false">
      <project-common :project="$commondata.utilities.vueAlerts">
        <template slot="title">
          <text-styles type="white extra_large extrabold"
            >Vue-Alerts</text-styles
          >
          <text-styles type="white large extrabold y_spacing"
            >Get that iOS feel in your Vue 2.x project.</text-styles
          >
          <ui-button-stack class="mt-10">
            <ui-button
              :asRouterLink="false"
              type="github_primary"
              to="https://github.com/yyjlincoln/Vue-Alerts"
              >Source Code</ui-button
            >
            <ui-button
              :asRouterLink="false"
              type="docs_primary"
              to="https://github.com/yyjlincoln/Vue-Alerts#readme"
              >Check out the docs</ui-button
            >
            <ui-button
              :asRouterLink="false"
              type="external_primary"
              to="https://www.npmjs.com/package/vue-alerts"
              >npm</ui-button
            >
            <ui-button
              :asRouterLink="false"
              type="github_secondary"
              to="https://yyjlincoln.github.io/vue-alerts-demo"
              >Demo</ui-button
            >
            <ui-button
              :asRouterLink="false"
              type="secondary"
              :linkClickPrevent="
                () => {
                  $alert.present(
                    'Hello from Vue-Alerts',
                    'This is a quick demo'
                  );
                }
              "
              to=""
              >Another Demo</ui-button
            >
          </ui-button-stack>
        </template>
        <template slot="info">
          <div>
            <ui-button-stack :centered="false">
              <ui-button
                :asRouterLink="false"
                type="github_primary"
                to="https://github.com/yyjlincoln/Vue-Alerts"
                >Github</ui-button
              >
              <ui-button
                :asRouterLink="false"
                type="docs_primary"
                to="https://github.com/yyjlincoln/Vue-Alerts#readme"
                >Check out the docs</ui-button
              >
              <ui-button
                :asRouterLink="false"
                type="external_primary"
                to="https://www.npmjs.com/package/vue-alerts"
                >npm</ui-button
              >
              <ui-button
                :asRouterLink="false"
                type="github_secondary"
                to="https://yyjlincoln.github.io/vue-alerts-demo"
                >Demo</ui-button
              >
              <ui-button
                :asRouterLink="false"
                type="secondary"
                :linkClickPrevent="
                  () => {
                    $alert.present(
                      'Hello from Vue-Alerts',
                      'This is a quick demo'
                    );
                  }
                "
                to=""
                >Another Demo</ui-button
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
import UiButtonStack from "../../components/ui-button-stack.vue";
import UiButton from "../../components/ui-button.vue";
import ProjectCommon from "./project-common.vue";
export default {
  components: {
    pageFrame,
    ProjectCommon,
    TextStyles,
    UiButton,
    UiButtonStack,
  },
  mounted() {
    this.timeline = gsap
      .timeline({ defaults: { ease: "power3.out", stagger: 0.2 } })
      .from(".text-styles", {
        y: 100,
        opacity: 0,
        duration: 0.5,
      })
      .from(
        "img",
        {
          y: 200,
          opacity: 0,
          duration: 0.5,
        },
        "<+25%"
      )
      .from(
        ".ui-area",
        {
          y: 200,
          opacity: 0,
          duration: 0.5,
        },
        "<+25%"
      )
      .from(
        ".ui-button",
        {
          y: 100,
          opacity: 0,
          duration: 0.5,
        },
        "<+25%"
      );
  },
  data: () => ({
    timeline: null,
  }),
  async beforeRouteLeave(to, from, next) {
    await this.$func.reverseAnimation(this);
    next();
  },
};
</script>

<style>
</style>