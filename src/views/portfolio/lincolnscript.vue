<template>
  <div>
    <page-frame :reserve_nav_bar_space="false">
      <project-common :project="$commondata.projects.khhspsn">
        <template slot="title">
          <text-styles type="white extra_large extrabold"
            >The LincolnScript</text-styles
          >
          <text-styles type="white large extrabold y_spacing"
            >A simple, asynchronous and event-driven script implemented in Swift.</text-styles
          >
          <ui-button-stack class="mt-10">
            <ui-button
              :asRouterLink="false"
              type="github_secondary"
              to="https://github.com/yyjlincoln/KHHS-PushNotifications"
              >Github (Initial prototype, written in 6 hours)</ui-button
            >
          </ui-button-stack>
        </template>
        <template slot="info">
          <div>
            <text-styles type="primary khhspsn_primary_color"
              >Images</text-styles
            >
            <div
              class="my-5"
              v-for="image in $commondata.projects.khhspsn.photos"
              :key="image"
            >
              <img :src="image" />
            </div>
            <text-styles type="primary khhspsn_primary_color"
              >Source Code</text-styles
            >
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
                  >This is a prototype done in the shortest amount of time
                  possible.
                </text-styles>
                <text-styles type="secondary_color bold smallerer"
                  >The code quality is quite bad.
                </text-styles>
              </div>
            </ui-area>
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
                  >This is not the latest version.</text-styles
                >
                <text-styles type="secondary_color bold smallerer"
                  >The latest version (which produced above screenshots) was
                  lost as the project was discontineud.
                </text-styles>
              </div>
            </ui-area>
            <ui-button-stack :centered="false">
              <ui-button
                :asRouterLink="false"
                type="github_primary"
                to="https://github.com/yyjlincoln/KHHS-PushNotifications"
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