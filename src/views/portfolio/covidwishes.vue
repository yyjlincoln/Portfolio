<template>
  <div>
    <page-frame :reserve_nav_bar_space="false">
      <project-common :project="$commondata.projects.wishes">
        <template slot="title">
          <div class="text-center flex flex-col">
            <text-styles type="extra_large white bold"
              >Make a wish.</text-styles
            >
            <text-styles type="large white bold">It'll come true.</text-styles>
            <text-styles type="medium white bold" class="mt-20"
              >Coming early 2022.</text-styles
            >
          </div>
        </template>
      </project-common>
    </page-frame>
  </div>
</template>

<script>
import gsap from "gsap";
import PageFrame from "../../components/page-frame.vue";
import TextStyles from "../../components/text-styles.vue";
import ProjectCommon from "./project-common.vue";
export default {
  components: {
    PageFrame,
    TextStyles,
    ProjectCommon,
  },
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