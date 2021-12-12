<template>
  <div>
    <div class="relative flex flex-col h-fit min-h-screen">
      <div>
        <!-- Navigation Bar -->
        <div
          class="
            fixed
            h-14
            w-full
            flex flex-col
            justify-center
            shadow-sm
            transition-all
            ease-in-out
            navbar
            no-print
          "
          id="navbar"
          :class="nav.translucent ? '' : 'border-b border-solid'"
          :style="
            (nav.translucent
              ? ''
              : 'background-color: rgba(255, 255, 255, 0.72);') +
            'backdrop-filter: saturate(180%) blur(20px);z-index: 99999;'
          "
          v-if="nav.available"
          @click="jumpToTop"
        >
          <div
            class="relative w-full flex flex-row px-4 md:px-8 font-bold"
            :style="'color: ' + (nav.translucent ? '#ffffff' : '#11691a')"
          >
            <div class="flex-grow flex flex-row justify-start w-1/3">
              <!-- Left -->
              <div
                class="rounded-md flex py-1 px-1 cursor-pointer"
                :style="
                  nav.translucent
                    ? 'background-color: rgba(0,0,0,0.2)'
                    : 'background-color: #e2f3e8'
                "
                @click="backButtonClicked"
              >
                <box-icon
                  name="left-arrow-circle"
                  :color="nav.translucent ? '#ffffff' : '#11691a'"
                ></box-icon>
                <div class="mx-1 hidden md:block">{{ backButtonName }}</div>
              </div>
            </div>
            <div
              class="
                flex-grow flex flex-row
                justify-center
                min-w-1/3
                flex-shrink-0
              "
            >
              <div class="flex flex-col justify-center">
                <!-- Center -->
                <div class="flex flex-row">
                  <div>{{ nav.name }}</div>
                </div>
              </div>
            </div>
            <div class="flex-grow flex flex-row justify-end w-1/3">
              <!-- Right -->
              <!-- Right -->
            </div>
          </div>
        </div>
      </div>
      <!-- <transition :name="page_transition" mode="out-in"> -->
      <router-view></router-view>
      <!-- </transition> -->
    </div>
    <div class="bg-gray-100 px-8 py-8 text-gray-600 pagebreak-prevent no-print">
      <!-- Footer -->
      <div class="my-2 flex flex-row">
        <div class="text-xl font-bold">Lincoln Yan</div>
        <div class="mx-1">|</div>
        <div class="text-xl font-bold">@yyjlincoln</div>
      </div>
      <div class="text-md font-bold flex flex-row">
        <a
          href="https://github.com/yyjlincoln/"
          class="mx-1"
          @click="ui.icons.github = true"
        >
          <box-icon
            type="logo"
            name="github"
            :class="ui.icons.github ? 'animate-pulse' : ''"
          ></box-icon>
        </a>
        <a
          href="https://www.linkedin.com/in/yyjlincoln/"
          class="mx-1"
          @click="ui.icons.linkedin = true"
        >
          <box-icon
            name="linkedin"
            type="logo"
            :class="ui.icons.linkedin ? 'animate-pulse' : ''"
          ></box-icon
        ></a>
        <a href="mailto:yyjlincoln@yyjlincoln.com" class="mx-1"
          ><box-icon name="paper-plane"></box-icon
        ></a>
      </div>
      <div class="my-2 flex flex-col">
        <div class="text-md font-bold">
          Designed with ❤️ and with the help of open-source modules &amp; GSAP.
        </div>
        <div class="text-md font-bold">
          All rights reserved |
          <router-link to="/acknowledgements"> Acknowledgements </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import gsap from "gsap";
export default {
  data: () => ({
    ui: {
      icons: {
        github: false,
        linkedin: false,
      },
    },
    nav: {},
    page_transition: "slide-left",
    nav_timeline: null,
  }),
  computed: {
    backButtonName() {
      // if (this.$runtime.firstLaunch) {
      // return "Home";
      // } else {
      return "Back";
      // }
    },
  },
  watch: {
    $route: function (to, from) {
      to, from;
      Vue.set(this.$runtime, "firstLaunch", false);
      console.log(this.$runtime);
      this.handle_route_change(to);
    },
  },
  methods: {
    handle_route_change(route) {
      Vue.set(this, "nav", route.meta.nav);
    },
    jumpToTop() {
      gsap.to(window, {
        scrollTo: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    },
    backButtonClicked() {
      if (this.$runtime.firstLaunch) {
        this.$router.push("/");
      } else {
        this.$router.go(-1);
      }
    },
  },
  mounted() {
    this.handle_route_change(this.$route);
  },
};
</script>

<style>
@media print {
  .pagebreak-prevent {
    page-break-inside: avoid;
  }

  .pagebreak-before {
    page-break-before: always;
  }

  .navbar {
    display: none;
  }

  #navbar {
    display: none;
  }

  #no-print {
    display: none;
  }

  .no-print {
    display: none;
  }

  .print-only {
    display: flex;
  }
}
.print-only {
  display: none;
}
</style>