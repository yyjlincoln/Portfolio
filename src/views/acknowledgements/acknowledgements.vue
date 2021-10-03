<template>
  <div>
    <page-frame :horizontal_margin="true">
      <div class="my-20">
        <text-styles type="primary">Open-source Software Acknowledgements</text-styles>
        <text-styles type="secondary_color y_spacing medium extrabold">This website uses the following open-source softwares: </text-styles>
        <textarea v-if="loaded" v-model="license" disabled class="w-full h-screen rounded-md"></textarea>
        <div v-else>
          <text-styles type="secondary_color y_spacing smaller bold">Loading...</text-styles>
        </div>
      </div>
      <ui-area>
        <text-styles type="primary_color smaller bold">
          Download a copy
        </text-styles>
        <text-styles type="smaller bold secondary_color">
          You can download a copy of the acknowledgement <a class="underline" :href="LICENSE_URL">here</a>. (or copy {{LICENSE_URL}}).
        </text-styles>
      </ui-area>
    </page-frame>
  </div>
</template>

<script>
import axios from 'axios'
import PageFrame from "../../components/page-frame.vue";
import TextStyles from '../../components/text-styles.vue';
import UiArea from '../../components/ui-area.vue';
export default {
  components: {
    PageFrame,
    TextStyles,
    UiArea
  },
  data: ()=>({
    license: "",
    loaded: false,
    LICENSE_URL: "https://static.nowask.me/yyjlincoln-disclaimer.txt"
  }),
  mounted(){
    axios.get(this.LICENSE_URL).then((res)=>{
      this.license = res.data;
      this.loaded = true
    }).catch((err)=>{
      console.log(err)
      this.license = "Error: Could not load the disclaimer."
      this.loaded = true
    })

  }
};
</script>
    

<style>
</style>