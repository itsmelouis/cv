<script lang="ts" setup>
import { inject } from "vue";

import { formatDate } from "@/helpers/formatDate";
import type { Resume } from "@/types/resume";

const resume = inject<Resume>("resume");
</script>

<template>
  <div class="mt-5 ml-5" v-if="resume?.certificates.length">
    <div class="pb-2 text-sm font-normal text-slate-500 font-dm-sans">
      Certificats
    </div>
    <div class="grid grid-cols-1 gap-4">
      <div
        v-for="(
          { name, url, date, issuer, summary, highlights }, key
        ) in resume?.certificates"
        :key="key"
      >
        <div
          class="flex flex-row items-baseline justify-start text-base font-inter"
        >
          <p class="text-sm font-medium font-inter">{{ name }},</p>
          <a
            class="ml-1 text-xs font-medium font-inter text-slate-700"
            target="_blank"
            :href="url"
            >{{ issuer }}</a
          >
        </div>
        <p class="text-xs font-medium text-slate-500 font-dm-sans">
          Délivré en {{ formatDate(date) }}
        </p>
        <p class="mt-2 text-xs font-normal text-slate-700 font-inter">
          {{ summary }}
        </p>
        <ul class="text-xs font-medium text-white list-disc font-inter">
          <li v-for="highlight of highlights" class="space-x-2 text-slate-600">
            {{ highlight }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
