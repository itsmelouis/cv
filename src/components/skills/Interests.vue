<script lang="ts" setup>
import { inject, type Ref } from "vue";
import type { Resume } from "@/types/resume";

const resume = inject<Ref<Resume>>("resume");
const [{ name, keywords }] = resume!.value.skills.filter((skill) =>
  skill.name.includes("Interests")
);
</script>

<template>
  <div class="pb-5 text-sm font-medium text-slate-400 font-inter">
    Centre d'intérêts
    <ul class="text-xs font-medium text-white list-disc">
      <li v-for="(keyword, key) of keywords" :key="key" class="space-x-2">
        {{ (keyword as any).name }}
      </li>
    </ul>
  </div>
</template>
