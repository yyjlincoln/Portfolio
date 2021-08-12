<template>
  <div>
    <page-frame>
      <div class="flex flex-col">
        <div class="mt-8 px-8 md:md-16 md:px-16">
          <text-styles type="primary">Ways to connect</text-styles>
          <div class="mt-4 md:mt-8">
            <text-styles class="" type="title_color"
              >
              <box-icon name="chat" color="#157f1f" class="mr-2"></box-icon>Connect with me
              via:</text-styles
            >
            <a href="https://github.com/yyjlincoln">
              <text-styles class="mt-4 text-hover" type="subtitle_color">
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
              <text-styles class="mt-4 text-hover" type="subtitle_color">
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
              <text-styles class="mt-4 text-hover" type="subtitle_color">
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
            <text-styles class="" type="title_color"
              ><box-icon name="error" color="#157f1f" class="mr-2"></box-icon>
              Complains and Legal issues:</text-styles
            >
            <a href="mailto:legal@yyjlincoln.com">
              <text-styles class="mt-4 text-hover" type="subtitle_color">
                <box-icon
                  name="paper-plane"
                  color="#3fab52"
                  class="mr-1"
                ></box-icon>
                Email</text-styles
              >
            </a>
            <div>(I'll try to reply ASAP)</div>
          </div>
        </div>
      </div>
    </page-frame>
  </div>
</template>

<script>
import pageFrame from "../../components/page-frame.vue";
import TextStyles from "../../components/text-styles.vue";
export default {
  components: { pageFrame, TextStyles },
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