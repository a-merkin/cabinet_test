<template>
  <div class="block default-inner-gap width100">
    <div class="flex column gap-base">
      <label for="yearSelect">Выберите год</label>
      <Select id="yearSelect" v-model="selectedYear.year" name="year" :items="yearsItems" />
      <div class="flex justify-content-between width100">
        <Button color="purple" size="large" @click="updateParams">Показать</Button>
        <Button size="large" @click="resetParams">Сбросить</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { Select } from "@/ui/select";
import type { SelectItems } from "@/ui/select";
import { Button } from "@/ui/button";

import type { YearParams } from "./index.ts";

const emit = defineEmits(["updateParams"]);

const yearsItems: SelectItems = [
  {
    title: "2023",
    value: "2023"
  },
  {
    title: "2022",
    value: "2022"
  },
  {
    title: "2021",
    value: "2021"
  }
];

const selectedYear: Ref<YearParams> = ref({
  year: ""
});

const updateParams = () => {
  emit("updateParams", selectedYear.value);
};

const resetParams = () => {
  selectedYear.value.year = "";
  emit("updateParams", selectedYear.value);
};
</script>

<style scoped></style>
