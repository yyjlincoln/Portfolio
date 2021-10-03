<template>
  <div>
    <page-frame :horizontal_margin="true">
      <div class="flex flex-col">
        <div class="mt-10">
          <text-styles type="primary" class="text">Connect with me</text-styles>
          <div class="mt-4 md:mt-8">
            <text-styles class="text" type="title">
              <box-icon name="chat" color="#157f1f" class="mr-2"></box-icon
              >Connect with me via:</text-styles
            >
            <a href="https://github.com/yyjlincoln">
              <text-styles class="mt-4 text-hover text" type="subtitle">
                <box-icon
                  type="logo"
                  name="github"
                  color="#3fab52"
                  class="mr-1"
                ></box-icon>
                Github</text-styles
              >
            </a>
            <a href="https://linkedin.com/in/yyjlincoln">
              <text-styles class="mt-4 text-hover text" type="subtitle">
                <box-icon
                  type="logo"
                  name="linkedin"
                  color="#3fab52"
                  class="mr-1"
                ></box-icon>
                Linkedin</text-styles
              >
            </a>
            <a href="mailto:yyjlincoln@yyjlincoln.com">
              <text-styles class="mt-4 text-hover text" type="subtitle">
                <box-icon
                  name="paper-plane"
                  color="#3fab52"
                  class="mr-1"
                ></box-icon>
                Email</text-styles
              >
            </a>
          </div>
          <div class="mt-4 md:mt-8">
            <text-styles class="text" type="title"
              ><box-icon name="error" color="#157f1f" class="mr-2"></box-icon>
              Complaints and Legal issues:</text-styles
            >
            <a href="mailto:legal@yyjlincoln.com">
              <text-styles class="mt-4 text-hover text" type="subtitle">
                <box-icon
                  name="paper-plane"
                  color="#3fab52"
                  class="mr-1"
                ></box-icon>
                Email</text-styles
              >
            </a>
            <div class="text">(I'll try to reply ASAP)</div>
          </div>
        </div>
      </div>
    </page-frame>
  </div>
</template>

<script>
import pageFrame from "../../components/page-frame.vue";
import TextStyles from "../../components/text-styles.vue";
import gsap from "gsap";

export default {
  components: { pageFrame, TextStyles },
  data: () => ({
    timeline: null,
  }),
  mounted() {
    this.timeline = gsap
      .timeline({
        defaults: {
          ease: "power3.out",
        },
      })
      .from(
        ".text",
        {
          opacity: 0,
          translateY: 100,
          duration: 0.5,
          stagger: {
            amount: 0.4
          },
        },
        ""
      );
  },
  async beforeRouteLeave(to, from, next) {
    await this.$func.reverseAnimation(this)
    next();
  },
};
</script>

<style scoped>
.text-hover:hover {
  transform: translateX(10px);
}
.text-hover {
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>