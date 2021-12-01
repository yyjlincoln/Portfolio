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
                to="https://apps.apple.com/us/app/id1574456295"
                type="external_primary"
                >Available on the App Store</ui-button
              >
              <ui-button
                :asRouterLink="false"
                to="https://static.yyjlincoln.com/documentx/mac-1.14.1.zip"
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
            <text-styles type="very_small white bold" class="my-3">
              Designed for iPad. Works on iPhone, iPad and MacOS.
            </text-styles>
          </div>
        </template>
        <template slot="info">
          <div class="max-w-4xl">
            <text-styles type="medium bold light_gray">
              This is my first Swift project.
            </text-styles>
            <text-styles class="mt-5" type="large extrabold white">
              App Privacy Policy
            </text-styles>
            <text-styles class="mt-5" type="medium bold light_gray">
              Your credentials are securely stored in our server. While
              authenticating, your password is first hashed using SHA-256, and
              the resultant hash is sent to the server which is hashed again
              with a random 256-bit salt using SHA-256. The server only stores
              the final hash and the salt. At no point is your password sent to
              the server.
            </text-styles>
            <text-styles class="mt-5" type="medium bold light_gray">
              All documents uploaded to DocumentX are stored on our servers,
              backed up using DigitalOcean Object Storage. It will not be
              visible to any other users on this platform unless you share it
              with them or make it public. You have the option to delete them at
              any time by visiting the mcsrv.icu.
            </text-styles>
            <text-styles class="mt-5" type="medium bold light_gray">
              If you would like to delete your account, request a copy for your
              data (including documents you own), please contact us at
              legal@yyjlincoln.com
            </text-styles>
            <text-styles class="mt-5" type="medium bold light_gray">
              Want to learn more about this? Check out the source code.
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
                security reasons, you will only be able to access a redacted
                copy of the original repository.
              </text-styles>
            </ui-area>
            <ui-button-stack class="mt-10" :centered="false">
              <ui-button
                :asRouterLink="false"
                to="https://apps.apple.com/us/app/id1574456295"
                type="external_primary"
                >View it on the App Store</ui-button
              >
              <ui-button
                :asRouterLink="false"
                to="https://testflight.apple.com/join/aUScGGas"
                type="external_primary"
                >Join the TestFlight (Beta)</ui-button
              >
              <ui-button
                :asRouterLink="false"
                to="https://static.yyjlincoln.com/documentx/mac-1.14.1.zip"
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
                to="https://github.com/yyjlincoln/DocumentX-iOS-Redacted"
                type="github_secondary"
                >Client Repository</ui-button
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