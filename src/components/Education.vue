<script lang="ts" setup>
import { inject } from "vue";
import { formatDate } from "@/helpers/formatDate";

import type { Resume } from "@/types/resume";

const resume = inject<Resume>("resume");
</script>

<template>
  <div class="mt-5 ml-5" v-if="resume?.education.length">
    <div class="pb-2 text-sm font-normal text-slate-500 font-dm-sans">
      Formations
    </div>
    <div class="grid grid-cols-1 gap-4">
      <div v-for="(
          { area, startDate, endDate, description, institution, studyType }, key
        ) in resume?.education" :key="key">
        <h4 class="text-sm font-medium font-inter">{{ institution }}</h4>
        <h4 class="text-xs font-medium text-slate-400 font-dm-sans">
          {{ studyType }} {{ area?.length ? "-" : "" }} {{ area }}
        </h4>
        <h4 class="text-xs font-medium text-slate-500 font-dm-sans">
          {{
            startDate ? formatDate(startDate) : "inconnue"
          }}
          -
          {{ endDate ? formatDate(endDate) : "aujourd'hui" }}
        </h4>
        <p class="mt-2 text-xs font-normal text-slate-700 font-inter">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
