<template>
  <page-frame :reserve_nav_bar_space="false" :horizontal_margin="true">
    <!-- Main Section -->
    <div class="my-20 px-4 max-w-5xl">
      <!-- <text-styles type="primary" id="titleText">USYD Schorlarship Application</text-styles>  -->
      <text-styles type="very_large extrabold" class="helloemoji"
        >👋</text-styles
      >
      <text-styles
        type="y_spacing extra_large secondary_color extrabold"
        class="title"
      >
        {{ greeting }}!
        <!-- <text-styles type="large secondary_color extrabold" class="title mt-3">
          {{ secondary_greeting }}</text-styles
        > -->
      </text-styles>

      <text-styles
        type="y_spacing medium primary_color bold"
        class="mainsubject"
        >Additional Information &amp; Supporting Evidence for the Schorlarship
        Application.</text-styles
      >

      <ui-area class="max-w-4xl tips">
        <text-styles type="bold small primary_color"
          >Who's Lincoln?</text-styles
        >
        <text-styles type="bold small gray"
          >It's me! I'm Yijun Yan, and "Lincoln" is my preferred English name.
          I'll refer to myself as "Lincoln" throughout the text.</text-styles
        >
      </ui-area>
      <div class="my-10 projects">
        <!-- Projects -->
        <text-styles type="primary"> My Projects </text-styles>
        <text-styles type="subtitle"
          >You can check out my projects in
          <router-link class="underline" to="/portfolio"
            >my portfolio</router-link
          >
        </text-styles>
      </div>

      <div class="my-10 journey">
        <!-- Coding Journey -->
        <text-styles type="primary">My Coding Journey</text-styles>
        <text-styles type="bold small secondary_color"
          >A breif story.
          <router-link class="underline" to="/journey"
            >Check out the full story</router-link
          ></text-styles
        >
        <div class="border-l-8 border-gray-400 pl-1">
          <!-- Coding Journey Block -->
          <text-styles
            type="small secondary_color extrabold y_spacing"
            class="pl-5"
            >2013</text-styles
          >
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="small primary_color extrabold"
              >Windows CMD</text-styles
            >
            <text-styles type="small bold gray"
              >By chance, I started learning Windows CMD Scripts in
              2013.</text-styles
            >
          </ui-area>
          <text-styles
            type="small secondary_color extrabold y_spacing"
            class="pl-5"
            >2014</text-styles
          >
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="small primary_color extrabold"
              >"YiYuYan" (Chinese version of Visual Basic)
            </text-styles>
            <text-styles type="small bold gray"
              >CMD Script was too basic - it's never intended to be a
              <div class="italic inline">real</div>
              programming language. It can't even draw a window on the screen.
              So in order to make a better software, I started my journey of
              learning "YiYuYan" (basically Visual Baisc, but in
              Chinese)</text-styles
            >
          </ui-area>
          <text-styles
            type="small secondary_color extrabold y_spacing"
            class="pl-5"
            >2015</text-styles
          >
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="small primary_color extrabold"
              >Python 3</text-styles
            >
            <text-styles type="small bold gray">
              As my English skills got more advanced, I decided to move on to an
              internationally-recognised high-level programming language. I
              chose Python 3.
            </text-styles>
          </ui-area>
          <text-styles
            type="small secondary_color extrabold y_spacing"
            class="pl-5"
            >2016</text-styles
          >
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="small primary_color extrabold"
              >Source control became a thing</text-styles
            >
            <text-styles type="small bold gray">
              After accidentally deleting my entire project folder, I decided to
              learn Git. I registered a Github account, and started using it to
              manage my projects.
            </text-styles>
          </ui-area>
          <text-styles
            type="small secondary_color extrabold y_spacing"
            class="pl-5"
            >2017</text-styles
          >
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="small primary_color extrabold"
              >Study in Australia</text-styles
            >
          </ui-area>
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="small primary_color extrabold"
              >My first flask project</text-styles
            >
            <text-styles type="small bold gray">
              I started using Flask to create my first web application.
            </text-styles>
          </ui-area>
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="small primary_color extrabold"
              >Learning HTML + CSS + JavaScript</text-styles
            >
            <text-styles type="small bold gray">
              I started learning HTML, CSS, and JavaScript in order to make a UI
              for my Python application.
            </text-styles>
          </ui-area>
          <text-styles
            type="small secondary_color extrabold y_spacing"
            class="pl-5"
            >2019</text-styles
          >
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="small primary_color extrabold"
              >Progressive Web Apps (PWA) with Vue.js, axios</text-styles
            >
            <text-styles type="small bold gray">
              I designed my first PWA app using Vue - Teamer
              <div class="italics text-gray-400 inline">
                (private collaboration).
              </div>
            </text-styles>
          </ui-area>
          <text-styles
            type="small secondary_color extrabold y_spacing"
            class="pl-5"
            >2020</text-styles
          >
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="small primary_color extrabold"
              >TailwindCSS, VueSax and MongoDB joins the chat. DocumentX is
              born.</text-styles
            >
            <text-styles type="small bold gray">
              I started working digitally in 2019 - and by 2020, I had way too
              much documents residing in my Inbox with a random file name. I
              decided to change it by designing my own document management
              system - DocumentX. Read more about this project
              <router-link class="underline" to="/protfolio/documentx"
                >here</router-link
              >
              <div class="italics text-gray-400 inline">
                (view in portfolio).
              </div>
            </text-styles>
          </ui-area>
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="small primary_color extrabold"
              >HSC Major Work</text-styles
            >
            <text-styles type="small bold gray">
              Nowask.me is born.
              <router-link class="underline" to="/protfolio/nowaskme"
                >Learn more</router-link
              >
              <div class="italics text-gray-400 inline">
                (view in portfolio).
              </div>
            </text-styles>
          </ui-area>

          <text-styles
            type="small secondary_color extrabold y_spacing"
            class="pl-5"
            >2021</text-styles
          >
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="small primary_color extrabold"
              >The era of Swift</text-styles
            >
            <text-styles type="small bold gray">
              After enrolling in the Apple Developer Aademy, I started learning
              Swift.
            </text-styles>
          </ui-area>
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="small primary_color extrabold"
              >DocumentX for iOS &amp; MacOS</text-styles
            >
            <text-styles type="small bold gray">
              Using the same sets of APIs, as a way to learn Swift, I created
              DocumentX for iOS &amp; MacOS. Learn more about this project
              <router-link class="underline" to="/protfolio/documentx-ios"
                >here</router-link
              >
              <div class="italics text-gray-400 inline">
                (view in portfolio).
              </div>
            </text-styles>
          </ui-area>
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="small primary_color extrabold"
              >This website is born!
              <a href="https://github.com/yyjlincoln/yyjlincoln.com">
                <box-icon type="logo" name="github" class="mr-1"></box-icon>
              </a>
            </text-styles>
          </ui-area>
          <text-styles
            type="small secondary_color extrabold y_spacing"
            class="pl-5"
            >The future</text-styles
          >

          <text-styles
            class="pl-5 text-center"
            type="primary_color medium extrabold"
          >
            The future's going to exciting.</text-styles
          >
          <text-styles
            class="pl-5 text-center"
            type="secondary_color medium extrabold"
          >
            Let's explore it together, shall we?</text-styles
          >

          <!-- - I taught myself how to code in Windows CMD (2013), "YiYuYan" language (Chinese version of Visual Basic; 2014-2015), Python 3 (with frameworks such as Flask; 2015-cont), Web (without frameworks, 2017-2018), Web PWA (Vue + Tailwind + Axios; 2019-cont), Swift (basics, actively learning; 2021-cont). -->
        </div>
      </div>

      <div class="my-10 contact">
        <text-styles type="primary">Questions? More about me?</text-styles>
        <text-styles type="subtitle"
          >Feel free to shoot me an email at any time.
          <router-link to="/connect" class="underline"
            >Connect with me</router-link
          >. You can also check out
          <router-link to="/" class="underline"
            >the entire website.</router-link
          >
        </text-styles>
      </div>
      <text-styles>Note: This page is printer-friendly.</text-styles>
    </div>
  </page-frame>
