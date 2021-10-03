<template>
  <div>
    <page-frame :reserve_nav_bar_space="false" class="frame">
      <project-common
        :project="project"
        class="display"
        framestyle="background: linear-gradient(90deg,rgba(219, 218, 249, 0.9),rgba(235, 213, 235, 0.9))"
      >
        <template slot="title">
          <div class="text-center flex flex-col">
            <text-styles type="extra_large nam_primary_color extrabold"
              >Nowask.me</text-styles
            >
            <text-styles type="large nam_secondary_color bold">
              Anonymous Q&amp;A Platform
            </text-styles>
            <ui-button-stack class="mt-10">
              <ui-button
                :asRouterLink="false"
                to="https://nowask.me/"
                type="external_primary"
                >Check it out</ui-button
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
            <text-styles type="medium bold nam_secondary_color">
              Nowaskme is my first VueSax + TailwindCSS project, third Flask
              project &amp; third Vue PWA project
            </text-styles>
            <hr class="my-5" />
            <text-styles class="mt-5" type="large extrabold nam_primary_color">
              Demo
            </text-styles>
            <text-styles class="mt-5" type="medium bold nam_secondary_color">
              Please register your own account using your email.
            </text-styles>
            <ui-button-stack class="mt-10" :centered="false">
              <ui-button
                :asRouterLink="false"
                to="https://nowask.me/"
                type="external_primary"
                >Project Website</ui-button
              >
              <ui-button
                :asRouterLink="false"
                to="https://github.com/yyjlincoln/NowAskMe-Server"
                type="github_secondary"
                >Server Repository</ui-button
              >
              <ui-button
                :asRouterLink="false"
                to="https://github.com/yyjlincoln/NowAskMe-Frontend"
                type="github_secondary"
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
      return this.$commondata.projects.nowaskme;
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