<template>
  <div>
    <page-frame :reserve_nav_bar_space="false" class="frame">
      <project-common :project="project" class="display">
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
import gsap from "gsap";
import pageFrame from "../../components/page-frame.vue";
import TextStyles from "../../components/text-styles.vue";
import uiButton from "../../components/ui-button.vue";
import ProjectCommon from "./project-common.vue";
export default {
  components: { pageFrame, ProjectCommon, TextStyles, uiButton },
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
      .from(".text-styles", { opacity: 0, y: "-50" })
      .from(".ui-button", { opacity: 0, y: "-25" }, "-=50%")
  },
  async beforeRouteLeave(to, from, next) {
    await this.$func.reverseAnimation(this);
    next();
  },
};
</script>

<style>
</style>