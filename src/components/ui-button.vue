<template>
  <div class="mx-3 ml-0 sm:ml-3 mt-3 sm:mt-0 sm:mx-3 sm:my-3 ui-button">
    <div
      :style="'background-color: ' + backgroundcolor"
      class="
        rounded-md
        hover:shadow-md
        active:shadow-sm
        buttons
        transition-all
        shadow-lg
        ease-in-out
        w-full
      "
    >
      <router-link
        v-if="asRouterLink"
        :to="to"
        :style="
          'background-color: ' + backgroundcolor + '; color: ' + textcolor
        "
        id="button"
      >
        <div class="rounded-md flex px-5 py-3 max-w-xl font-extrabold">
          <box-icon
            :type="icon ? icon.type : 'solid'"
            :name="icon ? icon.name : 'right-arrow-circle'"
            :color="textcolor"
            class="mr-1"
          ></box-icon
          ><slot></slot>
        </div>
      </router-link>
      <a
        v-else
        :href="to"
        :style="
          'background-color: ' + backgroundcolor + '; color: ' + textcolor
        "
        id="button"
        @click="linkClick"
      >
        <div class="rounded-md flex px-5 py-3 max-w-xl font-extrabold">
          <box-icon
            :type="icon ? icon.type : 'solid'"
            :name="icon ? icon.name : 'right-arrow-circle'"
            :color="textcolor"
            class="mr-1"
          ></box-icon
          ><slot></slot>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
let colors = {
  primary: {
    textcolor: "#e2f3e8",
    backgroundcolor: "#3fab52",
  },
  secondary: {
    textcolor: "#3fab52",
    backgroundcolor: "#e2f3e8",
  },
  external_primary: {
    textcolor: "#e2f3e8",
    backgroundcolor: "#3fab52",
    icon: {
      name: "link-external",
    },
  },
  external_secondary: {
    textcolor: "#3fab52",
    backgroundcolor: "#e2f3e8",
    icon: {
      name: "link-external",
    },
  },
  github_primary: {
    textcolor: "#e2f3e8",
    backgroundcolor: "#3fab52",
    icon: {
      type: "logo",
      name: "github",
    },
  },
  github_secondary: {
    textcolor: "#3fab52",
    backgroundcolor: "#e2f3e8",
    icon: {
      type: "logo",
      name: "github",
    },
  },
  docs_primary: {
    textcolor: "#e2f3e8",
    backgroundcolor: "#3fab52",
    icon: {
      type: "solid",
      name: "book",
    },
  },
  docs_secondary: {
    textcolor: "#3fab52",
    backgroundcolor: "#e2f3e8",
    icon: {
      type: "solid",
      name: "book",
    },
  },
  alert_primary: {
    textcolor: "#F9EEB6",
    backgroundcolor: "#f0932b",
    icon: {
      type: "solid",
      name: "error",
    },
  },
  alert_secondary: {
    textcolor: "#f0932b",
    backgroundcolor: "#F9EEB6",
    icon: {
      type: "solid",
      name: "error",
    },
  },
  yellow_primary: {
    textcolor: "#F9EEB6",
    backgroundcolor: "#f0932b",
  },
  yellow_secondary: {
    textcolor: "#f0932b",
    backgroundcolor: "#F9EEB6",
  },
  info_primary: {
    textcolor: "#E3E4FE",
    backgroundcolor: "#1e90ff",
    icon: {
      type: "solid",
      name: "info-circle",
    },
  },
  info_secondary: {
    textcolor: "#1e90ff",
    backgroundcolor: "#E3E4FE",
    icon: {
      type: "solid",
      name: "info-circle",
    },
  },
};

export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "primary",
    },
    custom: {
      type: Object,
    },
    asRouterLink: {
      type: Boolean,
      default: true,
    },
    linkClickPrevent: {

    }
  },
  data: () => ({
    internalcolorset: colors.primary,
  }),
  methods: {
    updateColors() {
      if (this.custom) {
        this.internalcolorset = this.custom;
      } else {
        if (colors[this.type]) {
          this.internalcolorset = colors[this.type];
        } else {
          this.internalcolorset = colors.primary;
        }
      }
    },
  },
  computed: {
    textcolor() {
      this.updateColors();
      return this.internalcolorset.textcolor;
    },
    backgroundcolor() {
      this.updateColors();
      return this.internalcolorset.backgroundcolor;
    },
    icon() {
      this.updateColors();
      return this.internalcolorset.icon;
    },
    linkClick() {
      return (event) => {
        if (this.linkClickPrevent) {
          this.linkClickPrevent();
          event.preventDefault();
        }
      };
    },
  },
};
</script>
<style>
</style>