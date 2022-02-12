<template>
  <page-frame
    :horizontal_center="true"
    :reserve_nav_bar_space="false"
    style="padding-top: 40vh; padding-bottom: 40vh"
    class="page-frame"
  >
    <div class="max-w-7xl px-10">
      <text-styles type="primary very_large" class="mt-12 text-center"
        >Hello, I'm Lincoln.</text-styles
      >
      <text-styles type="bold large secondary_color" class="mx-auto text-center"
        >You can also call me Yijun Yan.</text-styles
      >
      <div id="scroll-indicator" class="mt-16">
        <box-icon
          name="down-arrow-circle"
          type="solid"
          flip="horizontal"
          color="#4cb963"
          size="md"
          class="cursor-pointer"
          @click="scrollToAboutMe"
        ></box-icon>
      </div>
      <div class="my-16" id="scroll-top">
        <div class="flex flex-col lg:flex-row justify-center">
          <text-styles type="primary extra_large">I'm a coder.</text-styles>
          <text-styles type="secondary extra_large" class="mx-2"
            >I write code.</text-styles
          >
        </div>
        <text-styles type="secondary larger" class="mt-4"
          >Coding is cool. I love it.</text-styles
        >
        <text-styles type="secondary" class="mt-4"
          >Remember to check out my Github!</text-styles
        >
        <div class="mx-auto my-5 lg:py-10 lg:px-10 flex">
          <img
            class="rounded-md max-w-screen-lg w-full h-full mx-auto"
            src="https://static.yyjlincoln.com/yyjlincoln-background.jpg"
          />
        </div>
      </div>
      <div class="my-16">
        <text-styles type="primary extra_large">I'm a learner.</text-styles>
        <text-styles type="secondary larger" class="mt-4"
          >Knowledge is power.</text-styles
        >
        <text-styles type="secondary" class="mt-8"
          >I taught myself how to code when I was very young - starting from
          literally zero experience to now being able to confidently code in a
          few langauges.</text-styles
        >
        <text-styles type="secondary" class="mt-8"
          >I also participated in programs such as the MLH Fellowship and NCSS
          Summer School, hackathons and a range of other events to network and
          boost my skills.</text-styles
        >
        <ui-button-stack class="mt-8">
          <ui-button :asRouterLink="true" to="/journey"
            >My learning journey</ui-button
          >
        </ui-button-stack>
      </div>
      <div class="my-16">
        <text-styles type="primary extra_large"
          >I'm an academic high-achiever.</text-styles
        >
        <text-styles type="secondary larger" class="mt-4"
          >Despite learning alone in Australia (as an international student) and
          all those lockdowns, I smashed the 2021 HSC.</text-styles
        >
        <div class="flex flex-col lg:flex-row justify-center mt-8">
          <text-styles type="primary" class="mx-1">ATAR</text-styles>
          <text-styles type="secondary" class="mx-1">99.85</text-styles>
        </div>
        <div class="flex flex-col lg:flex-row justify-center mt-4">
          <text-styles type="primary" class="mx-1">First in State</text-styles>
          <text-styles type="secondary" class="mx-1"
            >Software Design and Development
          </text-styles>
        </div>
        <div class="flex flex-col lg:flex-row justify-center mt-4">
          <text-styles type="primary" class="mx-1">10th in State</text-styles>
          <text-styles type="secondary" class="mx-1">Physics </text-styles>
        </div>
        <div class="flex flex-col lg:flex-row justify-center mt-4">
          <text-styles type="primary" class="mx-1">Dux</text-styles>
          <text-styles type="secondary" class="mx-1"
            >of Killarney Heights High School
          </text-styles>
        </div>
        <div class="flex flex-col lg:flex-row justify-center mt-4">
          <text-styles type="primary" class="mx-1">All-rounder</text-styles>
          <text-styles type="secondary" class="mx-1"
            >with 5 subjects achieving Band 6/E4
          </text-styles>
        </div>
        <div class="flex flex-col lg:flex-row justify-center mt-4">
          <text-styles type="primary" class="mx-1"
            >Australia's Global University Award</text-styles
          >
          <text-styles type="secondary" class="mx-1">recipient </text-styles>
        </div>
        <text-styles type="secondary" class="mx-1 mt-8"
          >I was also offered with the following scholarships:
        </text-styles>
        <text-styles type="primary" class="mx-1 mt-4"
          >USYD Sydney Scholar's Award</text-styles
        >
        <text-styles type="primary" class="mx-1 mt-4"
          >USYD Engineering Undergraduate Merit Scholarship</text-styles
        >
        <text-styles type="primary" class="mx-1 mt-4"
          >UTS Undergraduate Academic Excellence International Scholarship
          (25%)</text-styles
        >
        <text-styles type="primary" class="mx-1 mt-4"
          >Macquarie Leaders and Achievers Scholarship</text-styles
        >
      </div>
      <div class="my-16">
        <text-styles type="primary extra_large"
          >I'm studying at UNSW Sydney.</text-styles
        >
        <text-styles type="secondary larger" class="mt-4"
          >Bachelor of Science (Computer Science) and Bachelor of Commerce
        </text-styles>
        <text-styles type="secondary" class="mt-4"
          >It's such a cool school.
        </text-styles>
        <div class="mx-auto my-5 lg:py-10 lg:px-10 flex">
          <img
            class="rounded-md max-w-screen-lg w-full h-full mx-auto"
            src="https://static.yyjlincoln.com/yyjlincoln-background-unsw.jpg"
          />
        </div>
      </div>
      <div class="mt-12">
        <text-styles type="primary extra_large"
          >I work at Learnable Education.</text-styles
        >
        <text-styles type="secondary larger" class="mt-4"
          >And we're on a mission to make learning easy for all high school
          students.</text-styles
        >
        <text-styles type="secondary" class="mt-4"
          >I'm currently a Software Engineer Intern</text-styles
        >
      </div>
      <div class="mt-12">
        <text-styles type="primary extra_large"
          >That's it - wanna know more about me?</text-styles
        >
        <text-styles type="secondary larger" class="mt-4"
          >Try one of those options</text-styles
        >
        <ui-button-stack class="mt-8">
          <ui-button to="/connect" type="primary">Connect with me</ui-button>
          <ui-button type="primary" :asRouterLink="true" to="/portfolio"
            >My Portfolio</ui-button
          >
          <ui-button type="primary" :asRouterLink="true" to="/curriculum-vitae"
            >Curriculum Vitae (Outdated)</ui-button
          >
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
          <ui-button
            type="primary"
            :asRouterLink="false"
            to="https://redirect.yyjlincoln.com/linkedin"
            :linkClickPrevent="
              $func.utils.inlineOpenInNewWindow(
                'https://redirect.yyjlincoln.com/linkedin'
              )"
            >Linkedin</ui-button
          >
        </ui-button-stack>
      </div>
    </div>
  </page-frame>
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */
import pageFrame from "../../components/page-frame.vue";
import TextStyles from "../../components/text-styles.vue";
import UiButtonStack from "../../components/ui-button-stack.vue";
import UiButton from "../../components/ui-button.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  components: { pageFrame, TextStyles, UiButtonStack, UiButton },
  data() {
    return {
      timeline: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.updateAnimations();
      }, 0);
    });
  },
  methods: {
    updateAnimations() {
      gsap.utils
        .toArray([".text-styles", "img", ".ui-button"])
        .forEach((el) => {
          gsap.from(el, {
            duration: 1,
            opacity: 0,
            y: 50,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: el,
              start: "top center+=200",
              end: "+=200",
            },
          });
        });
      gsap.from("#scroll-indicator", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power3.out",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".page-frame",
            start: "top top",
            end: "+=1",
            once: true,
          },
          defaults: {
            ease: "power3.out",
            duration: 0.5,
          },
        })
        .to(".page-frame", {
          paddingTop: "6rem",
          onComplete: () => {
            // For some reasons, we need to refresh it twice
            ScrollTrigger.refresh();
            ScrollTrigger.refresh();
          },
        })
        .to(
          "#scroll-indicator",
          {
            display: "none",
          },
          "<"
        );
    },
    scrollToAboutMe() {
      this.$func.utils.scrollTo({
        y: 1,
      });
    },
  },
  async beforeRouteLeave(to, from, next) {
    await this.$func.reverseAnimation(this);
    next();
  },
};
</script>

<style>
</style>