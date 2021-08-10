<template>
  <div>
    <div class="flex flex-col min-h-screen h-fit justify-center">
      <div class="mx-auto">
        <div class="text-xl sm:text-2xl md:text-3xl font-extrabold">
          <!-- Title -->
          <div style="color: #4cb963" class="flex flex-row justify-center">
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <div>Redirecting you to LinkedIn...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.location.href = "https://linkedin.com/in/yyjlincoln";
  },
};
</script>

<style>
</style>