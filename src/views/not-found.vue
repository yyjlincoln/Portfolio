<template>
  <div>
    <page-frame
      :vertical_center="true"
      :reserve_nav_bar_space="false"
      :horizontal_margin="true"
    >
      <text-styles type="secondary_color extrabold extra_large"
        >We could not find the page "{{ $route.path }}"</text-styles
      >
      <text-styles type="primary">Oops. That's an error.</text-styles>
      <text-styles
        type="small extrabold secondary_color y_spacing flex flex-col"
      >
        <div>
          <router-link to="/" class="">
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
          <a href="#" @click.prevent="$router.go(-1)">
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

export default {
  components: { pageFrame, TextStyles },
  // mounted() {
  //   this.$router.push("/");
  // },
};
</script>

<style>
</style>