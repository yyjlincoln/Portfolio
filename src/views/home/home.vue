<template>
  <div>
    <!-- Root -->
    <div class="previous-top" style="z-index: 0">
      <div
        class="
          flex flex-col
          pt-20
          sm:mt-0
          sm:flex-row
          min-h-screen
          h-fit
          justify-space-between
          2xl:justify-center
        "
      >
        <!-- First full screen -->
        <div
          class="
            flex flex-col
            h-fit
            justify-center
            ml-10
            sm:ml-20
            md:ml-40
            mr-10
          "
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
              class="
                text-lg
                sm:text-xl
                md:text-2xl
                font-extrabold
                mt-4
                md:mt-0
                max-w-4xl
              "
            >
              <div class="md:mt-4 subtitle" style="color: #84cf95">
                A Year 12 student at Killarney Heights High School, Australia
              </div>
              <div style="color: #84cf95" class="subtitle">
                Python &amp; Javascript Developer
              </div>
              <div style="color: #84cf95" class="subtitle">
                Technology Enthusiast
              </div>
            </div>
          </div>
          <ui-button-stack class="mt-8 max-w-2xl" :centered="false">
            <!-- Buttons -->
            <ui-button to="/curriculum-vitae">Curriculum Vitae</ui-button>
            <ui-button to="/portfolio">My Portfolio</ui-button>
            <ui-button to="/scholarship" type="info_secondary">Scholarship Information</ui-button>
            <ui-button to="/connect" type="secondary">Connect</ui-button>
          </ui-button-stack>
        </div>
        <div
          class="
            mx-auto
            my-10
            sm:mx-10
            flex flex-col
            justify-center
            flex
            sm:hidden
            md:flex
          "
        >
          <div class="w-fit h-fit logo">
            <img class="w-80 h-80 object-contain" src="@/assets/logo.png" />
          </div>
        </div>
      </div>
    </div>
    <div
      style="
        background: url('https://yyjlincoln-public-assets.nyc3.cdn.digitaloceanspaces.com/yyjlincoln-background.jpg');
        background-position: center;
        background-size: cover;
        z-index: -1;
      "
      class="section-top"
    >
      <div
        class="w-full h-full min-h-screen"
        style="background: rgba(0, 0, 0, 0.4); z-index: 10; opacity: 0"
        id="black_cover"
      ></div>
    </div>
    <div style="z-index: 1" class="text-top min-h-screen">
      <div
        class="
          flex flex-col
          pt-20
          md:pt-40
          sm:mt-0
          sm:flex-row
          min-h-screen
          h-fit
          justify-space-between
        "
      >
        <div class="flex flex-col h-fit ml-10 sm:ml-20 md:ml-40 mr-10">
          <div>
            <div
              class="text-4xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl"
            >
              <!-- Title -->
              <div style="color: #e2f3e8">I write code,</div>
              <div style="color: #84cf95">to turn my ideas into reality.</div>
            </div>

            <div
              class="
                text-lg
                sm:text-xl
                md:text-2xl
                font-extrabold
                mt-4
                md:mt-0
                max-w-4xl
              "
              style="color: #e2f3e8"
            >
              <div class="md:mt-8">
                Ever since I was a kid, I've always had lots of ideas --
              </div>
              <div>and I've always wanted to turn them into reality.</div>
              <div class="mt-4">And that's why I've chosen to code --</div>
              <div class="mt-4">To make something new &amp; unique.</div>
            </div>
          </div>
          <div class="mt-8 flex flex-col sm:flex-row">
            <!-- Buttons -->
            <router-link
              to="/journey"
              class="
                mx-3
                ml-0
                mt-3
                sm:mt-0
                transition-all
                shadow-lg
                hover:shadow-md
                active:shadow-sm
                ease-in-out
                rounded-md
              "
              style="background-color: #3fab52; color: #e2f3e8"
              id="button-connect"
            >
              <div class="rounded-md flex px-5 py-3 font-extrabold">
                <box-icon
                  type="solid"
                  name="right-arrow-circle"
                  color="#e2f3e8"
                  class="mr-1"
                ></box-icon
                >My journey
              </div>
            </router-link>
            <router-link
              to="/portfolio"
              class="
                mx-3
                ml-0
                mt-3
                md:ml-3
                sm:mt-0
                transition-all
                shadow-lg
                hover:shadow-md
                active:shadow-sm
                ease-in-out
                rounded-md
              "
              style="background-color: #e2f3e8; color: #3fab52"
              id="button-connect"
            >
              <div class="rounded-md flex px-5 py-3 font-extrabold">
                <box-icon
                  type="solid"
                  name="right-arrow-circle"
                  color="#3fab52"
                  class="mr-1"
                ></box-icon
                >Check out my portfolio
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div style="z-index: 2" class="">
      <div
        class="
          flex flex-col
          py-10
          md:py-20
          sm:mt-0
          sm:flex-row
          h-fit
          justify-space-between
          bg-gray-100
        "
      >
        <div class="flex flex-col h-fit mx-auto ">
          <div>
            <div
              class="text-4xl sm:text-5xl md:text-6xl font-extrabold"
            >
              <!-- Title -->
              <text-styles class="text-center" type="secondary"
                >"Coding transforms one's ideas to products."</text-styles
              >
            </div>
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
import TextStyles from "../../components/text-styles.vue";
import UiButton from '../../components/ui-button.vue';
import UiButtonStack from '../../components/ui-button-stack.vue';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
export default {
  data: () => ({
    timeline: null,
  }),
  components: { TextStyles, UiButton, UiButtonStack },
  mounted() {
    gsap
      .timeline()
      .to(".previous-top", {
        scrollTrigger: {
          id: "previous-top-parallex",
          trigger: ".previous-top",
          scrub: true,
          invalidateOnRefresh: true,
          start: "bottom bottom",
          end: "bottom top",
          snap: {
            duration: 0.5,
            snapTo: 1,
          },
        },
        yPercent: 20,
        opacity: 0,
        zIndex: -3,
      })
      .to(".section-top", {
        scrollTrigger: {
          id: "section-top-pin",
          trigger: ".section-top",
          scrub: true,
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
          start: "top top",
          endTrigger: ".text-top",
          end: "bottom bottom",
          pinType: "transform",
        },
      })
      .to("#black_cover", {
        scrollTrigger: {
          id: "section-top-mask",
          trigger: ".section-top",
          scrub: true,
          invalidateOnRefresh: true,
          start: "top top",
          endTrigger: ".text-top",
          end: "top center",
        },
        opacity: 1,
      });
    // this.timeline.play()

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
    await this.$func.reverseAnimation(this)
    next();
  },
};
</script>

<style>
</style>