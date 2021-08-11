<template>
  <div>
    <!-- Root -->
    <div class="flex flex-col pt-20 sm:mt-0 sm:flex-row min-h-screen h-fit justify-space-between">
      <div
        class="
          flex flex-col
          h-fit
          justify-center
          ml-10
          sm:ml-20
          md:ml-40
          mr-10
        "
      >
        <!-- First full screen -->
        <div>
          <div class="text-4xl sm:text-5xl md:text-6xl font-extrabold">
            <!-- Title -->
            <div style="color: #4cb963">Hello,</div>
            <div style="color: #157f1f">I'm Lincoln.</div>
          </div>
          <div
            class="text-lg sm:text-xl md:text-2xl font-extrabold mt-4 md:mt-0"
          >
            <div class="md:mt-4" style="color: #84cf95">
              A Year 12 student at Killarney Heights High School, Australia
            </div>
            <div style="color: #84cf95">Python &amp; Javascript Developer</div>
            <div style="color: #84cf95">Technology Enthusiast</div>
          </div>
        </div>
        <div class="mt-8 flex flex-col sm:flex-row">
          <!-- Buttons -->
          <router-link to="/portfolio" class="ml-0 mx-3">
            <div
              class="rounded-md flex px-5 py-3 max-w-xl font-extrabold"
              style="background-color: #3fab52; color: #e2f3e8"
            >
              <box-icon
                type="solid"
                name="right-arrow-circle"
                color="#e2f3e8"
                class="mr-1"
              ></box-icon
              >My Portfolio
            </div>
          </router-link>
          <a
            href="mailto:lincoln@yyjlincoln.com"
            class="mx-3 ml-0 sm:ml-3 mt-3 sm:mt-0"
          >
            <div
              class="rounded-md flex px-5 py-3 font-extrabold"
              style="background-color: #e2f3e8; color: #3fab52"
            >
              <box-icon
                type="solid"
                name="right-arrow-circle"
                color="#3fab52"
                class="mr-1"
              ></box-icon
              >Contact Me
            </div>
          </a>
        </div>
      </div>
      <div class="mx-auto my-10 sm:mx-10 flex flex-col justify-center flex sm:hidden md:flex">
        <div class="w-fit h-fit">
          <img class="w-80 h-80 object-contain" src="@/assets/logo.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>