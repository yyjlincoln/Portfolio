<template>
  <div>
    <page-frame :reserve_nav_bar_space="false">
      <project-common :project="$commondata.utilities.lincolnScript">
        <template slot="title">
          <text-styles type="white extra_large extrabold"
            >The LincolnScript</text-styles
          >
          <text-styles type="white large extrabold y_spacing"
            >A simple, asynchronous and event-driven script implemented in
            Swift.</text-styles
          >
          <ui-button-stack class="mt-10">
            <ui-button
              :asRouterLink="false"
              type="github_primary"
              to="https://github.com/yyjlincoln/DocumentX-iOS-Redacted/blob/master/DocumentX-Access/Instructions.swift"
              >Check it out in action</ui-button
            >
          </ui-button-stack>
        </template>
        <template slot="info">
          <div>
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
                  >This is a part of the DocumentX-iOS Project
                </text-styles>
                <text-styles type="secondary_color bold smallerer"
                  >The module will be isolated from the main project when it's
                  ready.
                </text-styles>
              </div>
            </ui-area>
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