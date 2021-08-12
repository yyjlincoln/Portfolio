<template>
  <div>
    <div :class="parsed_type" :style="parsed_style">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const font_styles = {
  primary: {
    class: "text-2xl sm:text-3xl md:text-4xl font-extrabold",
    style: "color: #157f1f;",
  },
  secondary: {
    class: "text-2xl sm:text-3xl md:text-4xl font-extrabold",
    style: "color: #4cb963;",
  },
  title: {
    class: "text-xl sm:text-2xl md:text-3xl",
    style: "",
  },
  normal: {
    class: "",
    style: "",
  },

};
export default {
  props: {
    type: {
      type: String,
      default: "normal",
    },
  },
  data: () => ({
    parsed_type: "",
    parsed_style: "",
  }),
  mounted() {
    this.update_style(this.type);
  },
  watch: {
    type(to, from) {
      from;
      this.update_style(to);
    },
  },
  methods: {
    update_style(type) {
      this.parsed_type = font_styles[type].class;
      this.parsed_style = font_styles[type].style;
    },
  },
};
</script>

<style>
</style>