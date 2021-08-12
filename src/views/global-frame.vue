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
            border border-solid
            shadow-sm
            transition-all
            ease-in-out
          "
          style="
            background-color: rgba(255, 255, 255, 0.72);
            backdrop-filter: saturate(180%) blur(20px);
          "
          v-if="nav.available"
        >
          <div
            class="relative w-full flex flex-row px-4 md:px-8 font-bold"
            style="color: #11691a"
          >
            <div class="flex-grow flex flex-row justify-start w-1/3">
              <!-- Left -->
              <div
                class="rounded-md flex py-1 px-1 cursor-pointer"
                style="background-color: #e2f3e8"
                @click="$router.go(-1)"
              >
                <box-icon name="left-arrow-circle" color="#11691a"></box-icon>
                <div class="mx-1 hidden md:block">Back</div>
              </div>
            </div>
            <div class="flex-grow flex flex-row justify-center w-1/3">
              <div class="flex flex-col justify-center">
                <!-- Center -->
                <div>{{ nav.name }}</div>
              </div>
            </div>
            <div class="flex-grow flex flex-row justify-end w-1/3">
              <!-- Right -->
              <!-- Right -->
            </div>
          </div>
        </div>
      </div>

      <router-view></router-view>
    </div>
    <div class="bg-gray-100 px-8 py-8 text-gray-600">
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
          ><box-icon
            name="linkedin"
            type="logo"
            :class="ui.icons.linkedin ? 'animate-pulse' : ''"
          ></box-icon
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data: () => ({
    ui: {
      icons: {
        github: false,
        linkedin: false,
      },
    },
    nav: {},
  }),
  watch: {
    $route: function (to, from) {
      to, from;
      this.handle_route_change(to);
    },
  },
  methods: {
    handle_route_change(route) {
      Vue.set(this, "nav", route.meta.nav);
      console.log(route.meta.nav.available);
    },
  },
  mounted() {
    this.handle_route_change(this.$route);
  },
};
</script>

<style>
</style>