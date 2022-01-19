<template>
  <div>
    <page-frame :horizontal_spacing="true">
      <div class="mt-10">
        <text-styles type="primary" class="title">Curriculum Vitae</text-styles>
        <text-styles type="secondary" class="title"
          >Yijun "Lincoln" YAN</text-styles
        >
        <text-styles type="secondary_color small bold" class="title"
          >Accurate as of October 3rd, 2021.</text-styles
        >
        <ui-area
          innerclass="flex flex-col flex-nowrap sm:flex-row justify-center md:justify-start"
          class="no-print"
        >
          <div class="flex flex-col justify-center">
            <div class="mx-auto text-center pr-4">
              <text-styles type="large"> 🖨️ </text-styles>
            </div>
          </div>
          <div class="flex flex-col no-print">
            <text-styles type="primary_color extrabold smaller"
              >This page is printer-friendly</text-styles
            >
            <text-styles type="secondary_color bold smallerer"
              >Feel free to print this document.
            </text-styles>
          </div>
        </ui-area>
        <div>
          <!-- Section I -->
          <ui-area>
            <text-styles type="primary_color extrabold medium"
              >Personal Information</text-styles
            >
            <div class="mt-2">
              <ui-cv-entry label="Name">
                <text-styles type="smaller bold">Yijun YAN</text-styles>
              </ui-cv-entry>
              <ui-cv-entry label="Known as">
                <text-styles type="smaller bold">Lincoln YAN</text-styles>
              </ui-cv-entry>
            </div>
          </ui-area>
        </div>
        <div>
          <!-- Section II -->
          <ui-area>
            <text-styles type="primary_color extrabold medium"
              >Education &amp; Academic Achievements</text-styles
            >

            <div class="mt-2">
              <ui-cv-entry label="Highest-Level Education Completed">
                <text-styles type="smaller bold"
                  >Year 12 (HSC), Class of 2021.</text-styles
                >
              </ui-cv-entry>
              <ui-cv-entry label="School">
                <text-styles type="smaller bold"
                  >Killarney Heights High School</text-styles
                >
              </ui-cv-entry>
              <ui-cv-entry label="Summer School">
                <text-styles type="smaller bold"
                  >National Computer Science School (NCSS) 2020, Embedded
                  Stream</text-styles
                >
              </ui-cv-entry>
              <ui-cv-entry label="HSC &amp; ATAR">
                <text-styles type="smaller bold"
                  >First in Course (FIC) in Software Design &amp;
                  Development</text-styles
                >
                <text-styles type="smaller bold"
                  >All rounder: Maths Extension 1, Maths Extension 2, Physics,
                  Chemistry, Software Design &amp; Development</text-styles
                >
              </ui-cv-entry>
              <ui-cv-entry label="Academic Achievements">
                <div v-for="achievement in achievements" :key="achievement">
                  <text-styles type="smaller bold">{{
                    achievement
                  }}</text-styles>
                </div>
              </ui-cv-entry>
            </div>
          </ui-area>
        </div>
        <div>
          <!-- Section III -->
          <ui-area>
            <text-styles type="primary_color extrabold medium"
              >Leadership, Extracurricular &amp; Community Activities
            </text-styles>

            <div class="mt-2">
              <ui-cv-entry label="Leadership Positions">
                <div v-for="leadership in leaderships" :key="leadership">
                  <text-styles type="smaller bold">{{
                    leadership
                  }}</text-styles>
                </div>
              </ui-cv-entry>
            </div>
          </ui-area>
        </div>
        <div>
          <!-- Section II -->
          <ui-area>
            <text-styles type="primary_color extrabold medium"
              >Skills</text-styles
            >
            <div class="mt-2">
              <ui-cv-entry label="Coding">
                <text-styles type="smaller bold"
                  >- Decent level of knowledge of Python3</text-styles
                >
                <text-styles type="smaller bold"
                  >- Familiar with Web Development (with Vue 2.x) and API-based
                  application development</text-styles
                >
                <text-styles type="smaller bold"
                  >- Have essential knowledge of HTML, CSS &amp;
                  JavaScript</text-styles
                >
                <text-styles type="smaller bold">- Swift learner</text-styles>
                <text-styles type="smaller bold"
                  >- Familiar with protocols such as HTTP, TCP/IP and concepts
                  such as Object-Relational Mapping (ORM)</text-styles
                >
              </ui-cv-entry>
              <ui-cv-entry label="Provide First Aid">
                <text-styles type="smaller bold"
                  >- Provide cardiopulmonary resuscitation
                  (HLTAID009)</text-styles
                >
                <text-styles type="smaller bold"
                  >- Provide basic emergency life support
                  (HLTAID010)</text-styles
                >
                <text-styles type="smaller bold"
                  >- Provide First Aid (HLTAID011)</text-styles
                >
              </ui-cv-entry>
            </div>
          </ui-area>
        </div>
      </div>
    </page-frame>
  </div>
</template>

<script>
import gsap from "gsap";
import pageFrame from "../../components/page-frame.vue";
import TextStyles from "../../components/text-styles.vue";
import UiArea from "../../components/ui-area.vue";
import UiCvEntry from "../../components/ui-cv-entry.vue";
export default {
  components: { pageFrame, TextStyles, UiArea, UiCvEntry },
  mounted() {
    this.timeline = gsap
      .timeline({ defaults: { ease: "power3.out", stagger: 0.1 } })
      .from(".title", {
        y: 100,
        opacity: 0,
        duration: 1,
      })
      .from(
        ".ui-area",
        {
          y: 100,
          opacity: 0,
          duration: 1,
        },
        "<"
      );
  },
  data: () => ({
    timeline: null,
    achievements: [
      "Year 12, 2021:",
      "- First Place in English EAL/D",
      "- First Place in Mathematics Advanced",
      "- First Place in Mathematics Extension 2",
      "- First Place in Software Design & Development",
      "- Second Place in Chemistry",
      "- Second Place in Physics",
      "- Second Place in Mathematics Extension 1",
      "Note: Year 12 awards are not finalised. Expecting more from the award ceremony on 13/Dec/2021.",
      "Year 11, 2020:",
      "- Student Excellence",
      "- Lions Club of Frenchs Forest Award for Outstanding Achievement in Science",
      "- P&C Award for an International Student who embraces the School values",
      "- First Place in Chemistry",
      "- First Place in Physics",
      "- First Place in English EAL/D",
      "- First Place in Chinese and Literature",
      "- Second in Software Design and Development",
      "- Second in Advanced Mathematics",
      "- Second in Mathematics Extension 1",
    ],
    leaderships: [
      "- SRC (2018-2020)",
      "- Prefect (2020-2021)",
      "",
      "It's always been important & nice to have my voice in the decision-making of our school. As an international student, being in a leadership position also allowed me to listen & communicate international students' concerns to the school management.",
      "",
      "While being an SRC member & Prefect, I've participated in the organisation of lots of events such as the NAIDOC Week (2021). I've played an important role as:",

      "- Organiser of the Multicultural Festival (Nov 2019)",
      "- Co-Organiser of Lunar New Year Celebrations (Feb 2021)",

      "Those activities allowed me to raise cultural awareness within the school while enriching student lives.",
    ],
  }),
  async beforeRouteLeave(to, from, next) {
    await this.$func.reverseAnimation(this);
    next();
  },
};
</script>

<style>
</style>