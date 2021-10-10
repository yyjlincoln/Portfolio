<template>
  <div>
    <page-frame :horizontal_spacing="true">
      <text-styles type="extra_large extrabold" class="helloemoji no-print"
        >👋</text-styles
      >
      <text-styles
        type="y_spacing larger secondary_color extrabold"
        class="title no-print"
      >
        {{ greeting }}!
      </text-styles>
      <text-styles type="primary"
        >Lincoln YAN's HSC English (EAL/D) Essays</text-styles
      >
      <div v-for="e in essay.module" :key="e.name" class="my-10">
        <text-styles type="medium primary_color extrabold">{{
          e.name
        }}</text-styles>
        <text-styles
          class="mt-5 whitespace-pre-line"
          type="smaller secondary_color bold"
          >{{ e.title }}</text-styles
        >
        <ui-button-stack class="mt-5" :centered="false">
          <ui-button
            :to="e.url"
            type="external_primary"
            :asRouterLink="false"
            :linkClickPrevent="$func.utils.inlineOpenInNewWindow(e.url)"
          >
            Open essay in a new window
          </ui-button>
        </ui-button-stack>
      </div>
    </page-frame>
  </div>
</template>

<script>
import gsap from "gsap";
import pageFrame from "../../components/page-frame.vue";
import TextStyles from "../../components/text-styles.vue";
import UiButtonStack from "../../components/ui-button-stack.vue";
import UiButton from "../../components/ui-button.vue";
export default {
  components: { pageFrame, TextStyles, UiButton, UiButtonStack },
  data: () => ({
    timeline: null,
    essay: {
      module: {
        a: {
          url: "https://docs.google.com/document/d/1Lic7gnDKmPIolxOHvNuzejr5gRu6CwzvPLHGUxQdlkg/edit",
          name: "Module A: Texts and Human Experience",
          title:
            "‘Storytelling invites us to see the world differently through challenging our ideas about human behaviours and experiences’ \n\nHow does the composer utilise the conventions of narrative and language to explore the ideas in the above statement? Refer closely to the setting and key scenes and characters in your prescribed text, Past the Shallows by Favel Parrett.",
        },
        b: {
          url: "https://docs.google.com/document/d/1pPhXkrp1RCkZM5RupLxD0d8x30eoocOv0VaWpT_1fNk/edit",
          name: "Module B: Identity & Poetry Studies",
          title:
            "Cultural influences shape an individual's identity. To what extent is this idea explored in your prescribed text?",
        },
        c: {
          url: "https://docs.google.com/document/d/1qPhNXCBs79emVGggr5JSmE9-oLVFqkVtDjb-smHtEqQ/edit",
          name: "Module C: The Truman Show",
          title:
            "“Memorable characters are best conveyed through the composer's craft of representing their settings and how characters function within them” \n\nTo what extent is this true for TWO characters in your prescribed text?",
        },
        c2: {
          url: "https://docs.google.com/document/d/1WGB5J2ZGS0224A9OOcnRwj8Jl-5SchGK6EQ6c3jWDwI/edit",
          name: "Module C: The Truman Show (2019 HSC)",
          title:
            "What is your personal response to Weir’s exploration of control in The Truman Show?\n\nIn your response, make detailed reference to your prescribed text",
        },
      },
    },
  }),
  mounted() {
    this.timeline = gsap
      .timeline({
        defaults: {
          stagger: 0.2,
          duration: 1,
        },
      })
      .from(".text-styles", {
        translateY: 100,
        opacity: 0,
      })
      .from(
        ".ui-button",
        {
          translateY: 100,
          opacity: 0,
        },
        "<+40%"
      );
  },
  computed: {
    greeting() {
      //   Get greeting
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
  async beforeRouteLeave(to, from, next) {
    await this.$func.reverseAnimation(this);
    next();
  },
};
</script>

<style>
</style>