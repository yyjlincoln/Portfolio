<template>
  <div>
    <page-frame>
      <div class="flex flex-col">
        <div class="mt-8 px-8 md:md-16 md:px-16">
          <!-- Block 1 - Who am I? -->
          <text-styles type="primary">Who am I?</text-styles>
          <text-styles class="my-2" type="title">I'm Lincoln</text-styles>
        </div>
      </div>
    </page-frame>
  </div>
</template>



<script>
import PageFrame from "../../components/page-frame.vue";
import TextStyles from "../../components/text-styles.vue";
export default {
  mounted() {
    // window.location.href = "https://linkedin.com/in/yyjlincoln";
  },
  components: {
    PageFrame,
    TextStyles,
  },
};
</script>
    

<style>
</style>