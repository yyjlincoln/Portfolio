<template>
  <div>
    <div :class="parsed_class" :style="parsed_style" class="text-styles">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const sizes = {
  very_large: {
    class: "text-5xl sm:text-6xl md:text-7xl",
  },
  extra_large: {
    class: "text-4xl sm:text-5xl md:text-6xl",
  },
  larger: {
    class: "text-3xl sm:text-4xl md:text-5xl",
  },
  large: {
    class: "text-2xl sm:text-3xl md:text-4xl",
  },
  medium: {
    class: "text-xl sm:text-2xl md:text-3xl",
  },
  small: {
    class: "text-lg sm:text-xl md:text-2xl",
  },
  smaller: {
    class: "text-md sm:text-lg md:text-xl",
  },
  extra_small: {
    class: "text-sm sm:text-md md:text-lg",
  },
  very_small: {
    class: "text-xs sm:text-sm md:text-md",
  },
};

const predefined = {
  primary: {
    includes: ["large", "extrabold", "primary_color"],
  },
  secondary: {
    includes: ["large", "extrabold", "secondary_color"],
  },
  title: {
    includes: ["medium", "primary_color", "bold"],
  },
  subtitle: {
    includes: ["medium", "secondary_color", "bold"],
  },
};

const colors = {
  primary_color: {
    style: "color: #157f1f;",
  },
  secondary_color: {
    style: "color: #4cb963;",
  },
  documentx_primary_color: {
    style: "color: #3872D3;",
  },
  documentx_secondary_color: {
    style: "color: #5595FF;",
  },
  khhspsn_primary_color: {
    style: "color: #3872D3;",
  },
  khhspsn_secondary_color: {
    style: "color: #5595FF;",
  },
  nam_primary_color: {
    style: "color: black; background: linear-gradient(90deg,#4e46e5,#9c2f9e); -webkit-text-fill-color: transparent; -webkit-background-clip: text;",
  },
  nam_secondary_color: {
    style: "color: black; background: linear-gradient(90deg,#837dec,#C646C8); -webkit-text-fill-color: transparent; -webkit-background-clip: text;",
  },
  gray: {
    class: "text-gray-700",
  },
  light_gray: {
    class: "text-gray-400",
  },
  white:{
    class: "text-white",
  }
};

const properties = {
  extrabold: {
    class: "font-extrabold",
  },
  bold: {
    class: "font-bold",
  },
};

const spacing = {
  y_spacing: {
    class: "my-5",
  },
  x_spacing: {
    class: "mx-5",
  },
}

const font_styles = {
  ...sizes,
  ...predefined,
  ...colors,
  ...properties,
  ...spacing,
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
    parsed_class: "",
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
      let parsed = this.parse_style(type);
      this.parsed_class = parsed.pclass;
      this.parsed_style = parsed.pstyle;
    },
    parse_style(type) {
      type = type.split(" ");
      var pstyle = "";
      var pclass = "";
      for (var i in type) {
        if (font_styles[type[i]]) {
          pstyle += font_styles[type[i]].style
            ? " " + font_styles[type[i]].style
            : "";
          pclass += font_styles[type[i]].class
            ? " " + font_styles[type[i]].class
            : "";
          for (var j in font_styles[type[i]].includes) {
            var parsed = this.parse_style(font_styles[type[i]].includes[j]);
            pstyle += parsed.pstyle ? " " + parsed.pstyle : "";
            pclass += parsed.pclass ? " " + parsed.pclass : "";
          }
        }
      }
      return { pstyle, pclass };
    },
  },
};
</script>

<style>
</style>