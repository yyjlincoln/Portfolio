<template>
  <div>
    <page-frame :horizontal_margin="true" :reserve_nav_bar_space="true">
      <!-- background-image: url('https://static.nowask.me/yyjlincoln/documentx-logo.png') -->
      <div class="mt-28">
        <div>
          <!-- Heading -->
          <text-styles type="larger primary_color extrabold"
            >Portfolio</text-styles
          >
          <text-styles type="large secondary_color extrabold"
            >A list of projects that I've made.</text-styles
          >
        </div>
        <ui-area
          innerclass="flex flex-col flex-nowrap sm:flex-row justify-center md:justify-start"
        >
          <div class="flex flex-col justify-center">
            <div class="mx-auto text-center pr-4">
              <text-styles type="large"> 👨🏻‍💻 </text-styles>
            </div>
          </div>
          <div class="flex flex-col">
            <text-styles type="primary_color extrabold small"
              >I learn coding by making projects</text-styles
            >
            <text-styles type="secondary_color bold smaller"
              >Therefore the quality of code in those projects do not represent
              my current ability - including recent commits in old projects. It
              would take a long time to fix them and time is what I don't have
              as an HSC student.</text-styles
            >
          </div>
        </ui-area>
      </div>
      <div>
        <!-- Project Cards -->
        <text-styles type="secondary" class="text-center my-8 md:my-20">
          My Projects
        </text-styles>
        <div class="flex flex-col justify-center md:flex-row flex-wrap w-full">
          <div v-for="project in projects" :key="project.name">
            <project-card :project="project"></project-card>
          </div>
        </div>
      </div>
    </page-frame>
  </div>
</template>

<script>
import PageFrame from "../../components/page-frame.vue";
import ProjectCard from "../../components/project-card.vue";
import TextStyles from "../../components/text-styles.vue";
import UiArea from "../../components/ui-area.vue";
// import UiPageBlock from "../../components/ui-page-block.vue";
export default {
  components: { PageFrame, TextStyles, UiArea, ProjectCard },
  data: () => ({
    projects: [
      {
        name: "Nowask.me",
        description: ["Anonymous Q&A Platform", "SDD HSC Major Work"],
        link: "/portfolio/nowaskme",
        image: "https://static.nowask.me/yyjlincoln/nam-logo.png",
        github: "",
        nametype: "nam_primary_color",
        descriptiontype: "nam_secondary_color",
        bg: "",
        bgstyle: "background: linear-gradient(90deg,#DBDAF9,#EBD5EB)",
      },
      {
        name: "DocumentX DMS",
        description: [
          "A document management system. Manages scanned documents.",
          "Python3 & Vue PWA",
        ],
        link: "/portfolio/documentx",
        image: "https://static.nowask.me/yyjlincoln/documentx-logo.png",
        github: "",
        nametype: "documentx_primary_color",
        descriptiontype: "documentx_secondary_color",
        bg: "",
        bgstyle: "background-color: #EBF2FF",
      },
      {
        name: "DocumentX for iOS, iPadOS & MacOS",
        description: ["A document management system for students."],
        link: "/portfolio/documentx-ios",
        image: "https://static.nowask.me/yyjlincoln/documentx-ios-logo.png",
        github: "",
        nametype: "white",
        descriptiontype: "white",
        bg: "",
        bgstyle: "background-color: #0e141b",
      },
      {
        name: "COVID Wishes",
        description: [
          "Make a wish & Get it when COVID is over. Or simply write something to your future self.",
          "Coming early 2021.",
        ],
        link: "/portfolio/wishes",
        github: "",
        nametype: "primary_color",
        descriptiontype: "secondary_color",
        bg: "",
        bgstyle: "background-color: #e2f3e8",
      },

    ],
  }),
};
</script>

<style>
</style>