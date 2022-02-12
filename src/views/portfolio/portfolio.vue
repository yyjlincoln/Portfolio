<template>
  <div>
    <page-frame :horizontal_spacing="true" :reserve_nav_bar_space="true">
      <!-- background-image: url('https://static.yyjlincoln.com/yyjlincoln/documentx-logo.png') -->
      <div class="mt-20">
        <div>
          <!-- Heading -->
          <text-styles type="larger primary_color extrabold" class="heading"
            >Portfolio</text-styles
          >
          <text-styles type="large secondary_color extrabold" class="heading"
            >A list of projects that I've made.</text-styles
          >
        </div>
        <ui-area
          innerclass="flex flex-col flex-nowrap sm:flex-row justify-center md:justify-start"
          class="infoarea"
        >
          <div class="flex flex-col justify-center">
            <div class="mx-auto text-center pr-4">
              <text-styles type="large"> 👨🏻‍💻 </text-styles>
            </div>
          </div>
          <div class="flex flex-col">
            <text-styles type="primary_color extrabold small"
              >I learn coding by working on projects</text-styles
            >
            <text-styles type="secondary_color bold smaller"
              >Therefore the quality of code in those projects do not represent
              my current ability - including recent commits in old projects. It
              would take a long time to fix them and time is what I don't have
              as an HSC student.</text-styles
            >
          </div>
        </ui-area>
      </div>
      <div>
        <work-demo></work-demo>
      </div>
    </page-frame>
  </div>
</template>

<script>
import gsap from "gsap";
import PageFrame from "../../components/page-frame.vue";
// import ProjectCard from "../../components/project-card.vue";
import TextStyles from "../../components/text-styles.vue";
import UiArea from "../../components/ui-area.vue";
import WorkDemo from "../../components/work-demo.vue";
// import UiPageBlock from "../../components/ui-page-block.vue";
export default {
  components: { PageFrame, TextStyles, UiArea, WorkDemo },
  data: () => ({
    timeline: null,
  }),
  mounted() {
    this.timeline = gsap
      .timeline({
        defaults: {
          ease: "power3.out",
        },
      })
      .from(
        ".heading",
        {
          opacity: 0,
          translateY: 100,
          duration: 0.5,
          stagger: 0.2,
        },
        ""
      )
      .from(
        ".infoarea",
        {
          opacity: 0,
          yPercent: 100,
          duration: 0.5,
          stagger: 0.2,
        },
        "-=50%"
      )
      .from(
        ".projectcards",
        {
          opacity: 0,
          yPercent: 100,
          duration: 0.5,
          stagger: 0.2,
        },
        "-=50%"
      )
      .from(
        ".projectcard",
        {
          opacity: 0,
          yPercent: 100,
          duration: 0.5,
          stagger: 0.2,
        },
        "-=50%"
      );
  },
  async beforeRouteLeave(to, from, next) {
    await this.$func.reverseAnimation(this);
    next();
  },
};
</script>

<style>
</style>