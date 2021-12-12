<template>
  <div>
    <page-frame :horizontal_spacing="true">
      <div class="my-10 journey pagebreak-before">
        <!-- Coding Journey -->
        <text-styles type="primary">My Coding Journey</text-styles>
        <text-styles type="bold small secondary_color"
          >A breif story</text-styles>
        <div class="border-l-8 border-gray-400 pl-1">
          <!-- Coding Journey Block -->
          <text-styles
            type="smaller secondary_color extrabold y_spacing"
            class="pl-5"
            >2013</text-styles
          >
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="smaller primary_color extrabold"
              >Windows CMD</text-styles
            >
            <text-styles type="smaller bold gray"
              >By chance, I started learning Windows CMD Scripts in
              2013.</text-styles
            >
          </ui-area>
          <text-styles
            type="smaller secondary_color extrabold y_spacing"
            class="pl-5"
            >2014</text-styles
          >
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="smaller primary_color extrabold"
              >"YiYuYan" (Chinese version of Visual Basic)
            </text-styles>
            <text-styles type="smaller bold gray"
              >CMD Script was too basic - it's never intended to be a
              <div class="italic inline">real</div>
              programming language. It can't even draw a window on the screen.
              So in order to make a better software, I started my journey of
              learning "YiYuYan" (basically Visual Baisc, but in
              Chinese)</text-styles
            >
          </ui-area>
          <text-styles
            type="smaller secondary_color extrabold y_spacing"
            class="pl-5"
            >2015</text-styles
          >
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="smaller primary_color extrabold"
              >Python 3</text-styles
            >
            <text-styles type="smaller bold gray">
              As my English skills got more advanced, I decided to move on to an
              internationally-recognised high-level programming language. I
              chose Python 3.
            </text-styles>
          </ui-area>
          <text-styles
            type="smaller secondary_color extrabold y_spacing"
            class="pl-5"
            >2016</text-styles
          >
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="smaller primary_color extrabold"
              >Source control became a thing</text-styles
            >
            <text-styles type="smaller bold gray">
              After accidentally deleting my entire project folder, I decided to
              learn Git. I registered a Github account, and started using it to
              manage my projects.
            </text-styles>
          </ui-area>
          <text-styles
            type="smaller secondary_color extrabold y_spacing"
            class="pl-5"
            >2017</text-styles
          >
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="smaller primary_color extrabold"
              >Study in Australia</text-styles
            >
          </ui-area>
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="smaller primary_color extrabold"
              >My first flask project</text-styles
            >
            <text-styles type="smaller bold gray">
              I started using Flask to create my first web application.
            </text-styles>
          </ui-area>
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="smaller primary_color extrabold"
              >Learning HTML + CSS + JavaScript</text-styles
            >
            <text-styles type="smaller bold gray">
              I started learning HTML, CSS, and JavaScript in order to make a UI
              for my Python application.
            </text-styles>
          </ui-area>
          <text-styles
            type="smaller secondary_color extrabold y_spacing"
            class="pl-5"
            >2019</text-styles
          >
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="smaller primary_color extrabold"
              >Progressive Web Apps (PWA) with Vue.js, axios</text-styles
            >
            <text-styles type="smaller bold gray">
              I designed my first PWA app using Vue - Teamer
              <div class="italics text-gray-400 inline">
                (private collaboration).
              </div>
            </text-styles>
          </ui-area>
          <text-styles
            type="smaller secondary_color extrabold y_spacing"
            class="pl-5"
            >2020</text-styles
          >
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="smaller primary_color extrabold"
              >TailwindCSS, VueSax and MongoDB joined the chat. DocumentX was
              born.</text-styles
            >
            <text-styles type="smaller bold gray">
              I started working digitally in 2019 - and by 2020, I had way too
              much documents residing in my Inbox with a random file name. I
              decided to change it by designing my own document management
              system - DocumentX. Read more about this project
              <router-link class="underline" to="/portfolio/documentx"
                >here</router-link
              >
              <div class="italics text-gray-400 inline">
                (view in portfolio).
              </div>
            </text-styles>
          </ui-area>
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="smaller primary_color extrabold"
              >HSC Major Work</text-styles
            >
            <text-styles type="smaller bold gray">
              Nowask.me was born.
              <router-link class="underline" to="/portfolio/nowaskme"
                >Learn more</router-link
              >
              <div class="italics text-gray-400 inline">
                (view in portfolio).
              </div>
            </text-styles>
          </ui-area>

          <text-styles
            type="smaller secondary_color extrabold y_spacing"
            class="pl-5"
            >2021</text-styles
          >
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="smaller primary_color extrabold"
              >The era of Swift</text-styles
            >
            <text-styles type="smaller bold gray">
              After enrolling in the Apple Developer Program, I started learning
              Swift.
            </text-styles>
          </ui-area>
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="smaller primary_color extrabold"
              >DocumentX for iOS &amp; MacOS</text-styles
            >
            <text-styles type="smaller bold gray">
              Using the same sets of APIs, as a way to learn Swift, I created
              DocumentX for iOS &amp; MacOS. Learn more about this project
              <router-link class="underline" to="/portfolio/documentx-ios"
                >here</router-link
              >
              <div class="italics text-gray-400 inline">
                (view in portfolio).
              </div>
            </text-styles>
          </ui-area>
          <ui-area bg="bg-gray-100 max-w-4xl">
            <text-styles type="smaller primary_color extrabold"
              >This website was born!
              <a href="https://github.com/yyjlincoln/yyjlincoln.com">
                <box-icon type="logo" name="github" class="mr-1"></box-icon>
              </a>
            </text-styles>
          </ui-area>
          <text-styles
            type="smaller secondary_color extrabold y_spacing"
            class="pl-5"
            >The future</text-styles
          >

          <text-styles
            class="pl-5 text-center"
            type="primary_color medium extrabold"
          >
            The future is exciting.</text-styles
          >
          <text-styles
            class="pl-5 text-center"
            type="secondary_color medium extrabold"
          >
            Let's explore it together, shall we?</text-styles
          >

          <!-- - I taught myself how to code in Windows CMD (2013), "YiYuYan" language (Chinese version of Visual Basic; 2014-2015), Python 3 (with frameworks such as Flask; 2015-cont), Web (without frameworks, 2017-2018), Web PWA (Vue + Tailwind + Axios; 2019-cont), Swift (basics, actively learning; 2021-cont). -->
        </div>
      </div>
    </page-frame>
  </div>
</template>

<script>
import pageFrame from "../../components/page-frame.vue";
import TextStyles from "../../components/text-styles.vue";
import UiArea from "../../components/ui-area.vue";
export default {
  components: { pageFrame, TextStyles, UiArea },
};
</script>

<style>
</style>