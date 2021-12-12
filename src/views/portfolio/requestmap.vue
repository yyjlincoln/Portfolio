<template>
  <div>
    <page-frame :reserve_nav_bar_space="false">
      <project-common :project="$commondata.utilities.requestMap">
        <template slot="title">
          <text-styles type="white extra_large extrabold"
            >RequestMap</text-styles
          >
          <text-styles type="white medium bold" class="mt-10"
            >Write once, run via multiple protocols.</text-styles
          >
          <text-styles type="white small extrabold" class="mt-2"
            >A micro framework.</text-styles
          >
          <ui-button-stack class="mt-10">
            <ui-button
              :asRouterLink="false"
              type="github_primary"
              to="https://github.com/yyjlincoln/requestmap"
              >Source Code</ui-button
            >
            <ui-button
              :asRouterLink="false"
              type="github_primary"
              to="https://github.com/time2meet/time2meet-server"
              >See it in action: The Time2Meet Project</ui-button
            >
            <ui-button
              :asRouterLink="false"
              type="external_secondary"
              to="https://time2meetapis.yyjlincoln.app/dev/endpoint-info"
              >Take a deeper look: Endpoint Map Structure</ui-button
            >
          </ui-button-stack>
        </template>
        <template slot="info">
          <div>
            <text-styles type="primary">Documentation</text-styles>
            <ui-area
              innerclass="flex flex-col flex-nowrap sm:flex-row justify-center md:justify-start"
              class="no-print"
            >
              <div class="flex flex-col justify-center">
                <div class="mx-auto text-center pr-4">
                  <text-styles type="large"> ⚠️ </text-styles>
                </div>
              </div>
              <div class="flex flex-col no-print">
                <text-styles type="primary_color extrabold smaller"
                  >Docs are coming soon
                </text-styles>
                <text-styles type="secondary_color bold smallerer"
                  >The project is actively being developed and there might be
                  frequent changes to the framework.
                </text-styles>
              </div>
            </ui-area>
            <ui-button-stack :centered="false">
              <ui-button
                :asRouterLink="false"
                type="github_primary"
                to="https://github.com/yyjlincoln/requestmap"
                >Source Code</ui-button
              >
              <ui-button
                :asRouterLink="false"
                type="github_primary"
                to="https://github.com/time2meet/time2meet-server"
                >See it in action: The Time2Meet Project</ui-button
              >
              <ui-button
                :asRouterLink="false"
                type="external_secondary"
                to="https://time2meetapis.yyjlincoln.app/dev/endpoint-info"
                >Take a deeper look: Endpoint Map Structure</ui-button
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
import UiArea from "../../components/ui-area.vue";
export default {
  components: {
    pageFrame,
    ProjectCommon,
    TextStyles,
    UiButton,
    UiButtonStack,
    UiArea,
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