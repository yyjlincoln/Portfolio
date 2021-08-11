<template>
  <div>
    <div class="relative flex flex-col h-fit min-h-screen">
      <router-view></router-view>
    </div>
    <div class="bg-gray-100 px-8 py-8 text-gray-600">
      <!-- Footer -->
      <div class="my-2 flex flex-row">
        <div class="text-xl font-bold">Lincoln Yan</div>
        <div class="mx-1">|</div>
        <div class="text-xl font-bold">@yyjlincoln</div>
      </div>
      <div class="text-md font-bold flex flex-row">
        <a
          href="https://github.com/yyjlincoln/"
          class="mx-1"
          @click="ui.icons.github = true"
        >
          <box-icon type="logo" name="github" :class="ui.icons.github ? 'animate-pulse' : ''"></box-icon>
        </a>
        <a
          href="https://www.linkedin.com/in/yyjlincoln/"
          class="mx-1"
          @click="ui.icons.linkedin = true"
          ><box-icon name="linkedin" type="logo" :class="ui.icons.linkedin ? 'animate-pulse' : ''"></box-icon
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    ui: {
      icons: {
        github: false,
        linkedin: false,
      },
    },
  }),
  methods: {
  },
};
</script>

<style>
</style>