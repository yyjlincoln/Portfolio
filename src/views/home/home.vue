<template>
  <div>
    <!-- Root -->
    <div class="" style="z-index: 0">
      <div
        class="flex flex-col pt-20 sm:mt-0 sm:flex-row min-h-screen h-fit justify-space-between 2xl:justify-center"
      >
        <!-- First full screen -->
        <div
          class="flex flex-col h-fit justify-center ml-10 sm:ml-20 md:ml-40 mr-10"
        >
          <div>
            <div
              class="text-4xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl"
            >
              <!-- Title -->
              <div style="color: #4cb963" class="title">Hello,</div>
              <div style="color: #157f1f" class="title">I'm Lincoln.</div>
            </div>
            <div
              class="text-lg sm:text-xl md:text-2xl font-extrabold mt-4 md:mt-0 max-w-4xl"
            >
              <div class="subtitle md:mt-4" style="color: #84cf95">
                Software Engineer (Full Stack) @ Learnable
              </div>
              <div class="subtitle" style="color: #84cf95">
                Software Engineer (Performance Optimisation) @ Sunswift Racing
              </div>
              <div style="color: #84cf95" class="subtitle">
                UNSW Computer Science + Commerce
              </div>
            </div>
          </div>
          <ui-button-stack class="mt-8 max-w-2xl" :centered="false">
            <!-- Buttons -->
            <ui-button to="/about-me">About Me</ui-button>
            <ui-button to="/portfolio">My Portfolio</ui-button>
            <ui-button
              :asRouterLink="false"
              to="https://redirect.yyjlincoln.com/resume"
              type="external_primary"
              :linkClickPrevent="
                $func.utils.inlineOpenInNewWindow(
                  'https://redirect.yyjlincoln.com/resume'
                )
              "
              >Download Resume</ui-button
            >
            <ui-button to="/connect" type="secondary"
              >Connect with me</ui-button
            >
          </ui-button-stack>
        </div>
        <div
          class="mx-auto my-10 sm:mx-10 flex flex-col justify-center sm:hidden md:flex"
        >
          <div class="w-fit h-fit logo">
            <img class="w-80 h-80 object-contain" src="@/assets/logo.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import UiButton from "../../components/ui-button.vue";
import UiButtonStack from "../../components/ui-button-stack.vue";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
export default {
  data: () => ({
    timeline: null,
  }),
  components: { UiButton, UiButtonStack },
  methods: {},
  mounted() {
    gsap
      .timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: ".content-wrapper",
          start: "bottom bottom",
          endTrigger: "",
          end: "max bottom",
          scrub: true,
        },
      })
      .to(".content-wrapper", {
        yPercent: +7,
        autoAlpha: 0.3,
      });
    this.timeline = gsap
      .timeline()
      .from(
        ".logo",
        {
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<"
      )
      .from(
        ".logo",
        {
          rotate: 180,
          duration: 4,
          ease: "power3.out",
        },
        "<"
      )
      .from(
        ".title",
        {
          yPercent: 100,
          opacity: 0,
          duration: 2,
          ease: "power3.out",
          stagger: 0.5,
        },
        "<"
      )
      .from(
        ".subtitle",
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.25,
        },
        "<+1"
      )
      .from(
        ".buttons",
        {
          opacity: 0,
          duration: 0.5,
          stagger: 0.25,
        },
        "<"
      );
  },
  updated() {},
  async beforeRouteLeave(to, from, next) {
    await this.$func.reverseAnimation(this);
    next();
  },
};
</script>

<style>
</style>