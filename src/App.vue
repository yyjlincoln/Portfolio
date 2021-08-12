<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  watch: {
    $route: function (to, from) {
      from;
      document.title = to.meta.title
        ? to.meta.title + " - @yyjlincoln"
        : "Lincoln Yan - @yyjlincoln";
    },
  },
  mounted() {
    document.title = this.$route.meta.title
      ? this.$route.meta.title + " - @yyjlincoln"
      : "Lincoln Yan - @yyjlincoln";
  },
};
</script>

<style>
html {
  font-family: "-apple-system, BlinkMacSystemFont, " Segoe UI ", Roboto, "
    Helvetica Neue ", Arial, sans-serif, " Apple Color Emoji ", " Segoe UI Emoji
    ", " Segoe UI Symbol "";
}
body {
  padding: 0;
  margin: 0;
}

#app {
  overflow-x: hidden;
}

.slide-left-leave-active,
.slide-right-leave-active {
  display: none;
}

.slide-left-enter-active,
.slide-right-enter-active {
  /* position: absolute; */
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-right-leave-active,
.slide-left-enter {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
