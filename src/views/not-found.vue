<template>
  <div>
    <page-frame
      :vertical_center="true"
      :reserve_nav_bar_space="false"
      :horizontal_spacing="true"
    >
      <text-styles type="secondary_color extrabold larger" class="title"
        >We could not find the page "{{ $route.path }}"</text-styles
      >
      <text-styles type="primary" class="subtitle"
        >Oops. That's an error.</text-styles
      >
      <text-styles
        type="smaller extrabold secondary_color y_spacing flex flex-col"
      >
        <div>
          <router-link to="/" class="button">
            <box-icon
              type="solid"
              name="right-arrow-circle"
              color="#4cb963"
              class="mr-1"
            ></box-icon
            >Home
          </router-link>
        </div>
        <div>
          <a href="#" @click.prevent="$router.go(-1)" class="button">
            <box-icon
              type="solid"
              name="right-arrow-circle"
              color="#4cb963"
              class="mr-1"
            ></box-icon
            >Back
          </a>
        </div>
      </text-styles>
    </page-frame>
  </div>
</template>

<script>
import pageFrame from "../components/page-frame.vue";
import TextStyles from "../components/text-styles.vue";
import gsap from "gsap";

export default {
  components: { pageFrame, TextStyles },
  data: () => ({
    timeline: null,
  }),
  mounted() {
    this.timeline = gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .from(".title", {
        translateY: "100%",
        opacity: 0,
        duration: 0.5,
      })
      .from(
        ".subtitle",
        {
          translateY: "100%",
          opacity: 0,
          duration: 1,
        },
        "-=50%"
      )
      .from(
        ".button",
        {
          translateY: "100%",
          opacity: 0,
          duration: 1,
        },
        "<"
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