</template>

<script>
import pageFrame from "../../components/page-frame.vue";
import TextStyles from "../../components/text-styles.vue";
import UiArea from "../../components/ui-area.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  components: { pageFrame, TextStyles, UiArea },
  data: () => ({
    greeting: "Welcome",
    timeline: null,
    secondary_greeting: "How's your day going?",
  }),
  methods: {
    getGreeting() {
      let today = new Date();
      let hour = today.getHours();
      if (hour < 12) {
        return "Good Morning";
      } else if (hour < 18) {
        return "Good Afternoon";
      } else {
        return "Good Evening";
      }
    },
  },
  mounted() {
    this.greeting = this.getGreeting();
    gsap.registerPlugin(ScrollTrigger);
    this.timeline = gsap
      .timeline()
      .from(".helloemoji", {
        opacity: 0,
        translateY: 20,
        // skewY: 10,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        ".title",
        {
          opacity: 0,
          translateY: 20,
          // skewY: 10,
          duration: 1,
          ease: "power3.out",
        },
        "-=75%"
      )
      .from(
        ".mainsubject",
        {
          opacity: 0,
          translateY: 20,
          // skewY: 10,
          duration: 1,
          ease: "power3.out",
        },
        "-=50%"
      )
      .from(
        ".tips",
        {
          opacity: 0,
          translateY: 20,
          // skewY: 10,
          duration: 1,
          ease: "power3.out",
        },
        "-=50%"
      )
      .from(
        ".projects",
        {
          opacity: 0,
          translateY: 20,
          // skewY: 10,
          duration: 1,
          ease: "power3.out",
        },
        "-=50%"
      )
      .from(
        ".journey",
        {
          opacity: 0,
          translateY: 20,
          // skewY: 10,
          duration: 1,
          ease: "power3.out",
        },
        "-=50%"
      )
      .from(
        ".contact",
        {
          opacity: 0,
          translateY: 20,
          // skewY: 10,
          duration: 1,
          ease: "power3.out",
        },
        "-=50%"
      );
  },
  updated() {},
  beforeDestroy() {
    this.timeline.kill();
    ScrollTrigger.getAll().forEach(function (trigger) {
      trigger.kill();
    });
  },
  beforeRouteLeave(to, from, next) {
    gsap.to(window, {
      scrollTo: 0,
      duration: 0.5,
      ease: "Power3.easeOut",
    });
    document.body.classList.add("cursor-wait");
    this.timeline.eventCallback("onReverseComplete", () => {
      document.body.classList.remove("cursor-wait");
      next();
    });
    this.timeline.reverse();
  },
};
</script>

<style>
</style>