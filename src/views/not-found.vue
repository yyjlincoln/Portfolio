<template>
  <div>
    <div class="flex flex-col min-h-screen h-fit justify-center">
      <div class="mx-auto">
        <div class="text-xl sm:text-2xl md:text-3xl font-extrabold">
          <!-- Title -->

          <div style="color: #4cb963" class="flex flex-row justify-center">
            <div>
              <div>Sorry, an error occured</div>
              <div>We'll attempt to bring you back to the homepage.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$router.push("/");
  },
};
</script>

<style>
</style>