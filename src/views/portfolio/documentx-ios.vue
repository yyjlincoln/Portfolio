<template>
  <div>
    <page-frame
      :reserve_nav_bar_space="false"
      class="frame"
      style="background-color: #0e141b"
    >
      <project-common :project="project" class="display">
        <template slot="title">
          <div class="text-center flex flex-col px-2">
            <text-styles type="extra_large white extrabold"
              >DocumentX for Apple Platforms</text-styles
            >
            <text-styles type="large white bold">
              Manage your documents on the go
            </text-styles>
            <ui-button-stack class="mt-10">
              <ui-button
                :asRouterLink="false"
                to="https://testflight.apple.com/join/aUScGGas"
                type="external_primary"
                >Join iOS/iPadOS Beta</ui-button
              >
              <ui-button
                :asRouterLink="false"
                to="https://yyjlincoln-public-assets.nyc3.cdn.digitaloceanspaces.com/documentx/mac-1.14.1.zip"
                type="external_primary"
                >MacOS Download</ui-button
              >
              <ui-button
                :asRouterLink="false"
                to=""
                :linkClickPrevent="
                  $func.utils.inlineScrollTo({
                    y: '#info',
                    offsetY: 100,
                  })
                "
                type="docs_secondary"
                >Read More</ui-button
              >
            </ui-button-stack>
          </div>
        </template>
        <template slot="info">
          <div class="max-w-4xl">
            <text-styles type="medium bold light_gray">
              This is my first Swift project.
            </text-styles>
            <hr class="my-5" />
            <text-styles class="mt-5" type="large extrabold white">
              Demo
            </text-styles>
            <text-styles class="mt-5" type="medium bold light_gray">
              Please use username: example; password: example to log in.
            </text-styles>
            <ui-area bg="bg-gray-800">
              <text-styles type="medium bold white"> Notes </text-styles>
              <text-styles type="small bold light_gray">
                The client app contains a critical key used for encryption. For
                security reasons, you won't be able to access the repository on
                GitHub. A redacted version of the repository is available for
                download.
              </text-styles>
            </ui-area>
            <ui-button-stack class="mt-10" :centered="false">
              <ui-button
                :asRouterLink="false"
                to="https://testflight.apple.com/join/aUScGGas"
                type="external_primary"
                >Access via Apple TestFlight</ui-button
              >
              <ui-button
                :asRouterLink="false"
                to="https://yyjlincoln-public-assets.nyc3.cdn.digitaloceanspaces.com/documentx/mac-1.14.1.zip"
                type="external_primary"
                >MacOS Version (download)</ui-button
              >
              <ui-button
                :asRouterLink="false"
                to="https://github.com/yyjlincoln/DocumentX-NG"
                type="github_secondary"
                >Server Repository</ui-button
              >
              <ui-button
                :asRouterLink="false"
                to="https://yyjlincoln-public-assets.nyc3.cdn.digitaloceanspaces.com/yyjlincoln/DocumentXAccess-Redacted.zip"
                type="external_secondary"
                >Client Source Code (Download)</ui-button
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
import UiArea from "../../components/ui-area.vue";
export default {
  components: {
    pageFrame,
    ProjectCommon,
    TextStyles,
    uiButton,
    UiButtonStack,
    UiArea,
  },
  data: () => ({
    timeline: null,
  }),
  computed: {
    project() {
      console.log(this.$commondata.projects.documentxios);
      return this.$commondata.projects.documentxios;
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