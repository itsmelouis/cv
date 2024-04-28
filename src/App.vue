<script lang="ts" setup>
import { provide } from "vue";

import { useHead } from "@unhead/vue";
import { useFetch } from "@vueuse/core";

import Me from "@/components/Me.vue";
import About from "@/components/About.vue";
import Experience from "@/components/Experience.vue";
import Education from "@/components/Education.vue";
import Skills from "@/components/Skills.vue";
import Languages from "@/components/Languages.vue";
import Online from "@/components/Online.vue";
// import Certifications from "@/components/Certifications.vue";

const gist = "itsmelouis/9e1747cc5b704021a9af1eea5590a750";

const { data: resume } = useFetch(
  `https://gist.githubusercontent.com/${gist}/raw/resume.json`
)
  .get()
  .json();

provide("resume", resume);

useHead({
  title: "Louis Floquet - CV",
  htmlAttrs: {
    class: "bg-[url('/images/left-bg.jpg')]",
  },
});
</script>

<template>
  <div class="page break">
    <div v-if="resume" class="flex flex-row overflow-hidden bg-effect">
      <div class="container w-[70%]">
        <Me />
        <About />
        <Experience />
        <!-- <Certifications /> -->
        <Education />
        <Online />
      </div>
      <div
        class="bg-[url(/images/right-bg.jpg)] bg-cover bg-[#101926] text-white w-[30%]"
      >
        <Skills />
        <Languages />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bg-effect {
  background: rgba(0, 0, 0, 0)
    radial-gradient(
      64.9% 34.2308% at 0% 0%,
      rgba(147, 196, 253, 0.275) 0%,
      rgba(255, 255, 255, 0) 100%
    )
    repeat scroll 0% 0%;
}

.page {
  width: 210mm;
  min-height: 297mm;

  @apply relative z-50 grid shadow;
  @apply print:shadow-none;

  &.break::after {
    content: "A4 Page Break";
    top: calc(297mm - 19px);

    @apply absolute w-full border-b border-dashed border-white;
    @apply flex items-end justify-end pr-2 pb-0.5 font-inter text-xs font-medium text-white;
    @apply print:hidden;
  }
}
</style>
