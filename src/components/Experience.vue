<script lang="ts" setup>
import { inject } from "vue";
import Divider from "@/components/Divider.vue";
import Badge from "@/components/Badge.vue";
import { formatDate } from "@/helpers/formatDate";

import type { Resume } from "@/types/resume";

const resume = inject<Resume>("resume");
</script>

<template>
  <div class="mt-5 ml-5" v-if="resume?.work.length">
    <div class="pb-2 text-sm font-normal text-slate-500 font-dm-sans">
      Expériences
    </div>
    <div class="grid grid-cols-1 gap-4">
      <div
        v-for="(
          {
            name,
            position,
            startDate,
            endDate,
            summary,
            highlights,
            skills,
            url,
          },
          key
        ) in resume.work"
        :key="key"
      >
        <div
          class="flex flex-row items-baseline justify-start text-sm font-inter"
        >
          <a
            :href="url"
            class="font-medium border-b border-dashed cursor-pointer border-black/50 font-inter"
          >
            {{ name }},
          </a>
          <p class="ml-1 font-normal text-slate-700">{{ position }}</p>
        </div>
        <h4 class="text-xs font-medium text-slate-500 font-dm-sans">
          {{
            startDate ? formatDate(startDate) : "Unknown"
          }}
          -
          {{ endDate ? formatDate(endDate) : "Present" }}
        </h4>
        <p
          v-if="summary"
          class="mt-2 text-xs font-normal text-slate-700 font-inter"
        >
          {{ summary }}
        </p>
        <ul
          v-if="highlights"
          class="text-xs font-medium text-white list-disc font-inter"
        >
          <li v-for="highlight of highlights" class="space-x-2 text-slate-600">
            {{ highlight }}
          </li>
        </ul>
        <p
          v-if="skills"
          class="inline-block mt-2 text-xs font-medium text-slate-700 font-inter"
        >
          Compétences:
          <p
            v-for="(skill, key) of skills" :key="key"
            class="inline-block font-normal text-slate-700"
          >
            {{ skill }}<img src="/icons/Dot.svg" :class="{'hidden': key === skills.length - 1}" class="inline w-3"/>
          </p>
        </p>
      </div>
    </div>
    <Divider />
  </div>
</template>
