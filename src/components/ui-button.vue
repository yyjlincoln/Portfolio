<template>
  <div class="flex justify-center w-fit ui-button">
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
            type="solid"
            name="right-arrow-circle"
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
            type="solid"
            name="right-arrow-circle"
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
    linkClickPrevent: {},
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